import React, { useEffect, useContext } from 'react';
import { useRoute } from '@react-navigation/native';

import { DataContext } from '../../context';

import { Header, User } from '../../components';

import { List, Separator } from './styles';

export default function Followers({ navigation }) {
  const { followers, getFollowers, following, getFollowing } = useContext(
    DataContext,
  );
  const route = useRoute();

  useEffect(() => {
    route.name === 'Seguidores' ? getFollowers() : getFollowing();
  }, []);

  function renderItem({ item }) {
    return <User data={item} />;
  }
  return (
    <>
      <Header back={() => navigation.goBack()}>
        {route.name === 'Seguidores'
          ? `${followers.length} seguidores`
          : `Seguindo ${following.length}`}
      </Header>
      <List
        ItemSeparatorComponent={() => <Separator />}
        data={route.name === 'Seguidores' ? followers : following}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 11, paddingBottom: 65 }}
      />
    </>
  );
}
