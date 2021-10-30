import React, { useState } from 'react'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const Users = () => {
  const [users, setUsers] = useState([]);


  return (
    <div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => {
                return (
                  <tr>
                    <th className='pt-4' scope="row">{index + 1}</th>
                    <td className='pt-4'>{user.firstName} {user.name}</td>
                    <td className='pt-4'>{user.email}</td>
                    <td className='pt-4'><span className='border p-2'>{user.role}</span></td>
                    <td className='pt-4'>
                      <a><EyeOutlined /></a>
                      <a className='ml-3'><EditOutlined /></a>
                      <a className='ml-3'><DeleteOutlined /></a>

                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>

    </div>
  )
}
