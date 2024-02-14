import React, { Component } from 'react'

export default class Table extends Component {
  render () {
    const { columns, data, rowKey } = this.props
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(record => {
              return (
                <tr key={record[rowKey]}>
                  {columns.map(column => {
                    return (
                      <td key={column.key}>
                        {column.render
                          ? column.render(
                              record[column.dataIndex],
                              column.dataIndex,
                              record
                            )
                          : record[column.dataIndex]}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
