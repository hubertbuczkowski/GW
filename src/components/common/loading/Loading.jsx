import React from "react";
import style from './Loading.module.css';

const Loading = () => {
   return (
      <div className={style.body}>
         <div className={style.label}>
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
         </div>
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