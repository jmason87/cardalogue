import { getCards } from "../cards/CardManager";


export const getSets = () => {
    return fetch("http://localhost:8000/sets", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const getSingleSet = (id) => {
    return fetch(`http://localhost:8000/sets/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const deleteCard = (id) => {
    return fetch (`http://localhost:8000/cards/${id}`, {
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
    return fetch(`http://localhost:8000/sets`, fetchOptions)

}

export const updateSet = (set, id) => {
    return fetch(`http://localhost:8000/sets/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(set)
    })
}