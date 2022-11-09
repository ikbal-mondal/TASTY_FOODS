import React from 'react';

const Gallery = () => {
    return (
        <div>
            <div className=""><h1 className='text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50'>My Foods Gallery</h1></div>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.buzzfeed.com/buzzfeed-static/static/2017-10/20/15/campaign_images/buzzfeed-prod-fastlane-02/8-savory-recipes-for-buffalo-lovers-2-5630-1508527684-7_dblbig.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Qm5L0gw/staorss.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.buzzfeed.com/buzzfeed-static/static/2022-11/4/15/campaign_images/188d8cf73c6c/52-delicious-ways-to-use-leftover-rotisserie-chic-2-3814-1667576743-1_dblbig.jpg?resize=600:*&output-format=auto&output-quality=auto" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/67dc39c0847549b5819405d37b8c0d9f.jpeg?resize=1000:*&output-format=auto&output-quality=auto" />
		
		
	</div>
</section>
        </div>
    );
};

export default Gallery;