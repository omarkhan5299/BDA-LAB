use StudentDB
//1. Creating a database “Student” with the following attributes  Rollno, Age, ContactNo, Email-Id

db.createCollection("Student")

//2. Inserting appropriate values

db.Student.insertMany([{RollNo:10,Age:21,Name:"Omar",ContactNo:9482141780,EmailId:"omar5299@gmail.com"},
                       {RollNo:11,Age:21,Name:"FEM",ContactNo:94821417780,EmailId:"ray@gmail.com"},
                       {RollNo:12,Age:22,Name:"John",ContactNo:94821417660,EmailId:"john@gmail.com"},
                       {RollNo:13,Age:23,Name:"Joel",ContactNo:94821417550,EmailId:"joel@gmail.com"},
                       {RollNo:14,Age:24,Name:"Simon",ContactNo:94421417808,EmailId:"simon@gmail.com"}]);
db.Student.find()

//3. Write query to update Email-Id of a student with rollno 10

db.Student.update({RollNo:10},{$set:{EmailId:"omar@gmail.com"}});  
db.Student.find({RollNo:10})

//4. Replace the student name from “ABC” to “Ray” of rollno 11

db.Student.update({RollNo:11},{$set:{Name:"Ray"}});
db.Student.find({RollNo:11})

//5. Export the created table into local file system

mongoexport -d StudentDB -c Student -f RollNo,Age,Name,ConatctNo,EmailId --type=csv -o Student.csv

//6. Drop the table

db.Student.drop()

//7. Import a given csv dataset from local file system into mongodb collection

mongoimport -d StudentDB -c Student --type csv --file Student.csv --headerline