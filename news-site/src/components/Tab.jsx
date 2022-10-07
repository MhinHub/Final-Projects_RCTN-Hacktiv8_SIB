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
        <div className="tabs justify-center mt-4 gap-x-2">
            <Link className={`inline-block py-1 px-5 text-white bg-gray-900 border border-gray-900 rounded-full active`} to="/">Indonesia</Link>
            <Link className={`inline-block py-1 px-5 text-gray-900 border border-gray-900 rounded-full`} to="/programming">Programming</Link>
            <Link className={`inline-block py-1 px-5 text-gray-900 border border-gray-900 rounded-full`} to="/covid19">Covid-19</Link>
            <Link className={`inline-block py-1 px-5 text-gray-900 border border-gray-900 rounded-full`} to="/sports">Sports</Link>
            <Link className={`inline-block py-1 px-5 text-gray-900 border border-gray-900 rounded-full`} to="/technology">Technology</Link>
            <Link className={`inline-block py-1 px-5 text-gray-900 border border-gray-900 rounded-full`} to="/entertainment">Entertainment</Link>
        </div>
    )
};