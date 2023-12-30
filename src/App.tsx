import React from "react";
import { BigEffect } from "./components/bigEffect";
import { CarouselList } from "./components/carouse-list/index";
import { Carouseltop } from "./components/carousel1";
const App = () => {
  const carouseList = [
    {
      imgSrc: "images/1.jpg",
      desc: {
        title: "始终创业",
        contentList: [
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
          "敏捷有效，最简化流程，避免简单事情复杂化",
          "对外敏锐谦逊，避免自满或优越感",
        ],
      },
    },
    {
      imgSrc: "images/2.jpg",
      desc: {
        title: "始终创业",
        contentList: [
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
        ],
      },
    },
    {
      imgSrc: "images/3.jpg",
      desc: {
        title: "始终创业",
        contentList: [
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
        ],
      },
    },
    {
      imgSrc: "images/3.jpg",
      desc: {
        title: "始终创业",
        contentList: [
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
        ],
      },
    },
    {
      imgSrc: "images/3.jpg",
      desc: {
        title: "始终创业",
        contentList: [
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
        ],
      },
    },
    {
      imgSrc: "images/3.jpg",
      desc: {
        title: "始终创业",
        contentList: [
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
          "保持创业心态，始终开创而不守成，创新而非依赖资源",
        ],
      },
    },
  ];

  const bigEffectList = [
    {
      imgSrc: "images/11.png",
    desc: {
      title: "2017年6月",
      content: "头条问答全新升级为悟空问答"
    }
    },
    {
      imgSrc: "images/12.png",
    desc: {
      title: "2017年6月",
      content: "头条问答全新升级为悟空问答"
    }
    },
    {
      imgSrc: "images/13.png",
    desc: {
      title: "2017年6月",
      content:"头条问答全新升级为悟空问答"
    }
    },
    {
      imgSrc: "images/14.png",
    desc: {
      title: "2017年6月",
      content: "头条问答全新升级为悟空问答"
    }
    }

  ]

  
  
//<CarouselList carouselList={carouseList} />
  
  return(
    <>

<Carouseltop></Carouseltop>
<CarouselList carouselList={carouseList} />
<BigEffect bigEffectList={bigEffectList}/>
    
    </>
  ) 
};

export default App;
