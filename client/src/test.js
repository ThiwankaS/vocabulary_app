import { myQuestions } from './temp.js'

const testArray = myQuestions.reduce((result,item) => {
    const obj = {
        id : item.id,
        status : 'pending',
        color : '#ffd64f'
    }
    return result.concat(obj);
},[]);

function updateProgress (id, result, status) {
    const streakToUpdate = testArray.find(n => n.id === id);
    const updatedStreakItem = { ...streakToUpdate, color : result, status : status };
    return testArray.map(q => q.id === id ? updatedStreakItem : q);
}

const id = 125211;
const result = '#a0ff12';
const status = 'success';

const updatedArray = updateProgress(id, result, status);

console.log('updatedArray : ', updatedArray);