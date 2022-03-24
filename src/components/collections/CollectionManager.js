export const getCollections = () => {
    return fetch("https://cardalogue-server.herokuapp.com/collections", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const getSingleCollection = (id) => {
    return fetch(`https://cardalogue-server.herokuapp.com/collections/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const createCollection = (newCollection) => {
    
    const fetchOptions = {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "content-Type": "application/json"
        },
        body: JSON.stringify(newCollection)
    }
    return fetch(`https://cardalogue-server.herokuapp.com/collections`, fetchOptions)
        .then(getCollections)

}

export const deleteCollection = (id) => {
    return fetch (`https://cardalogue-server.herokuapp.com/collections/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }).then(getCollections)
};

export const updateCollection = (collection, id) => {
    return fetch(`https://cardalogue-server.herokuapp.com/collections/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(collection)
    })
        .then(getCollections)
}