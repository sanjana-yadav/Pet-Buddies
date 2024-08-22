const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const categoryRoutes = require('./routes/category');
const petRoutes = require('./routes/pet');
const adoptionRoutes = require('./routes/adoption');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use('/public', express.static(path.join(__dirname,'public')));

//routes
app.use('/api/category',categoryRoutes);
app.use('/api/pets',petRoutes);
app.use('/api/adoption',adoptionRoutes);

const mongoUri = 'mongodb://localhost:27017/PetBuddiesDB';

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
});

mongoose.connection.on('connected',()=>{
    console.log('Connected to MongoDB...')
});
mongoose.connection.on('error',(err)=>{
    console.log("Error Connecting to MongoDB...",err)
});

app.listen(4001,() => {
    console.log("App is running on port 4001")
});