import { Character } from '@/types/CharacterTypes';
import React from 'react';
import { BsSearch } from "react-icons/bs";

interface RecentSeachsProps {
	currentItem: Character;
}

const RecentSeachs: React.FC<RecentSeachsProps> = ({currentItem}) => {
    return (
		<div className="space-y-3 flex flex-col justify-between">
			<h1 className="wordSpacing !text-2xl !font-semibold mb-4">Recent Seachs</h1>
			<ul className="h-full w-45.5 flex flex-col justify-between font-Tahoma *:line-clamp-1 *:!font-medium *:rounded-full *:w-full *:bg-white *:px-2 *:py-2.5 *:flex *:items-center *:gap-x-1.5 *:text-center *:text-nowrap">
				<li className="">
					<BsSearch className="text-[22px]" />
					{currentItem?.name} Build
				</li>
				<li className="">
					<BsSearch className="text-[22px]" />
					{currentItem?.name} Wallpaper
				</li>
				<li className="">
					<BsSearch className="text-[22px]" />
					{currentItem?.name} Icon
				</li>
				<li className="">
					<BsSearch className="text-[22px]" />
					{currentItem?.name} Cosplay
				</li>
				<li className="">
					<BsSearch className="text-[22px]" />
					{currentItem?.name} Art
				</li>
			</ul>
		</div>
	);
}

export default RecentSeachs
