import styled from "styled-components";

export const MiniEmployeeStyle = styled.div`
    display: flex;
    max-width: 15rem;
    height: 3rem;
    font-size: 1.1rem;
    background-color: rgba(243,241,241,0.912);
    border-bottom:  solid 2px  rgb(221, 221, 221);
    padding: 0.4rem;
    justify-content: space-between;
    align-items: center;
`

export const MiniInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`
export const BtnDelete = styled.span`
    font-size: 1.5rem;
`