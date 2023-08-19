// import url for backend server
import { baseUrl } from "./base_url";

// allow redirection function
import { redirect } from "react-router-dom";

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
        // credentials: 'include',
        headers: {
            // tells backend that data is JSON
            "Content-Type": "application/json"
        },
        // send the json string of the newPlace object
        body: JSON.stringify(newPlace)
    })

    // redirect user back to index route
    return redirect('/')
}

export const updateAction = async ({request, params}) => {
    // grab the id from the params
    const id = params.id
    // grab data from the form
    const formData = await request.formData()
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
        // credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        // send the json string of the updatedPlace object
        body: JSON.stringify(updatedPlace)
    })
    // redirect back to show page
    return redirect(`/${id}`)
}

export const deleteAction = async ({params}) => {
    // grab the id from the params
    const id = params.id
    // send a delete request to our backend API
    await fetch(`${baseUrl}/places/${id}`, {
        // tell fetch to make a delete request
        method: 'DELETE',
        // credentials: 'include',
        // no headers or body required for delete requests
    })
    // redirect back to the index route
    return redirect('/')
}

