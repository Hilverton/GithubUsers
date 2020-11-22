import React, { useEffect, useContext } from 'react';

import { DataContext } from '../../context';

import { Header, User } from '../../components';

import { List, Separator } from './styles';

export default function Followers({ navigation }) {
  const { followers, getFollowers } = useContext(DataContext);

  useEffect(() => {
    getFollowers();
  }, []);

  function renderItem({ item }) {
    return <User data={item} />;
  }
  return (
    <>
      <Header back={() => navigation.goBack()}>
        {followers.length} seguidores
      </Header>
      <List
        ItemSeparatorComponent={() => <Separator />}
        data={followers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 11, paddingBottom: 65 }}
      />
    </>
  );
}
