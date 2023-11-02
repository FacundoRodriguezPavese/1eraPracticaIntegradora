import express from 'express';
import studentsRouter from './routes/students.router.js';
import coursesRouter from './routes/courses.router.js';
import viewsRouter from './routes/views.router.js';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/students', studentsRouter);
app.use('/api/courses', coursesRouter);

try {
    await mongoose.connect('mongodb+srv://facundorodriguezpavese:bYT3RbG3UoU9wk3L@cluster55575fr.lvxf9dr.mongodb.net/primeraPracticaIntegradora?retryWrites=true&w=majority')
    console.log('DB connected');
} catch (error) {
    console.log(error.message);
}

app.listen(8080, ()=> {
    console.log('Server running in port 8080');
})