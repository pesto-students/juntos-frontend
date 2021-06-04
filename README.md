# Juntos Frontend

### How to use Project.

- run `yarn install` or `npm install` to install all required project dependencies.
- run `yarn start` or `npm start` to run project.

### Coding guidelines

Developers are always welcome to contribute to this guidelines with clear examples.

---

- Use typescript types as much as possible

  - Avoid using “any” type
  - Create interfaces for objects (this helps in standardising the structure of complex objects, and promotes reusability) - [Typescript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)

- Utils file

  - If a utility method is specific only to the component, has logic specific to the component and cannot be used anywhere else, add it to `<component_name>.utils.ts` in the same folder as the component.
  - Otherwise, add it to one of the files inside `src/common/utils.ts` folder.

- Styles file

  - If a styles is specific only to the component and cannot be used anywhere else, add it to `<component_name>.style.ts` in the same folder as the component.
  - Otherwise, add styled component to `components` folder.

- Interfaces file

  - If an interface is specific only to the component, and cannot be used anywhere else
    - If an interface is small and a component needs 1-2 such interfaces, then the interface can be defined inside the component
    - Otherwise, use `<component_name>.interfaces.ts` file in the same folder as the component
  - If an interface can be used by multiple components, methods etc (eg: module specific interface, api related interfaces), define them inside `src/common/interface.ts` folder

- Always use hooks. Do not create any component in classes

  - Older components can remain class based, but no new component should be in class
  - Never break the rules of hooks - https://reactjs.org/docs/hooks-rules.html.

- Constants

  - If an constant is specific only to the component, and cannot be used anywhere else
    - If an constants is less and a component needs 2-3 constant, then the constants can be defined inside the component
    - Otherwise, use `<component_name>.constants.ts` file in the same folder as the component
  - If an constant can be used by multiple components, methods etc (eg: module specific constant, api related constant), define them inside `src/common/constants.ts` folder

- Commit message format

  - Every commit message should in active case. Must not be greater than 72 characters. Should
    summarize the code changes in commit.
    Reference: [how to write good commits](https://chris.beams.io/posts/git-commit)

  - Rules for committing:

    - Separate subject from body with a blank line
    - Limit the subject line to 50 characters
    - Capitalize the subject line
    - Do not end the subject line with a period
    - Use the imperative mood in the subject line
    - Wrap the body at 72 characters
    - Use the body to explain what and why vs. How

- Avoid using nested ternary use if else instead to make code more readable.

- Structure the directory based on features rather than conventional structure.
  - common folder will contains utilities that is common across multiple components.
  - Component specific utilities will reside under their folder itself.

```
  ├── src
  │    ├──Auth (Directory name)
       |   ├── Login.tsx
       |   ├── Logout.tsx
       |   ├── Auth.interface.ts (interface and types for components)
       |   └── Auth.style.css (Style)
       |
       ├──Room (Directory name)
       |   ├── Viewer.tsx
       |   ├── WatchParty.tsx
       |   ├── Room.interface.ts
       |   └── Room.style.css
       ├──Common (Directory name)
       |   ├── utils.ts
       |   ├── hooks.ts
       |   ├── interface.ts
       |   └── colors.ts
```

- Avoid making large pull requests so that code review gets easier

- Avoid hard-coding inside code

  - Create constant variables.
  - If constants are to be shared by multiple files, create a separate constants file.
  - No magic numbers [what are magic numbers](<https://en.wikipedia.org/wiki/Magic_number_(programming)>).
