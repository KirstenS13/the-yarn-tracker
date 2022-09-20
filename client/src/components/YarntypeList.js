import React from 'react';

const YarntypeList = props => {
    console.log('YarntypeList props from YarntypeList', props)
    return (
        <>
            <p>Hello, this is the YarntypeList</p>
            {/* it keeps telling me props.yarntypes is undefined */}
            {/* <p>{props.yarntypes[1].name}</p>
            {props.yarntypes.map((yarntype, index) => {
                return (
                    <p key={index}>{yarntype.name}</p>
                )
            })} */}
        </>
    )
}

export default YarntypeList;