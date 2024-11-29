import Accordion from "@/components/Accordion";

const Enquiries = () => {
  const faqData = [
    {
      question: "How secure is Kaiko?",
      answer:
        "Kaiko employs bank-level encryption and stringent security measures to ensure your data remains safe and confidential at all times.",
    },
    {
      question: "Can I link multiple bank accounts to Kaiko?",
      answer:
        "Yes, Kaiko allows you to link accounts from over 30 banks, providing you with a comprehensive view of your financial landscape in one place.",
    },
    {
      question: "Does Kaiko offer budgeting features?",
      answer:
        "Kaiko simplifies contract management by centralizing all your contracts in one platform, allowing you to track deadlines, receive reminders, and stay organized effortlessly.",
    },
    {
      question: "Is Kaiko compliant with data protection?",
      answer:
        "Absolutely! Kaiko is accessible on various devices, including desktops, laptops, smartphones, and tablets, allowing you to manage your finances wherever you are.",
    },
    {
      question: "Is Kaiko compliant with data protection?",
      answer:
        "Absolutely! Kaiko is accessible on various devices, including desktops, laptops, smartphones, and tablets, allowing you to manage your finances wherever you are.",
    },
    {
      question: "Does Kaiko offer customer support?",
      answer:
        "Yes, Kaiko provides dedicated customer support to assist you with any inquiries or issues you may encounter while using the platform.",
    },
  ];
  return (
    <section className="space-y-12 flex flex-col justify-center items-center">
      <Accordion faqData={faqData} />
    </section>
  );
};

export default Enquiries;
