import React, { Component } from 'react';
import classnames from 'classnames';

class Question extends Component {
  render() {

    const optionsObj = [
      {value: "1", text: "One"},
      {value: "2", text: "Two"},
      {value: "3", text: "THree"}
    ];

    const options = optionsObj.map(function(option, i) {
      return <option value={option.value} key={i}>{option.text}</option>
    });

    return(
      <div>
        <label>Question label </label>
        <select className={classnames('question-container')}>
          {options}
        </select>
      </div>
    )
  }
}

export default Question;