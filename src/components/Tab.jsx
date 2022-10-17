import { NavLink } from "react-router-dom";

export default () => {
    function isActive({isActive}) {
        return isActive ? 'tab-active' : 'tab-inactive';
    }

    return (
        <div className="tabs-content">
            <NavLink className={isActive} to="/" end>Indonesia</NavLink>
            <NavLink className={isActive} to="/programming">Programming</NavLink>
            <NavLink className={isActive} to="/covid19">Covid-19</NavLink>
            <NavLink className={isActive} to="/sports">Sports</NavLink>
            <NavLink className={isActive} to="/technology">Technology</NavLink>
            <NavLink className={isActive} to="/entertainment">Entertainment</NavLink>
        </div>
    )
};