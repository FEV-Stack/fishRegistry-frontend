import React from "react";

interface HomePageProps {
    title: string;
}

const homepage = ({ title }: HomePageProps) => {
    return (
        <div   style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            flexDirection: "column",
            textAlign: "center",
        }}>
            <h1>{title}</h1>
        </div>
    )
}

export default homepage;

