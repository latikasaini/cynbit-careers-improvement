import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

function ApplicationForm({ selectedJob }) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    skills: "",
    resume: "",
    message: "",
  });
  useEffect(() => {
  if (selectedJob) {
    setFormData((prev) => ({
      ...prev,
      position: selectedJob,
    }));
  }
}, [selectedJob]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      
      [e.target.name]: e.target.value,
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setSubmitted(true);

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       position: "",
//       skills: "",
//       resume: "",
//       message: "",
//     });
//   };
const handleSubmit = (e) => {
  e.preventDefault();

  const applications =
    JSON.parse(localStorage.getItem("cynbitApplications")) || [];

  const newApplication = {
    ...formData,
    appliedAt: new Date().toLocaleString(),
  };

  applications.push(newApplication);

  localStorage.setItem(
    "cynbitApplications",
    JSON.stringify(applications)
  );

  setSubmitted(true);
};


  return (
    <section id="apply" className="px-8 md:px-16 py-24 bg-[#0D1222]">

      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-purple-400 font-semibold mb-3">
            JOIN OUR TEAM
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Apply for an Opportunity
          </h2>

          <p className="text-gray-400 mt-4">
            Take the next step in your career journey with Cynbit.
          </p>
        </div>

        {submitted ? (

          <div className="text-center bg-[#111629] border border-green-500/30 rounded-2xl p-10">

            <CheckCircle size={55} className="text-green-400 mx-auto mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Application Submitted!
            </h3>

            <p className="text-gray-400">
              Thank you for your interest. Your demo application
              has been submitted successfully.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 bg-purple-600 px-6 py-3 rounded-lg"
            >
              Submit Another Application
            </button>

          </div>

        ) : (

          <form
            onSubmit={handleSubmit}
            className="bg-[#111629] border border-white/10 rounded-2xl p-6 md:p-10 space-y-6"
          >

            <div>
              <label className="block mb-2 text-gray-300">
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full bg-[#080B16] border border-white/10 rounded-lg p-4 outline-none focus:border-purple-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 text-gray-300">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                  className="w-full bg-[#080B16] border border-white/10 rounded-lg p-4 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  maxLength="10"
                  placeholder="10 digit number"
                  className="w-full bg-[#080B16] border border-white/10 rounded-lg p-4 outline-none focus:border-purple-500"
                />
              </div>

            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Position Applying For *
              </label>

              {/* <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full bg-[#080B16] border border-white/10 rounded-lg p-4 outline-none focus:border-purple-500"
              > */}
              {/* <select
  name="position"
  value={selectedJob || formData.position}
  onChange={handleChange}
  required
  className="w-full bg-[#080B16] border border-white/10 rounded-lg p-4"
>
                <option value="">Select a position</option>
                <option>Full Stack Developer Intern</option>
                <option>Backend Developer Intern</option>
                <option>AI/ML Engineer Intern</option>
                <option>QA Testing Intern</option>
                <option>UI/UX Design Intern</option>
              </select> */}
              <select
  name="position"
  value={formData.position}
  onChange={handleChange}
  required
  className="w-full bg-[#080B16] border border-white/10 rounded-lg p-4 outline-none focus:border-purple-500"
>
  <option value="">Select a position</option>
  <option value="Full Stack Developer Intern">Full Stack Developer Intern</option>
  <option value="Backend Developer Intern">Backend Developer Intern</option>
  <option value="AI/ML Engineer Intern">AI/ML Engineer Intern</option>
  <option value="QA Testing Intern">QA Testing Intern</option>
  <option value="UI/UX Design Intern">UI/UX Design Intern</option>
</select>
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Technical Skills *
              </label>

              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
                placeholder="React, JavaScript, HTML, CSS..."
                className="w-full bg-[#080B16] border border-white/10 rounded-lg p-4 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Resume Link *
              </label>

              <input
                type="url"
                name="resume"
                value={formData.resume}
                onChange={handleChange}
                required
                placeholder="Paste your Google Drive resume link"
                className="w-full bg-[#080B16] border border-white/10 rounded-lg p-4 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Why should we consider you?
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about yourself..."
                className="w-full bg-[#080B16] border border-white/10 rounded-lg p-4 outline-none focus:border-purple-500"
              />
            </div>

            {/* <button */}
           
            {/* // </button> */}
<button
  onClick={() => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      skills: "",
      resume: "",
      message: "",
    });
  }}
  className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
>
  Apply Again →
</button>

          </form>

        )}

      </div>

    </section>
  );
}

export default ApplicationForm;