import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<>
			<div className="container mx-auto flex px-5 pt-36 pb-24 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pt-24 pb-28">
					<p className="text-gray-300 text-sm tracking-widest title-font mb-3">
						Exclusive Offer -20% Off This Week
					</p>
					<h1 className="title-font sm:text-4xl text-3xl mb-5 font-medium text-gray-50">
						H-Vault Classico
					</h1>
					<p className="mb-4 leading-relaxed text-gray-300">
						H-Vault Watches Are A Lot Like Classic American Muscle Cars - <br />
						Expect For The American Part That Is.
					</p>
					<p className="text-gray-400 mb-5">
						Starting At <strong>৳ 3200.00</strong>
					</p>
					<div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 items-center">
						<button className="inline-flex justify-center text-white bg-red-500 border-0 py-2 px-4 transition ease-linear focus:outline-none hover:bg-red-600 rounded text-lg">
							<Link to="/products" className="flex flex-row items-center">
								<span>Buy Now</span>{" "}
								<span className="ml-2">
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
											d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
								</span>
							</Link>
						</button>
						<button className="inline-flex justify-center text-gray-700 bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 hover:text-red-600 transition ease-linear rounded text-lg">
							<Link to="/products" className="flex flex-row items-center">
								<span>Explore More</span>{" "}
								<span className="ml-1 mt-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 7l5 5m0 0l-5 5m5-5H6"
										/>
									</svg>
								</span>
							</Link>
						</button>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
			</div>
		</>
	);
};

export default HeroSection;
