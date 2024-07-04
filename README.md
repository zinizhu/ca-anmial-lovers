# CA Animal Lovers

## Getting Started

1. Install dependencies:

   ```sh
   $ npm install
   ```

2. Set up local DB by following [this doc](./backend/README.md).

3. In two separate terminal, run:

   ```sh
   $ npm run start:frontend
   ```

   and

   ```sh
   $ npm run start:backend
   ```

4. Visit `localhost:5173`.

## VSCode Formatter

1. Install the `Prettier - Code formatter` Extension.

2. Add this snippet to the `settings.json` file:

```json
{
  // ... other settings
  "editor.fontSize": 14,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
