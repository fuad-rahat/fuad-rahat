import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState, useEffect } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    if (!isMobile) {
      setExpanded((curr) => !curr);
    }
  };

  return (
    <aside className={`h-screen fixed md:relative z-20 ${expanded ? 'w-64' : 'w-16'}`}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm transition-width duration-300">
        <div className="p-4 flex justify-between items-center">
          <p className={`overflow-hidden transition-all text-2xl font-semibold ${expanded ? "w-32" : "w-0"}`}>Fuad Rahat</p>
          <button
            onClick={handleToggle}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div onClick={handleToggle} className="border-t flex p-3">
          <img
            src="/formal.png"
            alt=""
            className="w-11 h-11 rounded-full bg-green-400"
          />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <div className="leading-4">
              <h4 className="font-semibold">Md. Muhtasim Fuad Rahat</h4>
              <span className="text-xs text-gray-600">rahatmf@gmail.com</span>
            </div>
           
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active ? "bg-green-400 text-white" : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
        {text}
      </span>
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`} />
      )}
      {!expanded && (
        <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
          {text}
        </div>
      )}
    </li>
  );
}
