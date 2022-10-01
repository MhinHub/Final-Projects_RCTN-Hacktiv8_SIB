import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default () => {

    const [isRedirect, setRedirect] = useState("/programming");
    const location = useLocation();

    useEffect(() => {
        setRedirect(location.pathname)
    }, [location])

    const isActive = (path) => {
        return path === isRedirect ? "tab-active" : "";
    }

    return (
        <div className="tabs justify-center mt-4">
            <Link className={`tab tab-bordered ${isActive} tab-active`} to="/">Indonesia</Link>
            <Link className={`tab tab-bordered ${isActive}`} to="/programming">Programming</Link>
            <Link className={`tab tab-bordered ${isActive}`} to="/covid19">Covid-19</Link>
            <Link className={`tab tab-bordered ${isActive}`} to="/sports">Sports</Link>
            <Link className={`tab tab-bordered ${isActive}`} to="/technology">Technology</Link>
            <Link className={`tab tab-bordered ${isActive}`} to="/entertainment">Entertainment</Link>
        </div>
    )
};