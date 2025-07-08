export default function Loading() {
  return (
    <div className="min-h-screen bg-vintage-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-vintage-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-vintage-cream text-lg">Loading...</p>
      </div>
    </div>
  );
}