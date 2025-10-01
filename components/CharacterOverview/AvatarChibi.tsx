import { useCharacterContext } from '@/context/CharactersContext';
import { Character } from '@/types/CharacterTypes';
import React from 'react';
import { FaPlus } from "react-icons/fa";

interface AvatarChibiData {
    // currentItem: Character;
}

const AvatarChibi: React.FC<AvatarChibiData> = () => {

	const { charDetailById } = useCharacterContext();

    return (
		<div className="flex flex-col justify-between gap-y-5 z-10">
			<div className={`size-40 rounded-3xl relative`}>
				<div className="absolute top-0 left-0 -translate-4 bg-[#e2e1df] size-10 rounded-full flex-center">
					<FaPlus className="text-xl !text-black" />
				</div>
				<img loading="lazy" className={`size-40 rounded-3xl object-cover object-center mix-blend-multiply`} src={charDetailById?.img?.chibi?.chibi1} alt="" />
			</div>
			<div className={`size-40 rounded-3xl relative`}>
				<div className="absolute top-0 left-0 -translate-4 bg-[#e2e1df] size-10 rounded-full flex-center">
					<FaPlus className="text-xl !text-black" />
				</div>
				<img loading="lazy" className={`size-40 rounded-3xl object-contain object-center mix-blend-multiply`} src={charDetailById?.img?.chibi?.chibi2} alt="" />
			</div>
		</div>
	);
}

export default AvatarChibi
