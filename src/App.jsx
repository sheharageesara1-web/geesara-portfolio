import React, { useState, useEffect, useRef } from "react";
import {
  Mail, Download, Sun, Moon, ExternalLink,
  Terminal, Code2, GraduationCap, User, FolderGit2, Send, ChevronRight
} from "lucide-react";
import profilePhoto from "./profile-photo.jpg";
import apekamaHomepage from "./apekama-homepage.jpg";
import apekamaPreview from "./apekama-homepage-preview.jpg";
import hotelRooms from "./hotel-rooms.jpg";
import wildafariHomepage from "./wildafari-homepage.png";
import hotelPrimeHomepage from "./hotel-prime-homepage.jpg";
import studyspaceScreenshot from "./studyspace-login.png";
import btrfsTerminal from "./btrfs-terminal.png";

/* Custom brand icons (lucide-react removed brand/logo icons in newer versions) */
function Github({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.78 1.08.78 2.18 0 1.57-.01 2.84-.01 3.23 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/>
    </svg>
  );
}
function Linkedin({ size = 18, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z"/>
    </svg>
  );
}

/* ------------------------------------------------------------------
   DATA — swap these out with your real details
------------------------------------------------------------------ */
const PROFILE = {
  name: "A.E.S.C. Geesara",
  handle: "geesara",
  role: "Undergraduate · Information Systems",
  uni: "University of Colombo School of Computing (UCSC)",
  tagline: "Building things at the intersection of clean code and good design.",
  bio: `I'm an undergraduate at UCSC, currently sharpening my skills in full-stack
  development and problem solving. I enjoy turning ideas into working software —
  from small scripts to full web applications — and I'm always learning something new.`,
  email: "sheharageesara1@gmail.com",
  github: "https://github.com/sheharageesara1-web",
  linkedin: "https://www.linkedin.com/in/shehara-geesara",
  cvUrl: `${import.meta.env.BASE_URL}AESC_Geesara_CV.pdf`,
  // 👉 Replace this with your own photo URL (e.g. an uploaded image link, or import it locally).
  photo: profilePhoto,
};

const SKILLS = [
  { name: "HTML", level: 90, cat: "Frontend" },
  { name: "CSS", level: 85, cat: "Frontend" },
  { name: "JavaScript", level: 82, cat: "Frontend" },
  { name: "React", level: 78, cat: "Frontend" },
  { name: "C++", level: 80, cat: "Core" },
  { name: "PHP", level: 70, cat: "Backend" },
  { name: "MySQL", level: 72, cat: "Backend" },
  { name: "Git & GitHub", level: 85, cat: "Tools" },
];

const PROJECTS = [
  {
    id: "apekama", number: "01", title: "APEKAMA.LK", subtitle: "Sri Lankan Agriculture Marketplace",
    desc: "A bilingual agriculture marketplace connecting Sri Lankan crop buyers and suppliers. It supports crop discovery, verified listings, purchase requests and admin-coordinated negotiations, deliveries and order verification.",
    tags: ["React", "Node.js", "MySQL"], category: "Web systems", status: "In development", theme: "agri",
    highlights: [
      "Sinhala & English marketplace with crop and district filters",
      "Separate buyer and supplier dashboards with listing approvals",
      "Admin-mediated purchase requests, offers and order communication",
      "Delivery verification, transparent buyer-only commission and dispute support",
      "Private admin and field-officer interfaces with role-based access"
    ],
    note: "Real homepage UI screenshot from the APEKAMA.LK project. Interface shown is a design preview; statistics and contact details displayed in the screenshot are not verified live data.",
    image: apekamaPreview,
    fullImage: apekamaHomepage,
    // Add the real deployed site URL here after it becomes publicly accessible.
    // Example: liveUrl: "https://apekama.lk",
    liveUrl: "",
    link: "", repo: "",
  },
  {
    id: "hotel", number: "02", title: "Hotel & Restaurant System", subtitle: "Hospitality operations platform",
    desc: "An API-powered platform connecting room reservations, front-desk operations, restaurant billing, inventory and reports in one system.",
    tags: ["PHP", "JavaScript", "MySQL"], category: "Web systems", status: "In development", theme: "hotel",
    highlights: [
      "Room reservations, allocation, check-in and check-out management",
      "Room availability, occupancy status and guest information",
      "Restaurant ordering, POS billing and guest charge tracking",
      "Inventory monitoring and operational reporting",
      "Integrated front-office and restaurant workflows"
    ],
    note: "Room management interface screenshot provided for this hotel and restaurant project. The screenshot is a UI illustration and does not independently verify live system data.",
    image: hotelRooms,
    fullImage: hotelRooms,
    imageLabel: "Room management UI",
    link: "", repo: "",
    liveUrl: "https://kivihotel.rf.gd/front_office/rooms.php",
  },
  {
    id: "raid", number: "03", title: "Btrfs RAID-1 Simulator", subtitle: "C-based Linux filesystem simulation",
    desc: "An interactive C filesystem simulator demonstrating RAID-1 mirroring, checksum-based self-healing, Copy-on-Write file copies and B-tree indexing.",
    tags: ["C", "RAID-1", "B-tree", "Copy-on-Write"], category: "Academic", status: "Completed", theme: "raid",
    highlights: [
      "Mirror 128-byte data blocks across two simulated in-memory disks",
      "Detect corruption using FNV-1a checksums and repair Disk 1 from a healthy Disk 2 copy",
      "Create, read, list, copy and delete small text files through a command-line interface",
      "Share blocks during Copy-on-Write file copies using reference counts",
      "Index filenames with a balanced B-tree for O(log n) lookup",
      "Test disk failures, injected corruption and RAID health in developer mode"
    ],
    note: "IS2202 Advanced Data Structures and Algorithms group project. My documented contribution: CLI menu and header-file handling in main.c. The simulation runs in memory and does not provide a hosted website.",
    image: btrfsTerminal,
    fullImage: btrfsTerminal,
    imageLabel: "Actual CLI screenshot",
    link: "", repo: "",
    liveUrl: "",
  },
  {
    id: "safari", number: "04", title: "WILDAFARI", subtitle: "Safari booking & management platform",
    desc: "A web-based safari management system for exploring destinations, handling guest bookings, organizing guides and vehicles, and streamlining safari operations.",
    tags: ["Booking", "Tourism", "Management"], category: "Web systems", status: "Completed", theme: "safari",
    highlights: [
      "Discover safari locations and explore destination information",
      "Support guest bookings with no account required and account-based booking flows",
      "Manage safari reservations, booking details and customer journeys",
      "Organize safari vehicles, local guides and adventure options",
      "Streamline end-to-end safari operations through one web platform"
    ],
    note: "Homepage screenshot from the WILDAFARI safari booking and management system. The interface highlights destination discovery, booking access and safari operation flow.",
    image: wildafariHomepage,
    fullImage: wildafariHomepage,
    imageLabel: "Safari system homepage UI",
    link: "", repo: "",
    // Paste your real deployed website URL here when available.
    liveUrl: "",
  },
  {
    id: "hotel-prime", number: "06", title: "Hotel Prime", subtitle: "Hotel room booking & management",
    desc: "A PHP-based hotel room booking and management platform that lets guests search for rooms by travel dates and occupancy while bringing accommodation and reservation details together.",
    tags: ["PHP", "Room Booking", "Hotel Management"], category: "Web systems", status: "Completed", theme: "hotel",
    highlights: [
      "Search available rooms using check-in and check-out dates",
      "Choose guest and room occupancy before starting a booking",
      "Present hotel information and accommodation options on a dedicated website",
      "Support hotel room reservations and booking-related workflows",
      "Provide a central web interface for hotel room management"
    ],
    note: "Homepage screenshot supplied for this PHP hotel project. Room searching, guest selection and booking entry are visible; other management workflows are described by the project owner and were not independently tested.",
    image: hotelPrimeHomepage,
    fullImage: hotelPrimeHomepage,
    imageLabel: "Hotel booking homepage",
    link: "", repo: "",
    // Add the deployed Hotel Prime URL here if it becomes available.
    liveUrl: "",
  },
  {
    id: "study", number: "05", title: "StudySpace AI", subtitle: "Intelligent Notes & Learning Management",
    desc: "An AI-powered study workspace bringing smart notes, AI-assisted learning, group collaboration and study planning together in one place.",
    tags: ["AI", "Education", "Collaboration"], category: "Web systems", status: "In development", theme: "study",
    highlights: [
      "Organize rich-text notes by subject, tags and favorites; import PDF, DOCX and TXT files",
      "AI study support for summaries, note-based questions and practice quizzes",
      "Study groups, shared notes and collaborative editing with access permissions",
      "Exam and task reminders, personalized study planning and progress tracking",
      "Responsive study dashboard with authentication and privacy-focused access"
    ],
    note: "StudySpace AI login screen supplied by the project creator. Feature availability may vary on the live deployment.",
    image: studyspaceScreenshot,
    fullImage: studyspaceScreenshot,
    imageLabel: "StudySpace AI login UI",
    link: "", repo: "",
    liveUrl: "https://serious-study-smart-space.base44.app",
  },
];

