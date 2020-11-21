import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Authentication } from './src/routes';
import { DataContext, DataProvider } from './src/context';

export default function App() {
  return (
    <>
      <DataProvider>
        <Authentication />
      </DataProvider>
      <StatusBar style='light' />
    </>
  );
}
