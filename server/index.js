const path = require('path');
const express = require('express');
require('dotenv').config();

const productOverview = require('./routes/product_overview.js');
const questionsAnswers = require('./routes/questions_answers.js');
const relatedProducts = require('./routes/related_products.js');
const reviews = require('./routes/reviews.js');
const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(4000);

// product overview routes
app.use('/atelier', productOverview);
app.use('/atelier', questionsAnswers);
app.use('/atelier', relatedProducts);
app.use('/atelier', reviews);
