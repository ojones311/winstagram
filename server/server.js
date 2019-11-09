const express = require('express');
const cors = require('cors');
const db = require('./pgPromise');

const app = express(); 

app.use(cors()); 
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 

//POST Route:

const postsRoutes = require("./routes/postsRouter");

app.use("/posts", postsRoutes);
app.use


const likesRouter = require("./routes/likesRouter");
app.use("/likes", likesRouter);


app.get('/', (req, res) => {
    res.json({
        message: 'Server is up and running',
        params: req.params.test
    })
});


const usersRouter = require('./routes/usersRouter.js')
app.use('/users', usersRouter)

// COMMENTS Route
const commentsRouter = require("./routes/commentsRouter")
app.use('/comments', commentsRouter)

// ALBUMS Route
const albumsRouter = require('./routes/albumsRouter');
app.use('/albums', albumsRouter);


const picturesRouter = require('./routes/picturesRouter');
app.use('/pictures', picturesRouter);

const port = 8000; 

app.listen(port, () => {
    console.log(`Live at => http://localhost:${port}`);
});