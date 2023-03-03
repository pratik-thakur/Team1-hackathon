# Team 1 - Hackathon

BrowserStack Automate and Test Observability setup with Percy

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

## Setup

* Clone the repo and run `cd Team1-hackathon`
* Run `npm install`

## Running your tests

- Provide your BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY as follows

For Mac
export BROWSERSTACK_USERNAME=username && export BROWSERSTACK_ACCESS_KEY=accesskey
 
For Windows
set BROWSERSTACK_USERNAME=username
set BROWSERSTACK_ACCESS_KEY=acceskey

Also, to be able to execute the percy tests, you will need to add your Percy project token


To run the test, execute:
npm test