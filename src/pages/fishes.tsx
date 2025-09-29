import React, {useState, useEffect} from "react";
import {fetchFish, addFish, Fish, removeFish, updateFish} from "../api/fishApi";
import FishForm from "../components/fishForm";
import FishList from "../components/fishList";
import FishInfo from "../components/fishInfo";


const Fishes = () => {
    const [fishList, setFishList] = React.useState<Fish[]>([]);
    const [addedFishThisSession, setAddedFishThisSession] = React.useState(0);


    const handleAddFish = async (addedFish: Omit<Fish, "id">) => {
        await addFish(addedFish);
        setAddedFishThisSession(prevState => prevState + 1);
        loadFish();
    };

    const handleRemoveFish = async (id: number) => {
        await removeFish(id);
        loadFish();
    };

    const handleUpdateFish = async (id: number, updatedFish: Omit<Fish, "id">) => {
        await updateFish(id, updatedFish);
        loadFish();
    }

    const loadFish = async () => {
        const fish = await fetchFish();
        setFishList(fish);
    };

    useEffect(() => {
        loadFish();
    }, []);

    return (
        <div>
            <h1>Fiskedata</h1>
            <FishForm onAdd={handleAddFish} />
            <FishList fishList={fishList} onRemove={handleRemoveFish} onUpdate={handleUpdateFish}/>
            <FishInfo addedClicks={addedFishThisSession} title={"Number Of Fish"} fishList={fishList}/>
        </div>
    );
}

export default Fishes;