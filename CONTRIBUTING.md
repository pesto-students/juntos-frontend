# Coding guidelines

Developers are always welcome to contribute to this guidelines with clear examples.

## Git intructions

### Use typescript types as much as possible

- Avoid using “any” type
- Create interfaces for objects (this helps in standardising the structure of complex objects, and promotes reusability) - [Typescript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- some resources are:-
  - [Typescript Crash Course](https://www.youtube.com/watch?v=rAy_3SIqT-E&t=773s)
  - [Typescript for JS programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

### Prefer hooks over class components whenever possible

### Avoid using nested ternary use if else instead to make code more readable.

## Git intructions

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

- Avoid making large pull requests so that code review gets easier

## Structure the directory based on features.

- `src/common` folder will contains utilities that is common across multiple components.
- Component specific utilities will reside under their folder itself.

### Utils file

- If a utility method is specific only to the component, has logic specific to the component and cannot be used anywhere else, add it to `<ComponentName>.utils.ts` in the same folder as the component.
- Otherwise, add it to one of the files inside `src/common/utils.ts` folder.

### Interfaces file

- If an interface is specific only to the component, and cannot be used anywhere else
  - If an interface is small and a component needs 1-2 such interfaces, then the interface can be defined inside the component
  - Otherwise, use `<ComponentName>.interfaces.ts` file in the same folder as the component
- If an interface can be used by multiple components, methods etc (eg: module specific interface, api related interfaces), define them inside `src/common/interface.ts` folder

### Constants

- If an constant is specific only to the component, and cannot be used anywhere else
  - If an constants is less and a component needs 2-3 constant, then the constants can be defined inside the component
  - Otherwise, use `<ComponentName>.constants.ts` file in the same folder as the component
- If an constant can be used by multiple components, methods etc (eg: module specific constant, api related constant), define them inside `src/common/constants.ts` folder

```
  ├── src
  │    ├──Auth
       |   ├── Login.tsx
       |   ├── Logout.tsx
       |   └── Auth.interface.ts
       |
       ├──Room
       |   ├── Viewer.tsx
       |   ├── WatchParty.tsx
       |   └── Room.interface.ts
       |
       ├──Common
       |   ├── utils.ts
       |   ├── hooks.ts
       |   ├── interface.ts
       |   └── colors.ts
```

## Avoid hard-coding inside code

- Create constant variables.
- If constants are to be shared by multiple files, create a separate constants file.
- No magic numbers [what are magic numbers](<https://en.wikipedia.org/wiki/Magic_number_(programming)>).

## Use Absolute paths

- Avoid using relative path as during the development this imports become hard to manage.
- It makes it easier to move files/modules around in a predictable fashion.
