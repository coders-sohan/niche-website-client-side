import React from "react";
import { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import ErrorAlert from "../../contexts/Alerts/ErrorAlert";
import SuccessAlert from "../../contexts/Alerts/SuccessAlert";
import Spinner from "../../contexts/Spinner/Spinner";
import useAuth from "../../hooks/useAuth";
import logo from "../../icons/logo.png";

const Login = () => {
	const [loginData, setLoginData] = useState([]);
	const { user, error, loginUser, isLoading, googleSignIn, forgotPassword } =
		useAuth();

	const location = useLocation();
	const history = useHistory();

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		loginUser(loginData.email, loginData.password, location, history);
	};

	const handleGoogleSignIn = () => {
		googleSignIn(location, history);
	};

	const handleForgotpassword = () => {
		forgotPassword(loginData.email, location, history);
	};

	return (
		<>
			<div className="bg-gray-900 min-h-screen pt-12 md:pt-14 pb-6 px-2 md:px-0">
				<div className="max-w-lg mx-auto">
					<Link to="/" className="text-xl font-semibold px-3">
						<img src={logo} className="h-16 mx-auto" alt="logo" />
					</Link>
				</div>

				<div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-8 rounded-lg shadow-2xl">
					<div>
						<h3 className="font-bold text-2xl">
							Welcome to <span className="text-red-500">MOWAT</span>
						</h3>
						<p className="text-gray-600 pt-2">Login to your account.</p>
					</div>

					<div className="mt-8">
						<form onSubmit={handleLoginSubmit} className="flex flex-col">
							<div className="mb-5 pt-3 rounded bg-gray-200">
								<label
									className="block text-gray-700 text-sm font-bold mb-2 ml-3"
									htmlFor="email"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									onBlur={handleOnBlur}
									required
									className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-2 border-gray-300 focus:border-red-500 transition duration-500 px-3 pb-3"
								/>
							</div>
							<div className="mb-5 pt-3 rounded bg-gray-200">
								<label
									className="block text-gray-700 text-sm font-bold mb-2 ml-3"
									htmlFor="password"
								>
									Password
								</label>
								<input
									type="password"
									id="password"
									name="password"
									onBlur={handleOnBlur}
									required
									className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-2 border-gray-300 focus:border-red-500 transition duration-500 px-3 pb-3"
								/>
							</div>
							<div className="flex justify-end">
								<a
									onClick={handleForgotpassword}
									href="/"
									className="text-sm text-red-500 hover:text-red-600 hover:underline mb-5"
								>
									Forgot your password?
								</a>
							</div>
							<button
								className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
								type="submit"
							>
								Log In
							</button>
						</form>
						{isLoading && <Spinner />}
						{user?.email && <SuccessAlert login={true} register={false} />}
						{error && <ErrorAlert error={error} />}
						<p className="text-center m-0 my-6 text-gray-500 text-base tracking-widest title-font">
							Or
						</p>
						<div className="">
							<button
								onClick={handleGoogleSignIn}
								className="flex items-center mx-auto border py-2 px-4 rounded hover:border-red-300 transition ease-linear"
							>
								{" "}
								<span className="capitalize text-lg mr-3">google login</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									preserveAspectRatio="xMidYMid"
									viewBox="0 0 256 262"
								>
									<path
										fill="#4285F4"
										d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
									/>
									<path
										fill="#34A853"
										d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
									/>
									<path
										fill="#FBBC05"
										d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
									/>
									<path
										fill="#EB4335"
										d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div className="max-w-lg mx-auto text-center mt-12 mb-6">
					<p className="text-white">
						Don't have an account?{" "}
						<Link to="/register" className="font-bold hover:underline">
							Create an Account
						</Link>
						.
					</p>
				</div>

				<footer className="max-w-lg mx-auto flex justify-center text-white">
					<Link to="/contact" className="hover:underline">
						Contact
					</Link>
					<span className="mx-3">•</span>
					<Link to="/" className="hover:underline">
						Privacy
					</Link>
				</footer>
			</div>
		</>
	);
};

export default Login;
