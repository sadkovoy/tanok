import React from 'react'
import tanokComponent from '../../lib/component.js';
import {actionIs, filter, debounce} from '../../lib/helpers.js';

/*
  Model
*/
export function init() {
  return {
    count: 0,
  }
};

/*
  Update
*/

export class Counter extends TanokDispatcher {
  @on('init')
  init(payload, state) {
    state.count = 10;
    return [state];
  },

  @on('inc')
  inc(payload, state) {
    state.count += 1;
    return [state];
  },

  @on('dec')
  dec(payload, state) {
    state.count -= 1;
    return [state];
  },

}

/*
  View
*/
class CounterView extends React.Component {
  constructor(props) {
    this.onPlusClick = this.onPlusClick.bind(this);
    this.onMinusClick = this.onMinusClick.bind(this);
  }
  onPlusClick() {
    this.send('inc')
  }
  onMinusClick() {
    this.send('dec')
  }
  render() {
    return (
      <div>
        <button onClick={this.onPlusClick}>+</button>
        <span>{this.props.count}</span>
        <button onClick={this.onMinusClick}>-</button>
      </div>
    )
    }
}

export const Counter = tanokComponent(Counter)
