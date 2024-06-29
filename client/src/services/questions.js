import axios from "axios";

const baseURL = '/api/questions';

const getSelectedQuestions = async (limit) => {
    try {
        const response = await axios.get(`${baseURL}/${limit}`);
        return response.data;
    } catch (error) {
        console.error('Error in fetching data : ', error.message);
    }
};

const getAllQuestions = async () => {
    try {
        const response = await axios.get(baseURL);
        return response.data; 
    } catch (error) {
        console.error('Error in fetching data : ', error.message);
    }
};

export default { 
    getSelectedQuestions,
    getAllQuestions
};