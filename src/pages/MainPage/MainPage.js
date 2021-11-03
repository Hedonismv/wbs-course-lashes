import React from "react";
import style from './MainPage.module.css';
import NavBar from "../components/NavBar/NavBar";

const MainPage = () => {
    return (
        <section className={style.pageBlock}>
            <div className={style.container}>
                <NavBar/>
                <div>
                    
                </div>
            </div>
        </section>
    )
}

export default MainPage;