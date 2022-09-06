import { MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { Container, ContainerRepos, ContainerSearch, ContentRepos } from "./styles";

interface reposProps {
    id: string,
    name: string,
    description: string,
    updated_at: string,
    html_url: string,
}

export function Main() {
    const [repos, setRepos] = useState<reposProps[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/gabrielviol/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
    }, [])

    function handleInputChange(e){
        e.preventDefault()
        e.target.value()
        console.log(e)
    }

    return (
        <Container>
            <ContainerSearch>
                <input type="text" placeholder="Encontre um repositorio..." onChange={handleInputChange}/>
                <MagnifyingGlass size={24} />
            </ContainerSearch>

            <ContainerRepos>

                {repos.map(repository => {
                    return (
                        <ContentRepos key={repository.id}>
                            <div>
                                <a href={repository.html_url} target="_blank">{repository.name}</a>
                                <p>{repository.description}</p>
                            </div>
                            <div>
                                <span>Ultima atulização</span>
                                <p>{repository.updated_at}</p>
                            </div>
                        </ContentRepos>
                    )
                })}

            </ContainerRepos>
        </Container>
    )
}