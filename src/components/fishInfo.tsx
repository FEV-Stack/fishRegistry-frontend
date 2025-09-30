import React from "react";
import { Fish } from "../api/fishApi";

interface FishInfoProps {
    fishList: Fish[];
    title: string;
}

const FishInfo = ({ fishList, title }: FishInfoProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Registrert antall fisk: {fishList.length}</p>
        </div>
    );
};

export default FishInfo;