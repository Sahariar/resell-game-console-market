import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../component/Shared/Loading';
import { AuthContext } from '../../context/AuthProvider';

const ManageProduct = () => {
    const {user} = useContext(AuthContext)

    const url = `http://localhost:4000/products?email=${user?.email}`
    const { data: userProducts = [] , isLoader , refetch} = useQuery({
    queryKey: ['userProducts' ,user?.email],
    queryFn: async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
    }
    })
    console.log(userProducts);
    if(isLoader){
        return <Loading></Loading>
    }
    const handleDelete =(id)=>{
        let yesDelete = prompt("Please Write Yes to Delete Product");
        console.log(id);
        if(yesDelete.toLowerCase() === ""){
            fetch(`http://localhost:4000/users/${id}` , {
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
        <section className='user-product-area'>
        <div className="title-area p-10">
            <h2 className="text-5xl">
                My Products
            </h2>
        </div>
        <div className="user-area px-10">
        <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>In Stock</th>
        <th>Add To Advertisement</th>
        <th>Is Stock</th>
      </tr>
    </thead>
    <tbody>

    {
                    userProducts.length > 0 &&
                    userProducts.map( (products , index) =><tr className="hover" key={products._id}>
                                        <th>{index+1}</th>
                                        <td><img src={products.img} alt={products.name} className="h-12 w-12" /></td>
                                        <td>{products.name}</td>
                                        <td>{products.isStock ? "Yes" :"No"}</td>
                                        <td>
                                            {
                                              products.featured ? <div className="btn bg-success">
                                                Advertising
                                              </div> : <button
                      className="btn btn-secondary px-12"
                      onClick={() => {
                        handleAddToFeatured(products._id);
                      }}
                    >
                      Add
                    </button>
                                            }</td>
                            
                            <td>
                                <div className="btn btn-error text-white"
            onClick={()=>handleDelete(products._id)}
            >Delete User</div>
   </td>
                            
                                        </tr>

                    )}

                
                
                
                </tbody>
            </table>
            </div>

            </div>
        </section>
    );
};

export default ManageProduct;