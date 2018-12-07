import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Purpose from './Purpose.js'
import Empowerment from './Empowerment.js'
import Collaboration from './Collaboration.js'


export const StyledHeader = styled.h1`
  font-size: 32px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`

class App extends Component {
  constructor() {
    super();

    this.state = {
      purpose: {},
      empowerment: {},
      collaboration: {}
    }
  }

componentDidMount() {
  axios.get('/creative_qualities.json')
  .then((response) => {
    this.setState({
      purpose: response.data[0],
      empowerment: response.data[1],
      collaboration: response.data[2]
    })
  })
  .catch((error) => {
    console.log(error);
  });
}

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <StyledHeader>Creative Qualities</StyledHeader>
          </div>
        </div>
        <Purpose data={this.state.purpose}/>
        <Empowerment data={this.state.empowerment}/>
        <Collaboration data={this.state.collaboration}/>
      </div>
    )
  }
}

export default App
