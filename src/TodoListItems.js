import React, { Component } from 'react';
import FlipMove from 'react-flip-move';


class TodoListItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this)
    }

    /**
     * Методы, принимаемые от родительского компонента. Выделяют пункты по которым был произведет клик и отображают остальные пункты.     
     * */
    delete(key) {
        this.props.delete(key);
    }

    createTasks(item) {
        return <li key={item.key} onClick={() => this.delete(item.key)}>{item.text}</li>
    }
    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className='theList'>
                <FlipMove duration={250} easing="easing-out">
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}

export default TodoListItems;