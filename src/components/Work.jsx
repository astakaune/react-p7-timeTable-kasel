import React from 'react';

function Work(props){
        return (
            <tr>
                <td>{props.date}</td>
                <td>{props.company}</td>
                <td>{props.service}</td>
                <td>{props.description}</td>
                <td>{props.startTime}</td>
                <td>{props.endTime}</td>
            </tr>
            // <td>
            //     <button></button>
            //     <button></button>
            // </td>
        )
    }

export default Work;
