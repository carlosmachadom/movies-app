import { api } from "@utils/constants/apiCommons.js";

export default async function getMovieMyId({id}) {
    try {
        const { data, status } = await api('/movie/' + id);

        if (status != 200) {
            throw new Error(data.message);
        } else { 
            return data;            
        }
    } catch (error) {
        return error;
    }
}