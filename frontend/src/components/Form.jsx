import React from 'react'

const Form = () => {
  return ( 
    <div>
      <div className='bg-blue-40 flex flex-col gap-2'>
        <input className='bg-gray-500 rounded-sm p-2 focus:outline-none border border-gray-400 focus:border-blue-400'
        placeholder='Enter title'/>

<input className='bg-gray-500 rounded-sm p-2 focus:outline-none border border-gray-400 focus:border-blue-400'
        placeholder='Enter Description'/>
       <div>
        <button className='rounded-lg bg-blue-600 p-2 font-bold hover:bg-blue-700'>
            Submit 
        </button>
       </div>
      </div>
    </div>
  )
}

export default Form
