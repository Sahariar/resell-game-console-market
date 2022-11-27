import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../component/Shared/Loading';
import { toast } from 'react-toastify';
import { BsTrash } from "react-icons/bs";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { GoVerified } from "react-icons/go";
const AllSeller = () => {
    const {user} = useContext(AuthContext)
    const url = `https://b612-used-products-resale-server-side-sahariar.vercel.app/users?role=seller` 
    const { data: sellers = [], isLoading , refetch } = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
    }
    })
    console.log(sellers);
    if(isLoading){
        return <Loading></Loading>
    }

    const handleVerify =(id)=>{
        console.log(id);
        fetch(`https://b612-used-products-resale-server-side-sahariar.vercel.app/users/seller/${id}` , {
            method:"PUT"
        }).then(res => res.json())
        .then(data => {
          if(data.modifiedCount > 0){
            toast.success('Verify Successful')
            refetch();
          }
        })

    }

    const handleDelete =(id)=>{
        let yesDelete = prompt("Please Write Yes to Delete User");
        console.log(id , yesDelete);
        if(yesDelete.toLowerCase() === "yes"){
            fetch(`https://b612-used-products-resale-server-side-sahariar.vercel.app/users/${id}` , {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessUserToken')}`
                },
                method:"DELETE"
            }).then(res => res.json())
            .then(data => {
              if(data.modifiedCount > 0){
                toast.success('Delete user Successful')
                refetch();
              }
            })
        }
    }

    return (
        <section className='mx-auto w-10/12 my-10' >
            <h3 className='py-10'>All Sellers</h3>

            <div className="user-area">

		<div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {
sellers.map( (user , index) =><div className="space-y-4 card bg-primary/10 py-10" key={user._id}>
<img alt="" className="object-cover h-24 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={user?.photoUrl ? user?.photoUrl : `https://randomuser.me/api/portraits/men/${index+1}.jpg`} />
<div className="flex flex-col items-center">
    <h4 className="text-xl font-semibold">{user.name}</h4>
    <div className="flex flex-col">
        {
            user.isVerified !== true ? 
            <div className="btn btn-primary text-white my-2"
            onClick={()=>handleVerify(user._id)}
            ><MdRadioButtonUnchecked className='mx-2'/> Verify Seller</div>
            : <div className="btn flex rounded-lg items-center justify-center shadow-sm my-2 text-white bg-success">
            <GoVerified className='mx-2'/>
            Verified
          </div>
        }
     <div className="btn btn-error text-white flex space-x-2"
            onClick={()=>handleDelete(user._id)}
            ><BsTrash className='mx-2'/> Delete User</div>
    </div>
</div>
</div> )
                }
			
		</div>
            </div>
        </section>
    );
};

export default AllSeller;