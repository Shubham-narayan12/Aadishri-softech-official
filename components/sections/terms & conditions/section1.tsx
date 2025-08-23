export default function Section1() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl text-center bg-white shadow-lg rounded-2xl p-8">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-8">
          TERMS & CONDITIONS
        </h1>

        {/* Effective Date */}
        <p className="mb-4">
          Effective Date: <strong>[Insert Date]</strong>
        </p>
        <p className="mb-4">
          Welcome to <strong>Aadishri Softech</strong> (“Company,” “we,”
          “our,” or “us”). By accessing or using our website, products, or
          services, you agree to comply with and be bound by the following Terms
          & Conditions.
        </p>

        {/* Services */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">1. SERVICES</h3>
        <p className="mb-4">
          We provide software development, IT consulting, and related services
          as agreed with clients. Project scope, deliverables, timelines, and
          costs will be defined in a separate Service Agreement/Proposal.
        </p>

        {/* Intellectual Property */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">
          2. INTELLECTUAL PROPERTY
        </h3>
        <p className="mb-4">
          All software, code, designs, and documentation developed by us remain
          the intellectual property of <strong>Aadishri Softech</strong>{" "}
          until full payment is received. After payment, intellectual property
          rights will be transferred to the client as per the Service Agreement.
        </p>

        {/* Payment & Invoicing */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">
          3. PAYMENT & INVOICING
        </h3>
        <p className="mb-4">
          Payments must be made as per the agreed schedule. Late payments may
          incur interest charges or suspension of services.
        </p>

        {/* Confidentiality */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">4. CONFIDENTIALITY</h3>
        <p className="mb-4">
          Both parties agree to keep confidential information, business data,
          and intellectual property secure and not disclose it to third parties
          without written consent.
        </p>

        {/* Limitation of Liability */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">
          5. LIMITATION OF LIABILITY
        </h3>
        <p className="mb-4">
          We are not liable for any indirect, incidental, or consequential
          damages arising from the use of our services. Clients are responsible
          for testing, verifying, and using the delivered software
          appropriately.
        </p>

        {/* Warranties & Support */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">
          6. WARRANTIES & SUPPORT
        </h3>
        <p className="mb-4">
          We warrant that the software will function as per agreed
          specifications at the time of delivery. Any post-delivery maintenance
          or support will be covered under a separate agreement.
        </p>

        {/* Termination */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">7. TERMINATION</h3>
        <p className="mb-4">
          Either party may terminate the agreement with written notice if terms
          are breached. Upon termination, all outstanding payments must be
          cleared immediately.
        </p>

        {/* Governing Law */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">8. GOVERNING LAW</h3>
        <p className="mb-4">
          These Terms & Conditions shall be governed by and construed in
          accordance with the laws of India, and any disputes arising under or
          in connection with these Terms shall be subject to the exclusive
          jurisdiction of the courts of Noida, Uttar Pradesh, India.
        </p>
      </div>
    </div>
  );
}
