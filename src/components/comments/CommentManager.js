export const getCollectionComments = () => {
    return fetch("http://localhost:8000/collectioncomments", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const getSingleCollectionComments = (id) => {
    return fetch(`http://localhost:8000/collectioncomments/${id}`, {
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
    return fetch(`http://localhost:8000/collectioncomments`, fetchOptions)
        .then(getCollectionComments)

}

export const deleteCollectionComments = (id) => {
    return fetch (`http://localhost:8000/collectioncomments/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }).then(getCollectionComments)
};

export const updateCollectionComments = (comment, id) => {
    return fetch(`http://localhost:8000/collectioncomments/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(comment)
    })
        .then(getCollectionComments)
}