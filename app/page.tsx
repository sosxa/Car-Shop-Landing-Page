'use client'
import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import CompanyLogo from './components/companylogo'
import Navbar from './components/navbar'
import SearchBar from './components/searchbar'
import LandingPg from './components/landingpg'
import CarInfo from './components/CarInfo'
import CarInfoDiv from './components/CarInfoDiv'
import Parts from './components/Parts'
import PartsInfo from './components/PartsInfo'
import dynamic from 'next/dynamic'
import { browser } from 'process'
import AboutImg from './components/AboutImg'
import AboutText from './components/AboutText'
import BlogTitle from './components/BlogTitle'
import BlogContent from './components/BlogContent'


// if i decide to use any loading effects
// const DynamicLogo = dynamic(() => import("./components/companylogo"), {
//   ssr: false,
//   loading: ,
// })

// const DynamicNavBar = dynamic(() => import("./components/navbar"), {
//   ssr: false,
// })

// const DynamicSearchBar = dynamic(() => import("./components/searchbar"), {
//   ssr: false,
// })



export default function Home() {
  const [navbar, setNavBar] = useState(false)

  // maybe use useEffect to just re-render this component 
  // even when you turn off ssr and have use client on the top of the page it doesn't re-render the new class changes

  // useEffect(() => {
  //   const changeBackground = () => {
  //     if (typeof window !== 'undefined') {
  //       if (window.scrollY >= 30) {
  //         setNavBar(true);
  //       } else {
  //         setNavBar(false);

  //       }
  //     }
  //     window.addEventListener('scroll', changeBackground);
  //   }
  // }, [])

  const changeBackground = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 30) {
        setNavBar(true);
      } else {
        setNavBar(false);

      }
    }
  }


  React.useEffect(() => {
    // window is accessible here.
    window.addEventListener('scroll', changeBackground);
  }, []);

  // window.addEventListener('scroll', changeBackground);


  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Work+Sans:ital@0;1&display=swap')
        </style>
        <title>CarSales | We sell everything that your car needs</title>
      </head>

      <body>
        {/* logo, navbar, searchbar */}
        <header id="header-NavBar">
          <nav className={navbar ? "carSales-Header active" : "carSales-Header"}>
            {/* <nav className="carSales-Header"> */}
            {/* carSales-Header */}
            <CompanyLogo />
            <Navbar />
            <SearchBar />
          </nav>
        </header>
        <main className='mainContent'>
          <div className='divMainContent'>
            <div id='home'>
              <LandingPg />
            </div>
            <div id='parts'>
              <section className='parts'>
                <Parts />
              </section>
            </div>
            <div id='cars'>
              <section>
                <CarInfo />
                <CarInfoDiv />

              </section>
            </div>
            <div id='about'>
              <section className='about-div'>
                <AboutImg />
                <div className='aboutText'>
                  <AboutText />
                </div>
              </section>
            </div>
            <div className='our-blog'>
              <section className='our-blog'>
                <BlogContent />
              </section>
            </div>

          </div>
        </main>
      </body>

    </>
  )
}
