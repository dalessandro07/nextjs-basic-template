# My nextjs-basic-template 🚀

With bun.sh, simple but extremely fast.

### Includes:

- [Tailwind CSS](https://tailwindcss.com/docs/installation "TailwindCSS docs") - Utility-first CSS framework, you already know it.
- [Shadcn/ui](https://ui.shadcn.com/ "shadcn/ui website") - Beautiful designed components - open source.
- [ESLint](https://eslint.org/ "ESLint website") - Find and fix problems in your code.
- [Husky](https://github.com/typicode/husky "Husky repo") - Git hooks made easy.

### Use this template:

1. Install bun.js locally:

   ```bash
   # Linux & macOS
   curl -fsSL https://bun.sh/install | bash

   # Windows
   powershell -c "irm bun.sh/install.ps1 | iex"
   ```
2. Install dependencies.

   ```bash
   bun install
   ```
3. Run the project.

   ```bash
   bun run dev
   ```

### Project structure:

- **/src:** Root source folder.
- **/src/app/(routes):** Contains the app routes.
- **/src/core:** Contains the layout and ui components, constants, types, lib, and the script to generate version from package.json.

### Dependencies

###### Dev Dependencies:

```json
"devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "eslint": "^8",
    "eslint-config-next": "15.0.0-rc.0"
  }
```

###### Runtime Dependencies

```json
"dependencies": {
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.407.0",
    "next": "15.0.0-rc.0",
    "react": "19.0.0-rc-f994737d14-20240522",
    "react-dom": "19.0.0-rc-f994737d14-20240522",
    "tailwind-merge": "^2.4.0",
    "tailwindcss-animate": "^1.0.7"
  }
```
