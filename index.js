require('dotenv').config()
const express = require ('express');
const cors = require('cors');
const Question = require('./server/question');

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
}));
app.use(express.static('dist'))

const myQuestions = [ // initial data to add in to the DB
    /*{   
        word : 'Minä',
        correctAnswer :'Me',
        options :['She','He','Me','You','They']
    },
    {
        word :'Sinä',
        correctAnswer :'You',
        options :['She','He','Me','You','They']
    },
    {
        word :'Hän',
        correctAnswer : 'She/He',
        options :['She/He','We','Me','You','They']
    },
    {
        word :'Opettaja',
        correctAnswer :'Teacher',
        options :['Officer','Friend','Husband','Teacher','Wife']
    },
    {
        word :'Ystävä',
        correctAnswer :'Friend',
        options :['Officer','Friend','Husband','Teacher','Wife']
    },
    {
        word : 'Kiitos',
        correctAnswer :'Thank you!',
        options :['Fuck you!','Thank you!','Sorry!','Bless you!','Excuse me!']
    },
    {
        word :'Hyvä',
        correctAnswer :'Good',
        options :['Bad','God','Happy','Good','Sad']
    },
    {
        word :'Tietokone',
        correctAnswer :'Computer',
        options :['Knowledge Box','Computer','Calculator','Mobile Phone','Library']
    },
    {
        word :'Auto',
        correctAnswer :'Car',
        options :['Tree','House','Cloth','Table','Car']
    },
    {
        word :'Kirja',
        correctAnswer :'Book',
        options :['Milk','Book','Tree','Cow','Pencil']
    },
    {
        word : 'Kapunki',
        correctAnswer : 'City',
        options : ['House','Village','City','Country','Provice']
    },
    {
        word : 'Lentokone',
        correctAnswer : 'Airplane',
        options : ['Airplane','Bird machine','Train','Ship','Truck']
    },
    {
        word : 'Jäätelo',
        correctAnswer : 'Ice Cream',
        options : ['Milk','Rice','Meat','Grain','Ice Cream']
    },
    {
        word : 'Pyörä',
        correctAnswer : 'Bicycle',
        options : ['Airplane','Bicycle','Train','Ship','Truck']
    },
    {
        word : 'Äiti',
        correctAnswer : 'Mother',
        options : ['Mother','Girl','Boy','Father','Sister']
    },
    {
        word : 'Isä',
        correctAnswer : 'Father',
        options : ['Mother','Girl','Boy','Father','Sister']
    },
    {
        word : 'Tyttö',
        correctAnswer : 'Girl',
        options : ['Mother','Girl','Boy','Father','Sister']
    },
    {
        word : 'Poika',
        correctAnswer : 'Boy',
        options : ['Mother','Girl','Boy','Father','Sister']
    },
    {
        word : 'Hallitus',
        correctAnswer : 'Government',
        options : ['Parliment','Court','Church','Assembly Hall','Government']
    },
    {
        word : 'Edukunta',
        correctAnswer : 'Parliment',
        options : ['School','Parliment','Court','Church','Assembly Hall']
    },*/
    {
        word: 'Omena',
        correctAnswer: 'Apple',
        options: ['Banana', 'Orange', 'Grape', 'Peach', 'Apple'],
    },
    {
        word: 'Vesi',
        correctAnswer: 'Water',
        options: ['Milk', 'Juice', 'Water', 'Coffee', 'Tea'],
    },
    {
        word: 'Puku',
        correctAnswer: 'Dress',
        options: ['Dress', 'Company', 'Shoes', 'Hat', 'Office'],
    },
    {
        word: 'Raha',
        correctAnswer: 'Money',
        options: ['Money', 'Phone', 'Food', 'Toy', 'Car'],
    },
      {
        word: 'Talvi',
        correctAnswer: 'Winter',
        options: ['Spring', 'Summer', 'Autumn', 'Winter', 'Night'],
      },
      {
        word: 'Ruoka',
        correctAnswer: 'Food',
        options: ['Drink', 'Water', 'Food', 'Toy', 'City'],
      },
      {
        word: 'Koira',
        correctAnswer: 'Dog',
        options: ['Cat', 'Bird', 'Fish', 'Horse', 'Dog'],
      },
      {
        word: 'Kissa',
        correctAnswer: 'Cat',
        options: ['Dog', 'Bird', 'Fish', 'Horse', 'Cat'],
      },
      {
        word: 'Pöytä',
        correctAnswer: 'Table',
        options: ['Chair', 'Bed', 'Sofa', 'Lamp', 'Table'],
      },
      {
        word: 'Tuoli',
        correctAnswer: 'Chair',
        options: ['Chair', 'Bed', 'Sofa', 'Lamp', 'Table'],
      },
      {
        word: 'Penaali',
        correctAnswer: 'Pencil case',
        options: ['Bookbag', 'Pencil case', 'Notebook', 'Pen', 'Pencil'],
      },
      {
        word: 'Koulu',
        correctAnswer: 'School',
        options: ['Hospital', 'Park', 'School', 'Shop', 'Restaurant'],
      },
      {
        word: 'Sänky',
        correctAnswer: 'Bed',
        options: ['Chair', 'Bed', 'Sofa', 'Lamp', 'Table'],
      },
      {
        word: 'Ovi',
        correctAnswer: 'Door',
        options: ['Window', 'Wall', 'Roof', 'Floor', 'Door'],
      },
      {
        word: 'Ikkuna',
        correctAnswer: 'Window',
        options: ['Window', 'Wall', 'Roof', 'Floor', 'Door'],
      },
      {
        word: 'Puku',
        correctAnswer: 'Shirt',
        options: ['Dress', 'Shirt', 'Shoe', 'Hat', 'Pants'],
      },
      {
        word: 'Housut',
        correctAnswer: 'Pants',
        options: ['Dress', 'Shirt', 'Shoe', 'Hat', 'Pants'],
      },
      {
        word: 'Kenkä',
        correctAnswer: 'Shoe',
        options: ['Dress', 'Shirt', 'Shoe', 'Hat', 'Pants'],
      },
      {
        word: 'Hattu',
        correctAnswer: 'Hat',
        options: ['Dress', 'Shirt', 'Shoe', 'Hat', 'Pants'],
      },
      {
        word: 'Aika',
        correctAnswer: 'Time',
        options: ['Time', 'Minute', 'Month', 'Day', 'Week'],
      },
     {
        word: 'Surullinen',
        correctAnswer: 'Sad',
        options: ['Sad', 'Angry', 'Tired', 'Hungry', 'Thirsty'],
      },
      {
        word: 'Vihainen',
        correctAnswer: 'Angry',
        options: ['Happy', 'Angry', 'Tired', 'Hungry', 'Thirsty'],
      },
      {
        word: 'Väsynyt',
        correctAnswer: 'Tired',
        options: ['Happy', 'Sad', 'Angry', 'Tired', 'Thirsty'],
      },
      {
        word: 'Nälkäinen',
        correctAnswer: 'Hungry',
        options: ['Happy', 'Sad', 'Angry', 'Tired', 'Hungry'],
      },
      {
        word: 'Janoinen',
        correctAnswer: 'Thirsty',
        options: ['Happy', 'Sad', 'Angry', 'Thirsty', 'Hungry'],
      },
      {
        word: 'Iso',
        correctAnswer: 'Big',
        options: ['Small', 'Big', 'Short', 'Wide', 'Narrow'],
      },
      {
        word: 'Pieni',
        correctAnswer: 'Small',
        options: ['Big', 'Tall', 'Long', 'Small', 'Narrow'],
      },
      {
        word: 'Pitkä',
        correctAnswer: 'Tall',
        options: ['Big', 'Tall', 'Short', 'Small', 'Narrow'],
      },
      {
        word: 'Lyhyt',
        correctAnswer: 'Short',
        options: ['Big', 'Tall', 'Short', 'Small', 'Narrow'],
      },
      {
        word: 'Leveä',
        correctAnswer: 'Wide',
        options: ['Wide', 'Small', 'Tall', 'Short', 'Narrow'],
      },
      {
        word: 'Kapea',
        correctAnswer: 'Narrow',
        options: ['Big', 'Small', 'Tall', 'Short', 'Narrow'],
      },
      {
        word: 'Väri',
        correctAnswer: 'Color',
        options: ['Shape', 'Size', 'Color', 'Sound', 'Smell'],
      },
      {
        word: 'Punainen',
        correctAnswer: 'Red',
        options: ['Red', 'Green', 'Yellow', 'Black', 'White'],
      },
      {
        word: 'Sininen',
        correctAnswer: 'Blue',
        options: ['Red', 'Green', 'Yellow', 'Blue', 'White'],
      },
      {
        word: 'Vihreä',
        correctAnswer: 'Green',
        options: ['Red', 'Green', 'Yellow', 'Blue', 'White'],
      },
      {
        word: 'Keltainen',
        correctAnswer: 'Yellow',
        options: ['Red', 'Green', 'Yellow', 'Blue', 'White'],
      },
      {
        word: 'Musta',
        correctAnswer: 'Black',
        options: ['Red', 'Blue', 'Green', 'Black', 'White'],
      },
      {
        word: 'Ostaa',
        correctAnswer: 'To buy',
        options: ['To sell', 'To buy', 'To exchange', 'To give', 'To receive'],
      },
      {
        word: 'Myydä',
        correctAnswer: 'To sell',
        options: ['To sell', 'To buy', 'To exchange', 'To give', 'To receive'],
      },
      {
        word: 'Pankkikortti',
        correctAnswer: 'Debit card',
        options: ['Credit card', 'Cash', 'Check', 'Debit card', 'Coin'],
      },
      {
        word: 'Luottokortti',
        correctAnswer: 'Credit card',
        options: ['Credit card', 'Cash', 'Check', 'Debit card', 'Coin'],
      },
      {
        word: 'Raha',
        correctAnswer: 'Money',
        options: ['Credit card', 'Debit card', 'Money', 'Savings', 'Investment'],
      },
      {
        word: 'Säästöt',
        correctAnswer: 'Savings',
        options: ['Money', 'Savings', 'Loan', 'Debt', 'Expense'],
      },
      {
        word: 'Säästää',
        correctAnswer: 'To save',
        options: ['To spend', 'To save', 'To borrow', 'To lend', 'To waste'],
      },
      {
        word: 'Sää',
        correctAnswer: 'Weather',
        options: ['Weather', 'Season', 'Temperature', 'Forecast', 'Rain'],
      },
      {
        word: 'Sääennuste',
        correctAnswer: 'Weather forecast',
        options: ['Weather', 'Weather forecast', 'Season', 'Temperature', 'Rain'],
      },
      {
        word: 'Vapaa-aika',
        correctAnswer: 'Free time',
        options: ['Work', 'Free time', 'Hobby', 'Activity', 'Break'],
      },
      {
        word: 'Harrastus',
        correctAnswer: 'Hobby',
        options: ['Work', 'Free time', 'Hobby', 'Activity', 'Break'],
      },
      {
        word: 'Terveys',
        correctAnswer: 'Health',
        options: ['Health', 'Sick', 'Hospital', 'Medicine', 'Disease'],
      },
      {
        word: 'Liikunta',
        correctAnswer: 'Gym',
        options: ['Bakery', 'Bus Stop', 'Gym', 'Movement', 'Workout'],
      },
      {
        word: 'Oppiminen',
        correctAnswer: 'Learning',
        options: ['Learning', 'Education', 'Knowledge', 'Understanding', 'Skill'],
      },
      {
        word: 'Kehitys',
        correctAnswer: 'Development',
        options: ['Construction', 'Development', 'Change', 'Revolution', 'Approval'],
      },
      {
        word: 'Yhteistyö',
        correctAnswer: 'Teamwork',
        options: ['One man show', 'Teamwork', 'Partnership', 'Coordination', 'Communication'],
      },
      {
        word: 'Kulttuuri',
        correctAnswer: 'Culture',
        options: ['Culture', 'Tradition', 'History', 'Language', 'Belief'],
      },
      {
        word: 'Perinne',
        correctAnswer: 'Tradition',
        options: ['Culture', 'History', 'Tradition', 'Practice', 'Heritage'],
      },
      {
        word: 'Luonto',
        correctAnswer: 'Nature',
        options: ['Environment', 'Nature', 'Landscape', 'Country', 'Ecosystem'],
      },
      {
        word: 'Ilmasto',
        correctAnswer: 'Climate',
        options: ['Climate', 'Season', 'Temperature', 'Forecast', 'Rain'],
      }
];

/* async function run (){
    await Question.insertMany(myQuestions);
    console.log('New questions added!');
}

run(); */ // Function used to add Questions to DB in bulk

app.get('/',(resquet,response) => {
    response.send('<h1>Hello World</h2>');
});

app.get('/api/questions',(resquet,response) => {
    Question.find({})
    .then(questions =>{
        if(questions){
            response.json(questions);
        } else {
            response.status(404).end();
        }
    })
    .catch(error => {
        console.log(error)
        response.status(500).end()
    })
});

app.get('/api/questions/:limit',(request, response) => {
    const limit = parseInt(request.params.limit);
    Question.find({})
    .then(questions =>{
        if(questions){
            const result = questions.map(item => {
                const temp = {
                    id : item._id,
                    word : item.word,
                    correctAnswer : item.correctAnswer,
                    options : item.options
                }
                return temp;
            })
            response.json(result);
        } else {
            response.status(404).end();
        }
    })
    .catch(error => {
        console.log('Error fetching data : ', error.message);
        response.status(500).end()
    })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`);
});