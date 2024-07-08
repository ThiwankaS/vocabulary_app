import { useState } from 'react';
import { 
        useSelector, 
        useDispatch } from 'react-redux';
import { 
        setOpen,
        setResult } from '../reducers/gameReducer';
import { updateProgress } from '../reducers/progressReducer';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function Question () {

    const dispatch = useDispatch();

    const [selectedOption,setSelectedOption] = useState('');
    const [showAlert,setShowAlert] = useState(false);

    const selectedQuestion = useSelector((state) => state.game.selectedQuestion);
    const result = useSelector((state) => state.game.result);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    }
    const handleClick = (selectedOption,selectedQuestion) => {
        setShowAlert(true);
        if(selectedOption === selectedQuestion.correctAnswer){
            dispatch(setResult(true));
            const result = {
                id : selectedQuestion.id,
                color : '#a0ff12', 
                status : 'success'
            }
            dispatch(updateProgress(result));
        } else {
            dispatch(setResult(false));
            const result = {
                id : selectedQuestion.id,
                color : '#fa794d', 
                status : 'fail'
            }
            dispatch(updateProgress(result));
        }
    }

    return(
        <Box>
            <Grid>
                <h4>Select the correct answer</h4>
            </Grid>
            <Grid sx={{ paddingLeft : 4 }}>
                <h3>{selectedQuestion.word}</h3>
            </Grid>
            <Grid sx={{ paddingLeft : 5 }}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="position"
                        onChange={handleChange}
                    >
                        <FormControlLabel sx={{ paddingLeft : 2 }} value={selectedQuestion.options[0]} control={<Radio />} label={selectedQuestion.options[0]} />
                        <FormControlLabel sx={{ paddingLeft : 2 }} value={selectedQuestion.options[1]} control={<Radio />} label={selectedQuestion.options[1]} />
                        <FormControlLabel sx={{ paddingLeft : 2 }} value={selectedQuestion.options[2]} control={<Radio />} label={selectedQuestion.options[2]} />
                        <FormControlLabel sx={{ paddingLeft : 2 }} value={selectedQuestion.options[3]} control={<Radio />} label={selectedQuestion.options[3]} />
                        <FormControlLabel sx={{ paddingLeft : 2 }} value={selectedQuestion.options[4]} control={<Radio />} label={selectedQuestion.options[4]} />
                    </RadioGroup>
            </Grid>
            <Grid>
                { showAlert && (result ? (<Alert severity="success" >Congratulations, your answer is correct ! </Alert>) : (<Alert severity="error"> Sorry, your answer is incorrect ! The correct answere is <strong>` {selectedQuestion.correctAnswer} `</strong></Alert>))}
            </Grid>
            <Grid container justifyContent="flex-start" spacing={2}  sx={{ paddingTop : 3 }}>    
                <Grid>
                    <Button 
                        onClick={() => handleClick(selectedOption,selectedQuestion)}
                        variant="contained" 
                        sx={{ width : 90, height : 45, color : 'white', backgroundColor : 'black' }}
                    > 
                        Submit 
                    </Button>
                </Grid>
                <Grid>
                    <Button 
                        onClick={() => dispatch(setOpen(false))}
                        variant="contained" 
                        sx={{ width : 90, height : 45, color : 'white', backgroundColor : 'black' }}
                    > 
                        Close 
                    </Button>
                </Grid>
            </Grid>
        </Box> 
    )
}

export default Question;