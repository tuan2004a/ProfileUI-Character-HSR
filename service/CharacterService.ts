import { JSON_URL } from "@/config/axiosInstance";
import axios from "axios";
import { Character } from "@/types/CharacterTypes";

class CharacterService {
	private constructor() {}

	static async getAllCharacters(): Promise<Character[]> {
		try {
			const response = await axios.get<Character[]>(`${JSON_URL}/characters`);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	static async getCharacterById(id: string): Promise<Character[]> {
		try {
			if (!id?.trim()) {
				throw new Error("Background tag ID is required");
			}
			const response = await axios.get<Character[]>(`${JSON_URL}/characters/${id}`);
            return response.data;
		} catch (error) {
            console.log(error);
			throw error;
        }
	}
}

export default CharacterService;