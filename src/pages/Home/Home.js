import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import GallerySection from "../../components/GallerySection/GallerySection";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../Products/Product/Product";
import "./Home.css";

const Home = () => {
	const img01 =
		"https://template.hasthemes.com/ruiz/ruiz/assets/images/banner/banner-01.jpg";
	const img02 =
		"https://template.hasthemes.com/ruiz/ruiz/assets/images/banner/banner-02.jpg";
	const img03 =
		"https://template.hasthemes.com/ruiz/ruiz/assets/images/banner/banner-03.jpg";
	const img04 =
		"https://template.hasthemes.com/ruiz/ruiz/assets/images/banner/banner-04.jpg";

	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("https://salty-river-06883.herokuapp.com/data")
			.then((res) => res.json())
			.then((data) => setProducts(data.slice(0, 8)));
	}, []);

	return (
		<>
			<div className=" overflow-hidden">
				<Navbar />
				<section className="text-gray-600 body-font hero-sec">
					<HeroSection />
				</section>
				<section className="container mx-auto py-16">
					<GallerySection imgOne={img01} imgTwo={img02} />
				</section>
				<section className="container mx-auto py-10">
					<div className="text-center mb-14">
						<h1 className="text-4xl font-semibold capitalize">
							Best seller products
						</h1>
						<hr className="h-1 w-32 bg-red-500 mx-auto mt-5" />
					</div>
					<div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mx-4">
						{products.map((product) => (
							<Product key={product._id} product={product} />
						))}
					</div>
				</section>
				<section className="container mx-auto py-16">
					<GallerySection imgOne={img03} imgTwo={img04} />
				</section>
				<Footer />
			</div>
		</>
	);
};

export default Home;
