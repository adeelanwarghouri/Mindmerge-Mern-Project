import axios from "axios";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault()
   await axios.post("http://localhost:8000/Login", {email, password})
    .then(Result => { 
        console.log(Result)
        if(Result.data === "Success"){
        toast.success(`User Login Successfully.`)
          navigate("/home")
        }
        else{
          toast.error(`Login Error: Please Try Again with correct details.`)
        }
    })
    
    .catch(err => 
       console.log (err)) 
    }


  return (
    <>
      <form  onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-screen">
        <div className="w-96 ">
          <div className="mb-5 ">
            <div className="mb-2 block">
            <h1  className="text-3xl font-bold text-center mb-10 text-slate-700 underline ">Login</h1>
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@gmail.com"
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5 ">
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="Enter Password"
              required
              onChange={(e)=>setPassword(e.target.value)}

            />
          </div>
          <div className="flex items-center gap-2 mb-5">
            <Checkbox required id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit" className="w-36 py-1 text-xl ">
           Login
          </Button>
        </div>
      </form>
    </>
  );
}

export default Login;
