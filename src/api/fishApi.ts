import Axios from "axios";

export interface Fish {
    id: number;
    name: string;
    species: string;
    length: number;
    weight: number;
}

const API_URL = "http://localhost:8080/api/fish";

export const fetchFish = async (): Promise<Fish[]> => {
    const response = await Axios.get<Fish[]>(API_URL);
    return response.data;
};

export const addFish = async (fish: Omit<Fish, "id">): Promise<Fish> => {
    const response = await Axios.post<Fish>(API_URL, fish);
    return response.data;
};

export const updateFish = async (
    id: number,
    fish: Omit<Fish, "id">
): Promise<Fish> => {
    const response = await Axios.put<Fish>(`${API_URL}/${id}`, fish);
    return response.data;
};

export const removeFish = async (id: number): Promise<void> => {
    await Axios.delete(`${API_URL}/${id}`);
};
