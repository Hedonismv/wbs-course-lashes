import React from "react";
import style from './MainPage.module.css';
import NavBar from "../../components/NavBar/NavBar";
import {ReactSVG} from "react-svg";
import SvgImage from './3.svg';
import Button from "../../components/Button/Button";

const MainPage = () => {
    return (
        <section className={style.pageBlock}>
            <div className={style.container}>
                <NavBar/>
                <div className={style.middleBlock}>
                    <div className={style.middleLeftBlock}>
                        <span className={style.standard}>ПЕРВЫЙ В МИРЕ ИНТЕНСИВ</span>
                        <h1>ПО СКОРОСТНОМУ<br/>НАРАЩИВАНИЮ РЕСНИЦ</h1>
                        <span className={style.secondary}>ХОЧЕШЬ НАРАЩИВАТЬ 4D ЗА 1 ЧАС?<br/>НАУЧУ ТЕБЯ НА ИНТЕНСИВЕ 29 МАРТА</span>
                        <div className={style.buttons}>
                        <Button text={'ЗАПИСАТЬСЯ'} color={'primary'}/>
                        <Button text={'ПРОГРАММА'} color={'secondary'}/>
                        </div>
                    </div>
                    <div className={style.SvgImageBlock}>
                        {console.log(window.screen.width)}
                        {window.screen.width > 1680
                            ? <ReactSVG src={SvgImage} beforeInjection={(svg) => {
                                svg.classList.add(style.womenSvg)
                                svg.setAttribute('style', 'width: 610px', 'height: 610px')
                            }}/>
                            : <ReactSVG src={SvgImage}/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainPage;