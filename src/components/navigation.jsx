import React, {Component} from "react";

export class Navigation extends Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-default navbar-fixed-top pull-left">
                <div className="container">
                    <div className="navbar-header navbar-right">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                        >
                            {" "}
                            <span className="sr-only">Toggle navigation</span>{" "}
                            <span className="icon-bar"/>{" "}
                            <span className="icon-bar"/>{" "}
                            <span className="icon-bar"/>{" "}
                        </button>
                        <a className="navbar-brand page-scroll" href="#page-top">
                            שביל לבית
                        </a>{" "}
                    </div>

                    <div
                        className="collapse navbar-collapse navbar-left"
                        id="bs-example-navbar-collapse-1"
                    >
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#features" className="page-scroll">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="page-scroll">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="page-scroll">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="page-scroll">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="page-scroll">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#team" className="page-scroll">
                                    Team
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="page-scroll">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
