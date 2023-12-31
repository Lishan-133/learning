import React ,{useEffect, useState} from "react";
import './index.css';
export{};

export const Navigate = () =>{
    const [show, setShow] = useState(true);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            //pageXOffset 设置或返回当前页面相对于窗口显示区左上角的 X 位置。
            //pageYOffset 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。
            //pageXOffset 和 pageYOffset 属性相等于 scrollX 和 scrollY 属性。
            //获取滚动条位置：document.documentElement.scrollTop  根节点 body是body标签
            setScrollTop(window.pageYOffset || document.documentElement.scrollTop);
            setShow(scrollTop > 100); // 根据滚动距离设置导航栏显示/隐藏
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollTop]);


    return(

        <div className={`nav ${show&&'hidden'}`}>
            <div className="image">
                <img src="images/logo.png" alt="pic"></img>
            </div>
        <ul>
            <li><a href='###'>关于我们</a></li>
            <li><a href='###'>我们的产品</a></li>
            <li><a href='###'>新闻动态</a></li>
            <li><a href='###'>企业社会责任</a></li>
            <li><a href='###'>加入我们</a></li>
        </ul>
        </div>
    )
}