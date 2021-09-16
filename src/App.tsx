import * as React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import green from '@material-ui/core/colors/green';
import MainLayout from './layouts/main.layout';
import ListAllBmi from './screens/Reports/ListAllBmi';
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: green[900]
      },
      secondary: {
        main: green[500]
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainLayout>
              <ListAllBmi />
            </MainLayout>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
