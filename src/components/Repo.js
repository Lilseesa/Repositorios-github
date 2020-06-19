import React from 'react';

const Repo = ({ repo }) => (
    <li className="list__item">
        <h3 className="list__item__title">
            <a target="_blank" href={repo.svn_url} rel="noopener noreferrer">
                {repo.name}
            </a>
            {repo.private ? <small className="badge-private">Private</small> : ''}
        </h3>
        <p>{repo.description}</p>
        <p className="list__item__description">{repo.language}</p>
    </li>
);

export default Repo;