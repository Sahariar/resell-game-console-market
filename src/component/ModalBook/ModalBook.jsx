import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
const ModalBook = ({ modalData , setModalData }) => {
	const { user } = useContext(AuthContext);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		const bookingData = {
			...data,
			itemName: modalData.name,
			itemPrice: modalData.sellPrice,
			location: data.location,
			contactNo: data.contactNo,
		};

		console.log(bookingData, "bookedData");

		axios.post("http://localhost:4000/bookings", bookingData)
			.then(function (response) {
				console.log(response);
				if(response.data.acknowledged){
					toast.success('Item Booked Successfully')
				
				}
			})
			.catch(function (error) {
				console.log(error);
				toast.error(error)
			});
	};
	return (
		<div>
			{/* Put this part before </body> tag */}
			<input type="checkbox" id="bookModal" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-center">Booking From</h3>
					<label htmlFor="bookModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col mx-auto space-y-6 px-6"
					>
						<div className="grid grid-cols-2 gap-4 col-span-full">
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="userName" className="w-full">
									User FullName
								</label>
								<input
									type="text"
									placeholder="bill"
									{...register("userName")}
									className="input input-bordered w-full input-disabled"
									readOnly
									value={user?.displayName}
								/>
							</div>

							<div className="col-span-full sm:col-span-3">
								<label htmlFor="email" className="w-full">
									Email
								</label>
								<input
									placeholder=""
									type="email"
									{...register("email", {
										required: "email is Required",
									})}
									className="input input-bordered w-full input-disabled"
									readOnly
									value={user?.email}
								/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label className="w-full" htmlFor="itemName">
									Item Name
								</label>
								<input
									type="text"
									{...register("itemName")}
									className="input input-bordered w-full input-disabled"
									defaultValue={modalData?.name}
								/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="itemPrice" className="w-full">
									Item Price
								</label>
								<input
									type="number"
									{...register("itemPrice")}
									className="input input-bordered w-full input-disabled"
									defaultValue={modalData?.sellPrice}
								/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="itemPrice" className="w-full">
									Item Price
								</label>
							</div>

							<div className="col-span-full sm:col-span-3">
								<label htmlFor="contactNo" className="w-full">
									Contact No:
								</label>
								<input
									type="tel"
									{...register("contactNo")}
									className="input input-bordered w-full"
									defaultValue={"+880XXXXXXXX"}
								/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="location" className="w-full">
									Where you want to meet for this Exchange ?
								</label>
								<input
									type="text"
									{...register("location")}
									className="input input-bordered w-full"
									defaultValue={"ex: Dhaka"}
								/>
							</div>
						</div>
						<input
							type="submit"
							value={"Submit"}
							className="w-1/2 btn btn-primary py-4 mx-auto"
						/>
					</form>

				
				</div>
			</div>
		</div>
	);
};

export default ModalBook;
