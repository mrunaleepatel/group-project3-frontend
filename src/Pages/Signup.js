import { Form } from "react-router-dom";

function Signup(props){
    return <div className="signup-form">
        <h2>Signup</h2>
        <Form action="/signup" method="POST">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" /><br/>
            <input type="submit" value="Signup" />
        </Form>
    </div>
}

export default Signup;