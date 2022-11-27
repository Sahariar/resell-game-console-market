import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import TitleArea from "../../../component/Shared/TitleArea";
import { Link } from "react-router-dom";
import Loading from "../../../component/Shared/Loading";
import ModalBook from "../../../component/ModalBook/ModalBook";
import axios from "axios";
import { MdOutlineReportGmailerrorred,MdShoppingCart } from "react-icons/md";
import { TbBrandBooking,TbShoppingCart } from "react-icons/tb";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthProvider";
const Category = () => {
	const cateData = useLoaderData();
	const {user} = useContext(AuthContext)
	const [modalData, setModalData] = useState([]);
	const [userINfo, setUserInfo] = useState("");
	const [sellerMail, setSellerMail] = useState("");
	const url = `https://b612-used-products-resale-server-side-sahariar.vercel.app/products?category=${cateData.category}`;
	const {
		data: cateProducts = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["cateProducts", cateData.category],
		queryFn: async () => {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Loading></Loading>;
	} else refetch();

	const handleReport = (item) => {
		console.log(item);

		const id = item._id;
		console.log(id);
		axios
			.put(`https://b612-used-products-resale-server-side-sahariar.vercel.app/products/reported?id=${id}`)
			.then(function (response) {
				console.log(response);
				if (response.data.acknowledged) {
					toast.success("Product Reported Successfully");
				}
			})
			.catch(function (error) {
				console.log(error);
				toast.error(error);
			});
	};

	const handleWishList = (item) => {

		const bookingData = {
			userName:user?.displayName,
			email:user?.email,
			itemName: item?.name,
			itemPrice: item?.sellPrice,
			paid:false,
			product_id:item._id,
			wishList: true,
			location:"Not Provided"
		};

		console.log(bookingData, "bookedData");

		axios.post("https://b612-used-products-resale-server-side-sahariar.vercel.app/bookings", bookingData)
			.then(function (response) {
				console.log(response);
				if(response.data.acknowledged){
					toast.success('Item added to Wish List Successfully')
				}
			})
			.catch(function (error) {
				console.log(error);
				toast.error(error)
			});
	};

	return (
		<section>
			<TitleArea>{cateData.category}</TitleArea>

			<div className="container mx-auto my-20">
				<div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 px-6 gap-14">
					{cateProducts.map((item) => (
						<div
							className="card w-full shadow-xl min-h-96 bg-white/20"
							key={item?._id}
						>
							<figure>
								<img src={item?.img} alt={item?.category} className="xl:h-96" />
							</figure>

							<div className="card-body">
								<h2 className="text- font-bold">{item?.name}</h2>

								<p>
									<span className="font-bold">About : </span>
									{item?.about}
								</p>
								<div className="flex flex-col lg:flex-row  justify-between items-start ">
									<div className="flex flex-col justify-start items-start ">
										<p className="font-bold text-sm pr-2">
											Model : {item?.model}
										</p>
										<p>Used: {item?.usePeriodOfTime} Years</p>
									</div>
									<div className="flex flex-col">
										<p className=" pr-2">Original Price : ${item?.buyPrice}</p>

										<p>Posted On: {item?.createdAt.slice(0, 10)}</p>
									</div>
									<div className="flex flex-col">
										<p className="">SellIng Price : ${item?.sellPrice}</p>
										<div className="flex">
											Seller Name:{" "}
											{item.isVerified ? (
												<div
													className="tooltip tooltip-top"
													data-tip="Verified Seller"
												>
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
												""
											)}
											{item.sellerName}
										</div>
									</div>
								</div>

								<div className="flex flex-col">
									<p className="flex">Condition: {item?.conditionType}</p>
									<p className="flex">Contact No: +{item?.contactNo}</p>
									<p className="flex">Location: {item?.address}</p>
								</div>
								<div className="flex lg:flex-row justify-around my-4">
									<button
										className="btn bg-error ease-in w-5/12 mr-2 shadow-md hover:bg-error/80  border-error hover:border-error/80 text-center justify-center items-center text-white"
										onClick={() => handleReport(item)}
									>
										{" "}
										<MdOutlineReportGmailerrorred className="text-2xl mx-2" />{" "}
										Report to Admin{" "}
									</button>
									<button
										className="btn btn-secondary shadow-md w-5/12 ease-in hover:btn-secondary/80 border-secondary hover:border-secondary/80 text-center justify-center items-cente"
										onClick={() => handleWishList(item)}
									>
										{" "}
										<TbShoppingCart className="text-2xl mx-2" />
										Add to WishList
									</button>
									</div>
								<div className="justify-center my-4">
								
									<label
										htmlFor="bookModal"
										className="btn btn-primary btn-block text-white"
										onClick={() => setModalData(item)}
									>
										<TbBrandBooking className="text-2xl mx-2" /> Book Now
									</label>
								</div>
							</div>
						</div>
					))}

					<ModalBook
						modalData={modalData}
						setModalData={setModalData}
					></ModalBook>
				</div>
			</div>
		</section>
	);
};

export default Category;
