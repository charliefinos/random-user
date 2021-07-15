import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const Nav = styled.nav`
background-color: #c3c3c3;
display: flex;
flex-direction: row;
justify-content: space-between;
height: 60px;
padding: 1rem;
`
const StyledLink = styled.a`
text-decoration: none;
font-size: large;
font-weight: 500;
`

const Navbar = () => {
  return (
    <Nav>
      <div>
        <StyledLink>
          <Link href='/'>carlos</Link>
        </StyledLink>

      </div>
      <div>
        <StyledLink>
          <Link href='/about'>About</Link>
        </StyledLink>
        <StyledLink>
          <Link href='https://www.carlosfinos.com'>Portfolio</Link>
        </StyledLink>
      </div>
    </Nav>
  )
}

export default Navbar
