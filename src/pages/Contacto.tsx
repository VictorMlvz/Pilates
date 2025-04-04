import { Instagram, MapPin, Mail, Phone, MessageCircle,Facebook } from 'lucide-react';

function Contacto() {

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 px-4">

      <div className="container mx-auto max-w-6xl">

        <h2 className="text-3xl md:text-5xl font-serif text-[#D4A5A5] text-center mb-8 md:mb-12">Contacto</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-serif text-[#D4A5A5] mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FDF6F6] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#D4A5A5]" />
                </div>
                <div>
                  <h4 className="font-serif text-[#D4A5A5] mb-1">Ubicación</h4>
                  <p className="text-[#E3B7B7]">Av Miguel Alemán 75, Centro, Chilpancingo de los Bravo, Gro.</p>
                  <p className="text-[#E3B7B7]">CP 39000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FDF6F6] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#D4A5A5]" />
                </div>
                <div>
                  <h4 className="font-serif text-[#D4A5A5] mb-1">Teléfono</h4>
                  <p className="text-[#E3B7B7]">+34 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FDF6F6] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#D4A5A5]" /> 
                </div>
                <div >
                <h4 className="font-serif text-[#D4A5A5] mb-1">Numero de tarjeta: </h4>
                <p className="text-[#E3B7B7]">4152 3144 3003 1735</p>
                <p className="text-[#E3B7B7]"> (La clase se apertura a partir de 3 personas.)</p>
                </div>
              </div>
            </div>

            <br></br>
           
            <div className="bg-[#DF428E] p-6 rounded-lg">
              <h2 className="text-2xl font-serif text-[#FFFFFF] mb-4">Precios: </h2>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">1 clase $150</h3>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">3 clases $400 </h3>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">6 clases $800</h3>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">10 clases $1,300</h3>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">30 clases $3,600</h3>
          
          </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="font-serif text-[#D4A5A5] mb-4">Horario de Atención</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-[#E3B7B7]">
                  <span>Lunes - Viernes</span>
                  <span>8:00 - 20:00</span>
                </div>
                <div className="flex justify-between text-[#E3B7B7]">
                  <span>Sábado</span>
                  <span>9:00 - 14:00</span>
                </div>
                <div className="flex justify-between text-[#E3B7B7]">
                  <span>Domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="font-serif text-[#D4A5A5] mb-4">Síguenos en</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/bionaturapilates?igsh=MWd3cG55d2Flcndndg==" className="bg-[#FDF6F6] p-3 rounded-lg text-[#D4A5A5] hover:bg-[#D4A5A5] hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/share/18wK96CDNg/?mibextid=wwXIfr" className="bg-[#FDF6F6] p-3 rounded-lg text-[#D4A5A5] hover:bg-[#D4A5A5] hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-serif text-[#D4A5A5] mb-6">Envíanos un Mensaje</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#D4A5A5] mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#D4A5A5]/20 focus:outline-none focus:border-[#D4A5A5]"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#D4A5A5] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#D4A5A5]/20 focus:outline-none focus:border-[#D4A5A5]"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#D4A5A5] mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#D4A5A5]/20 focus:outline-none focus:border-[#D4A5A5]"
                  placeholder="¿Sobre qué nos quieres consultar?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#D4A5A5] mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#D4A5A5]/20 focus:outline-none focus:border-[#D4A5A5]"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4A5A5] text-white px-8 py-3 rounded-full hover:bg-[#E3B7B7] transition"
              >
                Enviar mensaje
              </button>
            </form>

            <div className="mt-8 p-4 bg-[#FDF6F6] rounded-lg">
              <div className="flex items-center text-[#D4A5A5]">
                <MessageCircle className="w-5 h-5 mr-2" />
                <p className="text-sm">Responderemos a tu mensaje en menos de 24 horas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-2xl font-serif text-[#D4A5A5] mb-6">Nuestra Ubicación</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
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
      </div>
    </div>
    );
}
    
export default Contacto;