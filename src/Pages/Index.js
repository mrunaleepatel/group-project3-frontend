// imports
import {Link, useLoaderData, Form } from "react-router-dom";

// imports for  auto complete for COUNTRY input
import axios from "axios";
import {Input, Card} from "antd"
import React, { useEffect, useState } from "react";

function Index(props) {
    const places = useLoaderData();

    //auto complete
    const [countries, setCountries] = useState([]);
    const [countryMatch, setCountryMatch] = useState([]);
    const [input, setInput] = useState("");
    const [goAway, setGoAway] = useState(false)
    //

    //checkbox//
    const [checked, setChecked] = useState(false);
    console.log({checked})
    const handleChange = () => {
        setChecked(!checked);
    }
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

            <div className="create-form">
            {/* <h2>Add A New Place</h2> */}
            <Form action="/create" method="post">
                <label htmlFor="name">Name of Place: </label>
                <input type="text" name="name" placeholder="Trevi Fountain" required/>
                <label htmlFor="type">Type of Place: </label>
                <input type="text" name="type" placeholder="Monument" /><br/>



                <label htmlFor="country">Location (Country): </label>
                <Input type="text" name="country" placeholder="Italy" 
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

                <label htmlFor="url">Website of Place: </label>
                <input type="text" name="url" placeholder="https://romesite.com/trevi-fountain.html" />
                <label htmlFor="image">Image URL of Place: </label>
                <input type="text" name="image" placeholder="https://romesite.com/images/trevi_fountain.jpg" />
                <label htmlFor="seasonToGo">Best Season to Go: </label>
                <input type="text" name="seasonToGo" placeholder="Spring and Fall" /><br/>
                <label htmlFor="notes">Additional Notes: </label>
                <input type="text" name="notes" placeholder="The Lizzie McGuire Movie" /> <br/>
                <label htmlFor="visited">Visited yet? </label>
                <input type="checkbox" name="visited" value={checked} onChange={handleChange} /><br/>
                <input type="submit" value="Create" className="create-button"/>
            </Form>
            </div>

            <div className="places-container">
            {places.map((place, index) => {
                return (
                    <div key={place._id} className="places-list">
                        <ul>
                            <li className="single-place"><img src={place.image} alt={place.name}/>
                                <Link to={`/${place._id}`}>
                            {place.name}
                            </Link></li>
                        </ul>
                    </div>
                );
            })}
           </div>

        </div>
    )
}

export default Index;