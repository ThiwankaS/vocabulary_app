import Button from '@mui/material/Button';
import { 
        useDispatch,
        useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { 
        setOpen,
        setSelectedQuestionNumber,
        setSelectedQuestion } from '../reducers/gameReducer';

GameButton.propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
};

function GameButton ({ index, id }) {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.game.questions);
    const progress = useSelector((state) => state.progress.streak);
    const onFocus = progress.find(p => p.id === id);

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
            sx={{ padding : 2, backgroundColor:  onFocus.color}}
        >
            {index + 1}
        </Button>
    )
}

export default GameButton;