import React, { Component } from 'react'
import styled from 'styled-components'

export const Panel = styled.div`
  margin-top: 16px;
  text-align: center;
  box-shadow: 0px 1px 24px 0px rgba(0,0,0,0.33);
  border-radius: 5px;
`

export const PanelBody = styled.div`
  border: 5px solid #9e5fa0;
  border-radius: 5px;
`

export const Heading = styled.div`
  color: white;
  font-size: 24px;
  background: #9e5fa0;
  padding: 10px 15px;
`

export const Quality = styled.div`
  height: 125px;
  width: 125px;
  margin: 0 auto;
  text-align: center;
  background-size: 100%;
  background-image: url("/assets/qualityIcons/purpose-75af6d6a759d87b2a4f7f84e1c93071950789dfa4aab79b071e388013c7cafd2.png");
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

const Purpose = (props) => {
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

export default Purpose
