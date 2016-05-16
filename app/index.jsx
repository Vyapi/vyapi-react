import React from 'react';
import ReactDOM from 'react-dom';

const ProjectTitle = React.createClass({
  render() {
    return (
      <h1> Vyapi </h1>
    );
  }
});

const rootDOM = document.getElementById('root');

ReactDOM.render(
  <ProjectTitle />,
  rootDOM
);
