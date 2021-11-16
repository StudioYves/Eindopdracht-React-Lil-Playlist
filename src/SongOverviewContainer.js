import React from "react"
import SongList from "./Components/SongList"
import SongForm from "./Components/SongForm"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Buttons from "./Components/Buttons"

class SongOverview extends React.Component {
    constructor() {
        super()
        this.state =
        {
            songs: [{
                id: 1,
                title: "Full Clip",
                artist: "Gang Starr",
                genre: "Hiphop",
                rating: "3"
            },
            {
                id: 2,
                title: "Nas is like",
                artist: "Nas",
                genre: "Hiphop",
                rating: "2"
            },
            {
                id: 3,

                title: "Acid phase",
                artist: "Emanuel Top",
                genre: "Oldschool house",
                rating: "5"
            },
            {
                id: 4,
                title: "Protect ya neck",
                artist: "Wu-Tang Clan",
                genre: "Hiphop",
                rating: "2"
            },
            {
                id: 5,
                title: "First Rebirth",
                artist: "Jones & Stephenson",
                genre: "Oldschool house",
                rating: "5"
            },
            {
                id: 6,
                title: "Shook Ones",
                artist: "Mobb Deep",
                genre: "Hiphop",
                rating: "3"
            },
            {
                id: 7,
                title: "Black Hole Sun",
                artist: "Soundgarden",
                genre: "Grunge",
                rating: "4"
            },
            {
                id: 8,
                title: "Universal Nation",
                artist: "Push",
                genre: "Oldschool house",
                rating: "3"
            },
            {
                id: 9,
                title: "Lithium",
                artist: "Nirvana",
                genre: "Grunge",
                rating: "2"
            },
            {
                id: 10,
                title: "Debaser",
                artist: "Pixies",
                genre: "Grunge",
                rating: "1"
            }]
        }
        this.addSong = this.addSong.bind(this)
        this.sortBy = this.sortBy.bind(this)
        this.deleteAllSongs = this.deleteAllSongs.bind(this)
    }


    sortBy = (key) => {
        this.setState(prevState => {
            const sorted = prevState.songs.sort((a, b) => (a[key].toUpperCase() > b[key].toUpperCase()) ? 1 : -1)
            return { sorted };
        })
    }

    deleteAllSongs = () => {
        this.setState({ songs: [] })
    }


    addSong = (song) => {
        const newSong = {
            id: this.state.songs.length + 1,
            title: song.title,
            artist: song.artist,
            genre: song.genre,
            rating: song.rating
        }
        const prevState = this.state.songs
        this.setState({
            songs: prevState.concat(newSong)
        })
    }


    render() {
        return (
            <div className="container">
                <Header />
                <SongForm addSong={this.addSong} />
                <SongList songs={this.state.songs} />
                <Buttons sortBy={this.sortBy} deleteAllSongs={this.deleteAllSongs} />
                <Footer />
            </div>
        );
    }
}

export default SongOverview

