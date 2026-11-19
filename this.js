// Creating Student Object
let student = {

    // Properties
    name: "Shashank",
    rollNo: 101,
    course: "MCA",
    college: "Gyan Ganga College",
    age: 22,
    marks: 85,

    // Method to display student details
    displayDetails: function() {
        console.log("------ STUDENT DETAILS ------");

        console.log("Student Name: " + this.name);
        console.log("Roll Number: " + this.rollNo);
        console.log("Course: " + this.course);
        console.log("College: " + this.college);
        console.log("Age: " + this.age);
        console.log("Marks: " + this.marks);
    },

    // Method to calculate result
    calculateResult: function() {

        console.log("\n------ STUDENT RESULT ------");

        if (this.marks >= 75) {
            console.log("Grade: A");
            console.log("Result: Distinction");
        }
        else if (this.marks >= 60) {
            console.log("Grade: B");
            console.log("Result: First Division");
        }
        else if (this.marks >= 40) {
            console.log("Grade: C");
            console.log("Result: Pass");
        }
        else {
            console.log("Grade: F");
            console.log("Result: Fail");
        }
    },

    // Method to update marks
    updateMarks: function(newMarks) {
        this.marks = newMarks;
        console.log("\nMarks Updated Successfully!");
        console.log("New Marks: " + this.marks);
    },

    // Method to display student information
    showMessage: function() {
        console.log("\nHello " + this.name);
        console.log("Welcome to " + this.college);
        console.log("You are studying " + this.course);
    }
};

// Calling Object Methods
student.displayDetails();

student.calculateResult();

student.showMessage();

student.updateMarks(92);

student.calculateResult();