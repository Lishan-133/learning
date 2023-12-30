import { Carousel } from "@arco-design/web-react";
import '@arco-design/web-react/dist/css/arco.css';
import React from "react";
import './index.css'

export {};
interface BigEffectType {
    imgSrc: string;
    desc: {
      title: string;
      content: string;
    };
  }
  interface bigEffectListProps {
    bigEffectList: BigEffectType[]
  }
export const BigEffect = (props: bigEffectListProps) =>{
    const { bigEffectList } = props;

 return(
    <div>
        <div className="history">
            <h1>大事记</h1>
            <div className="content">
                <Carousel  indicatorType='never'>
                 {bigEffectList.map((carousel,i) => (
                <div className="father">
                    <div className="img-container">
                    <img src={carousel.imgSrc} alt="pic">
                    </img>
                    </div>
                <div className="text">
                    <p id="title">{carousel.desc.title}</p>
                    <p id="words">{carousel.desc.content}</p>
                </div>
                </div>
             ))} 
                </Carousel> 
            </div>
        </div>
    </div>
    )
}