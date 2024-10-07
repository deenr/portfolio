import Background from './components/Background';
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
      <div className="relative min-h-screen flex flex-col gap-8 pt-8 pb-12 px-6 lg:px-12">
        <Header />
        <main className="h-full min-h-0 grid gap-6 lg:gap-8 grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_.5fr_.5fr] xl:grid-cols-[4fr_4fr_1.75fr_1.75fr] lg:grid-rows-[auto_auto_auto_auto] flex-1 ">
          <Main className="lg:col-start-1 col-span-2 md:col-span-4 lg:col-span-2 lg:row-start-1 lg:row-span-1 xl:row-span-3" />
          <Reen className="md:col-start-1 col-span-2 lg:col-span-1 xl:row-start-4 xl:row-span-1" />
          <Experience className="md:col-start-3 col-span-2 lg:col-span-1 xl:row-start-4 xl:row-span-1" />
          <References className="lg:col-start-3 col-span-2 md:col-span-4 lg:col-span-2 lg:row-start-2 row-span-1" />
          <ToolstackAndInspiration className="lg:col-start-3 col-span-2 md:col-span-4 lg:col-span-2 lg:row-start-1" />
          <GitHubSocial className="lg:col-start-1 xl:col-start-3 col-span-1 lg:row-start-3 row-span-1" />
          <LinkedInSocial className="md:col-start-1 xl:col-start-4 col-span-1 lg:row-start-4 xl:row-start-3 row-span-1" />
          <Contact className="md:col-start-2 xl:col-start-3 col-span-2 md:col-span-3 xl:col-span-2 md:row-start-5 lg:row-start-3 xl:row-start-4 md:row-span-2 xl:row-span-1" />
        </main>
        <Background />
      </div>
    </ThemeProvider>
  );
}

export default App;
