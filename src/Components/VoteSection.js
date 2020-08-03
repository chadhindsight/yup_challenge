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
        return props.options?.map((item, index) => {
            return (
                <div key={index}>

                    <Grid
                        container
                        direction="row">

                        <Grid item xs >
                            <KeyboardArrowUpIcon className={item.up ? 'upColor' : null} title="up-arrow"
                                onClick={() => props.updateVote(item.name, 1)} />
                            <Tooltip title={item.name}>
                                <img id="bulb" src={`/assets/${item.name}.svg`} alt={item.name} />
                            </Tooltip>
                            <KeyboardArrowDownIcon className={item.down ? 'downColor' : null} onClick={() => props.updateVote(item.name, -1)} />
                        </Grid>
                        <Grid item xs >
                            <Text color={props.displayColor[item.sextile]} decoration={props.displayColor[item.sextile] ? 'underline' :
                                'none'}>
                                <span>{Math.round(item.weight)}</span>
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