const EDUCATION = [
  {
    when: "2023 — Present",
    what: "BSc in Information Systems",
    where: "University of Colombo School of Computing",
    detail: "Coursework: Data Structures & Algorithms, OOP, Databases, Web Technologies, Software Engineering.",
  },
  {
    when: "2019 — 2022",
    what: "G.C.E. Advanced Level — Technology Stream",
    where: "Technology Stream",
    detail: "Advanced Level studies in the Technology Stream.",
  },
];

/* ------------------------------------------------------------------
   HOOK — reveal-on-scroll
------------------------------------------------------------------ */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------
   ANIMATED PLACEHOLDER — cycles through example text like a typewriter
------------------------------------------------------------------ */
function useTypedPlaceholder(examples, colors) {
  const [text, setText] = useState("");
  const [colorIdx, setColorIdx] = useState(0);
  const stateRef = useRef({ exIdx: 0, charIdx: 0, deleting: false });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setText(examples[0]);
      return;
    }
    let timer;
    function tick() {
      const st = stateRef.current;
      const current = examples[st.exIdx];
      if (!st.deleting) {
        st.charIdx++;
        setText(current.slice(0, st.charIdx));
        if (st.charIdx >= current.length) {
          st.deleting = true;
          timer = setTimeout(tick, 1400);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        st.charIdx--;
        setText(current.slice(0, st.charIdx));
        if (st.charIdx <= 0) {
          st.deleting = false;
          st.exIdx = (st.exIdx + 1) % examples.length;
          setColorIdx((c) => (c + 1) % colors.length);
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, 28);
      }
    }
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [examples, colors]);

  return { text, color: colors[colorIdx % colors.length] };
}

function TypedInput({ label, examples, colors, type = "text", textarea = false }) {
  const { text, color } = useTypedPlaceholder(examples, colors);
  const [value, setValue] = useState("");
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="field">
      <label>{label}</label>
      <div className="typed-field-wrap">
        <Tag
          type={textarea ? undefined : type}
          rows={textarea ? 4 : undefined}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value === "" && (
          <span className="typed-placeholder" style={{ color }}>
            {text}
            <span className="typed-caret" style={{ background: color }} />
          </span>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   PARTICLE BACKGROUND — floating dots that drift toward clicks
------------------------------------------------------------------ */
function ParticleField() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const targetRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const colors = ["#E8A33D", "#5EEAD4"];
    let W, H, DPR;

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const COUNT = Math.min(220, Math.floor((window.innerWidth * window.innerHeight) / 6000));
    particlesRef.current = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 1.4 + Math.random() * 2.6,
      vx: (Math.random() - 0.5) * 1.1,
      vy: (Math.random() - 0.5) * 1.1,
      hue: Math.random(),
      hueShift: (Math.random() - 0.5) * 0.0015,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    function lerpColor(hue) {
      // blend between amber and cyan based on hue 0..1
      const c1 = [232, 163, 61];
      const c2 = [94, 234, 212];
      const t = (Math.sin(hue * Math.PI * 2) + 1) / 2;
      const r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
      const g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
      const b = Math.round(c1[2] + (c2[2] - c1[2]) * t);
      return `rgb(${r},${g},${b})`;
    }

    function step() {
      ctx.clearRect(0, 0, W, H);
      const pts = particlesRef.current;
      const target = targetRef.current;

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];

        if (!reduceMotion) {
          p.hue += p.hueShift;

          if (target && target.active) {
            const dx = target.x - p.x;
            const dy = target.y - p.y;
            const dist = Math.hypot(dx, dy) || 1;
            const pull = Math.min(0.02, 1400 / (dist * dist * 40));
            p.vx += (dx / dist) * pull;
            p.vy += (dy / dist) * pull;
          } else {
            p.vx += (Math.random() - 0.5) * 0.06;
            p.vy += (Math.random() - 0.5) * 0.06;
          }

          const speed = Math.hypot(p.vx, p.vy);
          const maxSpeed = 2.2;
          if (speed > maxSpeed) {
            p.vx = (p.vx / speed) * maxSpeed;
            p.vy = (p.vy / speed) * maxSpeed;
          }

          p.vx *= 0.997;
          p.vy *= 0.997;
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -10) p.x = W + 10;
          if (p.x > W + 10) p.x = -10;
          if (p.y < -10) p.y = H + 10;
          if (p.y > H + 10) p.y = -10;
        }

        const col = lerpColor(p.hue);
        ctx.beginPath();
        ctx.fillStyle = col;
        ctx.globalAlpha = 0.55;
        ctx.shadowBlur = 8;
        ctx.shadowColor = col;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      // fade the click target's pull over time so dots settle again
      if (target && target.active) {
        target.life -= 1;
        if (target.life <= 0) target.active = false;
      }

      rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);

    function handleClick(e) {
      const rect = canvas.getBoundingClientRect();
      targetRef.current = {
        x: e.clientX - rect.left + window.scrollX - (canvas.offsetLeft || 0),
        y: e.clientY - rect.top,
        active: true,
        life: 140,
      };
    }
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

/* ------------------------------------------------------------------
   AVATAR — animated gradient-ring profile photo
------------------------------------------------------------------ */
function Avatar() {
  const initials = PROFILE.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="avatar-wrap">
      <div className="avatar-ring">
        <div className="avatar-inner">
          {PROFILE.photo ? (
            <img src={PROFILE.photo} alt={PROFILE.name} />
          ) : (
            <span className="avatar-initials">{initials}</span>
          )}
        </div>
      </div>
      <span className="avatar-status" title="Available for internships" />
    </div>
  );
}

