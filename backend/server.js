const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/recipes')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const Recipe = require('./models/Recipe');

app.get('/recipes', async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

app.get('/recipes/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
});

app.post('/recipes', async (req, res) => {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.json(recipe);
});

app.delete('/recipes/:id', async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
