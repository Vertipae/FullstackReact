import React from 'react'
import Note from './components/Note'

// const App = ({ notes }) => {

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: props.notes,
            newNote: 'uusi muistiinpano..'
        }
    }

    handleNoteChange = (event) => {
        console.log(event.target.value)
        this.setState({ newNote: event.target.value })
    }

    addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: this.state.newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: this.state.notes.length + 1
        }

        const notes = this.state.notes.concat(noteObject)

        this.setState({
            notes: notes,
            newNote: ''
        })
        // console.log('nappia painettu')
        // console.log(event.target)
    }
    render() {
        return (
            <div>
                <h1>Muistiinpanot</h1>
                <ul>
                    {this.state.notes.map(note => <Note key={note.id} note={note} />)}
                    {/* {notes.map(note => <Note key={note.id} note={note} />)} */}

                </ul>
                <form onSubmit={this.addNote}>
                    <input
                        value={this.state.newNote}
                        onChange={this.handleNoteChange} />
                    <button type="submit">Tallenna</button>
                </form>
            </div>
        )

    }

}



export default App