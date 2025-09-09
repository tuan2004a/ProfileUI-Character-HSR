//CharacterSlice.tsx
import { Character } from "@/types/CharacterTypes";
import CharacterService from "@/service/CharacterService";

class CharacterSlice {
	private constructor() {}

	static async fetchAllCharacters(): Promise<Character[]> {
		try {
			const res = await CharacterService.getAllCharacters();
			return res;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	static async fetchCharacterById(id: string): Promise<Character[]>{
        try {
            const resById = await CharacterService.getCharacterById(id);
            return resById
        } catch (error) {
            console.log(error);
			throw error;
        }
    }
}
export default CharacterSlice;