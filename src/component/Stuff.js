import PropTypes from 'prop-types';
import React from 'react';

export default class Stuff extends React.Component {
    componentWillMount() {
        this.props.stuffActions.fetchStuff();
    }

    renderData(item) {
        return <div key={item.id}>{item.name}</div>;
    }

    render() {
        if (!this.props.stuff) {
            return (
                <div>
                    Loading Stuff...
                </div>
            )
        } else {
            return (
                <div className="">
                    {
                        this.props.stuff.map((item, index) => {
                            return (
                                this.renderData(item)
                            );
                        })
                    }
                </div>
            )
        }
    }
}

Stuff.propTypes = {
    stuffActions: PropTypes.object,
    stuff: PropTypes.array
};