import { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Steps } from "./layouts";
import { Insurence, Plans, Resumen } from "./views";

const App: FunctionComponent<{}> = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Main />}>
					<Route index path="" element={<Insurence />}></Route>
					<Route path="" element={<Steps />}>
						<Route path="planes" element={<Plans />}></Route>
						<Route path="resumen" element={<Resumen />}></Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
