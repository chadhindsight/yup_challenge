import React, { Component } from 'react';
import axios from 'axios';
import VoteSection from './VoteSection';
import { Grid } from '@material-ui/core';

export const displaySextileColor = (value) => {
    // Hanlde the different sextile scenarios
    switch (value) {
        case 'first':
            return '#00E4FF';
        case 'second':
            return '#00FFA6';
        case 'third':
            return '#3EFF00';
        case 'fourth':
            return '#FFFB00';
        case 'fifth':
            return '#FFAE00';
        case 'sixth':
            return '#FF6100';
        default:
            return 'nothing';
    }
}

class YupPage extends Component {
    // Initial empty state
    state = {}

    async componentDidMount() {
        try {
            let info = await axios.get('https://api.yup.io/posts/post/12754')
            console.log(info.data)

            //Put all required values returned from the API into component state
            this.setState({
                thumbnail: info.data.previewData.img,
                stats: [
                    {
                        categoryRating: Math.floor(info.data.weights.popularity),
                        categorySextile: info.data.sextiles.popularity,
                        title: 'popularity',
                        icon: 'Heart'

                    },
                    {
                        categoryRating: Math.floor(info.data.weights.intelligence),
                        categorySextile: info.data.sextiles.intelligence,
                        title: 'intelligence',
                        icon: 'Idea'
                    },
                    {
                        categoryRating: Math.floor(info.data.weights.funny),
                        categorySextile: info.data.sextiles.funny,
                        title: 'funny',
                        icon: 'Funny'
                    }
                ]
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <img src={this.state.thumbnail} alt='thumbnail for post' />
                    <VoteSection stats={this.state.stats}
                        displayColor={displaySextileColor} />
                </Grid>
            </div>
        );
    }
}

export default YupPage;
