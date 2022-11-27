import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../component/Shared/Loading';
import { AuthContext } from '../../context/AuthProvider';

const WishList = () => {
	const { user } = useContext(AuthContext);
  
	const url = `https://b612-used-products-resale-server-side-sahariar.vercel.app/bookings?email=${user?.email}&wishlist="true"`;
	const {
		data: bookings = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["bookings", user?.email],
		queryFn: async () => {
			const res = await fetch(url, {
        headers: {
        authorization: `bearer ${localStorage.getItem('accessUserToken')}`
        }
      });
			const data = await res.json();
			return data;
		},
	});
	if (isLoading) {
		return <Loading></Loading>;
	}

    return (
        <section className='mx-auto w-10/12 my-10' >
        <h3 className='py-10 text-6xl text-center'>All WishList</h3>

        <div className="booking-area">

{
bookings.length > 0 ? <>


        <div className="overflow-x-auto">
<table className="table w-full">
  <thead>
  <tr>
    <th></th>
    <th>ItemName</th>
    <th>User Email</th>
    <th>Price</th>
    <th>location To Meet</th>
    <th>Payment Status</th>
  </tr>
</thead> 


<tbody>

       { bookings.map((book, index) =><tr className="active"  key={book._id}>
        <th>{index+1}</th>
        <td>{book.itemName}</td>
        <td>{book.email}</td>
        <td>${book.itemPrice}</td>
        <td>{book.location}</td>
        <td>{
          book.paid ? <span className='bg-success rounded-md shadow-md text-white py-3 px-8'> Paid</span>
          :
         <Link to={`/dashboard/payment/${book._id}`}>
            <button className='btn btn-primary text-white capitalize'>Pay ${book.itemPrice} </button> 
        </Link>
    }{
     
    } 
    </td>
</tr> )
}
  
</tbody>

</table>
</div>
</> : 
<div className="text-xl text-center">
No Wish List Found
</div>

}
        </div>
    </section>
    );
};

export default WishList;