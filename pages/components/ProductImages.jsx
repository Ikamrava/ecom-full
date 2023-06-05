// import Image from 'next/image'
// import React, { useState } from 'react'

// function ProductImages({images}) {
//     const [activeImage,setActiveImage] =useState(images[0])
    
    
//   return (
//     <div className=' shadow-lg p-2 flex flex-col items-center'>
//         <div className='w-[360px] h-[400px] text-center items-center flex justify-center '>
            
//                <img className=' w-72 h-72 object-contain' src={activeImage}  alt="" />
             
//         </div>

//         <div className='flex gap-2 overflow-scroll'>
//         {images.map((image, index) => (
//             <img className='w-15 h-20 mt-2 cursor-pointer' key={index} src={image}
//              onClick={() => setActiveImage(image)} alt="" />
//         ))}
//         </div>
       
         
//     </div>
//   )
// }

// export default ProductImages