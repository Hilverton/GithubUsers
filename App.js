import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Authentication } from './src/routes';

export default function App() {
  return (
    <>
      <Authentication />
      <StatusBar style='light' />
    </>
  );
}
