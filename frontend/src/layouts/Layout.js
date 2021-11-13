import React from 'react'
import { Navbar } from '../components/projects/Navbar';
import { Sidebar } from '../components/projects/Sidebar';


export const Layout = (props) => {

    return (
        <div className='admin'>
            <Navbar />
            <div style={{ marginTop: '60px' }}>
                {
                    props.sidebar ?
                        <>
                            <div>
                                <Sidebar />
                            </div>
                            <div>
                                {props.children}
                            </div>
                        </>
                        :
                        props.children
                }
            </div>
        </div>
    )
}
