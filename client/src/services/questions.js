import axios from "axios";

const baseURL = `http://localhost:3001/api/questions/20`;

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