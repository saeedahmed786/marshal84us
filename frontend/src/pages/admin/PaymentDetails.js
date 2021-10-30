import React from 'react'
import { Link } from 'react-router-dom'

export const PaymentDetails = () => {
    return (
        <div className='payment-details bg-light p-4 px-5' style={{ height: '100vh' }}>
            <div className="mt-4 bg-white border border-2 rounded p-3 pr-0">
                <h4 className='ml-1 heading'>Payment Details</h4>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Date</th>
                            <th scope="col">Transaction ID</th>
                            <th scope="col">Type</th>
                            <th scope="col">Name</th>
                            <th scope="col">Value</th>
                            <th scope="col">Return</th>
                            <th scope="col" className='text-center'>Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>14/01/2019</td>
                            <td>12345678</td>
                            <td>New York</td>
                            <td>Bitcoin</td>
                            <td>$120</td>
                            <td>#18000</td>
                            <td className=''><Link className='btn btn-success rounded-pill w-100'>Completed</Link></td>
                            <td><Link>...</Link></td>
                        </tr>
                        <tr>
                            <td>14/01/2019</td>
                            <td>12345678</td>
                            <td>New York</td>
                            <td>Bitcoin</td>
                            <td>$120</td>
                            <td>#18000</td>
                            <td className=''><Link className='btn rounded-pill w-100 text-white' style={{ background: '#FB6D3A' }}>Failed</Link></td>
                            <td><Link>...</Link></td>
                        </tr>
                        <tr>
                            <td>14/01/2019</td>
                            <td>12345678</td>
                            <td>New York</td>
                            <td>Bitcoin</td>
                            <td>$120</td>
                            <td>#18000</td>
                            <td className=''><Link className='btn btn-success rounded-pill w-100 text-white' style={{ background: '#00486D' }}>In Progess</Link></td>
                            <td><Link>...</Link></td>
                        </tr>
                        <tr>
                            <td>14/01/2019</td>
                            <td>12345678</td>
                            <td>New York</td>
                            <td>Bitcoin</td>
                            <td>$120</td>
                            <td>#18000</td>
                            <td className=''><Link className='btn btn-success rounded-pill w-100 bg-success'>Completed</Link></td>
                            <td><Link>...</Link></td>
                        </tr>
                        <tr>
                            <td>14/01/2019</td>
                            <td>12345678</td>
                            <td>New York</td>
                            <td>Bitcoin</td>
                            <td>$120</td>
                            <td>#18000</td>
                            <td className=''><Link className='btn btn-success rounded-pill w-100'>Download</Link></td>
                            <td><Link>...</Link></td>
                        </tr>
                        <tr>
                            <td>14/01/2019</td>
                            <td>12345678</td>
                            <td>New York</td>
                            <td>Bitcoin</td>
                            <td>$120</td>
                            <td>#18000</td>
                            <td className=''><Link className='btn btn-success rounded-pill w-100'>Download</Link></td>
                            <td><Link>...</Link></td>
                        </tr>
                    </tbody>
                </table>
                <div className='text-center'><button className='btn rounded px-5 text-white'>View More</button></div>
            </div>
        </div>
    )
}
