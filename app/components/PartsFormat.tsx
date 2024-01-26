import Link from 'next/link'
import React from 'react'

type ProductProps = {
    src? : string , 
    alt?: string,
    partName?: string,
    price?: string,
    reviews? : string,
    btn? : string,
    details? : string
}

function PartsFormat(props:ProductProps) {
  return (
    <div className='box'>
        <form >
        <img src={props.src} alt={props.alt}></img>
        <h3 className='box-h3'>{props.partName}</h3>
        <p id="box-p"><span className='text-red-600'>{props.price}</span></p>
        <br />
        <p id="box-i"><i className='text-red-600'>{props.reviews}</i></p>
        <br />
       <button className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
       <a href='#home'>{props.btn}</a>
        </button>
        <h3 id='details'><a href="#home">{props.details}</a></h3>
      </form>
      </div>
  )
}

export default PartsFormat
