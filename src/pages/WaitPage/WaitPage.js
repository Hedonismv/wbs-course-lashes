import React from "react";
import style from './WaitPage.module.css';
import {ReactSVG} from "react-svg";
import SvgImage from './star-struck_1f929.svg';
import MariyaImage from './MARIA_LYADOVA-2 1.svg';

const WaitPage = () => {
    return (
        <section id="person" className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.firstBlock}>
                    <h1>НА ИНТЕНСИВЕ ТЕБЯ ЖДЕТ</h1>
                    <div className={style.fBlockElements}>
                        <div className={style.fBlockElement}>
                            <ReactSVG src={SvgImage}/>
                            <span><strong>9 УРОКОВ</strong> С ДОМАШНИМИ <br/> ЗАДАНИЯМИ И ПРОВЕРКОЙ</span>
                        </div>
                        <div className={style.fBlockElement}>
                            <ReactSVG src={SvgImage}/>
                            <span><strong>9 УРОКОВ</strong> С ДОМАШНИМИ <br/> ЗАДАНИЯМИ И ПРОВЕРКОЙ</span>
                        </div>
                        <div className={style.fBlockElement}>
                            <ReactSVG src={SvgImage}/>
                            <span><strong>9 УРОКОВ</strong> С ДОМАШНИМИ <br/> ЗАДАНИЯМИ И ПРОВЕРКОЙ</span>
                        </div>
                        <div className={style.fBlockElement}>
                            <ReactSVG src={SvgImage}/>
                            <span><strong>9 УРОКОВ</strong> С ДОМАШНИМИ <br/> ЗАДАНИЯМИ И ПРОВЕРКОЙ</span>
                        </div>
                        <div className={style.fBlockElement}>
                            <ReactSVG src={SvgImage}/>
                            <span><strong>9 УРОКОВ</strong> С ДОМАШНИМИ <br/> ЗАДАНИЯМИ И ПРОВЕРКОЙ</span>
                        </div>
                        <div className={style.fBlockElement}>
                            <ReactSVG src={SvgImage}/>
                            <span><strong>9 УРОКОВ</strong> С ДОМАШНИМИ <br/> ЗАДАНИЯМИ И ПРОВЕРКОЙ</span>
                        </div>
                    </div>
                </div>
                <div className={style.secondBlock}>
                    <h1>И, КОНЕЧНО, ЮЛИЯ ВОРМАН</h1>
                    <div className={style.secondBlockElement}>
                        <div className={style.secondBlockTextElement}>
                            <div>
                                <span className={style.firstText}><strong>БОЛЬШЕ 12 ЛЕТ</strong> Я НАРАЩИВАЮ РЕСНИЦЫ <strong>ЗА 1 ЧАС.</strong>
                            В ПРОФЕССИ Я<br/> РАЗВИВАЮСЬ <strong>С 2008 ГОДА</strong> И, ПУТЕМ ПРОБ И ОШИБОК,
                            ДОШЛА <strong>ДО<br/> ИДЕАЛЬНЫХ РЕЗУЛЬТАТОВ!</strong> МОИ ПРОФЕССИОНАЛЬНЫЕ НАВЫКИ СДЕЛАЛИ<br/> МЕНЯ <strong>МНОГОКРАТНЫМ ПРИЗЕРОМ,</strong>
                            А ПОТОМ И <strong>СУДЬЕЙ<br/> МЕЖДУНАРОДНЫХ ЧЕМПИОНАТОВ ПО НАРАЩИВАНИЮ РЕСНИЦ</strong></span>
                            </div>
                            <div className={style.marginTextBlock}>
                                <span className={style.firstText}>Я ОСНОВАЛА <strong>СЕТЬ САЛОНОВ VERSUS</strong> И ТЕПЕРЬ АКТИВНО ЗАПУСКАЮ СВОИ<br/> ОБУЧЕНИЯ <strong>ПО СКОРОМТНОМУ НАРАЩИВАНИЮ</strong>.
                            ЛОМАЮ СТЕРЕОТИПЫ,<br/> <strong>УЧУ МАСТЕРОВ ПОДНИМАТЬ ЧЕКИ И ЗАРАБАТЫВАТЬ МИЛЛИОНЫ.</strong></span>
                            </div>
                            <div className={style.elementsBlockRating}>
                                <div className={style.elementBlockRating}>
                                    <h2>1 ЧАС</h2>
                                    <span>САМОЕ БЫСТРОЕ 5D</span>
                                </div>
                                <div className={style.elementBlockRating}>
                                    <h2>12+ ЛЕТ</h2>
                                    <span>РАБОТАЮ В СВОЕЙ СФЕРЕ</span>
                                </div>
                                <div className={style.elementBlockRating}>
                                    <h2>1+ МЛН</h2>
                                    <span>В МЕСЯЦ ДЕЛАЮ НА РЕСНИЦАХ</span>
                                </div>
                                <div className={style.elementBlockRating}>
                                    <h2>10 000+</h2>
                                    <span>КЛИЕНТОК Я ОСЧАСТЛИВИЛА</span>
                                </div>
                            </div>
                            <div className={style.marginSecondTextBlock}>
                                <span className={style.firstText}>ВСЕ МОИ НАРАЩИВАНИЯ Я ДЕЛАЮ ЗА 1 - МАКСИМУМ 1.5 ЧАСА<br/>
                                    <strong>ХОЧЕШЬ ТАКЖЕ? СМОТРИ ПРОГРАММУ И ЗАПИСЫВАЙСЯ НА ИНТЕНСИВ</strong>.</span>
                            </div>
                        </div>
                        <div className={style.svgControlBlock}>
                            <ReactSVG src={MariyaImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WaitPage;