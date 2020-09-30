import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            <div className='card-grid'>
                {loading ? <p className="animate__animated animate__flash">cargando</p> : images.map((img) => <GifGridItem {...img} key={img.id} />)}
            </div>
        </>
    );
};
