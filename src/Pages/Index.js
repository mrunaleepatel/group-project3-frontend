import {Link, useLoaderData, Form} from "react-router-dom";

function Index(props) {
    const places = useLoaderData();

    return (
        <div>
            <h2>Create a Place</h2>
            <Form action="/create" method="post">
                <input type="text" name="name" placeholder="Place Name" />
                <input type="text" name="description" placeholder="Place Description" />
                <input type="text" name="country" placeholder="Place Country" />
                <input type="text" name="image" placeholder="Place Image" />
                <input type="text" name="url" placeholder="Place Url" />
                <input type="text" name="notes" placeholder="Place Notes" />
                <input type="text" name="seasonToGo" placeholder="Place Season To Go" />
                <input type="checkbox" name="visited" placeholder="Place Visited" />
                <input type="submit" value="Create Place" />
            </Form>
            {places.map((place, index) => {
                return (
                    <div key={place._id} className="place">
                        <Link to={`/${place._id}`}>
                            {place.name}
                        </Link>
                        <p>{place.description}</p>
                        <p>{place.country}</p>
                        <img src={place.image} alt={place.name} />
                        <p>{place.url}</p>
                        <p>{place.notes}</p>
                        <p>{place.seasonToGo}</p>
                        <p>{place.visited}</p>
                    </div>
                );
            })}
        </div>
    )
}