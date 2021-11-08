import React from "react";
import style from './RatePage.module.css';
import RateComponent from "../../components/RateComponent/RateComponent";
import Button from "../../components/Button/Button";
import {ReactSVG} from "react-svg";
import GiftSvg from './gift.svg';


const RatePage = () => {

    return (
        <section id="rate" className={style.mainBlock}>
            <div className={style.container}>
                <h1 className={style.topH1}>ТАРИФЫ УЧАСТИЯ</h1>
                <div className={style.rateComponents}>
                    <RateComponent header={'LITE (САМОСТОЯТЕЛЬНЫЙ)'} price={'7900'}/>
                    <RateComponent header={'LITE (САМОСТОЯТЕЛЬНЫЙ)'} price={'14900'}/>
                    <RateComponent header={'LITE (САМОСТОЯТЕЛЬНЫЙ)'} price={'24900'}/>
                </div>
                <div className={style.RatePageFooter}>
                    <div className={style.RatePageFooterLeft}>
                        <ReactSVG src={GiftSvg}/>
                        <div className={style.RatePageFooterLeftText}>ИДЕТЕ НА ИНТЕНСИВ? ВЫЛОЖИТЕ ОБ ЭТОМ СТОРИС-ШАБЛОН С ОТМЕТКОЙ ЮЛИИ ВОРМАН И ВАС БУДЕТ ЖДАТЬ РОЗЫГРЫШ ДОПОЛНИТЕЛЬНОГО ПОДАРКА!</div>
                    </div>
                    <div className={style.btnControl}>
                        <Button color={'secondary'} text={'СТОРИС-ШАБЛОН'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default RatePage;