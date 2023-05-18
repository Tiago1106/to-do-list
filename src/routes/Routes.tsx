import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
        <ActivityIndicator size="large" color="#999" />
    );
  }

  // return <AppRoutes />;
  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;