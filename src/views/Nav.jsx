import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const NavContainer = styled.nav`
    height: 12em;
    width: 80rem;
`;

const NavItems = styled.ul`
    display: flex;
    gap: 2rem;
    justify-content: flex-end;
    list-style-type: none;
    margin: 0;
    padding: 4rem 0 0 0;
`;

const NavItem = styled.li`
    margin: 0px;
    text-decoration: none;
`;

const NavItemLink = {
    color: "black",
    textDecoration: "none",
}

function Nav() {
    return (
        <NavContainer>
            <NavItems>
                <NavItem>
                    <Link to="/" style={NavItemLink}>
                        <span>
                            Work
                        </span>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="about" style={NavItemLink}>
                        <span>
                            About
                        </span>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="contact" style={NavItemLink}>
                        <span>
                            Contact
                        </span>    
                    </Link> 
                </NavItem>
            </NavItems>
        </NavContainer>
    )
};

export default Nav