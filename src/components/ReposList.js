import React from 'react';

import Repo from './Repo';

    const ReposList = ({ repos }) => (
        <div className="container">
            <ul className="list list--vertical">
                {repos.map((repo) => {
                    return <Repo key={repo.id} repo={repo}></Repo>; 
                })}
            </ul>
        </div>
    );

export default ReposList;