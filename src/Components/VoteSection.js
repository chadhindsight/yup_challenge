import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/core/SvgIcon';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { ReactComponent as Funny } from '../assets/laughing.svg';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as Idea } from '../assets/idea.svg';
import styled from "styled-components";


// The logic in template literal will handle what color the underline should be
const Text = styled.p`
    text-decoration: underline;
    color: ${props => props.color}
`;


const VoteSection = (props) => {
    const [down, setDown] = useState({ down: false })
    const [up, setUp] = useState({ up: false })

    const displayVotes = () => {
        return props?.stats?.map(stat => {
            return (
                <div key >
                    <KeyboardArrowUpIcon className={up ? 'upColor' : null} onClick={(e) => setUp(!up)} />
                    <Tooltip >
                        <SvgIcon >
                            <Idea />
                        </SvgIcon>
                    </Tooltip>
                    <KeyboardArrowDownIcon className={down ? 'downColor' : null} onClick={(e) => setDown(!down)} />

                    {stat.categorySextile !== 'none' ?
                        <Text color={props.displayColor(stat.categorySextile)}><span>{stat.categoryRating}</span></Text> :
                        <p>{stat.categoryRating}</p>
                    }
                </div>
            )
        })
    }
    console.log(props?.stats)
    return (
        <>
            {displayVotes()}
        </>
    );
};

export default VoteSection;