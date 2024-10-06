import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { GitHubSocial } from './components/GitHubSocial';
import { Header } from './components/Header';
import { LinkedInSocial } from './components/LinkedInSocial';
import { Main } from './components/Main';
import { ThemeProvider } from './components/providers/ThemeProvider';
import { Reen } from './components/Reen';
import { References } from './components/References';
import { ToolstackAndInspiration } from './components/ToolstackAndInspiration';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col gap-8 pt-8 pb-12 px-12">
        <Header />
        <main className="h-full min-h-0 grid grid-cols-[3fr_3fr_196px_196px] grid-rows-[auto_auto_auto_auto] flex-1 gap-8">
          <Main className="col-start-1 col-span-2 row-start-1 row-span-3" />
          <ToolstackAndInspiration className="col-span-2 row-start-1" />
          <References className="col-span-2 row-start-2" />
          <GitHubSocial className="col-span-1 row-start-3" />
          <LinkedInSocial className="col-span-1 row-start-3" />

          <Reen className="col-span-1 row-start-4" />
          <Experience className="col-span-1 row-start-4" />
          <Contact className="col-span-2 row-start-4" />
          {/* <div className="w-3/4 flex flex-col gap-8">
            <section className="relative w-full p-12 flex flex-col flex-1 justify-between gap-16 bg-white dark:bg-black dark:bg-opacity-50 rounded-[32px]">
              <h2 className="text-primary-500 text-8xl font-medium">
                a passionate
                <br /> full-stack developer
                <br /> with a focus on precision
              </h2>
              <div>
                <p className="text-gray-900 dark:text-white text-base font-medium">Based in Belgium</p>
                <p className="text-gray-500 dark:text-gray-300 text-base font-medium">UTC/GMT +1 hour</p>
              </div>

              <ThemeToggle className="absolute top-7 right-7" />
            </section>
            <div className="w-full flex flex-row gap-8">
              <Reen />
              <Experience />
            </div>
          </div>
          <div className="w-1/4 flex flex-col gap-6">
            <ToolstackAndInspiration />
            <References />
            <Socials />
          </div> */}
        </main>
        {/* <Background /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
