import { FunctionComponent } from 'react'
import { Footer, Navbar } from '../../components'
import { Outlet } from 'react-router-dom'

const Main: FunctionComponent<{}> = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}

export default Main