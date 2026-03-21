"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const greetings = [
  "Hello!",
  "Welcome!",
  "Hi there!",
  "Greetings!",
  "G'Day!",
  "Hey!"
];

export default function Landing() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const router = useRouter(); // Next.js router

  // Pick a random greeting once
  useEffect(() => {
    const randomGreeting =
      greetings[Math.floor(Math.random() * greetings.length)];
    setMessage(randomGreeting);
  }, []);

  const handleSubmit = async () => {
    if (!email) {
      setMessage("Please enter an email.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || `HTTP error! status: ${res.status}`);
      } else {
        setMessage(data.message);
        // Optional: navigate to dashboard automatically
        // router.push("/dashboard");
      }
    } catch (err) {
      console.log("Login error:", err);
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-700 text-gray-200 px-6">
      {/* Hero Section */}
      <section className="text-center py-24 bg-zinc-900 w-full rounded-lg">
        <img
          src="/title.png"
          alt="Mailbox YSWS"
          className="w-1/3 mx-auto mb-6"
        />
        <h1 className="text-5xl font-bold mb-4 text-white">
          Welcome to Mailbox
        </h1>
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
          Where you ship Linux and we ship Linux
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md mx-auto mt-6">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
            className="
              flex-1
              px-4 py-2
              rounded-lg
              bg-zinc-800
              text-gray-200
              placeholder-zinc-500
              border border-zinc-700
              focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-zinc-600
              transition
            "
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
              px-6 py-2
              rounded-lg
              bg-zinc-800
              text-gray-200
              border border-zinc-700
              hover:bg-zinc-700
              focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-zinc-600
              transition
            "
          >
            <b>{loading ? "Sending..." : "Get Started!"}</b>
          </button>
        </div>

        {/* Message */}
        <p className="mt-4 h-6 text-sm text-zinc-200">
          {message || "\u00A0"} {/* Keep height even if empty to prevent flicker and better USER EXPERIENCE!1!!1!!!! */}
        </p>
      </section>
        <div className="mt-6">
          <Link
            href="/dashboard"
            className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500 transition"
          >
            Go to Dashboard (debug)
          </Link>
        </div>
    </main>
  );
}