import React, { useState } from 'react';
import { Tooltip, SvgIcon, Grid } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styled from "styled-components";
import '/assets/funny.svg';
import '/assets/popularity.svg';
import '/assets/intelligence.svg';

// The props.color will handle what color the underline should be
const Text = styled.p`
    text-decoration: ${props => props.decoration};
    color: ${props => props.color}
 `;

const VoteSection = (props) => {

    const displayVotes = () => {
        // .weights & .sextiles
        console.log(props)
        // const arr = Object.values(props.data?.sextiles)

        // let obj = Object.entries(props.data?.weights).map((el, i) => {
        //     return { name: el[0], weight: el[1], sextile: Object.values(props.data?.sextiles)[i] }
        // })
        // console.log(arr)
        // let options = obj.filter(el => (el.name === 'funny' || el.name === 'intelligence' || el.name === 'popularity' ? el : null))

        return props.options?.map((stat, index) => {
            return (
                <div key={index} className='vote-section'>

                    <Grid
                        container
                        direction="row">

                        <Grid item xs >
                            <KeyboardArrowUpIcon title="up-arrow" />
                            <Tooltip title={stat.name}>
                                <img src={`/assets/${stat.name}.svg`} alt={stat.name} />
                            </Tooltip>
                            <KeyboardArrowDownIcon />
                        </Grid>
                        <Grid item xs >
                            <Text color={props.displayColor[stat.sextile]} decoration={props.displayColor[stat.sextile] ? 'underline' :
                                'none'}>
                                <span>{Math.round(stat.weight)}</span>
                            </Text>
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