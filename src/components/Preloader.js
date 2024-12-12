import React from 'react'
import {GridLoader} from "react-spinners";

export default function Preloader() {
    return (
        <div className={`loader`}>
            <GridLoader color={'#a8b6bc'} />
        </div>
    )
}
