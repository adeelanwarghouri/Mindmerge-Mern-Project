import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { toast } from "react-toastify";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   await axios
      .post("http://localhost:8000/register", { name, email, password })
      .then((Result) => {
        console.log(Result);
        toast.success(`User Created Successfully.`)
        navigate("/Login");
      })
      .catch((err) =>{ console.log(err);
      toast.error(`User Registration error.`)
      }
    )
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col justify-center items-center h-screen "
      >
        <div className="w-96 ">
          <div className="mb-5 ">
            <div className="mb-2 block">
              <h1  className="text-3xl font-bold text-center mb-10 text-slate-700 underline ">Signup</h1>
              <Label htmlFor="User-Name" value="Your Name" />
            </div>
            <TextInput
              className="text-2xl"
              id="User-Name"
              type="text"
              required
              shadow
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5 ">
            <div className="mb-2 block ">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@gmail.com"
              required
              shadow
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5 ">
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="Password"
              required
              shadow
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 mb-5  ">
            <Checkbox id="agree" required />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <a
                href="#"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                terms and conditions
              </a>
            </Label>
          </div>
          {/* <div className="flex justify-between"> */}
          <Button className="w-full py-1 text-xl " type="submit">
            Submit
          </Button>
          <h1 className="my-4 text-base font-semibold text-slate-800">If already have account :</h1>
         <a href="/Login"> <Button className="w-full  py-1 text-xl  " >
            Login
          </Button></a>
          {/* </div> */}
        </div>
      </form>
    </>
  );
}

export default Signup;
