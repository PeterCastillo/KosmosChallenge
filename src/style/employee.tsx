import styled from "styled-components";

export const EmployeeStyle = styled.div`
    display: flex;
    flex: 1 1 20rem;
    background-color: rgba(243, 241, 241, 0.912);
    border-radius: 0.5rem;
    flex-direction: column;
    padding: 0.5rem;
    position: relative;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const EmployeeInfo = styled.div`
    display: flex;
    padding: 0.5rem;
    font-size: 1.2rem;
    gap: 0.4rem;
`
export const EmployeeDelteteBtn = styled.span`
    cursor: pointer;
    font-size: 1.5rem;
    position: absolute;
    background-color: rgb(238, 46, 46);
    color: #e7e7e7;
    top: 0;
    right: 0;
    padding: 0.5rem;
    border-radius: 0.3rem;
`
export const Title = styled.span`
    font-size: 1.8rem;
    font-weight: bold;
    align-self: center;
`