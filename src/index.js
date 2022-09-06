import { createGraphiQLFetcher } from '@graphiql/toolkit';
import { GraphiQL } from 'graphiql';
import React from 'react';
import ReactDOM from 'react-dom';

import 'index.css';
import 'graphiql/graphiql.css';

const server = prompt('GraphQL server')

const fetcher = createGraphiQLFetcher({
  url: server,
});

ReactDOM.render(<GraphiQL fetcher={fetcher} />, document.body);