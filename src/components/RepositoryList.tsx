import { RepositoryItem } from "./RepositoryItem";

// import { repositories } from "../styles/repositories";
import { useEffect, useState } from "react";

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/facebook/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                {repositories.map(repository => 
                    <RepositoryName key={repository} reposiroty={repository}  />
                    )}
                
            </ul>
        </section>
    )
}