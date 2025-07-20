// app/privacy/page.tsx
"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gold mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Last Updated:</span> July 20, 2025
          </p>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Prashi Group ("we," "our," or "us") is committed to protecting the privacy of our website visitors and clients. This Privacy Policy describes how we collect, use, and disclose information when you visit our website (the "Website") or use our services (the "Services").
          </p>
        </motion.header>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-xl space-y-8 border border-gold/10"
        >
          {/* 1. Information We Collect */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may collect several types of information from and about users of our Website and Services, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><span className="font-semibold">Personal Information:</span> Information that can be used to identify you, such as your name, email address, phone number, and postal address, which you voluntarily provide to us when you fill out forms, subscribe to newsletters, or contact us.</li>
              <li><span className="font-semibold">Usage Data:</span> Information about how you access and use the Website, such as your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. This data is collected automatically as you navigate through the site.</li>
              <li><span className="font-semibold">Cookies and Tracking Technologies:</span> We use cookies and similar tracking technologies to track the activity on our Website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.</li>
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>To provide, operate, and maintain our Website and Services.</li>
              <li>To improve, personalize, and expand our Website and Services.</li>
              <li>To understand and analyze how you use our Website and Services.</li>
              <li>To communicate with you, including for customer service, to provide you with updates and other information relating to the Website, and for marketing and promotional purposes.</li>
              <li>To process your inquiries and requests.</li>
              <li>To detect and prevent fraud and other illegal activities.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </div>

          {/* 3. Disclosure of Your Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              3. Disclosure of Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may share your information with third parties in the following situations:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><span className="font-semibold">Service Providers:</span> We may share your information with third-party service providers who perform services on our behalf, such as website hosting, data analysis, email delivery, and marketing assistance.</li>
              <li><span className="font-semibold">Legal Requirements:</span> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
              <li><span className="font-semibold">Business Transfers:</span> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
              <li><span className="font-semibold">With Your Consent:</span> We may disclose your personal information for any other purpose with your consent.</li>
            </ul>
          </div>

          {/* 4. Data Security */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              4. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk.
            </p>
          </div>

          {/* 5. Your Data Protection Rights */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              5. Your Data Protection Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><span className="font-semibold">The right to access:</span> You have the right to request copies of your personal data.</li>
              <li><span className="font-semibold">The right to rectification:</span> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
              <li><span className="font-semibold">The right to erasure:</span> You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><span className="font-semibold">The right to restrict processing:</span> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li><span className="font-semibold">The right to object to processing:</span> You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li><span className="font-semibold">The right to data portability:</span> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
            </p>
          </div>

          {/* 6. Third-Party Links */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              6. Third-Party Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </div>

          {/* 7. Children's Privacy */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              7. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Website is not intended for children under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
            </p>
          </div>

          {/* 8. Changes to This Privacy Policy */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              8. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          {/* 9. Contact Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              9. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <address className="not-italic mt-4 text-gray-700 space-y-1">
              <p><span className="font-semibold">Prashi Group</span></p>
              <p>Email: <a href="mailto:info@prashigroup.com" className="text-gold hover:underline">info@prashigroup.com</a></p>
              <p>Phone: <a href="tel:+918971199588" className="text-gold hover:underline">+91 89711 99588</a></p>
              <p>Address: 21, Whitefield-Hoskote Rd, Krishnarajapuram, Bengaluru, KA 560066</p>
            </address>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
