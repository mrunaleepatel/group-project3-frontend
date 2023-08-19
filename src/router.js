import {
    createBrowserRouter, createRoutesFromElements, Route
} from "react-router-dom";
import App from "./App";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
// // import Main from "./Pages/Main";
// import Signup from "./Pages/Signup";
// import Login from "./Pages/Login";
import { placesLoader, placeLoader } from "./loaders";
import { createAction } from "./actions";
// import { updateAction, deleteAction, signupAction, loginAction } from "./actions"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={placesLoader}/>
        <Route path=":id" element={<Show/>} loader={placeLoader}/>
        <Route path="create" action={createAction}/>
        {/* <Route path="update/:id" action={updateAction}/>
        <Route delete="delete/:id" action={deleteAction}/> */}
    </Route>
));

export default router;