import './App.css';
import NavBar from './NavBar';
import Dog from './Dog';
import { Redirect, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import dogList from './dogList';

function App() {
  return (
    <div className="App">
      <h1>Dogs</h1>
      <NavBar />
      <Switch>
        {dogList.map(dog => (
          <Route
            key={dog.name}
            path={`/dogs/${dog.name.toLowerCase()}`}
            render={() => (
              <Dog name={dog.name} age={dog.age} src={dog.src} facts={dog.facts} />
        )}
          />
        ))}
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
}

export default App;