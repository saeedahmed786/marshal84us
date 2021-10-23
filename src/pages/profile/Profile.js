import React from 'react';
import './Profile.css';

export const Profile = () => {
  return (
    <div>
      <nav className = "site-navbar navbar navbar-default navbar-fixed-top navbar-mega" role="navigation">

        <div className = "navbar-header">
          <button type="button" className = "navbar-toggler hamburger hamburger-close navbar-toggler-left hided"
            data-toggle="menubar">
            <span className = "sr-only">Toggle navigation</span>
            <span className = "hamburger-bar"></span>
          </button>
          <button type="button" className = "navbar-toggler collapsed" data-target="#site-navbar-collapse"
            data-toggle="collapse">
            <i className = "icon wb-more-horizontal" aria-hidden="true"></i>
          </button>
          <div className = "navbar-brand navbar-brand-center site-gridmenu-toggle" data-toggle="gridmenu">
            <img className = "navbar-brand-logo" src="assets/images/logo.png" title="Remark" />
            <span className = "navbar-brand-text hidden-xs-down"> Remark</span>
          </div>
          <button type="button" className = "navbar-toggler collapsed" data-target="#site-navbar-search"
            data-toggle="collapse">
            <span className = "sr-only">Toggle Search</span>
            <i className = "icon wb-search" aria-hidden="true"></i>
          </button>
        </div>

        <div className = "navbar-container container-fluid">
          {/* <!-- Navbar Collapse --> */}
          <div className = "collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
            {/* <!-- Navbar Toolbar --> */}
            <ul className = "nav navbar-toolbar">
              <li className = "nav-item hidden-float" id="toggleMenubar">
                <a className = "nav-link" data-toggle="menubar" href="#" role="button">
                  <i className = "icon hamburger hamburger-arrow-left">
                    <span className = "sr-only">Toggle menubar</span>
                    <span className = "hamburger-bar"></span>
                  </i>
                </a>
              </li>
              <li className = "nav-item hidden-sm-down" id="toggleFullscreen">
                <a className = "nav-link icon icon-fullscreen" data-toggle="fullscreen" href="#" role="button">
                  <span className = "sr-only">Toggle fullscreen</span>
                </a>
              </li>
              <li className = "nav-item hidden-float">
                <a className = "nav-link icon wb-search" data-toggle="collapse" href="#" data-target="#site-navbar-search"
                  role="button">
                  <span className = "sr-only">Toggle Search</span>
                </a>
              </li>
              <li className = "nav-item dropdown dropdown-fw dropdown-mega">
                <a className = "nav-link" data-toggle="dropdown" href="#" aria-expanded="false" data-animation="fade"
                  role="button">Mega <i className = "icon wb-chevron-down-mini" aria-hidden="true"></i></a>
                <div className = "dropdown-menu" role="menu">
                  <div className = "mega-content">
                    <div className = "row">
                      <div className = "col-md-4">
                        <h5>UI Kit</h5>
                        <ul className = "blocks-2">
                          <li className = "mega-menu m-0">
                            <ul className = "list-icons">
                              <li><i className = "wb-chevron-right-mini" aria-hidden="true"></i>
                                <a
                                  href="advanced/animation.html">Animation</a>
                              </li>
                              <li><i className = "wb-chevron-right-mini" aria-hidden="true"></i>
                                <a
                                  href="uikit/buttons.html">Buttons</a>
                              </li>
                              <li><i className = "wb-chevron-right-mini" aria-hidden="true"></i>
                                <a
                                  href="uikit/colors.html">Colors</a>
                              </li>
                              <li><i className = "wb-chevron-right-mini" aria-hidden="true"></i>
                                <a
                                  href="uikit/dropdowns.html">Dropdowns</a>
                              </li>
                              <li><i className = "wb-chevron-right-mini" aria-hidden="true"></i>
                                <a
                                  href="uikit/icons.html">Icons</a>
                              </li>
                              <li><i className = "wb-chevron-right-mini" aria-hidden="true"></i>
                                <a
                                  href="advanced/lightbox.html">Lightbox</a>
                              </li>
                            </ul>
                          </li>
                          <li className = "mega-menu m-0">
                            <ul className = "list-icons">
                              <li><i className = "wb-chevron-right-mini" aria-hidden="true"></i>
                                <a
                                  href="uikit/modals.html">Modals</a>
                              </li>
                              <li><i className = "wb-chevron-right-mini" aria-hidden="true"></i>
                                <a
                                  href="uikit/panel-structure.html">Panels</a>
                              </li>
                              <li><i className = "wb-chevron-right-mini" aria-hidden="true"></i>
                                <a
                                  href="structure/overlay.html">Overlay</a>
                              </li>
                              <li><i className = "wb-chevron-right-mini" aria-hidden="true"></i>
                                <a
                                  href="uikit/tooltip-popover.html ">Tooltips</a>
                              </li>
                              <li><i className = "wb-chevron-right-mini" aria-hidden="true"></i>
                                <a
                                  href="advanced/scrollable.html">Scrollable</a>
                              </li>
                              <li><i className = "wb-chevron-right-mini" aria-hidden="true"></i>
                                <a
                                  href="uikit/typography.html">Typography</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className = "col-md-4">
                        <h5>Media
                          <span className = "badge badge-pill badge-success">4</span>
                        </h5>
                        <ul className = "blocks-3">
                          <li>
                            <a className = "thumbnail m-0" href="javascript:void(0)">
                              <img className = "w-full" src="global/photos/placeholder.png" alt="..." />
                            </a>
                          </li>
                          <li>
                            <a className = "thumbnail m-0" href="javascript:void(0)">
                              <img className = "w-full" src="global/photos/placeholder.png" alt="..." />
                            </a>
                          </li>
                          <li>
                            <a className = "thumbnail m-0" href="javascript:void(0)">
                              <img className = "w-full" src="global/photos/placeholder.png" alt="..." />
                            </a>
                          </li>
                          <li>
                            <a className = "thumbnail m-0" href="javascript:void(0)">
                              <img className = "w-full" src="global/photos/placeholder.png" alt="..." />
                            </a>
                          </li>
                          <li>
                            <a className = "thumbnail m-0" href="javascript:void(0)">
                              <img className = "w-full" src="global/photos/placeholder.png" alt="..." />
                            </a>
                          </li>
                          <li>
                            <a className = "thumbnail m-0" href="javascript:void(0)">
                              <img className = "w-full" src="global/photos/placeholder.png" alt="..." />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className = "col-md-4">
                        <h5 className = "mb-0">Accordion</h5>
                        {/* <!-- Accordion --> */}
                        <div className = "panel-group panel-group-simple" id="siteMegaAccordion" aria-multiselectable="true"
                          role="tablist">
                          <div className = "panel">
                            <div className = "panel-heading" id="siteMegaAccordionHeadingOne" role="tab">
                              <a className = "panel-title" data-toggle="collapse" href="#siteMegaCollapseOne" data-parent="#siteMegaAccordion"
                                aria-expanded="false" aria-controls="siteMegaCollapseOne">
                                Collapsible Group Item #1
                              </a>
                            </div>
                            <div className = "panel-collapse collapse" id="siteMegaCollapseOne" aria-labelledby="siteMegaAccordionHeadingOne"
                              role="tabpanel">
                              <div className = "panel-body">
                                De moveat laudatur vestra parum doloribus labitur sentire partes, eripuit praesenti
                                congressus ostendit alienae, voluptati ornateque accusamus
                                clamat reperietur convicia albucius.
                              </div>
                            </div>
                          </div>
                          <div className = "panel">
                            <div className = "panel-heading" id="siteMegaAccordionHeadingTwo" role="tab">
                              <a className = "panel-title collapsed" data-toggle="collapse" href="#siteMegaCollapseTwo"
                                data-parent="#siteMegaAccordion" aria-expanded="false"
                                aria-controls="siteMegaCollapseTwo">
                                Collapsible Group Item #2
                              </a>
                            </div>
                            <div className = "panel-collapse collapse" id="siteMegaCollapseTwo" aria-labelledby="siteMegaAccordionHeadingTwo"
                              role="tabpanel">
                              <div className = "panel-body">
                                Praestabiliorem. Pellat excruciant legantur ullum leniter vacare foris voluptate
                                loco ignavi, credo videretur multoque choro fatemur mortis
                                animus adoptionem, bello statuat expediunt naturales.
                              </div>
                            </div>
                          </div>

                          <div className = "panel">
                            <div className = "panel-heading" id="siteMegaAccordionHeadingThree" role="tab">
                              <a className = "panel-title collapsed" data-toggle="collapse" href="#siteMegaCollapseThree"
                                data-parent="#siteMegaAccordion" aria-expanded="false"
                                aria-controls="siteMegaCollapseThree">
                                Collapsible Group Item #3
                              </a>
                            </div>
                            <div className = "panel-collapse collapse" id="siteMegaCollapseThree" aria-labelledby="siteMegaAccordionHeadingThree"
                              role="tabpanel">
                              <div className = "panel-body">
                                Horum, antiquitate perciperet d conspectum locus obruamus animumque perspici probabis
                                suscipere. Desiderat magnum, contenta poena desiderant
                                concederetur menandri damna disputandum corporum.
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- End Accordion --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* <!-- End Navbar Toolbar --> */}

            {/* <!-- Navbar Toolbar Right --> */}
            <ul className = "nav navbar-toolbar navbar-right navbar-toolbar-right">
              <li className = "nav-item dropdown">
                <a className = "nav-link" data-toggle="dropdown" href="javascript:void(0)" data-animation="scale-up"
                  aria-expanded="false" role="button">
                  <span className = "flag-icon flag-icon-us"></span>
                </a>
                <div className = "dropdown-menu" role="menu">
                  <a className = "dropdown-item" href="javascript:void(0)" role="menuitem">
                    <span className = "flag-icon flag-icon-gb"></span> English</a>
                  <a className = "dropdown-item" href="javascript:void(0)" role="menuitem">
                    <span className = "flag-icon flag-icon-fr"></span> French</a>
                  <a className = "dropdown-item" href="javascript:void(0)" role="menuitem">
                    <span className = "flag-icon flag-icon-cn"></span> Chinese</a>
                  <a className = "dropdown-item" href="javascript:void(0)" role="menuitem">
                    <span className = "flag-icon flag-icon-de"></span> German</a>
                  <a className = "dropdown-item" href="javascript:void(0)" role="menuitem">
                    <span className = "flag-icon flag-icon-nl"></span> Dutch</a>
                </div>
              </li>
              <li className = "nav-item dropdown">
                <a className = "nav-link navbar-avatar" data-toggle="dropdown" href="#" aria-expanded="false"
                  data-animation="scale-up" role="button">
                  <span className = "avatar avatar-online">
                    <img src="global/portraits/5.jpg" alt="..." />
                    <i></i>
                  </span>
                </a>
                <div className = "dropdown-menu" role="menu">
                  <a className = "dropdown-item" href="javascript:void(0)" role="menuitem"><i className = "icon wb-user" aria-hidden="true"></i> Profile</a>
                  <a className = "dropdown-item" href="javascript:void(0)" role="menuitem"><i className = "icon wb-payment" aria-hidden="true"></i> Billing</a>
                  <a className = "dropdown-item" href="javascript:void(0)" role="menuitem"><i className = "icon wb-settings" aria-hidden="true"></i> Settings</a>
                  <div className = "dropdown-divider" role="presentation"></div>
                  <a className = "dropdown-item" href="javascript:void(0)" role="menuitem"><i className = "icon wb-power" aria-hidden="true"></i> Logout</a>
                </div>
              </li>
              <li className = "nav-item dropdown">
                <a className = "nav-link" data-toggle="dropdown" href="javascript:void(0)" title="Notifications"
                  aria-expanded="false" data-animation="scale-up" role="button">
                  <i className = "icon wb-bell" aria-hidden="true"></i>
                  <span className = "badge badge-pill badge-danger up">5</span>
                </a>
                <div className = "dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                  <div className = "dropdown-menu-header">
                    <h5>NOTIFICATIONS</h5>
                    <span className = "badge badge-round badge-danger">New 5</span>
                  </div>

                  <div className = "list-group">
                    <div data-role="container">
                      <div data-role="content">
                        <a className = "list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">
                          <div className = "media">
                            <div className = "pr-10">
                              <i className = "icon wb-order bg-red-600 white icon-circle" aria-hidden="true"></i>
                            </div>
                            <div className = "media-body">
                              <h6 className = "media-heading">A new order has been placed</h6>
                              <time className = "media-meta" datetime="2018-06-12T20:50:48+08:00">5 hours ago</time>
                            </div>
                          </div>
                        </a>
                        <a className = "list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">
                          <div className = "media">
                            <div className = "pr-10">
                              <i className = "icon wb-user bg-green-600 white icon-circle" aria-hidden="true"></i>
                            </div>
                            <div className = "media-body">
                              <h6 className = "media-heading">Completed the task</h6>
                              <time className = "media-meta" datetime="2018-06-11T18:29:20+08:00">2 days ago</time>
                            </div>
                          </div>
                        </a>
                        <a className = "list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">
                          <div className = "media">
                            <div className = "pr-10">
                              <i className = "icon wb-settings bg-red-600 white icon-circle" aria-hidden="true"></i>
                            </div>
                            <div className = "media-body">
                              <h6 className = "media-heading">Settings updated</h6>
                              <time className = "media-meta" datetime="2018-06-11T14:05:00+08:00">2 days ago</time>
                            </div>
                          </div>
                        </a>
                        <a className = "list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">
                          <div className = "media">
                            <div className = "pr-10">
                              <i className = "icon wb-calendar bg-blue-600 white icon-circle" aria-hidden="true"></i>
                            </div>
                            <div className = "media-body">
                              <h6 className = "media-heading">Event started</h6>
                              <time className = "media-meta" datetime="2018-06-10T13:50:18+08:00">3 days ago</time>
                            </div>
                          </div>
                        </a>
                        <a className = "list-group-item dropdown-item" href="javascript:void(0)" role="menuitem">
                          <div className = "media">
                            <div className = "pr-10">
                              <i className = "icon wb-chat bg-orange-600 white icon-circle" aria-hidden="true"></i>
                            </div>
                            <div className = "media-body">
                              <h6 className = "media-heading">Message received</h6>
                              <time className = "media-meta" datetime="2018-06-10T12:34:48+08:00">3 days ago</time>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className = "dropdown-menu-footer">
                    <a className = "dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                      <i className = "icon wb-settings" aria-hidden="true"></i>
                    </a>
                    <a className = "dropdown-item" href="javascript:void(0)" role="menuitem">
                      All notifications
                    </a>
                  </div>
                </div>
              </li>
              <li className = "nav-item dropdown">
                <a className = "nav-link" data-toggle="dropdown" href="javascript:void(0)" title="Messages"
                  aria-expanded="false" data-animation="scale-up" role="button">
                  <i className = "icon wb-envelope" aria-hidden="true"></i>
                  <span className = "badge badge-pill badge-info up">3</span>
                </a>
                <div className = "dropdown-menu dropdown-menu-right dropdown-menu-media" role="menu">
                  <div className = "dropdown-menu-header" role="presentation">
                    <h5>MESSAGES</h5>
                    <span className = "badge badge-round badge-info">New 3</span>
                  </div>

                  <div className = "list-group" role="presentation">
                    <div data-role="container">
                      <div data-role="content">
                        <a className = "list-group-item" href="javascript:void(0)" role="menuitem">
                          <div className = "media">
                            <div className = "pr-10">
                              <span className = "avatar avatar-sm avatar-online">
                                <img src="global/portraits/2.jpg" alt="..." />
                                <i></i>
                              </span>
                            </div>
                            <div className = "media-body">
                              <h6 className = "media-heading">Mary Adams</h6>
                              <div className = "media-meta">
                                <time datetime="2018-06-17T20:22:05+08:00">30 minutes ago</time>
                              </div>
                              <div className = "media-detail">Anyways, i would like just do it</div>
                            </div>
                          </div>
                        </a>
                        <a className = "list-group-item" href="javascript:void(0)" role="menuitem">
                          <div className = "media">
                            <div className = "pr-10">
                              <span className = "avatar avatar-sm avatar-off">
                                <img src="global/portraits/3.jpg" alt="..." />
                                <i></i>
                              </span>
                            </div>
                            <div className = "media-body">
                              <h6 className = "media-heading">Caleb Richards</h6>
                              <div className = "media-meta">
                                <time datetime="2018-06-17T12:30:30+08:00">12 hours ago</time>
                              </div>
                              <div className = "media-detail">I checheck the document. But there seems</div>
                            </div>
                          </div>
                        </a>
                        <a className = "list-group-item" href="javascript:void(0)" role="menuitem">
                          <div className = "media">
                            <div className = "pr-10">
                              <span className = "avatar avatar-sm avatar-busy">
                                <img src="global/portraits/4.jpg" alt="..." />
                                <i></i>
                              </span>
                            </div>
                            <div className = "media-body">
                              <h6 className = "media-heading">June Lane</h6>
                              <div className = "media-meta">
                                <time datetime="2018-06-16T18:38:40+08:00">2 days ago</time>
                              </div>
                              <div className = "media-detail">Lorem ipsum Id consectetur et minim</div>
                            </div>
                          </div>
                        </a>
                        <a className = "list-group-item" href="javascript:void(0)" role="menuitem">
                          <div className = "media">
                            <div className = "pr-10">
                              <span className = "avatar avatar-sm avatar-away">
                                <img src="global/portraits/5.jpg" alt="..." />
                                <i></i>
                              </span>
                            </div>
                            <div className = "media-body">
                              <h6 className = "media-heading">Edward Fletcher</h6>
                              <div className = "media-meta">
                                <time datetime="2018-06-15T20:34:48+08:00">3 days ago</time>
                              </div>
                              <div className = "media-detail">Dolor et irure cupidatat commodo nostrud nostrud.</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className = "dropdown-menu-footer" role="presentation">
                    <a className = "dropdown-menu-footer-btn" href="javascript:void(0)" role="button">
                      <i className = "icon wb-settings" aria-hidden="true"></i>
                    </a>
                    <a className = "dropdown-item" href="javascript:void(0)" role="menuitem">
                      See all messages
                    </a>
                  </div>
                </div>
              </li>
              <li className = "nav-item" id="toggleChat">
                <a className = "nav-link" data-toggle="site-sidebar" href="javascript:void(0)" title="Chat"
                  data-url="site-sidebar.tpl">
                  <i className = "icon wb-chat" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            {/* <!-- End Navbar Toolbar Right --> */}
          </div>
          {/* <!-- End Navbar Collapse --> */}

          {/* <!-- Site Navbar Seach --> */}
          <div className = "collapse navbar-search-overlap" id="site-navbar-search">
            <form role="search">
              <div className = "form-group">
                <div className = "input-search">
                  <i className = "input-search-icon wb-search" aria-hidden="true"></i>
                  <input type="text" className = "form-control" name="site-search" placeholder="Search..." />
                  <button type="button" className = "input-search-close icon wb-close" data-target="#site-navbar-search"
                    data-toggle="collapse" aria-label="Close"></button>
                </div>
              </div>
            </form>
          </div>
          {/* <!-- End Site Navbar Seach --> */}
        </div>
      </nav>    <div className = "site-menubar">
        <div className = "site-menubar-body">
          <div>
            <div>
              <ul className = "site-menu" data-plugin="menu">
                <li className = "site-menu-category">General</li>
                <li className = "site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className = "site-menu-icon wb-dashboard" aria-hidden="true"></i>
                    <span className = "site-menu-title">Dashboard</span>
                    <div className = "site-menu-badge">
                      <span className = "badge badge-pill badge-success">3</span>
                    </div>
                  </a>
                  <ul className = "site-menu-sub">
                    <li className = "site-menu-item active">
                      <a className = "animsition-link" href="index.html">
                        <span className = "site-menu-title">Dashboard v1</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="dashboard/v2.html">
                        <span className = "site-menu-title">Dashboard v2</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="dashboard/ecommerce.html">
                        <span className = "site-menu-title">Ecommerce</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="dashboard/analytics.html">
                        <span className = "site-menu-title">Analytics</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="dashboard/team.html">
                        <span className = "site-menu-title">Team</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className = "site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className = "site-menu-icon wb-layout" aria-hidden="true"></i>
                    <span className = "site-menu-title">Layouts</span>
                    <span className = "site-menu-arrow"></span>
                  </a>
                  <ul className = "site-menu-sub">
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="layouts/menu-collapsed.html">
                        <span className = "site-menu-title">Menu Collapsed</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="layouts/menu-collapsed-alt.html">
                        <span className = "site-menu-title">Menu Collapsed Alt</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="layouts/menu-expended.html">
                        <span className = "site-menu-title">Menu Expended</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="layouts/grids.html">
                        <span className = "site-menu-title">Grid Scaffolding</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="layouts/layout-grid.html">
                        <span className = "site-menu-title">Layout Grid</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="layouts/headers.html">
                        <span className = "site-menu-title">Different Headers</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="layouts/panel-transition.html">
                        <span className = "site-menu-title">Panel Transition</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="layouts/boxed.html">
                        <span className = "site-menu-title">Boxed Layout</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="layouts/two-columns.html">
                        <span className = "site-menu-title">Two Columns</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="layouts/menubar-flipped.html">
                        <span className = "site-menu-title">Menubar Flipped</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="layouts/menubar-native-scrolling.html">
                        <span className = "site-menu-title">Menubar Native Scrolling</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="layouts/bordered-header.html">
                        <span className = "site-menu-title">Bordered Header</span>
                      </a>
                    </li>
                    <li className = "site-menu-item has-sub">
                      <a href="javascript:void(0)">
                        <span className = "site-menu-title">Page Aside</span>
                        <div className = "site-menu-label">
                          <span className = "badge badge-danger badge-round mr-25">new</span>
                        </div>
                        <span className = "site-menu-arrow"></span>
                      </a>
                      <ul className = "site-menu-sub">
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="layouts/aside-left-static.html">
                            <span className = "site-menu-title">Left Static</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="layouts/aside-right-static.html">
                            <span className = "site-menu-title">Right Static</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="layouts/aside-left-fixed.html">
                            <span className = "site-menu-title">Left Fixed</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="layouts/aside-right-fixed.html">
                            <span className = "site-menu-title">Right Fixed</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className = "site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className = "site-menu-icon wb-file" aria-hidden="true"></i>
                    <span className = "site-menu-title">Pages</span>
                    <span className = "site-menu-arrow"></span>
                  </a>
                  <ul className = "site-menu-sub">
                    <li className = "site-menu-item has-sub">
                      <a href="javascript:void(0)">
                        <span className = "site-menu-title">Errors</span>
                        <span className = "site-menu-arrow"></span>
                      </a>
                      <ul className = "site-menu-sub">
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="pages/error-400.html">
                            <span className = "site-menu-title">400 Bad Request</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="pages/error-403.html">
                            <span className = "site-menu-title">403 Forbidden</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="pages/error-404.html">
                            <span className = "site-menu-title">404 Not Found</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="pages/error-500.html">
                            <span className = "site-menu-title">500 Internal Server Error</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="pages/error-503.html">
                            <span className = "site-menu-title">503 Service Unavailable</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/faq.html">
                        <span className = "site-menu-title">FAQ</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/gallery.html">
                        <span className = "site-menu-title">Gallery</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/gallery-grid.html">
                        <span className = "site-menu-title">Gallery Grid</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/search-result.html">
                        <span className = "site-menu-title">Search Result</span>
                      </a>
                    </li>
                    <li className = "site-menu-item has-sub">
                      <a href="javascript:void(0)">
                        <span className = "site-menu-title">Maps</span>
                        <span className = "site-menu-arrow"></span>
                      </a>
                      <ul className = "site-menu-sub">
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="pages/map-google.html">
                            <span className = "site-menu-title">Google Maps</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="pages/map-vector.html">
                            <span className = "site-menu-title">Vector Maps</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/maintenance.html">
                        <span className = "site-menu-title">Maintenance</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/forgot-password.html">
                        <span className = "site-menu-title">Forgot Password</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/lockscreen.html">
                        <span className = "site-menu-title">Lockscreen</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/login.html">
                        <span className = "site-menu-title">Login</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/register.html">
                        <span className = "site-menu-title">Register</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/login-v2.html">
                        <span className = "site-menu-title">Login V2</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/register-v2.html">
                        <span className = "site-menu-title">Register V2</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/login-v3.html">
                        <span className = "site-menu-title">Login V3</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/register-v3.html">
                        <span className = "site-menu-title">Register V3</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/user.html">
                        <span className = "site-menu-title">User List</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/invoice.html">
                        <span className = "site-menu-title">Invoice</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/blank.html">
                        <span className = "site-menu-title">Blank Page</span>
                      </a>
                    </li>
                    <li className = "site-menu-item has-sub">
                      <a href="javascript:void(0)">
                        <span className = "site-menu-title">Email</span>
                        <span className = "site-menu-arrow"></span>
                      </a>
                      <ul className = "site-menu-sub">
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="pages/email-articles.html">
                            <span className = "site-menu-title">Articles</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="pages/email-welcome.html">
                            <span className = "site-menu-title">Welcome</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="pages/email-post.html">
                            <span className = "site-menu-title">Post</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="pages/email-thumbnail.html">
                            <span className = "site-menu-title">Thumbnail</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="pages/email-news.html">
                            <span className = "site-menu-title">News</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/code-editor.html">
                        <span className = "site-menu-title">Code Editor</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/profile.html">
                        <span className = "site-menu-title">Profile</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/profile-v2.html">
                        <span className = "site-menu-title">Profile V2</span>
                        <div className = "site-menu-label">
                          <span className = "badge badge-info badge-round">new</span>
                        </div>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/profile-v3.html">
                        <span className = "site-menu-title">Profile V3</span>
                        <div className = "site-menu-label">
                          <span className = "badge badge-info badge-round">new</span>
                        </div>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/site-map.html">
                        <span className = "site-menu-title">Sitemap</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="pages/project.html">
                        <span className = "site-menu-title">Project</span>
                        <div className = "site-menu-label">
                          <span className = "badge badge-info badge-round">new</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className = "site-menu-category">Elements</li>
                <li className = "site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className = "site-menu-icon wb-bookmark" aria-hidden="true"></i>
                    <span className = "site-menu-title">Basic UI</span>
                    <span className = "site-menu-arrow"></span>
                  </a>
                  <ul className = "site-menu-sub">
                    <li className = "site-menu-item has-sub">
                      <a href="javascript:void(0)">
                        <span className = "site-menu-title">Panel</span>
                        <span className = "site-menu-arrow"></span>
                      </a>
                      <ul className = "site-menu-sub">
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="uikit/panel-structure.html">
                            <span className = "site-menu-title">Panel Structure</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="uikit/panel-actions.html">
                            <span className = "site-menu-title">Panel Actions</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="uikit/panel-portlets.html">
                            <span className = "site-menu-title">Panel Portlets</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/buttons.html">
                        <span className = "site-menu-title">Buttons</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/cards.html">
                        <span className = "site-menu-title">Cards</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/dropdowns.html">
                        <span className = "site-menu-title">Dropdowns</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/icons.html">
                        <span className = "site-menu-title">Icons</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/list.html">
                        <span className = "site-menu-title">List</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/tooltip-popover.html">
                        <span className = "site-menu-title">Tooltip &amp; Popover</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/modals.html">
                        <span className = "site-menu-title">Modals</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/tabs-accordions.html">
                        <span className = "site-menu-title">Tabs &amp; Accordions</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/images.html">
                        <span className = "site-menu-title">Images</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/badges.html">
                        <span className = "site-menu-title">Badges</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/progress-bars.html">
                        <span className = "site-menu-title">Progress Bars</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/carousel.html">
                        <span className = "site-menu-title">Carousel</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/typography.html">
                        <span className = "site-menu-title">Typography</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/colors.html">
                        <span className = "site-menu-title">Colors</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="uikit/utilities.html">
                        <span className = "site-menu-title">Utilties</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className = "site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className = "site-menu-icon wb-hammer" aria-hidden="true"></i>
                    <span className = "site-menu-title">Advanced UI</span>
                    <span className = "site-menu-arrow"></span>
                  </a>
                  <ul className = "site-menu-sub">
                    <li className = "site-menu-item hidden-sm-down site-tour-trigger">
                      <a href="javascript:void(0)">
                        <span className = "site-menu-title">Tour</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/animation.html">
                        <span className = "site-menu-title">Animation</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/highlight.html">
                        <span className = "site-menu-title">Highlight</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/lightbox.html">
                        <span className = "site-menu-title">Lightbox</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/scrollable.html">
                        <span className = "site-menu-title">Scrollable</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/rating.html">
                        <span className = "site-menu-title">Rating</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/context-menu.html">
                        <span className = "site-menu-title">Context Menu</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/alertify.html">
                        <span className = "site-menu-title">Alertify</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/masonry.html">
                        <span className = "site-menu-title">Masonry</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/treeview.html">
                        <span className = "site-menu-title">Treeview</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/toastr.html">
                        <span className = "site-menu-title">Toastr</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/maps-vector.html">
                        <span className = "site-menu-title">Vector Maps</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/maps-google.html">
                        <span className = "site-menu-title">Google Maps</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/sortable-nestable.html">
                        <span className = "site-menu-title">Sortable &amp; Nestable</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="advanced/bootbox-sweetalert.html">
                        <span className = "site-menu-title">Bootbox &amp; Sweetalert</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className = "site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className = "site-menu-icon wb-plugin" aria-hidden="true"></i>
                    <span className = "site-menu-title">Structure</span>
                    <span className = "site-menu-arrow"></span>
                  </a>
                  <ul className = "site-menu-sub">
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/alerts.html">
                        <span className = "site-menu-title">Alerts</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/ribbon.html">
                        <span className = "site-menu-title">Ribbon</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/pricing-tables.html">
                        <span className = "site-menu-title">Pricing Tables</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/overlay.html">
                        <span className = "site-menu-title">Overlay</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/cover.html">
                        <span className = "site-menu-title">Cover</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/timeline-simple.html">
                        <span className = "site-menu-title">Simple Timeline</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/timeline.html">
                        <span className = "site-menu-title">Timeline</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/step.html">
                        <span className = "site-menu-title">Step</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/comments.html">
                        <span className = "site-menu-title">Comments</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/media.html">
                        <span className = "site-menu-title">Media</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/chat.html">
                        <span className = "site-menu-title">Chat</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/testimonials.html">
                        <span className = "site-menu-title">Testimonials</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/nav.html">
                        <span className = "site-menu-title">Nav</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/navbars.html">
                        <span className = "site-menu-title">Navbars</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/blockquotes.html">
                        <span className = "site-menu-title">Blockquotes</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/pagination.html">
                        <span className = "site-menu-title">Pagination</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="structure/breadcrumbs.html">
                        <span className = "site-menu-title">Breadcrumbs</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className = "site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className = "site-menu-icon wb-extension" aria-hidden="true"></i>
                    <span className = "site-menu-title">Widgets</span>
                    <span className = "site-menu-arrow"></span>
                  </a>
                  <ul className = "site-menu-sub">
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="widgets/statistics.html">
                        <span className = "site-menu-title">Statistics Widgets</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="widgets/data.html">
                        <span className = "site-menu-title">Data Widgets</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="widgets/blog.html">
                        <span className = "site-menu-title">Blog Widgets</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="widgets/chart.html">
                        <span className = "site-menu-title">Chart Widgets</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="widgets/social.html">
                        <span className = "site-menu-title">Social Widgets</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="widgets/weather.html">
                        <span className = "site-menu-title">Weather Widgets</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className = "site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className = "site-menu-icon wb-library" aria-hidden="true"></i>
                    <span className = "site-menu-title">Forms</span>
                    <span className = "site-menu-arrow"></span>
                  </a>
                  <ul className = "site-menu-sub">
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="forms/general.html">
                        <span className = "site-menu-title">General Elements</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="forms/material.html">
                        <span className = "site-menu-title">Material Elements</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="forms/advanced.html">
                        <span className = "site-menu-title">Advanced Elements</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="forms/layouts.html">
                        <span className = "site-menu-title">Form Layouts</span>
                        <div className = "site-menu-label">
                          <span className = "badge badge badge-warning badge-round">new</span>
                        </div>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="forms/wizard.html">
                        <span className = "site-menu-title">Form Wizard</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="forms/validation.html">
                        <span className = "site-menu-title">Form Validation</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="forms/masks.html">
                        <span className = "site-menu-title">Form Masks</span>
                      </a>
                    </li>
                    <li className = "site-menu-item has-sub">
                      <a href="javascript:void(0)">
                        <span className = "site-menu-title">Editors</span>
                        <span className = "site-menu-arrow"></span>
                      </a>
                      <ul className = "site-menu-sub">
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="forms/editor-summernote.html">
                            <span className = "site-menu-title">Summernote</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="forms/editor-markdown.html">
                            <span className = "site-menu-title">Markdown</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="forms/editor-ace.html">
                            <span className = "site-menu-title">Ace Editor</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="forms/image-cropping.html">
                        <span className = "site-menu-title">Image Cropping</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="forms/file-uploads.html">
                        <span className = "site-menu-title">File Uploads</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className = "site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className = "site-menu-icon wb-table" aria-hidden="true"></i>
                    <span className = "site-menu-title">Tables</span>
                    <span className = "site-menu-arrow"></span>
                  </a>
                  <ul className = "site-menu-sub">
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="tables/basic.html">
                        <span className = "site-menu-title">Basic Tables</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="tables/bootstrap.html">
                        <span className = "site-menu-title">Bootstrap Tables</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="tables/floatthead.html">
                        <span className = "site-menu-title">floatThead</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="tables/responsive.html">
                        <span className = "site-menu-title">Responsive Tables</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="tables/editable.html">
                        <span className = "site-menu-title">Editable Tables</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="tables/jsgrid.html">
                        <span className = "site-menu-title">jsGrid</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="tables/footable.html">
                        <span className = "site-menu-title">FooTable</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="tables/datatable.html">
                        <span className = "site-menu-title">DataTables</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="tables/jqtabledit.html">
                        <span className = "site-menu-title">Jquery Tabledit</span>
                        <div className = "site-menu-label">
                          <span className = "badge badge badge-info badge-round">new</span>
                        </div>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="tables/table-dragger.html">
                        <span className = "site-menu-title">Table Dragger</span>
                        <div className = "site-menu-label">
                          <span className = "badge badge badge-warning badge-round">new</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className = "site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className = "site-menu-icon wb-pie-chart" aria-hidden="true"></i>
                    <span className = "site-menu-title">Chart</span>
                    <span className = "site-menu-arrow"></span>
                  </a>
                  <ul className = "site-menu-sub">
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="charts/chartjs.html">
                        <span className = "site-menu-title">Chart.js</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="charts/gauges.html">
                        <span className = "site-menu-title">Gauges</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="charts/flot.html">
                        <span className = "site-menu-title">Flot</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="charts/peity.html">
                        <span className = "site-menu-title">Peity</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="charts/sparkline.html">
                        <span className = "site-menu-title">Sparkline</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="charts/morris.html">
                        <span className = "site-menu-title">Morris</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="charts/chartist.html">
                        <span className = "site-menu-title">Chartist.js</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="charts/rickshaw.html">
                        <span className = "site-menu-title">Rickshaw</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="charts/pie-progress.html">
                        <span className = "site-menu-title">Pie Progress</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="charts/c3.html">
                        <span className = "site-menu-title">C3</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className = "site-menu-category">Apps</li>
                <li className = "site-menu-item has-sub">
                  <a href="javascript:void(0)">
                    <i className = "site-menu-icon wb-grid-4" aria-hidden="true"></i>
                    <span className = "site-menu-title">Apps</span>
                    <span className = "site-menu-arrow"></span>
                  </a>
                  <ul className = "site-menu-sub">
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="apps/contacts/contacts.html">
                        <span className = "site-menu-title">Contacts</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="apps/calendar/calendar.html">
                        <span className = "site-menu-title">Calendar</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="apps/notebook/notebook.html">
                        <span className = "site-menu-title">Notebook</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="apps/taskboard/taskboard.html">
                        <span className = "site-menu-title">Taskboard</span>
                      </a>
                    </li>
                    <li className = "site-menu-item has-sub">
                      <a href="javascript:void(0)">
                        <span className = "site-menu-title">Documents</span>
                        <span className = "site-menu-arrow"></span>
                      </a>
                      <ul className = "site-menu-sub">
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="apps/documents/articles.html">
                            <span className = "site-menu-title">Articles</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="apps/documents/categories.html">
                            <span className = "site-menu-title">Categories</span>
                          </a>
                        </li>
                        <li className = "site-menu-item">
                          <a className = "animsition-link" href="apps/documents/article.html">
                            <span className = "site-menu-title">Article</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="apps/forum/forum.html">
                        <span className = "site-menu-title">Forum</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="apps/message/message.html">
                        <span className = "site-menu-title">Message</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="apps/projects/projects.html">
                        <span className = "site-menu-title">Projects</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="apps/mailbox/mailbox.html">
                        <span className = "site-menu-title">Mailbox</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="apps/media/overview.html">
                        <span className = "site-menu-title">Media</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="apps/work/work.html">
                        <span className = "site-menu-title">Work</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="apps/location/location.html">
                        <span className = "site-menu-title">Location</span>
                      </a>
                    </li>
                    <li className = "site-menu-item">
                      <a className = "animsition-link" href="apps/travel/travel.html">
                        <span className = "site-menu-title">Travel</span>
                        <div className = "site-menu-label">
                          <span className = "badge badge-info badge-round">new</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className = "site-menubar-section">
                <h5>
                  Milestone
                  <span className = "float-right">30%</span>
                </h5>
                <div className = "progress progress-xs">
                  <div className = "progress-bar active" style={{width: '30%'}} role="progressbar"></div>
                </div>
                <h5>
                  Release
                  <span className = "float-right">60%</span>
                </h5>
                <div className = "progress progress-xs">
                  <div className = "progress-bar progress-bar-warning" style={{width: '60%'}} role="progressbar"></div>
                </div>
              </div>      </div>
          </div>
        </div>

        <div className = "site-menubar-footer">
          <a href="javascript: void(0);" className = "fold-show" data-placement="top" data-toggle="tooltip"
            data-original-title="Settings">
            <span className = "icon wb-settings" aria-hidden="true"></span>
          </a>
          <a href="javascript: void(0);" data-placement="top" data-toggle="tooltip" data-original-title="Lock">
            <span className = "icon wb-eye-close" aria-hidden="true"></span>
          </a>
          <a href="javascript: void(0);" data-placement="top" data-toggle="tooltip" data-original-title="Logout">
            <span className = "icon wb-power" aria-hidden="true"></span>
          </a>
        </div></div>    <div className = "site-gridmenu">
        <div>
          <div>
            <ul>
              <li>
                <a href="apps/mailbox/mailbox.html">
                  <i className = "icon wb-envelope"></i>
                  <span>Mailbox</span>
                </a>
              </li>
              <li>
                <a href="apps/calendar/calendar.html">
                  <i className = "icon wb-calendar"></i>
                  <span>Calendar</span>
                </a>
              </li>
              <li>
                <a href="apps/contacts/contacts.html">
                  <i className = "icon wb-user"></i>
                  <span>Contacts</span>
                </a>
              </li>
              <li>
                <a href="apps/media/overview.html">
                  <i className = "icon wb-camera"></i>
                  <span>Media</span>
                </a>
              </li>
              <li>
                <a href="apps/documents/categories.html">
                  <i className = "icon wb-order"></i>
                  <span>Documents</span>
                </a>
              </li>
              <li>
                <a href="apps/projects/projects.html">
                  <i className = "icon wb-image"></i>
                  <span>Project</span>
                </a>
              </li>
              <li>
                <a href="apps/forum/forum.html">
                  <i className = "icon wb-chat-group"></i>
                  <span>Forum</span>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className = "icon wb-dashboard"></i>
                  <span>Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* <!-- Start Profile Area --> */}

      {/* <!-- Page --> */}
      <div className = "page">
        <div className = "page-content container-fluid">

          <div className = "row">
            {/* <!-- Left Column --> */}
            <div className = "col-lg-6 col-xl-3 pull-xl-6">
              <div className = "user-info card card-shadow text-center">
                <div className = "user-base card-block">
                  <a className = "avatar img-bordered avatar-100" href="javascript:void(0)">
                    <img src="global/portraits/5.jpg" alt="..." />
                  </a>
                  <h4 className = "user-name">Terrance arnold</h4>
                  <p className = "user-job">Art director</p>
                  <p className = "user-location">Washington, d.c.</p>
                </div>

                <div className = "user-actions">
                  <button className = "btn btn-primary btn-round" type="button" name="follow">Follow</button>
                  <div className = "dropdown">
                    <button className = "btn btn-primary btn-round btn-outline dropdown-toggle" data-toggle="dropdown"
                      id="userConnect" type="button" name="userConnect">Connect</button>
                    <div className = "dropdown-menu" aria-labelledby="userConnect" role="menu">
                      <a className = "dropdown-item" href="#" role="menuitem">
                        <i className = "icon md-share"></i> Real Gmat Test
                      </a>
                      <a className = "dropdown-item" href="#" role="menuitem">
                        <i className = "icon md-share"></i> Real Gmat Test
                      </a>

                      <a className = "dropdown-item" href="#" role="menuitem">
                        <i className = "icon md-share"></i> Real Gmat Test
                      </a>
                      <a className = "dropdown-item" href="#" role="menuitem">
                        <i className = "icon md-share"></i> Real Gmat Test
                      </a>
                      <a className = "dropdown-item" href="#" role="menuitem">
                        <i className = "icon md-share"></i> Real Gmat Test
                      </a>
                    </div>
                  </div>
                </div>

                <div className = "user-stats">
                  <a className = "user-stat counter" href="javascript:void(0)">
                    <span className = "counter-number font-size-16">260</span>
                    <span className = "counter-label inline-block ml-5">Following</span>
                  </a>
                  <a className = "user-stat counter p-15" href="javascript:void(0)">
                    <span className = "counter-number font-size-16">1.8M</span>
                    <span className = "counter-label inline-block ml-5">Followers</span>
                  </a>
                </div>

                <div className = "user-socials list-group list-group-full">
                  <a className = "list-group-item justify-content-center" href="javascript:void(0)">
                    <i className = "icon bd-twitter"></i> twitter.com/example
                  </a>
                  <a className = "list-group-item justify-content-center" href="javascript:void(0)">
                    <i className = "icon bd-facebook"></i> facebook.com/example
                  </a>
                  <a className = "list-group-item justify-content-center" href="javascript:void(0)">
                    <i className = "icon bd-dribbble"></i> dribbble.com/example
                  </a>
                  <a className = "list-group-item justify-content-center" href="javascript:void(0)">
                    <i className = "icon bd-github"></i> github.com/example
                  </a>
                </div>

                <div className = "card-footer">
                  <a href="#">
                    <i className = "icon md-print"></i> Export page as PDF
                  </a>
                </div>
              </div>
              {/* <!-- End User Info --> */}
              {/* <!-- Friend List --> */}
              <div className = "user-friends card card-shadow">
                <div className = "card-block">
                  <h4 className = "card-title mb-20">
                    Friends
                    <span>210</span>
                  </h4>
                  <ul className = "list-group list-group-full m-0">
                    <li className = "list-group-item">
                      <div className = "media">
                        <div className = "pr-20">
                          <a className = "avatar avatar-online" href="javascript:void(0)">
                            <img className = "img-fluid" src="global/portraits/1.jpg" alt="..." />
                            <i></i>
                          </a>
                        </div>
                        <div className = "media-body">
                          <h5 className = "mt-0 mb-5 hover">
                            Herman Beck
                          </h5>
                          <small>CEO</small>
                        </div>
                      </div>
                    </li>
                    <li className = "list-group-item">
                      <div className = "media">
                        <div className = "pr-20">
                          <a className = "avatar avatar-busy" href="javascript:void(0)">
                            <img className = "img-fluid" src="global/portraits/2.jpg" alt="..." />
                            <i></i>
                          </a>
                        </div>
                        <div className = "media-body">
                          <h5 className = "mt-0 mb-5 hover">
                            Mary Adams
                          </h5>
                          <small>CIO</small>
                        </div>
                      </div>
                    </li>
                    <li className = "list-group-item">
                      <div className = "media">
                        <div className = "pr-20">
                          <a className = "avatar avatar-off" href="javascript:void(0)">
                            <img className = "img-fluid" src="global/portraits/3.jpg" alt="..." />
                            <i></i>
                          </a>
                        </div>
                        <div className = "media-body">
                          <h5 className = "mt-0 mb-5 hover">
                            Caleb Richards
                          </h5>
                          <small>CTO</small>
                        </div>
                      </div>
                    </li>
                    <li className = "list-group-item">
                      <div className = "media">
                        <div className = "pr-20">
                          <a className = "avatar avatar-away" href="javascript:void(0)">
                            <img className = "img-fluid" src="global/portraits/4.jpg" alt="..." />
                            <i></i>
                          </a>
                        </div>
                        <div className = "media-body">
                          <h5 className = "mt-0 mb-5 hover">
                            June Lane
                          </h5>
                          <small>CVO</small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End Friends List --> */}
            </div>
            {/* <!-- End Left Column --> */}

            {/* <!-- Right Column --> */}
            <div className = "col-lg-6 col-xl-3 ">
              <div className = "card user-visitors">
                <div className = "card-header card-header-transparent p-20">
                  <h4 className = "card-title mb-0">Visitors</h4>
                </div>
                <div className = "card-block">
                  <ul className = "list-group list-group-full list-group-dividered mb-0">
                    <li className = "list-group-item">
                      <div className = "media">
                        <div className = "pr-20">
                          <a className = "avatar avatar-lg" href="javascript:void(0)">
                            <img className = "img-fluid" src="global/portraits/1.jpg"
                              alt="..." />
                          </a>
                        </div>
                        <div className = "media-body">
                          <h5 className = "mt-0 mb-5">Herman Beck</h5>
                          <small>San Francisco</small>
                        </div>
                      </div>
                    </li>
                    <li className = "list-group-item">
                      <div className = "media">
                        <div className = "pr-20">
                          <a className = "avatar avatar-lg" href="javascript:void(0)">
                            <img className = "img-fluid" src="global/portraits/2.jpg"
                              alt="..." />
                          </a>
                        </div>
                        <div className = "media-body">
                          <h5 className = "mt-0 mb-5">Mary Adams</h5>
                          <small>Salt Lake City, Utah</small>
                        </div>
                      </div>
                    </li>
                    <li className = "list-group-item">
                      <div className = "media">
                        <div className = "pr-20">
                          <a className = "avatar avatar-lg" href="javascript:void(0)">
                            <img className = "img-fluid" src="global/portraits/3.jpg"
                              alt="..." />
                          </a>
                        </div>
                        <div className = "media-body">
                          <h5 className = "mt-0 mb-5">Caleb Richards</h5>
                          <small>Basking Ridge, NJ</small>
                        </div>
                      </div>
                    </li>
                    <ul className = "list-group list-group-full">
                      <li className = "list-group-item">
                        <div className = "media">
                          <div className = "pr-20">
                            <a className = "avatar avatar-online" href="javascript:void(0)">
                              <img className = "img-fluid" src="global/portraits/11.jpg" />
                              <i></i>
                            </a>
                          </div>
                          <div className = "media-body">
                            <h5 className = "mt-0 mb-5 hover">Dan Cederholm
                            </h5>
                            <small>Co-founder of Company</small>
                          </div>
                          <div className = "pt-10 pb-10 p-0">
                            <button className = "btn btn-icon btn-primary btn-outline btn-round btn-xs" type="button"
                              name="button">
                              <i className = "icon icon-xs md-plus mr-0"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className = "list-group-item">
                        <div className = "media">
                          <div className = "pr-20">
                            <a className = "avatar" href="javascript:void(0)">
                              <img className = "img-fluid" src="global/portraits/12.jpg" />
                            </a>
                          </div>
                          <div className = "media-body">
                            <h5 className = "mt-0 mb-5 hover">Oykun Yilmaz</h5>
                            <small>Co-founder of Company</small>
                          </div>
                          <div className = "pt-10 pb-10 p-0">
                            <button className = "btn btn-icon btn-primary btn-outline btn-round btn-xs" type="button"
                              name="button">
                              <i className = "icon icon-xs md-plus mr-0"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className = "list-group-item">
                        <div className = "media">
                          <div className = "pr-20">
                            <a className = "avatar" href="javascript:void(0)">
                              <img className = "img-fluid" src="global/portraits/10.jpg" />
                            </a>
                          </div>
                          <div className = "media-body">
                            <h5 className = "mt-0 mb-5 hover">Caleb Richards</h5>
                            <small>Co-founder of Company</small>
                          </div>
                          <div className = "pt-10 pb-10 p-0">
                            <button className = "btn btn-icon btn-primary btn-outline btn-round btn-xs" type="button"
                              name="button">
                              <i className = "icon icon-xs md-plus mr-0"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li className = "list-group-item">
                        <div className = "media">
                          <div className = "pr-20">
                            <a className = "avatar" href="javascript:void(0)">
                              <img className = "img-fluid" src="global/portraits/1.jpg" />
                            </a>
                          </div>
                          <div className = "media-body">
                            <h5 className = "mt-0 mb-5 hover">June Lane</h5>
                            <small>Co-founder of Company</small>
                          </div>
                          <div className = "pt-10 pb-10 p-0">
                            <button className = "btn btn-icon btn-primary btn-outline btn-round btn-xs" type="button"
                              name="button">
                              <i className = "icon icon-xs md-plus mr-0"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </ul>
                  <div className = "text-center">
                    <button className = "btn btn-round btn-outline btn-primary" type="button" name="button">See all
                      <span>(19)</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className = "card user-may-know">
                <div className = "card-header card-header-transparent p-20">
                  <h4 className = "card-title mb-5">People you may know</h4>
                  <ol className = "breadcrumb mb-0 p-0">
                    <li className = "breadcrumb-item">
                      <a href="#">Jackie Tran Anh</a>
                    </li>
                    <li className = "breadcrumb-item active">
                      Designer
                    </li>
                  </ol>
                </div>
                <div className = "card-block">
                  <div className = "avatar avatar-online avatar-lg m-5">
                    <img src="global/portraits/2.jpg" alt="" />
                    <i></i>
                  </div>
                  <div className = "avatar avatar-off avatar-lg m-5">
                    <img src="global/portraits/3.jpg" alt="" />
                    <i></i>
                  </div>
                  <div className = "avatar avatar-busy avatar-lg m-5">
                    <img src="global/portraits/4.jpg" alt="" />
                    <i></i>
                  </div>
                  <div className = "avatar avatar-away avatar-lg m-5">
                    <img src="global/portraits/1.jpg" alt="" />
                    <i></i>
                  </div>
                  <div className = "avatar avatar-online avatar-lg m-5">
                    <img src="global/portraits/5.jpg" alt="" />
                    <i></i>
                  </div>
                  <div className = "avatar avatar-away avatar-lg m-5">
                    <img src="global/portraits/1.jpg" alt="" />
                    <i></i>
                  </div>
                  <div className = "avatar avatar-away avatar-lg m-5">
                    <img src="global/portraits/1.jpg" alt="" />
                    <i></i>
                  </div>
                  <div className = "avatar avatar-away avatar-lg m-5">
                    <img src="global/portraits/1.jpg" alt="" />
                    <i></i>
                  </div>
                </div>
                <div className = "card-block">
                  <div className = "input-search">
                    <button className = "input-search-btn" type="button" name="button">
                      <i className = "icon md-search" aria-hidden="true"></i>
                    </button>
                    <input className = "form-control" type="text" name="search" placeholder="Search..." />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Right Column --> */}
            {/* <!-- Middle Column --> */}
            <div className = "col-lg-12 col-xl-6 push-xl-3">

              {/* <!-- User Content Release --> */}
              <div className = "user-release card card-shadow">
                <div className = "card-block p-0">
                  <input className = "user-release-input form-control form-control-lg" type="text" name="user-content-input"
                    placeholder="type something here..." />
                  <div className = "user-release-actions">
                    <button className = "btn btn-pure btn-default icon md-image" type="button"></button>
                    <button className = "btn btn-pure btn-default icon md-tv-play" type="button"></button>
                    <button className = "btn btn-pure btn-default icon md-calendar" type="button"></button>
                    <button className = "btn btn-pure btn-default icon md-map" type="button"></button>
                    <button className = "btn btn-primary btn-round float-right" type="button">submit</button>
                  </div>
                </div>
              </div>
              {/* <!-- End User Content Release --> */}

              {/* <!-- User Posts --> */}
              <div className = "user-posts card card-shadow">
                <div className = "card-block">
                  <h4 className = "card-title mb-20">Post</h4>
                  <ul className = "user-posts-list">
                    <li className = "user-post">
                      <img src="global/photos/placeholder.png" alt="..." />
                      <h4 className = "user-post-title">
                        Example title1
                      </h4>
                      <time className = "user-post-time" datetime="2017-02-15">Februrary 15, 2017</time>
                      <div className = "user-post-data">
                        <i className = "icon md-eye">
                          <span>16</span>
                        </i>
                        <i className = "icon md-favorite">
                          <span>4K</span>
                        </i>
                        <i className = "icon md-comment">
                          <span>2K</span>
                        </i>
                      </div>
                    </li>
                    <li className = "user-post">
                      <img src="global/photos/placeholder.png" alt="..." />
                      <h4 className = "user-post-title font-size-16 mb-5">
                        Example title2
                      </h4>
                      <time className = "user-post-time">Februrary 15, 2017</time>
                      <div className = "user-post-data">
                        <i className = "icon md-eye">
                          <span>16</span>
                        </i>
                        <i className = "icon md-favorite">
                          <span>4K</span>
                        </i>
                        <i className = "icon md-comment">
                          <span>2K</span>
                        </i>
                      </div>
                    </li>
                    <li className = "user-post">
                      <img src="global/photos/placeholder.png" alt="..." />
                      <h4 className = "user-post-title font-size-16 mb-5">
                        Example title3
                      </h4>
                      <time className = "user-post-time">Februrary 15, 2017</time>
                      <div className = "user-post-data">
                        <i className = "icon md-eye">
                          <span>16</span>
                        </i>
                        <i className = "icon md-favorite">
                          <span>4K</span>
                        </i>
                        <i className = "icon md-comment">
                          <span>2K</span>
                        </i>
                      </div>
                    </li>
                    <li className = "user-post">
                      <img src="global/photos/placeholder.png" alt="..." />
                      <h4 className = "user-post-title font-size-16 mb-5">
                        Example title4
                      </h4>
                      <time className = "user-post-time">Februrary 15, 2017</time>
                      <div className = "user-post-data">
                        <i className = "icon md-eye">
                          <span>16</span>
                        </i>
                        <i className = "icon md-favorite">
                          <span>4K</span>
                        </i>
                        <i className = "icon md-comment">
                          <span>2K</span>
                        </i>
                      </div>
                    </li>
                    <li className = "user-post">
                      <img src="global/photos/placeholder.png" alt="..." />
                      <h4 className = "user-post-title font-size-16 mb-5">
                        Example title5
                      </h4>
                      <time className = "user-post-time">Februrary 15, 2017</time>
                      <div className = "user-post-data">
                        <i className = "icon md-eye">
                          <span>16</span>
                        </i>
                        <i className = "icon md-favorite">
                          <span>4K</span>
                        </i>
                        <i className = "icon md-comment">
                          <span>2K</span>
                        </i>
                      </div>
                    </li>
                    <li className = "user-post">
                      <img src="global/photos/placeholder.png" alt="..." />
                      <h4 className = "user-post-title font-size-16 mb-5">
                        Example title6
                      </h4>
                      <time className = "user-post-time">Februrary 15, 2017</time>
                      <div className = "user-post-data">
                        <i className = "icon md-eye">
                          <span>16</span>
                        </i>
                        <i className = "icon md-favorite">
                          <span>4K</span>
                        </i>
                        <i className = "icon md-comment">
                          <span>2K</span>
                        </i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className = "user-background card card-shadow">
                <div className = "card-header card-header-transparent p-20">
                  <h4 className = "card-title mb-0">Background</h4>
                </div>

                <div className = "card-block">
                  <h5 className = "card-title">
                    <i className = "icon md-clipboard"></i>
                    <span>Summary</span>
                  </h5>
                  <p className = "card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <div className = "card-block">
                  <h5 className = "card-title">
                    <i className = "icon md-briefcase"></i>
                    <span>Experience</span>
                  </h5>
                  <ul className = "timeline timeline-single">
                    <li className = "timeline-item">
                      <div className = "timeline-dot"></div>
                      <div className = "timeline-content">
                        <img className = "float-right" src="global/photos/placeholder.png" alt="..." />
                        <span className = "block font-size-15 mb-5">2000 President</span>
                        <span className = "block mb-5">Co-founder, Chairman</span>
                        <span className = "block mb-5">Company Name</span>
                      </div>
                    </li>
                    <li className = "timeline-item">
                      <div className = "timeline-dot"></div>
                      <div className = "timeline-content">
                        <img className = "float-right" src="global/photos/placeholder.png" alt="..." />
                        <span className = "block font-size-15 mb-5">2000 President</span>
                        <span className = "block mb-5">Co-founder, Chairman</span>
                        <span className = "block mb-5">Company Name</span>
                      </div>
                    </li>
                    <li className = "timeline-item">
                      <div className = "timeline-dot"></div>
                      <div className = "timeline-content">
                        <img className = "float-right" src="global/photos/placeholder.png" alt="..." />
                        <span className = "block font-size-15 mb-5">2000 President</span>
                        <span className = "block mb-5">Co-founder, Chairman</span>
                        <span className = "block mb-5">Company Name</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className = "card-block">
                  <h5 className = "card-title">
                    <i className = "icon md-flag"></i>
                    <span>Edication</span>
                  </h5>
                  <ul className = "timeline timeline-single">
                    <li className = "timeline-item">
                      <div className = "timeline-dot"></div>
                      <div className = "timeline-content">
                        <img className = "float-right" src="global/photos/placeholder.png" alt="..." />
                        <span className = "block font-size-15 mb-5">2000 President</span>
                        <span className = "block mb-5">BS Computer Science</span>
                        <span className = "block mb-5">Harvard University</span>
                      </div>
                    </li>
                    <li className = "timeline-item">
                      <div className = "timeline-dot"></div>
                      <div className = "timeline-content">
                        <img className = "float-right" src="global/photos/placeholder.png" alt="..." />
                        <span className = "block font-size-15 mb-5">1996 - 2000</span>
                        <span className = "block mb-5">B.E</span>
                        <span className = "block mb-5">Tsinghua University</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className = "card-block">
                  <h5 className = "card-title">
                    <i className = "icon md-share"></i>
                    <span>Skills</span>
                  </h5>
                  <ul className = "user-skills list-unstyled">
                    <li className = "skill">
                      <ul className = "skill-team list-unstyled">
                        <li className = "avatar">
                          <img src="global/portraits/3.jpg" alt="" />
                        </li>
                        <li className = "avatar">
                          <img src="global/portraits/4.jpg" alt="" />
                        </li>
                        <li className = "avatar">
                          <img src="global/portraits/6.jpg" alt="" />
                        </li>
                      </ul>
                      <div className = "skill-num">
                        <span className = "badge badge-pill badge-dark badge-outline p-10">71</span>
                      </div>
                      <div className = "skill-name">
                        Javascript
                      </div>
                    </li>
                    <li className = "skill">
                      <div className = "skill-num">
                        <span className = "badge badge-pill badge-primary badge-outline p-10">71</span>
                      </div>
                      <div className = "skill-name vertical-align-middle">
                        Photoshop
                      </div>
                      <ul className = "skill-team list-unstyled">
                        <li className = "avatar">
                          <img src="global/portraits/2.jpg" alt="" />
                        </li>
                        <li className = "avatar">
                          <img src="global/portraits/4.jpg" alt="" />
                        </li>
                        <li className = "avatar">
                          <img src="global/portraits/5.jpg" alt="" />
                        </li>
                      </ul>
                    </li>
                    <li className = "skill">
                      <div className = "skill-num">
                        <span className = "badge badge-pill badge-success badge-outline p-10">71</span>
                      </div>
                      <div className = "skill-name vertical-align-middle">
                        HTML
                      </div>
                      <ul className = "skill-team list-unstyled">
                        <li className = "avatar">
                          <img src="global/portraits/2.jpg" alt="" />
                        </li>
                        <li className = "avatar">
                          <img src="global/portraits/4.jpg" alt="" />
                        </li>
                        <li className = "avatar">
                          <img src="global/portraits/5.jpg" alt="" />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className = "card-block">
                  <h5 className = "card-title">
                    <i className = "icon md-star"></i>
                    <span>More interest</span>
                  </h5>
                  <span className = "badge mb-5 mr-5 badge-default badge-outline">Movie</span>
                  <span className = "badge mb-5 mr-5 badge-default badge-outline">Games</span>
                  <span className = "badge mb-5 mr-5 badge-primary">Music</span>
                  <span className = "badge mb-5 mr-5 badge-warning">Pokemon go</span>
                  <span className = "badge mb-5 mr-5 badge-success">Football</span>
                  <span className = "badge mb-5 mr-5 badge-info">Tennis</span>
                  <span className = "badge mb-5 mr-5 badge-danger">Hiking</span>
                  <span className = "badge mb-5 mr-5 badge-dark">Skating</span>
                  <span className = "badge mb-5 mr-5 badge-success">Table tennis</span>
                  <span className = "badge mb-5 mr-5 badge-default badge-outline">Reading</span>
                  <span className = "badge mb-5 mr-5 badge-dark">Blogging/writing</span>
                  <span className = "badge mb-5 mr-5 badge-warning">DIY</span>
                  <span className = "badge mb-5 mr-5 badge-default badge-outline">Singing</span>
                  <span className = "badge mb-5 mr-5 badge-info">Dancing</span>
                </div>
              </div>

              <div className = "user-recomendations card card-shadow">
                <div className = "card-header card-header-transparent p-20">
                  <div className = "testimonial-control float-right">
                    <a className = "testimonial-control-left" data-slide="prev" href="#recomendations" role="button">
                      <span className = "icon md-chevron-left font-size-24 mr-15" aria-hidden="true"></span>
                      <span className = "sr-only">Previous</span>
                    </a>
                    <a className = "testimonial-control-right" data-slide="next" href="#recomendations" role="button">
                      <span className = "icon md-chevron-right font-size-24" aria-hidden="true"></span>
                      <span className = "sr-only">Next</span>
                    </a>
                  </div>
                  <h4 className = "card-title mb-0">Recomendations</h4>
                </div>
                <div className = "card-block">
                  <div className = "testimonial carousel" role="listbox" id="recomendations" data-ride="carousel">
                    <ul className = "testimonial-ul carousel-inner">
                      <li className = "testimonial-item carousel-item active">
                        <div className = "row">
                          <div className = "col-lg-4">
                            <div className = "testimonial-content">
                              <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis,
                                tortor neque adipiscing diam, a cursus ipsum ante
                                quis turpis. </p>
                            </div>
                            <div className = "testimonial-image">
                              <a className = "avatar" href="javascript:void(0)">
                                <img src="global/portraits/13.jpg" alt="image" />
                              </a>
                            </div>
                            <span className = "testimonial-author">Andrew Hoffman</span>
                            <span className = "testimonial-company">Web Designer</span>
                          </div>
                          <div className = "col-lg-4">
                            <div className = "testimonial-content">
                              <p>Suspendisse in justo eu magna luctus suscipit. Sed
                                lectus. Integer euismod lacus luctus magna. </p>
                            </div>
                            <div className = "testimonial-image">
                              <a className = "avatar" href="javascript:void(0)">
                                <img src="global/portraits/12.jpg" alt="image" />
                              </a>
                            </div>
                            <span className = "testimonial-author">Sarah Graves</span>
                            <span className = "testimonial-company">Videographer</span>
                          </div>
                          <div className = "col-lg-4">
                            <div className = "testimonial-content">
                              <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis,
                                tortor neque adipiscing diam, a cursus ipsum ante
                                quis turpis. </p>
                            </div>
                            <div className = "testimonial-image">
                              <a className = "avatar" href="javascript:void(0)">
                                <img src="global/portraits/15.jpg" alt="image" />
                              </a>
                            </div>
                            <span className = "testimonial-author">Camila Lynch</span>
                            <span className = "testimonial-company">Wordpress Ninja</span>
                          </div>
                        </div>
                      </li>
                      <li className = "testimonial-item carousel-item">
                        <div className = "row">
                          <div className = "col-lg-4">
                            <div className = "testimonial-content">
                              <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis,
                                tortor neque adipiscing diam, a cursus ipsum ante
                                quis turpis. </p>
                            </div>
                            <div className = "testimonial-image">
                              <a className = "avatar" href="javascript:void(0)">
                                <img src="global/portraits/11.jpg" alt="image" />
                              </a>
                            </div>
                            <span className = "testimonial-author">Sarah Graves</span>
                            <span className = "testimonial-company">Web Designer</span>
                          </div>
                          <div className = "col-lg-4">
                            <div className = "testimonial-content">
                              <p>Suspendisse in justo eu magna luctus suscipit. Sed
                                lectus. Integer euismod lacus luctus magna. </p>
                            </div>
                            <div className = "testimonial-image">
                              <a className = "avatar" href="javascript:void(0)">
                                <img src="global/portraits/10.jpg" alt="image" />
                              </a>
                            </div>
                            <span className = "testimonial-author">Andrew Hoffman</span>
                            <span className = "testimonial-company">Videographer</span>
                          </div>
                          <div className = "col-lg-4">
                            <div className = "testimonial-content">
                              <p>Suspendisse in justo eu magna luctus suscipit. Sed
                                lectus. Integer euismod lacus luctus magna. </p>
                            </div>
                            <div className = "testimonial-image">
                              <a className = "avatar" href="javascript:void(0)">
                                <img src="global/portraits/9.jpg" alt="image" />
                              </a>
                            </div>
                            <span className = "testimonial-author">Camila Lynch</span>
                            <span className = "testimonial-company">Wordpress Ninja</span>
                          </div>
                        </div>
                      </li>
                      <li className = "testimonial-item carousel-item">
                        <div className = "row">
                          <div className = "col-lg-4">
                            <div className = "testimonial-content">
                              <p>Suspendisse in justo eu magna luctus suscipit. Sed
                                lectus. Integer euismod lacus luctus magna. </p>
                            </div>
                            <div className = "testimonial-image">
                              <a className = "avatar" href="javascript:void(0)">
                                <img src="global/portraits/3.jpg" alt="image" />
                              </a>
                            </div>
                            <span className = "testimonial-author">Sarah Graves</span>
                            <span className = "testimonial-company">Web Designer</span>
                          </div>
                          <div className = "col-lg-4">
                            <div className = "testimonial-content">
                              <p>Suspendisse in justo eu magna luctus suscipit. Sed
                                lectus. Integer euismod lacus luctus magna. </p>
                            </div>
                            <div className = "testimonial-image">
                              <a className = "avatar" href="javascript:void(0)">
                                <img src="global/portraits/4.jpg" alt="image" />
                              </a>
                            </div>
                            <span className = "testimonial-author">Andrew Hoffman</span>
                            <span className = "testimonial-company">Videographer</span>
                          </div>
                          <div className = "col-lg-4">
                            <div className = "testimonial-content">
                              <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis,
                                tortor neque adipiscing diam, a cursus ipsum ante
                                quis turpis. </p>
                            </div>
                            <div className = "testimonial-image">
                              <a className = "avatar" href="javascript:void(0)">
                                <img src="global/portraits/2.jpg" alt="image" />
                              </a>
                            </div>
                            <span className = "testimonial-author">Camila Lynch</span>
                            <span className = "testimonial-company">Wordpress Ninja</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className = "card user-following">
                <div className = "card-header card-header-transparent p-20">
                  <h4 className = "card-title mb-0">Following</h4>
                </div>
                <div className = "card-block">
                  <div className = "row">
                    <div className = "col-sm-3 col-6 mb-20">
                      <img src="global/photos/placeholder.png" />
                      <h4 className = "font-size-16 mb-5">KIPP Foundation</h4>
                      <span>
                        <span>+</span>
                        <span>Follow</span>
                      </span>
                    </div>
                    <div className = "col-sm-3 col-6 mb-20">
                      <img src="global/photos/placeholder.png" />
                      <h4 className = "font-size-16 mb-5">KIPP Foundation</h4>
                      <span>
                        <span>+</span>
                        <span>Follow</span>
                      </span>
                    </div>
                    <div className = "col-sm-3 col-6 mb-20">
                      <img src="global/photos/placeholder.png" />
                      <h4 className = "font-size-16 mb-5">KIPP Foundation</h4>
                      <span>
                        <span>+</span>
                        <span>Follow</span>
                      </span>
                    </div>
                    <div className = "col-sm-3 col-6 mb-20">
                      <img src="global/photos/placeholder.png" />
                      <h4 className = "font-size-16 mb-5">KIPP Foundation</h4>
                      <span>
                        <span>+</span>
                        <span>Follow</span>
                      </span>
                    </div>
                  </div>
                  <div className = "text-center">
                    <button className = "btn btn-round btn-outline btn-primary" type="button" name="button">See all (19)</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className = "site-footer">
        <div className = "site-footer-legal">© 2018 <a href="http://themeforest.net/item/remark-responsive-bootstrap-admin-template/11989202">Remark</a></div>
        <div className = "site-footer-right">
          Crafted with <i className = "red-600 wb wb-heart"></i> by <a href="https://themeforest.net/user/creation-studio">Creation Studio</a>
        </div>
      </footer>
      <div className = "modal fade modal-danger" id="exampleModalDanger" aria-hidden="true"
        aria-labelledby="exampleModalDanger" role="dialog" tabindex="-1">
        <div className = "modal-dialog">
          <div className = "modal-content">
            <div className = "modal-header">
              <button type="button" className = "close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className = "modal-title">Warning are you sure you want to do this?</h4>
            </div>
            <div className = "modal-body">
              <p>This will delete all image assets associate with this element.</p>
            </div>
            <div className = "modal-footer">
              <button type="button" className = "btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className = "btn btn-primary">Yes Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
