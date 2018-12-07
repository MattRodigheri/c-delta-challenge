import React, { Component } from 'react'
import styled from 'styled-components'

export const Panel = styled.div`
  margin-top: 16px;
  text-align: center;
  box-shadow: 0px 1px 24px 0px rgba(0,0,0,0.33);
  border-radius: 5px;
`

export const PanelBody = styled.div`
  border: 5px solid #e6c937;
  border-radius: 5px;
`

export const Heading = styled.div`
  color: white;
  font-size: 24px;
  background: #e6c937;
  padding: 10px 15px;
`

export const Quality = styled.div`
  height: 125px;
  width: 125px;
  margin: 0 auto;
  text-align: center;
  background-size: 100%;
  background-image: url("/assets/qualityIcons/collaboration-13170149a0fc5df62712d08996d53a84477f625ae9057dfa0983bb62e8d50a89.png");
`

export const Small = styled.p`
  display: block;
  font-size: 12px;
`

export const Score = styled.p`
  display: block;
  font-size: 12px;
  font-size: 46px;
  font-weight: bold;
  margin-bottom: 48px;
`

export const Description = styled.p`
  text-align: left;
  margin: 0 10.5px 3px 10.5px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
`

const Collaboration = (props) => {
  return (
    <div className='col-md-4'>
      <Panel>
        <PanelBody>
          <Heading>{props.data.name}</Heading>
          <Quality></Quality>
          <Small>your score:</Small>
          <Score>{props.data.score}</Score>
          <Description>{props.data.description}</Description>
        </PanelBody>
      </Panel>
    </div>
  )
}

export default Collaboration
