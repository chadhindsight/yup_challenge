import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/core/SvgIcon';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styled from "styled-components";
import { ReactComponent as Funny } from '../assets/laughing.svg';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as Idea } from '../assets/idea.svg';


// The logic in template literal will handle what color the underline should be
const Text = styled.p`
    text-decoration: underline;
    color: ${props => props.color}
`;


const VoteSection = (props) => {
    const [down, setDown] = useState({ down: false })
    const [up, setUp] = useState({ up: false })

    const displayVotes = () => {
        return props?.stats?.map((stat, index) => {

            return (
                <div key={index}>
                    <KeyboardArrowUpIcon className={up === true ? 'upColor' : null} onClick={(e) => setUp(!up)} />
                    <Tooltip title={stat.title}>
                        <SvgIcon>
                            {
                                // Chained Ternaries
                                stat.icon === 'Heart' ? <Heart /> : stat.icon === 'Funny'
                                    ? <Funny /> : <Idea />
                            }
                        </SvgIcon>
                    </Tooltip>
                    <KeyboardArrowDownIcon className={down === true ? 'downColor' : null} onClick={(e) => setDown(!down)} />

                    {stat.categorySextile !== 'none' ?
                        <Text color={props.displayColor(stat.categorySextile)}><span>{stat.categoryRating}</span></Text> :
                        <p>{stat.categoryRating}</p>
                    }
                </div>
            )
        })
    }
    // console.log(props?.stats)
    return (
        <>
            {displayVotes()}
        </>
    );
};

export default VoteSection;