import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
	return (
		<div>
			<Navbar />
			<div>
				<section className="text-gray-600 body-font relative">
					<div className="container px-5 pt-36 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">
						<div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
							<iframe
								width="100%"
								height="100%"
								className="absolute inset-0"
								frameBorder="0"
								title="map"
								marginHeight="0"
								marginWidth="0"
								scrolling="no"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25230.128086541306!2d-122.41526721703514!3d37.77208437557989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2c76ec36a9%3A0x88f2bf1dcf074ba5!2sA%26E%20Watches%20(Rolex)!5e0!3m2!1sen!2sbd!4v1636614014954!5m2!1sen!2sbd"
								loading="lazy"
							></iframe>
							<div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
								<div className="lg:w-1/2 px-6">
									<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
										ADDRESS
									</h2>
									<p className="mt-1">
										888 Brannan St Suite 161, San Francisco, CA 94103, United
										States
									</p>
								</div>
								<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
									<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
										EMAIL
									</h2>
									<a
										href="mailto:example@email.com"
										className="text-red-500 leading-relaxed"
									>
										example@email.com
									</a>
									<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
										PHONE
									</h2>
									<p className="leading-relaxed">123-456-7890</p>
								</div>
							</div>
						</div>
						<div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
							<h2 className="text-gray-900 text-4xl mb-3 font-medium title-font">
								Get In Touch
							</h2>
							<p className="leading-relaxed mb-5 text-gray-600">
								Give us feedback on your opinions, complaints, suggestions
							</p>
							<div className="relative mb-4">
								<label
									htmlFor="name"
									className="leading-7 text-sm text-gray-600"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<div className="relative mb-4">
								<label
									htmlFor="email"
									className="leading-7 text-sm text-gray-600"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
							<div className="relative mb-4">
								<label
									htmlFor="message"
									className="leading-7 text-sm text-gray-600"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
								></textarea>
							</div>
							<button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
								Button
							</button>
							<p className="text-xs text-gray-500 mt-3">
								Up to 50% off retail on pre-owned Rolex watches
							</p>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
