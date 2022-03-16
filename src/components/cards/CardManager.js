export const getCards = () => {
    return fetch("http://localhost:8000/cards", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const getSingleCard = (id) => {
    return fetch(`http://localhost:8000/cards/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const createCard = (newCard) => {
    
    const fetchOptions = {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "content-Type": "application/json"
        },
        body: JSON.stringify(newCard)
    }
    return fetch(`http://localhost:8000/cards`, fetchOptions)
        .then(getCards)

}

export const createCardCollection = (newCard) => {
    
    const fetchOptions = {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "content-Type": "application/json"
        },
        body: JSON.stringify(newCard)
    }
    return fetch(`http://localhost:8000/cardcollections`, fetchOptions)

}

export const approveCard = (cardId) => {
    return fetch(`http://localhost:8000/cards/${cardId}/approve`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }).then(getCards)
}