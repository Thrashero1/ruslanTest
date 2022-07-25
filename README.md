# Test using Cypress

This is a quick api test for the API for converting unix epoch time to human readable format

## Requirements
The following programs are required for the installation and running of this test.

Node JS: Verions 12 or higher. This can be installed from [node](https://nodejs.org/en/)
This should also install the npm package handler.

Yarn: This can be installed via npm using the command
```bash
npm install -g yarn
```

Once that is done cd into to the folder where the project is cloned and run 
```bash
yarn
```
This will install all of the required packages to run this project.

When complete run the following cli command to execute the test:
### Uisng the cypress GUI
```bash
yarn cy:open
```
### Run the test headlessly
```bash
yarn cy:test
```

## Report

The report, while using the GUI method, is essentially the  results shown within the GUI itself.

The report is generated automatically when running the tests headlessly

This report is saved within the folder {path to cloned repo}/cypress/reports/. This is overwritten after each run