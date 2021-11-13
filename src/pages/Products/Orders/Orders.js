import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import useAuth from "../../../hooks/useAuth";
import "./Orders.css";

const Orders = () => {
	const { id } = useParams();

	const { register, handleSubmit, reset } = useForm();

	const { user } = useAuth();

	const [productDetails, setProductDetails] = useState({});

	useEffect(() => {
		const url = `https://salty-river-06883.herokuapp.com/data/${id}`;
		axios
			.get(url)
			.then((result) => {
				setProductDetails(result.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	const HandleOrderSubmit = (data) => {
		data.product = productDetails;
		console.log(data);
		axios
			.post("https://salty-river-06883.herokuapp.com/orders", data)
			.then((result) => {
				if (result.data.insertedId) {
					alert("Your Order Submitted Successfully");
					reset();
				}
			});
	};

	return (
		<>
			<Navbar />
			<section className="container mx-auto pt-36 pb-24">
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-4">
					<div className="flex flex-col items-center">
						<div>
							<img src={productDetails.img} alt={productDetails.name} />
						</div>
						<div className="mt-4">
							<div className="flex lg:flex-row sm:flex-col justify-between items-center">
								<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
									{productDetails.details?.modelNumber}
								</h3>
								<span className="text-yellow-500 text-xs tracking-widest title-font mb-1">
									<Rating
										initialRating={productDetails.rating}
										emptySymbol="far fa-star"
										fullSymbol="fas fa-star"
										readonly
									/>{" "}
									<span className="text-gray-700">
										({productDetails.rating})
									</span>
								</span>
							</div>
							<p className="mt-3 text-green-500 text-xs tracking-widest title-font">
								{productDetails.stock} available in stock
							</p>
							<h2 className="text-red-600 transition ease-linear title-font text-lg font-medium py-2">
								<span>{productDetails.name}</span>
							</h2>
							<p className="py-3">{productDetails.desc}</p>
							<div className="pb-12">
								<p className="text-base leading-4 mt-7 text-gray-600 flex justify-between border-b pb-3">
									<span className="">Model Number:</span>{" "}
									<span className="font-semibold">
										{productDetails.details?.modelNumber}
									</span>
								</p>
								<p className="text-base leading-4 mt-4 text-gray-600 flex justify-between border-b pb-3">
									<span className="">Display Type:</span>{" "}
									<span className="font-semibold">
										{productDetails.details?.DisplayType}
									</span>
								</p>
								<p className="text-base leading-4 mt-4 text-gray-600 flex justify-between border-b pb-3">
									<span className="">Screen:</span>{" "}
									<span className="font-semibold">
										{productDetails.details?.Screen}
									</span>
								</p>
								<p className="text-base leading-4 mt-4 text-gray-600 flex justify-between border-b pb-3">
									<span className="">Battery:</span>{" "}
									<span className="font-semibold">
										{productDetails.details?.Battery}
									</span>
								</p>
								<p className="text-base leading-4 mt-4 text-gray-600 flex justify-between">
									<span className="">Touch:</span>{" "}
									<span className="font-semibold">
										{productDetails.details?.touch}
									</span>
								</p>
							</div>
							<p className="mt-1 text-3xl">৳ {productDetails.price}</p>
						</div>
					</div>
					<div>
						<h1 className="text-3xl text-gray-800 text-center mb-8">
							Place Your order
						</h1>
						<form
							className="flex flex-col gap-4 justify-center items-center"
							onSubmit={handleSubmit(HandleOrderSubmit)}
						>
							<input
								className="w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base capitalize focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
								defaultValue={user.displayName}
								{...register("name")}
							/>
							<input
								className="w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
								defaultValue={user.email}
								{...register("email")}
							/>
							<input
								className="w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base capitalize focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
								defaultValue={productDetails.price}
								type="number"
								{...register("price")}
							/>
							<input
								className="w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
								placeholder="Address"
								{...register("address")}
							/>
							<input
								className="w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
								placeholder="City"
								{...register("city")}
							/>
							<input
								className="w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base capitalize focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
								placeholder="Zip Code"
								type="number"
								{...register("zipcode")}
							/>
							<input
								className="w-2/3 px-3 py-2 bg-red-500 text-white hover:bg-white hover:text-red-500 border border-red-500 hover:border-red-500 cursor-pointer transition ease-linear rounded-md"
								value="Place Order"
								type="submit"
							/>
						</form>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Orders;
