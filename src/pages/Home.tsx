import { Dumbbell, Users, Calendar, Instagram, Clock, MapPin,Facebook } from 'lucide-react';
import { useState } from 'react';
import { addMonths, format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { es } from 'date-fns/locale';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import a from '../1.jpeg';
import b from '../2.jpeg';
import c from '../3.jpeg';


const images = [
  a,
  b,
  c,
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false, // Oculté las flechas para un diseño más limpio
};

function Home() {
  const [showBooking, setShowBooking] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonth, setCurrentMonth] = useState(addMonths(new Date(), 1));

  const classes = [
    { id: 'principiantes', name: 'Principiantes', duration: '50 min' },
    { id: 'intermedio', name: 'Intermedio', duration: '50 min' },
    { id: 'avanzado', name: 'Avanzado', duration: '50 min' }
  ];

  const times = [
    '07:00','08:00', '09:00', '10:00', '16:00', '17:00', '18:00' , '19:00'
  ];

  // Simulated class schedule data
  const classSchedule = {
    'principiantes': ['08:00', '16:00'],
    'intermedio': ['09:00', '17:00'],
    'avanzado': ['10:00', '18:00']
  };

  const handleBookingClick = () => {
    setShowBooking(true);
    setShowCalendar(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const previousMonth = () => {
    setCurrentMonth(addMonths(currentMonth, -1));
  };

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  const getClassesForDay = (date: Date) => {
    // Solo mostrar clases de lunes a viernes
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return [];
    
    return Object.entries(classSchedule).map(([type, times]) => ({
      type,
      times
    }));
  };

  const CalendarView = () => (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-serif text-[#D4A5A5] text-center mb-12">Calendario de Clases</h2>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={previousMonth}
              className="p-2 hover:bg-[#FDF6F6] rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-[#D4A5A5]" />
            </button>
            <h2 className="text-2xl font-serif text-[#D4A5A5] capitalize">
              {format(currentMonth, 'MMMM yyyy', { locale: es })}
            </h2>
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-[#FDF6F6] rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-[#D4A5A5]" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-px bg-[#FDF6F6] rounded-lg overflow-hidden">
            {/* Week days header */}
            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day) => (
              <div
                key={day}
                className="bg-white p-4 text-center text-[#D4A5A5] font-serif"
              >
                {day}
              </div>
            ))}

            {/* Padding for first week */}
            {Array.from({ length: startOfMonth(currentMonth).getDay() === 0 ? 6 : startOfMonth(currentMonth).getDay() - 1 }).map((_, i) => (
              <div key={`empty-${i}`} className="bg-white p-4" />
            ))}

            {/* Calendar days */}
            {days.map((day: Date, dayIdx: any) => {
              const classes = getClassesForDay(day);
              const isWeekend = day.getDay() === 0 || day.getDay() === 6;

              return (
                <div
                  key={day.toString()}
                  className={`bg-white p-4 min-h-[120px] ${
                    !isSameMonth(day, currentMonth)
                      ? 'text-gray-400'
                      : isWeekend
                      ? 'bg-[#FDF6F6]/50'
                      : ''
                  }`}
                >
                  <div className="font-serif text-[#D4A5A5]">{format(day, 'd')}</div>
                  {!isWeekend && classes.map((classInfo) => (
                    <div
                      key={classInfo.type}
                      className="mt-1 text-xs"
                    >
                      <div className="text-[#E3B7B7] font-medium">
                        {classes.find(c => c.type === classInfo.type)?.type === 'principiantes' && 'Principiantes'}
                        {classes.find(c => c.type === classInfo.type)?.type === 'intermedio' && 'Intermedio'}
                        {classes.find(c => c.type === classInfo.type)?.type === 'avanzado' && 'Avanzado'}
                      </div>
                      <div className="text-[#D4A5A5]/70">
                        {classInfo.times.join(' · ')}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-xl font-serif text-[#D4A5A5] mb-4">Horarios Disponibles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(classSchedule).map(([type, times]) => (
                <div key={type} className="p-4 bg-[#FDF6F6] rounded-lg">
                  <h4 className="font-serif text-[#D4A5A5] mb-2">
                    {type === 'principiantes' && 'Principiantes'}
                    {type === 'intermedio' && 'Intermedio'}
                    {type === 'avanzado' && 'Avanzado'}
                  </h4>
                  <div className="text-[#E3B7B7] text-sm">
                    {times.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
              <button
              onClick={handleBookingClick}
              className="bg-[#D4A5A5] text-white px-8 py-3 rounded-full hover:bg-[#E3B7B7] transition">
              Reserva tu clase
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDF6F6] overflow-x-hidden">
    {showBooking ? (
        <div className="min-h-screen">

          {/* Nav Reservas */}
          <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
            <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
              <h1 className="text-3xl font-serif text-[#D4A5A5] mb-4 md:mb-0">Pilates Reformer</h1>
              <button 
                onClick={() => setShowBooking(false)}
                className="text-[#D4A5A5] hover:text-[#E3B7B7]"
              >
                Volver al inicio
              </button>
            </div>
          </nav>

          {/* Reservas */}
          <div className="pt-32 pb-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-4xl font-serif text-[#D4A5A5] text-center mb-12">Reserva tu clase</h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column - Class Selection */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif text-[#D4A5A5] mb-4">Elige tu clase</h3>
                    <div className="space-y-4">
                      {classes.map((classType) => (
                        <button
                          key={classType.id}
                          onClick={() => setSelectedClass(classType.id)}
                          className={`w-full p-4 rounded-lg border transition-all ${
                            selectedClass === classType.id
                              ? 'border-[#D4A5A5] bg-[#D4A5A5]/5'
                              : 'border-gray-200 hover:border-[#E3B7B7]'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="text-lg font-serif text-[#D4A5A5]">{classType.name}</h4>
                              <p className="text-[#E3B7B7] flex items-center mt-1">
                                <Clock className="w-4 h-4 mr-1" />
                                {classType.duration}
                              </p>
                            </div>
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              selectedClass === classType.id
                                ? 'border-[#D4A5A5] bg-[#D4A5A5]'
                                : 'border-gray-300'
                            }`} />
                          </div>
                        </button>
                      ))}
                    </div>
                    <div className="bg-[#DF428E] p-6 rounded-lg">
              <h2 className="text-2xl font-serif text-[#FFFFFF] mb-4">Precios: </h2>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">1 clase $150</h3>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">3 clases $400 </h3>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">6 clases $800</h3>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">10 clases $1,300</h3>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">30 clases $3,600</h3>
              
           </div>
           <h1 className="text-4sm font-serif text-[#EA899A] text-center mb-16">La clase se apertura a partir de tres personas </h1>
            <h3 className="text-4sm font-serif text-[#EA899A] text-center mb-16"> Nota: Cancelación con 2 dias antes (NO HAY ningún reembolso)</h3>
          
                  </div>

                  {/* Right Column - Time Selection & Form */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif text-[#D4A5A5] mb-4">Elige tu horario</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {times.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border text-center transition-all ${
                            selectedTime === time
                              ? 'border-[#D4A5A5] bg-[#D4A5A5]/5 text-[#D4A5A5]'
                              : 'border-gray-200 text-[#E3B7B7] hover:border-[#E3B7B7]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>

                    <div className="pt-6">
                      <h3 className="text-2xl font-serif text-[#D4A5A5] mb-4">Tus datos</h3>
                      <form className="space-y-4">
                        <input
                          type="text"
                          placeholder="Nombre completo"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-[#D4A5A5]/20 focus:outline-none focus:border-[#D4A5A5]"
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-[#D4A5A5]/20 focus:outline-none focus:border-[#D4A5A5]"
                        />
                        <input
                          type="tel"
                          placeholder="Teléfono"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-[#D4A5A5]/20 focus:outline-none focus:border-[#D4A5A5]"
                        />
                        <button
                          className="w-full bg-[#D4A5A5] text-white px-8 py-3 rounded-full hover:bg-[#E3B7B7] transition mt-6" >
                          <a href="https://api.whatsapp.com/send?phone=527471010389&text=Hola,%20quiero%20reservar%20una%20clase… ">Confirmar reserva</a>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-[#E3B7B7]">
                    <MapPin className="w-5 h-5 mr-2" />
                    <p>Av Miguel Alemán 75, Centro, 39000 Chilpancingo de los Bravo, Gro.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      ) : showCalendar ? (

        // Calendario
        <div className="min-h-screen">
          <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
            <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
              <h1 className="text-3xl font-serif text-[#D4A5A5] mb-4 md:mb-0">Pilates Reformer</h1>
              <button 
                onClick={() => setShowCalendar(false)}
                className="text-[#D4A5A5] hover:text-[#E3B7B7]"
              >
                Volver al inicio
              </button>
            </div>
          </nav>
          <CalendarView />
        </div>

      ) : (

      <>

      {/* Hero */}
      <section id="inicio" className="h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1633707079221-63b0b83f9b87?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
        <div className="bg-white/80 backdrop-blur-sm p-12 rounded-lg text-center">
          <h2 className="text-5xl font-serif text-[#DD969C] mb-5">Tu espacio de bienestar</h2>
          <p className="text-2xl text-[#DD969C] mb-3">Disciplina que fortalece tu músculos</p>
          <p className="text-xl text-[#DD969C] mb-5">Exclusivo para mujeres</p>
          <button 
                onClick={handleBookingClick}
                className="bg-[#DD969C] text-white px-8 py-3 rounded-full hover:bg-[#E3B7B7] transition"
              >
                Reserva tu clase
              </button>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Dumbbell className="w-12 h-12 text-[#EA899A] mx-auto mb-4" />
            <h3 className="text-xl font-serif text-[#EA899A] mb-2">Equipamiento Premium</h3>
            <p className="text-[#EA899A]">Máquinas reformer de última generación para tu práctica</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-[#EA899A] mx-auto mb-4" />
            <h3 className="text-xl font-serif text-[#EA899A] mb-2">Clases Personalizadas</h3>
            <p className="text-[#EA899A]">Grupos reducidos con atención individualizada</p>
          </div>
          <div className="text-center">
            <Calendar className="w-12 h-12 text-[#EA899A] mx-auto mb-4" />
            <h3 className="text-xl font-serif text-[#EA899A] mb-2">Horarios Flexibles</h3>
            <p className="text-[#EA899A]">Adaptados a tu rutina diaria</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="nosotras" className="py-20 bg-[#FDF6F6]">
        <div className="container mx-auto px-6 justify-center items-center">
          <h2 className="text-4xl font-serif text-[#EA899A] text-center mb-16"> Nuestras instalaciones. </h2>
          <div className="mb-12 justify-center items-center"> {/* Añadido margen inferior para separar del texto */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="mx-auto rounded-lg shadow-lg max-h-[400px] object-contain" // Ajusta max-h según necesites
            />
          </div>
        ))}
      </Slider>
      <div className="mt-12">
        <p className="text-xl text-[#DD969C] mb-6">
          En Pilates Reformer creemos que el ejercicio es más que movimiento, es una forma de cuidarte y conectar con tu cuerpo. Nuestro espacio está diseñado para que te sientas cómoda y segura mientras trabajas en tu bienestar.
        </p>
        <p className="text-xl text-[#DD969C]">
          Con instructoras certificadas y años de experiencia, te guiaremos en tu práctica de pilates para que alcances tus objetivos de forma segura y efectiva.
        </p>
      </div>
    </div>
        </div>
      </section>

      {/* Clases */}
      <section id="clases" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-[#EA899A] text-center mb-16">Nuestras Clases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FDF6F6] p-6 rounded-lg">
              <h3 className="text-xl font-serif text-[#EA899A] mb-4">Principiantes</h3>
              <p className="text-[#DD969C] mb-4">Ideal para quienes comienzan su práctica de pilates</p>
            </div>
            <div className="bg-[#FDF6F6] p-6 rounded-lg">
              <h3 className="text-xl font-serif text-[#EA899A] mb-4">Intermedio</h3>
              <p className="text-[#DD969C] mb-4">Para quienes buscan profundizar su práctica</p>
            </div>
            <div className="bg-[#FDF6F6] p-6 rounded-lg">
              <h3 className="text-xl font-serif text-[#EA899A] mb-4">Avanzado</h3>
              <p className="text-[#DD969C] mb-4">Ejercicios desafiantes para expertas</p>
            </div>
          </div>
          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#DF428E] p-6 rounded-lg">
              <h2 className="text-2xl font-serif text-[#FFFFFF] mb-4">Precios: </h2>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">1 clase - $150</h3>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">3 clases - $400 </h3>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">6 clases - $800</h3>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">10 clases - $1,300</h3>
              <h3 className="text-xl font-serif text-[#FFFFFF] mb-4">30 clases - $3,600</h3>
            </div>
            <h1 className="text-4sm font-serif text-[#EA899A] text-center mb-16">La clase se apertura a partir de tres personas </h1>
            <h3 className="text-4sm font-serif text-[#EA899A] text-center mb-16"> Nota: Cancelación con 2 dias antes (NO HAY ningún reembolso)</h3>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-[#FDF6F6]">
        <div className="container mx-auto w-[80vw] md:w-[55vw] px-6 bg-white/80 backdrop-blur-sm p-12 rounded-lg border-[#DD969C] border-2">
          <h2 className="text-4xl md:text-5xl font-serif text-[#DD969C] text-center mb-12">¡Agenda tu clase!</h2>
          <div className="max-w-md mx-auto">
              <button className="w-full bg-[#DD969C] text-white px-8 py-3 rounded-full hover:bg-[#A68977] transition">
                <a href="https://api.whatsapp.com/send?phone=527471010389&text=Hola,%20quiero%20reservar%20una%20clase…
                  ">Enviar mensaje</a>
              </button>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-[#8B6F5C]">&copy; 2025 Pilates Reformer. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/bionaturapilates?igsh=MWd3cG55d2Flcndndg==" className="text-[#8B6F5C] hover:text-[#A68977]">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/share/18wK96CDNg/?mibextid=wwXIfr" className="text-[#8B6F5C] hover:text-[#A68977]">
                  <Facebook className="w-6 h-6" />
                </a>
            </div>
          </div>
        </div>
      </footer>
      
      </>
     )}
    </div>
  );
}

export default Home;