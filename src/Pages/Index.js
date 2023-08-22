import {Link, useLoaderData, Form, useNavigate} from "react-router-dom";
import { baseUrl } from "../base_url";
// auto complete
import axios from "axios";
import {Input, Card} from "antd"
import React, { useEffect, useState } from "react";

function Index(props) {
    const places = useLoaderData();
    const navigate = useNavigate();

    //auto complete
    const [countries, setCountries] = useState([]);
    const [countryMatch, setCountryMatch] = useState([]);
    const [input, setInput] = useState("");
    const [goAway, setGoAway] = useState(false)
    //

    //auto compelete//
    useEffect(() => {
        const loadCountries = async () => {
            const response = await axios.get("https://restcountries.com/v2/all");
            setCountries(response.data);
        };

        loadCountries();
    }, []);

    const searchCountries = () => {
        let matches = countries.filter((country) => {
            return country.name.toLowerCase().indexOf(input.toLowerCase()) > -1;
        })
        setCountryMatch(matches);
    };

    

    ///////
    return (
        <div>
            <button onClick={async () => {
                await fetch(`${baseUrl}/logout`) 
                localStorage.removeItem('loggedIn') 
                navigate("/") 
            }}>Logout</button>
            <h2>Create a Place</h2>
            <Form action="/create" method="post">
                <input type="text" name="name" placeholder="Place Name" required/>
                <input type="text" name="description" placeholder="Place Description" />



                <Input type="text" name="country" placeholder="Place Country" 
                value = {input}
                onChange={(e) => {
                    searchCountries(e.target.value)
                    setInput(e.target.value)
                    setGoAway(false)
                    }
                }  />
                {!goAway && countryMatch && countryMatch.map((item, index) => (
                    <div key={index} onClick={() => {
                        setInput(item.name)
                        setGoAway(true)
                    }}>

                        <Card title={`${item.name}`} >
                            {item.name}
                        </Card>
                    </div>
                ))}

                

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

export default Index