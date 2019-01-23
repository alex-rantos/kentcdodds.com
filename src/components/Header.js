import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import theme from '../../config/theme'

import Container from './Container'

const Header = ({ dark, bgColor = 'none', siteTitle }) => (
  <header
    css={css`
      width: 100%;
      flex-shrink: 0;
      background: none;
      padding: 30px 0 0 0;
      background: ${dark ? '#090909' : `${bgColor}` || 'none'};
    `}
  >
    <Container noVerticalPadding>
      <nav
        css={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          a {
            color: ${theme.colors.body_color};
          }
        `}
      >
        <Link to="/" aria-label="go to homepage" activeClassName="active">
          {siteTitle}
        </Link>
        <div
          css={css`
            font-size: 16px;
            line-height: 1.25;
            display: flex;
            align-items: center;
            a {
              color: ${dark ? '#fbfbfb' : 'rgba(0,0,0,0.85)'};
              text-decoration: none;
              & + a {
                margin-left: 32px;
              }
            }
            .active {
              display: none;
              visibility: hidden;
            }
          `}
        >
          {/*
          <Link
            to="/blog"
            activeClassName="active"
            aria-label="Read more about moon highway"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            activeClassName="active"
            aria-label="Go to contact form"
          >
            Contact us
          </Link>
          */}
        </div>
      </nav>
    </Container>
  </header>
)

export default Header

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
