import { Background } from './components/BackgroundSVG';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { GitHubSocial } from './components/GitHubSocial';
import { Header } from './components/Header';
import { LinkedInSocial } from './components/LinkedInSocial';
import { Main } from './components/Main';
import { ThemeProvider } from './components/providers/ThemeProvider';
import { ToolstackAndInspiration } from './components/ToolstackAndInspiration';
import { XSocial } from './components/XSocial';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col gap-8 pt-8 pb-12 px-6 lg:px-12">
        <Header />
        <main className="h-full min-h-0 grid gap-6 lg:gap-8 grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_.4fr_.6fr] xl:grid-cols-[4fr_4fr_2fr_2fr] lg:grid-rows-[auto_auto_auto_auto] flex-1 ">
          <Main className="lg:col-start-1 col-span-2 md:col-span-6 lg:col-span-2 lg:row-start-1 lg:row-span-1 xl:row-span-3" />
          <Experience className="md:col-start-1 col-span-2 md:col-span-3 lg:col-span-1 xl:row-start-4 lg:row-span-2 xl:row-span-1" />
          <Education className="md:col-start-4 lg:col-start-2 col-span-2 md:col-span-3 lg:col-span-1 xl:row-start-4 lg:row-span-2 xl:row-span-1" />
          <ToolstackAndInspiration className="lg:col-start-3 col-span-2 md:col-span-6 lg:col-span-2 lg:row-start-1" />
          <XSocial className="lg:col-start-3 col-span-2 md:col-span-2 lg:col-span-2 lg:row-start-2 row-span-1" />
          <GitHubSocial className="lg:col-start-3 xl:col-start-3 col-span-1 md:col-span-2 lg:col-span-1 lg:row-start-3 row-span-1" />
          <LinkedInSocial className="lg:col-start-4 xl:col-start-4 col-span-1 md:col-span-2 lg:col-span-1 lg:row-start-3 xl:row-start-3 row-span-1" />
          <Contact className="md:col-start-1 lg:col-start-1 xl:col-start-3 col-span-2 md:col-span-6 lg:col-span-4 xl:col-span-2 md:row-start-5 lg:row-start-4 xl:row-start-4 md:row-span-2 xl:row-span-1" />
        </main>
        <Background />
      </div>
    </ThemeProvider>
  );
}

export default App;
