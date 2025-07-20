export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-t-purple-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div
            className="absolute inset-2 border-4 border-t-transparent border-r-pink-500 border-b-transparent border-l-transparent rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1s" }}
          ></div>
          <div
            className="absolute inset-4 border-4 border-t-transparent border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin"
            style={{ animationDuration: "1.5s" }}
          ></div>
        </div>
        <p className="mt-4 text-white text-lg font-medium">Loading ...</p>
      </div>
    </div>
  )
}
