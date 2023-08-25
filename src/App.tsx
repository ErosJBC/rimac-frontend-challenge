import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./layouts";
import { Insurence, Plans, Resumen } from "./views";

const App: FunctionComponent<{}> = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Main />}>
					<Route index path="" element={<Insurence />}></Route>
					<Route path="planes" element={<Plans />}></Route>
					<Route path="resumen" element={<Resumen />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
