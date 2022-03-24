export const getCategories = () => {
    return fetch("https://cardalogue-server.herokuapp.com/categories", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const getCategory = (id) => {
    return fetch(`https://cardalogue-server.herokuapp.com/categories/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
    .then(res => res.json())
}

export const createCategory = (newCategory) => {
    
    const fetchOptions = {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "content-Type": "application/json"
        },
        body: JSON.stringify(newCategory)
    }
    return fetch(`https://cardalogue-server.herokuapp.com/categories`, fetchOptions)
        .then(getCategories)

}

export const updateCategory = (category, id) => {
    return fetch(`https://cardalogue-server.herokuapp.com/categories/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(category)
    })
}

export const deleteCategory = (id) => {
    return fetch (`https://cardalogue-server.herokuapp.com/categories/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    }).then(getCategories)
}