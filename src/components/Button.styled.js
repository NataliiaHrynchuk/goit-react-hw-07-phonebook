import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyle = props =>
    css`
    width: ${props.w};
    height: ${props.h};
    `

export const Button = styled.button`
${dynamicStyle};
`