import axios from "axios";

const baseURL = `/api/questions/20`;

const getQuestions = async () => {
    try {
        const response = await axios.get(baseURL);
        return response.data;
    } catch (error) {
        console.error('Error in fetching data : ', error)
    }
}

export { 
    getQuestions
}