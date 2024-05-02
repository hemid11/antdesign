import React from 'react'
import Table from "antd"
const MyTable = () => {
  return (
    <Table columns={columns} dataSource={data} onChange={onChange} />
  )
}

export default MyTable