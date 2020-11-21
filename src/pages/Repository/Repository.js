import React from 'react';
import { Header, GitRepo } from '../../components';

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

export default function Repository({ navigation }) {
  function renderItem({ item }) {
    return <GitRepo />;
  }
  return (
    <>
      <Header back={() => navigation.goBack()}>10 repositórios</Header>
      <List
        ItemSeparatorComponent={() => <Separator />}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 31, paddingBottom: 75 }}
      />
    </>
  );
}
