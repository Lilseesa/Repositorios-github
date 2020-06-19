import React, { useState, useEffect } from 'react';
import axios from "../utils/axios";

import ReposList from './ReposList'
import Nav from './Nav'
import User from './User'

const App = () => {

	const [ repos, setRepos ] = useState();
	const [user, setUser] = useState({});

	const getRepos = () => {
		axios
			.get('/user/repos?sort=updated_at')
			.then((res) => {
				console.log(res.data);

				//antes this.setStateahora con hooks:
				setRepos(res.data);
			})
			.catch((err) => {console.error(err);
			});
	};

	const getUser = () => {
		axios
			.get('/user')
			.then((res) => {
				console.log(res.data);

				//antes this.setStateahora con hooks:
				setUser(res.data);
			})
			.catch((err) => {console.error(err);
			});
	};

	//con hooks no es componentDidUpdate con hooks se usa useEffect
	//recibe 2 parametros una funcion anonima y un array de dependencias
	useEffect(() => {
		getRepos();
		getUser();
	} , []);

	return(
		<>
			<header className="header">
				<Nav></Nav>
			</header>
			<div className="app">
				<header className="header">
					{user && <User user={user}> </User>}
				</header>
				<div>
					<main>
						<nav className="main-menu">
							<ul className="list">
								<li className="list__item">
									<a className="list__item__link list__item__link--active" href="/"> 
										Repositorios
									</a>
								</li>
							</ul>
						</nav>

						{repos && <ReposList repos={repos}></ReposList>}
					</main>
				</div>
			</div>
		</>
	);
};

export default App;

//token 8c758a06934d0225984a926ace3687fda7713b51