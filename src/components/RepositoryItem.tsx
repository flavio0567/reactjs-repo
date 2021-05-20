interface RepositoryItemProps {
    repo: {
        full_name: string,
        description: string,
        html_url: string,
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repo.full_name ?? 'Default'}</strong>
                <p>{props.repo.description ?? 'blank'}</p>

                <a href="">{props.repo.html_url ?? 'http://facebook.com'}</a>
        </li>
    )
}