import React from "react";
import { Carousel } from "flowbite-react";
import Navigation from "./Navbar";

function Home() {
  return (
    <>
      <Navigation />
      <div className="h-64 sm:h-80 xl:h-lvh">
        <Carousel slideInterval={3000}>
          <img
            src="../Images/home/img1.jpg"alt="..."
          />
          <img src="../Images/home/img2.jpg" alt="..." />
          <img src="../Images/home/img3.jpg" alt="..." />
          <img src="../Images/home/img4.jpg" alt="..." />
        </Carousel>
      </div>

      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All Mobile Varieties. </h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
     
    </div>
    <div class="flex justify-center  flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/3 sm:w-1/2  p-4">
        <div class="bg-gray-100 w-72 h-72 p-6 rounded-lg">
          <img class=" h-60 rounded object-cover object-center mb-6" src="https://www.crn.com/news/computing/2024/media_145a1beeba0b6019cb2e29bb048f71cc31923a43e.png?width=2000&format=webply&optimize=medium" alt="content"/>
         
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 p-4">
        <div class="bg-gray-100 w-72 h-72 p-6 rounded-lg">
          <img class=" rounded object-cover object-center mb-6" src="https://pngimg.com/uploads/iphone16/iphone16_PNG39.png"/>
         
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/3 sm:w-1/2   p-4">
        <div class="bg-gray-100 w-72 h-72 p-6 rounded-lg">
          <img class=" rounded h-64  object-cover object-center mb-6" src="https://pngimg.com/uploads/iphone16/iphone16_PNG30.png" alt="content"/>
         
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/3 sm:w-1/2   p-4">
        <div class="bg-gray-100 w-72 h-72 p-6 rounded-lg">
          <img class="  rounded  object-cover object-center mb-6" src="https://pngimg.com/uploads/iphone16/iphone16_PNG26.png"/>
          
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/3 sm:w-1/2   p-4">
        <div class="bg-gray-100 w-72 h-72 p-6 rounded-lg">
          <img class=" pl-5 h-60 rounded  object-cover object-center mb-6" src="https://pngimg.com/uploads/iphone16/iphone16_PNG29.png"/>
          
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/3 sm:w-1/2   p-4">
        <div class="bg-gray-100 w-72 h-72 p-6 rounded-lg">
          <img class=" pl-10 h-64  rounded  object-cover object-center mb-6" src="https://pngimg.com/uploads/iphone16/iphone16_PNG8.png"/>
          
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/3 sm:w-1/2   p-4">
        <div class="bg-gray-100 w-72 h-72 p-6 rounded-lg">
          <img class="  rounded  object-cover object-center mb-6" src="../Images/products/iphoneX.png"/>
          
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/3 sm:w-1/2   p-4">
        <div class="bg-gray-100 w-72 h-72 p-6 rounded-lg">
          <img class=" h-64 pb-4  rounded  object-cover object-center mb-6" src="../Images/products/iphone12promax.png"/>
          
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/3 sm:w-1/2    p-4">
        <div class="bg-gray-100 w-72 h-72  rounded-lg">
          <img class=" h-64 pl-9 rounded  object-cover object-center mb-6" src="../Images/products/iphone11.png"/>
          
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/3 sm:w-1/2   p-4">
        <div class="bg-gray-100 w-72 h-72  rounded-lg">
          <img class=" h-64 pl-7  rounded  object-cover object-center mb-6" src="../Images/products/iphone11promax.png"/>
          
        </div>
      </div><div class="xl:w-1/4 md:w-1/3 sm:w-1/2   p-4">
        <div class="bg-gray-100 w-72 h-72 p-6 rounded-lg">
          <img class="  rounded  object-cover object-center mb-6" src="https://pngimg.com/uploads/iphone16/iphone16_PNG26.png"/>
          
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  );
}

export default Home;
