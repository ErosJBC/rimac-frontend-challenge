import { FunctionComponent, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Stepper } from '../../components'
import { useSelector } from 'react-redux'

const Steps: FunctionComponent<{}> = () => {

    const { path } = useSelector((state: any) => state.stepper);
    const navigate = useNavigate();

    useEffect(() => {
        navigate(path);
    }, []);

    return (
        <>
            <Stepper />
            <Outlet />
        </>
    )
}

export default Steps