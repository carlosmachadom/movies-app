import { api } from "@utils/constants/apiCommons.js";

export default async function getCategories() {
    try {
        const { data, status } = await api('/genre/movie/list');

        if (status != 200) {
            throw new Error(data.message);
        } else { 
            const { genres } = data;
            return genres;            
        }
    } catch (error) {
        return error;
    }
}