
export default (props) => {
    return (
        <article className="flex py-10 px-6 rounded-md border border-black ">
            <img className="border border-black w-60" src="https://source.unsplash.com/random/240x120" loading="lazy"/>
            <div className="flex-col px-2">
                <h3 className="text-2xl"><strong>lorem ipsum Title kesim sken alknaja kkalbd lka</strong></h3> 
                <p><sup>author</sup> " <sup>date</sup></p>
                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt hic voluptates porro officia voluptatibus ex velit dolorem quaerat ab vitae, suscipit et, consectetur asperiores dolores maxime modi magni minima quam?</p>
            </div>
        </article>
    )
}