import React from 'react';
import PropTypes from 'prop-types';

export default class Employee extends React.Component {
    componentWillMount() {
        this.props.employeeActions.fetchEmployee();
    }

    renderData(item) {
        return <div key={item.id}>{item.name}</div>;
    }

    render() {
        if (!this.props.employee) {
            return (
                <div>
                    Loading Employee...
                </div>
            )
        } else {
            return (
                <div className="">
                    {
                        this.props.employee.map((item, index) => {
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

Employee.propTypes = {
    employeeActions: PropTypes.object,
    employee: PropTypes.array
};