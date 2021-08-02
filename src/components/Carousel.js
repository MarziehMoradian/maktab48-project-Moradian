import React, { useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from "react-responsive-carousel";
import Image from 'material-ui-image';
import img1 from '../assets/images/9.jpg';
import img2 from '../assets/images/10.jpg';
import img3 from '../assets/images/8.jpg';
import '../assets/sass/app.scss'

const Carousels = () => {
    const imageArray = [img1,img2,img3]
    
    
 return (
        <div dir="ltr" >
            <Carousel infiniteloop outPlay >
               {imageArray.map ((image) => 
               <div className="image">
                    <img src={image} alt="mobile" />

                </div>)}
                
              
            </Carousel>
        </div>
    )
}

export default Carousels










