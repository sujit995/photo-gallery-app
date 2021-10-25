import styled from 'styled-components';

export const TitleHeading = styled.h1`
    color: red;
    font-size: 3.2rem;
    letter-spacing: 2px;
    font-weight: normal;
    text-align: center;
    margin-top: 2rem;
    cursor: pointer;
`
export const FormContainer = styled.form`
    margin: 30px auto 10px;
    text-align: center;
`

export const SmallText = styled.h4`
    font-size: 1rem;
    width: 240px;
    margin-left: 360px;
    color: var(--primary);
`

export const LabelContainer = styled.label`
    display: block;
    width: 30px;
    height: 30px;
    border: 1px solid var(--primary);
    border-radius: 50%;
    margin: 10px auto;
    line-height: 30px;
    color: var(--primary);
    font-weight: bold;
    font-size: 24px;
    &:hover {
        background: var(--primary);
        color: white;
    }
`

export const InputContainer = styled.input`
    height: 0;
    width: 0;
    opacity: 0;
`
export const OutputContainer = styled.div`
    height: 60px;
    font-size: 0.8rem;
    `
export const ErrorContainer = styled.div`
    color: red;
`

export const ProgressBarWrap = styled.div`
    height: 5px;
    background: var(--primary);
    margin-top: 20px;
`