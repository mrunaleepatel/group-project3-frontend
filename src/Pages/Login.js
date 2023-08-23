import { Form } from "react-router-dom";

function Login(props){
    return <div className="login-form">
        <h2>Login</h2>
        <Form action="/login" method="post">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" /><br/>
            <input type="submit" value="Login" />
        </Form>
    </div>
}

export default Login;