const express = require('express');

const UrlRoute = require('./routes/url');

const app= express();
const PORT =3001;

app.use("/url", UrlRoute);
app.use(express.json());

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));