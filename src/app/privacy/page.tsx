export default function page() {
  const InfoArr = [
    {
      title: "Server Address: ",
      des: "Identifying the IP address of your server.",
    },
    {
      title: "Technical Information: ",
      des: "Collecting details about your operating system, top-level domain name, and web browser type.",
    },
    {
      title: "Visit Details: ",
      des: "Recording the date and time of your visit, pages accessed, and information downloaded.",
    },
    {
      title: "Usage Patterns: ",
      des: "Analyzing your usage patterns and characteristics to measure interest in different areas of the site.",
    },
  ];
  const PaymentArr = [
    {
      title: "Order Processing: ",
      des: "Sending you the documents or products you have ordered.",
    },
    {
      title: "Customer Service: ",
      des: "Responding to your comments or queries.",
    },
    {
      title: "Internal Analysis: ",
      des: "Monitoring and analyzing our sales and marketing efforts.",
    },
  ];
  const ShareInfoArr = [
    {
      title: "Legal Compliance: ",
      des: "Meet legal requirements or respond to legal processes.",
    },
    {
      title: "Protection: ",
      des: "Protect and defend the rights, interests, or property of Elite Work or its affiliates.",
    },
    {
      title: "Service Delivery: ",
      des: "Enforce our terms and conditions or act to protect the interests of Elite Work, its affiliates, or other individuals.",
    },
  ];
  const referencefoArr = [
    {
      title: "'You,' 'your,' 'yours': ",
      des: "Refer to the person(s) accessing this website.",
    },
    {
      title: "'We,' 'us,' 'our': ",
      des: "Refer to Elite Work, its directors, officers, and employees.",
    },
  ];
  return (
    <aside className="main-container py-10 flex flex-col gap-6">
      <p>
        <span className="font-semibold">Elite Work</span>
        is committed to maintaining the privacy of our {`users'`} information.
        This Privacy Policy clarifies how we collect, use, and protect the
        information you provide when you visit or register on Elite Work’s
        website.
      </p>
      <h1 className="font-semibold text-lg">Information Collection</h1>
      <section className="flex flex-col gap-4">
        <p>
          When you visit our website, we track various activities and collect
          information to enhance your experience and improve our services. This
          includes:
        </p>
        {InfoArr?.map((curElm, i) => (
          <div key={i} className="flex gap-2 items-center">
            <div className="bg-secondary h-2 w-2"></div>
            <p>
              <span className="font-semibold">{curElm?.title}</span>{" "}
              {curElm?.des}
            </p>
          </div>
        ))}
        <p>
          This information is associated with your server rather than your
          personal identity and is used solely to improve our online services.
          We may share this information with our IT partners responsible for
          website design, development, and maintenance.
        </p>
      </section>
      <h1 className="font-semibold text-lg">Payment Information</h1>
      <section className="flex flex-col gap-4">
        <p>
          If you make a payment on our website, we collect your credit card
          details and other relevant information. This data is used for:
        </p>
        {PaymentArr?.map((curElm, i) => (
          <div key={i} className="flex gap-2 items-center">
            <div className="bg-secondary h-2 w-2"></div>
            <p>
              <span className="font-semibold">{curElm?.title}</span>{" "}
              {curElm?.des}
            </p>
          </div>
        ))}
        <p>
          We may contact you for feedback, to follow up on your order, or to
          provide additional information about our products and services. If
          necessary, we may share your information with mailing houses for
          document delivery on our behalf.
        </p>
      </section>
      <h1 className="font-semibold text-lg">Use and Sharing of Information</h1>
      <section className="flex flex-col gap-4">
        <p>
          Elite Work collects users’ details voluntarily provided during
          different interactions such as payments, registrations, or contests.
          This information is stored securely with Elite Work or its affiliates
          and is kept confidential. We do not sell or transfer {"users'"}
          information to unaffiliated third parties, except as necessary to:
        </p>
        {ShareInfoArr?.map((curElm, i) => (
          <div key={i} className="flex gap-2 items-center">
            <div className="bg-secondary h-2 w-2"></div>
            <p>
              <span className="font-semibold">{curElm?.title}</span>{" "}
              {curElm?.des}
            </p>
          </div>
        ))}
        <p>
          For service delivery, Elite Work may share information with
          affiliates, third-party contractors, subcontractors, agents, and
          subagents for a stipulated time. Additionally, we may disclose
          information to comply with requests from government authorities or
          regulatory agencies. Elite Work is not responsible for any loss or
          damage resulting from such disclosures.
        </p>
      </section>
      <h1 className="font-semibold text-lg">Marketing Communications</h1>
      <div className="flex flex-col gap-4">
        <p>
          Our marketing team may contact you for follow-ups, confirmations, or
          to provide more information about our products and services. If you do
          not wish to receive such communications, you can opt out by contacting
          us via email or phone.
        </p>
        <p>
          Elite Work may share aggregate data with advertisers, including online
          behavior, user characteristics, and interaction with advertisements.
          In such cases, users should review the privacy policies of third
          parties, as Elite Work is not responsible for their practices.
        </p>
      </div>
      <h1 className="font-semibold text-lg">Privacy Commitments</h1>
      <p>
        Elite Work is dedicated to protecting your privacy. We have implemented
        necessary measures to safeguard your information and will continue to do
        so. Employees are instructed to discuss business affairs only when
        critically required, ensuring confidentiality.
      </p>
      <h1 className="font-semibold text-lg">Opt-Out</h1>
      <p>
        If you wish to discontinue receiving information from us or opt out of
        marketing communications, you can unsubscribe using the link provided in
        our emails or SMS, or by writing to us at info@EliteWork.com.
      </p>
      <h1 className="font-semibold text-lg">Security</h1>
      <p>
        We take security seriously and strive to adopt best practices to protect
        your information. Users are responsible for maintaining the
        confidentiality of their credentials and should not share them with
        others.
      </p>
      <h1 className="font-semibold text-lg">Online Payments</h1>
      <p>
        For online payments, Elite Work collects personal details such as card
        numbers and expiration dates. These details are processed securely and
        are required by law for payment gateways.
      </p>
      <h1 className="font-semibold text-lg">Cookies Policy</h1>
      <p>
        To personalize your online experience, Elite Work uses cookies. Cookies
        are text files placed on your hard drive by a web server. They do not
        run programs or transfer viruses to your computer but help save time and
        enhance your browsing experience.
      </p>
      <h1 className="font-semibold text-lg">Amendments</h1>
      <p>
        Elite Work reserves the right to modify this Privacy Policy at any time.
        Please review this statement periodically for updates.
      </p>
      <h1 className="font-semibold text-lg">References</h1>
      <section className="flex flex-col gap-4">
        {referencefoArr?.map((curElm, i) => (
          <div key={i} className="flex gap-2 items-center">
            <div className="bg-secondary h-2 w-2"></div>
            <p>
              <span className="font-semibold">{curElm?.title}</span>{" "}
              {curElm?.des}
            </p>
          </div>
        ))}
        <p>
          For any inquiries regarding this Privacy Policy or to exercise your
          rights, please contact us at infoEliteWorkk@gmail.com
        </p>
      </section>
    </aside>
  );
}
