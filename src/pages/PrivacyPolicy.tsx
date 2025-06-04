import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Global OpenSource Softwares</title>
        <meta name="description" content="Read the privacy policy of Global OpenSource Softwares regarding the collection, use, and disclosure of personal data." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 font-inter antialiased">
        {/* Animated gradient background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-black animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <div className="container mx-auto px-8 py-16 text-white flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8 text-purple-400 text-center">Privacy Policy</h1>
            <div className="text-left max-w-3xl">
              <p className="text-lg mb-4">Effective date: 04/06/2025</p>

              <p className="text-lg mb-4">Global OpenSource Softwares ("us", "we", or "our") operates the https://globalopensourcesoftwares.in website (the "Service").</p>

              <p className="text-lg mb-4">This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

              <p className="text-lg mb-4">We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://globalopensourcesoftwares.in/tos.</p>

              <h2 className="text-2xl font-bold mb-4 text-purple-300">Information Collection And Use</h2>
              <p className="text-lg mb-4">We collect several different types of information for various purposes to provide and improve our Service to you.</p>

              <h3 className="text-xl font-bold mb-2 text-purple-200">Types of Data Collected</h3>

              <h4 className="text-lg font-bold mb-2 text-purple-100">Personal Data</h4>
              <p className="text-lg mb-4">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>

              <h4 className="text-lg font-bold mb-2 text-purple-100">Usage Data</h4>
              <p className="text-lg mb-4">We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

              <h4 className="text-lg font-bold mb-2 text-purple-100">Tracking & Cookies Data</h4>
              <p className="text-lg mb-4">We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
              <p className="text-lg mb-4">Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
              <p className="text-lg mb-4">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
              <p className="text-lg mb-4">Examples of Cookies we use:</p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>Session Cookies. We use Session Cookies to operate our Service.</li>
                <li>Preference Cookies. We use Preference Cookies to remember your preferences and various settings.</li>
                <li>Security Cookies. We use Security Cookies for security purposes.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-purple-300">Use of Data</h2>
              <p className="text-lg mb-4">Global OpenSource Softwares uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer care and support</li>
                <li>To provide analysis or valuable information so that we can improve the Service</li>
                <li>To monitor the usage of the Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-purple-300">Transfer Of Data</h2>
              <p className="text-lg mb-4">Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
              <p className="text-lg mb-4">If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there.</p>
              <p className="text-lg mb-4">Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>

              <h2 className="text-2xl font-bold mb-4 text-purple-300">Disclosure Of Data</h2>

              <h3 className="text-xl font-bold mb-2 text-purple-200">Legal Requirements</h3>
              <p className="text-lg mb-4">Global OpenSource Softwares may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>To comply with a legal obligation</li>
                <li>To protect and defend the rights or property of Global OpenSource Softwares</li>
                <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>To protect the personal safety of users of the Service or the public</li>
                <li>To protect against legal liability</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-purple-300">Security Of Data</h2>
              <p className="text-lg mb-4">The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

              <h2 className="text-2xl font-bold mb-4 text-purple-300">Service Providers</h2>
              <p className="text-lg mb-4">We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
              <p className="text-lg mb-4">These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

              <h2 className="text-2xl font-bold mb-4 text-purple-300">Links To Other Sites</h2>
              <p className="text-lg mb-4">Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
              <p className="text-lg mb-4">We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

              <h2 className="text-2xl font-bold mb-4 text-purple-300">Children's Privacy</h2>
              <p className="text-lg mb-4">Our Service does not address anyone under the age of 18 ("Children").</p>
              <p className="text-lg mb-4">We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>

              <h2 className="text-2xl font-bold mb-4 text-purple-300">Changes To This Privacy Policy</h2>
              <p className="text-lg mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
              <p className="text-lg mb-4">We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
              <p className="text-lg mb-4">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

              <h2 className="text-2xl font-bold mb-4 text-purple-300">Contact Us</h2>
              <p className="text-lg">If you have any questions about this Privacy Policy, please contact us at legal@globalopensourcesoftwares.in.</p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy; 