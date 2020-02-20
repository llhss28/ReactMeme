import React from "react"

class Meme extends React.Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            picture: "",
            memesAll: []
        }
    }

        componentDidMount() { 
            fetch("https://api.imgflip.com/get_memes")
                .then(response => response.json())
                .then(response => {
                    const {memes} = response.data
                    this.setState({memesAll: memes})
                })
                
                
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const rando = Math.ceil(Math.random()*this.state.memesAll.length)
        const randomMeme = this.state.memesAll[rando].url
        console.log(randomMeme)
        this.setState({picture: randomMeme})
        
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value})
        console.log(this.state.picture)
    }
    render(){
        return(
            <div>
                <form>
                    <input type = "text"
                    name = "topText"
                    placeholder = "Top text"
                    value = {this.state.topText}
                    onChange = {this.handleChange}>
                    </input>

                    <input type = "text"
                    placeholder = "Bottom text"
                    name = "bottomText"
                    value = {this.state.bottomText}
                    onChange = {this.handleChange}>
                    </input>
                    <br />
                    <button onClick = {this.handleSubmit}>Click me</button>
                </form>
                <div className = "meme">
                    <h1 className = "topText">{this.state.topText}</h1>
                    <img src = {this.state.picture} alt = " "></img>
                    <h1 className = "bottomText">{this.state.bottomText}</h1>
                </div>
            </div>
        )
    }
}


export default Meme