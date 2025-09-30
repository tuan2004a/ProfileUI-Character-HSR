'use client'
//index.tsx

import React, { useEffect, useRef, useState } from 'react';
import SLice from './SLice';
import ArtWorks from './ArtWorks';
import RecentSeachs from './RecentSeachs';
import AvatarChibi from './AvatarChibi';
import SkillSet from './SkillSet';
import { useCharacterContext } from "@/context/CharactersContext";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import BtnArrowAlt from '../common/BtnArrowAlt';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const Index = () => {

	const { characterData, setSelectId } = useCharacterContext();
	const charData = characterData || [];

	const swiperRef = useRef<SwiperClass | null>(null);

	useEffect(() => {
		if (charData.length > 0) {
			setSelectId(charData[0].id.toString());
		}
	}, [charData]);

	const handlePrev = () => {
		if (swiperRef.current) {
			swiperRef.current.slidePrev();
			const index = swiperRef.current.realIndex;
			const item = charData[index];
			setSelectId(item.id.toString());
		}
	};

	const handleNext = () => {
		if (swiperRef.current) {
			swiperRef.current.slideNext();
			const index = swiperRef.current.realIndex;
			const item = charData[index];
			setSelectId(item.id.toString());
		}
	};

	return (
		<div className="h-full max-w-[1200px] mx-auto relative z-10 ">
			<Swiper
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				slidesPerView={1}
				allowTouchMove={false}
				spaceBetween={30}
				loop={charData.length > 2}
				modules={[Navigation, Pagination]}
				className="mySwiper relative rounded-4xl"
			>
				{charData.length > 0 &&
					charData.map((items, index) => (
						<SwiperSlide key={index}>
							<SLice itemData={items} />
						</SwiperSlide>
					))}
				<div>
					<BtnArrowAlt
						onClick={() => {
							handlePrev();
							swiperRef.current?.slidePrev();
						}}
						className="left-0 z-50"
					>
						<FaLongArrowAltLeft className="text-xl" />
					</BtnArrowAlt>
					<BtnArrowAlt
						onClick={() => {
							handleNext();
							swiperRef.current?.slideNext();
						}}
						className="right-0 z-50"
					>
						<FaLongArrowAltRight className="text-xl" />
					</BtnArrowAlt>
				</div>
			</Swiper>
			<div className="mt-12 flex gap-x-15 z-50">
				<ArtWorks />
				<RecentSeachs  />
				<AvatarChibi />
				<SkillSet />
			</div>
		</div>
	);
}

export default Index
