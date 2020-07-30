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
const displaySextileColor2 = {

    first: '#00E4FF',
    second: '#00FFA6',
    third: '#3EFF00',
    fourth: '#FFFB00',
    fifth: '#FFAE00',
    sixth: '#FF6100',
    none: ''

}


class YupPage extends Component {
    // Initial empty state
    state = {}

    async componentDidMount() {
        try {
            let info = await axios.get('https://api.yup.io/posts/post/12754')

            //Put all required values returned from the API into arrays in component state
            let array1 = Object.entries(info.data.weights).map((el, i) => {
                return { name: el[0], weight: el[1], sextile: Object.values(info.data.sextiles)[i] }
            })
            let options = array1.filter(el => (el.name === 'funny' || el.name === 'intelligence' || el.name === 'popularity' ? el : null))

            //Put all required values returned from the API into component state
            this.setState({
                data: info.data,
                options: options,
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
                    <VoteSection options={this.state.options}

                        displayColor={displaySextileColor2} />
                </Grid>
            </div>
        );
    }
}

export default YupPage;
{/* <VoteSection stats={this.state.stats}
    displayColor={displaySextileColor} /> */}
