import { useState } from "react";
import { Button, Dropdown, Form, Input, Navbar } from "react-daisyui";
import { BsBookmarksFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

export default () => {
  // const keywordContext = createContext();
  const [keyword, setKeyword] = useState("");
  // const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (!keyword) {
      alert("Keyword is required");
    } else {
      navigate(`/search?q=${keyword}`);
    }
    setKeyword("");
  };

  const savedNews = useSelector((state) => state.news.data.saved);

  return (
    <Navbar className="navbar">
      <Link to="/" className="flex">
        <p className="text-4xl text-primary">
          <b>NewsUp</b>
        </p>
      </Link>
      <div className="flex gap-2">
        <Form onSubmit={handleSearch}>
          <Input
            className="w-80 h-10 rounded-full border border-primary self-center"
            placeholder="Search news..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            type="submit"
            className="h-10 absolute rounded-full self-end hover:bg-primary hover:text-white border-none"
          >
            <IoSearchOutline size={20} />
          </button>
        </Form>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "mx-4 p-2 rounded-full bg-gray-300"
              : "mx-4 p-2 rounded-full"
          }
          to="/saved"
        >
          <span className="flex h-[22px] w-[22px] text-[14px] justify-center align-middle content-center absolute font-semibold text-white duration-300">
            {savedNews.length}
          </span>
          <BsBookmarksFill size={25} />
        </NavLink>
        <Dropdown vertical="end">
          <Button color="ghost" className="avatar" shape="circle">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </Button>
          <Dropdown.Menu className="w-52 menu-compact">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
};
