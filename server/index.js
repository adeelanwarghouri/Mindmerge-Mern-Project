const express = require ("express");
const mongoose = require ("mongoose");
const cors = require ("cors");
const EmployeeModel = require ("./models/Employee")
const port = 8000;
const fs = require ("fs");

const app = express();
app.use(express.json());
app.use(cors());


app.post("/login", (req,res) => {
    const {email, password}= req.body
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json( "Success")
            }
            else{
                res.json("Incorrect Password.")
            }
        } else{
          res.json("User Not Existed.")  

        }
    })
})

app.post("/register", (req,res) => {
EmployeeModel.create(req.body)
.then(employees => res.json(employees))
.catch(err => res.json(err))
})

try { mongoose.connect("mongodb://127.0.0.1:27017/employee")
        console.log(`Database connected Successfully...`)
} catch (error) {
    console.log(error)
}


app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`)
});