import React, { Component } from 'react';

class TodoslistHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
            </thead>
    );
    }
}

export default TodoslistHeader;