import React, {useState} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/core/SvgIcon';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import { ReactComponent as Funny } from '../assets/laughing.svg';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as Idea } from '../assets/idea.svg';
import styled from "styled-components";

const VoteSection = (props) => {
    // The template in the styled component will handle what color the underline should be
    const FunnyCount = styled.p`
        text-decoration: underline;
    color: ${props.displayColor(props.intelSextile)}
`;

// Styled Comp for Popularity Number
const Popularity = styled.p `
    text-decoration: underline;
    color: ${props.displayColor(props.popSextile)}
`
//Styled comp for Intelligence Number

// Styled comp for  Funny Number

    return (
        <div>
            <ArrowUpwardIcon />
            <Tooltip title="popularity">
                <SvgIcon>
                    <Heart />
                </SvgIcon>
            </Tooltip>
            <ArrowDownwardIcon />    

            {props.popSextile !== 'none'? 
                <Popularity><span>{props.popularity}</span></Popularity> :
                <p>{props.popularity}</p>
            }

            <Tooltip title="intelligence">
                <SvgIcon >
                    <Idea/>
                </SvgIcon>
            </Tooltip>
            {props.intelSextile !== 'none' ?
                <Popularity><span>{props.intelligence}</span></Popularity> :
                <p>{props.intelligence}</p>
            }

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
