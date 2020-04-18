import React from 'react';
import { DrawerActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const openDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

export const toggleDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.toggleDrawer());
}

export const closeDrawer = () => {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}