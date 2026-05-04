import GradientText from './component/GradientText'
import RotatingText from './component/RotatingText'
import FuzzyText from './component/FuzzyText'
import FaultyTerminal from './component/FaultyTerminal';

export default function PortfolioApp() {
    const year = new Date().getFullYear();
    const currentTime = new Date().toLocaleTimeString();
    const timeCLI = new Date().toISOString();
    const Key = ({ children }) => (
  <span className="
    px-3 py-1.5
    rounded-md
    border border-cyan-400/40
    bg-black/40
    text-cyan-300
    font-mono text-sm
    shadow-[0_0_10px_rgba(34,211,238,0.6)]
    hover:shadow-[0_0_18px_rgba(236,72,153,0.8)]
    transition
  ">
    {children}
  </span>
);
    const profile = {
    name: "MarcYim",
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
    { type: "cmd", text: "["+currentTime+"] cat meaymiy/contacts.json" },
    { type: "cmd", text: "[contact] @mobile/0930XXXXXXX" },
    { type: "cmd", text: "[contact] @email/tears@protonmail.com" },
    { type: "cmd", text: "[contact] @Social/facebook/com/meaymiy" },
    { type: "cmd", text: "[contact] @messenger/m.me/meaymiy" },
    { type: "cmd", text: "["+currentTime+"] cat meaymiy/xp-jobOrders.json" },
    
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
    { type: "desc", text: "-Completed a job task where I assisted various clients with legal issues relating to cyber breaches."},
    { type: "desc", text: "-Provided guidance about responding to an ICO Dawn Raid to the managing partner of a rapidly growing online travel company."}, 
    { type: "desc", text: "-Assisted a major eCommerce business to notify stakeholders about a data breach in accordance with the GDPR."}, 
    { type: "desc", text: "-Formulated defensive strategies for a client with data center operations to appropriately respond to a data breach."}, 

    { type: "title", text: "[work-experience.job-order] March 2026 @PwC Cyber Security Consulting"},
    { type: "desc", text: "-Completed a job task focused on a cybersecurity risk assessment for PwC"},
    { type: "desc", text: "-Determined if controls were missing from a process and identified risks associated with those gaps"},
    { type: "desc", text: "-Completed a Test of Design and Operating Effectiveness documentation"},
    { type: "desc", text: "-Created a one-slide summary to present findings"},
    
    { type: "title", text: "[work-experience.job-order] March 2026 @Mastercard Cybersecurity" },
    { type: "desc", text: "-Completed a job task where I served as an analyst on Mastercard’s Security Awareness Team"},
    { type: "desc", text: "-Helped identify and report security threats such as phishing"},
    { type: "desc", text: "-Analyzed and identified which areas of the business needed more robust security training and implemented training courses and procedures for those teams"},

    { type: "title", text: "[work-experience.job-order] March 2026 @DATACOM Cybersecurity Operations" },
    { type: "desc", text: "-Completed a job task focused on how Datacom's cybersecurity team helps protect its clients"},
    { type: "desc", text: "-Investigated a cyberattack and produced a comprehensive report documenting findings and outlining key recommendations to improve a client's cybersecurity posture"},
    { type: "desc", text: "-Conducted a comprehensive risk assessment"},

    { type: "title", text: "[work-experience.job-order] March 2026 @TATA Cybersecurity Analyst" },
    { type: "desc", text: "-Completed a job task involving identity and access management (IAM) for Tata Consultancy Services, collaborating with a Cybersecurity Consulting team."},
    { type: "desc", text: "-Acquired expertise in IAM principles, cybersecurity best practices, and strategic alignment with business objectives."},
    { type: "desc", text: "-Delivered comprehensive documentation and presentations, showcasing the ability to communicate complex technical concepts effectively."},

    { type: "title", text: "[work-experience.job-order] March 2026 @Deloitte Cyber" },
    { type: "desc", text: "-Completed a job task involving reading web activity logs"},
    { type: "desc", text: "-Supported a client in a cybersecurity breach"},
    { type: "desc", text: "-Answered questions to identify suspicious user activity"},

    { type: "title", text: "[work-experience.job-order] March 2026 @Commonwealth Bank Cybersecurity" },
    { type: "desc", text: "-Completed a job task involving the role of a cybersecurity generalist, specializing in fraud detection and prevention for Commonwealth Bank's Cybersecurity team."},
    { type: "desc", text: "-Developed skills in building data visualization dashboards using Splunk to uncover patterns and insights in historical customer data, aiding in fraud detection."},
    { type: "desc", text: "-Demonstrated the ability to respond effectively to cybersecurity incidents, including notifying relevant teams, collecting information, containing and stopping attacks, and aiding in recovery efforts."},
    { type: "desc", text: "-Enhanced security awareness expertise by designing infographics promoting best practices for secure password management, following Australian Cybersecurity Centre advice."},
    { type: "desc", text: "-Acquired practical experience in penetration testing, assessing the security of web applications, identifying vulnerabilities, and providing recommendations for remediation to bolster cybersecurity defenses."},

    { type: "title", text: "[work-experience.job-order] March 2026 @EY Forensic and Integrity Services" },
    { type: "desc", text: "-Completed a job task involving a fraud investigation for EY's Forensics team."},
    { type: "desc", text: "-Analyzed discrepancies in the wealth of the employee under investigation."},
    { type: "desc", text: "-Examined a sample Purchase Order, Invoice, Credit Note, and Fixed Asset Register, and identified potential risks and issues."},

    { type: "title", text: "[work-experience.job-order] March 2026 @AIG Shields Up: Cybersecurity" },
    { type: "desc", text: "-Completed a cybersecurity threat analysis for the Cyber Defense Unit, staying updated on CISA publications."},
    { type: "desc", text: "-Researched and understood reported vulnerabilities, showcasing analytical skills in cybersecurity."},
    { type: "desc", text: "-Drafted a clear and concise email to guide teams on vulnerability remediation."},
    { type: "desc", text: "-Utilized Python skills to write a script for ethical hacking, avoiding ransom payments by bruteforcing decryption keys."},

    { type: "title", text: "[work-experience.job-order] March 2026 @DLA PIPER Global Cyber with Data Privacy" },
    { type: "desc", text: "-Completed a job task involving global data protection and cybersecurity for DLA Piper’s Data Privacy and Cybersecurity team."},
    { type: "desc", text: "-Analyzed complex data breach scenarios to provide actionable legal advice on GDPR compliance, regulatory notification requirements, and ransom payment risks."},
    { type: "desc", text: "-Crafted a compliant and strategic media statement to address public relations challenges, emphasizing transparency and minimizing reputational risks."},
    { type: "desc", text: "-Demonstrated expertise in legal research, regulatory analysis, and professional communication while applying best practices in cybersecurity incident management."},

    { type: "cmd", text: "["+currentTime+"] cat meaymiy/xp.json" },

    { type: "title", text: "[work-experience] (March 2022 – January 2025) Tomcat Networks And Wireless Internet Services" },
    { type: "desc", text: "Information Security Support Professional"},

    { type: "title", text: "[work-experience] (February 2022 – March 2026) RCR Network and Data Solution OPC" },
    { type: "desc", text: "Information Security Analyst"},

      { type: "title", text: "[work-experience] (December 2018– up to present 2026) CENTER FOR INTERNATIONAL INDUSTRIES COMPETENCE CORP., QUEZON CITY" },
    { type: "desc", text: "TESDA Trainer (Programming (JAVA) NC III)"},

        { type: "title", text: "[work-experience] (November 2025– January 2026) SLTCFI-LEGAZPI CITY" },
    { type: "desc", text: "TESDA Diploma Course Trainer (Programming (.NET) NC III)"},

        { type: "title", text: "[work-experience] (October 2022 – December 2025) SLTCFI-PASIG CITY" },
    { type: "desc", text: "TESDA Trainer (Programming JAVA NC III), LMS Administrator and Course Content Designer"},

        { type: "title", text: "[work-experience] (July 2016 – December 14, 2021)  SLTCFI-PASIG CITY" },
    { type: "desc", text: "TESDA Trainer (Web Dev), Web Developer, LMS Administrator and Course Content Designer"},

        { type: "title", text: "[work-experience] (January 2018 – January 2020)  RVN Tech-Voc Inc., MALABON" },
    { type: "desc", text: "TESDA Trainer (Web Development and Creative Web Design)"},

        { type: "title", text: "[work-experience] (Oct 2016 – June 2019)  Villalon TECHNICAL SOLUTIONS Consultancy" },
    { type: "desc", text: "Full Stack Web Developer & UI/UX Designer"},
            { type: "title", text: "[work-experience] (June 2015 – April 2016)  SLTCFI-PIODURAN" },
    { type: "desc", text: "IT Instructor"},

        { type: "title", text: "[work-experience] (April 2014 – April 2015)  Unarealidad" },
    { type: "desc", text: "Junior Tech Developer"},
    { type: "desc", text: "(Web Developer, Mobile App Developer, UI/UX Graphic Designer)"},



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
                <GradientText
  colors={["#10B981","#3B82F6","#10B981"]}
  animationSpeed={8}
  showBorder={false}
  className="custom-class"
><p className="mb-3 text-sm uppercase tracking-[0.35em]  text-fuchsia-300">MarcYim</p>
</GradientText>
                <span className="tracking-[0.25em] text-white uppercase">_portfolio.cli</span>
              </div>

              
              <div className="mt-10 text-left max-w-3xl">
                
                <h1 className="text-4xl font-semibold leading-tight md:text-6xl"><FuzzyText 
  baseIntensity={0.2}
  hoverIntensity={0.5}
  enableHover
>Cybersecurity </FuzzyText>
<p className="pl-[30%]">           +</p>
                  <span className="block bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-300 bg-clip-text text-transparent">
                    Full-Stack Portfolio (preferably backend & infrastructure )
                  </span>
                </h1>
                
                  <GradientText
  colors={["#10B981","#3B82F6","#10B981"]}
  animationSpeed={2}
  showBorder={false}
  className="custom-class"
>{profile.summary} I design learning experiences, build software, and help teams improve security awareness, delivery, and technical capability.
                </GradientText>
                DO NOT VIEW CONSOLE OR PRESS
                <div className="flex items-center gap-2">
  <Key>Ctrl</Key>
  <Key>Shift</Key>
  <Key>J</Key>
</div>
                <div className="flex">
                <div className="mt-4 w-1/2">
                    <div className="text-xs  uppercase tracking-[0.25em] text-fuchsia-300">Current Focus</div>
                    <div className="mt-2 text-2xl font-semibold"><RotatingText
  texts={['Trainer', 'Security Analyst', 'Developer','Gamer','Available for opportunities']}
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
{/* <div class="rounded-full w-1/2 m-10 h-1/2 text-center border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300">DO NOT VIEW THE CONSOLE <div className="flex items-center gap-2">
  <Key>Ctrl</Key>
  <Key>Shift</Key>
  <Key>J</Key>
</div></div> */}
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

                
                <div className="space-y-1  text-left font-mono text-sm md:text-base">
                   
                  {terminalLines.map((line,i) => (
                    <div  key={i} className={` ${
      line.type === "title" ? " font-black italic vt323-regular" : ""
    } ${line.type === "desc" ? "pl-6 text-sm vt323-regular" : ""}`}
  ><GradientText
colors={ line.type === "title" ? ["#06B6D4","#16ff01","#F43F5E","#3B82F6"]: 
  line.type==="cmd" ?["#5227FF","#FF9FFC","#6366F1","#3B82F6","#06B6D4","#F97316"]:
  ["#5227FF","#0003b8","#b8000f","#00ff08"]
 }
  animationSpeed={8}
  showBorder={false}
 
  direction= 'diagonal'
>
    {line.text}
                </GradientText>       
                    </div>
                  ))}
                 
                  <div className="mt-2 text-fuchsia-300">EOF</div>
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

  console.clear();

  // 🔥 Banner
  console.log(
    "%c MarcYim ",
    "background: linear-gradient(90deg,#22d3ee,#ec4899); color:black; font-size:22px; padding:6px 14px; border-radius:8px; font-weight:bold;"
  );

  console.log(
    "%c Technical Skills Trainer • Cybersecurity • Full-Stack Dev(preferably backend & infrastructure ) ",
    "color:#22d3ee; font-size:13px;"
  );


  const lines = [
    { text: "[boot] initializing marc-yim portfolio...", style: "font-family:VT323;color:#22d3ee" },
    { text: "[react] mounting UI...", style: "font-family:VT323;color:#4ade80" },
    { text: "[security] loading modules...", style: "font-family:VT323;color:#facc15" },
    { text: "[xp] loading experience data...", style: "color:#38bdf8" },
    { text: "[skills] React • Node • Java • Cybersecurity", style: "font-family:VT323;color:#a855f7" },
    { text: "[status] system stable ✔", style: "font-family:VT323;color:#4ade80" },

  

     { text: "███╗___███╗███████╗ █████╗ ██╗___██╗███╗___███╗██╗██╗___██╗", style: "color:#06B6D4" },
     { text: "████╗ ████║██╔════╝██╔══██╗╚██╗ ██╔╝████╗ ████║██║╚██╗ ██╔╝", style: "color:#6366F1" },
     { text: "██╔████╔██║█████╗__███████║ ╚████╔╝ ██╔████╔██║██║ ╚████╔╝ ", style: "color:#3B82F6" },
     { text: "██║╚██╔╝██║██╔══╝__██╔══██║__╚██╔╝__██║╚██╔╝██║██║__╚██╔╝  ", style: "color:#5227FF" },
     { text: "██║ ╚═╝ ██║███████╗██║__██║___██║___██║ ╚═╝ ██║██║___██║   ", style: "color:#FF9FFC" },
     { text: "╚═╝-----╚═╝╚══════╝╚═╝---╚═╝--╚═╝---╚═╝-----╚═╝╚═╝---╚═╝  ", style: "color:#0003b8" },
     ];

  lines.forEach((line) => {
    
      console.log(`%c${line.text}`, `${line.style}; `);
    });


  // 💻 Contacts (from your README)
  
    console.log(
      "%c\n[contact]",
      "color:#ec4899; font-weight:bold; font-size:14px;"
    );

    console.log("%c📱 0930XXXXXXX", "font-family:VT323;color:#22d3ee");
    console.log("%c📧 tears@protonmail.com", "font-family:VT323;color:#22d3ee");
    console.log("%c🌐 facebook.com/meaymiy", "font-family:VT323;color:#22d3ee");

 

  // 👀 Hidden dev message
  
    console.log(
      "%c\n👀 Hey developer...",
      "color:#f472b6; font-size:15px; font-weight:bold;font-family:VT323;"
    );

    console.log(
      "%cIf you're inspecting this, you're my kind of person 😎",
      "color:#a855f7;font-family:VT323;"
    );

    console.log(
      "%cLet's build something awesome together.",
      "color:#22d3ee;font-family:VT323;"
    );

    // ⚡ Animated terminal logs
  const lines2 = [
     { text: "[job orders] initializing job orders...", style: "font-family:VT323;color:#22d3ee" },
     { text: "April 2026 @Commonwealth Bank, @Wells Fargo Software Engineering, and @Clifford Chance Cyber Security", style: "font-family:VT323;color:#06B6D4" },
     { text: "March 2026 @PwC Cyber Security Consulting", style: "font-family:VT323;color:#06B6D4" },
     { text: "March 2026 @Mastercard, @Commonwealth Bank, @AIG Shields Up:  - Cybersecurity ", style: "font-family:VT323;color:#06B6D4" },
     { text: "March 2026 @DATACOM Cybersecurity Operations", style: "font-family:VT323;color:#06B6D4" },
     { text: "March 2026 @TATA Cybersecurity Analyst", style: "font-family:VT323;color:#06B6D4" },
     { text: "March 2026 @Deloitte Cyber", style: "font-family:VT323;color:#06B6D4" },
     { text: "March 2026 @EY Forensic and Integrity Services", style: "font-family:VT323;color:#06B6D4" },
     { text: "March 2026 @DLA PIPER Global Cyber with Data Privacy", style: "font-family:VT323;color:#06B6D4" },
     { text: "[job exp] initializing job experiences...", style: "font-family:VT323;color:#22d3ee" },
     { text: "(March 2022 – January 2025) Tomcat Networks And Wireless Internet Services", style: "font-family:VT323;color:#06B6D4" },
     { text: "(February 2022 – March 2026) RCR Network and Data Solution OPC", style: "font-family:VT323;color:#06B6D4" },
     { text: "(December 2018– up to present 2026) CENTER FOR INTERNATIONAL INDUSTRIES COMPETENCE CORP., QUEZON CITY", style: "font-family:VT323;color:#06B6D4" },

  ];

  lines2.forEach((line2, i) => {
    setTimeout(() => {
      console.log(`%c${line2.text}`, `${line2.style}; font-family:VT323;`);
    }, i * 800);
  });

