import { Carousel } from "@arco-design/web-react";
import '@arco-design/web-react/dist/css/arco.css';
import React from "react";
import './index.css'
export {};
interface CarouselType {
  imgSrc: string;
  desc: {
    title: string;
    contentList: string[];
  };
}
interface CarouselListProps {
  carouselList: CarouselType[]
}

export const CarouselList = (props: CarouselListProps) => {
  const { carouselList } = props;

  return (
    <div>
      <Carousel style={{ width: 600, height: 300 }} indicatorType='never' arrowClassName='arrow-test1'>
        {carouselList.map((carousel, i) => (
            <div className="top">
                <div className="img-container">
                    <img className="carousel-img" src={carousel.imgSrc} alt="" />
                </div>
                <div className="desc-container">
                    <div className="desc-title">{ carousel.desc.title }</div>
                    <div className="desc-content">
                        <ul>
                            {
                                carousel.desc.contentList.map((content) => (
                                    <li>{content}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        ))}
      </Carousel>
    </div>
  );
};
