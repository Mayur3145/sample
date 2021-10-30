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

var onloadCallback = function() {
	grecaptcha.render('html_element', {
    'sitekey' : '6Ldg-gAdAAAAAPsgL-6ysXD--pNiigBsuQjH1Wk1'
  });
};
onloadCallback();

$('form').on('submit', function(e) {
  if(grecaptcha.getResponse() == "") {
    e.preventDefault();
    alert("You can't proceed!");
  } else {
    alert("Thank you");
  }
});
