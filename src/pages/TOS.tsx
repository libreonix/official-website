import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const TOS = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Global OpenSource Softwares</title>
        <meta name="description" content="Read the terms of service for using Global OpenSource Softwares and its AI-powered solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-inter antialiased">
        {/* Animated gradient background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-950 to-black animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <div className="container mx-auto px-8 py-16 text-white flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8 text-slate-200 text-center">Terms of Service</h1>
            <div className="text-left max-w-3xl">
              <p className="text-lg mb-4">Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the [Your Website/Service Name] website (the "Service") operated by [Your Company Name] ("us", "we", or "our").</p>
              <p className="text-lg mb-4">Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
              <p className="text-lg mb-4">By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

              <h2 className="text-2xl font-bold mb-4 text-slate-300">Accounts</h2>
              <p className="text-lg mb-4">When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
              <p className="text-lg mb-4">You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
              <p className="text-lg mb-4">You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>

              <h2 className="text-2xl font-bold mb-4 text-slate-300">Links To Other Web Sites</h2>
              <p className="text-lg mb-4">Our Service may contain links to third-party web sites or services that are not owned or controlled by [Your Company Name].</p>
              <p className="text-lg mb-4">[Your Company Name] has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that [Your Company Name] shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
              <p className="text-lg mb-4">We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>

              <h2 className="text-2xl font-bold mb-4 text-slate-300">Termination</h2>
              <p className="text-lg mb-4">We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
              <p className="text-lg mb-4">Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>

              <h2 className="text-2xl font-bold mb-4 text-slate-300">Disclaimer</h2>
              <p className="text-lg mb-4">Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>

              <h2 className="text-2xl font-bold mb-4 text-slate-300">Governing Law</h2>
              <p className="text-lg mb-4">These Terms shall be governed and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.</p>

              <p className="text-lg mb-4">Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>

              <h2 className="text-2xl font-bold mb-4 text-slate-300">Changes</h2>
              <p className="text-lg mb-4">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
              <p className="text-lg mb-4">By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

              <h2 className="text-2xl font-bold mb-4 text-slate-300">Contact Us</h2>
              <p className="text-lg">If you have any questions about these Terms, please contact us at legal@globalopensourcesoftwares.in</p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default TOS; 