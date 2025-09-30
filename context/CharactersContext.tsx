//CharactersContext.tsx

import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import CharacterSlice from "@/store/slice/CharacterSlice";
import { Character } from "@/types/CharacterTypes";

interface CharacterProviderProps {
	children: ReactNode;
}
interface CharacterContextActions {
	LoadCharacter: () => Promise<void | Character[]>;
	LoadCharacterById: (id: string) => Promise<void | Character>;
	setSelectId: React.Dispatch<React.SetStateAction<string | null>>;
}
interface CharacterContextState {
	characterData: Character[] | null;
	selectId: string | null;
	charDetailById: Character | null;
}

type CharacterContextType = CharacterContextState & CharacterContextActions;

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

// const initialState: CharacterContextState = {
// 	character: []
// };

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
	const [characterData, setCharacterData] = useState<Character[] | null>([]);
	const [selectId, setSelectId] = useState<string | null>(null);
	const [charDetailById, setCharDetailById] = useState<Character | null>(null);
	const fetchsCharacterRef = useRef<boolean>(false);

	// console.log(selectId, charDetailById);

	const LoadCharacter = useCallback(async () => {
		try {
			const result: Character[] = await CharacterSlice.fetchAllCharacters();
			setCharacterData(result);
			return result;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}, []);

	// khi mount thì load danh sách
	useEffect(() => {
		if (!fetchsCharacterRef.current) {
			fetchsCharacterRef.current = true;
			LoadCharacter();
		}
	}, [LoadCharacter]);

	const LoadCharacterById = useCallback(async (id: string) => {
		try {
			const resultById: Character = await CharacterSlice.fetchCharacterById(id);
			setCharDetailById(resultById || []);
			return resultById;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}, []);

	// khi selectId thay đổi thì fetch chi tiết
	useEffect(() => {
		if (selectId) {
			LoadCharacterById(selectId);
		}
	}, [selectId]);

	const contextValue = useMemo<CharacterContextType>(
		() => ({
			characterData,
			selectId,
			charDetailById,
			LoadCharacter,
			LoadCharacterById,
			setSelectId,
		}),
		[characterData, setSelectId, selectId, charDetailById, LoadCharacter, LoadCharacterById]
	);

	return <CharacterContext.Provider value={contextValue}>{children}</CharacterContext.Provider>;
}

export const useCharacterContext = () => {
	const context = useContext(CharacterContext);
	if (!context) {
		throw new Error("useCharacterContext must be used within a CharacterProvider");
	}
	return context;
};