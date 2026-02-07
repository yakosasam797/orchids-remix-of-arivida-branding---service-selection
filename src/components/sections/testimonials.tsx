import React from 'react';
import { Star, ArrowUpRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "If you're looking for a professional website development company, Battersea Web Expert is the right choice. They built my business website with clean design and SEO-friendly features. I get compliments from clients all the time.",
    name: "Sandeep Khanna",
    location: "Chandigarh",
    initial: "S",
    color: "bg-orange-500/20 text-orange-500"
  },
  {
    text: "The team at Battersea Web Expert is very creative and efficient. They helped my brand with social media and SEO campaigns. I wasn't sure at first, but the results spoke for themselves. Highly recommend their services.",
    name: "Anjali Mehta",
    location: "Pune",
    initial: "A",
    color: "bg-purple-500/20 text-purple-500"
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-[#010915]">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-glow-blue opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-glow-purple opacity-20 pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-display font-semibold tracking-wider text-sm uppercase block mb-3">
            // Testimonial
          </span>
          <h2 className="text-white max-w-3xl mx-auto leading-tight">
            What Our <span className="text-primary">Happy Clients</span> Say About Working <span className="text-primary">With Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Rating Dashboard Card */}
          <div className="lg:col-span-4 h-full">
            <div className="glass-card rounded-[20px] p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
              <div className="relative mb-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div className="text-5xl font-display font-bold text-white">4.9</div>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground text-lg mb-8 max-w-[200px] mx-auto leading-relaxed">
                We value your opinion: share your review with us
              </p>

              <a 
                href="https://www.google.com/search?q=battersea+web+expert+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-pill bg-primary text-primary-foreground flex items-center gap-2 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,156,34,0.3)] w-full justify-center group"
              >
                Write Your Review Here
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="glass-card rounded-[20px] p-8 relative flex flex-col justify-between group hover:border-primary/30 transition-all duration-300"
              >
                {/* Quote Icon Background */}
                <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-muted-foreground rotate-180" />
                </div>

                <div className="relative">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-[#a7adb9] text-base leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 relative">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg ${testimonial.color}`}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-display font-semibold mb-0.5">
                      {testimonial.name}
                    </h4>
                    <span className="text-muted-foreground text-sm">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand floating accent icon (small quote) */}
        <div className="absolute top-10 right-10 opacity-20 hidden lg:block">
           <svg width="80" height="80" viewBox="0 0 100 100" className="text-muted-foreground fill-current">
              <path d="M30 40c0-10 8-18 18-18v8c-6 0-10 4-10 10h10v15H30V40zm30 0c0-10 8-18 18-18v8c-6 0-10 4-10 10h10v15H60V40z" />
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
           </svg>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;