# E2E test automation framework demo

The purpose of this framework is to show intuitive E2E UI test automation framework on virgingames platform.

### Tech stack

The test framework is written as a NodeJS application and dependencies are managed through `npm`. The framework uses the WebDriverIO for web driver binding, ChromeDriver, Mochajs for defining test suite (describe) or spec (it) and chaijs for assertion. E2E test will run against the chrome browser.

### Running the tests locally Step by step (verified on macOS)

Run the test suite locally via the following steps:

1. Install the latest version of [NodeJS][node]

2. Clone or download this repository.

3. Install its dependencies by running 'npm install' in the project folder.

4. Use `npm test` to kickoff the test suite.

```sh
git clone https://github.com/nirmalbaral/gamesys-demo.git
cd ./gamesys-demo
npm install
npm test
```

### Errors

all tests are depends on availibility of `https://www.virgingames.com/`.

### Project stucture

The spec files that list and defined the test cases are under /specs/. The webdriveio settings are configured to the configuration file `wdio.conf.js`.

    .
    ├── ...
    ├── test                    # test folder (alternatively `spec` or `suit`)
    │   ├── helpers             # helpers functions and thirdparty library files
    │   ├── pageobjects         # page object functions files
    │   └── specs               # test specs/suites
    │       ├── api             # api test specs/suites
    └── ... └── pages           # pages test specs/suites

#### Adding new tests in a new spec file

Create a new js file ending in spec.js and put it under /specs/pages/.

#### Adding new tests in an existing spec file

Add new spec (it) in the existing file.

#### Report generation

Provides intuitive test report after the completion of test by creating test results in the json format file `gamesys-demo-result.json` and generates a report based on [Mochawesome-report][report] and [generator][marge].

[credential]: https://github.com/nirmalbaral/gamesys-demo/blob/master/test/pageobjects/page.js#L15
[report]: https://github.com/adamgruber/mochawesome
[marge]: https://github.com/adamgruber/mochawesome-report-generator
[node]: https://nodejs.org/en/download/
