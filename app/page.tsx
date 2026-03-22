"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { emails } from "@/lib/mail/fake-data";
import { type Item } from "@/lib/mail/types";

export default function Home() {
  const [page, setPage] = useState<"inbox" | "drafts" | "archive" | "trash">("inbox");
  const [selected, setSelected] = useState<Item | null>(emails[0]);

  return (
    <div className="flex h-screen bg-zinc-1000 text-gray-200">
      <Sidebar setPage={setPage}/>

      <section className="flex flex-col w-[40%] flex flex-col overflow-y-auto">
        {page == "inbox" ? (
          emails.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className={`flex flex-row p-4 gap-3 items-center hover:bg-zinc-900 transition text-start ${
                selected?.id === item.id ? "bg-zinc-800" : ""
              }`}
            >
              <div className="flex flex-col w-full truncate">
                <span className="font-semibold text-white truncate">{item.title}</span>
                <span
                  className="text-gray-400 text-sm truncate"
                  dangerouslySetInnerHTML={{
                    __html: item.description.replace(/<[^>]+>/g, ""),
                  }}
                />
              </div>
              <time className="text-gray-500 text-xs whitespace-nowrap">{item.date}</time>
            </button>
          ))
        ) : (
          <div className="p-6 text-gray-500 text-sm">No messages here.</div>
        )}
      </section>

      <main className="flex-1 p-6 bg-zinc-900 overflow-y-auto max-w-full space-y-6">
        {page !== "inbox" || !selected ? (
          <span>Select a message to view details.</span>
        ) : (
          <>
            <section className="bg-zinc-800 rounded-md p-6">
              <h2 className="text-xl font-bold text-white mb-1">{selected.title}</h2>
              <time className="text-gray-400 text-sm mb-4 block">{selected.date}</time>
              <hr className="border-gray-600 mb-4" />

              <div className="w-full" dangerouslySetInnerHTML={{ __html: selected.description }}/>

              <div className="my-2 flex flex-wrap gap-3">
                {selected?.attachments?.map((att, i) => (
                  <a
                    key={i}
                    href={att.url}
                    className="bg-zinc-700 hover:bg-zinc-600 rounded-md p-2 transition text-sm"
                  >
                    {att.name} ({att.size})
                  </a>
                ))}
              </div>

              <div className="flex my-2 gap-3">
                <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md transition text-sm">
                  Reply
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md transition text-sm">
                  Forward
                </button>
                <button className="bg-red-500 hover:bg-red-600 p-2 rounded-md transition text-sm">
                  Delete
                </button>
              </div>
            </section>

            {selected.replies?.map((reply) => (
              <section
                key={reply.id}
                className="bg-zinc-800 rounded-md p-4"
              >
                <time className="block text-gray-400 text-xs mb-2">{reply.date}</time>

                <div
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: reply.content }}
                />

                {reply.attachments?.length ? (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {reply.attachments.map((att, i) => (
                      <a
                        key={i}
                        href={att.url}
                        className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-md transition text-sm"
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