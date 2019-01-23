import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from 'lib/breakpoints'

const Container = props => {
  const {
    maxWidth = 600,
    noHorizontalPadding = false,
    noVerticalPadding = false,
    ...restProps
  } = props
  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${maxWidth + (noHorizontalPadding ? 0 : 80)}px;
        padding: ${noVerticalPadding ? 0 : '40px'}
          ${noHorizontalPadding ? 0 : '40px'};
        ${bpMaxSM} {
          padding: ${noVerticalPadding ? 0 : '40px'}
            ${noHorizontalPadding ? 0 : '20px'};
        }
      `}
      {...restProps}
    >
      {props.children}
    </div>
  )
}

export default Container
