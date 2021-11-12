import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
	return (
		<div>
			<Navbar />
			{/* about us */}
			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 pt-36 pb-24 md:flex-row flex-col items-center">
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
						<img
							className="object-cover object-center rounded w-full"
							alt="hero"
							src="https://template.hasthemes.com/ruiz/ruiz/assets/images/banner/about-us_bg.jpg"
						/>
					</div>
					<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							About <span className="text-red-500">MOWAT</span>
						</h1>
						<p className="mb-8 leading-relaxed">
							MOWAT's history dates right back to 1991, when Sham Naib founded
							the jewellery retailer SDK Jewellers in the town which is still
							MOWAT's home, Reading in Berkshire. When Sham’s son, Kishore Naib,
							joined the business in 2007, he established the website
							MOWAT.co.uk. Our official founding! The Naib family proudly sold
							the business in 2014, and we have since grown into the biggest
							independent watch retailer in the UK.
						</p>
						<p className="mb-8 leading-relaxed">
							Here at MOWAT, we pride ourselves on being the No. 1 for Brands in
							the designer watch world. Stocking over 150 top brands, from
							luxury Versace to hip HUGO, plus brands designed by us such as
							Depth Charge (available exclusively at MOWAT, we might add), we
							are here to help you find your ideal watch, whoever you are buying
							for.
						</p>
						<div className="flex justify-center">
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
						</div>
					</div>
				</div>
			</section>
			{/* testimonials */}
			<section className="text-gray-600 body-font">
				<div className="container px-5 pt-5 pb-14 mx-auto">
					<h1 className="text-4xl font-medium title-font text-gray-900 text-center">
						Testimonials
					</h1>
					<hr className="h-1 w-28 bg-red-500 mx-auto mt-5 mb-10" />
					<div className="flex flex-wrap -m-4">
						<div className="p-4 md:w-1/2 w-full">
							<div className="h-full bg-gray-100 p-8 rounded">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									className="block w-5 h-5 text-red-300 mb-4"
									viewBox="0 0 975.036 975.036"
								>
									<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
								</svg>
								<p className="leading-relaxed mb-6">
									First class all round service from a dealer who genuinely
									cares about their customers. Always answer calls quickly and
									respond to any issues which they quickly address. I have made
									many purchases in the past and will continue to do so. Highly
									recommended.
								</p>
								<a href="/" className="inline-flex items-center">
									<img
										alt="testimonial"
										src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=338&ext=jpg"
										className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
									/>
									<span className="flex-grow flex flex-col pl-4">
										<span className="title-font font-medium text-gray-900">
											Holden Caulfield
										</span>
										<span className="text-red-500 text-sm">NewYork, USA</span>
									</span>
								</a>
							</div>
						</div>
						<div className="p-4 md:w-1/2 w-full">
							<div className="h-full bg-gray-100 p-8 rounded">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									className="block w-5 h-5 text-red-300 mb-4"
									viewBox="0 0 975.036 975.036"
								>
									<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
								</svg>
								<p className="leading-relaxed mb-6">
									Looks feels Fantastic was brought as a Present So can not say
									much more. Great looking watch, have been buying from the
									MOWAT since 2014, I will be back.
								</p>
								<a href="/" className="inline-flex items-center">
									<img
										alt="testimonial"
										src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=338&ext=jpg"
										className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
									/>
									<span className="flex-grow flex flex-col pl-4">
										<span className="title-font font-medium text-gray-900">
											Alper Kamu
										</span>
										<span className="text-red-500 text-sm">London, UK</span>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default About;
