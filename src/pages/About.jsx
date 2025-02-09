function About() {
  return (
    <section className="py-8 flex items-center justify-center p-2 md:px-6  bg-[url('/contact.webp')] text-white">
      <div className="max-w-2xl bg-[#151b3d] backdrop-blur-lg shadow-lg rounded-2xl p-[5px]  md:p-[20px]  border border-white/20 text-center">
        <h1 className="text-3xl font-bold mb-4 tracking-wide">
          About Our Contact Management System
        </h1>
        <p className="text-lg leading-relaxed">
          Managing your contacts has never been easier! Our{" "}
          <span className="font-semibold">Contact Management System</span> is
          designed to help you securely store, organize, and access your
          contacts anytime, anywhere. Whether you`re a professional looking to
          keep track of business connections or an individual who wants to
          safeguard personal contacts, our system ensures you never lose
          important information again.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          With powerful{" "}
          <span className="font-semibold">search and filtering options</span>,
          you can quickly find the contact you need without scrolling through
          endless lists. Plus, our intuitive interface makes adding, editing,
          and managing your contacts effortless. Your data is securely stored,
          giving you peace of mind knowing that your valuable connections are
          always within reach.
        </p>
        <p className="text-lg font-semibold mt-6">
          Take control of your contacts and experience seamless contact
          management today! 🚀
        </p>
      </div>
    </section>
  );
}

export default About;
