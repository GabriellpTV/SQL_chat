import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Index from "../pages/Index";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const { signed } = useAuth();
    return signed > 0 ? <Item /> : <Index />;
}

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/home" element={<Private Item={Home} />}/>
                    <Route path="/" element={<Private Item={Home} />}/>
                    <Route path="signin" element={<Signin />}/>
                    <Route path="signup" element={<Signup />}/>
                    <Route path="*" element={<Index />}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}