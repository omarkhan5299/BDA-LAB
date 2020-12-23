db.Employee.drop()
db.Department.drop()


db.createCollection("Employee")
db.createCollection("Department")


db.Employee.insert({_id:1,Name:"A",DeptNo: NumberInt(1003),Dept:"Research",Salary:1000000,Age:NumberInt(23), email:"A@gmail.com"})

db.Employee.insertOne({_id:2,Name:"B", DeptNo: NumberInt(2003),Dept:"Product Development",Salary:1000000, Age:NumberInt(33),email:"B@gmail.com"})

db.Employee.insertMany([{_id:3,Name:"C",DeptNo: NumberInt(1002),Dept:"Marketing",Salary:1000000,Age:NumberInt(43), email:"C@gmail.com"},
{_id:4,Name:"D",DeptNo: NumberInt(4004),Dept:"Research",Salary:1000000, Age:NumberInt(28), email:"D@gmail.com"}
])

db.Employee.insert([{_id:5,Name:"E",DeptNo: NumberInt(1013),Dept:"HR",Salary:1000000, Age:NumberInt(29),email:"D@gmail.com"},
{_id:6,Name:"F",DeptNo: NumberInt(3006),Dept:"Accounting",Salary:1000000,Age:NumberInt(56),email:"E@gmail.com"}])




db.Department.insert([{_id:1,Name:"Research",Head:"P",EmployeeCount:NumberInt(5000),email:"P@gmail.com"},
{_id:2,Name:"Marketing",Head:"Q",EmployeeCount:NumberInt(8000),email:"Q@gmail.com"},
{_id:3,Name:"Product Development",Head:"R",EmployeeCount:NumberInt(10000),email:"R@gmail.com"},
{_id:4,Name:"HR",Head:"S",EmployeeCount:NumberInt(4000),email:"S@gmail.com"},
{_id:5,Name:"Accounting",Head:"T",EmployeeCount:NumberInt(7000),email:"T@gmail.com"}
])




db.Employee.update({_id:1},{$set:{Phone:NumberLong(1111122222)}},{upsert:true})



db.Department.update({_id:1},{$unset:{email:"P@gmail.com"}})




db.Employee.find({})
db.Department.find({})



db.Employee.find({DeptNo:{$gt:1000,$lt:1005}},{Name:true,DeptNo:true})




db.Employee.find({Name:{$regex:"^A"}})




db.Employee.find({Age:{$gt:30}})
