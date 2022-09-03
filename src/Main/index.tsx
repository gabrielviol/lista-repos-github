import { MagnifyingGlass } from "phosphor-react";
import { Container, ContainerRepos, ContainerSearch } from "./styles";

export function Main(){
    return(
        <Container>
            <ContainerSearch>
                <input type="text" placeholder="Encontre um repositorio..." />
                <MagnifyingGlass size={24} />
            </ContainerSearch>

            <ContainerRepos>
            <div>                
                <a href="/">Repositório 1</a>
            </div>

            <div>                
                <a href="/">Repositório 2</a>
            </div>

            <div>                
                <a href="/">Repositório 3</a>
            </div>
            </ContainerRepos>
        </Container>
    )
}