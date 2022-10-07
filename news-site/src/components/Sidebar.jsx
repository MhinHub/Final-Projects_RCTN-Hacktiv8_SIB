export default () => {
    return (
        <aside className="float-left p-4 m-2 w-[15%] border border-gray-900 rounded-md fixed">
            <div className="flex flex-col">
                <h6 className="text-lg font-bold"><b>Categories</b></h6>
                <ul className="pl-4 text-base font-light">
                    <li className="list-disc">Indonesia</li>
                    <li>Programming</li>
                    <li>Covid-19</li>
                    <li>Sports</li>
                    <li>Technology</li>
                    <li>Entertainment</li>
                </ul>
                <hr />
                <h6 className="text-lg font-bold"><b>Manage</b></h6>
                <ul className="pl-4 text-base font-light">
                    <li>Saved</li>
                    <li>Readed</li>
                </ul>
                <hr />
                <h6 className="text-lg font-bold"><b>Theme</b></h6>
                <ul className="pl-4 list-inside">
                    <li className="flex flex-row gap-2">
                        <input type="radio" name="radio-1" className="radio" checked/>
                        <input type="radio" name="radio-1" className="radio radio-primary" />
                        <input type="radio" name="radio-1" className="radio radio-secondary" />
                    </li>
                </ul>
            </div>
        </aside >
    )
}