/* ------------------------------------------------------------------
   CODE RAIN — falling keyword animation, triggered by clicking the brand
------------------------------------------------------------------ */
function CodeRain({ trigger }) {
  const [drops, setDrops] = useState([]);
  const keywords = ["HTML", "CSS", "JavaScript", "React", "C++", "PHP", "MySQL", "Git", "</>", "{ }"];
  const colors = ["var(--amber)", "var(--cyan)"];

  useEffect(() => {
    if (trigger === 0) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const count = 22;
    const batch = Array.from({ length: count }, (_, i) => ({
      id: `${trigger}-${i}`,
      word: keywords[Math.floor(Math.random() * keywords.length)],
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 3.2 + Math.random() * 2.2,
      size: 14 + Math.random() * 12,
      rotate: (Math.random() - 0.5) * 60,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setDrops((d) => [...d, ...batch]);

    const t = setTimeout(() => {
      setDrops((d) => d.filter((drop) => !batch.some((b) => b.id === drop.id)));
    }, 6200);
    return () => clearTimeout(t);
  }, [trigger]);

  if (drops.length === 0) return null;

  return (
    <div className="code-rain" aria-hidden="true">
      {drops.map((d) => (
        <span
          key={d.id}
          className="code-drop"
          style={{
            left: `${d.left}%`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            fontSize: `${d.size}px`,
            color: d.color,
            "--rot": `${d.rotate}deg`,
          }}
        >
          {d.word}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------
   TERMINAL HERO — the signature element
------------------------------------------------------------------ */
function TerminalHero({ dark }) {
  const lines = [
    { cmd: "whoami", out: PROFILE.name },
    { cmd: "cat role.txt", out: PROFILE.role },
    { cmd: "cat status.txt", out: PROFILE.tagline },
  ];
  const [typed, setTyped] = useState([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState("cmd"); // cmd -> out

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    const current = lines[lineIdx];
    const target = phase === "cmd" ? current.cmd : current.out;
    if (charIdx < target.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), phase === "cmd" ? 45 : 14);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      if (phase === "cmd") {
        setPhase("out");
        setCharIdx(0);
      } else {
        setTyped((arr) => [...arr, current]);
        setLineIdx((i) => i + 1);
        setCharIdx(0);
        setPhase("cmd");
      }
    }, phase === "cmd" ? 250 : 450);
    return () => clearTimeout(t);
  }, [charIdx, phase, lineIdx]);

  const currentLine = lines[lineIdx];

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
        <span className="terminal-title">shehara_Geesara: ~/portfolio</span>
      </div>
      <div className="terminal-body">
        {typed.map((l, i) => (
          <div key={i} className="term-line">
            <div><span className="prompt">➜ ~</span> {l.cmd}</div>
            <div className="term-out">{l.out}</div>
          </div>
        ))}
        {currentLine && (
          <div className="term-line">
            <div>
              <span className="prompt">➜ ~</span>{" "}
              {phase === "cmd" ? currentLine.cmd.slice(0, charIdx) : currentLine.cmd}
              {phase === "cmd" && <span className="caret" />}
            </div>
            {phase === "out" && (
              <div className="term-out">
                {currentLine.out.slice(0, charIdx)}
                <span className="caret" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   NAV
------------------------------------------------------------------ */
function Nav({ dark, setDark, onBrandClick }) {
  const links = [
    ["#home", "home"], ["#about", "about"], ["#skills", "skills"],
    ["#projects", "projects"], ["#education", "education"], ["#contact", "contact"],
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <a
        href="#home"
        className="brand"
        onClick={(e) => { e.preventDefault(); onBrandClick(); }}
        title="Click me!"
      >
        <Terminal size={18} strokeWidth={2.4} />
        <span>{PROFILE.handle}</span>
        <span className="blink-underscore">_</span>
      </a>
      <div className={`nav-links ${open ? "nav-open" : ""}`}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
      <div className="nav-actions">
        <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
          {dark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

/* Stylized project illustrations — intentionally not actual product screenshots. */
function ProjectVisual({ project }) {
  const icon = project.id === "raid" ? <Code2 size={20} /> : <FolderGit2 size={20} />;
  if (project.image) return (
    <div className="work-visual work-real-preview" aria-label={`${project.title} interface screenshot`}>
      <img src={project.image} alt={`${project.title} project interface screenshot`} loading="lazy" />
      <span className="work-image-chip"><span className="work-image-dot"/> {project.imageLabel || "Homepage UI preview"}</span>
      <div className="work-preview-shine" aria-hidden="true" />
    </div>
  );
  return (
    <div className={`work-visual visual-${project.theme}`} aria-label={`${project.title} visual illustration`}>
      <div className="mock-glow" />
      <div className="mock-window">
        <div className="mock-top"><span className="mock-dots"><i/><i/><i/></span><span>{project.id === "raid" ? "simulation / console" : `${project.id}.workspace`}</span><span className="mock-top-icon">{icon}</span></div>
        <div className="mock-body">
          <div className="mock-side"><span/><span/><span/><span/></div>
          <div className="mock-content">
            <div className="mock-title-line" />
            <div className="mock-metrics"><span/><span/><span/></div>
            <div className="mock-chart"><i/><i/><i/><i/><i/><i/><i/></div>
            <div className="mock-rows"><span/><span/><span/></div>
          </div>
        </div>
      </div>
      <span className="visual-label">UI illustration</span>
    </div>
  );
}

/* ------------------------------------------------------------------
   MAIN APP
------------------------------------------------------------------ */
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [rainTrigger, setRainTrigger] = useState(0);
  const [projectFilter, setProjectFilter] = useState("All projects");
  const [activeProject, setActiveProject] = useState(null);
  const visibleProjects = PROJECTS.filter(p => projectFilter === "All projects" || p.category === projectFilter);
  useEffect(() => {
    if (!activeProject) return;
    const onKey = e => { if (e.key === "Escape") setActiveProject(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activeProject]);

  return (
    <div className={dark ? "app dark" : "app light"}>
      <div className="bg-fx" aria-hidden="true">
        <ParticleField />
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

        :root{
          --ink:#000000;
          --panel:#0B0B0D;
          --panel-2:#131316;
          --amber:#E8A33D;
          --cyan:#5EEAD4;
          --text:#F1F0EA;
          --muted:#8B93A7;
          --line:rgba(241,240,234,0.10);
          --radius:14px;
          --btn-primary:#4ADE80;
        }
        .app.light{
          --ink:#F6F5F0;
          --panel:#FFFFFF;
          --panel-2:#EFEDE4;
          --amber:#B9761F;
          --cyan:#0E8C7D;
          --text:#171A21;
          --muted:#5B6270;
          --line:rgba(23,26,33,0.10);
          --btn-primary:#22C55E;
        }
        *{box-sizing:border-box;}
        .app{
          background:var(--ink);
          color:var(--text);
          font-family:'Inter',sans-serif;
          min-height:100vh;
          transition:background .35s ease,color .35s ease;
          position:relative;
        }
        html, body{overflow-x:hidden;}

        /* ---------- ANIMATED BACKGROUND ---------- */
        .bg-fx{
          position:fixed;inset:0;z-index:0;overflow:hidden;pointer-events:none;
        }
        .particle-canvas{
          position:absolute;inset:0;width:100%;height:100%;
        }
        .nav, section, footer{position:relative;z-index:1;}
        h1,h2,h3,.mono{font-family:'Space Grotesk',sans-serif;}
        .code, .prompt, .term-out, .terminal-title, .nav-num, .eyebrow, .skill-name, .brand{
          font-family:'JetBrains Mono',monospace;
        }
        a{color:inherit;text-decoration:none;}
        html{scroll-behavior:smooth;}
        section{padding:110px 8vw;position:relative;scroll-margin-top:84px;}
        @media (max-width:720px){section{padding:80px 6vw;}}
        /* Seamless sections: keep the site's exact background color,
           without the thin grey/white separator lines. */
        section:not(.hero-section){
          border:0;
          box-shadow:none;
          background:transparent;
        }
        .container{max-width:1120px;margin:0 auto;}

        /* ---------- NAV ---------- */
        .nav{
          position:sticky;top:0;z-index:50;
          display:flex;align-items:center;justify-content:space-between;
          padding:24px 8vw;
          background:color-mix(in srgb, var(--ink) 85%, transparent);
          backdrop-filter:blur(10px);
          border-bottom:1px solid var(--line);
          transition:padding .3s ease, background .3s ease, box-shadow .3s ease;
          overflow:visible;
        }
        .nav:hover{box-shadow:0 4px 24px -12px rgba(0,0,0,.5);}
        .brand{
          display:flex;align-items:center;gap:6px;font-weight:600;font-size:17px;color:var(--amber);
          cursor:pointer;user-select:none;transition:transform .25s ease, filter .25s ease;
        }
        .brand:hover{transform:scale(1.04);filter:brightness(1.15);}
        .brand:active{transform:scale(0.97);}
        .blink-underscore{animation:blink 1.1s steps(1) infinite;}
        @keyframes blink{50%{opacity:0;}}

        /* ---------- CODE RAIN ---------- */
        .code-rain{
          position:fixed;inset:0;overflow:hidden;pointer-events:none;z-index:200;
        }
        .code-drop{
          position:absolute;top:-40px;
          font-family:'JetBrains Mono',monospace;font-weight:700;
          animation-name:fallDown;
          animation-timing-function:cubic-bezier(.35,0,.65,1);
          animation-fill-mode:forwards;
          text-shadow:0 0 10px currentColor;
          white-space:nowrap;
          transition:filter .3s ease;
        }
        @keyframes fallDown{
          0%{transform:translateY(0) scale(1) rotate(0deg);opacity:0;filter:brightness(0.9);}
          8%{opacity:1;}
          50%{filter:brightness(1.3);}
          85%{opacity:1;}
          100%{transform:translateY(100vh) scale(0.45) rotate(var(--rot));opacity:0;filter:brightness(1.8);}
        }
        .nav-links{display:flex;gap:32px;}
        .nav-links a{
          display:flex;align-items:center;gap:6px;font-size:15px;color:var(--muted);
          position:relative;padding:4px 0;
          transition:color .25s ease, transform .25s ease;
        }
        .nav-links a::after{
          content:"";position:absolute;left:0;bottom:-3px;width:0;height:2px;
          background:linear-gradient(90deg,var(--cyan),var(--amber));
          transition:width .3s ease;
        }
        .nav-links a:hover{color:var(--text);transform:translateY(-1px);}
        .nav-links a:hover::after{width:100%;}
        .nav-actions{display:flex;align-items:center;gap:10px;}
        .icon-btn{
          background:var(--panel);border:1px solid var(--line);color:var(--text);
          width:36px;height:36px;border-radius:9px;display:flex;align-items:center;justify-content:center;
          cursor:pointer;transition:border-color .25s ease, transform .35s ease, color .25s ease, box-shadow .25s ease;
        }
        .icon-btn:hover{
          border-color:var(--amber);color:var(--amber);
          transform:translateY(-2px) rotate(-8deg);
          box-shadow:0 8px 18px -8px var(--amber);
        }
        .burger{display:none;flex-direction:column;gap:4px;background:none;border:none;cursor:pointer;}
        .burger span{width:20px;height:2px;background:var(--text);}
        @media (max-width:820px){
          .nav-links{
            position:absolute;top:100%;left:0;right:0;flex-direction:column;
            background:var(--panel);padding:16px 8vw;gap:16px;
            border-bottom:1px solid var(--line);
            display:none;
          }
          .nav-links.nav-open{display:flex;}
          .burger{display:flex;}
        }

        /* ---------- HERO ---------- */
        .hero{
          padding-top:52px;
          padding-bottom:72px;
          display:grid;
          grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);
          gap:clamp(34px,5vw,72px);
          align-items:center;
          min-height:calc(100vh - 84px);
        }
        .hero > div{min-width:0;}
        @media (max-width:900px){
          .hero{grid-template-columns:1fr;gap:42px;padding-top:44px;min-height:auto;}
          .hero-visual{margin-top:0;}
        }
        .eyebrow{
          color:var(--cyan);font-size:13px;letter-spacing:.06em;
          display:flex;align-items:center;gap:8px;margin-bottom:18px;
        }
        .eyebrow::before{content:"//";color:var(--amber);}
        .hero h1{
          font-size:clamp(32px,4vw,52px);line-height:1.16;font-weight:700;
          letter-spacing:-.035em;margin:0 0 24px;
          overflow-wrap:normal;
        }
        .hero-heading{display:flex;flex-direction:column;gap:16px;}
        .hero-greeting{display:block;font-size:clamp(46px,5.15vw,70px);line-height:1.1;letter-spacing:-.04em;}
        .hero-role{display:block;font-size:clamp(32px,3.55vw,49px);line-height:1.2;font-weight:650;max-width:590px;}
        .hero-role > span{color:var(--text);}
        .hero-period{color:var(--cyan);}
        @media (max-width:520px){
          .hero-greeting{font-size:clamp(37px,9.2vw,50px);}
          .hero-role{font-size:clamp(28px,7.2vw,38px);}
          .hero-heading{gap:12px;}
          .hero-description-break{display:none;}
        }
        .hero h1 .accent{
          font-weight:800;
          background:linear-gradient(90deg, var(--amber), var(--cyan), var(--amber));
          background-size:200% auto;
          -webkit-background-clip:text;background-clip:text;color:transparent;
          animation:shine 5s linear infinite;
          text-shadow:0 0 26px color-mix(in srgb, var(--amber) 35%, transparent);
          display:inline-block;
        }
        @keyframes shine{
          0%{background-position:0% 50%;}
          100%{background-position:200% 50%;}
        }
        .hero p.lede{color:var(--muted);font-size:clamp(15px,1.5vw,17px);line-height:1.7;max-width:560px;margin-bottom:30px;}
        .btn-row{display:flex;gap:14px;flex-wrap:wrap;}
        .btn{
          display:inline-flex;align-items:center;gap:8px;
          padding:13px 22px;border-radius:9px;font-size:14px;font-weight:600;
          cursor:pointer;border:1px solid transparent;position:relative;overflow:hidden;
          transition:transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .3s ease, color .3s ease, background .3s ease;
        }
        .btn-primary{background:var(--btn-primary, var(--amber));color:#0B1A10;}
        .btn-primary:hover{
          transform:translateY(-3px) scale(1.03);
          box-shadow:0 14px 28px -10px var(--btn-primary, var(--amber));
          background:var(--cyan);color:#03211d;
        }
        .btn-primary:active{transform:translateY(-1px) scale(0.99);}
        .btn-ghost{border-color:var(--line);color:var(--text);}
        .btn-ghost:hover{
          border-color:var(--cyan);color:var(--cyan);
          transform:translateY(-3px) scale(1.03);
          box-shadow:0 14px 28px -14px var(--cyan);
        }
        .social-row{display:flex;gap:14px;margin-top:34px;}
        .social-row a{
          width:38px;height:38px;border:1px solid var(--line);border-radius:9px;
          display:flex;align-items:center;justify-content:center;color:var(--muted);
          transition:color .3s ease, border-color .3s ease, transform .35s cubic-bezier(.2,.8,.2,1), background .3s ease;
        }
        .social-row a:hover{
          color:var(--ink);background:var(--amber);border-color:var(--amber);
          transform:translateY(-4px) rotate(6deg) scale(1.08);
        }

        /* ---------- AVATAR ---------- */
        .hero-visual{display:flex;flex-direction:column;align-items:center;gap:26px;justify-content:flex-start;transform:translateY(-34px);}
        @media (max-width:900px){.hero-visual{transform:none;margin-top:16px;}}
        .avatar-wrap{position:relative;}
        .avatar-ring{
          width:248px;height:248px;border-radius:50%;padding:6px;
          background:conic-gradient(from 0deg, var(--amber), var(--cyan), var(--amber));
          box-shadow:0 18px 44px -22px rgba(0,0,0,.55), 0 0 0 8px color-mix(in srgb, var(--cyan) 12%, transparent);
          /* Profile photo stays upright and stationary */
          transition:box-shadow .4s ease;
        }
        .avatar-wrap:hover .avatar-ring{
          box-shadow:0 22px 56px -24px rgba(0,0,0,.6), 0 0 0 10px color-mix(in srgb, var(--cyan) 18%, transparent), 0 0 40px -10px var(--cyan);

        }

        .avatar-inner{
          width:100%;height:100%;border-radius:50%;background:var(--panel);
          display:flex;align-items:center;justify-content:center;overflow:hidden;
        }
        .avatar-inner img{width:100%;height:100%;object-fit:cover;object-position:center 22%;}
        .avatar-initials{
          font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:56px;
          background:linear-gradient(135deg, var(--amber), var(--cyan));
          -webkit-background-clip:text;background-clip:text;color:transparent;
        }
        .avatar-status{
          position:absolute;bottom:18px;right:18px;width:24px;height:24px;border-radius:50%;
          background:#27C93F;border:4px solid var(--ink);
          box-shadow:0 0 0 0 rgba(39,201,63,.6);
          animation:pulseDot 2s ease-out infinite;
        }
        @media (max-width:900px){.avatar-ring{width:220px;height:220px;}}
        @media (max-width:520px){.avatar-ring{width:190px;height:190px;}}
        @keyframes pulseDot{
          0%{box-shadow:0 0 0 0 rgba(39,201,63,.55);}
          70%{box-shadow:0 0 0 9px rgba(39,201,63,0);}
          100%{box-shadow:0 0 0 0 rgba(39,201,63,0);}
        }
        @media (prefers-reduced-motion: reduce){
          .avatar-ring{animation:none;}
          .avatar-status{animation:none;}
        }

        /* ---------- TERMINAL ---------- */
        .terminal{
          background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);
          overflow:hidden;
          box-shadow:0 30px 60px -30px rgba(0,0,0,.5), 0 0 0 1px rgba(255,255,255,0.02);
          animation:floatUp 6s ease-in-out infinite;
          transition:border-color .35s ease, box-shadow .35s ease, transform .35s ease;
        }
        .terminal:hover{
          border-color:var(--cyan);
          box-shadow:0 30px 70px -28px rgba(0,0,0,.6), 0 0 32px -6px var(--cyan);
          transform:translateY(-4px) scale(1.01);
        }
        @keyframes floatUp{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
        .terminal-bar{
          display:flex;align-items:center;gap:8px;padding:13px 16px;
          background:var(--panel-2);border-bottom:1px solid var(--line);
        }
        .dot{width:11px;height:11px;border-radius:50%;transition:transform .25s ease, box-shadow .25s ease;}
        .dot-r{background:#FF5F56;}.dot-y{background:#FFBD2E;}.dot-g{background:#27C93F;}
        .terminal-bar:hover .dot-r{transform:scale(1.2);box-shadow:0 0 10px #FF5F56;}
        .terminal-bar:hover .dot-y{transform:scale(1.2);box-shadow:0 0 10px #FFBD2E;}
        .terminal-bar:hover .dot-g{transform:scale(1.2);box-shadow:0 0 10px #27C93F;}
        .terminal-title{margin-left:8px;color:var(--muted);font-size:12px;}
        .terminal-body{
          padding:24px 22px;min-height:210px;font-size:14.5px;
          background:
            linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--cyan) 4%, transparent) 100%);
        }
        .term-line{margin-bottom:18px;}
        .prompt{color:var(--cyan);margin-right:8px;font-weight:600;}
        .term-out{
          color:var(--amber);margin-top:8px;padding:8px 12px;line-height:1.55;
          background:color-mix(in srgb, var(--amber) 8%, transparent);
          border-left:2px solid var(--amber);border-radius:0 6px 6px 0;
          display:inline-block;max-width:100%;
        }
        .caret{
          display:inline-block;width:8px;height:16px;background:var(--cyan);
          margin-left:2px;vertical-align:middle;animation:blink 1s steps(1) infinite;
          box-shadow:0 0 8px var(--cyan);
        }

        /* ---------- SECTION HEADS ---------- */
        .section-head{margin-bottom:52px;}
        .section-head h2{
          font-family:'Space Grotesk',sans-serif;
          font-size:clamp(32px,4.4vw,50px);
          font-weight:800;
          letter-spacing:.01em;
          margin:6px 0 0;
          display:inline-block;position:relative;
          background:linear-gradient(90deg, var(--amber), var(--cyan), var(--text), var(--amber));
          background-size:300% auto;
          -webkit-background-clip:text;background-clip:text;color:transparent;
          animation:headShine 5s linear infinite, headFlicker 3.2s ease-in-out infinite;
        }
        @keyframes headShine{
          0%{background-position:0% 50%;}
          100%{background-position:300% 50%;}
        }
        @keyframes headFlicker{
          0%, 100%{opacity:1;}
          50%{opacity:1;}
          62%{opacity:.82;}
          64%{opacity:1;}
          78%{opacity:.9;}
          80%{opacity:1;}
        }
        @media (prefers-reduced-motion: reduce){
          .section-head h2{animation:none;color:var(--text);background:none;-webkit-text-fill-color:currentColor;}
        }
        .section-head .eyebrow::before{content:"// ";}

        /* ---------- ABOUT ---------- */
        .about-grid{display:grid;grid-template-columns:0.8fr 1.2fr;gap:56px;align-items:start;}
        @media (max-width:820px){.about-grid{grid-template-columns:1fr;}}
        .about-card{
          background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);
          padding:28px;position:relative;overflow:hidden;
          transition:transform .4s cubic-bezier(.2,.8,.2,1), border-color .4s ease, box-shadow .4s ease;
        }
        .about-card::before{
          content:"";position:absolute;inset:0;opacity:0;
          background:radial-gradient(340px circle at var(--mx,50%) var(--my,50%), color-mix(in srgb, var(--cyan) 12%, transparent), transparent 70%);
          transition:opacity .35s ease;pointer-events:none;
        }
        .about-card:hover::before{opacity:1;}
        .about-card:hover{
          transform:translateY(-6px);
          border-color:var(--amber);
          box-shadow:0 26px 44px -28px rgba(0,0,0,.55), 0 0 26px -12px var(--cyan);
        }
        .about-card h3{
          margin:0 0 14px;font-size:19px;display:flex;align-items:center;gap:9px;
          font-weight:700;
        }
        .about-card h3 svg{transition:transform .4s cubic-bezier(.34,1.56,.64,1), color .3s ease;}
        .about-card:hover h3 svg{transform:rotate(-12deg) scale(1.15);color:var(--cyan);}
        .about-card p{color:var(--muted);line-height:1.8;font-size:15.5px;}
        .fact-list{list-style:none;padding:0;margin:20px 0 0;display:grid;gap:4px;}
        .fact-list li{
          display:flex;justify-content:space-between;align-items:baseline;gap:16px;
          font-size:13.5px;border-bottom:1px dashed var(--line);
          padding:12px 4px;color:var(--muted);
          border-radius:6px;
          transition:background .25s ease, padding-left .25s ease, border-color .25s ease;
        }
        .fact-list li:hover{
          background:color-mix(in srgb, var(--amber) 8%, transparent);
          padding-left:10px;border-color:var(--amber);
        }
        .fact-list li span{flex-shrink:0;white-space:nowrap;}
        .fact-list li b{
          color:var(--text);font-weight:600;text-align:right;line-height:1.4;
          transition:color .25s ease;
        }
        .fact-list li:hover b{color:var(--amber);}

        /* ---------- SKILLS ---------- */
        .skills-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px 40px;}
        @media (max-width:640px){.skills-grid{grid-template-columns:1fr;}}
        .skill-row{
          margin-bottom:4px;padding:12px;border-radius:10px;
          border:1px solid transparent;
          transition:background .3s ease, border-color .3s ease, transform .3s ease;
        }
        .skill-row:hover{
          background:var(--panel);border-color:var(--line);
          transform:translateX(4px);
        }
        .skill-top{display:flex;justify-content:space-between;margin-bottom:8px;font-size:13.5px;}
        .skill-name{color:var(--text);font-weight:600;transition:color .3s ease;}
        .skill-row:hover .skill-name{color:var(--amber);}
        .skill-cat{color:var(--muted);font-size:11px;}
        .bar-track{height:8px;background:var(--panel-2);border-radius:5px;overflow:hidden;border:1px solid var(--line);}
        .bar-fill{
          height:100%;border-radius:5px;
          background:linear-gradient(90deg,var(--cyan),var(--amber),var(--cyan));
          background-size:200% 100%;
          width:0;
          transition:width 1.1s cubic-bezier(.2,.8,.2,1);
          animation:barShine 4s linear infinite;
        }
        @keyframes barShine{
          0%{background-position:0% 0%;}
          100%{background-position:200% 0%;}
        }
        .reveal-in .bar-fill{width:var(--w);}

        /* ---------- PROJECTS: premium responsive showcase ---------- */
        .work-intro{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;margin-bottom:28px;}
        .work-intro .section-head{margin:0;}
        .work-subtitle{color:var(--muted);font-size:15px;line-height:1.7;max-width:540px;margin:13px 0 0;}
        .work-counter{color:var(--muted);font:12px 'JetBrains Mono',monospace;white-space:nowrap;}
        .work-counter b{color:var(--cyan);font-size:19px;}
        .work-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 26px;}
        .work-tab{background:var(--panel);border:1px solid var(--line);border-radius:999px;color:var(--muted);padding:10px 17px;font-weight:600;font-size:12px;cursor:pointer;transition:all .2s;}
        .work-tab:hover,.work-tab:focus-visible{border-color:var(--cyan);color:var(--text);}
        .work-tab.selected{background:var(--cyan);color:#071715;border-color:var(--cyan);}
        .work-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;align-items:stretch;}
        .work-card{background:var(--panel);border:1px solid var(--line);border-radius:18px;overflow:hidden;height:100%;display:flex;flex-direction:column;transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease;}
        .work-card:hover{transform:translateY(-6px);border-color:color-mix(in srgb,var(--cyan) 55%,var(--line));box-shadow:0 22px 45px -24px rgba(0,0,0,.7);}
        .work-card-body{padding:23px;display:flex;flex-direction:column;flex:1;}
        .work-meta{display:flex;align-items:center;gap:10px;justify-content:space-between;margin-bottom:13px;}
        .work-index{font:11px 'JetBrains Mono',monospace;color:var(--muted);letter-spacing:.1em;}
        .work-status{font-size:10px;font-weight:700;padding:6px 10px;border:1px solid var(--line);border-radius:100px;white-space:nowrap;}
        .work-status.completed{color:#5eead4;background:rgba(94,234,212,.08);}
        .work-status.progress{color:#f4bc69;background:rgba(232,163,61,.09);}
        .work-status.concept{color:#b7a7ed;background:rgba(160,135,239,.1);}
        .work-card h3{margin:0;font-size:clamp(19px,2vw,23px);line-height:1.3;letter-spacing:-.035em;}
        .work-card .work-kind{font-size:12px;color:var(--cyan);margin:7px 0 13px;font-weight:600;}
        .work-desc{font-size:13px;color:var(--muted);line-height:1.7;margin:0 0 17px;flex:1;}
        .work-tags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:19px;}
        .work-tags span{font-size:10px;color:var(--text);border:1px solid var(--line);background:var(--panel-2);border-radius:6px;padding:6px 9px;}
        .work-footer{border-top:1px solid var(--line);padding-top:14px;display:flex;justify-content:space-between;align-items:center;gap:12px;}
        .work-detail-button{display:inline-flex;align-items:center;gap:7px;padding:7px 0;background:none;color:var(--cyan);border:0;font-size:13px;font-weight:700;cursor:pointer;}
        .work-detail-button:hover{color:var(--amber);}
        .work-extra-links{display:flex;gap:10px;align-items:center;flex-wrap:wrap;}
        .work-extra-links a:not(.work-live-link){font-size:12px;color:var(--muted);display:flex;align-items:center;gap:5px;}
        .work-extra-links a:hover{color:var(--cyan);}
        /* APEKAMA.LK real screenshot – keep original product artwork intact */
        .work-card:has(.work-real-preview){border-color:color-mix(in srgb,var(--cyan) 28%,var(--line));}
        .work-real-preview{height:250px;background:#f5faf7;align-items:stretch;justify-content:stretch;}
        .work-real-preview img{width:100%;height:100%;display:block;object-fit:cover;object-position:center top;transition:transform .5s cubic-bezier(.2,.75,.2,1),filter .35s;}
        .work-card:has(.work-real-preview[aria-label^="Btrfs"]) .work-real-preview{background:#0a0a0a;}
        .work-card:has(.work-real-preview[aria-label^="Btrfs"]) .work-real-preview img{object-fit:contain;object-position:center;}
        .work-card:hover .work-real-preview img{transform:scale(1.035);filter:saturate(1.05);}
        .work-real-preview::after{content:"";position:absolute;inset:55% 0 0;background:linear-gradient(to top,rgba(3,23,17,.45),transparent);pointer-events:none;}
        .work-image-chip{position:absolute;left:16px;bottom:14px;z-index:2;display:inline-flex;align-items:center;gap:7px;padding:7px 11px;border-radius:8px;background:rgba(6,28,22,.83);backdrop-filter:blur(8px);border:1px solid rgba(163,255,212,.25);font-size:11px;font-weight:650;color:#ecfff5;letter-spacing:.01em;}
        .work-image-dot{width:7px;height:7px;border-radius:50%;background:#5eead4;box-shadow:0 0 0 3px rgba(94,234,212,.14);}
        .work-preview-shine{position:absolute;inset:0;pointer-events:none;background:linear-gradient(120deg,transparent 35%,rgba(255,255,255,.13) 48%,transparent 60%);transform:translateX(-140%);transition:transform .8s ease;}
        .work-card:hover .work-preview-shine{transform:translateX(140%);}
        .work-dialog .work-real-preview{height:300px;border-radius:13px;}
        .work-dialog .work-real-preview img{object-fit:contain;object-position:center top;background:#fff;}
        .work-dialog .work-real-preview::after{display:none;}
        .work-dialog .work-image-chip{bottom:12px;}
        .work-live-link{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(125deg,#62f0d1,#c4f2a5);color:#09201d!important;font-weight:800;font-size:12px;letter-spacing:.01em;padding:10px 14px;border-radius:9px;text-decoration:none;box-shadow:0 5px 22px -12px #5eead4;transition:transform .2s ease,box-shadow .2s ease;}
        .work-live-link:hover{transform:translateY(-2px);box-shadow:0 12px 26px -12px #5eead4;}
        .work-live-unavailable,.work-live-unavailable:hover{background:var(--panel-2);color:var(--muted)!important;border:1px dashed var(--line);box-shadow:none;transform:none;cursor:not-allowed;opacity:.75;}
        .work-extra-links .work-live-link{font-size:12px;}
        .work-live-link:focus-visible{outline:2px solid var(--cyan);outline-offset:3px;}
        @media(max-width:550px){.work-footer{align-items:flex-start;flex-direction:column;}.work-extra-links{width:100%;}}
        .work-dialog-links{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:20px;}
        .work-preview-open{display:inline-flex;gap:7px;align-items:center;color:var(--cyan);font-size:12px;font-weight:650;text-decoration:none;}
        .work-preview-open:hover{text-decoration:underline;}
        @media(max-width:760px){.work-real-preview{height:210px;}.work-dialog .work-real-preview{height:245px;}}
        @media(prefers-reduced-motion:reduce){.work-real-preview img,.work-preview-shine{transition:none!important;}.work-card:hover .work-real-preview img{transform:none;}}
        .work-visual{height:218px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;isolation:isolate;background:radial-gradient(ellipse at 72% 22%,rgba(94,234,212,.16),transparent 57%),linear-gradient(135deg,#0a2120,#0b1114);}
        .visual-hotel{background:radial-gradient(ellipse at 75% 28%,rgba(232,163,61,.18),transparent 57%),linear-gradient(135deg,#241b15,#0d1318);}
        .visual-raid{background:radial-gradient(ellipse at 70% 20%,rgba(94,234,212,.17),transparent 57%),linear-gradient(135deg,#0d1926,#070e14);}
        .visual-safari{background:radial-gradient(ellipse at 70% 20%,rgba(232,163,61,.2),transparent 57%),linear-gradient(135deg,#1c2616,#101511);}
        .visual-study{background:radial-gradient(ellipse at 70% 20%,rgba(166,136,238,.25),transparent 57%),linear-gradient(135deg,#1a1831,#0e101c);}
        .mock-glow{position:absolute;width:240px;height:170px;border-radius:50%;filter:blur(55px);background:rgba(94,234,212,.14);z-index:-1;}
        .mock-window{width:80%;max-width:370px;height:180px;transform:perspective(850px) rotateX(5deg) rotateY(-10deg) rotateZ(-2deg) translateY(12px);background:#10181c;border:1px solid rgba(255,255,255,.14);border-radius:10px;box-shadow:15px 18px 42px rgba(0,0,0,.45);overflow:hidden;transition:transform .35s ease;}
        .work-card:hover .mock-window{transform:perspective(850px) rotateX(0deg) rotateY(-4deg) rotateZ(0deg) translateY(6px);}
        .mock-top{height:29px;background:#172127;border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:space-between;padding:0 12px;font:9px 'JetBrains Mono',monospace;color:#9da9aa;}
        .mock-dots{display:flex;gap:4px;}.mock-dots i{width:6px;height:6px;background:#ee8c80;border-radius:50%;}.mock-dots i:nth-child(2){background:#eab85e;}.mock-dots i:nth-child(3){background:#58d4a2;}
        .mock-top-icon{color:#79ddc8;display:flex;align-items:center;}.mock-top-icon svg{width:12px;height:12px;}
        .mock-body{display:grid;grid-template-columns:56px 1fr;height:calc(100% - 29px);}
        .mock-side{display:flex;flex-direction:column;gap:13px;padding:18px 13px;background:rgba(255,255,255,.035);border-right:1px solid rgba(255,255,255,.07);}
        .mock-side span{height:6px;border-radius:8px;background:#31474b;}.mock-side span:first-child{background:#62d4bd;}
        .mock-content{padding:18px 18px 10px;}.mock-title-line{height:9px;width:52%;background:#d6ece8;border-radius:9px;margin-bottom:15px;}
        .mock-metrics{display:flex;gap:9px}.mock-metrics span{height:34px;flex:1;border:1px solid rgba(255,255,255,.08);border-radius:5px;background:rgba(94,234,212,.08);}.mock-metrics span:nth-child(2){background:rgba(232,163,61,.12);}
        .mock-chart{display:flex;gap:7px;align-items:flex-end;height:44px;margin-top:12px;}.mock-chart i{width:10px;height:35%;border-radius:3px 3px 0 0;background:#66cdbb;opacity:.75;}.mock-chart i:nth-child(2){height:60%;}.mock-chart i:nth-child(3){height:40%;}.mock-chart i:nth-child(4){height:83%;}.mock-chart i:nth-child(5){height:58%;}.mock-chart i:nth-child(6){height:98%;}.mock-chart i:nth-child(7){height:74%;}
        .mock-rows{display:flex;flex-direction:column;gap:5px;margin-top:8px;}.mock-rows span{height:3px;border-radius:8px;width:100%;background:rgba(255,255,255,.09);}.mock-rows span:nth-child(2){width:70%;}.mock-rows span:nth-child(3){width:85%;}
        .visual-hotel .mock-chart i,.visual-safari .mock-chart i{background:#e6aa61;}.visual-study .mock-chart i{background:#b5a3ee;}
        .visual-label{position:absolute;bottom:11px;right:14px;color:rgba(255,255,255,.62);font:9px 'JetBrains Mono',monospace;letter-spacing:.07em;}
        .work-dialog-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.78);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:200;padding:20px;}
        .work-dialog{width:min(600px,100%);max-height:88vh;overflow-y:auto;background:var(--panel);color:var(--text);border:1px solid var(--line);border-radius:18px;padding:27px;box-shadow:0 30px 90px rgba(0,0,0,.55);}
        .work-dialog-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:18px;}.work-dialog-top button{background:var(--panel-2);color:var(--text);border:1px solid var(--line);border-radius:9px;width:36px;height:36px;cursor:pointer;font-size:19px;}
        .work-dialog h3{font-size:26px;margin:0 0 8px;}.work-dialog p{font-size:14px;color:var(--muted);line-height:1.75;}.work-dialog h4{font-size:13px;margin:24px 0 12px;}.work-dialog li{color:var(--muted);margin:9px 0;font-size:14px;}.work-dialog .mock-window{transform:none;}.work-dialog .work-visual{border-radius:12px;}
        .work-note{font-size:11px !important;margin:12px 0 0 !important;}
        @media(max-width:760px){.work-grid{grid-template-columns:1fr;}.work-intro{align-items:start;flex-direction:column;}.work-visual{height:192px;}.work-card-body{padding:20px;}}
        @media(prefers-reduced-motion:reduce){.work-card,.mock-window{transition:none;}.work-card:hover,.work-card:hover .mock-window{transform:none;}}

        /* ---------- EDUCATION / PREMIUM TIMELINE ---------- */
        #education{position:relative;isolation:isolate;}
        #education .section-head{margin-bottom:30px;}
        .edu-intro{max-width:670px;color:var(--muted);font-size:15px;line-height:1.7;margin:-8px 0 35px;}
        .timeline{position:relative;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;max-width:1110px;}
        .timeline > .reveal{height:100%;}
        .tl-item{
          position:relative;isolation:isolate;height:100%;box-sizing:border-box;min-width:0;
          padding:29px 30px 28px;border-radius:22px;overflow:hidden;
          background:linear-gradient(145deg,rgba(28,35,37,.96),rgba(13,17,19,.97));
          border:1px solid color-mix(in srgb,var(--cyan) 19%,var(--line));
          box-shadow:0 18px 55px -42px rgba(0,0,0,.9),inset 0 1px 0 rgba(255,255,255,.045);
          transition:transform .35s cubic-bezier(.2,.8,.2,1),border-color .35s,box-shadow .35s;
        }
        .tl-item::before{
          content:"";position:absolute;inset:0 0 auto;height:3px;
          background:linear-gradient(90deg,var(--cyan),var(--amber),transparent);opacity:.8;
        }
        .tl-item::after{
          content:"";position:absolute;right:-75px;top:-95px;width:255px;height:255px;
          border-radius:50%;background:radial-gradient(circle,color-mix(in srgb,var(--cyan) 14%,transparent),transparent 70%);
          pointer-events:none;z-index:-1;
        }
        .tl-item:hover{
          transform:translateY(-5px);
          border-color:color-mix(in srgb,var(--cyan) 48%,var(--line));
          box-shadow:0 24px 60px -34px rgba(0,0,0,.9),0 0 34px -25px var(--cyan);
        }
        .tl-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:25px;flex-wrap:wrap;}
        .tl-when{
          color:var(--cyan);font-size:12px;font-weight:700;letter-spacing:.075em;
          padding:8px 12px;border:1px solid color-mix(in srgb,var(--cyan) 26%,transparent);
          background:color-mix(in srgb,var(--cyan) 9%,transparent);border-radius:30px;
        }
        .tl-number{font-family:monospace;color:color-mix(in srgb,var(--muted) 70%,transparent);font-size:12px;letter-spacing:.1em;}
        .tl-icon{
          width:48px;height:48px;display:grid;place-items:center;border-radius:14px;margin-bottom:20px;
          background:linear-gradient(135deg,color-mix(in srgb,var(--amber) 16%,transparent),color-mix(in srgb,var(--cyan) 12%,transparent));
          border:1px solid color-mix(in srgb,var(--amber) 20%,transparent);color:var(--amber);
        }
        .tl-item h3{font-size:clamp(21px,2.15vw,27px);line-height:1.23;letter-spacing:-.035em;margin:0 0 12px;font-weight:750;color:var(--text);}
        .tl-where{display:block;color:var(--amber);font-size:14px;font-weight:650;line-height:1.5;margin-bottom:22px;}
        .tl-rule{height:1px;background:linear-gradient(90deg,color-mix(in srgb,var(--line) 90%,transparent),transparent);margin-bottom:19px;}
        .tl-item p{color:var(--muted);font-size:14px;line-height:1.75;margin:0;max-width:490px;}
        @media(max-width:760px){
          .timeline{grid-template-columns:1fr;gap:17px;}
          .tl-item{padding:24px;}
          .edu-intro{margin-bottom:25px;}
        }
        @media(prefers-reduced-motion:reduce){.tl-item{transition:none;}.tl-item:hover{transform:none;}}

        /* ---------- CONTACT ---------- */
        .contact-wrap{
          background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);
          padding:48px;display:grid;grid-template-columns:1fr 1fr;gap:40px;
        }
        @media (max-width:820px){.contact-wrap{grid-template-columns:1fr;padding:32px;}}
        .contact-wrap h2{
          font-size:30px;margin:0 0 12px;font-weight:800;line-height:1.15;
          background:linear-gradient(100deg, var(--text) 20%, var(--amber) 45%, var(--cyan) 65%, var(--text) 85%);
          background-size:250% auto;
          -webkit-background-clip:text;background-clip:text;color:transparent;
          animation:headShine 6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce){
          .contact-wrap h2{animation:none;-webkit-text-fill-color:currentColor;background:none;}
        }
        .contact-wrap p{color:var(--muted);line-height:1.7;font-size:15px;margin-bottom:24px;}
        .contact-list{display:flex;flex-direction:column;gap:14px;}
        .contact-list a{
          display:flex;align-items:center;gap:10px;font-size:14.5px;color:var(--text);
          transition:color .25s ease, transform .25s ease;
        }
        .contact-list a:hover{color:var(--amber);transform:translateX(4px);}
        .contact-list .ic{
          width:34px;height:34px;border-radius:8px;background:var(--panel-2);
          display:flex;align-items:center;justify-content:center;color:var(--amber);flex-shrink:0;
          transition:transform .3s ease, background .3s ease, color .3s ease;
        }
        .contact-list a:hover .ic{
          background:var(--amber);color:var(--ink);transform:rotate(-8deg) scale(1.1);
        }
        .field{display:flex;flex-direction:column;gap:6px;margin-bottom:16px;}
        .field label{font-size:12px;color:var(--muted);font-family:'JetBrains Mono',monospace;letter-spacing:.04em;}
        .typed-field-wrap{position:relative;}
        .field input,.field textarea{
          width:100%;
          background:var(--panel-2);border:1px solid var(--line);border-radius:8px;
          padding:11px 13px;color:var(--text);font-family:inherit;font-size:14px;resize:none;
          transition:border-color .25s ease, box-shadow .25s ease, transform .25s ease;
        }
        .field input:hover,.field textarea:hover{border-color:var(--cyan);}
        .field input:focus,.field textarea:focus{
          outline:none;border-color:var(--cyan);
          box-shadow:0 0 0 3px color-mix(in srgb, var(--cyan) 22%, transparent);
          transform:translateY(-1px);
        }
        .typed-placeholder{
          position:absolute;left:13px;top:11px;font-size:14px;
          pointer-events:none;font-family:inherit;
          transition:color .3s ease;
          display:flex;align-items:center;
        }
        .typed-caret{
          display:inline-block;width:2px;height:15px;margin-left:2px;
          animation:blink 0.9s steps(1) infinite;
        }

        footer{
          text-align:center;padding:32px 6vw;color:var(--muted);font-size:13px;
          border-top:1px solid var(--line);
        }

        /* ---------- reveal animation ---------- */
        .reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease, transform .7s ease;}
        .reveal-in{opacity:1;transform:translateY(0);}
        @media (prefers-reduced-motion: reduce){
          .reveal,.terminal,.blink-underscore,.caret{animation:none !important;transition:none !important;opacity:1 !important;transform:none !important;}
        }

        /* ---------- PREMIUM HERO + ABOUT REFINEMENT ---------- */
        .hero.container{
          max-width:1280px;
          padding-top:clamp(56px,7vh,92px);
          padding-bottom:clamp(80px,10vh,128px);
          grid-template-columns:minmax(0,1.11fr) minmax(0,.89fr);
          gap:clamp(56px,6vw,94px);
          min-height:calc(100vh - 82px);
        }
        .hero-availability{font-size:12px;letter-spacing:.075em;font-weight:600;gap:10px;margin-bottom:26px;}
        .availability-dot{width:7px;height:7px;border-radius:50%;background:#3add85;box-shadow:0 0 0 4px rgba(58,221,133,.12);flex-shrink:0;}
        .hero-availability::before{content:"//";}
        .hero-heading{gap:14px;margin-bottom:26px !important;}
        .hero-greeting{font-size:clamp(48px,5.3vw,76px);line-height:1.04;letter-spacing:-.055em;white-space:nowrap;}
        .hero-role{font-size:clamp(28px,3.35vw,44px);line-height:1.2;letter-spacing:-.04em;font-weight:650;}
        .hero p.lede{font-size:clamp(15px,1.3vw,17px);line-height:1.8;color:var(--muted);max-width:525px;margin-bottom:30px;}
        .hero-education{display:block;margin-top:5px;}
        .hero .btn-row{gap:12px;}
        .hero .btn{border-radius:11px;padding:14px 21px;}
        .hero .social-row{margin-top:25px;gap:11px;}
        .hero .social-row a{width:41px;height:41px;border-radius:11px;}
        .hero-visual{transform:none;gap:28px;align-items:center;justify-content:center;width:100%;}
        .hero-photo-stage{position:relative;display:flex;flex-direction:column;align-items:center;gap:18px;width:100%;}
        .avatar-ring{width:clamp(220px,23vw,285px);height:clamp(220px,23vw,285px);background:linear-gradient(140deg,var(--amber),var(--cyan) 65%,var(--amber));padding:6px;animation:none !important;transform:none !important;}
        .avatar-wrap:hover .avatar-ring{transform:none !important;}
        .avatar-inner img{animation:none !important;transform:none !important;object-position:center 22%;}
        .hero-photo-caption{font-size:10px;font-family:'JetBrains Mono',monospace;color:var(--text);letter-spacing:.15em;font-weight:600;opacity:.75;}
        .hero-photo-caption span{color:var(--cyan);}
        .hero-visual .terminal{width:100%;max-width:435px;animation:none;}
        .hero-visual .terminal:hover{transform:translateY(-3px);}
        #about{padding-top:100px;padding-bottom:115px;}
        #about .container{max-width:1120px;}
        .about-section-head{margin-bottom:37px;}
        .about-section-head h2{animation:none;letter-spacing:-.045em;font-size:clamp(36px,4.1vw,55px);background:none;-webkit-text-fill-color:var(--text);color:var(--text);}
        .about-section-head .about-title-accent{background:linear-gradient(105deg,var(--cyan),var(--amber));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}
        .about-intro{font-size:15px;line-height:1.75;color:var(--muted);max-width:640px;margin:16px 0 0;}
        .about-grid{grid-template-columns:minmax(0,.98fr) minmax(0,1.02fr);gap:22px;align-items:stretch;}
        .about-grid > .reveal{height:100%;}
        .about-card{height:100%;min-height:345px;padding:32px 31px;background:linear-gradient(145deg,color-mix(in srgb,var(--panel) 92%,var(--cyan) 8%),var(--panel) 70%);border:1px solid color-mix(in srgb,var(--line) 75%,var(--cyan) 25%);border-radius:20px;box-shadow:0 18px 42px -36px rgba(0,0,0,.75);}
        .about-card:after{content:"";position:absolute;top:0;left:28px;right:28px;height:1px;background:linear-gradient(90deg,transparent,var(--cyan),var(--amber),transparent);opacity:.32;pointer-events:none;}
        .about-card:hover{border-color:color-mix(in srgb,var(--cyan) 65%,var(--line));transform:translateY(-4px);box-shadow:0 24px 48px -33px rgba(0,0,0,.8),0 0 28px -22px var(--cyan);}
        .about-card-kicker{display:flex;align-items:center;justify-content:space-between;color:var(--cyan);font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.09em;font-weight:600;margin-bottom:25px;}
        .about-card-kicker span{color:var(--muted);opacity:.65;}
        .about-card h3{font-size:22px;margin-bottom:19px;letter-spacing:-.025em;}
        .about-card p{font-size:15px;line-height:1.92;max-width:520px;}
        .fact-list{margin-top:10px;gap:2px;}
        .fact-list li{padding:12px 0;font-size:13px;align-items:center;gap:18px;}
        .fact-list li:last-child{border-bottom:none;}
        .fact-list li b{font-weight:650;}
        .about-story-footer{display:flex;align-items:center;gap:9px;margin-top:29px;padding-top:21px;border-top:1px solid var(--line);font-weight:600;font-size:12px;letter-spacing:.02em;color:var(--text);}
        .about-story-mark{color:var(--amber);font-size:18px;}
        .about-story-sep{color:var(--cyan);}
        @media (max-width:900px){
          .hero.container{grid-template-columns:1fr;gap:54px;min-height:auto;padding-top:54px;padding-bottom:82px;}
          .hero-greeting{font-size:clamp(42px,8vw,66px);}
          .hero-role{font-size:clamp(29px,5.5vw,41px);}
          .hero-visual{margin-top:0;}
          .about-grid{grid-template-columns:1fr;}
          .about-card{min-height:0;}
        }
        @media (max-width:520px){
          .hero.container{padding-top:44px;gap:44px;}
          .hero-greeting{font-size:clamp(37px,9vw,48px);}
          .hero-role{font-size:clamp(28px,7vw,35px);}
          .hero-availability{font-size:10px;}
          .hero .btn{padding:12px 15px;font-size:13px;}
          .avatar-ring{width:215px;height:215px;}
          #about{padding-top:76px;padding-bottom:86px;}
          .about-card{padding:27px 22px;}
          .about-card h3{font-size:20px;}
          .fact-list li{font-size:12px;}
          .about-story-footer{flex-wrap:wrap;}
        }
        @media (prefers-reduced-motion:reduce){.hero-visual .terminal,.about-card{animation:none;transition:none;}}

      `}</style>

      <Nav dark={dark} setDark={setDark} onBrandClick={() => setRainTrigger((t) => t + 1)} />
      <CodeRain trigger={rainTrigger} />

      {/* HERO */}
      <section id="home" className="hero container">
        <div>
          <div className="eyebrow hero-availability"><span className="availability-dot" /> available for internships</div>
          <h1 className="hero-heading">
            <span className="hero-greeting">Hi, I'm <span className="accent">{PROFILE.name.split(" ").slice(-1)}</span><span className="hero-period">.</span></span>
            <span className="hero-role">Information Systems<br /><span>Undergraduate</span></span>
          </h1>
          <p className="lede">{PROFILE.tagline} <span className="hero-education">Currently studying at {PROFILE.uni}.</span></p>
          <div className="btn-row">
            <a href={PROFILE.cvUrl} download="AESC_Geesara_CV.pdf" className="btn btn-primary"><Download size={16} /> Download CV</a>
            <a href="#projects" className="btn btn-ghost"><FolderGit2 size={16} /> View Projects</a>
          </div>
          <div className="social-row">
            <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17} /></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`} target="_blank" rel="noreferrer"><Mail size={17} /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-stage"><Avatar /><span className="hero-photo-caption">A.E.S.C. GEESARA <span> / DEVELOPER</span></span></div>
          <TerminalHero dark={dark} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <Reveal><div className="section-head about-section-head"><div className="eyebrow">01 / about me</div><h2>Beyond the <span className="about-title-accent">code.</span></h2><p className="about-intro">Curious about how technology can solve everyday problems, and passionate about building useful digital experiences.</p></div></Reveal>
          <div className="about-grid">
            <Reveal>
              <div
                className="about-card"
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
              >
                <div className="about-card-kicker">AT A GLANCE <span>01</span></div>
                <h3><User size={19} color="var(--amber)" /> Quick Profile</h3>
                <ul className="fact-list">
                  <li><span>Name</span> <b>{PROFILE.name}</b></li>
                  <li><span>Role</span> <b>{PROFILE.role}</b></li>
                  <li><span>University</span> <b>University of Colombo</b></li>
                  <li><span>Based in</span> <b>Sri Lanka</b></li>
                  <li><span>Focus</span> <b>Full-stack Dev</b></li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div
                className="about-card"
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
              >
                <div className="about-card-kicker">THE PERSON BEHIND THE PROJECTS <span>02</span></div>
                <h3><Code2 size={19} color="var(--cyan)" /> My Story</h3>
                <p>{PROFILE.bio}</p>
                <div className="about-story-footer"><span className="about-story-mark">✦</span> Always learning <span className="about-story-sep">/</span> Always building</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="container">
          <Reveal><div className="section-head"><div className="eyebrow">tech stack</div><h2>Skills & Tools</h2></div></Reveal>
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <div className="skill-row">
                  <div className="skill-top">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-cat">{s.cat} · {s.level}%</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ "--w": `${s.level}%` }} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <div className="work-intro">
            <div>
              <div className="eyebrow">selected work / portfolio</div>
              <div className="section-head"><h2>Featured Projects<span style={{color:"var(--cyan)"}}>.</span></h2></div>
              <p className="work-subtitle">A closer look at the products, systems and experiments I'm building — from practical business tools to academic work.</p>
            </div>
            <div className="work-counter"><b>{String(visibleProjects.length).padStart(2, "0")}</b> / {String(PROJECTS.length).padStart(2,"0")} projects</div>
          </div>
          <div className="work-tabs" role="group" aria-label="Filter projects">
            {["All projects", "Web systems", "Academic", "Concepts"].map(filter => (
              <button key={filter} className={`work-tab ${projectFilter === filter ? "selected" : ""}`}
                onClick={() => setProjectFilter(filter)} aria-pressed={projectFilter === filter}>{filter}</button>
            ))}
          </div>
          <div className="work-grid">
            {visibleProjects.map((p) => (
              <article className="work-card" key={p.id}>
                <ProjectVisual project={p} />
                <div className="work-card-body">
                  <div className="work-meta"><span className="work-index">PROJECT / {p.number}</span><span className={`work-status ${p.status === "Completed" ? "completed" : p.status === "Concept" ? "concept" : "progress"}`}>{p.status}</span></div>
                  <h3>{p.title}</h3><p className="work-kind">{p.subtitle}</p>
                  <p className="work-desc">{p.desc}</p>
                  <div className="work-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                  <div className="work-footer">
                    <button className="work-detail-button" onClick={() => setActiveProject(p)}>Explore project <ChevronRight size={15}/></button>
                    <div className="work-extra-links">
                      {p.liveUrl?.trim() ? (
                        <a className="work-live-link" href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${p.title} live website`}><ExternalLink size={14}/> Live Website</a>
                      ) : (
                        <button className="work-live-link work-live-unavailable" type="button" disabled title="Live website link not added yet" aria-label={`${p.title}: live website not available yet`}><ExternalLink size={14}/> Live Website</button>
                      )}
                      {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer"><ExternalLink size={14}/> Demo</a>}
                      {p.repo && <a href={p.repo} target="_blank" rel="noreferrer"><Github size={14}/> Code</a>}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {activeProject && <div className="work-dialog-backdrop" onMouseDown={e => {if(e.target===e.currentTarget)setActiveProject(null);}}>
        <div className="work-dialog" role="dialog" aria-modal="true" aria-label={`${activeProject.title} details`}>
          <div className="work-dialog-top"><span className="work-index">PROJECT / {activeProject.number}</span><button onClick={() => setActiveProject(null)} aria-label="Close project details">×</button></div>
          <ProjectVisual project={activeProject}/>
          <p className="work-note">{activeProject.note}</p>
          <h3>{activeProject.title}</h3>
          <p>{activeProject.desc}</p>
          <div className="work-tags">{activeProject.tags.map(t => <span key={t}>{t}</span>)}</div>
          <h4>Key features & focus areas</h4>
          <ul>{activeProject.highlights.map(h => <li key={h}>{h}</li>)}</ul>
          <span className={`work-status ${activeProject.status === "Completed" ? "completed" : activeProject.status === "Concept" ? "concept" : "progress"}`}>{activeProject.status}</span>
          <div className="work-dialog-links">
            {activeProject.liveUrl?.trim() ? (
              <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="work-live-link"><ExternalLink size={15}/> Visit Live Website</a>
            ) : (
              <button type="button" disabled className="work-live-link work-live-unavailable" title="Live website link not added yet"><ExternalLink size={15}/> Live Website · Coming soon</button>
            )}
            {activeProject.fullImage && <a href={activeProject.fullImage} target="_blank" rel="noopener noreferrer" className="work-preview-open"><ExternalLink size={14}/> View full interface screenshot</a>}
          </div>
        </div>
      </div>}

      {/* EDUCATION */}
      <section id="education">
        <div className="container">
          <Reveal><div className="section-head"><div className="eyebrow">academic journey</div><h2>Education<span style={{color:"var(--amber)"}}>.</span></h2></div></Reveal>
          <Reveal><p className="edu-intro">My academic foundation in technology, problem-solving and software development.</p></Reveal>
          <div className="timeline">
            {EDUCATION.map((e, i) => (
              <Reveal key={e.what} delay={i * 100}>
                <article className="tl-item">
                  <div className="tl-top"><span className="tl-when">{e.when}</span><span className="tl-number">0{i + 1} / 02</span></div>
                  <div className="tl-icon"><GraduationCap size={24} strokeWidth={1.8} /></div>
                  <h3>{e.what}</h3>
                  <span className="tl-where">{e.where}</span>
                  <div className="tl-rule" />
                  <p>{e.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <Reveal>
            <div className="contact-wrap">
              <div>
                <div className="eyebrow">get in touch</div>
                <h2>Let's build something together.</h2>
                <p>Open to internships, freelance projects, and collaboration. Drop a message — I usually reply within a day.</p>
                <div className="contact-list">
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`} target="_blank" rel="noreferrer"><span className="ic"><Mail size={16} /></span>{PROFILE.email}</a>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer"><span className="ic"><Github size={16} /></span>github.com/sheharageesara1-web</a>
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><span className="ic"><Linkedin size={16} /></span>linkedin.com/in/shehara-geesara</a>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <TypedInput
                  label="NAME"
                  type="text"
                  examples={["Kasun Perera", "Amaya Silva", "Nadeesha Fernando"]}
                  colors={["var(--amber)", "var(--cyan)"]}
                />
                <TypedInput
                  label="EMAIL"
                  type="email"
                  examples={["you@example.com", "hello@company.com"]}
                  colors={["var(--cyan)", "var(--amber)"]}
                />
                <TypedInput
                  label="MESSAGE"
                  textarea
                  examples={[
                    "Say hello...",
                    "Let's collaborate on a project!",
                    "I'd love to offer you an internship.",
                  ]}
                  colors={["var(--amber)", "var(--cyan)", "var(--amber)"]}
                />
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  <Send size={15} /> Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} {PROFILE.name} · built with React <ChevronRight size={12} style={{ display: "inline" }} /> {PROFILE.uni}
      </footer>
    </div>
  );
}
