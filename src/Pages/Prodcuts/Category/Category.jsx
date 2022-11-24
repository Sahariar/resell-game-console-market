import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import TitleArea from '../../../component/Shared/TitleArea';
import { Link } from 'react-router-dom';
import Loading from '../../../component/Shared/Loading';
const Category = () => {
    const cateData = useLoaderData();
    const cateName =cateData.category;
    const nameLower = cateName.toLowerCase();

    const url = `http://localhost:4000/products?category=${nameLower}`;
    const { data: cateProducts = [], isLoading ,refetch } = useQuery({
        queryKey: ['cateProducts',nameLower],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
         if(isLoading){
            return <Loading></Loading>
         }else(
            refetch()
         )
        

    return (
        <section>
            <TitleArea>{cateData.category}</TitleArea>
            
            <div className="container mx-auto my-20">
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 px-6 gap-14">
 
 {
     cateProducts.map(item => <div className="card shadow-xl min-h-96 bg-white/20" key={item?._id}>
     <figure><img src={item?.img} alt={item?.category} /></figure>
     
     <div className="card-body">
       <h2 className="text- font-bold">{item?.name}</h2>
       <p className='font-bold text-sm pr-2' >
     Model : {item?.model}
    </p>
     <p><span className='font-bold'>About : </span>{item?.about}</p>
     <div className="flex font-bold justify-between items-start ">
    <p>
    Post Created On: {item?.createdAt.slice(0,10)} 
    </p>
    <p className=' pl-2' >
   Used: {item?.usePeriodOfTime} Years
    </p>
     </div>
     <div className="flex font-bold justify-between items-start ">
     <p className=' pr-2' >
       Original Price : ${item?.buyPrice}
    </p>
    <p className=' pl-2' >
    SellIng Price : ${item?.sellPrice}
    </p>
     </div>
     <div className="flex font-bold justify-between items-start ">
     
    <p className=' pl-2' >
   Seller: {item?.userName ? item?.userName : item?.email}
    </p>
     </div>
     <div className="flex font-bold justify-between items-start ">
     
    
     </div>
     <div className="justify-center my-4">
     <Link to={`/product/${item?._id}`} key={item?._id}> 
     <span className='btn btn-primary btn-block text-white'> 
     Book Now
     </span>
     </Link>
     </div>
 
     </div>

   </div>
      )
 }
   </div>
            </div>
        </section>
    );
};

export default Category;