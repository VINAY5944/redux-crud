// View.js

import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteuser } from '../reduxcomponents/userreducer';

const View = () => {
  const users = useSelector((state) => state.users.data);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const edit = (id) => {
    nav(`/edit/${id}`);
  };

  const del = (id) => {
    dispatch(deleteuser({ id }));
  };

  return (
    <div>
      crud with redux
      <Button variant="danger" onClick={() => nav('/create')}>
        create
      </Button>{' '}
      <Table responsive="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => edit(item.id)}
                >
                  edit
                </Button>{' '}
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => del(item.id)}
                >
                  delete
                </Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default View;
