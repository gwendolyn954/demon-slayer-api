const express = require('express')
const app = express()
const cors = require('cors')
const {characters} = require('./characters')
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs')
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('index', { characters }); // Render empty character list initially
  });
  
  app.get('/api', (req, res) => {
    res.json(characters);
  });
  
  app.get('/api/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
  
    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(name); 
    });
  
    if (results.length) {
      res.json(results);
    } else {
      res.status(404).json({
        error: 'No characters found.'
      });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`The server is running 🚀`);
  });


  
  