export const getTags = () => {
    return fetch("https://cardalogue-server.herokuapp.com/tags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const getTag = (id) => {
    return fetch(`https://cardalogue-server.herokuapp.com/tags/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const createTag = (newTag) => {
    
    const fetchOptions = {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "content-Type": "application/json"
        },
        body: JSON.stringify(newTag)
    }
    return fetch(`https://cardalogue-server.herokuapp.com/tags`, fetchOptions)
        .then(getTags)

}

export const updateTag = (tag, id) => {
    return fetch(`https://cardalogue-server.herokuapp.com/tags/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(tag)
    })
}

export const deleteTag = (id) => {
    return fetch (`https://cardalogue-server.herokuapp.com/tags/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }).then(getTags)
}