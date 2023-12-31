import {
    createBrowserRouter, createRoutesFromElements, Route
} from "react-router-dom";
import App from "./App";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Main from "./Pages/Main";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { placesLoader, placeLoader, mainLoader } from "./loaders"
import { createAction, updateAction, deleteAction, signupAction, loginAction } from "./actions";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Main/>} loader={mainLoader}>
            <Route path="signup" element={<Signup/>} action={signupAction}/>
            <Route path="login" element={<Login/>} action={loginAction}/>
        </Route>
        <Route path="dashboard" element={<Index/>} loader={placesLoader}/>
        <Route path=":id" element={<Show/>} loader={placeLoader}/>
        <Route path="create" action={createAction}/>
        <Route path="update/:id" action={updateAction}/>
        <Route path="delete/:id" action={deleteAction}/>
    </Route>
));

export default router;