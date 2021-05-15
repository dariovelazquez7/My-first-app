export const GET_CARD = "GET_CARD";
export const GET_DEALS= "GET_DEALS";
export const LOADING ="LOADING"

export const getCard = (titulo) => {
    return function (dispatch){
        dispatch({type: LOADING})
        return fetch (`https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=12&&sortBy=reviews&title=${titulo}`)
        .then(data => data.json())
        .then(json => {
            dispatch({
                type:GET_CARD,
                payload:json
            })
        })
    }
}

export const getDeals = (price) =>{
    return function (dispatch){
        return fetch 
        // &sortBy=price
        //&sortBy=dealRating: si es 0,0 no hay oferta 
        //steamRating = cant de reseñas de usuarios
        //&sortBy=metacritic : criticos de games puntuacion
        (`https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=dealRating&upperPrice=${price}`)
        .then(data => data.json())
        .then(json => {
            dispatch({
                type:GET_DEALS,
                payload:json
            })
        })
    }
}



