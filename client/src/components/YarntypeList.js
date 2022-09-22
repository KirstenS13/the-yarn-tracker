import React from 'react';
import YarntypeCard from './YarntypeCard';

const YarntypeList = props => {
    return (
        <>
            <p>My Yarn</p>
            {props.yarntypes.map((yarntype, index) => {
                return (
                    <YarntypeCard 
                        key={yarntype.id}
                        brand={yarntype.brand}
                        cyc_weight_category={yarntype.cyc_weight_category}
                        grams={yarntype.grams}
                        meters={yarntype.meters}
                        name={yarntype.name}
                        notes={yarntype.notes}
                        ounces={yarntype.ounces}
                        yards={yarntype.yards}
                    />
                )
            })}
        </>
    )
}

export default YarntypeList;