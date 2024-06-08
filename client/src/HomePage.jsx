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
import { setStreak } from './progressReducer.js'

function HomePage () {
    const dispatch = useDispatch();
    const open = useSelector((state) => state.game.open);
    const questions = useSelector((state) => state.game.questions);
    
    useEffect(()=>{
        dispatch(setQuestions(myQuestions));
    },[dispatch]);

    useEffect(() => {
        const streak = myQuestions.reduce((result,item) => {
            const obj = {
                id : item.id,
                status : 'pending',
                color : '#ffd64f'
            }
            return result.concat(obj);
        },[]);
        dispatch(setStreak(streak));
    },[dispatch]);

    const handleReSetClick = () => {
        window.alert('Funtionality still note implemented');
    }

    const handleSaveClick = () => {
        window.alert('Funtionality still note implemented');
    }

    return (
        <Container sx={{ border: 1,flexGrow: 1 }}>
            <h1> Finnish - English Word Game </h1>
            <Box sx={{ flexGrow: 1}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {questions.map((q, index) => (
                            <Grid xs={1} key={index}>
                                <GameButton 
                                    index={index}
                                    id={q.id}
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
                        <Button onClick={handleReSetClick} variant="contained" sx={{ width : 120, height : 45}}>
                            Re-start
                        </Button>
                    </Grid>
                    <Grid>
                        <Button  onClick={handleSaveClick} variant="contained" sx={{ width : 120, height : 45}}>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Box> 
        </Container>
    )
}

export default HomePage;