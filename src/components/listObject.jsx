import React from 'react';

function ListObject({value = '', taskName, index, handleChange, handleTaskChange}) {
  return (
    <>
        <input id = {"tbox" + index} type = "text" value = {taskName}  onChange = {() => {handleTaskChange(index, document.querySelector("#tbox" + index).value)}}/>
        <input type = "checkbox" onChange = {() => {handleChange(index, value)}}/>
        <br/>
    </>
  );
}

export default ListObject;
