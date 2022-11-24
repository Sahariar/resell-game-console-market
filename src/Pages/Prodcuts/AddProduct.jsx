import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const [success , setSuccess] = useState(false);
    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
    const onSubmit =(data) =>{
        fetch('http://localhost:4000/hotels' , {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            setSuccess(true)
            console.log('success', data);
        })
    }
    
    return (
        <section className='add-room-area'>
        <div className="title-area p-10">
            <h2 className="text-5xl">
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
            <div className="col-span-full sm:col-span-3 flex flex-col">
            <label htmlFor="title" className="text-xl p-2">Title :</label>
                <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mx-2"
                placeholder="Title"
                {...register("title" , { required: "Please enter Title" })}
                defaultValue="Add Title"
            />				
            </div>
            <div className="col-span-full sm:col-span-3 flex flex-col">
            <label htmlFor="img" className="text-xl p-2">Image :</label>
                <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mx-2"
                placeholder="Image Url"
                {...register("img" , { required: "Please enter Room Url" })}
                defaultValue="Add img Url"
            />				
            </div>
            
            
            <div className="col-span-full sm:col-span-3 flex flex-col">
            <label htmlFor="bed" className="text-xl p-2">Bed :</label>
                <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mx-2"
                placeholder="1 King"
                {...register("bed" , { required: "Please enter Room Bed" })}
                defaultValue="1 King"
            />				
            </div>
            <div className="col-span-full sm:col-span-3 flex flex-col">
            <label htmlFor="price" className="text-xl p-2">Price :</label>
                <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mx-2"
                placeholder="54"
                {...register("price" , { required: "Please enter Room Price" })}
                defaultValue="40"
            />				
            </div>

            <div className="col-span-full sm:col-span-2 flex flex-col">
            <label htmlFor="area" className="text-xl p-2">Area :</label>
                <input
                type="text"
                className="input input-bordered input-secondary w-full max-w-xs mx-2"
                placeholder="75"
                {...register("area" , { required: "Please enter Room Url" })}
                defaultValue="75"
            />				
            </div>
            <div className="col-span-full sm:col-span-2 flex flex-col">
            <label htmlFor="person" className="text-xl p-2">
                 Person:
            </label>
            <div className=" w-full max-w-xs">
            <select {...register("person")} className="select select-secondary  w-full text-center " defaultValue="1" >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                 </select>
            </div>
            </div>
            <div className="col-span-full sm:col-span-2 flex flex-col ">
            <label htmlFor="type" className="text-xl p-2">
                 Type: 
            </label>
            <div className=" w-full max-w-xs">
            <select {...register("type")} className="select select-secondary w-full text-center" defaultValue='single'>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="studio">Studio</option>
                <option value="standard">Standard</option>
                <option value="deluxe">Deluxe</option>
                 </select>
            </div>
            </div>
            
            <div className="col-span-full flex flex-col">
            <label htmlFor="description" className="text-xl p-2">Description :</label>
   
            <textarea {...register("description")} placeholder="Description" className="textarea textarea-secondary w-full"  
            defaultValue="Description"
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