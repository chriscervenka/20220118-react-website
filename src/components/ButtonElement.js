import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#ffffff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    border: none;
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover {
        transition: 0.2s all ease-in-out;
        background: ${({primary}) => (primary ? '#ffffff' : '#01bf71')};
    }
`