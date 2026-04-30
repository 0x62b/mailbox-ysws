import { type Item } from "./types";

export const emails: Item[] = [
  {
    id: 1,
    title: "Shop items",
    description: `
      <p>Here are the proposed (not final) shop items:</p>
      <p>Obviously the main goal is the email however we have these other things in case you want to participate but don't want to do the full 50 hours.</p>
      <br>
      <ul>
        <li>● Linux.com email (obviously)</li>
        <li>● Raspberry Pis</li>
        <li>● Merch!11!!!</li>
      </ul>
    `,
    date: "Apr 30, 17:54"
  },
  {
    id: 2,
    title: "Welcome to Mailbox!",
    description: `
      <b>Hello!</b> <br>
      <p>
      This is Mailbox, a Hack Club YSWS where you ship Linux and we ship Linux! Or put
      more simply, you ship us something related to Linux and we ship you back
      Linux-related prizes! This includes:
      <br> <br>
      <ul>
      <li>● A lifetime linux.com email alias worth $249!</li>
      <li>● Raspberry Pis</li>
      <li>● Mini PCs</li>
      </ul>
      <br>
      We hope you have fun!
      <br><br>
      <b>The Mailbox Team</b>
      </p>
    `,
    date: "Mar 16, 18:09",
    attachments: [],
    replies: [
      {
        id: 101,
        content: `<p>Need some inspiration?</p>`,
        date: "Mar 16, 18:07",
        attachments: [{ name: "projects.txt", size: "2KB", url: "/projects.txt" }],
      },
    ],
  },
  {
    id: 3,
    title: "RSVP for Mailbox",
    description: `
      <p>
      Want a <strong>Linux.com Email</strong>? Sign up NOW!
      <br><br>
      You can RSVP <a style="color:cyan;" href="https://forms.fillout.com/t/x9cpqCQi17us"><u>here</u></a>!
      <br><br>
      Join us on Slack in #mailbox <a style="color:cyan;" href="https://hackclub.enterprise.slack.com/archives/C0AETGSGK6U"><u>here</u></a>!
      </p>
    `,
    date: "Mar 16, 18:07",
  },
  {
    id: 4,
    title: "FAQ",
    description: `
      <b>Frequently asked questions</b>
      <br/><br/>
      <u>Who can participate?</u><br/>
      <span>Anyone 13-18 can participate!</span>
      <br/><br/>
      <u>What is Hack Club?</u>
      <br/>
      <span>See the email below!</span>
      <br/><br/>
      <u>What counts as Linux-related?</u>
      <br/>
      <span>Anything that is related to a part of Linux or Linux distros.
      Being able to run on Linux does not automatically mean it is Linux-related.</span>
    `,
    date: "Mar 16, 18:04"
  },
  {
    id: 5,
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
      The team
      <br>
      <a href="https://hackclub.enterprise.slack.com/team/U092839T3A7"><u>0x62</u> <br>
      <a href="https://hackclub.enterprise.slack.com/team/U09F7EZDM0E"><u>captch</u></a> <br>
      <a href="https://hackclub.enterprise.slack.com/team/U092DB4LGMP"><u>obob</u></a>  <br>
      <a href="https://hackclub.enterprise.slack.com/team/U09C832RGJW"><u>willgob</u></a> <br>
      </p>
    `,
    date: "Mar 16, 18:00",
  },
];