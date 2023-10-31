import { studentsModel } from './models/students.models.js';

export default class Students {
    constructor() {
        console.log('Working students with DB');
    }

    getAll = async () => {
        // MongoDB el formato de nuestro registro son BSON
        const students = await studentsModel.find();
        // transformar de BSON -> POJO (Plain Old Javascript Object)
        return students.map(student => student.toObject());   
    }

    save = async (student) => {
        const result = await studentsModel.create(student);
        return result;
    }
}

