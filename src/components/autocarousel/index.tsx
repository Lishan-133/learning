import { Carousel } from "@arco-design/web-react";
import '@arco-design/web-react/dist/css/arco.css';
import React from "react";
import './index.css'
export {};

     
      

export const Carouseltop = ()=>{
    const imagesList=[
        '/images/7.png',
        'images/8.png',
        'images/9.png',
        'images/10.png'
     ]

    return(
        <div className="autocarousel-container">
            <div className="nomove" >
                <p id="title">使命</p>
                <p id="content" >激发创造 丰富生活</p>
            </div>
            
            
            <div className="img-container">
                <Carousel   indicatorType='dot' autoPlay={true}>
                        {imagesList.map((imagesSrc,i) => (
                            <div key={i} className="imagesBox">
                                <img src={imagesSrc} alt='pic'/>
                            </div>
                        ))}
        </Carousel>
        </div>   
         </div>
        )}