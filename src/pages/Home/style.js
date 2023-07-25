import style from 'styled-components';

export const Container = style.div`
background-color: ${(props) => props.theme.colors.primary};
width: 50%;
text-align: center;
`