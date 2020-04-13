import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory, withRouter } from 'react-router-dom';
import { Routes } from '../../routes/routes';

function a11yProps(index) {
  return {
    id: `Tab-${index}`,
    'aria-controls': `Tab-panel-${index}`,
  };
}

export const HeaderTabs = withRouter(({ location }) => {
  const history = useHistory();
  const handleChange = (event, newValue) => {
    history.push(newValue);
  };

  return (
    <Tabs
      value={location.pathname}
      onChange={handleChange}
      aria-label="simple tabs example"
    >
      {Routes.filter((route) => route.data && route.data.title).map(
        (route, i) => (
          <Tab
            value={route.path}
            key={route.path}
            label={route.data.title}
            {...a11yProps(route.data.title)}
          />
        )
      )}
    </Tabs>
  );
});
