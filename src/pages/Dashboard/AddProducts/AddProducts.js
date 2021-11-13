import React from "react";
import { useRef } from "react";
import useAuth from "../../../hooks/useAuth";

const AddProducts = () => {
	const { token } = useAuth();
	const nameRef = useRef();
	const priceRef = useRef();
	const imgRef = useRef();
	const descRef = useRef();
	const stockRef = useRef();

	const handleAddProducts = (e) => {
		const name = nameRef.current.value;
		const price = priceRef.current.value;
		const stock = stockRef.current.value;
		const img = imgRef.current.value;
		const desc = descRef.current.value;

		const newProduct = { name, price, img, desc, stock };

		fetch("http://localhost:5000/data", {
			method: "POST",
			headers: {
				authorization: `Bearer ${token}`,
				"content-type": "application/json",
			},
			body: JSON.stringify(newProduct),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert("Successfully added this products");
					e.target.reset();
				}
			});
		e.preventDefault();
	};
	return (
		<>
			<div className="container text-center">
				<h2 className="text-3xl font-semibold mb-4">Add a Product</h2>
				<form onSubmit={handleAddProducts}>
					<input
						className="my-3 w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
						placeholder="Enter Product Name"
						type="text"
						ref={nameRef}
					/>
					<br />
					<input
						className="my-3 w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
						placeholder="Enter Product Price"
						type="number"
						ref={priceRef}
					/>
					<br />
					<input
						className="my-3 w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
						placeholder="Enter Product Stock"
						type="number"
						ref={stockRef}
					/>
					<br />
					<input
						className="my-3 w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
						placeholder="Enter the Products img URL"
						type="text"
						ref={imgRef}
					/>
					<br />
					<textarea
						className="my-3 w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
						placeholder="Enter the description"
						name=""
						id=""
						cols="30"
						rows="10"
						ref={descRef}
					></textarea>
					<br />
					<input
						className="w-2/3 px-3 py-2 bg-red-500 text-white hover:bg-white hover:text-red-500 border border-red-500 hover:border-red-500 cursor-pointer transition ease-linear rounded-md"
						type="submit"
						value="Add Products"
					/>
				</form>
			</div>
		</>
	);
};

export default AddProducts;
