import { useEffect, useState } from "react";
import { Users, Trash2, Eye, X, Briefcase } from "lucide-react";

function AdminDashboard() {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = () => {
    const data =
      JSON.parse(localStorage.getItem("cynbitApplications")) || [];
    setApplications(data);
  };

  const deleteApplication = (index) => {
    const updated = applications.filter((_, i) => i !== index);

    localStorage.setItem("cynbitApplications", JSON.stringify(updated));
    setApplications(updated);
    setSelectedApplication(null);
  };

  return (
    <section className="min-h-screen bg-[#080B16] text-white px-6 md:px-16 py-16">

      <div className="flex flex-col md:flex-row justify-between gap-5 mb-12">
        <div>
          <p className="text-purple-400 font-semibold mb-2">CYNBIT ADMIN</p>
          <h1 className="text-4xl font-bold">Applications Dashboard</h1>
          <p className="text-gray-400 mt-3">
            Manage and review candidate applications.
          </p>
        </div>

        <div className="bg-[#111629] border border-white/10 rounded-2xl p-6 flex items-center gap-5">
          <Users size={35} className="text-purple-400" />
          <div>
            <p className="text-gray-400 text-sm">Total Applications</p>
            <h2 className="text-3xl font-bold">{applications.length}</h2>
          </div>
        </div>
      </div>

      {applications.length === 0 ? (
        <div className="text-center py-20 bg-[#111629] rounded-2xl">
          <Briefcase size={45} className="mx-auto text-gray-500 mb-5" />
          <h2 className="text-2xl font-semibold">No Applications Yet</h2>
          <p className="text-gray-400 mt-3">
            Submitted applications will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-[#111629] rounded-2xl border border-white/10">

          <table className="w-full text-left min-w-[750px]">
            <thead className="bg-white/5 text-gray-400">
              <tr>
                <th className="p-5">Candidate</th>
                <th className="p-5">Email</th>
                <th className="p-5">Position</th>
                <th className="p-5">Applied At</th>
                <th className="p-5">Actions</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app, index) => (
                <tr key={index} className="border-t border-white/10">
                  <td className="p-5 font-semibold">{app.name}</td>
                  <td className="p-5 text-gray-400">{app.email}</td>
                  <td className="p-5">{app.position}</td>
                  <td className="p-5 text-gray-400">{app.appliedAt}</td>

                  <td className="p-5">
                    <div className="flex gap-4">
                      <button
                        onClick={() => setSelectedApplication(app)}
                        className="text-purple-400 hover:text-purple-300"
                        title="View Details"
                      >
                        <Eye />
                      </button>

                      <button
                        onClick={() => deleteApplication(index)}
                        className="text-red-400 hover:text-red-300"
                        title="Delete Application"
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      )}

      {selectedApplication && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-5 z-50">
          <div className="bg-[#111629] border border-white/10 rounded-2xl p-8 max-w-lg w-full">

            <div className="flex justify-between mb-6">
              <h2 className="text-2xl font-bold">Candidate Details</h2>
              <button onClick={() => setSelectedApplication(null)}>
                <X />
              </button>
            </div>

            {Object.entries(selectedApplication).map(([key, value]) => (
              <div key={key} className="mb-4">
                <p className="text-gray-400 text-sm capitalize">{key}</p>
                <p className="break-words">{value || "Not provided"}</p>
              </div>
            ))}

            <button
              onClick={() => setSelectedApplication(null)}
              className="w-full bg-purple-600 py-3 rounded-lg mt-4"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </section>
  );
}

export default AdminDashboard;