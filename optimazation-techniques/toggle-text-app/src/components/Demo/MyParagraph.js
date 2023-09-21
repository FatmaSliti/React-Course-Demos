import React from 'react'

const MyParagraph = props => {
    console.log('MyParagraph running')
    return (
        <p>{props.children}</p>
    )
}

export default MyParagraph

