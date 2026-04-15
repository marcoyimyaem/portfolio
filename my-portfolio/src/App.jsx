export default function RetroPortfolio() {
  const profile = {
    name: "Marc Yim",
    title: "Technical Skills Assessor/Trainer • Cybersecurity • Full-stack Web Development • Software Engineering",
    summary:
      "Technical Skills Trainer with 12+ years of experience in Cybersecurity, Full-stack Web Development, and Software Engineering.",
    contact: {
      phone: "0930xxxxxxx",
      email: "tears.dinginess543@passinbox.com",
      facebook: "facebook.com/marcyim",
      messenger: "m.me/marcyim",
    },
  };

  const highlights = [
    {
      company: "Commonwealth Bank",
      role: "Software Engineering",
      date: "April 2026",
      points: [
        "Extended backend features with C# and .NET for icon support.",
        "Modified a React/Redux frontend using TypeScript and NPM.",
        "Strengthened unit testing with xUnit and improved Git/GitHub workflow.",
      ],
    },
    {
      company: "Wells Fargo",
      role: "Software Engineering",
      date: "April 2026",
      points: [
        "Mapped system requirements for financial portfolio management.",
        "Designed an ERD and implemented it using IntelliJ.",
        "Published deliverables to GitHub.",
      ],
    },
    {
      company: "Clifford Chance",
      role: "Cyber Security",
      date: "April 2026",
      points: [
        "Advised on cyber-breach response and legal-risk scenarios.",
        "Supported GDPR-aligned stakeholder notification planning.",
        "Developed defensive response strategies for data-center operations.",
      ],
    },
    {
      company: "PwC / Mastercard / Datacom / Tata / Deloitte / EY / AIG / DLA Piper",
      role: "Cybersecurity Projects",
      date: "March 2026",
      points: [
        "Performed cyber risk assessments, threat analysis, fraud investigation, IAM, and incident response work.",
        "Analyzed phishing and suspicious activity, documented findings, and communicated remediation clearly.",
        "Delivered concise presentations, reports, and stakeholder guidance.",
      ],
    },
  ];

  const timeline = [
    ["March 2022 – January 2025", "Information Security Support Professional", "Tomcat Networks and Wireless Internet Services"],
    ["February 2022 – March 2026", "Information Security Analyst", "RCR Network and Data Solution OPC"],
    ["December 2018 – 2026", "TESDA Trainer (Programming - JAVA NC III)", "Center for International Industries Competence Corp., Quezon City"],
    ["November 2025 – January 2026", "TESDA Diploma Course Trainer (.NET)", "SLTCFI - Legazpi City"],
    ["October 2022 – December 2025", "TESDA Trainer / LMS Administrator / Course Content Designer", "SLTCFI - Pasig City"],
    ["July 2016 – December 2021", "TESDA Trainer / Web Developer / LMS Administrator / Course Content Designer", "SLTCFI - Pasig City"],
    ["January 2018 – January 2020", "TESDA Trainer (Web Development and Creative Web Design)", "RVN Tech-Voc Inc., Malabon"],
    ["October 2016 – June 2019", "Full Stack Web Developer & UI/UX Designer", "Villalon Technical Solutions Consultancy"],
    ["June 2015 – April 2016", "IT Instructor", "SLTCFI - Pioduran"],
    ["April 2014 – April 2015", "Junior Tech Developer", "Unarealidad"],
  ];

  const projects = [
    {
      name: "Moodle DevOps Support for TVET Institute",
      date: "July 2020 – December 2021",
      desc: "Cloud server operations, LMS content configuration, and backend support for large-scale Moodle data handling.",
    },
    {
      name: "Styroware Warehouse System and Website",
      date: "March 2019",
      desc: "Designed and developed a warehouse management system and company landing page.",
    },
    {
      name: "Online Student Account Monitoring",
      date: "February 2018",
      desc: "Built a cloud-based monitoring system with SMS balance notifications.",
    },
    {
      name: "Juan Time Adventure Prototype",
      date: "February 2017",
      desc: "Designed and developed a 2D platformer game prototype.",
    },
    {
      name: "SQBC / MAITF",
      date: "2015 – 2016",
      desc: "Educational Android apps for quizzes and trigonometric instruction.",
    },
  ];

  const skills = [
    "Detection Engineering",
    "DLP Application",
    "OSINT Research",
    "Digital Forensics",
    "Mobile App Development",
    "Java SE 8",
    "VueJS",
    "Node.js",
    "Laravel",
    "PHPUnit",
    "CodeIgniter",
    "ReactJS",
    "Cloud Technologies",
    "Version Control",
    "Web Hosting",
    "Serverless CMS",
  ];

  const training = [
    "Programming (JAVA) NC III",
    "Java SE 8 Programmer I OCA Certification",
    "Visual Graphic Design NC III",
    "Computer Systems Servicing NC II",
    "Regional Lead Trainer for Web Development NC III",
    "Trainer Methodology 2 Units",
    "Moodle Admin Basics MOOC",
    "Regional Lead Trainer for Facilitating eLearning Sessions",
  ];

  function Window({ title, children, className = "" }) {
    return (
      <div className={`rounded-2xl border-2 border-emerald-400/60 bg-black/70 shadow-[0_0_25px_rgba(52,211,153,0.12)] ${className}`}>
        <div className="flex items-center justify-between border-b border-emerald-400/40 px-4 py-2">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full border border-emerald-300/70" />
            <span className="h-3 w-3 rounded-full border border-emerald-300/70" />
            <span className="h-3 w-3 rounded-full border border-emerald-300/70" />
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">{title}</div>
          <div className="text-[10px] text-emerald-500">SYS://READY</div>
        </div>
        <div className="p-4 md:p-5">{children}</div>
      </div>
    );
  }

  function SectionTitle({ children }) {
    return <div className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-300">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[#07110d] text-emerald-200">
      <div className="pointer-events-none fixed inset-0 opacity-20 [background-image:linear-gradient(rgba(16,185,129,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.15)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.09),transparent_35%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.08),transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10 font-mono">
        

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="space-y-6">
            <Window title="profile.exe">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-2xl border border-emerald-400/40 bg-emerald-400/5 text-3xl">
                &gt;_ 
              </div>
              <h1 className="text-2xl font-bold text-emerald-100">{profile.name}</h1>
              <p className="mt-2 text-sm leading-6 text-emerald-300">{profile.title}</p>
              <p className="mt-4 text-sm leading-6 text-emerald-200/90">{profile.summary}</p>
            </Window>

            <Window title="contact.sys">
              <SectionTitle>Connect</SectionTitle>
              <div className="space-y-3 text-sm">
                <div><span className="text-emerald-500">PHONE:</span> {profile.contact.phone}</div>
                <div><span className="text-emerald-500">EMAIL:</span> {profile.contact.email}</div>
                <div><span className="text-emerald-500">FACEBOOK:</span> {profile.contact.facebook}</div>
                <div><span className="text-emerald-500">MESSENGER:</span> {profile.contact.messenger}</div>
              </div>
            </Window>

            <Window title="skills.dll">
              <SectionTitle>Core Stack</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-emerald-400/40 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Window>
          </div>

          <div className="space-y-6">
            <Window title="boot-log.txt">
              <div className="space-y-2 text-sm leading-7 text-emerald-300">
                <div>&gt; initializing candidate profile...</div>
                <div>&gt; role focus: cybersecurity | software engineering | technical training</div>
                <div>&gt; experience depth: 12+ years</div>
                <div>&gt; status: available for opportunities</div>
              </div>
            </Window>

            <Window title="featured-work.tab">
              <SectionTitle>Featured Experience</SectionTitle>
              <div className="grid gap-4">
                {highlights.map((item) => (
                  <div key={`${item.company}-${item.role}`} className="rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-4">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <h3 className="text-base font-semibold text-emerald-100">{item.company}</h3>
                      <span className="text-xs uppercase tracking-[0.2em] text-emerald-500">{item.date}</span>
                    </div>
                    <div className="mt-1 text-sm text-emerald-300">{item.role}</div>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-emerald-200/95">
                      {item.points.map((point) => (
                        <li key={point}>$ {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Window>

            <Window title="career-history.log">
              <SectionTitle>Work Timeline</SectionTitle>
              <div className="space-y-3">
                {timeline.map(([date, role, org]) => (
                  <div key={`${date}-${role}`} className="grid gap-1 rounded-xl border border-emerald-400/20 px-4 py-3 md:grid-cols-[180px_1fr] md:gap-4">
                    <div className="text-xs uppercase tracking-[0.16em] text-emerald-500">{date}</div>
                    <div>
                      <div className="text-sm font-semibold text-emerald-100">{role}</div>
                      <div className="text-sm text-emerald-300">{org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Window>

            <div className="grid gap-6 xl:grid-cols-2">
              <Window title="projects.dir">
                <SectionTitle>Projects</SectionTitle>
                <div className="space-y-4 text-sm">
                  {projects.map((project) => (
                    <div key={project.name} className="rounded-xl border border-emerald-400/20 p-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="font-semibold text-emerald-100">{project.name}</div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-500">{project.date}</div>
                      </div>
                      <div className="mt-2 leading-6 text-emerald-300">{project.desc}</div>
                    </div>
                  ))}
                </div>
              </Window>

              <Window title="education.ini">
                <SectionTitle>Education</SectionTitle>
                <div className="rounded-xl border border-emerald-400/20 p-3 text-sm leading-6">
                  <div className="font-semibold text-emerald-100">Harbardo School of Computer Science</div>
                  <div className="text-emerald-300">Bachelor of Science in Computer Science (BSCS)</div>
                  <div className="text-emerald-500">Legazpi, Albay • 2010 – 2014</div>
                </div>

                <SectionTitle>Training & Certifications</SectionTitle>
                <div className="space-y-2 text-sm leading-6 text-emerald-300">
                  {training.map((item) => (
                    <div key={item}>+ {item}</div>
                  ))}
                </div>
              </Window>
            </div>

            <Window title="footer.bat">
              <div className="flex flex-col gap-3 text-sm text-emerald-300 md:flex-row md:items-center md:justify-between">
                <div>&gt; Built with github</div>
                <div className="text-emerald-500">END OF FILE</div>
              </div>
            </Window>
          </div>
        </div>
      </div>
    </div>
  );
}
