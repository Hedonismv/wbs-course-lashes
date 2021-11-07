import React from "react";
import style from './QuestionPage.module.css';
import QuestionComponent from "../../components/QuestionComponent/QuestionComponent";

const QuestionPage = () => {
    return (
        <section className={style.mainBlock}>
            <div className={style.container}>
                <h1 className={style.topTag}>ВОТ ТАКАЯ ПРОГРАММА ИНТЕНСИВА</h1>
                <div className={style.questionBlock}>
                    <QuestionComponent text={'УРОК 1. ВВОДНЫЙ УРОК'} description={'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.' +
                    ' Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный' +
                    ' печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.'}/>
                    <QuestionComponent text={'УРОК 2. СКОРОСТНОЕ СНЯТИЕ РЕСНИЦ'} description={'Lorem Ipsum - это текст-"рыба", часто используемый в печати ' +
                    'и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' +
                    ' В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum ' +
                    'для распечатки образцов.'}/>
                    <QuestionComponent text={'УРОК 3. РАБОТА С КЛЕЕМ. КАК ПРОДЛИТЬ НОСКУ'} description={'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ' +
                    'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,' +
                    ' используя Lorem Ipsum для распечатки образцов.'}/>
                    <QuestionComponent text={'УРОК 4. ЗДОРОВЬЕ МАСТЕРА'}/>
                    <QuestionComponent text={'УРОК 5. ЛИЧНЫЙ БРЕНД В INSTAGRAM: ПОЧЕМУ УВЯДАЮТ КОММЕРЧЕСКИЕ АККАУНТЫ'}/>
                    <QuestionComponent text={'УРОК 6. ЛОМАЕМ СТЕРЕОТИПЫ МОДЕЛИРОВАНИЯ: ЧЕМ СЛОЖНЕЕ ПРИДУМАЛ, ТЕМ СЛОЖНЕЕ ЖИТЬ'}/>
                    <QuestionComponent text={'УРОК 7. КЛАССИЧЕСКОЕ НАРАЩИВАНИЕ РЕСНИЦ'}/>
                    <QuestionComponent text={'УРОК 8. ПУЧОК. КАК БЫСТРО И ПРАВИЛЬНО ФОРМИРОВАТЬ ТЕБЯ, ДРУЖОК?'}/>
                    <QuestionComponent text={'УРОК 9. НАРАЩИВАЕМ ОБЪЕМЫ 2D+ '}/>
                </div>
            </div>
        </section>
    )
}

export default QuestionPage;