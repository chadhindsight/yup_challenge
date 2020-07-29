import React, {useState} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Funny } from '../assets/laughing.svg';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as Idea } from '../assets/idea.svg';
import styled from "styled-components";

const VoteSection = (props) => {
    // Styled component will handle what color the underline should be
    const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Styled Popularity Number
const Popularity = styled.p `
    text-decoration: underline;
    color: ${props.displayColor(props.popSextile)}
`
// Styled Intelligence Number

// Styled Funny Number
    console.log(props.popularity)

    return (
        <div>
            <Title>Members</Title>
            <Tooltip title="popularity">
                <SvgIcon>
                    <Heart />
                </SvgIcon>
            </Tooltip>
            <Popularity><span>{props.popularity}</span></Popularity>

            <Tooltip title="intelligence">
                <SvgIcon >
                    <Idea/>
                </SvgIcon>
            </Tooltip>
            <p><span>{props.intelligence}</span></p>

            <Tooltip title="funny">
                <SvgIcon>
                    <Funny />
                </SvgIcon>
            </Tooltip>
            <p><span>{props.funny}</span></p>
        </div>
    );
};

export default VoteSection;

    // <p className="numbers" style={{ color: 'aquamarine' }}><span>{props.info.intelligence}</span></p>
    // <p className="numbers" style={{ color: 'aquamarine' }}><span>{props.info.funny}</span></p>
