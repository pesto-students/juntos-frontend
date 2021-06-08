# Contribution guidelines

Developers are always welcome to contribute to this guidelines with clear examples

## General guidelines

- Avoid hard-coding values instead create constant variables
- If constants are to be shared by multiple files, create a separate constants file
- Avoid [magic numbers](<https://en.wikipedia.org/wiki/Magic_number_(programming)>)
- Use absolute paths for `import` statements
- Avoid using nested ternary, instead use `if`-`else` blocks

## Typescript

- All code is written in TypeScript unless there's a good reason not to do so
- Avoid using `Any`
- Create interfaces for objects - [Typescript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- Some resources to get started on TypeScript:-
  - [Typescript Crash Course](https://www.youtube.com/watch?v=rAy_3SIqT-E&t=773s)
  - [Typescript for JS programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## React

- Prefer hooks over class components whenever possible

## Git and Github

- Avoid making large pull requests so that code review gets easier
- Add appropriate documentation with your changes

### Commit messages

Commit messages should adhere to the following guidelines:

- Should in active case
- Should be divided into a subject line and a body
- The subject summarizes the code changes in commit
- Use the body to explain what and why vs. How
- Separate subject from body with a blank line
- Use the imperative mood in the subject line
- Do not end the subject line with a period
- Limit the subject line to 50 characters
- Capitalize the subject line
- Wrap the body at 72 characters

Reference: [how to write good commits](https://chris.beams.io/posts/git-commit)

## Directory structure

Structure the directory based on features

```
  └── src
       ├──auth
       |   ├── Login.tsx
       |   ├── Logout.tsx
       |   ├── *.styles.ts
       |   └── Auth.interface.ts
       |
       ├──room
       |   ├── Viewer.tsx
       |   ├── WatchParty.tsx
       |   ├── *.styles.ts
       |   └── Room.interface.ts
       |
       └──common
           ├── utils
           ├── hooks
           ├── interface
           └── constants
                ├── index.ts
                └──colors.ts
```

### Naming

Lowercase is preferred for file and folder names, one exception to this is Files which represent the React components, for which PascalCase is preferred.

### Constants

- If a constant is specific only to the component, then the constants can be defined inside the component
- If a constant can be used by multiple components (eg: module specific constant, api related constant), define them inside `src/common/constants` folder

### Utilities

- `src/common/utils` folder will contain utilities that are common across multiple components
- If a utility method is specific only to the component, has logic specific to the component and cannot be used anywhere else, add it to `<ComponentName>.utils.ts` in the same folder as the component.

### Interfaces

- If an interface is specific only to the component, then the interface can be defined inside the component
- If an interface can be used by multiple components, methods etc (eg: module specific interface, api related interfaces), define them inside `src/common/interface` folder

### Styles

- `src/components` will contain reusable UI component for eg. `Button`, `Input` etc.
- If a style is specific only to the component, and cannot be used anywhere else, add it to `<ComponentName>.styles.ts` in the same folder as the component.
