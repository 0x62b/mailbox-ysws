"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";

type Reply = {
  id: number;
  content: string;
  date: string;
  attachments?: { name: string; size: string; url: string }[];
};

type Item = {
  id: number;
  title: string;
  description: string;
  date: string;
  attachments?: { name: string; size: string; url: string }[];
  replies?: Reply[];
};

const items: Item[] = [
  {
    id: 1,
    title: "Welcome to Mailbox!",
    description: `
      <h3 style="font-size: 20px">Hello!</h3> <br>
      <p>
      This is Mailbox, a Hack Club YSWS where you ship Linux and we ship Linux! Or put
      more simply, you ship us something related to Linux and we ship you back (mostly)
      Linux-related prizes! This includes:
      <br> <br>
      <ul>
      <li>  ● A lifetime linux.com email alias worth $249!</li>
      <li>  ● Raspberry Pis</li>
      <li>  ● Random Acess Memory, in this economy!</li>
      </ul>
      <br>
      We hope you have fun!
      <br><br>
      Yours Sincerely,
      <br><br>
      <b>The Mailbox Team</b>
      </p>
    `,
    date: "Mar 16",
    attachments: [
      { name: "WelcomeGuide.pdf", size: "1.2MB", url: "#" },
      { name: "GettingStarted.zip", size: "4.3MB", url: "#" },
    ],
    replies: [
      {
        id: 101,
        content: `<p>Lorem Ipsum</p>`,
        date: "Mar 16, 3:45 PM",
      },
      {
        id: 102,
        content: `<p>Lorem Ipsum</p>`,
        date: "Mar 16, 6:7 PM",
        attachments: [{ name: "ProjectIdeas.docx", size: "850KB", url: "#" }],
      },
    ],
  },
  {
    id: 2,
    title: "RSVP for Mailbox",
    description: `<p>
      Want a <strong>Linux.com Email</strong>? Sign up NOW!
      <br><br>
      You can RSVP <a style="color:cyan;" href="https://forms.fillout.com/t/x9cpqCQi17us"><u>here</u></a>!
      <br><br>
      Contact us on Slack in #mailbox <a style="color:cyan;" href="https://hackclub.enterprise.slack.com/archives/C0AETGSGK6U"><u>here</u></a>!
    </p>`,
    date: "Mar 17",
  },
  {
    id: 3,
    title: "A Project by Hack Club",
    description: `
      <p> Hack Club is a 501(c)(3) nonprofit and network of 60k+ technical high schoolers. 
    We believe you learn best by building so we're creating community and providing grants 
    so you can make awesome projects. In the past few years, we've partnered with GitHub 
    to run Summer of Making, hosted the world's longest hackathon on land, and ran 
    Canada's largest high school hackathon.
    <br><br>
    At Hack Club, students aren't just learning, they're shipping.
    <br><br>
    <i>Built with love, by teens, for teens</i>
    <br><br>
    </p><p style="font-size:12px;">
    Made by Hack Clubbers in Australia for Hack Clubbers of the world
    <br><br>
    Hosted by: <br>
    <a href="https://hackclub.enterprise.slack.com/team/U092839T3A7"><u>0x62</u> <br>
    <a href="https://hackclub.enterprise.slack.com/team/U09F7EZDM0E"><u>captch</u></a> <br>
    <a href="https://hackclub.enterprise.slack.com/team/U092DB4LGMP"><u>obob</u></a>  <br>
    <a href="https://hackclub.enterprise.slack.com/team/U09C832RGJW"><u>willgob</u></a> <br>
    </p>
    `,
    date: "Mar 17",
  },
];

export default function Home() {
  const [page, setPage] = useState<"inbox" | "drafts" | "archive" | "trash">("inbox");
  const [selected, setSelected] = useState<Item | null>(items[0]);

  return (
    <div className="flex h-screen bg-zinc-1000 text-gray-200">
      <Sidebar setPage={setPage}/>

      <section className="flex flex-col w-[40%] flex flex-col overflow-y-auto">
        {page == "inbox" ? (
          items.map((item) => (
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

      {/* Detail Panel */}
      <main className="flex-1 p-6 bg-[#1a1f2b] overflow-y-auto max-w-full space-y-6">
        {page !== "inbox" || !selected ? (
          <div className="text-gray-500 text-sm">Select a message to view details.</div>
        ) : (
          <>
            <section className="bg-[#222739] border border-gray-700 rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold text-white mb-1">{selected.title}</h2>
              <time className="text-gray-400 text-sm mb-4 block">{selected.date}</time>
              <hr className="border-gray-600 mb-4" />

              <div
                className="prose prose-invert max-w-full"
                dangerouslySetInnerHTML={{ __html: selected.description }}
              />

              {selected.attachments?.length ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {selected.attachments.map((att, i) => (
                    <a
                      key={i}
                      href={att.url}
                      download
                      className="bg-[#2c3145] px-3 py-1 rounded hover:bg-[#3a4160] text-sm text-gray-300"
                    >
                      {att.name} ({att.size})
                    </a>
                  ))}
                </div>
              ) : null}

              <div className="mt-6 flex gap-3">
                <button className="px-3 py-1 rounded bg-[#2c3145] hover:bg-[#3a4160] transition text-sm">
                  Reply
                </button>
                <button className="px-3 py-1 rounded bg-[#2c3145] hover:bg-[#3a4160] transition text-sm">
                  Forward
                </button>
                <button className="px-3 py-1 rounded bg-[#2c3145] hover:bg-[#3a4160] transition text-sm">
                  Delete
                </button>
              </div>
            </section>

            {selected.replies?.map((reply) => (
              <section
                key={reply.id}
                className="bg-[#1a2233] border border-gray-600 rounded-lg p-4 shadow-sm"
              >
                <time className="text-gray-400 text-xs mb-2 block">{reply.date}</time>

                <div
                  className="prose prose-invert max-w-full"
                  dangerouslySetInnerHTML={{ __html: reply.content }}
                />

                {reply.attachments?.length ? (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {reply.attachments.map((att, i) => (
                      <a
                        key={i}
                        href={att.url}
                        download
                        className="bg-[#2c3145] px-3 py-1 rounded hover:bg-[#3a4160] text-sm text-gray-300"
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