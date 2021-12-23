import React, { Component } from 'react'
import Profile from './profile'
import Img from "./../asma.jpg"
export default class profileParents extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            person : {fullName: 'Asma', bio: 'sa7a' , imgSrc: Img,profession: 'profession'},
            show:false
        }
    }

    
    render() {
        return (
            <div>
                <button onClick={ () => this.setState({show: !this.state.show})}>{this.state.show ? 'show' : 'hide'}</button>
                {this.state.show && <Profile person={this.state.person}/>}
            </div>
        )
    }
}
