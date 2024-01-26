'use client'
import React, {useState} from 'react'

function Navbar() {
    // const [navbar, setNavBar] = useState(false);

    // seeing when the navbar scrolls over content so i can change the background color 
    // const changeBackground = () => {
    //     console.log(window.scrollY);
    // }

    // window.addEventListener('scroll', changeBackground);

    

    return (
        <div className='navigations'>
            <nav className={"navBar-class"}>
                <ul className='navBar-ul'>
                    <li><a href='#home'>HOME</a></li>
                    <li><a href='#parts'>PARTS</a></li>
                    <li><a href='#cars'>CARS</a></li>
                    <li><a href='#about'>ABOUT</a></li>
                    <li><a href='#our-blog'>OUR BLOG</a></li>
                </ul>
            </nav>
        </div>
    )
}
                    

export default Navbar
