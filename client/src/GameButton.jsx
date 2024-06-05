import Button from '@mui/material/Button'
import { useDispatch,useSelector } from 'react-redux'
import { setOpen, setSelectedQuestionNumber, setQuestions, setSelectedQuestion } from './gameReducer'

function GameButton ({ index,color }) {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.game.questions);
    const selectedQuestion = useSelector((state) => state.game.selectedQuestion);


    const handleClick = (index) => {
        console.log('clicked', index);
        dispatch(setOpen(true));
        dispatch(setSelectedQuestionNumber(index));
        dispatch(setSelectedQuestion(questions[index]));
    }

    return (
        <Button 
            variant="outlined" 
            onClick={() => handleClick(index)}
            sx={{ padding : 2,backgroundColor: color}}
        >
            {index + 1}
        </Button>
    )
}

export default GameButton;