export default function PopUp({ isOpen, onClose }) {
  return <>
  {/* ===== Overlay Menu ===== */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
  
            {/* dark overlay */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
  
            {/* menu card */}
            <div className="
              relative w-[88%] max-w-sm
              bg-[#f3efe6]
              rounded-2xl
              shadow-xl
              p-6
            ">
  
              {/* header */}
              <div className="text-center mb-4">
                <p className="text-xl font-semibold text-orange-600">
                  Symphony
                </p>
                <p className="text-sm text-gray-600">
                  Music Institute
                </p>
              </div>
  
              {/* close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-2xl text-gray-700 hover:scale-110 transition"
              >
                <IoClose />
              </button>
  
              {/* menu list */}
              <div className="divide-y">
                {menu.map((item, i) => {
                  const active = location.pathname === item.path;
  
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        navigate(item.path);
                        setOpen(false);
                      }}
                      className={`
                        w-full py-4 text-lg rounded-md transition
                        hover:bg-orange-50 hover:text-orange-600 hover:scale-[1.02]
                        active:scale-[0.98]
                        ${active
                          ? "text-orange-600 font-semibold"
                          : "text-gray-900"}
                      `}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
  
  </>;
}
