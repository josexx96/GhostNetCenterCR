import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Video de fondo */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
        src="/fondo.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Capa oscura sobre el video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Chispitas decorativas */}
      <div
        className="absolute top-0 left-0 w-full h-full z-5 pointer-events-none"
        aria-hidden="true"
      >
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="gnc-sparkle absolute w-[2px] h-[2px] bg-white rounded-full opacity-70 animate-gnc-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Burbujas decorativas */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="gnc-bubble absolute w-3 h-3 bg-white rounded-full opacity-20 animate-gnc-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Logos y nombre */}
      <div className="relative z-20 text-center flex flex-col items-center gap-4">
        {/* Logo redondo */}
        <Image
          src="/logo3.png"
          alt="Logo GhostNetCenterCR"
          width={356}
          height={356}
          className="object-contain drop-shadow-2xl opacity-80 animate-fadeInSoft"
          style={{
            animationDelay: "0.3s",
            animationFillMode: "both",
            opacity: 0,
            height: "auto",
          }}
          priority
        />

        {/* Nombre del proyecto */}
        <Image
          src="/logo5.png"
          alt="GhostNetCenterCR"
          width={700}
          height={200}
          className="object-contain animate-fadeInRGB"
          style={{
            animationDelay: "0.8s",
            animationFillMode: "both",
            opacity: 0,
            height: "auto",
            width: "100%",
          }}
          priority
        />
      </div>

      {/* Texto descriptivo debajo del logo */}
      <p
        className="relative z-10 mt-10 text-gray-300 text-center text-base sm:text-lg hover:text-[rgb(0,255,255)] hover:drop-shadow-[0_0_10px_rgb(0,255,255)] transition duration-300 animate-fadeInSoft"
        style={{ animationDelay: "2.3s" }}
      >
        Centro de innovación en ciberseguridad, desarrollo y soluciones inteligentes en la nube.
      </p>

      {/* Botones Ver más y Entrar */}
      <div
        className="relative z-10 mt-6 flex flex-col sm:flex-row items-center gap-4 animate-fadeInSoft"
        style={{
          animationDelay: "3s",
          animationFillMode: "both",
          opacity: 0,
        }}
      >
        <button className="px-6 py-3 rounded-xl border border-cyan-400 bg-white/10 backdrop-blur-md text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] hover:border-cyan-300 hover:bg-white/20">
          Ver servicios
        </button>
        <button className="px-6 py-3 rounded-xl border border-white/40 bg-white/10 backdrop-blur-md text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:border-white/60 hover:bg-white/20">
          Entrar
        </button>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 mt-10 text-center text-sm text-gray-400 transition duration-300 hover:text-cyan-400 hover:drop-shadow-lg animate-fadeInSoft"
        style={{ animationDelay: "2.2s" }}
      >
        © 2025 <span className="font-semibold">GhostNetCenterCR</span>. Todos los derechos reservados.
      </footer>
    </div>
  );
}
