import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import CharacterSlice from "@/store/slice/CharacterSlice";
import { Character } from "@/types/CharacterTypes";

interface CharacterProviderProps {
	children: ReactNode;
}
interface CharacterContextActions {
	LoadCharacter: () => Promise<void>;
}
interface CharacterContextState {
	character: Character[];
}

type CharacterContextType = CharacterContextState & CharacterContextActions;

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

const initialState: CharacterContextState = {
	character: [],
};

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
    const [state, setState] = useState<CharacterContextState>(initialState);
    const fetchsCharacterRef = useRef<boolean | null>(null);

    const LoadCharacter = useCallback(async()=>{
        try {
            const result = await CharacterSlice.fetchAllCharacters();
            setState({
				character: result,
			});
        } catch (error) {
            console.log(error);
			throw error;
        }
    },[])

    useEffect(() => {
		if (!fetchsCharacterRef.current) {
			fetchsCharacterRef.current = true;
			LoadCharacter();
		}
	}, [LoadCharacter]);

    const LoadCharacterById = useCallback(async(id: string)=>{
        try {
            const resultById = await CharacterSlice.fetchCharacterById(id);
        } catch (error) {
            console.log(error);
			throw error;
        }
    },[])

    const contextValue = useMemo<CharacterContextType>(() => ({
        character: state.character,
        LoadCharacter,
        LoadCharacterById,
    }),[state.character, LoadCharacter, LoadCharacterById]);

    return (
        <CharacterContext.Provider value={contextValue}>
            {children}
        </CharacterContext.Provider>
    );
}

export const useCharacterContext = () => {
	const context = useContext(CharacterContext);
	if (!context) {
		throw new Error("useCharacterContext must be used within a CharacterProvider");
	}
	return context;
};