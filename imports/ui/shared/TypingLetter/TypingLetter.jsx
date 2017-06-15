/* 2017-5-4
 * created by Frank-2
 * */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Task component - represents a single todo item
export default class TypingLetter extends Component {
    render() {
        return (
            <span id={"text_" + this.props.itemId} className={this.props.lettertype}>{ this.props.letter }</span>
        );
    }
}

TypingLetter.propTypes = {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    letter: PropTypes.string.isRequired,
    lettertype: PropTypes.string.isRequired,
    itemId: PropTypes.number.isRequired,
};