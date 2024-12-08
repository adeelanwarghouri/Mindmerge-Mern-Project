import React from "react";
import Navigation from "./Navbar";

const Contactus = () => {
  return (
    <>
    <Navigation/>
      <div className="  bg-slate-50 pt-7">
        <div className="mx-4 m-9  flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="mb-4 block text-xl font-semibold text-primary">
                Contact Us
              </span>
              <h2 className="mb-16 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH WITH US
              </h2>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="w-full">
                  <h4 className="mb-6 text-3xl font-bold text-dark dark:text-white">
                    Our Location
                  </h4>

                  <div className="flex  items-center gap-4 mb-4">
                    <span className="bg-blue-500 py-3 px-4 rounded-full font-bold text-2xl text-white ">
                      EE
                    </span>
                    <span>
                      <h2>EE Network</h2>
                      <p className="text-base text-body-color dark:text-dark-6">
                        1 Braham Street London
                        <br />
                        <span className="font-bold"> Postcode : </span> E1 8 EE
                      </p>
                    </span>
                  </div>

                  <div className="flex  items-center gap-4 mb-4">
                    <span className="bg-slate-300 p-3 rounded-full font-bold text-2xl">
                      3G
                    </span>
                    <span>
                      <h2>THREE Network</h2>
                      <p className="text-base text-body-color dark:text-dark-6">
                        450 Longwater Avenue, Green Park, Reading, Berkshire.
                        <br />
                        <span className="font-bold"> Postcode : </span> RG2 6GF
                      </p>
                    </span>
                  </div>

                  <div className="flex  items-center gap-4 mb-4 ">
                    <span className="bg-red-600 py-3.5 px-1  rounded-full font-bold text-xl text-white">
                      Voda
                    </span>
                    <span>
                      <h2>Vodafone Network</h2>
                      <p className="text-base text-body-color dark:text-dark-6">
                        Vodafone House, The Connection, Newbury, Berkshire.
                        <br />
                        <span className="font-bold"> Postcode : </span> RG14 2FN
                      </p>
                    </span>
                  </div>

                  <div className="flex  items-center gap-4 mb-4 ">
                    <span className="bg-gradient-to-r from-yellow-300 from-10% via-red-400 via-40% to-blue-500 to-90% ...  py-3.5 px-3 rounded-full font-bold text-xl">
                      Sky
                    </span>
                    <span>
                      <h2>Sky Network</h2>
                      <p className="text-base text-body-color dark:text-dark-6">
                        Grant Way, Isleworth, Middlesex
                        <br />
                        <span className="font-bold"> Postcode : </span> TW7 5QD
                      </p>
                    </span>
                  </div>

                  <div className="flex  items-center gap-4 mb-4 ">
                    <span className=" py-3 px-4 text-white rounded-full font-bold text-2xl bg-green-500">
                      ID
                    </span>
                    <span>
                      <h2>ID-Mobiles UK</h2>
                      <p className="text-base text-body-color dark:text-dark-6">
                        1 Portal Way, London
                        <br />
                        <span className="font-bold"> Postcode : </span>W3 6RS
                      </p>
                    </span>
                  </div>
                  <div className="flex  items-center gap-4 mb-4 ">
                    <span className=" bg-fuchsia-900 text-white  py-3 px-2.5 rounded-full font-bold text-2xl">
                      TM
                    </span>
                    <span>
                      <h2>TalkMobiles UK</h2>
                      <p className="text-base text-body-color dark:text-dark-6">
                        Talkmobile Limited, Vodafone House, The Connection,
                        Newbury, Berkshire
                        <br />
                        <span className="font-bold"> Postcode : </span> RG14 2FN
                      </p>
                    </span>
                  </div>
                  <div className="flex  items-center gap-4 mb-4 ">
                    <span className="bg-black text-white  py-3.5 px-1.5 rounded-full font-bold text-2xl">
                      Lyca
                    </span>
                    <span>
                      <h2>LycaMobiles UK</h2>
                      <p className="text-base text-body-color dark:text-dark-6">
                        3rd Floor Walbrook Building, 195 Marsh Wall, London
                        <br />
                        <span className="font-bold"> Postcode : </span> E14 9SG
                      </p>
                    </span>
                  </div>

                  <div className="flex  items-center gap-4 mb-4 ">
                    <span className="bg-sky-400 text-white  py-3.5  px-6 rounded-full font-bold text-2xl">
                      L
                    </span>
                    <span>
                      <h2>Lebara Mobiles UK</h2>
                      <p className="text-base text-body-color dark:text-dark-6">
                        7th Floor, Import Building, 2 Clove Crescent, East India
                        Dock, London
                        <br />
                        <span className="font-bold"> Postcode : </span> E14 2BE
                      </p>
                    </span>
                  </div>
                </div>
              </div>


             

            </div>
          </div>
        </div>
      </div>
      <section class="text-gray-600 body-font relative bg-white">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-10">
      <h1 class="sm:text-3xl text-2xl font-bold title-font  text-gray-900">Contact Us</h1>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter Name Here..." class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" placeholder="mindmerge123@gmail.com"    name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" 
           placeholder="Enter your Query Here..."
           class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button  class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact Us</button>
        </div>

        
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Contactus;
