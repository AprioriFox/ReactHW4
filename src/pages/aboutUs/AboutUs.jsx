import { Component } from "react"
import AboutUsText from "../../components/aboutUsText/AboutUsText"

export default class AboutUs extends Component{
    constructor(props){
        super(props)

        this.state = {
            class: false,

        }

    }


    handleClass = () =>{
        this.setState({class: !this.state.class})
    }

    render(){
        return(
            <> 
                <h1>About Us</h1>
                {this.state.class === false 
                ? 
                    <button onClick={this.handleClass} >Show text</button>
                :
                    <button onClick={this.handleClass}>Hide text</button>
                }
                <AboutUsText pClass = {this.state.class}/>
            </>
        )
    }
}