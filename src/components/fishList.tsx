import React, { useState } from "react";
import { Fish } from "../api/fishApi";

interface FishListProps {
    fishList: Fish[];
    onRemove: (id: number) => void;
    onUpdate: (id: number, fish: Omit<Fish, "id">) => void;
    rowErrors: Record<number, string>;
}

const FishList = ({ fishList, onRemove, onUpdate, rowErrors }: FishListProps) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editValues, setEditValues] = useState<Omit<Fish, "id">>({
        name: "",
        species: "",
        length: 0,
        weight: 0,
    });

    const startEditing = (fish: Fish) => {
        setEditingId(fish.id);
        setEditValues({
            name: fish.name,
            species: fish.species,
            length: fish.length,
            weight: fish.weight,
        });
    };

    const cancelEditing = () => {
        setEditingId(null);
    };

    const handleSave = (id: number) => {
        onUpdate(id, editValues);
        setEditingId(null);
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <h2 style={{ textAlign: "center" }}>Fiskeregister</h2>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <table
                    style={{
                        width: "80%",
                        borderCollapse: "collapse",
                        marginTop: "10px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                >
                    <thead>
                    <tr style={{ backgroundColor: "#f0f0f0" }}>
                        <th style={thStyle}>Navn</th>
                        <th style={thStyle}>Art</th>
                        <th style={thStyle}>Lengde (cm)</th>
                        <th style={thStyle}>Vekt (kg)</th>
                        <th style={thStyle}>Handlinger</th>
                        {Object.keys(rowErrors).length > 0 && (
                            <th style={thStyle}>Endringsstatus</th>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {fishList.map((fish) => (
                        <tr key={fish.id} style={{ borderBottom: "1px solid #ddd" }}>
                            {editingId === fish.id ? (
                                <>
                                    <td style={tdStyle}>
                                        <input
                                            type="text"
                                            value={editValues.name}
                                            onChange={(e) =>
                                                setEditValues({ ...editValues, name: e.target.value })
                                            }
                                            style={inputStyle}
                                        />
                                    </td>
                                    <td style={tdStyle}>
                                        <input
                                            type="text"
                                            value={editValues.species}
                                            onChange={(e) =>
                                                setEditValues({ ...editValues, species: e.target.value })
                                            }
                                            style={inputStyle}
                                        />
                                    </td>
                                    <td style={tdStyle}>
                                        <input
                                            type="number"
                                            value={editValues.length}
                                            onChange={(e) =>
                                                setEditValues({
                                                    ...editValues,
                                                    length: Number(e.target.value),
                                                })
                                            }
                                            style={inputStyle}
                                        />
                                    </td>
                                    <td style={tdStyle}>
                                        <input
                                            type="number"
                                            value={editValues.weight}
                                            onChange={(e) =>
                                                setEditValues({
                                                    ...editValues,
                                                    weight: Number(e.target.value),
                                                })
                                            }
                                            style={inputStyle}
                                        />
                                    </td>
                                    <td style={tdStyle}>
                                        <button style={saveBtn} onClick={() => handleSave(fish.id)}>
                                            Lagre
                                        </button>
                                        <button style={cancelBtn} onClick={cancelEditing}>
                                            Avbryt
                                        </button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td style={tdStyle}>{fish.name}</td>
                                    <td style={tdStyle}>{fish.species}</td>
                                    <td style={tdStyle}>{fish.length}</td>
                                    <td style={tdStyle}>{fish.weight}</td>
                                    <td style={tdStyle}>
                                        <button style={editBtn} onClick={() => startEditing(fish)}>
                                            Rediger
                                        </button>
                                        <button style={removeBtn} onClick={() => onRemove(fish.id)}>
                                            Slett
                                        </button>
                                    </td>
                                    <td>
                                        {rowErrors[fish.id] && (
                                            <p style={{ color: "red" }}>{rowErrors[fish.id]}</p>
                                        )}
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const thStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
};

const tdStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    padding: "8px",
};

const inputStyle: React.CSSProperties = {
    padding: "6px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
};

const buttonBase: React.CSSProperties = {
    padding: "6px 10px",
    marginRight: "5px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
};

const saveBtn = { ...buttonBase, backgroundColor: "#28a745", color: "#fff" };
const cancelBtn = { ...buttonBase, backgroundColor: "#6c757d", color: "#fff" };
const editBtn = { ...buttonBase, backgroundColor: "#007bff", color: "#fff" };
const removeBtn = { ...buttonBase, backgroundColor: "#dc3545", color: "#fff" };

export default FishList;
