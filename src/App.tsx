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
        </main>
        <Background />
      </div>
    </ThemeProvider>
  );
}

export default App;
