# `Tables`

>  `<Table>` tag component for TODO.

## Usage

Default usage

```js
import Table from "tables";

const Example: FunctionComponent = () => {
  return (
    <div>
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
};
```

Advanced usage

```js
import Table from "tables";

const Example: FunctionComponent = () => {
  return (
    <div className="App">
      <Table border hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td aria-label="TODO">@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
```

## Documentation

> for more documentation and use example visit TODO: link
