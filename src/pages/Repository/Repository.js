import React, { useEffect, useContext } from 'react';

import { DataContext } from '../../context';

import { Header, GitRepo } from '../../components';

import { List, Separator } from './styles';

export default function Repository({ navigation }) {
  const { repos, getRepos } = useContext(DataContext);

  useEffect(() => {
    getRepos();
  }, []);

  function renderItem({ item }) {
    return <GitRepo data={item} />;
  }
  return (
    <>
      <Header back={() => navigation.goBack()}>
        {repos.length} repositórios
      </Header>
      <List
        ItemSeparatorComponent={() => <Separator />}
        data={repos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 31, paddingBottom: 75 }}
      />
    </>
  );
}
