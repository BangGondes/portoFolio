// app/contact/page.tsx
export default function Contact() {
  return (
    <div className="w-full bg-gray-800 text-white py-8">
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Hubungi Saya</h2>
        <p>Email: emailkamu@example.com</p>
        <div className="mt-4">
          <a
            href="https://github.com/kamu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-600"
          >
            GitHub
          </a>
          {" | "}
          <a
            href="https://www.linkedin.com/in/kamu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
