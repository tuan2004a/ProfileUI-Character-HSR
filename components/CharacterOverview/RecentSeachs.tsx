import { Character } from '@/types/CharacterTypes';
import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import { BsSearch } from "react-icons/bs";

interface RecentSeachsProps {
	currentItem: Character;
}

const RecentSeachs: React.FC<RecentSeachsProps> = ({currentItem}) => {

	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.fromTo(".art1", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" });

			gsap.fromTo(".art2", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
		}, containerRef);

		return () => ctx.revert();
	}, [currentItem]);


    return (
		<div ref={containerRef} className="space-y-3 flex flex-col justify-between z-10">
			<h1 className="wordSpacing !text-2xl !font-semibold mb-4">Recent Seachs</h1>
			<ul className="h-full w-45.5 flex flex-col justify-between font-Tahoma *:line-clamp-1 *:!font-medium *:rounded-full *:w-full *:bg-white *:px-2 *:py-2.5 *:flex *:items-center *:gap-x-1.5 *:text-center *:text-nowrap">
				<li className={`${currentItem?.color?.color1 || "bg-white"} `}>
					<BsSearch className="text-[22px]" />
					{currentItem?.name} Build
				</li>
				<li className={`${currentItem?.color?.color2 || "bg-white"} `}>
					<BsSearch className="text-[22px]" />
					{currentItem?.name} Wallpaper
				</li>
				<li className={`${currentItem?.color?.color3 || "bg-white"} `}>
					<BsSearch className="text-[22px]" />
					{currentItem?.name} Icon
				</li>
				<li className={`${currentItem?.color?.color4 || "bg-white"} `}>
					<BsSearch className="text-[22px]" />
					{currentItem?.name} Cosplay
				</li>
				<li className={`${currentItem?.color?.color5 || "bg-white"} `}>
					<BsSearch className="text-[22px]" />
					{currentItem?.name} Art
				</li>
			</ul>
		</div>
	);
}

export default RecentSeachs
