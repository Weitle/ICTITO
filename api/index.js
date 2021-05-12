const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const port = process.env.ICTITO_PORT || 4021;

const app = express();
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost/ict", {useNewUrlParser: true})
        .then(()=>{
            console.log("Connected to MongoDB...");
        }).catch(err=>{
            console.log("Error:", err.message);
        });

// 引入路由
const projectsRouter = require('./routers/projects');
app.use('/projects', projectsRouter);
const businessRouter = require('./routers/businesses');
app.use('/businesses', businessRouter);
const departmentsRouter = require('./routers/departments');
app.use('/api/departments', departmentsRouter);
const engineersRouter = require('./routers/engineers');
app.use('/api/engineers', engineersRouter);
const authRouter = require('./routers/users');
app.use('/api/auth', authRouter);

const abilityRouter = require('./routers/abilities');
app.use('/api/abilities', abilityRouter);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}...`);
});