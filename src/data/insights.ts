// src/data/insights.ts
export type Insight = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;       // ISO string or yyyy-mm-dd
  readTime: string;
  content: string;    // HTML string
};

export const INSIGHTS: Insight[] = [
  {
    id: 1,
    title: "How to Get Started with Online Gaming Points",
    excerpt:
      "Learn the basics of gaming points and how to maximize your gaming experience with our comprehensive guide.",
    author: "June's Gaming Team",
    date: "2024-01-15",
    readTime: "5 min read",
    content: `
      <p>Getting started with online gaming points can seem overwhelming, but with the right guidance, you'll be up and running in no time.</p>
      <h3>What are Gaming Points?</h3>
      <p>Gaming points are virtual currency used in various online casino games. They allow you to play without using real money directly.</p>
      <h3>How to Purchase Points</h3>
      <ul>
        <li>Choose your preferred game platform</li>
        <li>Select the amount you want to purchase</li>
        <li>Complete the transaction through our secure payment methods</li>
      </ul>
      <h3>Best Practices</h3>
      <p>Always start with smaller amounts to understand the system before making larger purchases.</p>
    `,
  },
  {
    id: 2,
    title: "Understanding Distributor vs Sub Distributor Rates",
    excerpt:
      "Explore the differences between distributor and sub distributor rates and find the best option for your needs.",
    author: "June's Gaming Team",
    date: "2024-01-10",
    readTime: "7 min read",
    content: `
      <p>Understanding the rate structure is crucial for making informed decisions about your gaming investments.</p>
      <h3>Distributor Rates</h3>
      <p>Distributors typically offer the highest rates, ranging from 90-95% depending on the game.</p>
      <h3>Sub Distributor Rates</h3>
      <p>Sub distributors offer competitive rates while providing additional support and services.</p>
      <h3>Store Rates</h3>
      <p>Store rates are designed for individual players and smaller transactions.</p>
    `,
  },
  {
    id: 3,
    title: "PayPal Cashout Rate Explained (88%)",
    excerpt:
      "Discover how PayPal cashouts work in gaming platforms and why the standard payout rate is set at 88%.",
    author: "June's Gaming Team",
    date: "2024-01-05",
    readTime: "4 min read",
    content: `
      <p>PayPal is one of the most popular cashout methods for gaming platforms. The current standard rate is <strong>88%</strong>.</p>
      <h3>Why 88%?</h3>
      <p>This rate accounts for transaction fees, risk management, and platform margins, ensuring smooth payouts while maintaining sustainability.</p>
      <h3>Best Practice</h3>
      <p>Always withdraw in reasonable amounts to avoid extra processing delays.</p>
    `,
  },
  {
    id: 4,
    title: "Chime Cashout Rate (88%)",
    excerpt:
      "Learn how Chime works for gaming cashouts and why the payout rate matches PayPal at 88%.",
    author: "June's Gaming Team",
    date: "2024-01-03",
    readTime: "4 min read",
    content: `
      <p>Chime has become a popular option for gamers to receive winnings. Like PayPal, the standard rate is <strong>88%</strong>.</p>
      <h3>Advantages</h3>
      <ul>
        <li>Fast peer-to-peer transactions</li>
        <li>Low friction setup</li>
        <li>Reliable for small and medium payouts</li>
      </ul>
      <h3>Considerations</h3>
      <p>Make sure your Chime account is verified to avoid payout interruptions.</p>
    `,
  },
  {
    id: 5,
    title: "CashApp P2P Rate (88%)",
    excerpt:
      "CashApp peer-to-peer transfers are fast and simple, with a consistent payout rate of 88%.",
    author: "June's Gaming Team",
    date: "2024-01-02",
    readTime: "3 min read",
    content: `
      <p>CashApp peer-to-peer (P2P) transfers are widely used among gamers. The payout rate is set at <strong>88%</strong>, in line with PayPal and Chime.</p>
      <h3>Why Choose CashApp?</h3>
      <p>CashApp is perfect for players who prefer instant transfers between friends or direct withdrawals to their bank account.</p>
    `,
  },
  {
    id: 6,
    title: "Chime vs PayPal: Renting Accounts",
    excerpt:
      "Explore how Chime and PayPal renting works, and which option provides better flexibility for players and resellers.",
    author: "June's Gaming Team",
    date: "2023-12-28",
    readTime: "6 min read",
    content: `
      <p>Renting accounts can be an efficient way for new players or resellers to get started without large upfront investments.</p>
      <h3>Chime Renting</h3>
      <p>Chime accounts can be rented out for controlled usage, with fast transfers and limited liability.</p>
      <h3>PayPal Renting</h3>
      <p>PayPal renting allows broader usability but often comes with stricter compliance and limits.</p>
      <p>Both options depend on the player’s preferred cashout methods and level of trust.</p>
    `,
  },
  {
    id: 7,
    title: "Account Structures: Subdistributor vs Store Accounts",
    excerpt:
      "Understand the differences between subdistributor and store accounts, including creation limits and pricing rules.",
    author: "June's Gaming Team",
    date: "2023-12-20",
    readTime: "8 min read",
    content: `
      <p>Choosing between a subdistributor and a store account is one of the most important decisions in the gaming ecosystem.</p>
      <h3>Subdistributor Accounts</h3>
      <ul>
        <li>Can create multiple store accounts</li>
        <li>Minimum is 5k balance to get started</li>
        <li>Rates are typically $10 less than store accounts</li>
      </ul>
      <h3>Store Accounts</h3>
      <ul>
        <li>Can only create player accounts</li>
        <li>Player creation is usually $10 more than subdistributor accounts</li>
        <li>Ideal for individuals managing smaller groups of players</li>
      </ul>
      <p>In short: subdistributor = broader control, store = direct player management.</p>
    `,
  },
];
