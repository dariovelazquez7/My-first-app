import React, {useState} from "react"
import {connect} from "react-redux";
import * as actionCreators from "../../Actions/actions"
import { bindActionCreators } from 'redux';
import style from "./deals.module.css"
import Logo from "../../img/Steam_icon_logo.png"
// import "bootstrap/dist/css/bootstrap.min.css";



export function Deals ({getDeals, obj,deals}) {

    const [state, setState] = useState("")

    const handleChange = (e) => {
        setState({ deal: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getDeals(state.deal);
    }
    

    return (
        <div>
            <h1>Encuentra todas las ofertas de Steam por precio!</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="number" 
                        autoComplete="off" 
                        placeholder="Busca por precio..."
                        value={obj}
                        onChange={handleChange}
                        />
                        <button onClick={handleSubmit}>
                            Buscar
                        </button>
                         
                    </div>
                </form>
                <div>
                {/* - {deal.metacriticScore} */}
        {deals.length !== 0?
        <table  className={style.list} >
        <thead>
        
        </thead>
    <tbody>
        <tr>
            <th>▼</th>
            <th>Titulo</th>
            <th>oferta</th>
            <th>Precio actual</th>
            <th>Precio anterior</th>
        </tr>
            {deals?.map(deal =>
            <tr key={deal.gameID}>
                <td>
                <a href={`https://store.steampowered.com/app/${deal.steamAppID}`} rel="noreferrer" target="_blank">
                <img id="" src={Logo} width="25" height="25" alt="Not Found"/>
                </a>
                </td> 
                <td>
                <a href={`https://store.steampowered.com/app/${deal.steamAppID}`} rel="noreferrer" target="_blank">
                    {deal.title}
                </a>
                </td>
                <td>{deal.dealRating}</td>
                <td> USD $ {deal.salePrice}</td>
                <td><del> USD $ {deal.normalPrice}</del></td>  
            </tr> 
            )}
            </tbody>
            </table> : <div></div> }
            
          

        </div>
        </div>
    )
}




function mapStateToProps (state) {
    return{
      deals: state.dealsGames
    };
  }
function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Deals);