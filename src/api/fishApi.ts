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
    try {
        const response = await Axios.get<Fish[]>(API_URL);
        return response.data;
    } catch (error: any) {
        throw new Error(handleAxiosError(error));
    }

};

export const addFish = async (fish: Omit<Fish, "id">): Promise<Fish> => {
    try {
        const response = await Axios.post<Fish>(API_URL, fish);
        return response.data;
    } catch (error: any) {
        throw new Error(handleAxiosError(error));
    }

};

export const updateFish = async (
    id: number,
    fish: Omit<Fish, "id">
): Promise<Fish> => {
   try{
       const response = await Axios.put<Fish>(`${API_URL}/${id}`, fish);
       return response.data;
    } catch (error: any) {
        throw new Error(handleAxiosError(error));
    }
};

export const removeFish = async (id: number): Promise<void> => {
   try {
       await Axios.delete(`${API_URL}/${id}`);

   } catch (error: any) {
       throw new Error(handleAxiosError(error));
   }
};

const handleAxiosError = (error: any): string => {
    if (error.response) {
        const data = error.response.data;

        if (data && typeof data === "object") {
            const messages = Object.values(data);
            if (messages.length > 0) {
                return messages.join(", ");
            }
        }

        if (data.message) {
            return data.message;
        }

        return `Request failed with status ${error.response.status}`;
    } else if (error.request) {
        return "No response from server";
    } else {
        return error.message || "Unknown error";
    }
};
