# proxySEP

This repository contains a small JavaScript server which acts as a proxy that links the backend services of the Flora project.

## Installation :page_facing_up:

In order to run the server, you need both Node and Yarn. Node.js is available at https://nodejs.org/en/ and Yarn can be installed directly from Node using npm install --global yarn.

Use __yarn add express http-proxy-middleware morgan__ in order to install the needed dependencies.

## Launching :rocket:

The server can be started using __npm start__ it should display that the proxy has started and the listen port.

## Configuration :wrench:

The port on which the proxy is listening and the redirect URLs are in the index.js file, the default value for the port is 8090 and the URLs are the same as the default one from the Flora backend services.