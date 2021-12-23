import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap';

export default class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            intervalId: 0
        };
    }
    handleClick = () => {
        if(this.state.intervalId){
          clearInterval(this.state.intervalId);
          this.setState(prevState => {
            return {
              ...prevState,
              intervalId: 0,
            };
          });
          return;
        }
        
        const newIntervalId = setInterval(() => {
          this.setState(prevState => {
            return {
              ...prevState,
              count: prevState.count + 1,
            };
          });
        }, 1000);
        
        this.setState(prevState => {
          return {
            ...prevState,
            intervalId: newIntervalId,
          };
        });
      }
    
    render() {
        return (
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.person.imgSrc} />
                <Card.Body>
                    <Card.Title>{this.props.person.fullName}</Card.Title>
                    <Card.Text>
                    {this.props.person.bio}
                    </Card.Text>
                    <Button variant="primary"onClick={this.handleClick}>
                        {this.state.intervalId? "Stop counter": "Start counter"}
                    </Button>
                </Card.Body>
            </Card>
            <hr />
            <span>The component has been rendered for {this.state.count} seconds</span>
            </div>
        )
    }
}