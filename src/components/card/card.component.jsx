import React from 'react';
import classNames from 'classnames'

import { Container, Body, Title, Text, Image, Button } from '../styles/Card'

import "./card.styles.scss";

function Card({classes, children, ...restProps}) {
    return(
        <Container classNames={classNames('card', classes)} {...restProps}>
            {children}
        </Container>
    )
}

Card.Body = function CardBody({classes, children, ...restProps}) {
    return(
        <Body className={classNames('card__body', classes)} {...restProps}>

        </Body>
    )
}

Card.Title = function CardTitle({classes, children, ...restProps}) {
    return(
        <Title className={classNames('card__title', classes)} {...restProps}>

        </Title>
    )
}

Card.Text = function CardText({classes, children, ...restProps}) {
    return(
        <Text className={classNames('card__text', classes)} {...restProps}>

        </Text>
    )
}

Card.Image = function CardImage({ src, alt, classes, ...restProps }) {
    return(
        <Image
            src={src}
            alt={alt}
            className={classNames('card__text', classes)}
            {...restProps}
        />
    )
}

Card.Button = function CardButton({ classes, children, ...restProps}) {
    return(
        <Button
        type="button"
        className={classNames('card__button', classes)}
        {...restProps}
        />
    )
}



export default Card;