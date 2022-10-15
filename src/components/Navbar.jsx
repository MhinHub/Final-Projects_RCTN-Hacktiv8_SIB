import { Button, Dropdown, Form, Navbar, Input } from 'react-daisyui'
import { useState, useReducer, createContext } from 'react'
import { BsBookmarksFill } from 'react-icons/bs'
import { Link, NavLink, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export default () => {
    // const keywordContext = createContext();
    const [keyword, setKeyword] = useState('');
    // const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleSearch = (e) => {
        e.preventDefault();
        if (!keyword) {
            alert("Keyword is required");
        } else {
            navigate(`/search?q=${keyword}`);
        }
    }



    const savedNews = useSelector((state) => state.news.data.saved);

    return (
        <Navbar className='navbar'>
            <Link to="/" className="flex-1">
                <p className="text-4xl text-primary">
                    <b>NewsUp</b>
                </p>
            </Link>
            <div className="flex-none gap-2">
                <Form onSubmit={handleSearch}>
                    <Input
                        className="w-96"
                        placeholder="Search news..."
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </Form>
                
                <NavLink className={({isActive}) => isActive ? 'mx-4 p-2 rounded-full bg-gray-300' : 'mx-4 p-2 rounded-full'} to="/saved">
                    <span className="flex h-[22px] w-[22px] text-[14px] justify-center align-middle content-center absolute font-semibold text-white duration-300">
                        {savedNews.length}
                    </span>
                    <BsBookmarksFill size={25}/>
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
    )
}