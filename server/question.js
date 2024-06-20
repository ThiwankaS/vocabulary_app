const mongoose = require('mongoose');

mongoose.set('strictQuery',false);
const URI = process.env.MONGODB_URI;

console.log('Connecting to the DB...');

async function run () {
    try {
        await mongoose.connect(URI);
        console.log('Sucessfully connected!');
    } catch (error) {
        console.log('Something went wrong!',error);
    }
}

const questionSchema = new mongoose.Schema({
    word: String,
    correctAnswer: String,
    options: [String],
});

questionSchema.set('toJSON', {
    transform : (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
});

run();

module.exports = mongoose.model('Question', questionSchema);