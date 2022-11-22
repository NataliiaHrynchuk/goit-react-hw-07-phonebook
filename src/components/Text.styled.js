import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStyle = props =>
    css`
    margin-top: ${props.mt};
    margin-right: ${props.mr};
    margin-bottom: ${props.mb};
    `

export const Text = styled.input`
${dynamicStyle};
`