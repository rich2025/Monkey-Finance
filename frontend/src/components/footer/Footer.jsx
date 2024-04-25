const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-yellow-50 to-yellow-200 text-black p-4 md:p-8">
      <div className="max-w-screen-xl mx-auto flex justify-end space-x-12">
        <h3 className="text-base font-bold">
          <a href="/" className="hover:text-gray-300">Home</a>
        </h3>
        <h3 className="text-base font-bold">
          <a href="/login" className="hover:text-gray-300">Login</a>
        </h3>
        <h3 className="text-base font-bold">
          <a href="/about" className="hover:text-gray-300">About</a>
        </h3>
        <h3 className="text-base font-bold">
          <a href="https://github.com/rich2025/411project" className="hover:text-gray-300">GitHub</a>
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
