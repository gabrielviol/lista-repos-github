import { FileSearch, MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import { Container, ContainerRepos, ContainerSearch, ContentRepos } from "./styles";

interface reposProps {
    id: string,
    name: string,
    description: string,
    pushed_at: string,
    html_url: string,
    fork: number,
    license: object,
    archived: boolean
}

export function Main() {
    const [repos, setRepos] = useState<reposProps[]>([])
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState('date');
    const [filterType, setFilterType] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/gabrielviol/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
    }, [])
    const dateFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: "medium" });

    const lowerSearch = search.toLocaleLowerCase();

    const filterSearch = search.length > 0 ? repos.filter(repo => repo.name.toLowerCase().includes(lowerSearch)) : repos;

    const filterForType = 
        filterType === 'forks' ? filterSearch.filter(repo => repo.fork > 0) : 
        filterType === 'license' ? filterSearch.filter(repo => repo.license != null) : 
        filterType === 'archived' ? filterSearch.filter(repo => repo.archived == true) : 
        filterSearch


    order === 'name' ?
    filterForType.sort((a, b) => { return a.name.localeCompare(b.name) }) :
    filterForType.sort((a, b) => { return b.pushed_at.localeCompare(a.pushed_at) });

    console.log(repos.length)

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
                    <button onClick={e => setOrder('name')}>Nome</button>
                    <button onClick={e => setOrder('date')}>Data</button>

                    <select name="filtro" id="filtro" onChange={e => setFilterType(e.target.value)} >
                        <option>Todos</option>
                        <option value="archived" >Arquivados</option>
                        <option value="license" >Com licença</option>
                        <option value="forks" >Forks</option>
                    </select>

                </div>

            </ContainerSearch>
                <ContainerRepos>
                    {filterForType.map(repository => {
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
        </Container>
    )
}