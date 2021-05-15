import React from "react";
import style from   "./home.module.css"
// import {connect} from "redux";


export function Home ()  {
    return(
        <div className={style.home}>
            <h1>Busca y encuentra los mejores juegos de Steam a la venta</h1> 
        </div>
    )
}

export default Home