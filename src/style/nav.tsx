import styled from "styled-components";

export const NavContainer = styled.div`
    background-color: #99b0f6;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #e7e7e7;
`

export const NavStyle = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1200px;
    margin: auto;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    align-items: center;
    position: relative;
`

export const Title = styled.span`
    font-weight: bold;
    font-size: 1.5rem;
`

export const MiniEmployeeSection = styled.span`
    font-size: 3rem;
    cursor: pointer;
`
export const MenuEmployee = styled.div`
    position: absolute;
    width: 15rem;
    height: 10rem;
    right: 0;
    top: 100%;
    z-index: 25;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    color: #373737;
    font-weight: 400;
`