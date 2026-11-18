import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import jobs from "./data/jobs";
import { Search, MapPin, Briefcase } from "lucide-react";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [selectedJob, setSelectedJob] = useState("");
const isAdmin = window.location.pathname === "/admin";

if (isAdmin) {
  return <AdminDashboard />;
}
  return (
    <div className="min-h-screen bg-[#080B16] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/10">

        <h1 className="text-2xl font-bold">
          cynbit<span className="text-purple-500">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#careers" className="hover:text-purple-400">Careers</a>
          <a href="#jobs" className="hover:text-purple-400">Open Positions</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>

        <a
          href="#jobs"
          className="hidden md:block bg-purple-600 px-5 py-3 rounded-lg hover:bg-purple-700"
        >
          Explore Jobs
        </a>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <a href="#apply" className="hover:text-purple-400">
  Apply Now
</a>
      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-5 px-8 py-6 bg-[#111629]">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#careers" onClick={() => setMenuOpen(false)}>Careers</a>
          <a href="#jobs" onClick={() => setMenuOpen(false)}>Open Positions</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="px-8 md:px-16 py-28 text-center"
      >
        <span className="inline-block border border-purple-500/40 bg-purple-500/10 text-purple-300 px-5 py-2 rounded-full text-sm mb-8">
          ✨ Your Next Opportunity Starts Here
        </span>

        <h1 className="text-4xl md:text-7xl font-bold leading-tight max-w-5xl mx-auto">
          Build Your Future.
          <span className="block text-purple-400">
            Shape What's Next.
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-7 text-lg leading-8">
          Join a team of creative thinkers, engineers and innovators.
          Discover opportunities to learn, grow and build meaningful
          technology solutions with Cynbit.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <a
            href="#jobs"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            Explore Opportunities <ArrowRight size={18} />
          </a>

          <a
            href="#careers"
            className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-lg"
          >
            Why Join Us?
          </a>

        </div>
      </section>

      {/* Intro Section */}
      <section id="careers" className="px-8 md:px-16 py-20 bg-[#0D1222] text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Grow With <span className="text-purple-400">Cynbit</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-8">
          We believe great ideas come from curious minds.
          Explore opportunities where your skills, creativity and
          passion can make a difference.
        </p>
      </section>
      {/* Open Positions */}

<section id="jobs" className="px-8 md:px-16 py-24">

  <div className="text-center mb-12">

    <p className="text-purple-400 font-semibold mb-3">
      CAREER OPPORTUNITIES
    </p>

    <h2 className="text-3xl md:text-5xl font-bold">
      Explore Open Positions
    </h2>

    <p className="text-gray-400 mt-4">
      Find the right opportunity to grow your career with Cynbit.
    </p>

  </div>

  {/* Search and Filter */}

  <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 mb-12">

    <div className="flex items-center gap-3 bg-[#111629] border border-white/10 rounded-xl px-4 py-3 flex-1">

      <Search className="text-purple-400" />

      <input
        type="text"
        placeholder="Search job title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent outline-none w-full text-white"
      />

    </div>

    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="bg-[#111629] border border-white/10 rounded-xl px-5 py-3 text-white outline-none"
    >
      <option value="All">All Categories</option>
      <option value="Development">Development</option>
      <option value="Artificial Intelligence">AI / ML</option>
      <option value="Testing">Testing</option>
      <option value="Design">Design</option>
    </select>

  </div>

  {/* Job Cards */}

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {jobs
      .filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((job) =>
        category === "All" || job.category === category
      )
      .map((job) => (

        <div
          key={job.id}
          className="bg-[#111629] border border-white/10 rounded-2xl p-7 hover:border-purple-500/60 transition duration-300 hover:-translate-y-1"
        >

          <div className="flex justify-between items-center mb-6">

            <span className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-xs">
              {job.type}
            </span>

            <Briefcase className="text-purple-400" />

          </div>

          <h3 className="text-xl font-bold mb-4">
            {job.title}
          </h3>

          <p className="text-gray-400 text-sm leading-6 mb-6">
            {job.description}
          </p>

          <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
            <MapPin size={16} />
            {job.location}
          </div>

          {/* <a
            href={job.link}
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition"
          >
            View Details →
          </a> */}<button
  onClick={() => {
    setSelectedJob(job.title);
    document.getElementById("apply").scrollIntoView({
      behavior: "smooth"
    });
  }}
  className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold"
>
  Apply Now →
</button>

        </div>

      ))}

  </div>

  {jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  ).filter((job) =>
    category === "All" || job.category === category
  ).length === 0 && (

    <p className="text-center text-gray-400 mt-10">
      No jobs found. Try another search.
    </p>

  )}

</section>
<ApplicationForm
  selectedJob={selectedJob}
/>
<Footer />

    </div>
  );
}

export default App;