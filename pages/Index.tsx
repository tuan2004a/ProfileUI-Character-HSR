"use client"

import React from "react";
import CharacterOverview from "@/components/CharacterOverview/Index";
import { useCharacterContext, CharacterProvider } from "@/context/CharactersContext";


const IndexContext = () => {
	return (
		<main className="h-screen max-w-full bg-[#e4dfe3] p-10">
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