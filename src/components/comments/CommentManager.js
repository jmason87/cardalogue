export const getCollectionComments = () => {
    return fetch("https://cardalogue-server.herokuapp.com/collectioncomments", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const getSingleCollectionComments = (id) => {
    return fetch(`https://cardalogue-server.herokuapp.com/collectioncomments/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const createCollectionComments = (newComment) => {
    
    const fetchOptions = {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
    }
    return fetch(`https://cardalogue-server.herokuapp.com/collectioncomments`, fetchOptions)
        .then(getCollectionComments)

}

export const deleteCollectionComments = (id) => {
    return fetch (`https://cardalogue-server.herokuapp.com/collectioncomments/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }).then(getCollectionComments)
};

export const updateCollectionComments = (comment, id) => {
    return fetch(`https://cardalogue-server.herokuapp.com/collectioncomments/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(comment)
    })
        .then(getCollectionComments)
}