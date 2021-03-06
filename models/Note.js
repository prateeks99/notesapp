const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [400, 'Description cannot be more than 200 characters']
    },
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema); 
//^ if note exist already we'll export that  ^^ if not we'll create a new one