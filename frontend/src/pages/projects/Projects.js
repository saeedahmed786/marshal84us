import React from 'react'
import { Link } from 'react-router-dom'
import { Panel } from '../../components/projects/Panel'
import { Layout } from '../../layouts/Layout'

export const Projects = (props) => {
    return (
        <Layout sidebar>
            <div className="page">
                <div className="page-content container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Panel />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="">
                                <div className="panel-body">
                                    <div className="d-flex justify-content-between mb-30">
                                        <h3 className="">Project</h3>
                                        <button className="btn btn-primary" onClick={() => props.history.push('/project-type')}> Start New Project</button>
                                    </div>

                                    <div className="row ">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card ">
                                                <img className="card-img-top img-fluid w-full" src="global/photos/placeholder.png" alt="Card image cap" />
                                                <div className="card-block">
                                                    <h4 className="card-title">Project Name</h4>
                                                    <p className="card-text project-type">Project Type</p>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    <Link to="/text-gen" className="btn btn-primary mr-10">Edit Project</Link>
                                                    <a href="#" className="btn btn-primary">Dashboard</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="card">
                                                <img className="card-img-top img-fluid w-full" src="global/photos/placeholder.png" alt="Card image cap" />
                                                <div className="card-block">
                                                    <h4 className="card-title">Project Name</h4>
                                                    <p className="card-text project-type">Project Type</p>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    <Link to="/text-gen" className="btn btn-primary mr-10">Edit Project</Link>
                                                    <a href="#" className="btn btn-primary">Dashboard</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="card">
                                                <img className="card-img-top img-fluid w-full" src="global/photos/placeholder.png" alt="Card image cap" />
                                                <div className="card-block">
                                                    <h4 className="card-title">Project Name</h4>
                                                    <p className="card-text project-type">Project Type</p>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    <Link to="/text-gen" className="btn btn-primary mr-10">Edit Project</Link>
                                                    <a href="#" className="btn btn-primary">Dashboard</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="card">
                                                <img className="card-img-top img-fluid w-full" src="global/photos/placeholder.png" alt="Card image cap" />
                                                <div className="card-block">
                                                    <h4 className="card-title">Project Name</h4>
                                                    <p className="card-text project-type">Project Type</p>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    <Link to="/text-gen" className="btn btn-primary mr-10">Edit Project</Link>
                                                    <a href="#" className="btn btn-primary">Dashboard</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <footer className="site-footer">
                <div className="site-footer-legal">© 2018 <a href="http://themeforest.net/item/remark-responsive-bootstrap-admin-template/11989202">Remark</a></div>
                <div className="site-footer-right">
                    Crafted with <i className="red-600 wb wb-heart"></i> by <a href="https://themeforest.net/user/creation-studio">Creation Studio</a>
                </div>
            </footer>
            <div className="modal fade modal-danger" id="exampleModalDanger" aria-hidden="true"
                aria-labelledby="exampleModalDanger" role="dialog" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title">Warning are you sure you want to do this?</h4>
                        </div>
                        <div className="modal-body">
                            <p>This will delete all image assets associate with this element.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Yes Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
