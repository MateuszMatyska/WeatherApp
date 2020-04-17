import React from 'react';

export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export const goBack = () => {
  navigationRef.current?.goBack();
};

export const openDrawer = () => {
  navigationRef.current?.openDrawer();
}

export const toggleDrawer = () => {
  navigationRef.current?.toggleDrawer();
}