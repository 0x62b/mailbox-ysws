import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row bg-gray-100 dark:bg-zinc-900 p-2 m-2 rounded-md items-center border border-gray-200 dark:border-zinc-800">
      <Link className="font-bold text-xl m-4 text-zinc-900 dark:text-white" href="/">Mailbox YSWS</Link>
      <Link className="m-2 text-zinc-700 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white" href="/">Home</Link>
      <Link className="m-2 text-zinc-700 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white" href="https://forms.fillout.com/t/x9cpqCQi17us" target="_blank">RSVP</Link>
      <Link className="m-2 text-zinc-700 dark:text-gray-300 hover:text-zinc-900 dark:hover:text-white" href="https://hackclub.enterprise.slack.com/archives/C0AETGSGK6U" target="_blank">Slack</Link>
    </header>
  );
}
