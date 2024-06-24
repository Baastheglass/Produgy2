import React from 'react';
import ListObject from './listObject';

function List({checkBoxValues, taskNames, handleChange, handleTaskChange}){
  return (
            <>
                <ul>
                    <li>    
                        {checkBoxValues.map((checkBoxValue, index) => (
                            
                                        <ListObject key = {index} value = {checkBoxValue} taskName = {taskNames[index]} index = {index} handleChange = {handleChange} handleTaskChange = {handleTaskChange}/>                
                        ))}
                    </li>
                    <br/>
                </ul>
            </>
        );
}

export default List;
