"use client";

export default () => {
  function handleClick(e) {
    if (e.target.closest("a").href) {
      e.preventDefault();

      // fade out the page
      document.body.style.animation = "fadeOut 0.1s ease-in-out forwards";

      // redirect to the new page
      if (e.target.href) return (window.location = e.target.href);

      window.location = "/";
    }
  }

  return (
    <div className="border-b-2 border-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between p-4 items-center">
          <a href="/" onClick={handleClick}>
            <img
              src="/t1_logo_tight.png"
              alt="Termina One Logo"
              className="w-12"
            />
          </a>
          <div className="flex flex-col sm:flex-row items-center font-bold sm:space-x-8">
            {[
              { href: "/products", label: "Products" },
              {
                label: "Services",
                className: "opacity-50 cursor-not-allowed",
              },
              {
                label: "Solutions",
                className: "opacity-50 cursor-not-allowed",
              },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label, className = "" }) => (
              <a
                key={`${href}${label.split(" ").join("-").toLowerCase()}`}
                {...(href && {
                  href,
                })}
                className={`hover:text-gray-500 ${className}`}
                onClick={handleClick}
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href="https://billing.stripe.com/p/login/eVa7sP02z7018Ja000"
            className="bg-[#0f0] text-black px-3 py-1.5 font-bold hover:bg-[#0d0]"
            target="_blank"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};
