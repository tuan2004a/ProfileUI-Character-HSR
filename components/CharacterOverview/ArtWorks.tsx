"use client";
//artworks.tsx

import { Character } from "@/types/CharacterTypes";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useCharacterContext } from "@/context/CharactersContext";

interface ArtWorksProps {
	// currentItem: Character;
}

const ArtWorks: React.FC<ArtWorksProps> = () => {

	const { charDetailById } = useCharacterContext();

	const containerRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.fromTo(".art1", { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" });

			gsap.fromTo(".art2", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
		}, containerRef);

		return () => ctx.revert();
	}, [charDetailById]);

	return (
		<div ref={containerRef} className="grid grid-cols-2 gap-4 h-full z-10">
			<h1 className="col-span-2 text-2xl !font-semibold ">Art Words</h1>
			<div className="art1 shadow-2xl text-center rounded-3xl h-60 w-45 overflow-hidden box-border border-2 border-white">
				<img loading="lazy" className="size-full object-cover" src={charDetailById?.img?.ArtWords?.art1} alt="" />
			</div>
			<div className="art2 shadow-2xl text-center rounded-3xl h-60 w-45 overflow-hidden box-border border-2 border-white">
				<img loading="lazy" className="size-full object-cover" src={charDetailById?.img?.ArtWords?.art2} alt="" />
			</div>
			<button className="font-Tahoma col-span-2 bg-white rounded-2xl text-lg py-2 !font-semibold">View More</button>
		</div>
	);
};

export default ArtWorks;
