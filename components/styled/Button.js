import styled from '@emotion/styled';

const Button = styled.button`
    display: inline-block;
    padding: 2px 10px;
    line-height: 1.5;
    color: ${props => (props.primary ? '#fff' : '#000')}; // fallback
    color: ${props => (props.primary ? '#fff' : 'var(--text-secondary)')};

    background: ${props => (props.primary ? 'blue' : '#fff')}; // fallback
    background: ${props =>
        props.primary ? 'var(--accent-blue)' : 'var(--bg-secondary)'};

    border: 1px solid rgba(65, 67, 78, 0.16);
    border-radius: 2px;
    border-color: ${props =>
        props.primary ? '#007aff' : 'rgba(65,67,78,0.16)'}; // fallback
    border-color: ${props =>
        props.primary ? '#007aff' : 'var(--border-secondary)'};
`;

export default Button;
