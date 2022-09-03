import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`;

export const ContainerSearch = styled.div`
    display: flex;
    align-items: center;

      input {
            border-radius: 6px;
            border: 0;
            background: #121214;
            color: #C4C4CC;
            width: 25rem;
            padding: 0.5rem;         
            
            &::placeholder {
                color: #7C7C8A;
            }
        }
        
        svg{
            margin-left: -2rem;
            cursor: pointer;
        }
`;

export const ContainerRepos = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    gap: 2rem;

    div {
        display: flex;
        align-items: center;
        padding: 2rem;
        height: 100px;
        border: 1px solid;
        border-radius: 1rem;
    }
`;