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
        headers: {
            // tells backend that data is JSON
            "Content-Type": "application/json"
        },
        // send the json string of the newPlace object
        body: JSON.stringify(newPlace)
    })

    // redirect user back to index route
    return redirect('/people')
}