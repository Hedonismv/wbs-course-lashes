import React, {useState} from "react";
import style from './Calculator.module.css';


const Calculator = (props) => {
    const [calcValue, setCalcValue] = useState(null)
    const [summPrice,] = useState(props.price)
    const [month, setMonth] = useState('')
    const [firstPayment, setFirstPayment] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isCalculated, setIsCalculated] = useState(false)

    const handleMonthChange = (event) => {
        setIsCalculated(false)
        setMonth(event.target.value)
        if(/\D/.test(event.target.value)){
            setError(true)
        }else{
            setError(false)
            if(+event.target.value > 6 || +event.target.value.length > 1){
                setError(true)
            }
        }
    }
    const handleFirstPaymentChange = (event) => {
        setIsCalculated(false)
        setFirstPayment(event.target.value)
        if(/\D/.test(event.target.value)){
            setError(true)
        }else{
            setError(false)
            if(+event.target.value > +summPrice){
                setError(true)
            }
        }
    }

    const calculatePayments = () => {
        const percent = 3 * +month
        const clPrice = (+summPrice - +firstPayment) / +month
        const cleanPrice = clPrice.toFixed(2)
        const result = (+cleanPrice * percent) / 100 + +cleanPrice
        setLoading(false)
        setCalcValue(result)
        setIsCalculated(true)


    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (error){
            return
        } else{
            setLoading(true)
            calculatePayments()
        }
    }
    return (
        <div>
            <form className={style.formCalcMain} onSubmit={handleSubmit}>
                <input type='text' placeholder='Сумма курса' disabled value={props.price} />
                <input disabled={loading} type='text' placeholder='Количество месяцев от 1 до 6' value={month} onChange={handleMonthChange}/>
                <input disabled={loading} type='text' placeholder='Сумма первого взноса' value={firstPayment} onChange={handleFirstPaymentChange}/>
                {error ? <span className={style.error}>Введены неправильные данные!</span> : null}
                <input className={style.submitInput} type='submit' disabled={loading} value='Рассчитать'/>
            </form>
            {isCalculated ?
                <div className={style.resultBlock}>
                    <div>Cумма ежемесячного платежа:&nbsp;{calcValue}&nbsp;Р</div>
                    <div>Количество месяцев:&nbsp;{month}</div>
                </div> : null
            }
        </div>
    )
}

export default Calculator;