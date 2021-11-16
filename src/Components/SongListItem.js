import React from "react"

function SongListItem(props) {
    return (
        <div>
            <li className="ListItem">
                <div className="Item">{props.title}</div>
                <div className="Item">{props.artist}</div>
                <div className="Item">{props.genre}</div>
                <div className="Item">{props.rating}</div>
            </li>
        </div>
    )
}

export default SongListItem
