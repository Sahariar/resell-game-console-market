import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../component/Shared/Loading';
import { toast } from 'react-toastify';
const Allbuyers = () => {
    const {user} = useContext(AuthContext)
    const url = `https://b612-used-products-resale-server-side-sahariar.vercel.app/users?role=buyer` 
    const { data: buyers = [], isLoading , refetch } = useQuery({
    queryKey: ['buyers'],
    queryFn: async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
    }
    })
    console.log(buyers);
    if(isLoading){
        return <Loading></Loading>
    }
    const handleDelete =(id)=>{
        let yesDelete = prompt("Please Write Yes to Delete User");
        console.log(id , yesDelete);
        if(yesDelete.toLowerCase() === "yes"){
            toast.info("user is Deleting")
            fetch(`https://b612-used-products-resale-server-side-sahariar.vercel.app/users/${id}` , {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessUserToken')}`
                },
                method:"DELETE"
            }).then(res => res.json())
            .then(data => {
                console.log(data);
              if(data.modifiedCount > 0){
                toast.success('Delete user Successful')
                refetch();
              }
            })
        }
    }

    return (
        <section className='mx-auto w-10/12 my-10' >
        <h2 className='text-6xl text-center my-10'>
        All Buyers
            </h2>
        <div className="user-area">

    <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
buyers.map( (user , index) =><div className="space-y-4 card bg-primary/10 py-10" key={user._id}>
<img alt="" className="object-cover h-48 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src={user?.photoUrl ? user?.photoUrl : `https://randomuser.me/api/portraits/men/${index+49}.jpg`} />
<div className="flex flex-col items-center">
<h4 className="text-xl font-semibold">{user.name}</h4>
<h4 className="text-xl font-semibold">{user.email}</h4>
<div className="btn btn-error text-white"
            onClick={()=>handleDelete(user._id)}
            >Delete User</div>
</div>
</div> )
            }
        
    </div>
        </div>
    </section>
    );
};

export default Allbuyers;