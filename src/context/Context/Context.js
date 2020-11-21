import React, { useState, createContext } from 'react';

const DataContext = createContext({});

export function DataProvider({ children }) {
  const [user, setUser] = useState({});

  async function getData(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
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
  }
  return (
    <DataContext.Provider value={{ getData, user }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
