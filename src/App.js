import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
			<h1 className="font-light text-9xl">start</h1>
		</>
	);
}

export default App;
