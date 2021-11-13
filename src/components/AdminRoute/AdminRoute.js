import React from "react";
import { Route, Redirect } from "react-router-dom";
import Spinner from "../../contexts/Spinner/Spinner";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
	const { user, isLoading, admin } = useAuth();
	if (isLoading) {
		return <Spinner />;
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user?.email && admin ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default AdminRoute;
