function GridOverlay() {
  // We don't need real content, just columns
  const cols = Array.from({ length: 12 }, (_, i) => i); // max (desktop) count

  return (
    <div className="fixed inset-0 z-100 pointer-events-none">
      {/* page width container */}
      <div className="w-full h-full flex justify-center">
        <div className="w-full h-full max-w-7xl px-4">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 h-full gap-x-2">
            {cols.map((i) => (
              <div key={i} className="bg-pink-200/30" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridOverlay;
