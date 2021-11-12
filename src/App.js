import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import AllProducts from "./pages/Products/AllProducts/AllProducts";
import SingleProduct from "./pages/Products/SingleProduct/SingleProduct";
import Register from "./pages/Register/Register";

function App() {
	return (
		<>
			<AuthProvider>
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
						<PrivateRoute path="/products">
							<AllProducts />
						</PrivateRoute>
						<PrivateRoute path="/product/details/:id">
							<SingleProduct />
						</PrivateRoute>
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
			</AuthProvider>
		</>
	);
}

export default App;
