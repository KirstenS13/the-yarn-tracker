import React from 'react';

const YarntypeCard = props => {
    return (
        <>
            <p>Name: {props.name}</p>
            <p>Brand: {props.brand}</p>
            <p>Weight Category: {props.cyc_weight_category}</p>
            <p>Weight: {props.ounces} oz/{props.grams} g</p>
            <p>Length: {props.yards} yds/ {props.meters} m</p>
            <p>Notes: {props.notes}</p>
        </>
    )
}

export default YarntypeCard;