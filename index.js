const express = require('express');
const connectingmongodb = require('./controllers/connection');

const UrlRoute = require('./routes/url');

const app= express();
const PORT =3001;

connectingmongodb('mongodb://localhost:27017/urlshortener')
.then(()=> console.log('Connected to MongoDB'))
.catch((err)=> console.error('Failed to connect to MongoDB', err));
 
app.use("/url", UrlRoute);
app.use(express.json());

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));