import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
const About = () => {
  return (
    <section className='about' id="about">
<div className="container">
    <div className="banner">
        <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we 're serious about is food. </p>
        </div>
        <p className="mid">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio unde, inventore soluta iure sint rerum dignissimos explicabo adipisci laudantium quod consectetur. Laboriosam porro perspiciatis impedit ut. Ea impedit in quam reprehenderit consequatur, earum inventore nemo cumque eum sunt eos, provident repudiandae ratione laboriosam nostrum soluta recusandae nisi. Perspiciatis, ipsum amet.
        </p>
        <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span>
        </Link>
    </div>
    <div className="banner">
        <img src="/about.png" alt="about" />
    </div>
</div>
    </section>
  )
}

export default About