import React, { useState, createContext } from 'react';

const DataContext = createContext({});

export function DataProvider({ children }) {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  async function getData(username) {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();
    const {
      avatar_url,
      bio,
      followers,
      following,
      login,
      email,
      name,
      public_repos,
      location,
    } = data;

    setUser({
      avatar_url,
      bio,
      followers,
      following,
      login,
      email,
      name,
      public_repos,
      location,
    });

    response = await fetch(`${data.repos_url}`);
    data = await response.json();

    dataRepo = data.map((d) => ({
      id: String(d.id),
      stars: d.stargazers_count,
      name: d.name,
      description: d.description,
    }));

    setRepos(dataRepo);
  }

  function exit() {
    setUser({});
    setRepos([]);
  }

  return (
    <DataContext.Provider value={{ getData, user, exit, repos }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
