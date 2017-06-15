/* 2017-5-3
 * created by Frank-2
 * */
import React, {Component} from 'react';

export default class ImageSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {'class': 'multi-lang-france'};

        this.onSelectChange = this.onSelectChange.bind(this);
    }

    onSelectChange(e) {
        console.log("change select", e.target.value);
        if (e.target.value == 'english')
            this.setState({'class': 'multi-lang-english'});
        else if (e.target.value == 'france')
            this.setState({'class': 'multi-lang-france'});
    }

    render() {
        return (
            <select className={this.state.class} onChange={this.onSelectChange}>
                <option value="france">France</option>
            </select>
        );
    }
}
