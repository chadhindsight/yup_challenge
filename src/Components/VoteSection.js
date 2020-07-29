import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/core/SvgIcon';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { ReactComponent as Funny } from '../assets/laughing.svg';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as Idea } from '../assets/idea.svg';
import styled from "styled-components";
import { useTheme } from '@material-ui/core';

const VoteSection = (props) => {
    const [downActive, setDown] = useState(false)
    const [downActive2, setDown2] = useState(false)
    const [downActive3, setDown3] = useState(false)

    const [upActive, setUp] = useState(false)
    const [upActive2,  setUp2] = useState(false)
    const [upActive3, setUp3] = useState(false)

    // The template in the styled component will handle what color the underline should be
    const FunnyCount = styled.p`
        text-decoration: underline;
    color: ${props.displayColor(props.intelSextile)}
`;

    // Styled Comp for Popularity Number
    const Popularity = styled.p`
    text-decoration: underline;
    color: ${props.displayColor(props.popSextile)}
`
    //Styled comp for Intelligence Number

    // Styled comp for  Funny Number

    return (
        <div>
            <KeyboardArrowUpIcon className={upActive ? "upColor" : null} onClick={(e) => setUp(!upActive)} />
            <Tooltip title="popularity">
                <SvgIcon>
                    <Heart />
                </SvgIcon>
            </Tooltip>
            <KeyboardArrowDownIcon className={upActive2 ? "downColor" : null} onClick={(e) => setUp2(!upActive2)}/>

            {props.popSextile !== 'none' ?
                <Popularity><span>{props.popularity}</span></Popularity> :
                <p>{props.popularity}</p>
            }
            
            <KeyboardArrowUpIcon className={upActive3 ? "upColor" : null} onClick={(e) => setUp3(!upActive3)} />
            <Tooltip title="intelligence">
                <SvgIcon >
                    <Idea />
                </SvgIcon>
            </Tooltip>
            <KeyboardArrowDownIcon className={downActive2 ? "downColor" : null} onClick={(e) => setDown2(!downActive2)}/>

            {props.intelSextile !== 'none' ?
                <Popularity><span>{props.intelligence}</span></Popularity> :
                <p>{props.intelligence}</p>
            }
            
            <KeyboardArrowUpIcon className={downActive ? "upColor" : null} onClick={(e) => setDown(!downActive)} />
            <Tooltip title="funny">
                <SvgIcon>
                    <Funny />
                </SvgIcon>
            </Tooltip>
            <KeyboardArrowDownIcon className={downActive3 ? "downColor" : null} onClick={(e) => setDown3(!downActive3)}/>

            <p><span>{props.funny}</span></p>
        </div>
    );
};

export default VoteSection;