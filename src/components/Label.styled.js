import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyle = props =>
  css`
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    `

export const Label = styled.label`
${dynamicStyle};
`