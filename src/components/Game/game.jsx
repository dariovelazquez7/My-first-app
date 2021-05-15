import React from "react";
import style from "./game.module.css"
import {connect} from "react-redux";
import * as actionCreators from "../../Actions/actions"
import { bindActionCreators } from 'redux';
import search from "../../img/not-found.png"
// import { useParams } from 'react-router-dom';


export function Game ({games, loading}) {

  // React.useEffect(() => {
  //   actionCreators.loadingGames()
  // },[loadingGames])

    return(
        <div className={style.container}>

            {loading ? <div className={style.loading}>
                    <img  src="https://acegif.com/wp-content/uploads/loading-25.gif" alt=""/>
                </div> : games.length === 0? <img src={search} alt="" className={style.notFound}/> : 
            games.map(game => <div className={style.card} key={game.gameID}>
              <div>
              
                  <img src={game.thumb} width="160" height="70" alt="img" />
                  
              </div>
                 {game.title}
                 <a href={`https://store.steampowered.com/app/${game.steamAppID}`} rel="noreferrer" target="_blank">
                  <div className={style.price}>USD {game.salePrice}</div>
                  </a>
                  </div>)}
            
        </div>
      
    )
            
            
    
}

function mapStateToProps (state) {
    return{
      games: state.gamesLoaded,
      loading: state.loading
    };
  }
function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);