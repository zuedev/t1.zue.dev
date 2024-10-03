import "./page.css";

export default () => {
  return (
    <div>
      <section className="bg-white text-black max-w-lg mx-auto p-4 mt-16 space-y-4">
        <h1 className="font-bold text-4xl">Contact Us</h1>
        <form
          action="https://formspree.io/f/xeojaqzk"
          method="POST"
          className="space-y-4"
        >
          <label className="block">
            <span className="text-lg">Name</span>
            <input
              type="text"
              name="name"
              className="block w-full border p-2"
            />
          </label>
          <label className="block">
            <span className="text-lg">Email</span>
            <input
              type="email"
              name="email"
              className="block w-full border p-2"
            />
          </label>
          <label className="block">
            <span className="text-lg">Message</span>
            <textarea
              name="message"
              className="block w-full border p-2"
            ></textarea>
          </label>
          <button type="submit" className="bg-black text-white py-2 px-4">
            Submit
          </button>
        </form>
      </section>

      <section className="bg-black text-white max-w-lg mx-auto p-4 mt-8 space-y-4">
        <p>
          If you're a client, please use the{" "}
          <a href="/teleport" className="underline decoration-dotted">
            teleporter {"->"}
          </a>
        </p>
      </section>
    </div>
  );
};
