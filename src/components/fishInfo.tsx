import React from "react";
import { Fish } from "../api/fishApi";

interface FishInfoProps {
    fishList: Fish[];
    title: string;
    addedClicks: number;
}

const FishInfo = ({ fishList, title, addedClicks }: FishInfoProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Total fish: {fishList.length}</p>
            <p>Added fish this session: {addedClicks}</p>
        </div>
    );
};

export default FishInfo;