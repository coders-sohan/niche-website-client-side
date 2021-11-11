import React from "react";
import "./GallerySection.css";

const GallerySection = ({ imgOne, imgTwo }) => {
	return (
		<>
			<div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8 mx-2">
				<div className="single-banner">
					<a href="/">
						<img className="lg:w-full lg:h-80 md:h-60 sm:h-40" src={imgOne} alt="Banner-01" />
					</a>
				</div>
				<div className="single-banner">
					<a href="/">
						<img className="lg:w-full lg:h-80 md:h-60 sm:h-40" src={imgTwo} alt="Banner-02" />
					</a>
				</div>
			</div>
		</>
	);
};

export default GallerySection;
