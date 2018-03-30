
function addStudent(){
    var firstName = document.getElementById("studentFirst").value;
    var lastName = document.getElementById("studentLast").value;
    var grade = document.getElementById("studentGrade").value;
    allStudents.push(new Student(firstName, lastName, grade));
    buildSelectLists();

}
function addTeacher(){
    var firstName = document.getElementById("teacherFirst").value;
    var lastName = document.getElementById("teacherLast").value;
    var subject = document.getElementById("teacherSubject").value;
    allStudents.push(new Student(firstName,lastName, subject));
    buildSelectLists();
}

function addSection(){
    var name = document.getElementById("sectionName").value;
    var count = document.getElementById("sectionCount").value;
    allSections.push(new Section(name, count));
    buildSelectLists();
}

function listTeachers(){
    var html = "<table border = '1'>";
    for (var i = 0; i < allTeachers.length; i++) {
        html += "<tr>";
        html += "<td>" + allTeachers[i].firstName + "</td>";
        html += "<td>" + allTeachers[i].lastName + "</td>";
        html += "<td>" + allTeachers[i].subject + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("teacherList").innerHTML = html;
}

function listStudents(){
    var html2 = "<table border = '1'>";
    for (var i = 0; i < allStudents.length; i++) {
        html2 += "<tr>";
        html2 += "<td>" + allStudents[i].firstName + "</td>";
        html2 += "<td>" + allStudents[i].lastName + "</td>";
        html2 += "<td>" + allStudents[i].grade + "</td>";
        html2 += "</tr>";
    }
    html2 += "</table>";
    document.getElementById("studentList").innerHTML = html2;
}



function listSections(){
    var html3 = "<table border = '1'>";
    for (var i = 0; i < allSections.length; i++){
        html3 += "<tr>";
        html3 += "<td>" + allSections[i].name + "</td>";
        html3 += "<td>" + allSections[i].count + "</td>";
        html3 += "</tr>";
    }
    html3 += "</table>";
    document.getElementById("sectionList").innerHTML = html3;
}


function buildSelectLists(){
    var studentSelectList = "";
    for(var i = 0; i < allStudents.length; i ++){
        studentSelectList += "<option value = " + allStudents[i].id + ">" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>";
    }
    document.getElementById("studentSelectList").innerHTML += studentSelectList;

    var teacherSelectList = "";
    for (var x = 0; x < allTeachers.length; x ++) {
        teacherSelectList += "<option value = " + allTeachers[x].id + ">" + allTeachers[x].firstName + " " + allTeachers[x].lastName + "</option>";
    }
    document.getElementById("teacherSelectList").innerHTML += teacherSelectList;

    var sectionSelectList = "";
    for (var y = 0; y < allSections.length; y ++){
        sectionSelectList += "<option value = " + allSections[y].id + ">" + allSections[y].name + " " + "</option>";
    }

    document.getElementById("sectionSelectList2").innerHTML += sectionSelectList2;
    document.getElementById("sectionSelectList").innerHTML += sectionSelectList;
}

function getSectionById(sectionID){
for(var i = 0; i < allSections.length; i ++){
    if (allSections[i].id === sectionID) {
    return allSections[i];
    }
    }
}

function getTeacherById(teacherID){
for(var i = 0; i < allTeachers.length; i ++){
    if (allTeachers[i].id === teacherID) {
    return allTeachers[i];
    }
    }
}

function getStudentsById(studentID){
for(var i = 0; i < allStudents.length; i ++){
    if (allStudents[i].id === studentID) {
     return allStudents[i];
    }
    }
}

function addStudentToSection(){
    var student = getStudentsById(document.getElementById("studentSelectList").value);
    var section = getSectionById(document.getElementById("sectionSelectList").value);
    section.addStudent(student);
}

function addTeacherToSection(){
    var teacher = getTeacherById(document.getElementById("teacherSelectList").value);
    var section = getSectionById(document.getElementById("sectionSelectList").value);
    section.addTeacher(teacher);
}

function listStudentsInSections(){
    var html = "<table border = '5'>";
    var section = getSectionById(document.getElementById("sectionSelectList2").value);
    for (var z = 0; z < section.students.length; z++ ){
        html += "<tr>";
        html += "<td>" + "Student:" + "</td>";
        html += "<td>" + section.students[z].firstName + "</td>";
        html += "<td>" + section.students[z].lastName + "</td>";
        html += "<td>" + section.students[z].grade + "</td>";
        html += "</td>";
    }
    document.getElementById("output").innerHTML = html;
}
function listTeachersInSection() {
    var section = getSectionById(document.getElementById("sectionSelectList").value);
    document.getElementById("output2").innerHTML = section.teacher.firstName + " " + section.teacher.lastName;

}
