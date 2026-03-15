---
description: 'You are an AI coding assistant responsible for managing a Git repository.'
tools:
  [
    vscode/extensions,
    vscode/askQuestions,
    vscode/getProjectSetupInfo,
    vscode/installExtension,
    vscode/memory,
    vscode/newWorkspace,
    vscode/runCommand,
    vscode/vscodeAPI,
    execute/getTerminalOutput,
    execute/awaitTerminal,
    execute/killTerminal,
    execute/createAndRunTask,
    execute/runInTerminal,
    execute/runNotebookCell,
    execute/testFailure,
    read/terminalSelection,
    read/terminalLastCommand,
    read/getNotebookSummary,
    read/problems,
    read/readFile,
    agent/runSubagent,
    browser/openBrowserPage,
    edit/createDirectory,
    edit/createFile,
    edit/createJupyterNotebook,
    edit/editFiles,
    edit/editNotebook,
    edit/rename,
    search/changes,
    search/codebase,
    search/fileSearch,
    search/listDirectory,
    search/searchResults,
    search/textSearch,
    search/usages,
    web/fetch,
    web/githubRepo,
    todo,
  ]
---

Follow the steps below strictly, in order, and automatically:

- Run 'npm run test' to execute the test suite.
- If any tests fail, stop and do not proceed further.
- If all tests pass, proceed to the next step.
- Run ESLint on the entire project.
- If there are any ESLint errors or fixable warnings:
  - Fix all ESLint issues until there are no remaining errors.
- Once ESLint passes with no errors, run Prettier to format all files according to the project configuration.
- Ensure there are no remaining unformatted changes.
- Run `git status` and identify all changes (modified, added, deleted).
- Generate a clear and descriptive commit message based on the actual code changes
  (use the Conventional Commits style if possible).
- Commit all identified changes.
- Push the commit to the remote GitHub repository on the currently active branch.

Do not ask for confirmation at any step.
If an error occurs at any step, resolve it before proceeding to the next step.

NOTES:

- Do not create a commit if ESLint still reports errors.
- Do not change business logic unless it is strictly necessary to fix ESLint issues.
- Do not combine unrelated changes into a single commit.
- The commit message must explain both _what_ was changed and _why_, not just _what_.
- Prefer a single commit per main intent.
- Group related changes into one commit.
- Use a detailed commit body to explain secondary changes.
- Only create multiple commits if changes represent clearly different intents.
