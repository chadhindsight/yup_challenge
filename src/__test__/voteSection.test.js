import React from 'react';
import VoteSection from '../Components/VoteSection';
import { displaySextileColor } from '../Components/YupPage';
import { render, fireEvent } from "@testing-library/react"

describe('vote section', () => {
    const levelColors = {
        first: '#00E4FF',
        second: '#00FFA6',
        third: '#3EFF00',
        fourth: '#FFFB00',
        fifth: '#FFAE00',
        sixth: '#FF6100'
    }
    test('Should return correct color', () => {
        expect(displaySextileColor('sixth')).toBe('#FF6100')
    })

    // test('Should be able to click arrow', () => {
    //     const fakeState = {}

    //     const component = render(<VoteSection {...fakeState}
    //         displayColor={displaySextileColor}
    //     />)
    //     const arrow = component.getByTitle('up-arrow')
    //     fireEvent.click(arrow)
    // })
})