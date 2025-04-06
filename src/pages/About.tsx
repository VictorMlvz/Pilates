import React, { useState } from 'react';
import { Instagram, Facebook, MapPin, Mail, Phone, ChevronDown, Twitter } from 'lucide-react';
import a from "../2.jpeg"

function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué ropa debo llevar a clase?",
      answer: "Recomendamos ropa cómoda y ajustada que permita movimiento libre. Calcetines antideslizantes son necesarios para las clases con reformer."
    },
    {
      question: "¿Necesito experiencia previa?",
      answer: "No, tenemos clases para todos los niveles. Nuestras instructoras te guiarán desde los movimientos básicos hasta los más avanzados."
    },
    {
      question: "¿Cuántas personas hay por clase?",
      answer: "Nuestras clases son reducidas, con un máximo de 8 personas para garantizar atención personalizada."
    },
    {
      question: "¿Cómo puedo reservar una clase?",
      answer: "Puedes reservar a través de nuestra web, por teléfono o WhatsApp. Recomendamos reservar con al menos 24 horas de anticipación."
    }
  ];

  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-white py-20">
        <div className="container mx-auto md:w-[75vw] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <h1 className="text-5xl font-serif text-[#DD969C] mb-6">Sobre Nosotras...</h1>
              <p className="text-lg text-[#DD969C]">
              Pilates Reformer, disciplina que fortalece tus músculos, ayudándote a tonificar tu cuerpo, mejorar la coordinación, fuerza y equilibrio. Además de promover el bienestar en su totalidad
              </p>
            </div>

            <div className='hidden md:inline'>
              <img 
                src="https://images.unsplash.com/photo-1579454566790-f9e5697ddf36?q=80&w=3142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Estudio de pilates"
                className="rounded-lg shadow-lg "
              />
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-[#DD969C] text-center mb-16">Preguntas Frecuentes</h2>
          <div className='hidden md:inline flex justify-center'>
  <img
    src={a}
    alt="Estudio de pilates"
    className="mx-auto rounded-lg shadow-lg h-[12rem]"
  />
  <br></br>
</div>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#8B6F5C]/20 rounded-lg">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-serif text-[#DD969C]">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#8B6F5C] transition-transform ${openFaq === index ? 'transform rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[#DD969C]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicacion */}
      <section className="bg-[#FDF6F6] py-20">
        <div className="container mx-auto px-6  md:w-[80vw]">
          <h2 className="text-4xl font-serif text-[#DD969C] text-center mb-16">Encuéntranos!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-[#DD969C]" />
                <p className="text-[#DD969C]">Av Miguel Alemán 75, Centro, 39000 Chilpancingo de los Bravo, Gro.</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#DD969C]" />
                <p className="text-[#DD969C]">+74 7101 0389</p>
              </div>
              <div className="flex gap-4 pt-4 pb-1">
                <a href="https://www.instagram.com/bionaturapilates?igsh=MWd3cG55d2Flcndndg==" className="text-[#DD969C] hover:text-[#A68977]">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/share/18wK96CDNg/?mibextid=wwXIfr" className="text-[#DD969C] hover:text-[#A68977]">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden mt-6 md:mt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7608.314381721277!2d-99.4987773!3d17.5477012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cbedd73be23ff5%3A0x3f2979c0bf9eaadf!2sBionatura!5e0!3m2!1sen!2smx!4v1743742140869!5m2!1sen!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-[#8B6F5C]">&copy; 2025 Pilates Reformer. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="text-[#8B6F5C] hover:text-[#A68977]">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#8B6F5C] hover:text-[#A68977]">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;