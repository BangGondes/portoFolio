// app/projects/page.tsx
export default function Projects() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Proyek Saya
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <img
            src="/images/project1.jpg"
            alt="Proyek 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Proyek 1</h3>
          <p className="text-gray-600 mt-2">Deskripsi proyek...</p>
        </div>
      </div>
    </div>
  );
}
