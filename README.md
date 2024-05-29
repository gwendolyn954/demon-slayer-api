# Demon Slayer API
![Header](https://github.com/gwendolyn954/demon-slayer-api/blob/main/public/assets/gh-header.png)
![Project Screenshot](https://github.com/gwendolyn954/demon-slayer-api/blob/main/public/assets/ds-updated.png)

## Overview:

The Demon Slayer API allows you to retrieve various details about the characters in the Demon Slayer universe. If you're a fan of the series and want to build an application centered around Demon Slayer, this API offers essential character facts.

## Tech  
Express, Node.js, JavaScript, CSS, EJS

## Quickstart  
- Clone repo
- Navigate to project (cd demon-slayer-api)
- Install dependencies (npm install)
- Run (npm run dev)

## View Demo
Check out the Demon Slayer API demo [here]( https://demon-slayer-api-9c6c.onrender.com/).  

> [!NOTE]
> Demon Slayer API uses Render's free tier service, which spins down after 15 minutes of inactivity.  Initial requests can take around 30 seconds to wake up but I've found that it takes about 13 seconds.

## Endpoints
The API provides the following endpoints to retrieve character facts:

### Base URL
Serves all character facts.

```
GET https://demon-slayer-api-9c6c.onrender.com/api/
```

### /name
Serves specific character facts. Replace /name with a character name.

```
GET https://demon-slayer-api-9c6c.onrender.com/api/name
```

### /race/human
Serves character facts for all human characters.

```
GET https://demon-slayer-api-9c6c.onrender.com/api/race/human
```

### /race/demon
Serves character facts for all demon characters.

```
GET https://demon-slayer-api-9c6c.onrender.com/api/race/demon
```

## Up Next:

- [ ] Add relationship endpoints
- [ ] Add character images
