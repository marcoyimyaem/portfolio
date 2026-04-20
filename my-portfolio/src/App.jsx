import GradientText from './component/GradientText'
import RotatingText from './component/RotatingText'
import FuzzyText from './component/FuzzyText'
import FaultyTerminal from './component/FaultyTerminal';

export default function PortfolioApp() {
    const year = new Date().getFullYear();
    const currentTime = new Date().toLocaleTimeString();
    const timeCLI = new Date().toISOString();
    
    const profile = {
    name: "Marc Yim",
    role: "Technical Skills Trainer • Cybersecurity • Full-Stack Development • Software Engineering",
    summary:
      "Technical Skills Trainer with 12+ years of experience across cybersecurity, full-stack web development, and software engineering.",
    
    highlights: [
      "12+ years teaching and building across web, software, and security",
      "Hands-on experience in React, .NET, Java, Node.js, Laravel, and Vue",
      "Cybersecurity background in incident response, IAM, forensics, fraud detection, and risk assessment",
      "Trainer, LMS administrator, course content designer, and full-stack developer",
    ],
    skills: [
      "Detection Engineering",
      "DLP",
      "OSINT Research",
      "Digital Forensics",
      "ReactJS",
      "VueJS",
      "Node.js",
      "Spring",
      "Laravel",
      "CodeIgniter",
      "Mobile App Development",
      "Cloud Technologies",
      "c#",
      "Version Control",
      "PHPUnit",
      ".NET",
    ],
    experience: [
      {
        period: "2022 – 2026",
        title: "Information Security Analyst",
        company: "RCR Network and Data Solution OPC",
        details: "Worked in information security analysis while strengthening operational and security-focused practice."
      },
      {
        period: "2022 – 2025",
        title: "Information Security Support Professional",
        company: "Tomcat Networks and Wireless Internet Services",
        details: "Supported information security operations and infrastructure-related security needs."
      },
      {
        period: "2018 – Present",
        title: "TESDA Trainer, Programming (JAVA) NC III",
        company: "Center for International Industries Competence Corp.",
        details: "Delivered training, mentorship, and technical instruction for programming learners."
      },
      {
        period: "2022 – 2025",
        title: "TESDA Trainer, LMS Administrator, Course Content Designer",
        company: "SLTCFI – Pasig City",
        details: "Handled Java training, LMS administration, and digital course development."
      },
      {
        period: "2016 – 2021",
        title: "Web Developer, LMS Administrator, Course Content Designer",
        company: "SLTCFI – Pasig City",
        details: "Worked across web development, learning systems, and content design."
      },
      {
        period: "2016 – 2019",
        title: "Full Stack Web Developer & UI/UX Designer",
        company: "Villalon Technical Solutions Consultancy",
        details: "Built full-stack solutions and designed user interfaces and user experiences."
      },
    ],
    certifications: [
      "Programming (JAVA) NC III",
      "Java SE 8 Programmer I OCA Certification",
      "Visual Graphic Design NC III",
      "Computer Systems Servicing NC II",
      "Regional Lead Trainer for Web Development NC III",
      "Moodle Admin Basics MOOC",
    ],
    education: {
      school: "Southern Luzon Technological College Foundation Incorporated (SLTCFI)",
      degree: "Bachelor of Science in Computer Science (BSCS)",
      period: "2010 – 2014",
    },
  };

  const terminalLines = [
    { type: "cmd", text: "["+currentTime+"] Starting 'build'..." },
    { type: "cmd", text: "███╗___███╗███████╗ █████╗ ██╗___██╗███╗___███╗██╗██╗___██╗"},
    { type: "cmd", text: "████╗ ████║██╔════╝██╔══██╗╚██╗ ██╔╝████╗ ████║██║╚██╗ ██╔╝"},
    { type: "cmd", text: "██╔████╔██║█████╗__███████║ ╚████╔╝ ██╔████╔██║██║ ╚████╔╝ "},
    { type: "cmd", text: "██║╚██╔╝██║██╔══╝__██╔══██║__╚██╔╝__██║╚██╔╝██║██║__╚██╔╝  "},
    { type: "cmd", text: "██║ ╚═╝ ██║███████╗██║__██║___██║___██║ ╚═╝ ██║██║___██║   "},
    { type: "cmd", text: "╚═╝-----╚═╝╚══════╝╚═╝---╚═╝--╚═╝---╚═╝-----╚═╝╚═╝---╚═╝  "},
    { type: "cmd", text: "cat meaymiy/contacts.json" },
    { type: "cmd", text: "[contact] @mobile/0930XXXXXXX" },
    { type: "cmd", text: "[contact] @email/tears@protonmail.com" },
    { type: "cmd", text: "[contact] @Social/facebook/com/meaymiy" },
    { type: "cmd", text: "[contact] @messenger/m.me/meaymiy" },
    { type: "cmd", text: "cat meaymiy/xp.json" },
    { type: "title", text: "[work-experience.job-order] April 2026 @Commonwealth Bank" },
    { type: "desc", text: "-Completed a job task focused on backend and frontend development for Commonwealth Bank's Software Engineering team." },
    { type: "desc", text: "-Extended the backend using C# to enable icons, gaining proficiency in .NET, MongoDB, Postman, and Git." },
    { type: "desc", text: "-Modified an existing React/Redux frontend to enable icons, expanding expertise in React, Redux, TypeScript, NPM, and Git."},
    { type: "desc", text: "-Strengthened coding skills and learned unit testing with C#, xUnit, and .NET, ensuring comprehensive code coverage and support for icons."},
    { type: "desc", text: "-Improved Git and Github skills, emphasizing effective communication through the submission of changes for team review."},  
    { type: "title", text: "[work-experience.job-order] April 2026 @Wells Fargo Software Engineering" },
    { type: "desc", text: "-Understood relevant requirements for building a system to manage financial portfolios"},
    { type: "desc", text: "-Figured out what data the system needed to keep track of"},
    { type: "desc", text: "-Drafted a visual representation of the data as an entity relationship diagram (ERD)"},
    { type: "desc", text: "-Used the IntelliJ developer application to implementwork-experience the ERD and published it to GitHub"}, 


    { type: "title", text: "[work-experience.job-order] April 2026 @Clifford Chance Cyber Security" },
    { type: "desc", text: ""}, 

  ];

  return (
    <div className="min-h-screen bg-[#05060a] text-white overflow-hidden">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(236,72,153,0.28),transparent_22%),radial-gradient(circle_at_74%_58%,rgba(168,85,247,0.22),transparent_24%),radial-gradient(circle_at_35%_20%,rgba(34,211,238,0.08),transparent_18%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.03),transparent)] bg-[length:100%_4px] opacity-20" />

        <div className="relative z-10 grid min-h-screen ">
          <section className="flex flex-col justify-between border-r border-white/10 bg-black/35 backdrop-blur-sm">
            <div className="p-6 md:p-10">
              <div className="mb-6 flex items-center gap-3 text-sm text-cyan-300/90">
                <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
                <p className="mb-3 text-sm uppercase tracking-[0.35em]  text-fuchsia-300"><GradientText
  colors={["#10B981","#3B82F6","#10B981"]}
  animationSpeed={8}
  showBorder={false}
  className="custom-class"
