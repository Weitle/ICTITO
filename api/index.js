const express = require('express');
const cors = require('cors');
const port = process.env.ICTITO_PORT || 4021;

const app = express();
app.use(cors());

// 引入路由
const projectsRouter = require('./routers/projects');
app.use('/projects', projectsRouter);
const businessRouter = require('./routers/businesses');
app.use('/businesses', businessRouter);
const departmentsRouter = require('./routers/departments');
app.use('/departments', departmentsRouter);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}...`);
});