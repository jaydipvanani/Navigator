import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { data } from "../pages/data";
  
const Navbar = () => {

  
    
    return (
        <>
            <nav>
                {/* <Link to={'/'} class="hover-line">Home</Link>
                <Link to={'/about'} class="hover-line">About us</Link>
                <Link to={'/contact'} class="hover-line">contact</Link>

                <div class="animation start-hom"></div> */}
                {
                    data.map((val,ind)=>{
                        return(
                            <Link to={`${val.path}`} class="hover-line">{val.name}</Link>
                        );
                    })
                }
            </nav>
        </>
    )
}

export default Navbar
