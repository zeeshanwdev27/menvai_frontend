import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// ---- Edit these before publishing ----
const BRAND = "Menvia";
const EMAIL = "support@menvia.com"; // TODO: your real support email
const PHONE = "0300 0000000"; // TODO: your real phone / WhatsApp number
const LAST_UPDATED = "November 3, 2026";
const DELIVERY_TIME = "3 to 7 working days"; // TODO: adjust to your real delivery time
const CLAIM_WINDOW = "48 hours"; // TODO: time customers have to report an issue
// --------------------------------------

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms & Conditions apply to your use of the {BRAND} website and
          to every order you place with us. By browsing the website or placing
          an order, you agree to be bound by them.
        </p>
        <p>
          If you do not agree with any part of these terms, please do not use
          the website or place an order.
        </p>
      </>
    ),
  },
  {
    id: "about-us",
    title: "About Us",
    content: (
      <p>
        {BRAND} is an online men's clothing brand. We sell men's socks, tank
        tops and underwear. All products are listed on this website and are
        sold directly by us.
      </p>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility",
    content: (
      <p>
        You must be at least 18 years old, or have the permission of a parent or
        guardian, to place an order. You agree to give accurate and complete
        information when ordering.
      </p>
    ),
  },
  {
    id: "products",
    title: "Products and Sizing",
    content: (
      <>
        <p>
          We try to show our products, colors and sizes as accurately as
          possible. Colors may look slightly different on your screen
          depending on your display settings, and small variations in fabric or
          stitching can occur.
        </p>
        <p>
          Please check the size options and measurements on each product page
          before ordering. Choosing the right size is your responsibility.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    title: "Pricing",
    content: (
      <>
        <p>
          Prices are shown on the website and may change at any time without
          notice. The price you see when you place your order is the price you
          pay for that order.
        </p>
        <p>
          A shipping charge is added at checkout and shown in your order
          summary before you place the order. If we find a pricing error, we
          may cancel the order and contact you.
        </p>
      </>
    ),
  },
  {
    id: "orders",
    title: "Placing and Confirming Orders",
    content: (
      <>
        <p>
          Placing an order is an offer to buy. We may contact you by phone,
          SMS or WhatsApp to confirm your details before dispatching it.
        </p>
        <p>We may cancel or refuse an order if:</p>
        <ul>
          <li>An item is out of stock or no longer available.</li>
          <li>
            We cannot reach you on the phone number provided, or the address is
            incomplete or incorrect.
          </li>
          <li>We suspect a fake, fraudulent or repeated false order.</li>
        </ul>
      </>
    ),
  },
  {
    id: "payment",
    title: "Payment (Cash on Delivery)",
    content: (
      <>
        <p>
          We currently accept <strong>Cash on Delivery (COD) only</strong>. You
          pay the full order total in cash to the courier when your order
          arrives.
        </p>
        <p>
          Please keep the exact amount ready if possible. Repeated refusal of
          COD orders may lead to future orders being declined.
        </p>
      </>
    ),
  },
  {
    id: "delivery",
    title: "Shipping and Delivery",
    content: (
      <>
        <p>
          We deliver through our courier partners. Estimated delivery time is{" "}
          <strong>{DELIVERY_TIME}</strong> after your order is confirmed. This
          is an estimate, and delays can happen because of weather, public
          holidays, courier issues or incorrect address details.
        </p>
        <p>
          Please make sure your name, phone number and address are correct and
          that someone is available to receive and pay for the order. If a
          delivery fails because of wrong details or because you are
          unreachable, we may cancel the order.
        </p>
      </>
    ),
  },
  {
    id: "returns",
    title: "Returns and Exchanges",
    content: (
      <>
        <p>
          Because socks, tank tops and underwear are personal hygiene items, we
          cannot accept returns or exchanges once the product has been opened,
          worn or washed, or if its packaging or tags have been removed, except
          in the cases below.
        </p>
        <p>
          If your item is <strong>defective, damaged, or not what you
          ordered</strong>, please contact us within{" "}
          <strong>{CLAIM_WINDOW}</strong> of receiving it with your order
          details and clear photos. After we verify the issue, we will offer a
          replacement or another suitable solution.
        </p>
        <p>
          To help us check your order, we recommend recording a short video
          while opening the parcel.
        </p>
      </>
    ),
  },
  {
    id: "cancellations",
    title: "Order Cancellations",
    content: (
      <p>
        You can ask to cancel an order by contacting us before it is
        dispatched. Once an order has been handed to the courier, it cannot be
        cancelled, and the normal delivery and COD terms apply.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <p>
        The {BRAND} name, logo, product images, text, designs and all other
        content on this website belong to us or are used with permission. You
        may not copy, reproduce, distribute or use them for commercial
        purposes without our written consent.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: (
      <>
        <p>When using our website, you agree not to:</p>
        <ul>
          <li>Provide false, misleading or fake information or orders.</li>
          <li>
            Try to hack, disrupt or gain unauthorized access to the website.
          </li>
          <li>Use automated tools to scrape or copy content or place orders.</li>
          <li>Use the website for any unlawful purpose.</li>
        </ul>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          We work hard to keep the website accurate and available, but we
          provide it "as is" without guarantees that it will always be
          error-free or uninterrupted.
        </p>
        <p>
          To the fullest extent permitted by law, {BRAND} is not liable for
          indirect or consequential losses arising from your use of the
          website or products. Our total liability for any order will not
          exceed the amount you paid for that order.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    content: (
      <p>
        Your use of the website is also covered by our{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>, which explains how we
        collect and use your personal information.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <p>
        These terms are governed by the laws of Pakistan. Any dispute will be
        handled by the competent courts of Pakistan, unless the law says
        otherwise.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: (
      <p>
        We may update these Terms & Conditions at any time. The latest version
        will always be on this page, and the changes apply to orders placed
        after the update.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        <p>
          For questions about these terms, your order or a return, please
          contact {BRAND}:
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

function TermsAndConditions() {
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
          Terms & Conditions
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-snug text-balance max-w-3xl">
          Please read these terms carefully before shopping with {BRAND}. They
          explain how ordering, payment, delivery and returns work.
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
            to="/privacy-policy"
            className="mt-6 block w-full text-center rounded-full border border-black py-2.5 text-xs font-bold hover:bg-black hover:text-white transition-colors"
          >
            READ PRIVACY POLICY
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

export default TermsAndConditions;