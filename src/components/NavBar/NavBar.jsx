import React, { useState } from "react";
import style from "./NavBar.module.css"
import Logo from "../../img/steamlogo1.png"
import {connect} from "react-redux";
import * as actionCreators from "../../Actions/actions"
import { bindActionCreators } from 'redux';
import { NavLink, Link} from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";


export function NavBar({getCard, obj}) {
    const [state, setState] = useState("")

    const handleChange = (e) => {
        setState({ title: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getCard(state.title);
    }
    return(
    <div>
        <header className= {style.header1} >
            <div> <NavLink exact to="/"  className={style.log} >
                  <img id="m" src={Logo} width="60" height="60" alt="Not Found"/>
                    My App
                  </NavLink> 
            </div>
                <div><NavLink exact to="/" >Inicio</NavLink></div>
                <div><NavLink exact to="/ofertas" >Ofertas</NavLink></div>
                <div><NavLink exact to="/info" >Información</NavLink></div>

        <nav>
                
                <form onSubmit={()=>handleSubmit} >
                    <div className={style.form1}>
                        <input type="search" 
                        autoComplete="off" 
                        placeholder="Busca tu juego..."
                        value={obj}
                        onChange={handleChange}
                        />
                        <button className={style.btn} onClick={handleSubmit} >
                        <Link to="/juegos"> Buscar</Link>
                        </button>
                    </div>
                </form>
                    
            </nav>
        </header>
        <div className="nose">
            <br/>
            <br/>
            <br/>
        </div>
    </div>
    )
}

// const stickyMenu = () => {
// var headPrueba = document.querySelector("header")
//     if(window.scrollY >= 0){
//         headPrueba.className= "menu-fixed"
//     } else {

//     }
// }
// window.addEventListener("scroll", stickyMenu)



function mapStateToProps (state) {
    return{
      games: state.gamesLoaded,

    };
  }
function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);