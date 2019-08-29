import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/tables';
const styles = require("./test.module.scss")
 
function App() {
  return (
    <div className={`${styles.test__lorem} ${styles.test}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={styles.text}>
          <code>Hola Mundo</code> <br/>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptas repellat tempore nihil, fuga pariatur illum asperiores praesentium porro cupiditate obcaecati commodi quidem magni id doloremque culpa maiores vel? Temporibus.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Table>
        <caption>Table description</caption>
        <thead>
          <th>First name:</th>
          <th>Last name:</th>
          <th>Age:</th>
        </thead>
        <tbody>
          <tr>
            <td>Adam</td>
            <td>Denisov</td>
            <td>26</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
