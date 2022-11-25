import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../component/Shared/Loading';
import { toast } from 'react-toastify';
const AllSeller = () => {
    const {user} = useContext(AuthContext)
    const url = `http://localhost:4000/users?role=seller` 
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
        fetch(`http://localhost:4000/users/seller/${id}` , {
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
            fetch(`http://localhost:4000/users/${id}` , {
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
<img alt="" className="object-cover h-48 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={user?.photoUrl ? user?.photoUrl : `https://randomuser.me/api/portraits/men/${index+1}.jpg`} />
<div className="flex flex-col items-center">
    <h4 className="text-xl font-semibold">{user.name}</h4>
    <div className="flex mt-2 space-x-2">
        {
            user.isVerified !== true ? 
            <div className="btn btn-primary text-white"
            onClick={()=>handleVerify(user._id)}
            >Verify Seller</div>
            : <div className="flex rounded-lg shadow-sm px-6 py-3 text-white bg-success gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>

            Verified
          </div>
        }
     <div className="btn btn-error text-white"
            onClick={()=>handleDelete(user._id)}
            >Delete User</div>
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