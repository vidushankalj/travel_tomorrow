import React from 'react'



function Pageshero(props) {
  return (
    <>
    <div className='w-screen h-screen relative'> 
      <video
        src={props.bgVideo}
        className='absolute top-0 left-0 w-screen h-screen object-cover mb-4 -z-50'
        autoPlay
        loop
        muted
      />
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30 -z-30'></div>

      

      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="text-center text-white font-custom flex flex-col items-center">
          <h1 className="text xl font-bold mb-4">{props.title}</h1>
          <p className="text-lg mb-8 w-1/2 place-content-center">{props.message}</p>
        </div>
      </div>
    </>
  )
}

export default Pageshero