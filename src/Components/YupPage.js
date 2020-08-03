import React, { Component } from 'react';
import axios from 'axios';
import VoteSection from './VoteSection';
import { Grid, Card } from '@material-ui/core';

// export const displaySextileColor = (value) => {
//     // Hanlde the different sextile scenarios
//     switch (value) {
//         case 'first':
//             return '#00E4FF';
//         case 'second':
//             return '#00FFA6';
//         case 'third':
//             return '#3EFF00';
//         case 'fourth':
//             return '#FFFB00';
//         case 'fifth':
//             return '#FFAE00';
//         case 'sixth':
//             return '#FF6100';
//         default:
//             return '';
//     }
// }

//Hanlde the different sextile color scenarios
const displaySextileColor = {
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
            let info = await axios.get('https://api.yup.io/posts/post/12294')

            //Put all required values returned from the API into an array in component state
            let array = Object.entries(info.data.weights).map((el, i) => {
                return { name: el[0], weight: el[1], sextile: Object.values(info.data.sextiles)[i], up: false, down: false }
            })

            let options = array.filter(el => (el.name === 'funny' || el.name === 'intelligence' || el.name === 'popularity' ? el : null))

            this.setState({
                options: options,
                thumbnail: info.data.previewData.img
            })
        }
        catch (err) {
            alert('Something went wrong!')
        }
    }

    updateVote = (name, num) => {
        let copyOfOptions = this.state.options.map(val => {

            // Maybe refactor
            if (val.name === name) {
                // If we click down and the up button was already clicked
                if (val.up && num < 0) {
                    val.weight += num
                    val.up = !val.up
                }
                else if (val.down && num > 0) {
                    // If we click up and the down was already clicked
                    //Increment 
                    val.weight += num
                    val.down = !val.down
                }

                else if (val.up === false && val.down === false) {
                    val.weight += num
                    num === 1 ? val.up = !val.up : val.down = !val.down

                }
                else {
                    val.weight -= num
                    num === 1 ? val.up = !val.up : val.down = !val.down
                }
            }

            return val
        })
        this.setState({ options: copyOfOptions })
    }

    render() {
        return (
            <div>
                <Card id='card'>
                    <img src={this.state.thumbnail} alt='thumbnail for post' />
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <VoteSection options={this.state.options} displayColor={displaySextileColor}
                            updateVote={this.updateVote} />
                    </Grid>
                </Card>
            </div>
        );
    }
}

export default YupPage;
