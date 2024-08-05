import React from 'react'
import{Link} from 'react-router-dom'
function Cta() {
  return (
    <>
      <div className='flex justify-center items-center text-white w-full cta' id='cta'>
        <div className='mx-8 w-full h-96 flex items-center py-16 px-12 text-center lg:justify-between lg:text-left'>
          <div className='flex flex-col w-full lg:flex-row lg:justify-around '>
            <div className='text-white mb-4'>
              <p className='text-2xl font-bold md:text-4xl mb-4'>Are you ready to scale your business?</p>
              <p className='text-lg md:text-2xl font-semibold'>Get in touch and let us build something amazing <span className='font-extrabold'>together</span>! </p>
            </div>
            <div className='text-white font-semibold w-full lg:w-72 pt-6 lg:mx-12'>
              <Link to="/contact" className="bg-transparent border hover:bg-blue-900 hover:border-blue-800 text-white justify-center text-center rounded-lg px-10 py-3 flex items-center group">Send a message
                <svg className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

              </Link>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Cta;