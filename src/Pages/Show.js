import { useLoaderData, Form } from "react-router-dom";

function Show(props) {

    const place = useLoaderData();

    return (
        <div className="place">
            <h1>Name: {place.name}</h1>
            <h2>Country: {place.country}</h2>
            <h2>Type: {place.type}</h2>
            <img src={place.image} alt={place.name} />
            <h2><a href={place.url}>{place.url}</a></h2>
            <h2>Notes: {place.notes}</h2>
            <h2>Season To Go: {place.seasonToGo}</h2>
            <h2>Visited?: {place.visited}</h2>

            <h1>Edit {place.name}</h1>
            <Form action={`/update/${place._id}`} method="post">
                <input type="text" name="name" placeholder="Place's Name" defaultValue={place.name} />
                <input type="text" name="country" placeholder="Place's Country" defaultValue={place.country} />
                <input type="text" name="type" placeholder="Place's Type" defaultValue={place.type} />
                <input type="text" name="image" placeholder="Place's Image" defaultValue={place.image} />
                <input type="text" name="url" placeholder="Place's Url" defaultValue={place.url} />
                <input type="text" name="notes" placeholder="Place's Notes" defaultValue={place.notes} />
                <input type="text" name="seasonToGo" placeholder="Place's Season To Go" defaultValue={place.seasonToGo} />
                <input type="checkbox" name="visited" />
                <input className="button" type="submit" value="Update Place"/>
            </Form>

            <h1>Delete {place.name}</h1>
                <Form action={`/delete/${place._id}`} method="post">
                     <input type="submit" value="Delete Place"/>
                </Form>
        </div>
    )
}

export default Show;