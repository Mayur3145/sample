const student1 = {
    name: "Mayur Chaudhari",
    className: "D15A",
    rollNo: 08,
};

console.log("Student 1: ", student1);

class Student {
    constructor(uname, className, rollNo) {
        this.uname = uname;
        this.className = className;
        this.rollNo = rollNo;
    }
}

const student2 = new Student("Mayur Chaudhari", "D15A", 08);
console.log("Student 2: ", student2);

Student.prototype.college = "VESIT";
console.log("Student 2: ", student2);

document.getElementById("printName").innerHTML = student2.uname;
document.getElementById("printClass").innerHTML = student2.className;
document.getElementById("printRoll").innerHTML = student2.rollNo;

function checkError() {
    const value = document.getElementById("checkError").value;
    alert(value);

    if (isNaN(value) || value == 0) {
        alert("Invalid Input");
        throw new Error("Invalid Input");
    } 
    else {
        alert("Valid Input");
    }
}
function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }

function onClick(e) {
    e.preventDefault();
    grecaptcha.ready(function() {
      grecaptcha.execute('6LdY3gAdAAAAAHIjqLl_KWnVelgnbm0rLTKsaHbD', {action: 'submit'}).then(function(token) {
          // Add your logic to submit to your backend server here.
      });
    });
  }