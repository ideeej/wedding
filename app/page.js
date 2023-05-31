import React from 'react'
import Image from 'next/image'
import kiss from '/public/kiss.jpg'

function MainPage() {
  return (
    <div className='flex-col'>
      <div className='flex-col flex-1 text-center'>
          <main className='flex justify-center bg-blue-100 flex-1'>
            <Image className="mx-4 p-2 rounded-3xl border-t-0 border-4 border-solid border-stone-950" alt="Couple kissing" width="360"  src={kiss} />
          </main>
          <section className=''>section</section>
      </div>
      <footer>footer</footer>
    </div>
  )
}

export default MainPage