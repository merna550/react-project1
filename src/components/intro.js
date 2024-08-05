import React from 'react'
import img from '../assets/images/Web-developer.svg'
import {Link} from 'react-router-dom'
import Contact from '../pages/contact';
function Intro() {
  return (
    <>
      <div className='m-auto max-w-6xl p-2 md:p-12 h-5/6' id='about'>
        <div className="flex flex-col-reverse lg:flex-row justify-between py-8 lg:text-left"  data-aos="fade-up">

          <div className="flex flex-col lg:w-1/2 justify-center lg:mx-4" >
            <img src={img} alt="card image" className="float-left rounded-t" />
          </div>

          <div className=" flex-col w-full px-8 ml-6 my-4 text-center lg:text-left lg:m-0 lg:w-1/2 justify-between lg:justify-end "data-aos="zoom-in" data-aos-delay="500">
            <h3 className='text-3xl text-blue-900 font-bold'>We develop high quality bespoke web and mobile applications for organizations, institutions and SMEs</h3>
            <div className='text-gray-600 text-xl font-semibold my-3'>
              Our team is well vast in software development and is ready to help develop the applications of your choice.

              We take responsibility for building custom software solutions that caters for automation of your business processes and improve efficiency.
            </div>
            <div className='mt-5 '>
              <Link  to='/contact' className='bg-blue-900  hover:bg-blue-800  text-white py-2 px-6 my-4 rounded-2xl w-full inline-flex justify-center items-center text-lg shadow-xl  sm:w-auto sm:mb-0 group'>Contact us <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></Link>
            </div>
          </div>


        </div>



      </div>

    </>
  )
}

export default Intro;