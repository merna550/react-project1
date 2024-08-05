import React from 'react'
import img1 from '../assets/images/clients/kws.png'
import img2 from '../assets/images/clients/protergia.png'
import img3 from '../assets/images/clients/geps.png'

const clientImage = {
  height: '10rem',
  width: 'auto',
  mixBlendMode: 'colorBurn'
}

function Clients() {
  return (
    <>
      <div className=' mt-8 bg-gray-100'>
        <section id='clients' data-aos="fade-up">
          <div className="my-4 py-4">
            <h2 className='my-2  text-center text-3xl uppercase font-bold text-blue-900'>OUR CLIENTS
            </h2>
            <div className='flex justify-center'>
              <div className='border-b-4 w-24 border-blue-900'></div>
            </div>
            <h2 className='text-2xl text-blue-900 font-semibold my-4 flex justify-center'>Some of our clients.</h2>
          </div>

          <div className=' p-16 ' data-aos="fade-in" data-aos-delay="600" >
            <div className=' grid lg:grid-cols-3 sm:grid-cols-3 grid-flow-col gap-9 '>

              <div style={clientImage} className="flex justify-center overflow-hidden transition-all ease-in-out opacity-50 hover:opacity-100  p-3  w-1/6 grid-col-1">
                <img src={img1} alt='img1' />
              </div>
              <div style={clientImage} className=" flex justify-center overflow-hidden p-3 transition-all grid-col-1 ease-in-out opacity-50 hover:opacity-100">
                <img src={img2} alt='img2' />
              </div>
              <div style={clientImage} className=" flex justify-center overflow-hidden p-3 transition-all grid-col-1 ease-in-out opacity-50 hover:opacity-100">
                <img src={img3} alt='img3' />
              </div>

            </div>

          </div>

        </section>
      </div>
    </>
  )
}

export default Clients;