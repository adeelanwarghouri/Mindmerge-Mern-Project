import { Button, Checkbox, Label, Textarea, TextInput } from 'flowbite-react'
import React from 'react'
import Navigation from './Navbar'

function Add () {
  return (
    <>
    <Navigation/>
    <div className='p-6'>
     
<div className=' '>
<div className='w-full bg-slate-50 px-3 py-4 '>
<h1 className='font-bold text-center text-2xl mb-4 '>customer</h1>
<h3 className='font-bold text-xl '></h3>
<div className='mb-2'><span className=' font-bold text-lg text-blue-600 '>Customer: </span>
        <span className='font-bold text-base'>
        Why my phone shows its a spam call ?
            </span></div>

<p className='text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt qui sunt sint aut quo atque accusantium incidunt, rem molestiae beatae porro, provident delectus repellendus inventore excepturi aliquid laborum voluptate aliquam.
Dicta consectetur sapiente autem hic adipisci omnis sunt neque numquam aspernatur sequi distinctio beatae vel velit, aliquid, delectus quis doloremque explicabo officiis reprehenderit aut? Vel aliquam in pariatur magnam sunt?
Dicta iusto repudiandae, perferendis laboriosam maxime magni quis necessitatibus atque incidunt illo placeat, aliquam iste numquam quos exercitationem. Quae, et corrupti. Corporis velit ipsum modi eius dolore nisi earum autem.
Ad, corporis ducimus aliquam totam, nam officiis veniam adipisci tempore quod laudantium assumenda eveniet alias, voluptas quo quae! Dolorem sed id sit at ducimus expedita similique autem? Repudiandae, dolor magnam.
</p>
</div>

</div>
<div className="my-7">

      <form className="flex max-w-md flex-col gap-4 ">
      <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label value="Title" />
        </div>
        <TextInput placeholder='Enter Title here...'  type="text"  />
      </div>
      <div className="max-w-md">
      <div className="mb-2 block">
        <Label value="Your message" />
      </div>
      <Textarea placeholder="Enter Details here..." required rows={4} />
    </div>
    </div>
      <Button type="submit" className=''>Submit</Button>
    </form>

    </div>

    </div>  

    
    </>
  )
}

export default Add 
