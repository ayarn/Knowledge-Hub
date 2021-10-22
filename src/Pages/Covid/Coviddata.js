import React from 'react'

const Coviddata = ({ Country, cases, recovered }) => {
    return (
        <div>
            <table>
                <tr>
                    <td>{Country}</td>
                    <td>{cases}</td>
                    <td>{recovered}</td>
                </tr>
            </table>
        </div>
    )
}

export default Coviddata
