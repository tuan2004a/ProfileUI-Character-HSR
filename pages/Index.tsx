"use client"

import React from "react";
import CharacterOverview from "@/components/CharacterOverview/Index";
import { useCharacterContext, CharacterProvider } from "@/context/CharactersContext";


const IndexContext = () => {
	return (
		<main
			className="h-screen max-w-full p-10"
			style={{
				background: "radial-gradient(125% 125% at 50% -20%, #fff 40%, #9983b9 100%)",
			}}
		>
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