import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    id: Number,
    title: String,
    author : {
        name: String,
        email: String
    } | null,
    content: String,
});

const Note = mongoose.model('Note', noteSchema);

export default Note;