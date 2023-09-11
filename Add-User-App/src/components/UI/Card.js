import React from 'react'
import styles from './Card.module.css'

const Card = props => {
    // const classes = [styles.input, props.className].join(' ');
    return (
        <div className={`${styles.card} ${props.className}`}>{props.children}</div>
    )
}

export default Card
