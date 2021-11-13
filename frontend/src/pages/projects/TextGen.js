import React from 'react'
import { Panel } from '../../components/projects/Panel'
import { Layout } from '../../layouts/Layout'

export const TextGen = () => {
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
                        <div className="col-md-6">
                            <div className="card card-block p-30 bg-blue-600">
                                <div className="card-watermark darker font-size-80 m-15"><i className="icon wb-clipboard" aria-hidden="true"></i></div>
                                <div className="counter counter-md counter-inverse text-left">
                                    <div className="counter-number-group">
                                        <span className="counter-number">12</span>
                                        <span className="counter-number-related text-capitalize">Elements</span>
                                    </div>
                                    <div className="counter-label text-capitalize">in design</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card card-block p-30 bg-red-600">
                                <div className="card-watermark darker font-size-80 m-15"><i className="icon wb-users" aria-hidden="true"></i></div>
                                <div className="counter counter-md counter-inverse text-left">
                                    <div className="counter-number-group">
                                        <span className="counter-number">50</span>
                                        <span className="counter-number-related text-capitalize">Assets</span>
                                    </div>
                                    <div className="counter-label text-capitalize">in Album</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card card-block p-30 bg-green-600">
                                <div className="card-watermark darker font-size-60 m-15"><i className="icon wb-musical" aria-hidden="true"></i></div>
                                <div className="counter counter-md counter-inverse text-left">
                                    <div className="counter-number-group">
                                        <span className="counter-number">10,000 </span>
                                        <span className="counter-number-related text-capitalize">Unique Images</span>
                                    </div>
                                    <div className="counter-label text-capitalize">Based on maximum asset rarity</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card card-block p-30 bg-purple-600">
                                <div className="card-watermark lighter font-size-60 m-15"><i className="icon wb-image" aria-hidden="true"></i></div>
                                <div className="counter counter-md counter-inverse text-left">
                                    <div className="counter-number-wrap font-size-30">
                                        <span className="counter-number">3854</span>
                                        <span className="counter-number-related text-capitalize">Unique Images</span>
                                    </div>
                                    <div className="counter-label text-capitalize">Based on maximum asset rarity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="panel">
                                <div className="panel-body">
                                    <h3 className="">Project Details</h3>
                                    <p>This information will be used in the project</p>
                                    <form>
                                        <div className="form-group">
                                            <label className="form-control-label" for="inputProjectName">Project Name</label>
                                            <input type="text" className="form-control" id="inputProjectName" name="inputProjectName" placeholder="Project Name" autocomplete="off" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-control-label" for="inputProjectDiscription">Project Discription</label>
                                            <textarea className="form-control" id="inputProjectDiscription" name="inputProjectDiscription" placeholder="Project Discription" rows="4" autocomplete="off"></textarea>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label className="form-control-label" for="inputNumberOfStoryToCreate">Total Number Of Story To Create </label>
                                                <input type="number" className="form-control" id="inputNumberOfStoryToCreate" name="inputNumberOfStoryToCreate" placeholder="10,000" autocomplete="off" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className="form-control-label" for="inputStartAtStoryNumber">Start At Story Number</label>
                                                <input type="number" className="form-control" id="inputStartAtStoryNumber" name="inputStartAtStoryNumber" placeholder="5,000" autocomplete="off" />
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="panel">
                                <div className="panel-body">

                                    <h3 className="">Story To Image Setting</h3>
                                    <p>Set your image and font parameter</p>

                                    <div className="row align-items-end">

                                        <div className="form-group col-md-6">
                                            <label className="form-control-label" for="inputBackgroundImage">Background Image </label>
                                            <input type="file" id="input-file-now" data-plugin="dropify" data-default-file="" />
                                        </div>
                                        <div className="form-group col-md-6 align-items-end">
                                            <label className="form-control-label" for="inputBackgroundColor">Background Color It no image is set</label>
                                            <br />
                                            <sl-color-picker format="hex" value="#4a90e2"></sl-color-picker>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="form-control-label" for="inputFonttype">Font Type </label>
                                            <div className="dropdown">
                                                <button type="button " className="btn btn-outline btn-default dropdown-toggle d-flex justify-content-between align-items-center btn-block" id="exampleHoverDropdown3" data-hover="dropdown" data-toggle="dropdown" aria-expanded="false">
                                                    Select a type
                                                </button>
                                                <div className="dropdown-menu btn-block" aria-labelledby="exampleHoverDropdown3" role="menu" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: '0px', left: '0px', transform: 'translate3d(0px, -188px, 0px)' }}>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Action</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Another action</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Something else here</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label className="form-control-label" for="inputFontSize">Font Size </label>
                                            <div className="dropdown">
                                                <button type="button " className="btn btn-outline btn-default dropdown-toggle d-flex justify-content-between align-items-center btn-block" id="exampleHoverDropdown3" data-hover="dropdown" data-toggle="dropdown" aria-expanded="false">
                                                    Select a type
                                                </button>
                                                <div className="dropdown-menu btn-block" aria-labelledby="exampleHoverDropdown3" role="menu" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: '0px', left: '0px', transform: 'translate3d(0px, -188px, 0px)' }}>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">14</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">16</a>
                                                    <a className="active dropdown-item" href="javascript:void(0)" role="menuitem">18</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">20</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="form-control-label" for="inputFontWeight">Font Weight </label>
                                            <div className="dropdown">
                                                <button type="button " className="btn btn-outline btn-default dropdown-toggle d-flex justify-content-between align-items-center btn-block" id="exampleHoverDropdown3" data-hover="dropdown" data-toggle="dropdown" aria-expanded="false">
                                                    Select a type
                                                </button>
                                                <div className="dropdown-menu btn-block" aria-labelledby="exampleHoverDropdown3" role="menu" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: '0px', left: '0px', transform: 'translate3d(0px, -188px, 0px)' }}>
                                                    <a className="active dropdown-item" href="javascript:void(0)" role="menuitem">Normal</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Semi Bold</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Bold</a>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="form-control-label" for="inputLineHieght">Line Hieght </label>
                                            <div className="dropdown">
                                                <button type="button " className="btn btn-outline btn-default dropdown-toggle d-flex justify-content-between align-items-center btn-block" id="exampleHoverDropdown3" data-hover="dropdown" data-toggle="dropdown" aria-expanded="false">
                                                    Select a type
                                                </button>
                                                <div className="dropdown-menu btn-block" aria-labelledby="exampleHoverDropdown3" role="menu" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: '0px', left: '0px', transform: 'translate3d(0px, -188px, 0px)' }}>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">26</a>
                                                    <a className="active dropdown-item" href="javascript:void(0)" role="menuitem">28</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">30</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">32</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="form-control-label" for="inputMarginAllSides">Margin-All Sides </label>
                                            <div className="dropdown">
                                                <button type="button " className="btn btn-outline btn-default dropdown-toggle d-flex justify-content-between align-items-center btn-block" id="exampleHoverDropdown3" data-hover="dropdown" data-toggle="dropdown" aria-expanded="false">
                                                    Select a type
                                                </button>
                                                <div className="dropdown-menu btn-block" aria-labelledby="exampleHoverDropdown3" role="menu" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: '0px', left: '0px', transform: 'translate3d(0px, -188px, 0px)' }}>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">2</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">4</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">6</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">8</a>
                                                    <a className="active dropdown-item" href="javascript:void(0)" role="menuitem">10</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">12</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="form-control-label" for="inputTextAlign">Text Align </label>
                                            <div className="dropdown">
                                                <button type="button " className="btn btn-outline btn-default dropdown-toggle d-flex justify-content-between align-items-center btn-block" id="exampleHoverDropdown3" data-hover="dropdown" data-toggle="dropdown" aria-expanded="false">
                                                    Select a type
                                                </button>
                                                <div className="dropdown-menu btn-block" aria-labelledby="exampleHoverDropdown3" role="menu" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: '0px', left: '0px', transform: 'translate3d(0px, -188px, 0px)' }}>
                                                    <a className="active dropdown-item" href="javascript:void(0)" role="menuitem">Left</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Center</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Right</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Justify</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="form-control-label" for="inputImageWidth">Image Width </label>
                                            <div className="dropdown">
                                                <button type="button " className="btn btn-outline btn-default dropdown-toggle d-flex justify-content-between align-items-center btn-block" id="exampleHoverDropdown3" data-hover="dropdown" data-toggle="dropdown" aria-expanded="false">
                                                    Select a type
                                                </button>
                                                <div className="dropdown-menu btn-block" aria-labelledby="exampleHoverDropdown3" role="menu" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: '0px', left: '0px', transform: 'translate3d(0px, -188px, 0px)' }}>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">100</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">200</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">300</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">400</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">500</a>
                                                    <a className="active dropdown-item" href="javascript:void(0)" role="menuitem">600</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">700</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">800</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">900</a>
                                                    <a className="dropdown-item" href="javascript:void(0)" role="menuitem">1000</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="form-control-label" for="inputTextAlign">Font Color </label>
                                            <br />
                                            <sl-color-picker format="hex" value="#4a90e2"></sl-color-picker>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="panel">
                                <div className="panel-body">
                                    <h3 className="">Edit Art Elements</h3>
                                    <p>This information will be used in the project</p>

                                    <div className="example table-responsive">
                                        <table id="tableditWithEditButtonOnly" className="table table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th className="w-50">
                                                    </th>
                                                    <th>
                                                        Elements
                                                    </th>
                                                    <th>
                                                        Spin Text
                                                    </th>
                                                    <th className="hidden-sm-down w-200">
                                                        Asset Rairty
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-section active" data-plugin="tableSection">
                                                <tr>
                                                    <td className="text-center"><i className="table-section-arrow"></i></td>
                                                    <td className="font-weight-medium">
                                                        Background
                                                    </td>
                                                    <td className="font-weight-medium" >
                                                        Spin Text
                                                    </td>
                                                    <td className="font-weight-medium">
                                                        Asset Rairty
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td className="font-weight-medium text-success">
                                                        Beach
                                                    </td>
                                                    <td>
                                                        On a beautiful beach
                                                    </td>
                                                    <td>
                                                        5,000
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td className="font-weight-medium text-success">
                                                        Sand
                                                    </td>
                                                    <td>
                                                        In the sand and sun
                                                    </td>
                                                    <td>
                                                        1,000
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td className="font-weight-medium text-success">
                                                        Cave
                                                    </td>
                                                    <td>
                                                        Deep in a dark cave
                                                    </td>
                                                    <td>
                                                        8,524
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody className="table-section" data-plugin="tableSection">
                                                <tr>
                                                    <td className="text-center"><i className="table-section-arrow"></i></td>
                                                    <td className="font-weight-medium">
                                                        Eyes
                                                    </td>
                                                    <td className="font-weight-medium">
                                                        Spin Text
                                                    </td>
                                                    <td className="font-weight-medium">
                                                        Asset Rairty
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td className="font-weight-medium text-success">
                                                        Beach
                                                    </td>
                                                    <td>
                                                        On a beautiful beach
                                                    </td>
                                                    <td>
                                                        5,000
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td className="font-weight-medium text-success">
                                                        Sand
                                                    </td>
                                                    <td>
                                                        On a beautiful beach
                                                    </td>
                                                    <td>
                                                        5,000
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td className="font-weight-medium text-success">
                                                        Cave
                                                    </td>
                                                    <td>
                                                        On a beautiful beach
                                                    </td>
                                                    <td>
                                                        7,000
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody className="table-section" data-plugin="tableSection">
                                                <tr>
                                                    <td className="text-center"><i className="table-section-arrow"></i></td>
                                                    <td className="font-weight-medium">
                                                        Mouth
                                                    </td>
                                                    <td className="font-weight-medium">
                                                        Spin Text
                                                    </td>
                                                    <td className="font-weight-medium">
                                                        Asset Rairty
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td className="font-weight-medium text-success">
                                                        Beach
                                                    </td>
                                                    <td>
                                                        On a beautiful beach
                                                    </td>
                                                    <td>
                                                        5,000
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td className="font-weight-medium text-success">
                                                        Sand
                                                    </td>
                                                    <td>
                                                        On a beautiful beach
                                                    </td>
                                                    <td>
                                                        10,000
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td className="font-weight-medium text-success">
                                                        Cave
                                                    </td>
                                                    <td>
                                                        On a beautiful beach
                                                    </td>
                                                    <td>
                                                        5,000
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="w-500 w-only-xs-300 ml-auto mr-auto">
                                <button type="button" className="btn btn-primary w-p100"><i className="icon wb-chevron-down-mini" aria-hidden="true"></i> Generate Sample Set Of Images</button>
                                <p className="px-15 pt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, ea.</p>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="panel panel-body ">
                                <h3 className="">Art Elements</h3>
                                <p>This information will be used in the project</p>

                                <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-6">
                                        <div className="example-wrap">
                                            <div className="example example-dropdown">
                                                <div className="dropdown btn-block ">
                                                    <div className="">
                                                        <button type="button " className="btn btn-outline btn-default dropdown-toggle btn-block" id="exampleHoverDropdown3" data-hover="dropdown" data-toggle="dropdown" aria-expanded="false">
                                                            Background
                                                        </button>
                                                        <div className="dropdown-menu btn-block" aria-labelledby="exampleHoverDropdown3" role="menu" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: '0px', left: '0px', transform: 'translate3d(0px, -188px, 0px)' }}>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Action</a>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Another action</a>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Something else here</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Separated link</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6">
                                        <div className="example-wrap">
                                            <div className="example example-dropdown">
                                                <div className="dropdown btn-block ">
                                                    <div className="">
                                                        <button type="button " className="btn btn-outline btn-default dropdown-toggle btn-block" id="exampleHoverDropdown3" data-hover="dropdown" data-toggle="dropdown" aria-expanded="false">
                                                            Headdress
                                                        </button>
                                                        <div className="dropdown-menu btn-block" aria-labelledby="exampleHoverDropdown3" role="menu" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: '0px', left: '0px', transform: 'translate3d(0px, -188px, 0px)' }}>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Action</a>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Another action</a>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Something else here</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Separated link</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6">
                                        <div className="example-wrap">
                                            <div className="example example-dropdown">
                                                <div className="dropdown btn-block ">
                                                    <div className="">
                                                        <button type="button " className="btn btn-outline btn-default dropdown-toggle btn-block" id="exampleHoverDropdown3" data-hover="dropdown" data-toggle="dropdown" aria-expanded="false">
                                                            Eyes
                                                        </button>
                                                        <div className="dropdown-menu btn-block" aria-labelledby="exampleHoverDropdown3" role="menu" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: '0px', left: '0px', transform: 'translate3d(0px, -188px, 0px)' }}>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Action</a>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Another action</a>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Something else here</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Separated link</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6">
                                        <div className="example-wrap">
                                            <div className="example example-dropdown">
                                                <div className="dropdown btn-block ">
                                                    <div className="">
                                                        <button type="button " className="btn btn-outline btn-default dropdown-toggle btn-block" id="exampleHoverDropdown3" data-hover="dropdown" data-toggle="dropdown" aria-expanded="false">
                                                            Onclick open
                                                        </button>
                                                        <div className="dropdown-menu btn-block" aria-labelledby="exampleHoverDropdown3" role="menu" x-placement="top-start" style={{ position: "absolute", willChange: "transform", top: '0px', left: '0px', transform: 'translate3d(0px, -188px, 0px)' }}>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Action</a>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Another action</a>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Something else here</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item" href="javascript:void(0)" role="menuitem">Separated link</a>
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
                    <div className="row">
                        <div className="col-12">
                            <div className="panel panel-body ">
                                <h3 className="">Story Generator</h3>
                                <p>Automatically spin your article, use 0 and to separate blocks, check the example below </p>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <h3 className="">Spin Text</h3>
                                        <form className="form-group">
                                            <textarea type="text" className="form-control" name="spin-text" autocomplete="off" rows="20" placeholder="How are you doing today"></textarea>
                                        </form>
                                    </div>

                                    <div className="col-xl-6">
                                        <h3 className="">Sample Text</h3>
                                        <form className="form-group">
                                            <textarea type="text" className="form-control" name="spin-text" autocomplete="off" rows="20" placeholder="How are you doing today"></textarea>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="panel">
                                <div className="panel-body">
                                    <h4 className="text-center">Sample Set Of Images</h4>

                                    <div className="row example" id="exampleGallery">
                                        <a className="col-md-4 p-5" href="https://unsplash.it/1200/768.jpg?image=251" title="view-1" >
                                            <img className="img-fluid" src="https://unsplash.it/1200/768.jpg?image=251" alt="..."
                                            />
                                        </a>
                                        <a className="col-md-4 p-5" href="https://unsplash.it/1200/768.jpg?image=252" title="view-2" >
                                            <img className="img-fluid" src="https://unsplash.it/1200/768.jpg?image=252" alt="..."
                                            />
                                        </a>
                                        <a className="col-md-4 p-5" href="https://unsplash.it/1200/768.jpg?image=253" title="view-3" >
                                            <img className="img-fluid" src="https://unsplash.it/1200/768.jpg?image=253" alt="..."
                                            />
                                        </a>
                                        <a className="col-md-4 p-5" href="https://unsplash.it/1200/768.jpg?image=254" title="view-4" >
                                            <img className="img-fluid" src="https://unsplash.it/1200/768.jpg?image=254" alt="..."
                                            />
                                        </a>
                                        <a className="col-md-4 p-5" href="https://unsplash.it/1200/768.jpg?image=255" title="view-5" >
                                            <img className="img-fluid" src="https://unsplash.it/1200/768.jpg?image=255" alt="..."
                                            />
                                        </a>
                                        <a className="col-md-4 p-5" href="https://unsplash.it/1200/768.jpg?image=256" title="view-6" >
                                            <img className="img-fluid" src="https://unsplash.it/1200/768.jpg?image=256" alt="..."
                                            />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">

                            <div className="w-500 w-only-xs-300 ml-auto mr-auto mt-20">
                                <button type="button" className="btn btn-success w-p100"><i className="icon wb-chevron-down-mini" aria-hidden="true"></i> Generate Sample Set Of Images</button>
                                <p className="px-15 pt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, ea.</p>
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
