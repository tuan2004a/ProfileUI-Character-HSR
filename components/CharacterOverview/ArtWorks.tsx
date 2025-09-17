import { Character } from '@/types/CharacterTypes';
import React from 'react';

interface ArtWorksProps {
	currentItem: Character;
}

const ArtWorks: React.FC<ArtWorksProps> = ({ currentItem }) => {
	return (
		<div className="grid grid-cols-2 gap-4 h-full z-10">
			<h1 className="col-span-2 text-2xl !font-semibold ">Art Words</h1>
			<div className="shadow-2xl text-center rounded-3xl h-60 w-45 overflow-hidden box-border border-2 border-white">
				<img loading="lazy" className="size-full object-cover" src={currentItem?.img?.ArtWords?.art1} alt="" />
			</div>
			<div className="shadow-2xl text-center rounded-3xl h-60 w-45 overflow-hidden box-border border-2 border-white">
				<img loading="lazy" className="size-full object-cover" src={currentItem?.img?.ArtWords?.art2} alt="" />
			</div>
			<button className="font-Tahoma col-span-2 bg-white rounded-2xl text-lg py-2 !font-semibold">View More</button>
		</div>
	);
};

export default ArtWorks
