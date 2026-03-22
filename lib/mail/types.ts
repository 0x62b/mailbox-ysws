export type Reply = {
  id: number;
  content: string;
  date: string;
  attachments?: { name: string; size: string; url: string }[];
};

export type Item = {
  id: number;
  title: string;
  description: string;
  date: string;
  attachments?: { name: string; size: string; url: string }[];
  replies?: Reply[];
};