export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How long does a project take?",
    answer:
      "A landing page or funnel takes one to two weeks. A business website runs three to five weeks. Mobile apps and custom platforms typically take eight to sixteen weeks depending on scope, and you get a stage-by-stage schedule before any work begins.",
  },
  {
    question: "How is pricing calculated?",
    answer:
      "The prices on this page are starting points. After a short consultation we scope the work into milestones and price each one, so the total is fixed before you commit. Anything outside the agreed scope is quoted separately rather than absorbed silently.",
  },
  {
    question: "Do you provide source code?",
    answer:
      "Yes. You own the repository, the designs and the infrastructure accounts from day one. We hand over documentation and a walkthrough at launch so another team could pick it up without us.",
  },
  {
    question: "Can you redesign existing software?",
    answer:
      "Often, yes. We start with a short audit of the current codebase and give you an honest read on whether it is worth improving or rebuilding, along with the cost of each path.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "We offer monthly support plans covering hosting, monitoring, security updates and a set amount of development time. You can also come back for one-off work with no retainer at all.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are tied to milestones — discovery, design, development, testing and launch. You pay as each stage is approved, so there is never a large lump sum up front.",
  },
];
