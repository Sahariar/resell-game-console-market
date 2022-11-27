import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ReportsItem = () => {
    const url = `https://b612-used-products-resale-server-side-sahariar.vercel.app/products/reported` 
    const { data: reported = [], refetch ,isLoading } = useQuery({
    queryKey: ['reported'],
    queryFn: async () => {
    const res = await fetch(url, {
    headers: {
    authorization: `bearer ${localStorage.getItem('accessUserToken')}`
    }
    });
    const data = await res.json();
    return data;
    }
    })
    if(isLoading){
        return isLoading
    }
    
    const handleDelete = (id) =>{
        console.log(id);
        const url = `https://b612-used-products-resale-server-side-sahariar.vercel.app/products/reported/${id}`
        axios.delete(url, {
            headers: {
              authorization: `bearer ${localStorage.getItem('accessUserToken')}`
              },
          })
        .then(response => {
            console.log(response)
            toast.success("Item Deleted Successfully",{
                position: "top-center",
            })
            refetch();
        })
        .catch(error => {
            toast.error(error)
            console.error('There was an error!', error);
        });

    }

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
				<button className='btn btn-error text-white capitalize' onClick={()=>{
                    handleDelete(reported._id)
                }}>Delete Product</button> 
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