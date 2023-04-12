# Bi-directional Contract Testing

## Setup

Pre-requisites:

1. [nodejs](https://nodejs.org/en/download/)
1. [yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
1. [docker](https://docs.docker.com/desktop/install/mac-install/)

## App

Run app before tests:
1. Launch command prompt (cmd)
1. `npm start`

## Cypress

1. Launch another command prompt (cmd)
1. `npm run cy:open` or `npm run cy:run`
1. Mac: `sudo chmod 755 ./publish.sh`
1. Terminal/CMD: `./publish.sh <PACT_BROKER_TOKEN> <CONSUMER_VERSION>` / `.\publish.bat <PACT_BROKER_TOKEN> <CONSUMER_VERSION>`
