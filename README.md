# demo-cypress-cloud

Demo of Cypress Cloud Testing using cypress.io to capture test results and video.

Needed:
- a free cypress.io cloud account: `https://cloud.cypress.io`
- a project in cypress.io (projectId & record key)

Setup:
  - cypress.io "new project" wizard will also cover this
  - add cypress record ksy into GitHub Secrets as `CYPRESS_RECORD_KEY`
  - add projectId to cypress.config.js as `projectId`
  - run tests locally or using GitHub Action on push
