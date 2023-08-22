// import url for backend server
import { baseUrl } from "./base_url";

// allow redirection function
import { redirect } from "react-router-dom";

//////////////////////////
// CREATE ACTION
//////////////////////////
export const createAction = async ({request}) => {
    // get the data from the form in the request
    const formData = await request.formData()
    // setup object for new place
    const newPlace = {
        name: formData.get('name'),
        country: formData.get('country'),
        type: formData.get('type'),
        image: formData.get('image'),
        url: formData.get('url'),
        notes: formData.get('notes'),
        seasonToGo: formData.get('seasonToGo'),
        visited: formData.get('visited')
    }
    // send the new place to our backend API
    await fetch(`${baseUrl}/places`, {
        // tell fetch to make a post request
        method: 'POST',
        credentials: 'include',
        headers: {
            // tells backend that data is JSON
            "Content-Type": "application/json"
        },
        // send the json string of the newPlace object
        body: JSON.stringify(newPlace)
    })

    // redirect user back to index route
    return redirect("/dashboard")
}

//////////////////////////
// UPDATE ACTION
//////////////////////////
export const updateAction = async ({request, params}) => {
    // grab the id from the params
    const id = params.id
    // grab data from the form
    const formData = await request.formData()
    // turn visited into boolean
    formData.get('visited') = formData.get('visited') === "on" ? true : false
    // build out the updated place
    const updatedPlace = {
        name: formData.get('name'),
        country: formData.get('country'),
        type: formData.get('type'),
        image: formData.get('image'),
        url: formData.get('url'),
        notes: formData.get('notes'),
        seasonToGo: formData.get('seasonToGo'),
        visited: formData.get('visited')
    }
    // send the updated place to our backend API
    await fetch(`${baseUrl}/places/${id}`, {
        // tell fetch to make a put request
        method: 'PUT',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        // send the json string of the updatedPlace object
        body: JSON.stringify(updatedPlace)
    })
    // redirect back to show page
    return redirect(`/${id}`)
}

//////////////////////////
// DELETE ACTION
//////////////////////////
export const deleteAction = async ({params}) => {
    // grab the id from the params
    const id = params.id
    // send a delete request to our backend API
    await fetch(`${baseUrl}/places/${id}`, {
        // tell fetch to make a delete request
        method: 'DELETE',
        credentials: 'include',
        // no headers or body required for delete requests
    })
    // redirect back to the index route
    return redirect("/dashboard")
}

// signupAction
export const signupAction = async ({request}) => {
    // get the form data
    const formData = await request.formData()
    // build out the new user
    const newUser = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    // send the new user to our backend API
    const response = await fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })

    // check if status is 400 or more
    if (response.status >= 400) {
        // alert the details of error
        alert(response.statusText)
        // redirect back to the frontend signup route
        return redirect('/signup')
    }

    // redirect back to the frontend login route
    return redirect('/login')
}

// loginAction
export const loginAction = async ({request}) => {
    // get the form data
    const formData = await request.formData()
    // build out the user
    const user = {
        username: formData.get('username'),
        password: formData.get('password')
    }
    // send the user to our backend API
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    // check if status is 400 or more
    if (response.status >= 400) {
        // alert the details of error
        alert(response.statusText)
        // redirect back to the frontend login route
        return redirect('/login')
    }

    // store whether loggedIn in localStorage
    localStorage.setItem('loggedIn', JSON.stringify({status: true}))

    // redirect back to the frontend index route
    return redirect('/dashboard')
}