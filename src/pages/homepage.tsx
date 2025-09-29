import React from "react";

interface HomePageProps {
    title: string;
}

const homepage = ({ title }: HomePageProps) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default homepage;

