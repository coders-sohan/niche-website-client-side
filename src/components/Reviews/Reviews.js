import React, { useState } from "react";
import { useEffect } from "react";
import Rating from "react-rating";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		fetch("https://salty-river-06883.herokuapp.com/reviews")
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, []);

	return (
		<div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
			<div className="flex flex-col justify-start items-start w-full space-y-8">
				<div className="">
					<p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
						Reviews
					</p>
				</div>
				<div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
					{reviews.map((review) => (
						<div className="bg-gray-50 p-8">
							<div className="flex flex-col md:flex-row justify-between w-full">
								<div className="mt-2 md:mt-0">
									<Rating
										className="text-red-500"
										initialRating={review.rating}
										emptySymbol="far fa-star"
										fullSymbol="fas fa-star"
										readonly
									/>
								</div>
							</div>
							<div className="">
								<p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6 overflow-hidden">
									{review.desc}
								</p>
								<div className="md:flex mt-6 flex-row justify-start items-start space-x-4">
									<div className="md:block">
										<img className="h-56 w-56" src={review.img} alt="review" />
									</div>
								</div>
								<div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
									<div>
										<img
											className="h-10 w-10 rounded-full"
											src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
											alt="userPhoto"
										/>
									</div>
									<div className="flex flex-col justify-start items-start space-y-2">
										<p className="text-base font-medium leading-none text-gray-800">
											{review.name}
										</p>
										<p className="text-sm leading-none text-gray-600">
											{new Date().toISOString().slice(0, 10)}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Reviews;
