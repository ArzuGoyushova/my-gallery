const Contact = () => {
  return (
    <section className="min-h-screen px-10 py-20 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">📬 Contact</h1>

      <p className="text-gray-300 max-w-xl mb-8">
        Whether you're interested in collaborating, have questions about my work, or just want to say hi — feel free to reach out! I'm always open to exciting conversations.
      </p>

      <div className="space-y-6 text-sm text-gray-300">
        <div>
          <span className="text-yellow-300 font-medium">Email:</span>{" "}
          <a
            href="mailto:your.email@example.com"
            className="hover:underline"
          >
            your.email@example.com
          </a>
        </div>

        <div>
          <span className="text-yellow-300 font-medium">LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/yourprofile
          </a>
        </div>

        <div>
          <span className="text-yellow-300 font-medium">Instagram:</span>{" "}
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            instagram.com/yourusername
          </a>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm text-gray-500 italic">Let’s build something meaningful together.</p>
      </div>
    </section>
  );
};

export default Contact;
