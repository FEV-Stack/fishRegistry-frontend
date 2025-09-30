import React, {useState, useEffect} from "react";
import {fetchFish, addFish, Fish, removeFish, updateFish} from "../api/fishApi";
import FishForm from "../components/fishForm";
import FishList from "../components/fishList";
import FishInfo from "../components/fishInfo";


const Fishes = () => {
    const [fishList, setFishList] = React.useState<Fish[]>([]);
    const [addError, setAddError] = useState<string | null>(null);
    const [rowErrors, setRowErrors] = useState<Record<number, string>>({});
    const [loadError, setLoadError] = useState<string | null>(null);



    const handleAddFish = async (addedFish: Omit<Fish, "id">) => {
        try {
            await addFish(addedFish);
            setAddError(null);
            loadFish();
        } catch (error: any) {
            setAddError(error.message);
        }
    };

    const handleUpdateFish = async (id: number, updatedFish: Omit<Fish, "id">) => {
        try {
            await updateFish(id, updatedFish);
            setRowErrors((prev) => {
                const { [id]: _, ...rest } = prev;
                return rest;
            });
            loadFish();
        } catch (error: any) {
            setRowErrors((prev) => ({ ...prev, [id]: error.message }));
        }
    };

    const handleRemoveFish = async (id: number) => {
        try {
            await removeFish(id);
            setRowErrors((prev) => {
                const { [id]: _, ...rest } = prev;
                return rest;
            });
            loadFish();
        } catch (error: any) {
            setRowErrors((prev) => ({ ...prev, [id]: error.message }));
        }
    };

    const loadFish = async () => {
        try {
            const fish = await fetchFish();
            setFishList(fish);
            setLoadError(null);
        } catch (error: any) {
            setLoadError(error.message);
        }
    };


    useEffect(() => {
        loadFish();
    }, []);

    return (
        <div   style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        }}>
            <h1   style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
            }}>Fiskedata</h1>
            <FishForm onAdd={handleAddFish} />
            {loadError && <p style={{ color: "red" }}>{loadError}</p>}
            {loadError && <p style={{ color: "red" }}>{addError}</p>}
            <FishList fishList={fishList} onRemove={handleRemoveFish} onUpdate={handleUpdateFish} rowErrors={rowErrors}
            />
            <FishInfo title={"Antall fisk i fiskeregisteret"} fishList={fishList}/>
        </div>
    );
}

export default Fishes;