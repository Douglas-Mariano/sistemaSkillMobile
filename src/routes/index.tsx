import React from 'react';
import { SkillsProvider } from '../contexts/SkillsContext';
import StackRoute from './StackRoute';

const Routes: React.FC = () => {
  return (
    <SkillsProvider>
      <StackRoute />
    </SkillsProvider>
  );
};

export default Routes;
