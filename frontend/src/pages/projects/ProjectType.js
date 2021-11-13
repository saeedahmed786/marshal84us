import React from 'react'
import { Panel } from '../../components/projects/Panel'
import { Layout } from '../../layouts/Layout'

export const ProjectType = () => {
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
                                <div className="panel-body ">
                                    <h3 className="mb-40">Project Type</h3>

                                    <div className="row ">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="card ">
                                                <div className="card-block">
                                                    <h4 className="card-title">Layerd PNG NFT</h4>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    <button className="btn btn-primary" data-target="#addNewProject" data-toggle="modal" type="button">Start Project</button>


                                                    <div className="modal fade modal-primary" id="addNewProject" aria-hidden="true"
                                                        aria-labelledby="exampleModalTitle" role="dialog" tabindex="-1">
                                                        <div className="modal-dialog modal-simple">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">×</span>
                                                                    </button>
                                                                    <h4 className="modal-title">Project Type Name</h4>
                                                                </div>
                                                                <div className="modal-body col-md-10 mt-10">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label" for="inputProjectLogo">Logo </label>
                                                                        <input type="file" id="input-file-now" data-plugin="dropify" data-default-file="" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="form-control-label" for="inputProjectName">Project Name</label>
                                                                        <input type="text" className="form-control" id="inputProjectName" name="inputProjectName" placeholder="Project Name" autocomplete="off" />
                                                                    </div>
                                                                    <div className="form-group mb-0">
                                                                        <label className="form-control-label" for="inputProjectDiscription">Project Discription</label>
                                                                        <textarea className="form-control" id="inputProjectDiscription" name="inputProjectDiscription" placeholder="Project Discription" rows="4" autocomplete="off"></textarea>
                                                                    </div>
                                                                </div>
                                                                <div className="modal-footer justify-content-start">
                                                                    <button type="button" className="btn btn-primary" data-dismiss="modal" >Save changes</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-lg-4 col-md-6">
                                            <div className="card ">
                                                <div className="card-block">
                                                    <h4 className="card-title">Layerd PNG NFT</h4>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    <button className="btn btn-primary" data-target="#addNewProject" data-toggle="modal" type="button">Start Project</button>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-lg-4 col-md-6">
                                            <div className="card ">
                                                <div className="card-block">
                                                    <h4 className="card-title">Layerd PNG NFT</h4>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    <button className="btn btn-primary" data-target="#addNewProject" data-toggle="modal" type="button">Start Project</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="card ">
                                                <div className="card-block">
                                                    <h4 className="card-title">Layerd PNG NFT</h4>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    <button className="btn btn-primary" data-target="#addNewProject" data-toggle="modal" type="button">Start Project</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="card ">
                                                <div className="card-block">
                                                    <h4 className="card-title">Layerd PNG NFT</h4>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                    <button className="btn btn-primary" data-target="#addNewProject" data-toggle="modal" type="button">Start Project</button>
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
