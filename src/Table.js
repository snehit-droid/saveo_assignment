import React from 'react'

const Table = ({landmark}) => {
    return (
            <table>
                <tr>
                    <th>My Co-ordinates</th>
                    <th>DEFAULT</th>
                    <th>DEFAULT</th>
                </tr>
                {landmark.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{`${++idx})`} {item.location}</td>
                            <td>{item.lat}</td>
                            <td>{item.long}</td>
                        </tr>
                    )
                })}
            </table>
    )
}

export default Table
