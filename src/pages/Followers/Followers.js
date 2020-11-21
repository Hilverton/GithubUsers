import React from 'react';

import { Header, User } from '../../components';

import { List, Separator } from './styles';

const data = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
  {
    id: '5',
  },
  {
    id: '6',
  },
];

export default function Followers({ navigation }) {
  function renderItem({ item }) {
    return <User />;
  }
  return (
    <>
      <Header back={() => navigation.goBack()}>10 seguidores</Header>
      <List
        ItemSeparatorComponent={() => <Separator />}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 11, paddingBottom: 65 }}
      />
    </>
  );
}
