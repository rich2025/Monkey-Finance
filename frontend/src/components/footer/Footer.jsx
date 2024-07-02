const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-yellow-100 to-yellow-300 text-black p-4 md:p-8">
      <div className="max-w-screen-xl mx-auto flex justify-end space-x-12 items-center"> {/* Added right padding */}
        <h3 className="text-lg font-bold">
          <a href="/" className="hover:text-gray-600">Home</a>
        </h3>
        <h3 className="text-lg font-bold">
          <a href="/login" className="hover:text-gray-600">Login</a>
        </h3>
        <h3 className="text-lg font-bold">
          <a href="/about" className="hover:text-gray-600">About</a>
        </h3>
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-bold">
            <a href="https://github.com/rich2025/411project" className="hover:text-gray-600">GitHub</a>
          </h3>
          <img src="https://t3.ftcdn.net/jpg/05/40/26/42/360_F_540264274_yeiC6K2XrI2nP8fmDJQl55qlAhZ1KPiC.webp" style={{ height: '2.5rem', position: 'relative', top: '-4.1rem' }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
