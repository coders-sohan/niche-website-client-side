import React, { useState } from "react";
import MenuIcon from "../../icons/bars-solid.svg";
import CloseIcon from "../../icons/window-close-regular.svg";
import { NavLink } from "react-router-dom";
import logo from "../../icons/logo.png";

export default function Navbar() {
	//We will use react hooks for toggling the menu
	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	const showSideMenu = () => {
		isSideMenuOpen ? setIsSideMenuOpen(false) : setIsSideMenuOpen(true);
	};

	return (
		<nav className="fixed w-full h-16 bg-gray-700 text-gray-100 z-50">
			<div className="container mx-auto mt-2 flex flex-row justify-between items-center">
				<NavLink to="/" className="text-xl font-semibold px-3">
					<img src={logo} className="h-12" alt="logo" />
				</NavLink>
				<ul className="hidden menu-list lg:flex lg:flex-row">
					<li className="text-lg font-semibold px-2 py-2">
						<NavLink
							className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
							to="/home"
							activeClassName="bg-gray-100 text-gray-700"
						>
							Home
						</NavLink>
					</li>
					<li className="text-lg font-semibold px-2 py-2">
						<NavLink
							className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
							to="/about"
							activeClassName="bg-gray-100 text-gray-700"
						>
							About
						</NavLink>
					</li>
					<li className="text-lg font-semibold px-2 py-2">
						<NavLink
							className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
							to="/products"
							activeClassName="bg-gray-100 text-gray-700"
						>
							Products
						</NavLink>
					</li>
					<li className="text-lg font-semibold px-2 py-2">
						<NavLink
							className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
							to="/contact"
							activeClassName="bg-gray-100 text-gray-700"
						>
							Contact
						</NavLink>
					</li>
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
	return (
		<div className="fixed h-screen w-screen sm:w-screen lg:hidden bg-gray-800 top-16">
			<ul className="menu-list flex flex-col pt-48 items-center text-xs font-bold">
				<li className="text-lg font-semibold px-2 py-2">
					<NavLink
						className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
						to="/home"
						activeClassName="bg-gray-100 text-gray-700"
					>
						Home
					</NavLink>
				</li>
				<li className="text-lg font-semibold px-2 py-2">
					<NavLink
						className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
						to="/about"
						activeClassName="bg-gray-100 text-gray-700"
					>
						About
					</NavLink>
				</li>
				<li className="text-lg font-semibold px-2 py-2">
					<NavLink
						className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
						to="/products"
						activeClassName="bg-gray-100 text-gray-700"
					>
						Products
					</NavLink>
				</li>
				<li className="text-lg font-semibold px-2 py-2">
					<NavLink
						className="px-2 py-1 rounded hover:bg-gray-50 hover:text-red-600 transition ease-linear"
						to="/contact"
						activeClassName="bg-gray-100 text-gray-700"
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
