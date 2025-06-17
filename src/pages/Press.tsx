import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Suspense } from 'react';

const Press = () => {
  return (
    <>
      <Helmet>
        <title>Press & Media - Libreonix Private Limited</title>
        <meta name="description" content="Access press kits, brand assets, and the latest news from Libreonix Private Limited." />
        <link rel="canonical" href="https://libreonix.in/press" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://libreonix.in/press" />
        <meta property="og:title" content="Press & Media - Libreonix Private Limited" />
        <meta property="og:description" content="Access press kits, brand assets, and the latest news from Libreonix Private Limited." />
        <meta property="og:image" content="https://libreonix.in/og-image.jpg" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://libreonix.in/press" />
        <meta property="twitter:title" content="Press & Media - Libreonix Private Limited" />
        <meta property="twitter:description" content="Access press kits, brand assets, and the latest news from Libreonix Private Limited." />
        <meta property="twitter:image" content="https://libreonix.in/twitter-image.jpg" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-inter antialiased">
        {/* Animated gradient background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/30 via-slate-950 to-black animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <div className="container mx-auto px-8 py-24 text-white flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6 text-slate-200 text-center">Press & Media</h1>

            {/* Brand Guidelines Section */}
            <div className="w-full max-w-3xl mb-8 text-left bg-slate-900/50 p-6 rounded-lg border border-slate-700/30 shadow-xl">
              <h2 className="text-2xl font-semibold mb-3 text-slate-200">Brand Asset Guidelines</h2>
              <div className="text-gray-400 font-sans text-base leading-relaxed whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: `Libreonix Brand Asset Guidelines<br/>
<hr class="my-3 border-slate-600"/><br/>

<strong>Logo:</strong><br/>
&bull; Full Color Logo: libreonix_logo_fullcolor.png<br/>
&bull; Transparent Logo: libreonix_logo_transparent.png<br/>
&bull; Grayscale Logo: libreonix_logo_grayscale.png<br/>
&bull; Favicon/App Icon (512x512): libreonix_logo_favicon_512x512.png<br/>
&bull; Transparent Favicon (512x512): libreonix_logo_favicon_512x512_transparent.png<br/><br/>

<strong>Typography:</strong><br/>
&bull; Font: Plus Jakarta Sans (Open Source)<br/>
  <a href="https://fonts.google.com/specimen/Plus+Jakarta+Sans" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">https://fonts.google.com/specimen/Plus+Jakarta+Sans</a><br/><br/>

<strong>Colors:</strong><br/>
&bull; Primary: Midnight Blue (#0D1B2A)<br/>
&bull; Accent 1: Electric Blue (#3DA9FC)<br/>
&bull; Accent 2: Teal Gray (#90B4CE)<br/>
&bull; Light Background: #FFFFFF<br/>
&bull; Dark Background: #0D1B2A<br/><br/>

<strong>Usage:</strong><br/>
&bull; Maintain clear space equal to height of the "L" in the logotype<br/>
&bull; Logo should not be rotated, skewed, or recolored outside guidelines<br/>
&bull; Use monochrome logo only when color is not possible`}}></div>
              <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-200">Download Brand Assets</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <a href="/libreonix_brand_assets/libreonix_logo_fullcolor.png" download className="inline-flex items-center justify-center px-5 py-2 border border-slate-600/30 rounded-lg text-white bg-slate-700 hover:bg-slate-800 transition-colors duration-300 shadow-md" aria-label="Download Full Color Logo">
                  Download Full Color Logo
                </a>
                <a href="/libreonix_brand_assets/libreonix_logo_transparent.png" download className="inline-flex items-center justify-center px-5 py-2 border border-slate-600/30 rounded-lg text-white bg-slate-700 hover:bg-slate-800 transition-colors duration-300 shadow-md" aria-label="Download Transparent Logo">
                  Download Transparent Logo
                </a>
                <a href="/libreonix_brand_assets/libreonix_logo_grayscale.png" download className="inline-flex items-center justify-center px-5 py-2 border border-slate-600/30 rounded-lg text-white bg-slate-700 hover:bg-slate-800 transition-colors duration-300 shadow-md" aria-label="Download Grayscale Logo">
                  Download Grayscale Logo
                </a>
                <a href="/libreonix_brand_assets/libreonix_logo_favicon_512x512.png" download className="inline-flex items-center justify-center px-5 py-2 border border-slate-600/30 rounded-lg text-white bg-slate-700 hover:bg-slate-800 transition-colors duration-300 shadow-md" aria-label="Download Favicon 512x512">
                  Download Favicon (512x512)
                </a>
                <a href="/libreonix_brand_assets/libreonix_logo_favicon_512x512_transparent.png" download className="inline-flex items-center justify-center px-5 py-2 border border-slate-600/30 rounded-lg text-white bg-slate-700 hover:bg-slate-800 transition-colors duration-300 shadow-md" aria-label="Download Transparent Favicon 512x512">
                  Download Transparent Favicon (512x512)
                </a>
              </div>
            </div>

            {/* News Section with Suspense */}
            <div className="w-full max-w-3xl text-left mt-8">
              <h2 className="text-2xl font-semibold mb-3 text-slate-200">Latest News</h2>
              <Suspense fallback={<div>Loading news...</div>}>
                {/* Placeholder for news content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array.from({ length: 2 }).map((_, index) => (
                    <div key={index} className="bg-slate-900/50 p-5 rounded-lg border border-slate-700/30 shadow-md animate-pulse h-40">
                      <div className="h-5 bg-slate-800 rounded w-3/4 mb-3"></div>
                      <div className="h-3 bg-slate-800 rounded w-full mb-2"></div>
                      <div className="h-3 bg-slate-800 rounded w-5/6"></div>
                    </div>
                  ))}
                </div>
              </Suspense>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Press; 