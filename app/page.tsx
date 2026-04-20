"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { emails } from "@/lib/mail/fake-data";
import { type Item } from "@/lib/mail/types";

export default function Home() {
  const [page, setPage] = useState<"inbox" | "drafts" | "archive" | "trash">("inbox");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Item | null>(emails[0]);
  const [mobileView, setMobileView] = useState<"sidebar" | "list" | "detail">("list");

  const filteredEmails = emails.filter((item) => {
    const query = search.toLowerCase().trim();

    if (!query) return true;

    const description = item.description.replace(/<[^>]+>/g, "").toLowerCase();
    return item.title.toLowerCase().includes(query) || description.includes(query);
  });

  return (
    <div className="flex h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-gray-100 animate-fadeIn">
      <Sidebar setPage={setPage} mobileView={mobileView} setMobileView={setMobileView} />

      {/* EMAIL LIST */}
      <section
        className={`bg-gray-50 dark:bg-zinc-900 flex-col w-full md:w-[40%] overflow-y-auto border-r border-gray-200 dark:border-zinc-800 
        ${mobileView === "list" ? "flex animate-fadeInUp" : "hidden md:flex"}`}
      >
        <div className="md:hidden p-4 border-b border-gray-200 dark:border-zinc-800 flex items-center gap-3 animate-fadeIn">
          <button
            onClick={() => setMobileView("sidebar")}
            className="p-2 bg-gray-200 dark:bg-zinc-800 rounded-md hover:scale-[1.05] active:scale-[0.97] transition"
          >
            ←
          </button>
          <span className="font-semibold text-lg capitalize">{page}</span>
        </div>

        <input
          className="bg-gray-100 dark:bg-zinc-900 p-4 animate-fadeIn"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {page === "inbox" ? (
          filteredEmails.length ? (
            filteredEmails.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelected(item);
                  setMobileView("detail");
                }}
                className={`flex flex-row p-4 gap-3 items-center hover:bg-gray-100 dark:hover:bg-zinc-700 
                transition text-start animate-fadeInUp hover:scale-[1] active:scale-[0.99] w-full
                ${
                  selected?.id === item.id
                    ? "bg-gray-200 dark:bg-zinc-800"
                    : ""
                }`}
              >
                <div className="flex flex-col w-full truncate">
                  <span className="font-semibold text-zinc-900 dark:text-white truncate">
                    {item.title}
                  </span>
                  <span
                    className="text-gray-600 dark:text-gray-400 text-sm truncate"
                    dangerouslySetInnerHTML={{
                      __html: item.description.replace(/<[^>]+>/g, ""),
                    }}
                  />
                </div>
                <time className="text-gray-500 text-xs whitespace-nowrap">{item.date}</time>
              </button>
            ))
          ) : (
            <div className="p-6 text-gray-500 dark:text-gray-400 text-sm animate-fadeIn">
              No matching messages.
            </div>
          )
        ) : (
          <div className="p-6 text-gray-500 dark:text-gray-400 text-sm animate-fadeIn">
            No messages here.
          </div>
        )}
      </section>

      {/* DETAIL VIEW */}
      <main
        className={`flex-1 p-6 bg-white dark:bg-zinc-900 overflow-y-auto max-w-full space-y-6 
        ${mobileView === "detail" ? "block w-full animate-fadeInUp" : "hidden md:block"}`}
      >
        <button
          className="md:hidden mb-4 p-2 bg-gray-200 dark:bg-zinc-800 rounded-md hover:scale-[1.05] active:scale-[0.97] transition"
          onClick={() => setMobileView("list")}
        >
          ←
        </button>

        {page !== "inbox" || !selected ? (
          <span className="text-zinc-600 dark:text-gray-400 animate-fadeIn">
            Select a message to view details.
          </span>
        ) : (
          <>
            {/* MAIN MESSAGE */}
            <section className="bg-gray-50 dark:bg-zinc-800 rounded-md p-6 border border-gray-200 dark:border-zinc-700 animate-fadeInUp">
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                {selected.title}
              </h2>
              <time className="text-gray-600 dark:text-gray-400 text-sm mb-4 block">
                {selected.date}
              </time>
              <hr className="border-gray-300 dark:border-zinc-700 mb-4" />

              <div
                className="w-full text-zinc-900 dark:text-gray-100"
                dangerouslySetInnerHTML={{ __html: selected.description }}
              />

              <div className="my-2 flex flex-wrap gap-3">
                {selected?.attachments?.map((att, i) => (
                  <a
                    key={i}
                    href={att.url}
                    className="bg-gray-200 hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 
                    rounded-md p-2 transition text-sm text-zinc-900 dark:text-white animate-fadeInUp"
                  >
                    {att.name} ({att.size})
                  </a>
                ))}
              </div>

              <div className="flex my-2 gap-3">
                <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md transition text-sm text-white hover:scale-[1.03] active:scale-[0.97]">
                  Reply
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md transition text-sm text-white hover:scale-[1.03] active:scale-[0.97]">
                  Forward
                </button>
                <button className="bg-red-500 hover:bg-red-600 p-2 rounded-md transition text-sm text-white hover:scale-[1.03] active:scale-[0.97]">
                  Delete
                </button>
              </div>
            </section>

            {/* REPLIES */}
            {selected.replies?.map((reply) => (
              <section
                key={reply.id}
                className="bg-gray-50 dark:bg-zinc-800 rounded-md p-4 border border-gray-200 dark:border-zinc-700 animate-fadeInUp"
              >
                <time className="block text-gray-600 dark:text-gray-400 text-xs mb-2">
                  {reply.date}
                </time>

                <div
                  className="w-full text-zinc-900 dark:text-gray-100"
                  dangerouslySetInnerHTML={{ __html: reply.content }}
                />

                {reply.attachments?.length ? (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {reply.attachments.map((att, i) => (
                      <a
                        key={i}
                        href={att.url}
                        className="bg-gray-200 hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 
                        p-2 rounded-md transition text-sm text-zinc-900 dark:text-white animate-fadeInUp"
                      >
                        {att.name} ({att.size})
                      </a>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </>
        )}
      </main>
    </div>
  );
}
