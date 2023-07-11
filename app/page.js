import React from 'react'
import CalendarCounter from './CalendarCounter.js';

function MainPage() {
  return (
    <div className='flex-col'>
      <div className='flex-col flex-1 text-center'>
          <main className='flex justify-center bg-blue-100 flex-1'>
          <CalendarCounter/>
          </main>
          <section className='bg-red-100'>section</section>
      </div>
      <footer className='bg-green-100'>footer</footer>
    </div>
  )
}

export default MainPage