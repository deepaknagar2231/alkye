import React from "react"
import './style.scss';

export default function Card({ poster }) {
    return (
        <div className="card-container">
            <img src={poster}></img>
        </div>
    )
}