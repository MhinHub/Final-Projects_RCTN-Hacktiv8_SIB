import { Button, Dropdown, Form, Navbar, Input } from 'react-daisyui'
import { useState } from 'react'
import { BsBookmarksFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default () => {
    // const [keyword, setKeyword] = useState("");

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     if (!keyword) {
    //         return alert("Keyword cannot empty!");
    //     }
    //     path(`/search?keyword=${keyword}`);
    //     setKeyword("");
    // }

    const savedNews = useSelector((state) => state.news.data.saved);

    return (
        <Navbar className='navbar'>
            <div className="flex-1">
                <p className="text-4xl text-primary">
                    <b>NewsUp</b>
                </p>
            </div>
            <div className="flex-none gap-2">
                <Form>
                    <Input type="text" placeholder="Search" />
                </Form>
                <Link className='mx-4 p-2 rounded-full active:bg-gray-300' to="/saved">
                    <span className="flex h-[22px] w-[22px] text-[14px] justify-center align-middle content-center absolute font-semibold text-white duration-300">
                        {savedNews.length}
                    </span>
                    <BsBookmarksFill size={25}/>
                </Link>
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