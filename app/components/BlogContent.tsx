import React from 'react'

import BlogTitle from './BlogTitle'
import BlogFormat from './BlogFormat'

import blog1 from "../images/blog1.jpeg"
import blog2 from "../images/blog2.jpeg"
import blog3 from "../images/blog3.jpeg"

const BlogContent = () => {
    return (
        <>
            <BlogTitle />
            <section className='blog-section'>
            <BlogFormat
                src={blog1.src}
                date='August 21, 2023'
                postTitle="Choosing the Perfect Car for Your Lifestyle."
                postDesc="Are you in the market for a new ride but overwhelmed by the options? In our latest blog post, we break down the key factors to consider when choosing the perfect car for your lifestyle. From fuel efficiency to cargo space, we've got you covered"
            />
            <BlogFormat
                src={blog2.src}
                date='October 13, 2023'
                postTitle="DIY Car Maintenance Tips Every Owner Should Know."
                postDesc="Taking care of your car doesn't have to be a mystery. Learn essential DIY car maintenance tips that every car owner should know. From changing the oil to checking tire pressure, our guide will help you keep your vehicle running smoothly" />
            <BlogFormat
                src={blog3.src}
                date='November 29, 2023'
                postTitle="Top Accessories to Upgrade Your Car."
                postDesc="Give your car a makeover with our list of top accessories to upgrade your ride. From stylish seat covers to high-tech gadgets, discover how you can enhance both the look and functionality of your vehicle. Check out the must-have accessories" />
                </section>
        </>
    )
}

export default BlogContent
