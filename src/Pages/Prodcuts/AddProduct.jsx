import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
const AddProduct = () => {
    const [success , setSuccess] = useState(false);
    const {user} = useContext(AuthContext)

    const navigate = useNavigate();
    const url = `http://localhost:4000/products/category`;

    const { data: productCate = [] } = useQuery({
        queryKey: ['productCate',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
    const onSubmit =(data) =>{
        toast.info('Product is adding to Our Site.')
        const sellPrice = parseInt(data.sellPrice)
        let stokeValue;
        let featuredValue;
        if(data.isStock === "true" ){
            stokeValue = true
        } else{
            stokeValue = false
        }
        if(data.featured === "true" ){
            featuredValue = true
        } else{
            featuredValue = false
        }
        const lowCaseCat = data.category.toLowercase()
        console.log(data.sellPrice , 'product');

        const bookingData = {
            ...data,
            sellPrice :sellPrice,
            sellerName:user?.displayName,
            email:user?.email,
            isStock:stokeValue,
            featured:featuredValue,
            category:lowCaseCat
        }
        console.log(bookingData);
        axios.post("http://localhost:4000/products", bookingData)
        .then(function (response) {
            console.log(response);
            if(response.data.acknowledged){
                toast.success('Product added Successfully')
                navigate('/dashboard/myproduct')
            }
        })
        .catch(function (error) {
            console.log(error);
            toast.error(error)
        });
    }
    
    return (
        <section className='add-room-area'>
        <div className="title-area p-10">
            <h2 className="text-5xl text-center">
                Add Product
            </h2>
        </div>
        <div className="container mx-auto">
            <div className="card w-8/12 mx-auto bg-indigo-50 shadow-xl my-2">
            { success === true && <div className="alert alert-success shadow-lg p-20">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span> Added Successfully </span>
            </div>
        </div>}
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 p-20">
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-2">
            <div className="col-span-full sm:col-span-2 flex flex-col">
            <label htmlFor="name" className="text-xl p-2">Product Name :</label>
                <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mx-2"
                placeholder="Title"
                {...register("name" , { required: "Please enter Product Name" })}
                defaultValue="Product name"
            />				
            </div>
            <div className="col-span-full sm:col-span-2 flex flex-col">
            <label htmlFor="img" className="text-xl p-2">Image :</label>
                <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mx-2"
               
                {...register("img" , { required: "Please enter Room Url" })}
                placeholder="Add img Url"
            />				
            </div>
            
            
            <div className="col-span-full sm:col-span-2 flex flex-col">
            <label htmlFor="Model" className="text-xl p-2">Model:</label>
                <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mx-2"
                
                {...register("Model" , { required: "Please enter Model" })}
                
            />				
            </div>
            <div className="col-span-full sm:col-span-2 flex flex-col">
            <label htmlFor="price" className="text-xl p-2">Orginal Price :</label>
                <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mx-2"
                placeholder="54"
                {...register("buyPrice" , { required: "Please enter Buy Price" })}
                defaultValue="40"
            />				
            </div>
            <div className="col-span-full sm:col-span-2 flex flex-col">
            <label htmlFor="sellPrice" className="text-xl p-2">Sell Price :</label>
                <input
                type="number"
                className="input input-bordered input-secondary w-full max-w-xs mx-2"
                placeholder="54"
                {...register("sellPrice" , { required: "Please enter Selling Price" })}
                
            />				
            </div>
            <div className="col-span-full sm:col-span-2 flex flex-col">
            <label htmlFor="usePeriodOfTime" className="text-xl p-2">Uses Period Of Time  :</label>
                <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mx-2"
                placeholder="4"
                {...register("usePeriodOfTime" , { required: "Please enter Selling Price" })}
                defaultValue="4"
            />				
            </div>

            <div className="col-span-full sm:col-span-2 flex flex-col">
            <label htmlFor="featured" className="text-xl p-2">Advertisement :</label>
            <select {...register("featured")} className="select select-secondary  w-full text-center " defaultValue="Good" >
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>				
            </div>
            <div className="col-span-full sm:col-span-2 flex flex-col">
            <label htmlFor="conditionType" className="text-xl p-2">
            Condition Type:
            </label>
            <div className=" w-full max-w-xs">
            <select {...register("conditionType")} className="select select-secondary  w-full text-center " defaultValue="Good" >
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Excellent">Excellent</option>
                 </select>
            </div>
            </div>
            <div className="col-span-full sm:col-span-2 flex flex-col ">
            <label htmlFor="type" className="text-xl p-2">
            Category: 
            </label>
            <div className=" w-full max-w-xs">
            <select {...register("category")} className="select select-secondary w-full text-center" defaultValue='Please Select'>
            <option  value={"Please Select"}>Select one</option>
                {
                    productCate.map(cate => <option key={cate._id}
                        
                        value={cate.category}>{cate.category}</option>)
                }

                
                 </select>
            </div>
            </div>
            <div className="col-span-full sm:col-span-2 flex flex-col ">
            <label htmlFor="contactNo" className="text-xl p-2">
            Contact No: 
            </label>
            <div className=" w-full max-w-xs">
            <input
                type="tel"
                className="input input-bordered input-secondary w-full max-w-xs mx-2"
                placeholder="54"
                {...register("contactNo" , { required: "Please enter contact No" })}
                defaultValue="908098098"
            />	
            </div>
            </div>
        <div className="col-span-full sm:col-span-2 flex flex-col">
            <label htmlFor="isStock" className="text-xl p-2">In Stock :</label>
            <select {...register("isStock")} className="select select-secondary  w-full text-center " defaultValue="Good" >
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>				
            </div>
            <div className="col-span-full sm:col-span-2 flex flex-col ">
            <label htmlFor="address" className="text-xl p-2">
            Location:
            </label>
            <div className=" w-full max-w-xs">
            <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mx-2"
                {...register("address" , { required: "Please enter location" })}
                placeholder="Dhaka"
            />	
            </div>
            </div>
            <div className="col-span-full flex flex-col">
            <label htmlFor="about" className="text-xl p-2">about :</label>
   
            <textarea {...register("about")} placeholder="Description" className="textarea textarea-secondary w-full"  
            defaultValue="about"
            />			
            </div>
            
        </div>
            <div className="space-y-2">
                <div className="w-4/12 mx-auto">
        <input type="submit" className="w-full px-8 py-3 font-semibold rounded-md btn btn-primary" />
                </div>

    </div>
            
        </form>

        
        {errors.title && <div className="bg-error p-10"><p className="text-white">{errors.title.message}</p> </div>}
        
            </div>
        </div>
    </section>
    );
};

export default AddProduct;