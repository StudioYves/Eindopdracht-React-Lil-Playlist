import React from "react"
import SongListItem from "./SongListItem"

function SongList(props) {

    const items = props.songs

    // ALLE SONGS GROEPEREN OP GENRE > DIT GENEREERT EEN OBJECT WAARMEE REACT NIET OVERWEG KAN
    const GroupedObject = items.reduce(function (r, a) {
        r[a.genre] = r[a.genre] || [];
        r[a.genre].push(a);
        return r;
    }, Object.create(null));


    // OMZETTEN VAN OBJECT NAAR ARRAY
    const ArrayPerGenre = Object.values(GroupedObject)


    // BOVENSTAANDE ARRAY HEEFT PER GENRE WEER EEN ARRAY IN ZICH, MET DAARIN DE OBJECTEN > TWEE KEER MAPPEN OM BIJ PROPERTIES TE KOMEN
    const SongsInGenreCategories = ArrayPerGenre.map(arrayItem => {
        return arrayItem.map(item => {
            return <SongListItem
                key={item.id}
                title={item.title}
                artist={item.artist}
                genre={item.genre}
                rating={item.rating}
            />
        })
    })

    return (
        <div>
            <div className="songListHeader">
                <div className="headerItem">Titel</div>
                <div className="headerItem">Artiest</div>
                <div className="headerItem">Genre</div>
                <div className="headerItem">Rating</div>
            </div>
            <hr></hr>
            <ul className="songList">
                {SongsInGenreCategories}
            </ul>
        </div>
    )
}

export default SongList

