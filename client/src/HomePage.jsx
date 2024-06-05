import Container from '@mui/material/Container'
import Box from '@mui/system/Box'
import Grid from '@mui/system/Unstable_Grid'
import GameButton from './GameButton'
import Button from '@mui/material/Button'
import QuestionPrompt from './QuestionPrompt'
import { useEffect } from 'react'
import { myQuestions } from './temp.js'
import { useSelector, useDispatch } from 'react-redux'
import { setQuestions } from './gameReducer'

function HomePage () {
    const dispatch = useDispatch();
    const open = useSelector((state) => state.game.open);
    const selectedQuestionNumber = useSelector((state) => state.game.selectedQuestionNumber);
    const selectedQuestion = useSelector((state) => state.game.selectedQuestion);
    const result = useSelector((state) => state.game.result);
    const questions = useSelector((state) => state.game.questions);
    
    useEffect(()=>{
        dispatch(setQuestions(myQuestions));
    },[dispatch]);
 
    return (
        <Container sx={{ border: 1,flexGrow: 1 }}>
            <h1> Finnish - English Word Game </h1>
            <Box sx={{ flexGrow: 1}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {questions.map((q, index) => (
                            <Grid xs={1} key={index}>
                                <GameButton 
                                    index={index}
                                    color={ q.progress === 'pending' ? '#ffd64f' : q.progress === 'success' ? '#aoff12' : ''}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Box>
            <Box>
               { open && <QuestionPrompt /> }
            </Box>
            <Box>
                <Grid container justifyContent="flex-start" spacing={2} sx={{ paddingTop : 3, paddingBottom : 3}}>
                    <Grid>
                        <Button variant="contained" sx={{ width : 120, height : 45}}>
                            Re-start
                        </Button>
                    </Grid>
                    <Grid>
                        <Button variant="contained" sx={{ width : 120, height : 45}}>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Box> 
        </Container>
    )
}

export default HomePage;