import React, {useState} from "react";
import style from './RateComponent.module.css';
import {ReactSVG} from "react-svg";
import PlusSvg from './plus.svg';
import MinusSvg from './minus.svg';
import Button from "../Button/Button";
import Calculator from "../Calculator/Calculator";


const RateComponent = (props) => {
    const [useCalc, setUseCalc] = useState(false)
    return (
        <div className={style.rateComponent}>
            <div className={style.rateComponentContainer}>
                {useCalc
                    ? <Calculator price={props.price}/>
                    :
                    <>
                    <div className={style.RateComponentText}>
                        <div className={style.RateComponentTextHeader}>{props.header}</div>
                        <div className={style.RateComponentTextDescription}>
                            <div><ReactSVG src={PlusSvg}/> <div className={style.textMargin}>9 ПОДРОБНЫХ УРОКОВ</div></div>
                            <div><ReactSVG src={PlusSvg}/> <div className={style.textMargin}>9 ЗАДАНИЙ НА ПОСТРОЕНИЕ СКОРОСТНОЙ РАБОТЫ</div> </div>
                            <div><ReactSVG src={PlusSvg}/> <div className={style.textMargin}>ЧАТ С ЕДИНОМЫШЛЕННИКАМИ</div> </div>
                            <div><ReactSVG src={PlusSvg}/> <div className={style.textMargin}>ДОПОЛНИТЕЛЬНЫЙ УРОК: ЛИЧНЫЙ БРЕНД ДЛЯ БЬЮТИ-СФЕРЫ</div> </div>
                            <div><ReactSVG src={MinusSvg}/> <div className={style.textMargin}>2 МАСТЕРМАИНДА С ЮЛИЕЙ ВОРМАН</div> </div>
                            <div><ReactSVG src={MinusSvg}/> <div className={style.textMargin}>ЛИЧНОЕ ВЕДЕНИЕ ОТ ЮЛИИ ВОРМАН</div> </div>
                        </div>
                        <div className={style.RateComponentTextBottom}>ДЛИТЕЛЬНОСТЬ 14 ДНЕЙ</div>
                        <div className={style.RateComponentPriceBlock}>
                            <div onClick={() => setUseCalc(true)}>Рассчитать рассрочку</div>
                            <div>{props.price}&nbsp;Р.</div>
                        </div>
                    </div>
                    <div className={style.btnComponent}>
                        <Button color={'primary'} text={'ОПЛАТИТЬ'} relative={true}/>
                    </div></>}
            </div>
        </div>
    )
}

export default RateComponent;