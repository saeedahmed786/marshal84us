import React from 'react'
import { GooglePlusOutlined, TwitterOutlined } from '@ant-design/icons'

export const Footer = () => {
    return (
        <div className = 'footer'>
            <div className='text-center mt-3 copyright mt-5'>
                <p>WEBSITE BY Creation Studio</p>
                <p>© 2018. All RIGHT RESERVED.</p>
            </div>
            <div className='icons d-flex justify-content-center gap-3'>
                <div>
                    <TwitterOutlined />
                </div>
                <div className = 'facebook'>
                    <i class="fab fa-facebook-f"></i>
                </div>
                <div className = 'google'>
                    <GooglePlusOutlined />
                </div>
            </div>
        </div>
    )
}
