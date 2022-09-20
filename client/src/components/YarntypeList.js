import React from 'react';

const YarntypeList = props => {
    return (
        <>
            <p>Hello, this is the YarntypeList</p>
            {props.yarntypes.map((yarntype, index) => {
                return (
                    <p key={index}>{yarntype.name}</p>
                )
            })}
        </>
    )
}

export default YarntypeList;