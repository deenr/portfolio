import { Background } from './components/BackgroundSVG';
import { Contact } from './components/Contact';
import { ExperienceAndEducation } from './components/ExperienceAndEducation';
import { GitHubSocial } from './components/GitHubSocial';
import { Header } from './components/Header';
import { LinkedInSocial } from './components/LinkedInSocial';
import { Main } from './components/Main';
import { ProjectList } from './components/Projects';
import { ThemeProvider } from './components/providers/ThemeProvider';
import { References } from './components/References';
import { ToolstackAndInspiration } from './components/ToolstackAndInspiration';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col gap-8 pt-8 pb-12 px-6 lg:px-12">
        <Header />
        <main className="flex flex-col md:grid gap-4 lg:gap-5 grid-cols-[1fr,1fr] xl:grid-cols-[2fr,1fr]">
          <Main className="col-start-1 col-span-2 xl:col-span-1 row-start-1 xl:row-span-2" />
          <ExperienceAndEducation className="col-start-1 xl:col-start-2 col-span-1 row-start-2 xl:row-start-1 row-span-1" />
          <ToolstackAndInspiration className="col-start-2 col-span-1 row-start-2 row-span-1" />
          <div className="col-start-1 col-span-2 row-start-3 grid gap-4 lg:gap-5 grid-cols-2 md:grid-cols-7 xl:grid-cols-3 grid-rows-[auto,auto,auto] xl:grid-rows-[auto,1fr]">
            <ProjectList className="col-start-1 col-span-2 md:col-span-5 xl:col-span-1 row-start-1 row-span-1 md:row-span-2" />
            <References className="col-start-1 xl:col-start-2 col-span-2 md:col-span-4 xl:col-span-1 row-start-2 md:row-start-3 xl:row-start-1 row-span-1" />
            <Contact className="col-start-1 md:col-start-5 xl:col-start-3 col-span-2 md:col-span-3 xl:col-span-1 row-start-4 md:row-start-3 xl:row-start-1 row-span-1" />
            <GitHubSocial className="h-full col-start-1 md:col-start-6 xl:col-start-2 col-span-1 md:col-span-2 xl:col-span-1 row-start-3 md:row-start-1 xl:row-start-2 row-span-1" />
            <LinkedInSocial className="h-full col-start-2 md:col-start-6 xl:col-start-3 col-span-1 md:col-span-2 xl:col-span-1 row-start-3 md:row-start-2 row-span-1" />
          </div>
        </main>
        <Background />
      </div>
    </ThemeProvider>
  );
}

export default App;

// <main className="max-w-full h-full min-h-0 grid gap-4 lg:gap-5 grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_.4fr_.6fr] xl:grid-cols-[4fr_4fr_2fr_2fr] lg:grid-rows-[auto_auto_auto_auto_auto] flex-1 ">
//   <Main className="col-start-1 col-span-2 row-start-1 row-span-2" />
//   <ExperienceAndEducation className="col-start-3 col-span-2 row-start-1 row-span-1" />
//   <ToolstackAndInspiration className="col-start-3 col-span-2 row-start-2 row-span-1" />
//   <ProjectList className="col-start-1 col-span-1 row-start-3 row-span-1" />
//   <div className="bg-blue-500">
//     {/* <References className="col-start-2 col-span-1 row-start-3 row-span-1" /> */}
//     References
//   </div>
//   {/* <ExperienceAndEducation className="md:col-start-1 col-span-2 md:col-span-3 lg:col-span-1 xl:row-start-3 lg:row-span-2 xl:row-span-3" /> */}
//   {/* <XSocial className="lg:col-start-3 col-span-2 md:col-span-2 lg:col-span-2 lg:row-start-3 row-span-1" /> */}
//   {/* <GitHubSocial className="lg:col-start-3 xl:col-start-3 col-span-1 md:col-span-2 lg:col-span-1 lg:row-start-4 row-span-1" /> */}
//   {/* <LinkedInSocial className="lg:col-start-4 xl:col-start-4 col-span-1 md:col-span-2 lg:col-span-1 lg:row-start-3 xl:row-start-4 row-span-1" /> */}
//   {/* <Contact className="md:col-start-1 lg:col-start-1 xl:col-start-3 col-span-2 md:col-span-6 lg:col-span-4 xl:col-span-2 md:row-start-5 lg:row-start-4 xl:row-start-5 md:row-span-2 xl:row-span-1" /> */}
// </main>;
