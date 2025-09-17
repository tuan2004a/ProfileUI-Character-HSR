"use client"

import React from "react";
import CharacterOverview from "@/components/CharacterOverview/Index";
import { useCharacterContext, CharacterProvider } from "@/context/CharactersContext";


const IndexContext = () => {
	return (
		<main className="h-screen max-w-full bg-[radial-gradient(125%_125%_at_50%_10%,_#fff_40%,_#7c3aed_100%)] p-10">
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