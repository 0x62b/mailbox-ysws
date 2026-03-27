import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setPage: Dispatch<SetStateAction<"inbox" | "drafts" | "archive" | "trash">>;
  mobileView: "sidebar" | "list" | "detail";
  setMobileView: Dispatch<SetStateAction<"sidebar" | "list" | "detail">>;
}

export default function Sidebar({search, setSearch, setPage, mobileView, setMobileView}: SidebarProps) {

  const handleSetPage = (page: "inbox" | "drafts" | "archive" | "trash") => {
    setPage(page);
    setMobileView("list");
  };

  return (
    <nav className={`flex-col bg-gray-100 dark:bg-zinc-900 w-full md:w-[15%] p-4 border-r border-gray-200 dark:border-zinc-800 ${mobileView === 'sidebar' ? 'flex' : 'hidden md:flex'}`}>
      <img src="/title.svg" alt="Mailbox YSWS" className="w-[100%] my-4" style={{ filter: "var(--icon-filter)" }}/>

      <input
        className="bg-gray-200 dark:bg-zinc-800 p-2 mx-1 mt-1 mb-4 rounded-md"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="flex bg-white dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 p-2 m-1 rounded-md items-center text-zinc-900 dark:text-white transition"
        onClick={() => handleSetPage("inbox")}
      >
        <img
          src="/envelope.svg"
          className="w-[20%] sm:w-[10%] pr-2"
          style={{ filter: "var(--icon-filter)" }}
        />
        Inbox
      </button>
      
      <button
        className="flex bg-white dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 p-2 m-1 rounded-md items-center text-zinc-900 dark:text-white transition"
        onClick={() => handleSetPage("drafts")}
      >
        <img
          src="/file.svg"
          className="w-[20%] sm:w-[10%] pr-2"
          style={{ filter: "var(--icon-filter)" }}
        />
        Drafts
      </button>
      
      <button
        className="flex bg-white dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 p-2 m-1 rounded-md items-center text-zinc-900 dark:text-white transition"
        onClick={() => handleSetPage("archive")}
      >
        <img
          src="/archive.svg"
          className="w-[20%] sm:w-[10%] pr-2"
          style={{ filter: "var(--icon-filter)" }}
        />
        Archive
      </button>
      
      <button
        className="flex bg-white dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 p-2 m-1 rounded-md items-center text-zinc-900 dark:text-white transition"
        onClick={() => handleSetPage("trash")}
      >
        <img
          src="/trash.svg"
          className="w-[20%] sm:w-[10%] pr-2"
          style={{ filter: "var(--icon-filter)" }}
        />
        Trash
      </button>
    </nav>
  );
}
