import React from "react"

function Buttons(props) {
    return(
        <div className="sortingButtons">
            <button className='sortButton' type="submit" onClick={() => props.sortBy("title")} > Sorteren op titel A-Z</button>
            <button className='sortButton' type="submit" onClick={() => props.sortBy("artist")} > Sorteren op artiest A-Z</button>
            <button className='sortButton' type="submit" onClick={() => props.sortBy("rating")} > Sorteren op rating</button>
            <button className='deleteButton' type="submit" onClick={() => props.deleteAllSongs()} >Alle songs verwijderen</button>
        </div>
    )
}

export default Buttons