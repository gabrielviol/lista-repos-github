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
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
    }

    div:nth-child(2){
        gap: 2rem;

        button{
            padding: 5px 15px;
            border: 0;
            border-radius: 10px;
            background-color: #3967e2;
            color: #b0c4ff;
            cursor: pointer;
        }
        button:hover{
            opacity: 0.7;
            transition: 0.2;
        }
        button:focus{
            border: 2px solid #121214;
        }
        select{
            padding: 5px 15px;
            border: 0;
            border-radius: 10px;
            background-color: #3967e2;
            color: #b0c4ff;
        }
    }

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
    }
`;

export const ContainerRepos = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    gap: 2rem;

`;

export const ContentRepos = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        height: 100px;
        border: 1px solid #3967e2;
        border-radius: 1rem;

        a{
            color: #7596f1;
            font-size: 28px;
            text-decoration: none;
            border: none;
            outline: none;
        }  
        a:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }         

        div {
            display: flex;
            flex-direction: column;
        }

        span{
            color: #7596f1;
            font-size: 18px;            
        }
        p{
            color: #7d7d7d;
            font-size: 15px;
            margin-right: 10px;
        }
`
