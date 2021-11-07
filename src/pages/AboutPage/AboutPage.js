import React from "react";
import style from './AboutPage.module.css';
import Button from "../../components/Button/Button";
import {ReactSVG} from "react-svg";
import WomenImg from './woman.svg';
import BlockComponent from "../../components/BlockComponent/BlockComponent";

const AboutPage = () => {


    return (
        <section id="about" className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.content}>
                    <h1>ТЕБЕ НА ИНТЕНСИВ ЕСЛИ ТЫ</h1>
                    <div className={style.features}>
                        <BlockComponent text={["ЛАШМЕЙКЕР, КОТОРЫЙ", <br/>, "ДЕЛАЕТ НАРАЩИВАНИЕ", <br/>, <strong>ДОЛЬШЕ ОДНОГО ЧАСА?</strong> ]}/>
                        <BlockComponent text={["МАСТЕР, КОТОРЫЙ ХОЧЕТ", <br/> ,<strong>ПОМЕНЯТЬ МЫШЛЕНИЕ</strong>, " О",<br/>, "НАРАЩИВАНИИ РЕСНИЦ"]}/>
                        <BlockComponent text={["СПЕЦИАЛИСТ, КОТОРОМУ", <br/>, "НЕОБХОДИМЫ ", <strong>ПОДДЕРЖКА<br/> И КОМЬЮНИТИ РЯДОМ</strong>]}/>
                    </div>
                    <div className={style.secContent}>
                        <span>ЗАРЯДИСЬ ЭНЕРГИЕЙ И СТАНЬ САМЫМ<br/>ЗНАМЕНИТЫМ МАСТЕРОМ СВОЕГО ГОРОДА</span>
                        <Button color={'primary'} text={'ЗАПИСАТЬСЯ'}/>
                        <div className={style.svg}>
                            <ReactSVG src={WomenImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;