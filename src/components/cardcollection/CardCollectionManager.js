export const getCardCollections = () => {
    return fetch("https://cardalogue-server.herokuapp.com/cardcollections", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
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

export const deleteCardCollection = (id) => {
    return fetch (`https://cardalogue-server.herokuapp.com/cardcollections/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }).then(getCardCollections)
};