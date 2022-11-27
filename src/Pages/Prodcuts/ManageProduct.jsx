import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../../component/Shared/Loading";
import { AuthContext } from "../../context/AuthProvider";

const ManageProduct = () => {
	const { user } = useContext(AuthContext);
	const { register, handleSubmit } = useForm();

	const url = `https://b612-used-products-resale-server-side-sahariar.vercel.app/products?email=${user?.email}`;
	const {
		data: userProducts = [],
		isLoader,
		refetch,
	} = useQuery({
		queryKey: ["userProducts", user?.email],
		queryFn: async () => {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		},
	});

	if (isLoader) {
		return <Loading></Loading>;
	}

	const handleStock = (data, id) => {
		console.log(data.target.value, id);
		const selectValue = data.target.value;
    const url = `https://b612-used-products-resale-server-side-sahariar.vercel.app/products/stock/${id}?value=${selectValue}`
    console.log(url);
    axios.put(url)
			.then(function (response) {
				console.log(response);
				if(response.data.acknowledged){
					toast.success('Product Stock Availability Successfully Update')
          refetch()
				
				}
			})
			.catch(function (error) {
				console.log(error);
				toast.error(error)
        
			});
		
	};

	return (
		<section className="user-product-area">
			<div className="title-area p-10">
				<h2 className="text-5xl text-center">My Products</h2>
			</div>
			<div className="user-area px-10">
			{
  userProducts.length > 0 ? <>

				<div className="overflow-x-auto">
					<table className="table w-full">
						<thead>
							<tr>
								<th></th>
								<th>Image</th>
								<th>Name</th>
								<th>Add To Advertisement</th>
								<th>In Stock</th>
								<th>Change Stock Status</th>
							</tr>
						</thead>
						<tbody>
							{userProducts.length > 0 &&
								userProducts.map((products, index) => (
									<tr className="hover" key={products._id}>
										<th>{index + 1}</th>
										<td>
											<img
												src={products.img}
												alt={products.name}
												className="h-12 w-12"
											/>
										</td>
										<td>{products.name}</td>
										<td>
											{products.featured ? (
												<div className="bg-success text-center max-w-fit px-5 py-3 rounded-lg text-white">
												{products.isStock ? "Advertising" : "Product Sold Out"}	
												</div>
											) : (
												<button
													className="btn btn-secondary px-12"
													onClick={() => {
														handleAddToFeatured(products._id);
													}}
												>
													Add
												</button>
											)}
										</td>

										<td>
										

											<div className="form-control w-full max-w-xs">
												<span className="label-text">
													{products.isStock ? "Yes" : "No"}
												</span>
											</div>
										</td>
										<td>
										
											<form onSubmit={handleSubmit(onsubmit)}>
												<div className="form-control w-full max-w-xs">
													<label className="label" htmlFor="isStock">
														<span className="label-text">
															
														</span>
														<span className="label-text-alt"></span>
													</label>

													<select
														{...register("isStock", { value: "" })}
														onChange={(e) => {
															handleStock(e, products._id);
														}}
														className="select select-primary max-w-fit"
														placeholder="Pick one"
													>
                              <option disabled={true} value="">
                               --Change Stock Status--
                            </option>
														<option value="true">Available</option>
														<option value="false">Sold</option>
													</select>
													
												</div>
											</form>
										</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
				</> : <div className="text-xl text-center">
No Product Found
</div>
} 
			</div>
		</section>
	);
};

export default ManageProduct;
