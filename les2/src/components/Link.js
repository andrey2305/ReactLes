import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    padding-right: 33px;
    border-right: 1px dotted #fff;
    &:focus {
        color: #4ff9d9;
        text-decoration: none;
    }
    &:hover {
        text-decoration: none;
        color: #8d8d8d;
    }
    &:last-child {
        border-right: none;
    }
`

class Link extends Component {
    render() {
        return (
            <StyledLink href={this.props.link}> {this.props.text} </StyledLink>
        )
    }
}

export default Link;