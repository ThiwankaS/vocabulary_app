import Question from './Question';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import { useSelector } from 'react-redux'

function QuestionPrompt () {
    const selectedQuestionNumber = useSelector((state) => state.game.selectedQuestionNumber );
    return (
        <Box>
            <Grid>
                <h3>Question No : {selectedQuestionNumber + 1}</h3>
            </Grid>
                <Question />
        </Box>
    )
}

export default QuestionPrompt;