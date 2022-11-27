import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const ReportsItem = () => {
    const url = `http://localhost:4000/products/reported` 
    const { data: reported = [], refetch ,isLoading } = useQuery({
    queryKey: ['reported'],
    queryFn: async () => {
    const res = await fetch(url, {
    headers: {
    authorization: `bearer ${localStorage.getItem('accessToken')}`
    }
    });
    const data = await res.json();
    return data;
    }
    })
    if(isLoading){
        return isLoading
    }
    console.log(reported);
    return (
        <section className='mx-auto w-10/12 my-10' >
            <h3 className='py-10 text-5xl text-center'>Reported Items</h3>

            <div className="reported-area">


            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Image</th>
        <th>Seller Name</th>
        <th>Price</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
            reported.map((reported, index) =><tr className="active"  key={reported._id}>
            <th>{index+1}</th>
            <td>{reported.name}</td>
            <td><img src={reported.img} className="w-12 h-12" alt="" /></td>
            <td>{reported.sellerName}</td>
            <td>${reported.sellPrice}</td>
            <td>
				<button className='btn btn-error text-white capitalize'>Delete Product</button> 
		    </td>
          </tr> )
        }
      
    </tbody>
  </table>
</div>
		
            </div>
        </section>
    );
};

export default ReportsItem;