"use client";

import { motion } from "framer-motion";
import SubsidiaryBreadcrumb from "@/components/SubsidiaryBreadcrumb";

const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 selection:bg-accent selection:text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SubsidiaryBreadcrumb name="Privacy Policy" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-12"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6 tracking-tight">Privacy <br/><span className="italic font-light text-accent">Policy.</span></h1>
          <p className="text-sm text-slate-400 font-sans tracking-[0.2em] uppercase mb-16">Last Updated: April 2024</p>
        </motion.div>

        <div className="prose prose-slate prose-lg max-w-none font-sans font-light text-slate-600 leading-relaxed space-y-12">
          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">1. Information Collection</h2>
            <p>
              TMT Group collects information that you provide directly to us when you register for an account, apply for a school program, book logistics services, or contact us for consulting. This may include your name, email address, phone number, and business details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our diversified services.</li>
              <li>Process transactions and send related information, including confirmations and invoices.</li>
              <li>Communicate with you about products, services, offers, and events offered by TMT Group.</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">3. Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption and secure servers for all sensitive data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">4. Sharing of Information</h2>
            <p>
              We do not share your personal information with third parties except as required by law or to facilitate services you have requested (e.g., sharing delivery details with our logistics partners). We never sell your data to marketing companies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">5. Your Choices</h2>
            <p>
              You may update or correct information about yourself at any time by logging into your account or contacting us. You may also opt out of receiving promotional communications from TMT Group by following the instructions in those communications.
            </p>
          </section>

          <section className="pt-12 border-t border-slate-100">
            <h2 className="text-2xl font-serif text-primary mb-4">Contact Privacy Officer</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy or data practices, please reach out to our data protection officer at <span className="text-accent font-medium">privacy@tmtgroup.com.ng</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
