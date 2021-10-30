import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export const Categories = () => {
  const [categories, setCategories] = useState([]);



  return (
    <div className='categories'>
      {/* Show categories */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Main Categories</th>
            <th scope="col">Actions</th>
            <th scope="col">Sub-Categories</th>
          </tr>
        </thead>
        <tbody>
          {
            categories.length > 0 && categories.map((cat, index) => {
              return (
                <>
                  <tr key={cat._id} style={{ borderBottom: '1px solid black' }}>
                    <th>{index + 1}</th>
                    <th scope="col">{cat.name}</th>
                    <th>
                      <Link className='btn' style={{ textDecoration: 'none' }}><EditOutlined /></Link>
                      {
                        cat.children.length === 0 ?
                          <button className='btn'><DeleteOutlined /></button>
                          :
                          null
                      }
                    </th>
                    <table className="table subCat-table">
                      <tbody>
                        {
                          cat.children.length > 0 ?
                            cat.children.map((subCat, index) => {
                              return (

                                <tr key={subCat._id}>
                                  <th>{index + 1}</th>
                                  <th>{subCat.name}</th>
                                  <th>
                                    <Link className='btn' style={{ textDecoration: 'none' }}><EditOutlined /></Link>
                                    {
                                      subCat.children.length === 0 ?
                                        <button className='btn'><DeleteOutlined /></button>
                                        :
                                        null
                                    }
                                  </th>
                                </tr>
                              )
                            }) : null
                        }
                      </tbody>
                    </table>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
