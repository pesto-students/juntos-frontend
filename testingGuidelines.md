# Coding GuideLines

- For each component unit test cases are compulsory.
- At least 70% code coverage should be provided to for UI components.
- Test files should be added to component directory as `<component>.test.tsx/ts`.
## Why using RTL for testing.

- Jest with RTL
  - Pros
    - Easy to use.
    - No configuration required.
    - Allows unit and integration test without components implementation details.
  - Cons:
    - Doesn't allow dom rendering.
    - Doesn't allow component internal API usage which can include lifecycle or state.
- Cypress:
  - Pros
    - Cypress enables you to write all types of tests: End-to-end tests, Integration tests, Unit tests.
    - Cypress has a built-in mechanism that handles waiting for DOM elements.
  - Cons:
    - Cypress doesn't support browsers IE, Safari, or Opera.
    - working with Iframes is a complicated not supported properly as of now.

**PS:** Both Jest and Cypress can work together but Cypress not added in the project as of now due to time constraint but it will be included in our future scope.

Above details were extracted from following links:-s

- https://blog.logrocket.com/comparing-react-testing-libraries/
- https://blog.testery.io/pros-and-cons-of-cypress/
- https://knapsackpro.com/testing_frameworks/difference_between/cypress-io/vs/jests
- [What is the difference between using react testing library and cypress](https://stackoverflow.com/questions/59162638/what-is-the-difference-between-using-react-testing-library-and-cypress)
