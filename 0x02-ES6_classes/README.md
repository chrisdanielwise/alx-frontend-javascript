## Rules for Not Pushing Node Modules

- Do **not** push Node modules to the repository.
- Make sure the `.gitignore` file in the project root includes the entry `node_modules/`.
- Node modules should be installed locally on each development environment using the `npm install` command.
- The `node_modules/` directory should be excluded from version control to keep the repository size manageable.
- If you need to update or add a dependency, update the `package.json` file and run `npm install` to install the updated modules.