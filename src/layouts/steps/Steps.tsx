import React, { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import { Stepper } from '../../components'

const Steps: FunctionComponent<{}> = () => {
    return (
        <>
            <Stepper />
            <Outlet />
        </>
    )
}

export default Steps