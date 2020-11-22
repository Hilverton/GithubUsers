import React, { useState, createContext } from 'react';

const DataContext = createContext({});

export function DataProvider({ children }) {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

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
      repos_url,
      followers_url,
      following_url,
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
      repos_url,
      followers_url,
      following_url,
    });
  }

  async function getRepos() {
    const response = await fetch(user.repos_url);
    const data = await response.json();

    const dataRepo = data.map((d) => ({
      id: String(d.id),
      stars: d.stargazers_count,
      name: d.name,
      description: d.description,
    }));

    setRepos(dataRepo);
  }

  async function getFollowers() {
    const response = await fetch(user.followers_url);
    const data = await response.json();

    const dataFollower = data.map((d) => ({
      id: String(d.id),
      login: d.login,
      avatar: d.avatar_url,
    }));

    setFollowers(dataFollower);
  }

  async function getFollowing() {
    const url = user.following_url.slice(0, user.following_url.length - 13);
    const response = await fetch(url);
    const data = await response.json();

    const dataFollowing = data.map((d) => ({
      id: String(d.id),
      login: d.login,
      avatar: d.avatar_url,
    }));

    setFollowing(dataFollowing);
  }

  function exit() {
    setUser({});
    setRepos([]);
    setFollowers([]);
    setFollowing([]);
  }

  return (
    <DataContext.Provider
      value={{
        getData,
        user,
        exit,
        repos,
        getRepos,
        followers,
        getFollowers,
        following,
        getFollowing,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
