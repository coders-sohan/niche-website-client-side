import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Product = (props) => {
	const { _id, name, img, rating, price, stock, details } = props.product;

	return (
		<>
			<div className="p-4 border">
				<div className="block relative h-48 rounded overflow-hidden">
					<img alt={name} className="h-full block mx-auto" src={img} />
				</div>
				<div className="mt-4 h-44">
					<div className="flex lg:flex-row sm:flex-col justify-between items-center">
						<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
							{details.modelNumber}
						</h3>
						<span className="text-yellow-500 text-xs tracking-widest title-font mb-1">
							<Rating
								initialRating={rating}
								emptySymbol="far fa-star"
								fullSymbol="fas fa-star"
								readonly
							/>{" "}
                            <span className="text-gray-700">({rating})</span>
						</span>
					</div>
					<h2 className="text-red-600 hover:text-gray-500 transition ease-linear title-font text-lg font-medium py-2">
						<Link to="/products">{name}</Link>
					</h2>
					<p className="mt-1">৳ {price}</p>
					<p className="mt-3 text-green-500 text-xs tracking-widest title-font">
						{stock} available in stock
					</p>
				</div>
				<div className="mt-4">
					<button className="px-3 py-2 bg-red-500 text-gray-50 rounded block mx-auto">
						<Link to="/products" className="flex flex-row items-center">
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
						</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default Product;
