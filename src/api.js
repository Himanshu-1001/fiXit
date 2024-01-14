import axios from "axios";

const fetchQuery = async (url, query) =>{
    const response= await axios.post('http://localhost:8000' + url, query)
    return response.data
}

export default fetchQuery