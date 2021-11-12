import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const SingleProductDetails = (props) => {
	const { _id, name, price, stock, details, desc, rating, img } =
		props.productDetails;

	return (
		<>
			<div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
				<div className="lg:w-1/2 w-full">
					<img
						alt={name}
						className="lg:h-96 h-40 object-cover object-center mx-auto"
						src={img}
					/>
				</div>
				<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
					<p className="mt-3 text-green-500 text-xs tracking-widest title-font">
						{stock} available in stock
					</p>
					<h1 className="text-red-500 text-3xl title-font font-medium my-3">
						{name}
					</h1>
					<div className="flex mb-4">
						<span className="flex items-center">
							<Rating
								className="text-yellow-500"
								initialRating={rating}
								emptySymbol="far fa-star"
								fullSymbol="fas fa-star"
								readonly
							/>
							<span className="text-gray-600 ml-3">({rating})</span>
						</span>
						<span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
							<a href="/" className="text-gray-500">
								<svg
									fill="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a href="/" className="text-gray-500 mx-3">
								<svg
									fill="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a href="/" className="text-gray-500">
								<svg
									fill="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
								</svg>
							</a>
						</span>
					</div>
					<p className="leading-relaxed mb-8">{desc}</p>
					<div className="pb-12">
						<p className="text-base leading-4 mt-7 text-gray-600 flex justify-between border-b pb-3">
							<span className="">Model Number:</span>{" "}
							<span className="font-semibold">{details?.modelNumber}</span>
						</p>
						<p className="text-base leading-4 mt-4 text-gray-600 flex justify-between border-b pb-3">
							<span className="">Display Type:</span>{" "}
							<span className="font-semibold">{details?.DisplayType}</span>
						</p>
						<p className="text-base leading-4 mt-4 text-gray-600 flex justify-between border-b pb-3">
							<span className="">Screen:</span>{" "}
							<span className="font-semibold">{details?.Screen}</span>
						</p>
						<p className="text-base leading-4 mt-4 text-gray-600 flex justify-between border-b pb-3">
							<span className="">Battery:</span>{" "}
							<span className="font-semibold">{details?.Battery}</span>
						</p>
						<p className="text-base leading-4 mt-4 text-gray-600 flex justify-between">
							<span className="">Touch:</span>{" "}
							<span className="font-semibold">{details?.touch}</span>
						</p>
					</div>
					<div className="flex justify-between items-center">
						<span className="title-font font-medium text-4xl text-gray-900">
							৳ {price}
						</span>
						<div className="flex items-center">
							{/* <Link
								to={`/product/details/${_id}`}
								className="px-3 py-2 bg-red-500 text-gray-50 rounded mx-auto flex flex-row items-center"
							>
								<span>Add to cart</span>{" "}
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
							</Link> */}
							<button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 hover:text-red-500 transition ease-linear ml-4">
								<svg
									fill="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleProductDetails;
