import styled from "styled-components";

export const FormComtainer = styled.div`
    position: absolute;
    background-color: royalblue;
    width: 300px;
    padding: 0.5rem;
    font-size: 1.2rem;
    padding: 1rem;
    right: 0;
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    bottom: 0;
    z-index: 50;
    max-height: 23rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 0.5rem 0rem 0rem 0.5rem;
    color: #e7e7e7;
    background-color: #99b0f6;
`
export const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 23rem;
    position: relative;
`
export const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
export const RadionFormContainer = styled.div`
    display: flex;
    gap: 0.2rem;
`
export const MinusBtn = styled.span`
    position: absolute;
    font-size: 2rem;
    background-color: #99b0f6;
    border-radius: 10px;
    padding: 0.5rem;
    right: 103%;
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    bottom: 0;
    height: 2rem;
    cursor: pointer;
`