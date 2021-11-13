import React, { useState } from "react";
import MenuIcon from "../../icons/bars-solid.svg";
import CloseIcon from "../../icons/window-close-regular.svg";
import { NavLink } from "react-router-dom";
import logo from "../../icons/logo.png";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
	//We will use react hooks for toggling the menu
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	const showSideMenu = () => {
		isSideMenuOpen ? setIsSideMenuOpen(false) : setIsSideMenuOpen(true);
	};

	// use auth

	const { user, logout } = useAuth();

	return (
		<nav className="fixed w-full h-16 bg-gray-900 text-gray-100 z-50">
			<div className="container mx-auto mt-1 flex flex-row justify-between items-center">
				<NavLink to="/" className="text-xl font-semibold px-3">
					<img src={logo} className="h-12" alt="logo" />
				</NavLink>
				<ul className="hidden menu-list lg:flex lg:flex-row items-center">
					<li className="text-lg font-semibold px-2 py-2">
						<NavLink
							className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
							to="/home"
							activeClassName="bg-gray-100 text-red-500"
						>
							Home
						</NavLink>
					</li>
					<li className="text-lg font-semibold px-2 py-2">
						<NavLink
							className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
							to="/about"
							activeClassName="bg-gray-100 text-red-500"
						>
							About
						</NavLink>
					</li>
					<li className="text-lg font-semibold px-2 py-2">
						<NavLink
							className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
							to="/products"
							activeClassName="bg-gray-100 text-red-500"
						>
							Products
						</NavLink>
					</li>
					<li className="text-lg font-semibold px-2 py-2">
						<NavLink
							className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
							to="/contact"
							activeClassName="bg-gray-100 text-red-500"
						>
							Contact
						</NavLink>
					</li>
					{user?.email ? (
						<>
							<li className="text-lg font-semibold px-2 py-2">
								<NavLink
									className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
									to="/dashboard"
									activeClassName="bg-gray-100 text-red-500"
								>
									Dashboard
								</NavLink>
							</li>
							<li className="text-lg font-semibold px-2 py-2">
								<button
									onClick={logout}
									className="px-2 py-1 rounded font-bold bg-gray-100 text-red-600 transition ease-linear flex items-center"
								>
									<span>Logout</span>
									<span className="ml-2 mt-1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
											/>
										</svg>
									</span>
								</button>
							</li>
						</>
					) : (
						<>
							<li className="text-lg font-semibold px-2 py-2">
								<NavLink
									className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
									to="/login"
									activeClassName="bg-gray-100 text-red-500"
								>
									Login
								</NavLink>
							</li>
							<li className="text-lg font-semibold px-2 py-2">
								<NavLink
									className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
									to="/register"
									activeClassName="bg-gray-100 text-red-500"
								>
									Register
								</NavLink>
							</li>
						</>
					)}
				</ul>

				<button
					onClick={() => {
						showSideMenu();
					}}
					className="lg:hidden menu-button"
				>
					{isSideMenuOpen ? (
						<img
							src={CloseIcon}
							className="w-8 h-8 px-2 mr-3"
							alt="close"
						></img>
					) : (
						<img src={MenuIcon} className="w-8 h-8 px-2 mr-3" alt="menu"></img>
					)}
				</button>
				{isSideMenuOpen ? SideMenu() : ""}
			</div>
		</nav>
	);
}

function SideMenu() {
	// use auth
	const { user, logout } = useAuth();

	return (
		<div className="fixed h-screen w-screen sm:w-screen lg:hidden bg-gray-900 top-16">
			<ul className="menu-list flex flex-col pt-48 items-center text-xs font-bold">
				<li className="text-lg font-semibold px-2 py-2">
					<NavLink
						className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
						to="/home"
						activeClassName="bg-gray-100 text-red-500"
					>
						Home
					</NavLink>
				</li>
				<li className="text-lg font-semibold px-2 py-2">
					<NavLink
						className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
						to="/about"
						activeClassName="bg-gray-100 text-red-500"
					>
						About
					</NavLink>
				</li>
				<li className="text-lg font-semibold px-2 py-2">
					<NavLink
						className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
						to="/products"
						activeClassName="bg-gray-100 text-red-500"
					>
						Products
					</NavLink>
				</li>
				<li className="text-lg font-semibold px-2 py-2">
					<NavLink
						className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
						to="/contact"
						activeClassName="bg-gray-100 text-red-500"
					>
						Contact
					</NavLink>
				</li>
				{user?.email ? (
					<>
						<li className="text-lg font-semibold px-2 py-2">
							<NavLink
								className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
								to="/dashboard"
								activeClassName="bg-gray-100 text-red-500"
							>
								Dashboard
							</NavLink>
						</li>
						<li className="text-lg font-semibold px-2 py-2">
							<button
								onClick={logout}
								className="px-2 py-1 rounded font-bold bg-gray-100 text-red-600 transition ease-linear flex items-center"
							>
								<span>Logout</span>
								<span className="ml-2 mt-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
										/>
									</svg>
								</span>
							</button>
						</li>
					</>
				) : (
					<>
						<li className="text-lg font-semibold px-2 py-2">
							<NavLink
								className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
								to="/login"
								activeClassName="bg-gray-100 text-red-500"
							>
								Login
							</NavLink>
						</li>
						<li className="text-lg font-semibold px-2 py-2">
							<NavLink
								className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
								to="/register"
								activeClassName="bg-gray-100 text-red-500"
							>
								Register
							</NavLink>
						</li>
					</>
				)}
			</ul>
		</div>
	);
}
