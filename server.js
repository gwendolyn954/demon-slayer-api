const express = require('express')
const app = express()

const PORT = 8000

const characters = {
    'tanjiro': {
        'fullName': 'Tanjiro Kamaso',
        'race': 'human',
        'affiliation': 'Demon Slayer Corps',
        'combatStyle': 'Water Breathing and Sun Breathing'
    },

    'nezuko': {
        'fullName': 'Nezuko Kamado',
        'race': 'demon',
        'affiliation': 'Demon Slayer Corps (formerly)',
        'combatStyle': 'Blood Demon Art'
    },

    'zenitsu': {
        'fullName': 'Zenitsu Agatsuma',
        'race': 'human',
        'affiliation': 'Demon Slayer Corps',
        'combatStyle': 'Thunder Breathing'
    },

    'inosuke': {
        'fullName': 'Inosuke Hashibira',
        'race': 'human',
        'affiliation': 'Demon Slayer Corps',
        'combatStyle': 'Beast Breathing'
    },

    'muzan': {
        'fullName': 'Muzan Kibutsuji',
        'race': 'demon',
        'affiliation': 'Twelve Kizuki',
        'combatStyle': 'none'
    },

    'unknown': {
        'fullName': 'unknown',
        'race': 'unknown',
        'affiliation': 'unknown',
        'combatStyle': 'unknown'
    }
}


app.get('/', (response, request)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const characterName = request.params.name.toLowerCase()
    if(characters[characterName]){
        response.json(characters[characterName])
    }else {
        response.json(characters['unknown'])
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running like a boss on port ${PORT}!🚀`)
})