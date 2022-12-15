import React from 'react';

const ImageFeed = () => {
    return (
        <section className="pt-20">
            <div className='pb-12'>
					<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-primary">
						Our Social Feed
					</h2>
					<p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
						You can find our social Feeds 
					</p>
				</div>
	<div className="flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
		</div>
	</div>
</section>
    );
};

export default ImageFeed;