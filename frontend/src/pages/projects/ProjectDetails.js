import React from 'react'
import { Panel } from '../../components/projects/Panel'
import { Layout } from '../../layouts/Layout'

export const ProjectDetails = () => {
    return (
        <Layout sidebar>
            <div className="page">
                <div className="page-content container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <Panel />
                        </div>
                    </div>

                    <form autocomplete="off">

                        <div className="row">
                            <div className="col-12">
                                <div className="panel">
                                    <div className="panel-body">

                                        <h3 className="">Project Details</h3>
                                        <p>This information will be used in your meta data for the project</p>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label className="form-control-label" for="inputProjectName">Project Name</label>
                                                <input type="text" className="form-control" id="inputProjectName" name="inputProjectName" placeholder="Project Name" autocomplete="off" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className="form-control-label" for="inputContractSymbol">Contract Symbol</label>
                                                <input type="text" className="form-control" id="inputContractSymbol" name="inputContractSymbol" placeholder="BAYC" autocomplete="off" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-control-label" for="inputProjectDiscription">Project Discription</label>
                                            <textarea className="form-control" id="inputProjectDiscription" name="inputProjectDiscription" placeholder="Project Discription" autocomplete="off"></textarea>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="panel">
                                    <div className="panel-body">

                                        <h3 className="">Minting</h3>
                                        <p>This information will be used in your contract</p>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label className="form-control-label" for="inputTotalSupply">Total Supply (20,000 max) </label>
                                                <input type="number" className="form-control" id="inputTotalSupply" name="inputTotalSupply" placeholder="10,000" min="1" max="20000" autocomplete="off" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className="form-control-label" for="inputMintPrice">Mint Price - ETH.08</label>
                                                <input type="number" className="form-control" id="inputMintPrice" name="inputMintPrice" placeholder=".08" autocomplete="off" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className="form-control-label" for="inputMaxNumberMints">Max number mints per wallet (10)</label>
                                                <input type="number" className="form-control" id="inputMaxNumberMints" name="inputMaxNumberMints" min="1" max="1000" placeholder="20" autocomplete="off" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label className="form-control-label" for="inputTypeOfMinting">Type Of Minting</label>
                                                <select className="form-control" id="inputTypeOfMinting">
                                                    <option>Select a Type</option>
                                                    <option>Blind Ment</option>
                                                    <option>Mine to mint</option>
                                                </select>
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

                                        <h3 className="">NFT Reveal</h3>
                                        <p>Pre-Reveal Image This is the place holder image used untel you reveal the  </p>
                                        <div className="form-group col-md-4 px-0">
                                            <input type="file" id="input-file-now" data-plugin="dropify" data-default-file="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="panel">
                                    <div className="panel-body">

                                        <h3 className="">Payouts</h3>
                                        <p>Distribution of funds from minting sale and secondary royalties </p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <h4 className="example-title"> Minting</h4>
                                                    <label className="form-control-label float-left" for="inputPlatformFee"> Platform Fee </label>
                                                    <label className="form-control-label float-right"> 100% </label>
                                                    <div className="input-group input-group-icon">
                                                        <input type="text" className="form-control" id="inputTotalSupply" name="inputPlatformFee" placeholder="NFTLand eth " autocomplete="off" />
                                                        <div className="input-group-append">
                                                            <div className="input-group-text bg-white">
                                                                <span className="icon wb-lock" aria-hidden="true"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-control-label" for="inputMintingFunds">Minting Funds </label>
                                                    <div className="input-group input-group-icon">
                                                        <input type="text" className="form-control" id="inputMintingFunds" name="inputMintingFunds" placeholder="00" autocomplete="off" />
                                                        <div className="input-group-append">
                                                            <div className="input-group-text bg-white">
                                                                <span className="icon wb-lock" aria-hidden="true"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button type="button" className="btn btn-primary mb-20" data-target="#addWallet" data-toggle="modal">Add Wallet</button>
                                                <div className="modal fade modal-primary" id="addWallet" aria-hidden="true"
                                                    aria-labelledby="exampleModalTitle" role="dialog" tabindex="-1">
                                                    <div className="modal-dialog modal-simple">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                                <h4 className="modal-title">Add Wallet</h4>
                                                            </div>
                                                            <div className="modal-body col-md-8 mt-10">
                                                                <div className="form-group mb-10">
                                                                    <label className="form-control-label pb-0" for="inputReferenceName">Reference Name (Whos address is this?)</label>
                                                                    <input type="text" className="form-control" id="inputReferenceName" name="inputReferenceName" placeholder="Jeff the DEV" autocomplete="off" />
                                                                </div>
                                                                <div className="form-group mb-10 ">
                                                                    <label className="form-control-label pb-0" for="inputWalletAddress">Wallet Address (Do not use ENS OX) </label>
                                                                    <input type="text" className="form-control" id="inputWalletAddress" name="inputWalletAddress" placeholder="Ox2150644217fA0c9A4077DA95137aAF6B7647A10d4" autocomplete="off" />
                                                                </div>
                                                                <div className="form-group mb-10 ">
                                                                    <label className="form-control-label" for="inputWalletAddress">What % of the project </label>
                                                                    <input className="asRange" data-plugin="asRange" step="1" data-namespace="rangeUi" data-min="0" data-max="100" data-tip="true" data-value="1" />
                                                                </div>


                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn" data-dismiss="modal" aria-label="Close">Close</button>
                                                                <button type="button" className="btn btn-primary" data-dismiss="modal" >Save changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <h4 className="example-title"> Secondary royalties </h4>
                                                <div className="form-group">
                                                    <label className="form-control-label float-left" for="inputPlatformFee"> Platform Fee </label>
                                                    <label className="form-control-label float-right">  Total Royalties 4% </label>
                                                    <div className="input-group input-group-icon">
                                                        <input type="text" className="form-control" id="inputPlatformFee" name="inputPlatformFee" placeholder="NFTLand eth " autocomplete="off" />
                                                        <div className="input-group-append">
                                                            <div className="input-group-text bg-white">
                                                                <span className="icon wb-lock" aria-hidden="true"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-control-label" for="inputJefftheDEV">Jeff the DEV </label>
                                                    <div className="input-group input-group-icon">
                                                        <input type="text" className="form-control" id="inputJefftheDEV" name="inputJefftheDEV" placeholder="00 " autocomplete="off" />
                                                        <div className="input-group-append">
                                                            <div className="input-group-text bg-white">
                                                                <span className="icon wb-close" aria-hidden="true"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn btn-primary" data-target="#addWallet" data-toggle="modal" >Add Wallet</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            {/* </div> */}


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
            {/* </div> */}
        </Layout>
    )
}
