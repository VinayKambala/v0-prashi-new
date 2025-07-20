// app/terms/page.tsx
"use client";

import { motion } from "framer-motion";

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Last Updated:</span> July 20, 2025
          </p>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Welcome to Prashi Group! These Terms of Service ("Terms") govern your access to and use of the Prashi Group website (the "Website") and any services provided by Prashi Group (collectively, the "Services"). By accessing or using our Website or Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Website or Services.
          </p>
        </motion.header>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-xl space-y-8 border border-gold/10"
        >
          {/* 1. Acceptance of Terms */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By using our Website or Services, you affirm that you are of legal age to enter into these Terms, or, if you are not, that you have obtained parental or guardian consent to enter into these Terms.
            </p>
          </div>

          {/* 2. Changes to Terms */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              2. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Prashi Group reserves the right to modify or update these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Website or Services after any such changes constitutes your acceptance of the new Terms.
            </p>
          </div>

          {/* 3. Use of Website and Services */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              3. Use of Website and Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              <span className="font-semibold">Permitted Use:</span> You agree to use the Website and Services only for lawful purposes and in accordance with these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold mb-2">
              Prohibited Conduct:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Use the Website or Services in any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Website or Services, or which, as determined by us, may harm Prashi Group or users of the Website or Services.</li>
              <li>Use the Website or Services in any manner that could disable, overburden, damage, or impair the site or interfere with any other party's use of the Website or Services.</li>
              <li>Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose, including monitoring or copying any of the material on the Website.</li>
              <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
            </ul>
          </div>

          {/* 4. Intellectual Property Rights */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              4. Intellectual Property Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Prashi Group, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website, except as generally permitted by the Website's functionality.
            </p>
          </div>

          {/* 5. Disclaimer of Warranties */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              5. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Website and Services are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. Prashi Group does not make any warranty or representation with respect to the completeness, security, reliability, quality, accuracy, or availability of the Website or Services.
            </p>
          </div>

          {/* 6. Limitation of Liability */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In no event will Prashi Group, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Website or Services, any websites linked to it, any content on the Website or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
            </p>
          </div>

          {/* 7. Indemnification */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              7. Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to defend, indemnify, and hold harmless Prashi Group, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Website or Services.
            </p>
          </div>

          {/* 8. Governing Law and Jurisdiction */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              8. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All matters relating to the Website and these Terms, and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the internal laws of India, without giving effect to any choice or conflict of law provision or rule.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Website shall be instituted exclusively in the courts of Bangalore, Karnataka, India.
            </p>
          </div>

          {/* 9. Contact Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 border-b pb-2 border-gold/20">
              9. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
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
