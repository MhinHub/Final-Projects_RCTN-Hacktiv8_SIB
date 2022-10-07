import { Button, Dropdown, Form, Navbar, Input } from 'react-daisyui'

export default () => {
    return (
        <Navbar className='nav' dataTheme='light'>
            <div className="flex-1">
                <Button className="text-2xl" color='ghost'>
                    <b>Novita</b>
                </Button>
            </div>
            <div className="flex-none gap-2">
                <Form>
                    <Input type="text" placeholder="Search" />
                </Form>
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