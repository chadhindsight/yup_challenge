import React from 'react';
import { Tooltip, Grid } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import styled from "styled-components";
import '/assets/funny.svg';
import '/assets/popularity.svg';
import '/assets/intelligence.svg';

//Props.color will handle what color the underline should be based on what comes back from API call
const Text = styled.p`
    text-decoration: ${props => props.decoration};
    color: ${props => props.color}
 `;

const VoteSection = (props) => {

    const displayVotes = () => {
        // .weights & .sextiles
        return props.options?.map((stat, index) => {
            return (
                <div key={index}>

                    <Grid
                        container
                        direction="row">

                        <Grid item xs >
                            <KeyboardArrowUpIcon className={stat.up ? 'upColor' : null} title="up-arrow"
                                onClick={() => props.updateVote(stat.name, 1)} />
                            <Tooltip title={stat.name}>
                                <img id="bulb" src={`/assets/${stat.name}.svg`} alt={stat.name} />
                            </Tooltip>
                            <KeyboardArrowDownIcon className={stat.down ? 'downColor' : null} onClick={() => props.updateVote(stat.name, -1)} />
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
        <div className="vote-container">
            {displayVotes()}
        </div>
    );
};

export default VoteSection;