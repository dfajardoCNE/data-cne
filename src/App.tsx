import { 
  Zap, 
  Sun, 
  FileText, 
  Atom, 
  Lightbulb, 
  BarChart3, 
} from 'lucide-react';

function App() {
  const categories = [
    {
      title: "Impulso a las",
      subtitle: "Energías Renovables",
      icon: Zap,
      color: "text-red-500",
    },
    {
      title: "Generación",
      subtitle: "Distribuida",
      icon: Sun,
      color: "text-red-500",
    },
    {
      title: "Planes y",
      subtitle: "normativas",
      icon: FileText,
      color: "text-red-500",
    },
    {
      title: "Asuntos radiológicos",
      subtitle: "y Nucleares",
      icon: Atom,
      color: "text-yellow-500",
    },
    {
      title: "Cultura de",
      subtitle: "ahorro energético",
      icon: Lightbulb,
      color: "text-red-500",
    },
    {
      title: "Monitor",
      subtitle: "Institucional",
      icon: BarChart3,
      color: "text-red-500",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[url(/Background-CNE.jpg)] bg-contain relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <header className="relative z-10 flex justify-between items-start p-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center">
              <img src="/Logo-CNE.svg" alt="CNE Logo" />
            </div>
          </div>

          <button className="bg-[#23B53E] hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2 cursor-pointer">
            <div className="text-left font-montserrat">
              <div className="text-sm font-bold">TABLEROS</div>
              <div className="text-sm">DINÁMICOS</div>
            </div>
          </button>
        </header>

        <main className="relative z-10 flex flex-col items-center justify-center px-8 py-16">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img src="/Logo-DataCNE.svg" alt="Data CNE" />
            </div>
            <p className="text-white text-lg font-medium font-montserrat">
              Conectando datos,{" "}
              <span className="font-bold">impulsando energía</span>
            </p>
          </div>

          <div className="text-center max-w-4xl mb-16">
            <p className="text-white leading-relaxed font-montserrat">
              Aquí encontrarás cifras, indicadores y recursos educativos que
              muestran cómo la <span className="font-bold">CNE</span> impulsa el
              desarrollo energético sostenible de la{" "}
              <span className="font-bold">República Dominicana</span>, de manera
              clara, accesible y cercana a ti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={index}
                  className="bg-white/95 hover:bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group font-montserrat cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`${category.color} transition-transform group-hover:scale-110`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="border-r-4 border-b-orange-700"></div>
                    <div className="text-left">
                      <div className="text-[#17447A] text-lg font-semibold">
                        {category.title}
                      </div>
                      <div className="text-[#17447A] text-lg font-bold">
                        {category.subtitle}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
