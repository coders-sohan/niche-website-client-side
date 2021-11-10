import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container mx-auto">
			<h1 className="py-40 text-5xl">This is home page</h1>
			</div>
			<Footer />
		</>
	);
};

export default Home;
