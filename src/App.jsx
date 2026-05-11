import React from "react";
import {
  ArrowRight,
  Check,
  Brain,
  Users,
  Landmark,
  Facebook,
  Instagram,
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

        .image-gritty {
          filter: grayscale(100%) contrast(110%);
        }
      `}</style>

      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-6 flex justify-between items-center">
        <div className="oswald font-bold text-2xl tracking-[0.2em] flex items-center gap-2">
          <span className="text-black">KONTENT</span>
          <span style={{ color: brandRed }}>KUNDA</span>
        </div>
        <div className="hidden md:flex gap-8 oswald text-xs font-bold uppercase tracking-widest">
          <a
            href="#about"
            className="hover:text-[var(--brand-red)] transition-colors"
          >
            About Us
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
        className="hero-texture min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
      >
        <div className="absolute top-20 right-10 w-64 h-64 opacity-10 pointer-events-none">
          <img
            src="https://www.transparenttextures.com/patterns/cracked-white-wall.png"
            alt=""
            className="w-full rotate-45"
          />
        </div>

        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 z-10">
          <div className="lg:w-3/5 text-center lg:text-left">
            <h2 className="oswald text-sm font-bold tracking-[0.5em] text-gray-400 mb-4 uppercase">
              A 10-Episode Documentary Series
            </h2>
            <h1 className="oswald text-[80px] md:text-[150px] font-bold leading-[0.8] tracking-tighter m-0 text-black mb-6">
              Siggil<span style={{ color: brandRed }}>!</span>
            </h1>
            <div
              className="oswald text-2xl md:text-5xl font-bold tracking-[0.3em] uppercase mb-8 border-l-8 pl-6"
              style={{ borderColor: brandRed }}
            >
              Nation on the Brink
            </div>
            <p className="text-lg md:text-2xl font-light leading-relaxed max-w-xl text-gray-700 mb-10">
              Exposing the reality. Sparking change. Exploring the shift between
              who we were and who we are becoming.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#mission"
                className="bg-black text-white px-10 py-4 oswald tracking-widest uppercase font-bold hover:bg-[#E61E25] transition-all"
              >
                Explore the Project
              </a>
              <a
                href="#contact"
                className="border-2 border-black text-black px-10 py-4 oswald tracking-widest uppercase font-bold hover:bg-black hover:text-white transition-all"
              >
                Get Involved
              </a>
            </div>
          </div>

          <div className="lg:w-2/5 relative">
            <div className="relative z-10 shadow-2xl overflow-hidden border-[16px] border-white">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=1000"
                alt="Youth Perspective"
                className="w-full h-auto image-gritty"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-black text-white p-6 z-20 max-w-[200px] oswald tracking-widest">
              <div className="text-sm">REAL STORIES.</div>
              <div className="text-sm">REAL PEOPLE.</div>
              <div className="font-bold text-xl" style={{ color: brandRed }}>
                REAL IMPACT.
              </div>
            </div>
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
                  src="https://images.unsplash.com/photo-1542204172-3c1fbd15865d?auto=format&fit=crop&q=80&w=400"
                  className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
                  alt="Culture"
                />
                <img
                  src="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=400"
                  className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
                  alt="Creative"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400"
                  className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
                  alt="Video"
                />
                <img
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=400"
                  className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
                  alt="Story"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-24 px-4 overflow-hidden relative"
        style={{
          background: `linear-gradient(135deg, #F9D8B9 0%, ${brandTan} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
                alt="Production"
                className="rounded-2xl shadow-3xl grayscale"
              />
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{ backgroundColor: brandTan }}
              ></div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 space-y-8">
            <h2 className="playfair text-6xl leading-tight">Our Services.</h2>
            <div className="grid grid-cols-1 gap-4">
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
                  className={`px-6 py-4 oswald font-bold tracking-widest flex items-center justify-between group cursor-pointer transition-all ${idx === 2 ? "bg-black text-white" : "bg-white/40 backdrop-blur hover:bg-white"}`}
                >
                  {service.toUpperCase()}{" "}
                  <ArrowRight
                    className={`w-5 h-5 ${idx === 2 ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                  />
                </div>
              ))}
            </div>
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

      {/* Projects 2026 */}
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
              Be Part of <br />
              The Conversation<span style={{ color: brandRed }}>!</span>
            </h2>
            <p className="text-gray-500 mb-8 font-light italic">
              Share your story. Be the change. Confirm your participation via
              WhatsApp to help shape a better tomorrow.
            </p>
            <div className="space-y-4 text-xs font-bold oswald tracking-widest text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> CONFIDENTIAL
                PARTICIPATION
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> LOCAL LANGUAGE
                SUPPORT
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> POP-UP CINEMA
                ACCESS
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-12 text-center flex flex-col justify-center items-center">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-12 h-12 text-green-500" />
            </div>
            <h3 className="oswald text-xl font-bold uppercase mb-2">
              WhatsApp Us
            </h3>
            <div className="text-3xl oswald font-bold text-black mb-8 tracking-widest">
              +220 7222120
            </div>
            <a
              href="https://wa.me/2207222120"
              target="_blank"
              rel="noopener noreferrer"
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
            <div className="oswald font-bold text-3xl tracking-widest">
              KONTENT KUNDA
            </div>
            <p className="text-gray-400 text-sm font-light max-w-xs">
              Building identities that truly resonate through authentic,
              human-driven content.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-[#E61E25]" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-[#E61E25]" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="oswald font-bold text-xs tracking-widest uppercase">
              Visit Us
            </div>
            <div className="text-sm text-gray-500 font-light space-y-2">
              <p>19a Tafsir Road</p>
              <p>Bakau, The Gambia</p>
              <p>kontentkunda@gmail.com</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="oswald font-bold text-xs tracking-widest uppercase">
              Contact
            </div>
            <div className="text-sm text-gray-500 font-light space-y-2">
              <p>(220) 722-2120</p>
              <p>(220) 449-5633</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-gray-100 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase font-bold text-gray-400">
          <div>&copy; 2024 KONTENT KUNDA. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
