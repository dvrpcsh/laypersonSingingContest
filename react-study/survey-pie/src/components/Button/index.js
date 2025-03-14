import styled from 'styled-components';
import { PRIMARY, SECONDARY, TERTIARY } from '../../constants/color';

const colorMap = {
    PRIMARY,
    SECONDARY,
    TERTIARY
}
/*
function getColor(type1, type2) {
    if(type1 === 'PRIMARY') {
        return PRIMARY.BUTTON.DEFAULT.COLOR;
    } else if(type1 === 'SECONDARY') {
        return SECONDARY.BUTTON.DEFAULT.COLOR;
    }

    return;
}
*/

const Button = styled.button`
    padding: 16px 24px;
    width: 200px;

    color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
    background: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
    border-radiusL 4px;
    border: none;
    font-weight: bold;

    border: ${({ type }) =>
     type === 'TERTIARY' ? `1px solid ${TERTIARY.BUTTON.DEFAULT.BORDER}` : 'none'};

    &:hover {
        color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
        background: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
         border: ${({ type }) =>
             type === 'TERTIARY' ? `1px solid ${TERTIARY.BUTTON.HOVER.BORDER}` : 'none'};
    }

    &:active {
        color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
        background: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
         border: ${({ type }) =>
             type === 'TERTIARY' ? `1px solid ${TERTIARY.BUTTON.PRESSED.BORDER}` : 'none'};
    }

    &:disabled {
        color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
        background: ${({ type }) => colorMap[type].BUTTON.DISABLED.BACKGROUND};
         border: ${({ type }) =>
             type === 'TERTIARY' ? `1px solid ${TERTIARY.BUTTON.DISABLED.BORDER}` : 'none'};
    }
`;

export default Button;