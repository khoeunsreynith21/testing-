# React project

A React application using Vite, JavaScript, Tailwind CSS, and shadcn/ui.

## Login form

The app displays a login form in `src/App.jsx` built with the shadcn/ui
Card, Input, Label, Button, and Alert components. It uses the Mira preset with
Base UI, neutral colors, and the locally bundled Inter font.
It has labeled email and password fields and a Log in button.
The browser checks required fields and email format before submission.

Use this demo account to log in:

- Email: `demo@example.com`
- Password: `Demo123!`

The `handleSubmit` function prevents a page reload and checks these demo
credentials. Incorrect details show an error. Correct details display a welcome
screen with the user's email and a Log out button.

The user profile is kept only in React state (memory). Refreshing the page or
clicking Log out clears it. The submitted password is not saved in user state,
local storage, or session storage, and no credentials are sent over the network.

This is a frontend demo for learning. The demo credentials are visible in the
source code; real authentication and access control require a backend or an
authentication service.

## Start working

This project was checked with Node.js 22.16.0. If using Node 22, use version
22.13.0 or later to meet the installed development tools' requirements.

Open a terminal in the project folder. On a fresh checkout, install the locked
dependencies:

```powershell
npm.cmd ci
```

Start the development server:

```powershell
npm.cmd start
```

`npm.cmd run dev` also starts the same server. Open the local URL printed in
the terminal. Edit `src/App.jsx` and save to see changes. Press Ctrl+C to stop.

PowerShell on this computer blocks the `npm.ps1` launcher. Use `npm.cmd` as shown
above without changing the execution policy. On macOS, Linux, or Command
Prompt, you can use `npm` instead.

## Check and build

```powershell
npm.cmd run check
```

This checks the code with ESLint, then creates the production build in `dist/`.
You can run each step separately with `npm.cmd run lint` and `npm.cmd run build`.

To preview the production build after building:

```powershell
npm.cmd run preview
```

## Project files

- `src/main.jsx`: React entry point.
- `src/App.jsx`: main component and page content.
- `src/components/ui/`: installed shadcn components you can edit.
- `src/lib/utils.js`: shared class name utility.
- `src/index.css`: Tailwind imports, global styles, and shadcn theme colors.
- `src/assets/`: images imported by components.
- `public/`: static files served directly.
- `index.html`: page title, metadata, and application mount point.
- `vite.config.js`: development server and build configuration.
- `eslint.config.js`: code checking rules.
- `jsconfig.json`: maps `@/` imports to the `src/` folder for your editor and shadcn.
- `components.json`: shadcn configuration and component aliases.

Add reusable components under `src/components/` when you need them.

## Add shadcn components

Tailwind CSS v4 is installed and connected through the Vite plugin in
`vite.config.js`. Its CSS import is in `src/index.css`. The `@/` alias is
configured in both Vite and `jsconfig.json`.

Shadcn is initialized. To add another component, run:

```powershell
npx.cmd shadcn@latest add dialog
```

Choose components at https://ui.shadcn.com/docs/components and add them with
the CLI. Import them from `@/components/ui/`, for example:

```jsx
import { Button } from '@/components/ui/button'

<Button type="button">Continue</Button>
```

The login screen uses these individual components, with the existing login
logic, rather than installing an unused login block. Source files are in this
project so you can customize them.

After changing Vite configuration or installing plugins, stop the development
server with Ctrl+C and restart it with `npm.cmd run dev`.

## VS Code tasks

Choose **Terminal > Run Task > Start development server** to run the app.
Choose **Check project**, or press **Ctrl+Shift+B**, to run lint and build.

The tasks use `npm.cmd` automatically on Windows.
