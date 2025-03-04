const TheWelcome = () => {
  return (
    <>
      <main className="grid w-full min-h-screen place-items-center">
        <div className="flex flex-col items-center space-y-28">
          <div>
            <h1 className="text-4xl">Welcome To Create React Next</h1>
          </div>

          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <img
              className="relative h-44 w-44"
              src="https://api.iconify.design/vscode-icons:file-type-reactts.svg"
              alt="React Logo"
            />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
            <div>
              <a
                href="https://react.dev/"
                className="flex flex-col items-center space-y-1 md:items-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-xl">Documentation</h2>
                <p className="m-0 max-w-[30ch] text-center md:text-start text-sm opacity-50">
                  Find in-depth information about ReactJs hooks.
                </p>
              </a>
            </div>
            <div>
              <a
                href="https://reactrouter.com/en/main"
                className="flex flex-col items-center space-y-1 md:items-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-xl">React Router v6</h2>
                <p className="m-0 max-w-[30ch] text-center md:text-start text-sm opacity-50">
                  Find in-depth information about React Router's implementation
                </p>
              </a>
            </div>

            <div>
              <a
                href="https://redux-toolkit.js.org/"
                className="flex flex-col items-center space-y-1 md:items-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-xl">Redux ToolKit</h2>
                <p className="m-0 max-w-[30ch] text-center md:text-start text-sm opacity-50">
                  Explore React's powerful state management library.
                </p>
              </a>
            </div>

            <div>
              <a
                href="https://www.typescriptlang.org/"
                className="flex flex-col items-center space-y-1 md:items-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-xl">TypeScript</h2>
                <p className="m-0 max-w-[30ch] text-center md:text-start text-sm opacity-50">
                  Explore TypeScript's robust type safety for codebase
                  reliability.
                </p>
              </a>
            </div>
            <div>
              <a
                href="https://eslint.org/"
                className="flex flex-col items-center space-y-1 md:items-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-xl">Eslint</h2>
                <p className="m-0 max-w-[30ch] text-center md:text-start text-sm opacity-50">
                  Explore Eslint's static code analysis for JavaScript and
                  TypeScript.
                </p>
              </a>
            </div>
            <div>
              <a
                href="https://tailwindcss.com/"
                className="flex flex-col items-center space-y-1 md:items-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-xl">TailwindCss</h2>
                <p className="m-0 max-w-[30ch] text-center md:text-start text-sm opacity-50">
                  Explore the utility first CSS framework for building sites
                  rapidly.
                </p>
              </a>
            </div>
            <div>
              <a
                href="https://tanstack.com/query/latest/docs/framework/react/overview"
                className="flex flex-col items-center space-y-1 md:items-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-xl">React Query</h2>
                <p className="m-0 max-w-[30ch] text-center md:text-start text-sm opacity-50">
                  Explore React Query for streamlined data fetching in React
                  apps.
                </p>
              </a>
            </div>
            <div>
              <a
                href="https://usehooks.com/"
                className="flex flex-col items-center space-y-1 md:items-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-xl">React useHooks</h2>
                <p className="m-0 max-w-[30ch] text-center md:text-start text-sm opacity-50">
                  Explore a collection of modern, server safe React hooks.
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TheWelcome;
