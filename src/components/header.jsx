import React from "react";
import styled from 'styled-components'

const Header = ({title, paragraph}) => {
    return (
        <header id="header">
            <div className="intro">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 intro-text">
                                <h1>
                                    {title ? title : "Loading"}
                                    <span/>
                                </h1>
                                <p>
                                    {paragraph ? paragraph : "Loading"}
                                </p>
                                <a href="#features" className="btn btn-custom btn-lg page-scroll">
                                    Learn More
                                </a>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

const TitleStyled = styled.h1`
  color: red;
`;
