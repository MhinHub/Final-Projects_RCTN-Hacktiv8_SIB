export default (props) => {
    return (
        <article className="flex flex-col py-8 px-4 rounded-md border border-black bg-transparent ">
            <img className="border rounded-2xl border-black" src="https://source.unsplash.com/random/200x120" loading="lazy" />
            <p className="text-sm pl-2 opacity-60"><b><span>author</span> - <span>date</span></b></p>
            <div className="flex-col px-2 w-[fit-content]">
                <h3 className="text-2xl"><strong>lorem ipsum Title kesim sken alknaja kkalbd lka</strong></h3>
                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt hic voluptates porro officia voluptatibus ex velit dolorem quaerat ab vitae, suscipit et, consectetur asperiores dolores maxime modi magni minima quam?</p>
            </div>
        </article>
    )
}