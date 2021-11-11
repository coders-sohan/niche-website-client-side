import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import Product from "../Product/Product";

const AllProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/data")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<>
			<Navbar />
			<section className="text-gray-600 body-font">
				<div className="container px-5 pt-36 pb-24 mx-auto">
					<div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 -m-4">
						{products.map((product) => (
							<Product key={product._id} product={product} />
						))}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default AllProducts;
