const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const port = process.env.ICTITO_PORT || 4021;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost/ict")
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

app.listen(port, ()=>{
    console.log(`server is running on port ${port}...`);
});