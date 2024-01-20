import React, { useEffect, useState } from "react";
import "./index.css";
export {};

export const Navigate = () => {
  const [show, setShow] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      //pageXOffset 设置或返回当前页面相对于窗口显示区左上角的 X 位置。
      //pageYOffset 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。
      //pageXOffset 和 pageYOffset 属性相等于 scrollX 和 scrollY 属性。
      //获取滚动条位置：document.documentElement.scrollTop  根节点 body是body标签
      setScrollTop(window.pageYOffset || document.documentElement.scrollTop );
      const scrollHeight = document.documentElement.scrollHeight;//元素内容高度的度量，
      //获取页面的总高度
      const windowHeight = window.innerHeight;
      //界面的只读innerHeight属性 Window返回窗口的内部高度（以像素为单位），包括水平滚动条的高度（如果存在）。

      setShow( scrollTop >= 100 && scrollHeight - scrollTop - windowHeight <= 100); // 根据滚动距离设置导航栏显示/隐藏
      console.log(window.pageYOffset || window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);

  return (
    <div className={`nav ${show && "hidden"}`}>
      <div className="image-container">
        <img src="images/logo.png" alt="pic"></img>
      </div>
      <div className="desc-container">
        <div className="text-item"><a href="###">关于我们</a></div>
          <div className="text-item">  <a href="###">我们的产品</a></div>
          <div className="text-item"><a href="###">新闻动态</a></div>
         
            
          <div className="text-item"><a href="###">企业社会责任</a></div>
            
          <div className="text-item"><a href="###">加入我们</a></div>
            
      </div>
    </div>
  );
};
