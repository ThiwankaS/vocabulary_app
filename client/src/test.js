const myArray = [
    {
        _id : "666c424af112ec251f9471ea ",
        word : "Minä",
        correctAnswer :"Me",
        options :["She","He","Me","You","They"],
        __v: { "$numberInt":"0" }
    }
];

function formatStter(array){
    return array.map(item => {
        const temp = {
            id : item._id,
            word : item.word,
            correctAnswer : item.correctAnswer,
            options : item.options
        }
        return temp;
    });
}

console.log('My Array : ', formatStter(myArray));