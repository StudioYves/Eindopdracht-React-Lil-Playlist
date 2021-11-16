import React from "react"

class SongForm extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            artist: "",
            genre: "",
            rating: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.addSong(this.state)
        this.setState({
            title: "",
            artist: "",
            genre: "",
            rating: ""
        })
    }

    render() {
        return (
            <div className="songForm">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        placeholder="Titel"
                        onChange={this.handleChange}
                        className="input-box title"
                    />
                    <input
                        type="text"
                        name="artist"
                        value={this.state.artist}
                        placeholder="Artiest"
                        onChange={this.handleChange}
                        className="input-box artist"
                    />
                    <input
                        type="text"
                        name="genre"
                        value={this.state.genre}
                        placeholder="Genre"
                        onChange={this.handleChange}
                        className="input-box genre"
                    />
                    <input
                        type="text"
                        name="rating"
                        value={this.state.rating}
                        placeholder="Rating (1-5)"
                        onChange={this.handleChange}
                        className="input-box rating"
                    />
                    <button className="button-addSong">Nummer toevoegen</button>
                </form>
            </div>
        )
    }
}


export default SongForm