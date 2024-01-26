
import React from 'react'


import part1 from "../images/part1.png"
import part2 from "../images/part2.png"
import part3 from "../images/part3.png"
import part4 from "../images/part4.png"
import part5 from "../images/part5.png"
import part6 from "../images/part6.png"
import PartsInfo from './PartsInfo'
import PartsFormat from './PartsFormat'


function Parts() {
  return (
    <>
      <PartsInfo />
      <div className='parts-container'>

        <PartsFormat
          src={part1.src}
          alt='Image of car engine'
          partName='Car Engine'
          price='$4,500 - $10,000'
          reviews='★ 10 reviews'
          btn='Buy Now'
          details='View Details'
        />
         <PartsFormat
          src={part2.src}
          alt='$1,500 - $3,000'
          partName='Car Engine'
          price='$4,500 - $10,000'
          reviews='★ 28 reviews'
          btn='Buy Now'
          details='View Details'
        />
         <PartsFormat
          src={part3.src}
          alt='Image of car engine'
          partName='Emergency Roadside Tool kit'
          price='$50'
          reviews='★ 83 reviews'
          btn='Buy Now'
          details='View Details'
        />
         <PartsFormat
          src={part4.src}
          alt='Image of car engine'
          partName='Air Filter'
          price='$400-$1,000'
          reviews='★ 17 reviews'
          btn='Buy Now'
          details='View Details'
        />
         <PartsFormat
          src={part5.src}
          alt='Image of car engine'
          partName='Transmissions'
          price='$4,000 - $7,000'
          reviews='★ 19 reviews'
          btn='Buy Now'
          details='View Details'
        />
         <PartsFormat
          src={part6.src}
          alt='Image of car engine'
          partName='Tire Set'
          price='$1,200 - $2,500'
          reviews='★ 64 reviews'
          btn='Buy Now'
          details='View Details'
        />
        {/* <div className='box'>
        <img src={part1.src} alt="image of car part"></img>
        <h3 className='box-h3'>Car Engine</h3>
        <p id="box-p"><span className='text-red-600'>$4,500 - $10,000</span></p>
        <br />
        <p id="box-i"><i className='text-red-600'>★ 10 reviews</i></p>
        <br />
        <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
        <h3 id='details'>View Detials</h3>
      </div>

      <div className='box'>
        <img src={part2.src} alt="image of car part"></img>
        <h3 className='box-h3'>Gear Replacement</h3>
        <p id="box-p"><span className='text-red-600'>$1,500 - $3,000</span></p>
        <br />
        <p id="box-i"><i className='text-red-600'>★ 7 reviews</i></p>
        <br />
        <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
        <h3 id='details'>View Detials</h3>
      </div >

      <div className='box'>
        <img src={part3.src} alt="image of car part"></img>
        <h3 className='box-h3'>Emergency Roadside Tool kit </h3>
        <p id="box-p"><span className='text-red-600'>$50</span></p>
        <br />
        <p id="box-i"><i className='text-red-600'>★ 64 reviews</i></p>
        <br />
        <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
        <h3 id='details'>View Detials</h3>
      </div>

      <div className='box'>
        <img src={part4.src} alt="image of car part"></img>
        <h3 className='box-h3'>Air Filter</h3>
        <p id="box-p"><span className='text-red-600'>$400-$1,000</span></p>
        <br />
        <p id="box-i"><i className='text-red-600'>★ 17 reviews</i></p>
        <br />
        <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
        <h3 id='details'>View Detials</h3>
      </div>

      <div className='box'>
        <img src={part5.src} alt="image of car part"></img>
        <h3 className='box-h3'>Transmissions</h3>
        <p id="box-p"><span className='text-red-600'>$4,000 - $7,000</span></p>
        <br />
        <p id="box-i"><i className='text-red-600'>★ 19 reviews</i></p>
        <br />
        <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
        <h3 id='details'>View Detials</h3>
      </div>

      <div className='box'>
        <img src={part6.src} alt="image of car part"></img>
        <h3 className='box-h3'>Tire Set</h3>
        <p id="box-p"><span className='text-red-600'>$1,200 - $2,500</span></p>
        <br />
        <p id="box-i"><i className='text-red-600'>★ 82 reviews</i></p>
        <br />
        <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
        <h3 id='details'>View Detials</h3>
      </div> */}
      </div>
    </>
  )
}

export default Parts
