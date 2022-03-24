import { getCards } from "../cards/CardManager";


export const getSets = () => {
    return fetch("https://cardalogue-server.herokuapp.com/sets", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const getSingleSet = (id) => {
    return fetch(`https://cardalogue-server.herokuapp.com/sets/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const deleteCard = (id) => {
    return fetch (`https://cardalogue-server.herokuapp.com/cards/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }).then(getCards)
};

export const createSet = (newSet) => {
    
    const fetchOptions = {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "content-Type": "application/json"
        },
        body: JSON.stringify(newSet)
    }
    return fetch(`https://cardalogue-server.herokuapp.com/sets`, fetchOptions)

}

export const updateSet = (set, id) => {
    return fetch(`https://cardalogue-server.herokuapp.com/sets/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(set)
    })
}

export const searchCards = (searchTerm) => {
    return fetch(`https://cardalogue-server.herokuapp.com/cards?q=${searchTerm}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}