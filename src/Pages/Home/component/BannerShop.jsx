import React from 'react';
import { BiWorld } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiOutlineUsergroupAdd,AiOutlineVerified } from "react-icons/ai";
const BannerShop = () => {
    return (
        <section className='bg-neutral text-white py-20'>
            <div className=" container mx-auto">
	<div className="">
		<div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:justify-between ">
		<div className="item">
            <div className="flex justify-center items-center gap-4">
                <BiWorld className='text-4xl'/>
                <h2 className='text-2xl'>24H SERVICE</h2>

            </div>
        </div>
		<div className="item">
            <div className="flex justify-center items-center gap-4">
                <MdOutlineProductionQuantityLimits className='text-4xl'/>
                <h2 className='text-2xl'>FREE RETURNS</h2>

            </div>
        </div>
		<div className="item">
            <div className="flex justify-center items-center gap-4">
                <AiOutlineUsergroupAdd className='text-4xl'/>
                <h2 className='text-2xl'>Meet Face TO Face</h2>

            </div>
        </div>
		<div className="item">
            <div className="flex justify-center items-center gap-4">
                <AiOutlineVerified className='text-4xl'/>
                <h2 className='text-2xl'>Verify Product</h2>

            </div>
        </div>
			
		</div>
	</div>
</div>
        </section>
    );
};

export default BannerShop;