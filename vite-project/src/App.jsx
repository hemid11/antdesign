
import React, { useState, useEffect } from 'react';
import { Table, Button, message } from 'antd';
import axios from 'axios';

const App = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('https://northwind.vercel.app/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const deleteOrder = async (id) => {
    try {
      await axios.delete(`https://northwind.vercel.app/api/orders/${id}`);
      fetchOrders();
      message.success('deleted');
    } catch (error) {
      console.error('Error', error);
      message.error('Failed');
    }
  };
  const columns = [
    {
      title: 'Customer ID',
      dataIndex: 'customerId',
      key: 'customerId',
    },
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
    },
    {
      title: 'Ship Via',
      dataIndex: 'shipVia',
      key: 'shipVia',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button onClick={() => deleteOrder(record.id)}>Delete</Button>
          {}
          <Button>Update</Button>
        </span>
      ),
    },
  ];


  return (
    <div>
      <h1>Orders</h1>
      <Table dataSource={orders} columns={columns} />
    </div>
  );
};

export default App;
