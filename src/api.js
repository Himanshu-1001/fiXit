import axios from "axios";

const fetchQuery = async (url, query) =>{
    try {
        const response= await axios.post('http://localhost:8000' + url, query)
        return response.data
        
    } catch (error) {
        console.log(error);
        return error
    }
}

export default fetchQuery