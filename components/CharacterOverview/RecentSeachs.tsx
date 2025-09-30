import { useCharacterContext } from '@/context/CharactersContext';
import { Character } from '@/types/CharacterTypes';
import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import { BsSearch } from "react-icons/bs";

interface RecentSeachsProps {
	// charDetailById: Character;
}

const RecentSeachs: React.FC<RecentSeachsProps> = () => {

	const { charDetailById } = useCharacterContext();

	const containerRef = useRef<HTMLDivElement>(null);

    return (
		<div ref={containerRef} className="space-y-3 flex flex-col justify-between z-10">
			<h1 className="wordSpacing !text-2xl !font-semibold mb-4">Recent Seachs</h1>
			<ul className="h-full w-45.5 flex flex-col justify-between font-Tahoma *:line-clamp-1 *:!font-medium *:rounded-full *:w-full *:bg-white *:px-2 *:py-2.5 *:flex *:items-center *:gap-x-1.5 *:text-center *:text-nowrap">
				<li className={`${charDetailById?.color?.color1 || "bg-white"} `}>
					<BsSearch className="text-[22px]" />
					{charDetailById?.name} Build
				</li>
				<li className={`${charDetailById?.color?.color2 || "bg-white"} `}>
					<BsSearch className="text-[22px]" />
					{charDetailById?.name} Wallpaper
				</li>
				<li className={`${charDetailById?.color?.color3 || "bg-white"} `}>
					<BsSearch className="text-[22px]" />
					{charDetailById?.name} Icon
				</li>
				<li className={`${charDetailById?.color?.color4 || "bg-white"} `}>
					<BsSearch className="text-[22px]" />
					{charDetailById?.name} Cosplay
				</li>
				<li className={`${charDetailById?.color?.color5 || "bg-white"} `}>
					<BsSearch className="text-[22px]" />
					{charDetailById?.name} Art
				</li>
			</ul>
		</div>
	);
}

export default RecentSeachs
