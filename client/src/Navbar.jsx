"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";

const Navigation = () => {

  
  return (
    <>
      <Navbar fluid rounded className="">
        <Navbar.Brand href="/home">
          <img
            src="https://media.istockphoto.com/id/1032577924/vector/vector-illustration-icon-with-community-management-concept.jpg?s=612x612&w=0&k=20&c=0fKN54ce5yQVIPOBU4CwnbcU0AAqGNIS18q60aPIkzg=" 
            className="mr-3 h-7 sm:h-10"
            alt="Company Logo"
          />
        <a href="/home">  <span className="self-center leading-6 whitespace-nowrap text-2xl font-bold dark:text-white text-blue-500">
            Mindmerge <br />
            <li className="list-none font-semibold text-xs text-yellow-400 ">
              Community
            </li>
          </span>
          </a>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {/* <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="#" className="mr-2 " />}
          > */}
            {/* <Dropdown.Header>
              <span  className="block text-sm">User Name</span>
              <span className="block truncate text-sm font-medium">
                User Email
              </span>
            </Dropdown.Header> */}
            {/* <Dropdown.Item href="/login">Login</Dropdown.Item>
            <Dropdown.Divider /> */}
            
          {/* </Dropdown> */}
         <a href="/login"> <button type="button" class="text-white bg-blue-500 border focus:outline-none font-medium rounded-lg text-base px-6 py-2 text-center me-2 mb-1">Login</button></a>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/home" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/addscript">Add New</Navbar.Link>
          <Navbar.Link href="/script">Script</Navbar.Link>
          <Navbar.Link href="/rebuttals">Rebuttals</Navbar.Link>
          <Navbar.Link href="/contactus">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
