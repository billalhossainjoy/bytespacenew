"use client";

import { type FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  function updateEmail(value: string) {
    setEmail(value);
    setSubscribed(false);
  }

  return (
    <form className="mt-[45px]" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <label className="sr-only" htmlFor="footer-email">
          Email address
        </label>
        <input
          aria-describedby="newsletter-consent newsletter-status"
          className="h-[52px] w-full rounded-full border border-shuttle-gray-200 bg-white px-6 text-body-m outline-none transition-colors placeholder:text-shuttle-gray-700 focus:border-persian-blue-800 sm:w-[376px]"
          id="footer-email"
          name="email"
          onChange={(event) => updateEmail(event.target.value)}
          placeholder="Enter your email"
          required
          type="email"
          value={email}
        />
        <button
          className="h-12 rounded-full bg-electric-lime-400 px-6 text-label-l font-medium text-shuttle-gray-950 transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-persian-blue-800 disabled:cursor-default disabled:hover:scale-100"
          disabled={subscribed}
          type="submit"
        >
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>

      <p className="mt-6 max-w-[504px] text-body-xs" id="newsletter-consent">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates from our company.
      </p>
      <p
        aria-live="polite"
        className="mt-2 min-h-5 text-body-xs font-medium text-persian-blue-800"
        id="newsletter-status"
      >
        {subscribed ? "Thanks for subscribing to ByteSpace updates." : ""}
      </p>
    </form>
  );
}
