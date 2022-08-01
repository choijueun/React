import React from 'react'
import { Table } from 'reactstrap'

function ReactstrapTable() {
  return (
    <div>
        <h2>reactstrap: Table</h2>
        {/* <Table bordered> */}
        {/* <Table dark> */}
        {/* <Table borderless> */}
        {/* <Table size='sm' hover> */}
        <Table striped>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>생일</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>최주은</td>
                    <td>08/15</td>
                </tr>
                <tr>
                    <td>최보라</td>
                    <td>09/12</td>
                </tr>
                <tr>
                    <td>신혜정</td>
                    <td>10/27</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default ReactstrapTable