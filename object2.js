
const student = {
  name: "Vansh",
  age: 20,
  course: "B.Tech CSE",
  college: "BGIEM",

  // Method
  introduce: function () {
    console.log("Hello, my name is " + this.name);
  }
};

// Accessing object values
console.log(student.name);
console.log(student.course);

// Calling method
student.introduce();