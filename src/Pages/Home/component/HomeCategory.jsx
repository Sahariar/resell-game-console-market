import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const HomeCategory = () => {

    const productUrl = `http://localhost:4000/products/category`;

    const { data: productCate = [] } = useQuery({
        queryKey: ['productCate',],
        queryFn: async () => {
            const res = await fetch(productUrl);
            const data = await res.json();
            return data;
        }
    })

    
    return (
        <section className='home-category-section py-20'>
        <div className="container py-12 mx-auto space-y-24">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-primary">Game Console Category</h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">You can find most Popular Brands in our Collection</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto px-6 xl:grid-cols-5 gap-4">
 
            {
                productCate.map(cate => <Link to={`/product/category/${cate._id}`} key={cate._id}>
                <div className="card  h-80 lg:w-60 lg:h-60 shadow-xl bg-primary " >
                <figure><img src={cate.catImg} alt={cate.category} /></figure>
                
                <div className="card-body flex items-center justify-center">
                  <h2 className="text-white text-xl ease-in hover:text-2xl duration-300 capitalize">{cate.category}</h2>
                </div>
            
              </div>
                  </Link>)
            }
              </div>

            </div>
        </section>
    );
};

export default HomeCategory;