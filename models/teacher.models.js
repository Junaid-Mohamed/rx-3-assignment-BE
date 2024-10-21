const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name:  String,
    age: Number,
    gender: String,
    subjectSpecialization: String,
    yearsOfExperience: Number,
    gradeAssigned: String,
});

const Teacher = new mongoose.model("Teacher",teacherSchema);

module.exports = Teacher;