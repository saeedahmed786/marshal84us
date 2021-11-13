import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar = () => {
    return (
        <div>
            <div className="site-menubar">
                <div className="site-menubar-body" style = {{marginTop: '32px'}}>
                    <div>
                        <div>
                            <ul className="site-menu" data-plugin="menu">
                                <li className="site-menu-item">
                                    <NavLink activeClassName = 'active-link' to = '/project-dashboard'>
                                        <i className="fas fa-th-large site-menu-icon"></i>
                                        <span className="site-menu-title">Dashboard</span>
                                    </NavLink>
                                </li>
                                <li className="site-menu-item">
                                    <NavLink activeClassName = 'active-link' to = '/projects'>
                                        <i className="fas fa-grip-lines site-menu-icon"></i>
                                        <span className="site-menu-title">Projects</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-gridmenu">
                <div>
                    <div>
                        <ul>
                            <li>
                                <a href="apps/mailbox/mailbox.html">
                                    <i className="icon wb-envelope"></i>
                                    <span>Mailbox</span>
                                </a>
                            </li>
                            <li>
                                <a href="apps/calendar/calendar.html">
                                    <i className="icon wb-calendar"></i>
                                    <span>Calendar</span>
                                </a>
                            </li>
                            <li>
                                <a href="apps/contacts/contacts.html">
                                    <i className="icon wb-user"></i>
                                    <span>Contacts</span>
                                </a>
                            </li>
                            <li>
                                <a href="apps/media/overview.html">
                                    <i className="icon wb-camera"></i>
                                    <span>Media</span>
                                </a>
                            </li>
                            <li>
                                <a href="apps/documents/categories.html">
                                    <i className="icon wb-order"></i>
                                    <span>Documents</span>
                                </a>
                            </li>
                            <li>
                                <a href="apps/projects/projects.html">
                                    <i className="icon wb-image"></i>
                                    <span>Project</span>
                                </a>
                            </li>
                            <li>
                                <a href="apps/forum/forum.html">
                                    <i className="icon wb-chat-group"></i>
                                    <span>Forum</span>
                                </a>
                            </li>
                            <li>
                                <a href="index.html">
                                    <i className="icon wb-dashboard"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
