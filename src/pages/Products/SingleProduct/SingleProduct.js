import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import SingleProductDetails from "../SingleProductDetails/SingleProductDetails";

const SingleProduct = () => {
	const { id } = useParams();

	const [productDetails, setProductDetails] = useState([]);

	useEffect(() => {
		const url = `http://localhost:5000/data/${id}`;
		axios.get(url).then((result) => setProductDetails(result.data));
	}, []);

	return (
		<>
			<Navbar />
			<section className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 pt-36 pb-24 mx-auto">
					<SingleProductDetails
						key={productDetails._id}
						productDetails={productDetails}
					/>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default SingleProduct;
