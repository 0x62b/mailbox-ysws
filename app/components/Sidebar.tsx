import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  setPage: Dispatch<SetStateAction<"inbox" | "drafts" | "archive" | "trash">>
}

export default function Sidebar({setPage}: SidebarProps) {
  return (
    <nav className="flex flex-col bg-gray-100 dark:bg-zinc-900 w-[10%] p-4 border-r border-gray-200 dark:border-zinc-800">
      <img src="/title.svg" alt="Mailbox YSWS" className="w-[100%] my-4" style={{ filter: "var(--icon-filter)" }}/>

      <button
        className="flex bg-white dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 p-2 m-1 rounded-md items-center text-zinc-900 dark:text-white"
        onClick={() => setPage("inbox")}
      >
        <img
          src="/envelope.svg"
          className="w-[20%] pr-2"
          style={{ filter: "var(--icon-filter)" }}
        />
        Inbox
      </button>
      
      <button
        className="flex bg-white dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 p-2 m-1 rounded-md items-center text-zinc-900 dark:text-white"
        onClick={() => setPage("drafts")}
      >
        <img
          src="/file.svg"
          className="w-[20%] pr-2"
          style={{ filter: "var(--icon-filter)" }}
        />
        Drafts
      </button>
      
      <button
        className="flex bg-white dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 p-2 m-1 rounded-md items-center text-zinc-900 dark:text-white"
        onClick={() => setPage("archive")}
      >
        <img
          src="/archive.svg"
          className="w-[20%] pr-2"
          style={{ filter: "var(--icon-filter)" }}
        />
        Archive
      </button>
      
      <button
        className="flex bg-white dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 p-2 m-1 rounded-md items-center text-zinc-900 dark:text-white"
        onClick={() => setPage("trash")}
      >
        <img
          src="/trash.svg"
          className="w-[20%] pr-2"
          style={{ filter: "var(--icon-filter)" }}
        />
        Trash
      </button>
    </nav>
  );
}
