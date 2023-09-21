import React from 'react'
import MyParagraph from './MyParagraph'

const DemoOutput = props => {
    console.log('DemoOuput running')
    return (
        <MyParagraph>{props.show ? 'I am Fatma Sliti, a great frontend developer' : ''}</MyParagraph>
    )
}

export default React.memo(DemoOutput); // this React.memo stops the re-evaluation of the DemoOutput and all its child components for performance reasons only if its prop (in the app component) contains a static value : primitive values (<DemoOutput show={false} />) so that no need to re-evaluate the component else it continues to re-evaluate all the components as usual
