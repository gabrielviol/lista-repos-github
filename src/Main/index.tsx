import { MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { Container, ContainerRepos, ContainerSearch, ContentRepos } from "./styles";

interface reposProps {
    id: string,
    name: string,
    description: string,
}

export function Main() {
    const [repos, setRepos] = useState<reposProps[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/gabrielviol/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
    }, [])

    return (
        <Container>
            <ContainerSearch>
                <input type="text" placeholder="Encontre um repositorio..." />
                <MagnifyingGlass size={24} />
            </ContainerSearch>

            <ContainerRepos>

                {repos.map(repository => {
                    return (
                        <ContentRepos key={repository.id}>
                            <div>
                            <a href="/">{repository.name}</a>
                            <span>{repository.description}</span>
                            </div>
                            <div>
                                <span>Ultima atulização</span>
                                <span>13/05/2022</span>
                            </div>
                        </ContentRepos>
                    )
                })}

            </ContainerRepos>
        </Container>
    )
}