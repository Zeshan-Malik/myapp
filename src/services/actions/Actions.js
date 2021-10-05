import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    FETCH_API,
    FETCH_IMAGES,
    REMOVE_IMAGE
} from "../Constants"

export const addToCart = (data) => {
    return ({
        type: ADD_TO_CART,
        data: data
    })
}

export const removeFromCart = () => {
    return ({
        type: REMOVE_FROM_CART
    })
}
export const fetchData = async (dispatch) => {
    const promises = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: FETCH_API,
                data: json
            })
        })
    // alert(JSON.stringify(promises));
}

export const fetchHackerNews = async (dispatch) => {
    let temparr = [];
    let newArr = [];
    await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then(response => response.json())
        .then(json => { temparr = json });

    await Promise.all(temparr.slice(0, 20).map(item => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
            .then(response => response.json())
            .then(item => {
                newArr.push(item)
            })
    }));

    dispatch({
        type: FETCH_API,
        data: newArr
    })
}
let temparr = [];
export const fetchImages = async (dispatch) => {
   
    await fetch('https://dog.ceo/api/breed/mountain/images')
        .then(response => response.json())
        .then(json => {
            temparr = json
        })
        temparr.message = temparr.message
        dispatch({
            type: FETCH_IMAGES,
            data:  temparr
        })
}
export const removeImage = (data)=> {
    let newArr = temparr.message.filter(item=> item!== data)
    temparr.message = newArr
    return(
        {type: REMOVE_IMAGE,
        data:newArr}
    )
}
