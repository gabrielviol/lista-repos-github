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
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/gabrielviol/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
    }, [])

    const lowerSearch = search.toLocaleLowerCase();

    const filter = search.length > 0 ? repos.filter(repo => repo.name.toLowerCase().includes(lowerSearch)) : [];

    return (
        <Container>
            <ContainerSearch>
                <input type="text"
                    placeholder="Encontre um repositorio..."
                    onChange={e => setSearch(e.target.value)}
                />

                <MagnifyingGlass size={24} />

            </ContainerSearch>

            {search.length > 0 ? (

                <ContainerRepos>
                    {filter.map(repository => {
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
            ) : (
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
            ) }

        </Container>
    )
}