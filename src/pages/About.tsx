import React, { useState } from 'react';
import { Instagram, Facebook, MapPin, Mail, Phone, ChevronDown, Twitter } from 'lucide-react';

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
      answer: "Nuestras clases son reducidas, con un máximo de 6 personas para garantizar atención personalizada."
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
              <p className="text-lg text-[#DD969C] mb-6">
                Somos un estudio boutique exclusivo para mujeres, dedicado a transformar vidas a través del Pilates. Nuestro espacio ha sido diseñado pensando en tu comodidad y bienestar.
              </p>
              <p className="text-lg text-[#DD969C] mb-6">
                Con años de experiencia, nuestro equipo de instructoras certificadas está comprometido con tu progreso y desarrollo personal.
              </p>
              <p className="text-lg text-[#DD969C]">
                En Pilates Reformer creemos en la disciplina que fortalece tus músculos, ayudándote a tonificar tu cuerpo, mejorar la coordinación, fuerza y equilibrio. Además de promover el bienestar en su totalidad!
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

      {/* Nuestro Equipo */}
      <section className="bg-[#FDF6F6] py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-[#DD969C] text-center mb-16">Conoce A Nuestro Equipo!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Instructor"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-serif text-[#DD969C] mb-2">María García</h3>
              <p className="text-[#DD969C]">Fundadora & Instructora Principal</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Instructor"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-serif text-[#DD969C] mb-2">Ana Martínez</h3>
              <p className="text-[#DD969C]">Instructora Senior</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Instructor"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-serif text-[#DD969C] mb-2">Laura Sánchez</h3>
              <p className="text-[#DD969C]">Instructora de Reformer</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-[#DD969C] text-center mb-16">Preguntas Frecuentes</h2>
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
                <p className="text-[#DD969C]">Avenida Miguel Aleman 75, colonia Centro</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#DD969C]" />
                <p className="text-[#DD969C]">+55 123-456-7890</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#DD969C]" />
                <p className="text-[#DD969C]">info@pilatesreformer.com</p>
              </div>
              <div className="flex gap-4 pt-4 pb-1">
                <a href="#" className="text-[#DD969C] hover:text-[#A68977]">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#DD969C] hover:text-[#A68977]">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#DD969C] hover:text-[#A68977]">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden mt-6 md:mt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5231663543486!2d-3.7037167846361647!3d40.41694977936441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2s!4v1647096857534!5m2!1sen!2s"
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