import React from "react";
import { useRef } from "react";
import useAuth from "../../../hooks/useAuth";

const AddReviews = () => {
	const { token } = useAuth();
	const nameRef = useRef();
	const ratingRef = useRef();
	const imgRef = useRef();
	const descRef = useRef();

	const handleAddReviews = (e) => {
		const name = nameRef.current.value;
		const rating = ratingRef.current.value;
		const img = imgRef.current.value;
		const desc = descRef.current.value;

		const newService = { name, rating, img, desc };

		fetch("http://localhost:5000/reviews", {
			method: "POST",
			headers: {
				authorization: `Bearer ${token}`,
				"content-type": "application/json",
			},
			body: JSON.stringify(newService),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					alert("Successfully added your reviews");
					e.target.reset();
				}
			});
		e.preventDefault();
	};
	return (
		<>
			<div className="container text-center">
				<h2 className="text-3xl font-semibold mb-4">Your reviews add please</h2>
				<form onSubmit={handleAddReviews}>
					<input
						className="my-3 w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
						placeholder="Enter your name"
						type="text"
						ref={nameRef}
					/>
					<br />
					<input
						className="my-3 w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
						placeholder="Enter your rating out of 5"
						type="number"
						ref={ratingRef}
					/>
					<br />
					<input
						className="my-3 w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
						placeholder="Enter your imgUrl"
						type="text"
						ref={imgRef}
					/>
					<br />
					<textarea
						className="my-3 w-2/3 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-base focus:outline-none focus:border-red-600 bg-transparent placeholder-gray-500 text-gray-700 dark:text-gray-400"
						placeholder="Enter your reviews"
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
						value="Add Your Reviews"
					/>
				</form>
			</div>
		</>
	);
};

export default AddReviews;
