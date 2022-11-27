import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TitleArea from "../../component/Shared/TitleArea";
import {
	MdCategory,
	MdInfo,
	MdModelTraining,
	MdSell,
	MdLocationSearching,
} from "react-icons/md";
import { AiOutlineDeploymentUnit, AiOutlineStock,AiOutlineUser } from "react-icons/ai";
import { BsCalendarDate,BsPhone,BsMailbox } from "react-icons/bs";
import ModalBook from "../../component/ModalBook/ModalBook";
import { RiAdvertisementFill } from "react-icons/ri";

const SingleProduct = () => {
	const product = useLoaderData();
    const [modalData, setModalData] = useState([]);
	console.log(product);
	return (
		<section className="single-details-area">
			<div>
				<TitleArea>{product.name}</TitleArea>
			</div>

			<div className="details-area my-10 ">
				<div className="container mx-auto">
					<div className="card bg-primary/5 p-12 ">
						<div className="flex flex-col xl:flex-row space-x-9">
							<img src={product.img} alt={product.name} className="w-96 h-96 mx-auto" />
							<div className="info-area w-full">
								<h4 className="text-xl py-4">About:</h4>
								{product.about}
								<div className="flex flex-col xl:flex-row justify-between">
									<div className="cate-area capitalize text-xl my-5 flex flex-col xl:flex-row items-center">
										<MdCategory className="mx-2"/>
										Category - {product.category}
									</div>

									<div className="cate-area capitalize text-xl my-5 flex justify-center items-center px-2">
										<MdModelTraining className="mx-2"/> Model - {product.model}
									</div>
									
                                    <div className="cate-area capitalize text-xl my-5 flex justify-center items-center px-2">
										<MdInfo className="mx-2"/> Condition - {product.conditionType}
									</div>

									<div className="cate-area capitalize text-xl my-5 flex justify-center items-center px-2">
										<AiOutlineDeploymentUnit className="mx-2"/> - {product.usePeriodOfTime}{" "}
										Years
									</div>

									
								</div>
								<div className="flex flex-col xl:flex-row justify-between items-center">
									
								</div>
								<div className="flex flex-col xl:flex-row justify-between">
									<div className="cate-area capitalize text-xl my-5 flex justify-center items-center px-2">
										<MdLocationSearching  className="mx-2"/> Address- {product.address}
									</div>
									
                                    <div className="cate-area capitalize text-xl my-5 flex justify-center items-center px-2">
										<MdSell className="mx-2"/> Originals Price- ${product.buyPrice}
									</div>
									<div className="cate-area capitalize text-xl my-5 flex justify-center items-center px-2">
										<MdSell className="mx-2"/> Sell Price- ${product.sellPrice}
									</div>
								</div>
								<div className="flex flex-col xl:flex-row justify-between">
									<div className="cate-area capitalize text-xl my-5 flex justify-center items-center px-2">
										<BsCalendarDate className="mx-2" /> Create At- {product.createdAt.slice(0, 10)}
									</div>
									<div className="cate-area capitalize text-xl my-5 flex justify-center items-center px-2">
										<AiOutlineStock className="mx-2" /> In Stock-{" "}
										{product.isStock ? "Available" : "Sold Out"}
									</div>
                                    <div className="cate-area capitalize text-xl my-5 flex justify-center items-center px-2">
										<RiAdvertisementFill className="mx-2"/> Advertised - {product.featured ? "Yes" : "No"}
									</div>
								</div>
								<div className="flex flex-col xl:flex-row justify-between">
									<div className="cate-area capitalize text-xl my-5 flex justify-center items-center px-2">
									
									<AiOutlineUser className="mx-2"/>
											Seller Name:
											
											{product.isVerified ? (
												
												<div
													className="tooltip tooltip-top flex justify-center items-center mx-2"
													data-tip="Verified Seller"
												>{product.sellerName}
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														strokeWidth={1.5}
														stroke="currentColor"
														className="w-6 h-6 text-primary"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
														/>
													</svg>
												</div>
											) : (
												<>
												{product.sellerName}
												</>
											)}
                                          	
									
								
									</div>
                                    <div className="cate-area capitalize text-xl my-5 flex justify-center items-center px-2">
										<BsPhone className="mx-2"/> Contact No- {product.contactNo}
									</div>
									<div className="cate-area capitalize text-xl my-5 flex justify-center items-center px-2">
										<BsMailbox  className="mx-2"/> Mail- {product.email}
									</div>
									
								</div>
                                <div className="justify-center my-4 w-80 mx-auto">
									<label
										htmlFor="bookModal"
										className="btn btn-primary btn-block text-white"
										onClick={() => setModalData(product)}
									>
										Book Now
									</label>
								</div>
							</div>
						</div>
                  
					</div>
				</div>
			</div>
            <ModalBook
						modalData={modalData}
						setModalData={setModalData}
					></ModalBook>
		</section>
	);
};

export default SingleProduct;
