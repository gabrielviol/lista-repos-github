import { MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { Container, ContainerRepos, ContainerSearch, ContentRepos } from "./styles";

interface reposProps {
    id: string,
    name: string,
    description: string,
    pushed_at: string,
    html_url: string,
}

export function Main() {
    const [repos, setRepos] = useState<reposProps[]>([])
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/gabrielviol/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
    }, [])


        repos.sort((a, b) => {
            return b.pushed_at.localeCompare(a.pushed_at);
        })
       
    

    const dateFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle:"medium" });

    const lowerSearch = search.toLocaleLowerCase();

    const filter = search.length > 0 ? repos.filter(repo => repo.name.toLowerCase().includes(lowerSearch)) : [];

    const orderList = order === 'name' ? repos.sort((a,b) =>{ return a.name.localeCompare(b.name)}) : repos.sort((a,b) =>{ return b.pushed_at.localeCompare(a.pushed_at)})  


    return (
        <Container>
            <ContainerSearch>
                <div>
                <input type="text"
                    placeholder="Encontre um repositorio..."
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
                <MagnifyingGlass size={24} />
                </div>
                <div>
                    <button onClick={ e => setOrder('name')}>Nome</button>
                    <button onClick={e => setOrder('date')}>Data</button>
                    <select name="Filtro" id="" value="Filtro">
                    <option value="proprios">Próprios</option>
                    <option value="arquivados">Arquivados</option>
                    <option value="forks">Forks</option>
                    </select>

                </div>

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
                                    <p>{dateFormatter.format(new Date(repository.pushed_at))}</p>
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
                                    <p>{dateFormatter.format(new Date(repository.pushed_at))}</p>
                                </div>
                            </ContentRepos>
                        )
                    })}
                </ContainerRepos>
            ) }

        </Container>
    )
}