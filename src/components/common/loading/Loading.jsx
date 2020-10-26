import React from "react";
import style from './Loading.module.css';

const LoadingText = ({ text }) => <div className={style.label}>
   {text.split("").map((letter, index) => <span key={index}>{letter}</span>)}
</div>;

const Loading = () => {
   return (
      <div className={style.body}>
         <LoadingText text="Loading..." />
         <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={`${style.ball}`}></div>
            <div className={`${style.ball} ${style.slow}`}></div>
            <div className={`${style.ball} ${style.slow2}`}></div>
            <div className={`${style.ball} ${style.slow3}`}></div>
            <div className={`${style.ball} ${style.slow4}`}></div>
            <div className={`${style.ball} ${style.slow5}`}></div>
         </div >
      </div>
   );
}

export default Loading;