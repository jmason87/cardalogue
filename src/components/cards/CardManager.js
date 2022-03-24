export const getCards = () => {
    return fetch("https://cardalogue-server.herokuapp.com/cards", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const getSingleCard = (id) => {
    return fetch(`https://cardalogue-server.herokuapp.com/cards/${id}`, {
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
    return fetch(`https://cardalogue-server.herokuapp.com/cards`, fetchOptions)
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
    return fetch(`https://cardalogue-server.herokuapp.com/cardcollections`, fetchOptions)

}

export const approveCard = (cardId) => {
    return fetch(`https://cardalogue-server.herokuapp.com/cards/${cardId}/approve`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }).then(getCards)
}

export const deleteCard = (id) => {
    return fetch (`https://cardalogue-server.herokuapp.com/cards/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }).then(getCards)
};