function Home() {
  return (
    <div className="relative bg-[url('/contact.webp')] bg-cover bg-center bg-no-repeat  h-[calc(100vh-120px)] ">
      {/* <img src="/contact.webp" alt="contact ms" /> */}

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a0f2c]/80 px-6 py-8 rounded-2xl text-white text-center w-full max-w-lg shadow-lg backdrop-blur-md border border-white/20">
        <h1 className="text-center text-3xl font-bold tracking-wide">
          Stay Connected, Stay Organized
        </h1>
        <p className="text-xl mt-5 leading-relaxed">
          Never Lose a Contact Again! Securely Store, Search, and Manage Your
          Contacts with Ease.
        </p>
      </div>
    </div>
  );
}

export default Home;
