export default function HeroSection() {
  return (
    <section className=" relative scroll-mt-20 w-full h-[600px]  overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
