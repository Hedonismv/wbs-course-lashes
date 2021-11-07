import React, {useState} from "react";
import style from './QuestionComponent.module.css';
import PlusSvg from './plus.svg';
import {ReactSVG} from "react-svg";
import {Fade} from "react-reveal";


const QuestionComponent = (props) => {
    const [isHidden, setIsHidden] = useState(true)

    const toggleHiddenText = () => {
        if(isHidden){
            setIsHidden(false)
        } else{
            setIsHidden(true)
        }
    }

    return (
        <div className={style.QuestionComponent}>
            <div className={style.TextComponent}>
                <span className={style.TextQuestion}>{props.text}</span>
                {isHidden
                ? null
                :
                    <Fade clear>
                        <div className={style.visibleText}>
                            <span>{props.description}</span>
                        </div>
                    </Fade>}
            </div>
            <div>
                <ReactSVG className={style.plus} src={PlusSvg} onClick={toggleHiddenText}/>
            </div>
        </div>
    )
}

export default QuestionComponent;