import React, { useState } from "react";
import { Fish } from "../api/fishApi";

interface Props {
    onAdd: (fishValues: Omit<Fish, "id">) => void;
}

const FishForm = ({ onAdd }: Props) => {
    const [fishValues, setFishValues] = useState<Omit<Fish, "id">>({
        name: "",
        species: "",
        length: 0,
        weight: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFishValues((prev) => ({
            ...prev,
            [name]: name === "length" || name === "weight" ? Number(value) : value,
        }));
    };

    const handleSubmit = () => {
        if (!fishValues.name.trim() || !fishValues.species.trim()) return;
        onAdd(fishValues);
        setFishValues({ name: "", species: "", length: 0, weight: 0 });
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <h2>Legg til ny fisk</h2>
            <input
                type="text"
                name="name"
                placeholder="Navn"
                value={fishValues.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="species"
                placeholder="Art"
                value={fishValues.species}
                onChange={handleChange}
            />
            <input
                type="number"
                name="length"
                placeholder="Lengde (cm)"
                value={fishValues.length}
                onChange={handleChange}
            />
            <input
                type="number"
                name="weight"
                placeholder="Vekt (kg)"
                value={fishValues.weight}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Legg til</button>
        </div>
    );
};

export default FishForm;
