import React from 'react'


const LandingPg = () => {
  return (
    <section className='landing-pg' id='home'>
      <div className='landing-pg-txt'>
        <h1>We have Everything that your <span className='text-red-600'>Car</span> needs!</h1>
        <p>
          CarSales, your one-stop destination for high-quality car parts and accessories.Rev up your vehicle's performance with our extensive selection of top-notch products, meticulously curated to meet the needs of automotive enthusiasts like you.
        </p>
        <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
          Check It out 
        </button>

      </div>
    </section>
  )
}

export default LandingPg
