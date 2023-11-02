import { coursesModels } from './models/courses.model.js';

export default class Courses {
    constructor() {
        console.log('Working courses with DB');
    }

    getAll = async () => {
        const courses = await coursesModels.find().lean();
        return courses;
    }

    save = async (course) => {
        const result = await coursesModels.create(course)
        return result;
    }

    update = async (id, course) => {
        const result = await coursesModels.updateOne({ _id: id }, course);
        return result
    }
}