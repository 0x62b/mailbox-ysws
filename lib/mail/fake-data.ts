import { type Item } from "./types";

export const emails: Item[] = [
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