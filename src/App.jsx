import React from "react";
import {
  ArrowRight,
  Check,
  Brain,
  Users,
  Landmark,
  Globe,
  Camera,
  MessageCircle,
} from "lucide-react";

const App = () => {
  // Brand Colors & Constants
  const brandRed = "#E61E25";
  const brandTan = "#E9C4A1";

  return (
    <div className="antialiased font-['Inter'] bg-[#F9F9F9] text-[#121212] scroll-smooth">
      {/* Dynamic Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=Inter:wght@300;400;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap');
        
        .oswald { font-family: 'Oswald', sans-serif; }
        .playfair { font-family: 'Playfair Display', serif; }
        
        .hero-texture {
          background-color: #ffffff;
          background-image: url("https://www.transparenttextures.com/patterns/cracked-white-wall.png");
        }

        .card-hover:hover {
          transform: translateY(-8px);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .whatsapp-pulse {
          animation: pulse 2s infinite;
        }

        .hashtag-box {
          background-color: #000;
          color: #fff;
          display: inline-block;
          padding: 8px 24px;
          transform: skewX(-12deg);
          font-weight: 900;
          letter-spacing: 0.15em;
          box-shadow: 6px 6px 0px rgba(230, 30, 37, 0.3);
        }

        .hashtag-text {
          transform: skewX(12deg);
          display: inline-block;
        }

        .fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="kontent.jpeg"
            alt="Kontent Kunda Logo"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
          {/* Fallback text if image fails */}
          <div className="oswald font-bold text-xl tracking-[0.2em] hidden">
            <span className="text-black">KONTENT</span>
            <span style={{ color: brandRed }}>KUNDA</span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 oswald text-xs font-bold uppercase tracking-widest">
          <a
            href="#about"
            className="hover:text-[var(--brand-red)] transition-colors"
          >
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-[var(--brand-red)] transition-colors"
          >
            Services
          </a>
          <a href="#siggil" className="text-[#E61E25] tracking-widest">
            Siggil!
          </a>
          <a
            href="#projects"
            className="hover:text-[var(--brand-red)] transition-colors"
          >
            Upcoming
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--brand-red)] transition-colors"
          >
            Work With Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="siggil"
        className="hero-texture min-h-screen flex items-center justify-center pt-32 pb-16 px-4 relative overflow-hidden"
      >
        <div className="max-w-6xl w-full text-center z-10 flex flex-col items-center">
          {/* Logo and "PRESENTS" text integration */}
          <div className="mb-10 fade-in flex flex-col items-center">
            <img
              src="kontent.jpeg"
              alt="Kontent Kunda"
              className="h-20 md:h-28 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-700 opacity-90 mb-4"
            />
            <div className="oswald text-sm md:text-base font-black tracking-[1em] text-black ml-[1em] border-t border-black/10 pt-4 px-8">
              PRESENTS
            </div>
          </div>

          <h2 className="oswald text-sm font-bold tracking-[0.5em] text-gray-400 mb-6 uppercase">
            A 10-Episode Documentary Series
          </h2>

          <h1 className="oswald text-[100px] md:text-[180px] font-bold leading-[0.8] tracking-tighter m-0 text-black mb-6">
            Siggil<span style={{ color: brandRed }}>!</span>
          </h1>

          <div
            className="oswald text-3xl md:text-6xl font-bold tracking-[0.2em] uppercase mb-10 border-b-8 pb-4"
            style={{ borderColor: brandRed }}
          >
            Nation on the Brink
          </div>

          <div className="mb-12">
            <div className="hashtag-box oswald text-2xl md:text-4xl">
              <span className="hashtag-text">#ASNARRATEDBYUS!</span>
            </div>
          </div>

          <p className="text-lg md:text-2xl font-light leading-relaxed max-w-2xl text-gray-700 mb-12">
            Exposing the reality. Sparking change. Exploring the shift between
            who we were and who we are becoming.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#mission"
              className="bg-black text-white px-12 py-5 oswald tracking-widest uppercase font-bold hover:bg-[#E61E25] transition-all shadow-xl"
            >
              Explore the Project
            </a>
            <a
              href="#contact"
              className="border-2 border-black text-black px-12 py-5 oswald tracking-widest uppercase font-bold hover:bg-black hover:text-white transition-all"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2 space-y-12">
              <div
                className="inline-block px-4 py-1 oswald text-xs font-bold tracking-[0.3em] uppercase"
                style={{ backgroundColor: brandTan }}
              >
                Culture and Content
              </div>
              <h2 className="playfair text-6xl italic leading-tight text-gray-900">
                Why we matter.
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="oswald text-3xl font-bold opacity-20">
                    01
                  </span>
                  <div>
                    <h3 className="oswald text-xl font-bold uppercase mb-2">
                      Background
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      Kontent Kunda is driving a needed shift in Gambian
                      storytelling — defining our identity while preserving
                      history and showing what's possible in modern media.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="oswald text-3xl font-bold opacity-20">
                    02
                  </span>
                  <div>
                    <h3 className="oswald text-xl font-bold uppercase mb-2">
                      Solution
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      We provide the structure to develop, produce, and reframe
                      authentic Gambian content — offering fresh perspectives
                      and turning ideas into solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=400"
                  className="rounded-xl grayscale shadow-lg"
                  alt="Creative"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400"
                  className="rounded-xl grayscale shadow-lg"
                  alt="Video"
                />
                <img
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=400"
                  className="rounded-xl grayscale shadow-lg"
                  alt="Story"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section
        id="services"
        className="py-24 px-4 overflow-hidden relative"
        style={{
          background: `linear-gradient(135deg, #F9D8B9 0%, ${brandTan} 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="playfair text-6xl leading-tight">Our Services.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              "Content Directing",
              "Storytelling",
              "Social Impact Production",
              "Radio Show Design",
              "Video Production",
              "Art Direction",
            ].map((service, idx) => (
              <div
                key={idx}
                className={`px-8 py-6 oswald font-bold tracking-widest flex items-center justify-between group cursor-pointer transition-all ${
                  idx === 2
                    ? "bg-black text-white"
                    : "bg-white/40 backdrop-blur hover:bg-white"
                }`}
              >
                {service.toUpperCase()}
                <ArrowRight
                  className={`w-5 h-5 ${
                    idx === 2
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Pillars */}
      <section
        id="mission"
        className="py-24 px-4 bg-white border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div
              className="oswald font-bold tracking-[0.4em] uppercase text-sm"
              style={{ color: brandRed }}
            >
              Campaign Focus
            </div>
            <h2 className="oswald text-5xl font-bold uppercase">
              From Problem to Strategy to Solution.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Substance Use",
                icon: <Landmark />,
                tag: "Crisis Focus",
              },
              {
                title: "Mental Health",
                icon: <Brain />,
                tag: "Silent Struggle",
              },
              {
                title: "Family & Community",
                icon: <Users />,
                tag: "Foundation Repair",
              },
              {
                title: "Systems & Solutions",
                icon: <Landmark />,
                tag: "Structural Change",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="p-10 border border-gray-200 text-center card-hover bg-[#FAFAFA]"
              >
                <div
                  className="text-4xl mb-6 flex justify-center"
                  style={{ color: brandRed }}
                >
                  {pillar.icon}
                </div>
                <h3 className="oswald text-xl font-bold uppercase mb-4">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                  {pillar.tag}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects 2026 */}
      <section id="projects" className="py-24 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="playfair text-6xl italic mb-16">
            Upcoming Projects 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group relative overflow-hidden bg-zinc-900 rounded-sm p-12 space-y-6">
              <div className="oswald text-6xl font-bold tracking-tighter">
                Siggil<span style={{ color: brandRed }}>!</span>
              </div>
              <p className="text-gray-400 font-light leading-relaxed">
                A national documentary campaign exploring urgent issues like
                substance abuse and harmful products. Mapping a path for real
                change in Gambia.
              </p>
              <div className="inline-block border border-white/20 px-6 py-2 text-xs oswald tracking-[0.3em] uppercase">
                Documentary Series
              </div>
            </div>
            <div className="group relative overflow-hidden bg-[#2D1B2D] rounded-sm p-12 space-y-6">
              <div className="playfair text-6xl italic">Jongoma</div>
              <p className="text-gray-400 font-light leading-relaxed">
                Subtitled "The Unconventional Jihad". A curated, cutting-edge
                entertainment experience that builds identities that truly
                resonate.
              </p>
              <div className="inline-block border border-white/20 px-6 py-2 text-xs oswald tracking-[0.3em] uppercase">
                Original Content
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100">
          <div className="md:w-1/2 p-12 bg-[#F5F5F5] flex flex-col justify-center">
            <h2 className="oswald text-4xl font-bold uppercase mb-6 leading-tight">
              Be Part of <br /> The Conversation
              <span style={{ color: brandRed }}>!</span>
            </h2>
            <div className="space-y-4 text-xs font-bold oswald tracking-widest text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> CONFIDENTIAL
                PARTICIPATION
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> LOCAL LANGUAGE
                SUPPORT
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-12 text-center flex flex-col justify-center items-center">
            <MessageCircle className="w-12 h-12 text-green-500 mb-6" />
            <div className="text-3xl oswald font-bold text-black mb-8 tracking-widest">
              +220 7222120
            </div>
            <a
              href="https://wa.me/2207222120"
              className="whatsapp-pulse bg-green-500 text-white w-full py-4 oswald font-bold tracking-widest uppercase hover:bg-green-600 transition-all rounded-sm text-center"
            >
              Connect Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-20 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <img
              src="kontent.jpeg"
              alt="Kontent Kunda Logo"
              className="h-12 w-auto object-contain mb-4"
            />
            <div className="flex gap-4">
              <Globe className="w-5 h-5 cursor-pointer hover:text-[#E61E25]" />
              <Camera className="w-5 h-5 cursor-pointer hover:text-[#E61E25]" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="oswald font-bold text-xs tracking-widest uppercase">
              Visit Us
            </div>
            <div className="text-sm text-gray-500 font-light space-y-2">
              <p>19a Tafsir Road, Bakau, The Gambia</p>
              <p>kontentkunda@gmail.com</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="oswald font-bold text-xs tracking-widest uppercase">
              Contact
            </div>
            <div className="text-sm text-gray-500 font-light space-y-2">
              <p>(220) 722-2120</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-20 text-[10px] tracking-widest uppercase font-bold text-gray-400">
          &copy; 2024 KONTENT KUNDA.
        </div>
      </footer>
    </div>
  );
};

export default App;
