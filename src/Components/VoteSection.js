import React, { useState } from 'react';
import { Tooltip, SvgIcon, Grid } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styled from "styled-components";
import { ReactComponent as Funny } from '../assets/laughing.svg';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as Idea } from '../assets/idea.svg';

// The props.color will handle what color the underline should be
const Text = styled.p`
    text-decoration: underline;
    color: ${props => props.color}
`;

const VoteSection = (props) => {
    // arr of booleans 
    const [active, setActive] = useState([false, false, false])
    const [down, setDown] = useState({ down: false })
    const [up, setUp] = useState({ up: false })


    const displayVotes = () => {
        return props?.stats?.map((stat, index) => {
            return (
                <div key={index} className='vote-section'>
                    <Grid
                        container
                        direction="row">

                        <Grid item xs direction="column">
                            <KeyboardArrowUpIcon title="up-arrow"
                                className={up === true ? `upColor` : null} onClick={(e) => setUp(!up)} />
                            <Tooltip title={stat.title}>
                                <SvgIcon>
                                    {
                                        // Chained Ternaries determine what svg to display
                                        stat.icon === 'Heart' ? <Heart /> : stat.icon === 'Funny'
                                            ? <Funny /> : <Idea />
                                    }
                                </SvgIcon>
                            </Tooltip>
                            <KeyboardArrowDownIcon className={down === true ? 'downColor' : null} onClick={(e) => setDown(!down)} />
                        </Grid>
                        <Grid item xs direction="column">
                            {stat.categorySextile !== 'none' ?
                                <Text color={props.displayColor(stat.categorySextile)}><span>{stat.categoryRating}</span></Text> :
                                <p>{stat.categoryRating}</p>
                            }
                        </Grid>
                    </Grid>
                </div >
            )
        })
    }
    return (
        <>
            {displayVotes()}
        </>
    );
};

export default VoteSection;