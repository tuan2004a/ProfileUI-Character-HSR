"use client"

import React from "react";
import CharacterOverview from "@/components/CharacterOverview/Index";
import { useCharacterContext, CharacterProvider } from "@/context/CharactersContext";


const IndexContext = () => {

	const { charDetailById } = useCharacterContext();
	console.log(charDetailById);
	const bgColor = charDetailById?.color?.bgColor;

	return (
		<main className={`h-screen max-w-full p-10  ${bgColor}`}>
			<CharacterOverview />
		</main>
	);
};

const Index = () => {
    return (
        <CharacterProvider>
            <IndexContext />
        </CharacterProvider>
    )
}

export default Index;