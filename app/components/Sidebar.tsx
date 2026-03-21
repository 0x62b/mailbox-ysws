import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  setPage: Dispatch<SetStateAction<"inbox" | "drafts" | "archive" | "trash">>
}

export default function Sidebar({setPage}: SidebarProps) {
  return (
    <nav className="flex flex-col bg-zinc-900 w-[10%] p-4">
      <img src="/title.png" alt="Mailbox YSWS" className="w-[100%] my-4"/>

      <button
        className="flex bg-zinc-800 hover:bg-zinc-700 p-2 m-1 rounded-md items-center"
        onClick={() => setPage("inbox")}
      >
        <img
          src="/envelope.svg"
          className="w-[20%] pr-2"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        Inbox
      </button>
      
      <button
        className="flex bg-zinc-800 hover:bg-zinc-700 p-2 m-1 rounded-md items-center"
        onClick={() => setPage("drafts")}
      >
        <img
          src="/file.svg"
          className="w-[20%] pr-2"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        Drafts
      </button>
      
      <button
        className="flex bg-zinc-800 hover:bg-zinc-700 p-2 m-1 rounded-md items-center"
        onClick={() => setPage("archive")}
      >
        <img
          src="/archive.svg"
          className="w-[20%] pr-2"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        Archive
      </button>
      
      <button
        className="flex bg-zinc-800 hover:bg-zinc-700 p-2 m-1 rounded-md items-center"
        onClick={() => setPage("trash")}
      >
        <img
          src="/trash.svg"
          className="w-[20%] pr-2"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        Trash
      </button>
    </nav>
  );
}