>Marc Yim
</GradientText></p>
                <span className="tracking-[0.25em] text-white uppercase">portfolio.cli</span>
              </div>

              
              <div className="mt-10 text-left max-w-3xl">
                
                <h1 className="text-4xl font-semibold leading-tight md:text-6xl"><FuzzyText 
  baseIntensity={0.2}
  hoverIntensity={0.5}
  enableHover
>Cybersecurity </FuzzyText>
<p className="pl-[30%]">           +</p>
                  <span className="block bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-300 bg-clip-text text-transparent">
                    Full-Stack Portfolio
                  </span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                  <GradientText
  colors={["#10B981","#3B82F6","#10B981"]}
  animationSpeed={2}
  showBorder={false}
  className="custom-class"
>{profile.summary} I design learning experiences, build software, and help teams improve security awareness, delivery, and technical capability.
                </GradientText></p>
                <div className="flex">
                <div className="mt-4 w-1/2">
                    <div className="text-xs  uppercase tracking-[0.25em] text-fuchsia-300">Current Focus</div>
                    <div className="mt-2 text-2xl font-semibold"><RotatingText
  texts={['Trainer', 'Security Analyst', 'Developer','Gamer']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom="last"
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
  splitBy="characters"
  auto
  loop
/>
</div></div>
<div className="rounded-full w-1/2 m-10 h-1/2 text-center border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300">Available for opportunities</div>
</div>
                  
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {profile.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 shadow-[0_0_30px_rgba(217,70,239,0.06)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
              
            </div>

            
            <div className=" bg-black/50 p-5 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
             
  

                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-fuchsia-300">
                  <span className="rounded-full border border-fuchsia-400/30 px-3 py-1">cmd</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-white/70">git</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-white/70">PowerShell</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-white/70">terminal</span>
                </div>

                
                <div className="space-y-1 text-left font-mono text-sm md:text-base">
                   <GradientText
colors={["#5227FF","#FF9FFC","#EAB308","#3B82F6","#06B6D4","#F97316"]}
  animationSpeed={8}
  showBorder={false}
  className="custom-class"
  direction='diagonal'
>
                  {terminalLines.map((line,i) => (
                    <div key={i} className={` ${
      line.type === "title" ? " font-black italic" : ""
    } ${line.type === "desc" ? "pl-6 text-sm" : ""}`}
  >
    {line.text}
                      
                    </div>
                  ))}
                  </GradientText>
                  <div className="mt-2 text-fuchsia-300">Application Available At: /portfolio/marc-yim</div>
                </div>
                
              </div>
          </section>

          <section className="relative flex items-center justify-center p-6 md:p-10">
            <div className="absolute right-[12%] top-[16%] h-40 w-40 rotate-45 rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/20 shadow-[0_0_80px_rgba(236,72,153,0.28)]" />
            <div className="absolute right-[24%] top-[22%] h-20 w-20 rotate-45 rounded-2xl border border-violet-300/20 bg-violet-300/20" />
            <div className="absolute right-[10%] top-[42%] h-[22rem] w-[22rem] rotate-[35deg] rounded-[2rem] border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/70 to-violet-400/40 shadow-[0_0_120px_rgba(236,72,153,0.25)]" />
            <div className="absolute right-[12%] top-[50%] h-48 w-48 rotate-[35deg] rounded-[2rem] border border-violet-300/10 bg-violet-300/20" />
            <div className="absolute right-[32%] top-[58%] h-16 w-16 rotate-[35deg] rounded-xl border border-white/10 bg-violet-200/20" />
            <div className="absolute right-[26%] top-[61%] h-20 w-20 rotate-[35deg] rounded-xl border border-white/10 bg-violet-200/15" />
            <div className="absolute right-[18%] top-[34%] h-[26rem] w-12 rotate-[35deg] rounded-full bg-black/30 blur-sm" />

            <div className="relative z-10 grid w-full  gap-5">
              

              <div className="grid gap-5 ">
                <div className="rounded-[2rem] border border-white/10 bg-black/45 p-6 backdrop-blur-md">
                  <div className="text-xs uppercase tracking-[0.25em] text-fuchsia-300">Skills</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-sm text-cyan-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] text-left border border-white/10 bg-black/45 p-6 backdrop-blur-md">
                  <div className="text-xs uppercase tracking-[0.25em] text-fuchsia-300">Experience</div>
                  <div className="mt-4 space-y-4">
                    {profile.experience.map((item) => (
                      <div key={`${item.company}-${item.period}`} className="border-l border-cyan-400/30 pl-4">
                        <div className="text-xs text-white/45">{item.period}</div>
                        <div className="mt-1 font-medium text-white">{item.title}</div>
                        <div className="text-sm text-cyan-300">{item.company}</div>
                        <p className="mt-1 text-sm leading-6 text-white/65">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-5 text-left md:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-black/45 p-6 backdrop-blur-md">
                  <div className="text-xs uppercase tracking-[0.25em] text-fuchsia-300">Education</div>
                  <div className="mt-4 text-lg font-medium">{profile.education.degree}</div>
                  <div className="mt-1 text-cyan-300">{profile.education.school}</div>
                  <div className="mt-1 text-sm text-white/50">{profile.education.period}</div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-black/45 p-6 backdrop-blur-md">
                  <div className="text-xs uppercase tracking-[0.25em] text-fuchsia-300">Certifications</div>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    {profile.certifications.map((cert) => (
                      <li key={cert} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <footer className="mt-16 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        
        {/* Left: Copyright */}
        <div>
          © {year} Marc Yim. All rights reserved.
        </div>

        {/* Right: Tech Stack */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="text-white/50">Powered by:</span>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <span className="text-white/30">•</span>

          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            React
          </a>

          <span className="text-white/30">•</span>

          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            Vite
          </a>

          <span className="text-white/30">•</span>

          <a
            href="https://openai.com/chatgpt"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            ChatGPT
          </a>
        </div>
      </div>
    </footer>
        </div>
      </div>
      
    </div>
    
  );
}
