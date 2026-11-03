import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// ---- Edit these before publishing ----
const BRAND = "Menvia";
const EMAIL = "support@menvia.com"; // TODO: your real support email
const PHONE = "0300 0000000"; // TODO: your real phone / WhatsApp number
const LAST_UPDATED = "November 3, 2026";
// --------------------------------------

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          Welcome to {BRAND}. We sell men's socks, tank tops and underwear
          online. This Privacy Policy explains what personal information we
          collect when you visit our website or place an order, how we use it,
          and the choices you have.
        </p>
        <p>
          By using our website or placing an order, you agree to the practices
          described in this policy. If you do not agree, please do not use the
          website.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>When you place an order, we collect:</p>
        <ul>
          <li>
            <strong>Contact details:</strong> your full name and phone number.
          </li>
          <li>
            <strong>Delivery details:</strong> your city, shipping address and
            any order note you choose to add.
          </li>
          <li>
            <strong>Order details:</strong> the products, sizes, colors,
            quantities and totals in your order.
          </li>
        </ul>
        <p>
          We also collect some technical information automatically, such as your
          device type, browser, pages visited and approximate location based on
          your IP address, to keep the website working and improve it.
        </p>
        <p>
          We currently accept <strong>Cash on Delivery only</strong>, so we do
          not collect or store your card or bank details.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Process, confirm and deliver your orders.</li>
          <li>
            Contact you about your order by phone, SMS or WhatsApp, for example
            to confirm details or arrange delivery.
          </li>
          <li>Handle returns, exchanges, complaints and customer support.</li>
          <li>Improve our website, products and shopping experience.</li>
          <li>Prevent fraud, abuse and fake orders.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing-information",
    title: "Sharing Your Information",
    content: (
      <>
        <p>
          We do not sell your personal information. We only share it when it is
          needed to run our business:
        </p>
        <ul>
          <li>
            <strong>Delivery partners:</strong> couriers receive your name,
            phone number and address so they can deliver your order.
          </li>
          <li>
            <strong>Service providers:</strong> hosting, analytics and
            communication tools that help us operate the website.
          </li>
          <li>
            <strong>Legal reasons:</strong> when required by law, a court order
            or a government authority, or to protect our rights and customers.
          </li>
        </ul>
        <p>
          These parties may only use your information to provide services to us.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and Similar Technologies",
    content: (
      <>
        <p>
          Our website may use cookies and local storage to remember items in
          your bag, keep the site working properly and understand how visitors
          use it.
        </p>
        <p>
          You can block or delete cookies in your browser settings. Some parts
          of the website, such as your shopping bag, may not work correctly if
          you do.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <p>
        We keep your order and contact information only for as long as needed to
        fulfil your order, handle returns and support, keep business and tax
        records, and meet legal requirements. After that, we delete or
        anonymize it.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    content: (
      <p>
        We take reasonable technical and organizational steps to protect your
        information from loss, misuse and unauthorized access. However, no
        website or method of transmission over the internet is completely
        secure, so we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Choices and Rights",
    content: (
      <>
        <p>You may contact us at any time to:</p>
        <ul>
          <li>Ask what personal information we hold about you.</li>
          <li>Ask us to correct information that is inaccurate.</li>
          <li>
            Ask us to delete your information, unless we need to keep it for
            legal or order-related reasons.
          </li>
          <li>Opt out of promotional messages.</li>
        </ul>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: (
      <p>
        Our website is intended for adults. We do not knowingly collect personal
        information from anyone under 18. If you believe a child has given us
        their information, please contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. The latest version
        will always be on this page with the "Last updated" date at the top.
        Continued use of the website after changes means you accept the updated
        policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have any questions about this Privacy Policy or how your
          information is handled, please contact {BRAND}:
        </p>
        <ul>
          <li>
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
          <li>Phone / WhatsApp: {PHONE}</li>
        </ul>
      </>
    ),
  },
];

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-19 md:mt-19 lg:mt-0 py-6 sm:py-8 lg:py-12">
      {/* Heading */}
      <div className="flex flex-col gap-2 pb-8 lg:pb-12 border-b border-gray-200">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold hover:opacity-70 transition-opacity w-fit"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.8} />
          BACK TO HOME
        </Link>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase mt-3">
          Privacy Policy
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-snug text-balance max-w-3xl">
          Your privacy matters to us. Here is how {BRAND} collects, uses and
          protects your personal information.
        </p>
        {/* <p className="text-xs sm:text-sm text-gray-500 pt-1">
          Last updated: {LAST_UPDATED}
        </p> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 lg:pt-12 items-start">
        {/* Table of contents */}
        <nav
          aria-label="Table of contents"
          className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24 h-fit rounded-2xl bg-gray-100 border border-gray-200 p-5 sm:p-6"
        >
          <h2 className="text-sm font-bold tracking-wide pb-4">CONTENTS</h2>
          <ol className="flex flex-col gap-2.5">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex gap-2.5 text-sm text-gray-700 hover:text-black transition-colors"
                >
                  <span className="text-gray-400 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
          <Link
            to="/terms-and-conditions"
            className="mt-6 block w-full text-center rounded-full border border-black py-2.5 text-xs font-bold hover:bg-black hover:text-white transition-colors"
          >
            READ TERMS & CONDITIONS
          </Link>
        </nav>

        {/* Content */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6 sm:gap-8">
          {sections.map((s, i) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-5 sm:p-7"
            >
              <h2 className="flex items-baseline gap-3 text-lg sm:text-xl font-bold pb-4">
                <span className="text-sm font-semibold text-gray-400 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </h2>
              <div className="flex flex-col gap-3 text-sm sm:text-[15px] text-gray-700 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_strong]:text-black [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:opacity-70">
                {s.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;