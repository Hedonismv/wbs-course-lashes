import React, {useState} from "react";


const Calculator = (props) => {
    const [calcValue, setCalcValue] = useState(null)
    const [summPrice,] = useState(props.price)
    const [month, setMonth] = useState('')
    const [firstPayment, setFirstPayment] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleMonthChange = (event) => {
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
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Сумма курса' disabled value={props.price} />
            <input disabled={loading} type='text' placeholder='Количество месяцев от 1 до 6' value={month} onChange={handleMonthChange}/>
            <input disabled={loading} type='text' placeholder='Сумма первого взноса' value={firstPayment} onChange={handleFirstPaymentChange}/>
            {error ? <span style={{color: "red"}}>Введены неправильные данные!</span> : null}
            <input type='submit' disabled={loading} value='Рассчитать'/>
            <span>{calcValue}</span>
        </form>
    )
}

export default Calculator;