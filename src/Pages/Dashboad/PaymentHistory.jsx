import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const PaymentHistory = () => {
    const {user} = useContext(AuthContext);
    const url = `https://b612-used-products-resale-server-side-sahariar.vercel.app/payment/history?email=${user?.email}` 
    const { data: paymentHistory = [] ,isLoading} = useQuery({
    queryKey: ['paymentHistory' ,user?.email],
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

// console.log(paymentHistory);
    return (
         <section className='mx-auto w-10/12 my-10' >
            <h3 className='py-10 text-6xl text-center'>All Payment History</h3>

            <div className="booking-area">

{
  paymentHistory.length > 0 ? <>


            <div className="overflow-x-auto">
  <table className="table w-full">
      <thead>
      <tr>
        <th></th>
        <th>Payment Id</th>
        <th>ItemName</th>
        <th>Payment Status</th>
        <th>Payment Date</th>
        <th>Price</th>
        
      </tr>
    </thead> 
   
 
    <tbody>

           { paymentHistory.map((book, index) =><tr className="active"  key={book._id}>
            <th>{index+1}</th>
            <td>{book.transactionId}</td>
       
            <td>{book.itemName}</td>
            
            
            <td>{
              book.paid ? <span className='bg-success rounded-md shadow-md text-white py-3 px-8'> Paid</span>
              :
			 <Link to={`/dashboard/payment/${book._id}`}>
				<button className='btn btn-primary text-white capitalize'>Pay ${book.itemPrice} </button> 
			</Link>
		}{
		 
		} 
		</td>
        <td>{book.paymentDate.slice(0, 10)}</td>
        <td>${book.itemPrice}</td>
    </tr> )
}
      
    </tbody>
 
  </table>
</div>
</> : 
<div className="text-xl text-center">
No Order Found
</div>

}
            </div>
        </section>
    );
};

export default PaymentHistory;