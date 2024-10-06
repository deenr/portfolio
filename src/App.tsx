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
      <div className="relative min-h-screen flex flex-col gap-8 pt-8 pb-12 px-6 md:px-12">
        <Header />
        <main className="h-full min-h-0 grid gap-6 md:gap-8 grid-cols-2 lg:grid-cols-[3fr_3fr_1.25fr_1.25fr] md:grid-rows-[auto_auto_96px_auto] xl:grid-rows-[auto_auto_auto_auto] flex-1">
          <Main className="lg:col-start-1 col-span-2 lg:row-start-1 row-span-2 xl:row-span-3" />
          <Reen className="lg:col-start-1 col-span-2 lg:col-span-1 lg:row-start-3 xl:row-start-4 lg:row-span-2 xl:row-span-1" />
          <Experience className="lg:col-start-2 col-span-2 lg:col-span-1 lg:row-start-3 xl:row-start-4 lg:row-span-2 xl:row-span-1" />
          <References className="lg:col-start-3 col-span-2 lg:row-start-2" />
          <ToolstackAndInspiration className="lg:col-start-3 col-span-2 lg:row-start-1" />
          <GitHubSocial className="lg:col-start-3 col-span-1 lg:row-start-3" />
          <LinkedInSocial className="lg:col-start-4 col-span-1 lg:row-start-3" />
          <Contact className="lg:col-start-3 col-span-2 lg:row-start-4" />
        </main>
        <Background />
      </div>
    </ThemeProvider>
  );
}

export default App;
