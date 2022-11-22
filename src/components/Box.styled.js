import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyle = props =>
  css`
    border: ${props.border};
    display: ${props.display};
    width: ${props.w};
    gap: ${props.gap};
    padding: ${props.pad};
    flex-wrap: ${props.flexWrap};
    align-items: ${props.alIt};
    `

export const Box = styled.div`
${dynamicStyle};
`