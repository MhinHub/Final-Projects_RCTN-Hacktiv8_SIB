export default () => {
    return (
        <aside className="float-right px-4 m-1 w-[16%] h-fit border-x border-gray-900 overflow-y-auto">
            <div className="flex flex-col">
                <h3 className="text-xl font-bold">Top News</h3>
                <div className="relative w-full h-40 mb-4 rounded-sm overflow-hidden">
                    <img src="https://source.unsplash.com/random" alt="Avatar" className="object-cover w-full h-full" loading="lazy" />
                    <p className="absolute w-full py-2.5 px-2 bottom-0 inset-x-0 bg-gray-900 bg-opacity-50 text-white text-xs text-left font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                </div>
                <div className="relative w-full h-40 mb-4 rounded-sm overflow-hidden">
                    <img src="https://source.unsplash.com/random" alt="Avatar" className="object-cover w-full h-full" loading="lazy" />
                    <p className="absolute w-full py-2.5 px-2 bottom-0 inset-x-0 bg-gray-900 bg-opacity-50 text-white text-xs text-left font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                </div>
                <div className="relative w-full h-40 mb-4 rounded-sm overflow-hidden">
                    <img src="https://source.unsplash.com/random" alt="Avatar" className="object-cover w-full h-full" loading="lazy" />
                    <p className="absolute w-full py-2.5 px-2 bottom-0 inset-x-0 bg-gray-900 bg-opacity-50 text-white text-xs text-left font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                </div>
            </div>
        </aside>
    )
}