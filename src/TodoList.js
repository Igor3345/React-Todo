import React, { Component } from 'react';
import TodoListItems from './TodoListItems';
import TodoItems from './TodoItems.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this)
    }
    /**
    * Метод удаляющая пункт из списка дел. Передается в дочерний компонент TodoListitems.
    */
    deleteItem(key) {
        let filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key)
        });
        this.setState({
            items: filteredItems,
        })
    }

    /**
     * Метод добавляющая пункт в список дел
     */
    addItem(e) {
        e.preventDefault();
        let itemArray = this.state.items;
        if (this._inputElement.value !== '') {
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });
            this._inputElement.value = '';
        }
    }
    render() {
        return (
            <div className='todoListMain'>
                <div className='header'>
                    <form onSubmit={this.addItem}>
                        <input placeholder='Введите задачу' ref={(a) => this._inputElement = a}></input>
                        <button type='submit'>ok</button>
                    </form>
                    <TodoListItems entries={this.state.items} delete={this.deleteItem} />
                </div>
            </div>
        );
    }
}
export default TodoList;