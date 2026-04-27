"use client";

import { motion } from "framer-motion";
import SubsidiaryBreadcrumb from "@/components/SubsidiaryBreadcrumb";

const fadeUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 selection:bg-accent selection:text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SubsidiaryBreadcrumb name="Terms of Service" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-12"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6 tracking-tight">Terms of <br/><span className="italic font-light text-accent">Service.</span></h1>
          <p className="text-sm text-slate-400 font-sans tracking-[0.2em] uppercase mb-16">Last Updated: April 2024</p>
        </motion.div>

        <div className="prose prose-slate prose-lg max-w-none font-sans font-light text-slate-600 leading-relaxed space-y-12">
          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by TMT Group and its subsidiaries (including TMT Real Estate, TMT Consulting, High Star Logistics, Yutaka Farm, TMT Schools, TMT Technologies, and others), you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">2. Use of Services</h2>
            <p>
              Our services are intended for professional and personal use in accordance with Nigerian law. You agree not to use our platforms for any unlawful purposes or in a way that impairs the functionality of our digital tools or the reputation of the TMT brand.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">3. Intellectual Property</h2>
            <p>
              All content, including but not limited to logos, designs, text, graphics, and software code, is the intellectual property of TMT Group. Unauthorized reproduction, distribution, or modification of any material from our websites or services is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">4. Limitation of Liability</h2>
            <p>
              TMT Group strives for excellence across all sectors. However, we are not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services, including but not limited to delays in logistics, educational outcomes, or market fluctuations in real estate and agriculture.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary mb-4">5. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Abuja.
            </p>
          </section>

          <section className="pt-12 border-t border-slate-100">
            <h2 className="text-2xl font-serif text-primary mb-4">Contact Us</h2>
            <p>
              If you have any questions regarding these Terms of Service, please contact our legal department at <span className="text-accent font-medium">legal@tmtgroup.com.ng</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
