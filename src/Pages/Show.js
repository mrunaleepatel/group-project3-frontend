import { useLoaderData, Form } from "react-router-dom";

function Show(props) {

    const place = useLoaderData();

    return (
        <div>
        <div className="place-container">
            
            <div className="place-display">
                <img src={place.image} alt={place.name} />
                <h1>{place.name}</h1> 
            </div>

            <div className="place-details">
                <h3>Country: {place.country}</h3>
                <h3>Type: {place.type}</h3>
                <h3><a href={place.url}>Website</a></h3>
                <h3>Additional Notes: </h3>
                <p>{place.notes}</p>
                <h3>Season to Go: {place.seasonToGo}</h3>
                <h3>Visited?: {place.visited}</h3>
            </div>
        </div>

        <div className="edit-form">
            <h2>Edit {place.name}</h2>
            <Form action={`/update/${place._id}`} method="post">
                <label htmlFor="name">Name of Place: </label>
                <input type="text" name="name" placeholder="Place's Name" defaultValue={place.name} />
                <label htmlFor="type">Type of Place: </label>
                <input type="text" name="type" placeholder="Place's Type" defaultValue={place.type} /><br/>
                <label htmlFor="country">Location (Country): </label>
                <input type="text" name="country" placeholder="Place's Country" defaultValue={place.country} />
                <label htmlFor="image">Image URL of Place: </label>
                <input type="text" name="image" placeholder="Place's Image URL" defaultValue={place.image} />
                <label htmlFor="url">Website: </label>
                <input type="text" name="url" placeholder="Place's Url" defaultValue={place.url} />
                <label htmlFor="notes">Additional Notes: </label>
                <input type="text" name="notes" placeholder="Place's Notes" defaultValue={place.notes} />
                <label htmlFor="seasonToGo">Best Season to Go: </label>
                <input type="text" name="seasonToGo" placeholder="Best Season To Go" defaultValue={place.seasonToGo} />
                <label htmlFor="visited">Visited yet? </label>
                <input type="checkbox" name="visited" />
                <input className="button" type="submit" value="Update Place"/>
            </Form>
        </div>
            
            <div className="delete-button">
            <h2>Delete {place.name}</h2>
                <Form action={`/delete/${place._id}`} method="post">
                     <input type="submit" value="Delete Place"/>
                </Form>
            </div>
        </div>
    )
}

export default Show;