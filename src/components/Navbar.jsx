import { Button, Dropdown, Form, Navbar, Input } from 'react-daisyui'
import { useState } from 'react'
import { BsBookmarksFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

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
                <Link className='mx-4' to="/saved">
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