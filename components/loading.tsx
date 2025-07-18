export default function Loading() {
  return (
    <div className="fixed inset-0 bg-navy-dark flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-5xl font-light text-white mb-2">
            <span className="text-gold">Prashi</span>group
          </div>
          <div className="text-lg text-white/70">Your Heart's Destination</div>
        </div>

        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto"></div>

        <div className="mt-8 relative w-48 h-1 bg-navy-light mx-auto overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-gold animate-pulse w-full"></div>
        </div>
      </div>
    </div>
  )
}
