import React, { useState } from "react";
import { Fish } from "../api/fishApi";
import { FishErrors, validateFish } from "../validation/fishValidation";

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

    const [errors, setErrors] = useState<FishErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFishValues((prev) => ({
            ...prev,
            [name]: name === "length" || name === "weight" ? Number(value) : value,
        }));
    };

    const handleSubmit = () => {
        const newErrors = validateFish(fishValues);
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        onAdd(fishValues);
        setFishValues({ name: "", species: "", length: 0, weight: 0 });
        setErrors({});
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                margin: "20px 0",
            }}
        >
            <div
                style={{
                    padding: "20px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    backgroundColor: "#fff",
                    width: "300px",
                }}
            >
                <h2 style={{ textAlign: "center" }}>Legg til ny fisk</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Navn"
                    value={fishValues.name}
                    onChange={handleChange}
                    style={{ width: "100%", marginBottom: "8px", padding: "6px" }}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

                <input
                    type="text"
                    name="species"
                    placeholder="Art"
                    value={fishValues.species}
                    onChange={handleChange}
                    style={{ width: "100%", marginBottom: "8px", padding: "6px" }}
                />
                {errors.species && <p style={{ color: "red" }}>{errors.species}</p>}

                <input
                    type="number"
                    name="length"
                    placeholder="Lengde (cm)"
                    value={fishValues.length}
                    onChange={handleChange}
                    style={{ width: "100%", marginBottom: "8px", padding: "6px" }}
                />
                {errors.length && <p style={{ color: "red" }}>{errors.length}</p>}

                <input
                    type="number"
                    name="weight"
                    placeholder="Vekt (kg)"
                    value={fishValues.weight}
                    onChange={handleChange}
                    style={{ width: "100%", marginBottom: "8px", padding: "6px" }}
                />
                {errors.weight && <p style={{ color: "red" }}>{errors.weight}</p>}

                <button
                    onClick={handleSubmit}
                    style={{
                        width: "100%",
                        padding: "8px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Legg til
                </button>
            </div>
        </div>
    );
};

export default FishForm;
