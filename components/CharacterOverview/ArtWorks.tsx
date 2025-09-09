import React from 'react';

const ArtWorks = () => {
    return (
		<div className="grid grid-cols-2 gap-4 h-full">
			<h1 className="col-span-2 text-2xl !font-semibold ">Art Words</h1>
			<div className=" text-center rounded-3xl h-60 w-45 overflow-hidden  border border-white">
				<img className="size-full object-cover" src="/img/artWord/ArtPsyche1.jpg" alt="" />
			</div>
			<div className=" text-center rounded-3xl h-60 w-45 overflow-hidden  border border-white">
				<img className="size-full object-cover" src="/img/artWord/ArtPsyche3.jpg" alt="" />
			</div>
			<button className="col-span-2 bg-white rounded-2xl text-lg py-2 !font-semibold">View More</button>
		</div>
	);
}

export default ArtWorks
