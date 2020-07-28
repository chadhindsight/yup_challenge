import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as Funny } from '../assets/laughing.svg';
import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as Idea } from '../assets/idea.svg';


const VoteSection = (props) => {
    return (
        <div>
            <Tooltip title="popularity">
                <SvgIcon>
                    <Heart />
                </SvgIcon>
            </Tooltip>
            
            <Tooltip title="intelligence">
                <SvgIcon >
                    <Idea/>
                </SvgIcon>
            </Tooltip>

            <Tooltip title="funny">
                <SvgIcon>
                    <Funny />
                </SvgIcon>
            </Tooltip>
        </div>
    );
};

export default VoteSection;