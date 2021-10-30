const express = require('express');
const userRoutes = require('./routes/userRoutes');
const mongoose  = require('mongoose');
const config = require('./config/keys');
const app = express();

/******************************************  MiddleWares  ********************************************/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);


/******************************************  MongoDb Connection  ********************************************/
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDb Connected')).catch(err => console.log(err));




/******************************************  To serve frontend in production  ********************************************/
if(process.env.NODE_ENV === 'production') { // For running frontend if you are hosting both frontend and backend on the server. The server will serve the static build file in frontend/build
    app.use(express.static('./frontend/build'));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname , 'frontend', 'build', 'index.html'));

    });
}



 app.listen(process.env.PORT || 8000, () => console.log('Listening to port 8000'));


 