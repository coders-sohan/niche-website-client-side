import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import AllProducts from "./pages/Products/AllProducts/AllProducts";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/products">
						<AllProducts />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route exact path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
