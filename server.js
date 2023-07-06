const express = require('express')
const app = express()
const cors = require('cors')
const {characters} = require('./characters')
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs')
app.use(cors())
app.use(express.static('public'))



app.get('/', (req, res) => {
    res.render('index', { characters: [] }); // Render empty character list initially
  });
  
  app.get('/api', (req, res) => {
    res.json(characters);
  });
  
  app.get('/api/:keyword', (req, res) => {
    const keyword = req.params.keyword.toLowerCase();
  
    // Filter through characters.js & pull items that match the keyword
    const results = characters.filter(obj =>
      obj.keywords.some(str => str.toLowerCase().includes(keyword))
    );
  
    if (results.length) {
      res.json(results);
    } else {
      res.status(404).json({
        error: 'No characters found.'
      });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running like a boss! 🚀`);
  });

  