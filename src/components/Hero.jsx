import { useRef, useEffect } from "react";

export default function Hero() {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 3;
  }, []);

  return (
    <>
      <section id="hero">
        <div>
          <h1>MacBook Pro</h1>
          <img src="/title.png" alt="MacBook Title" />
        </div>

        <video
          ref={videoRef}
          src="/videos/hero.mp4"
          autoPlay
          muted
          playsInline
        ></video>

        <button>Purchase</button>
        <p>From $1899 or $159/mo for 12 months</p>
      </section>
    </>
  );
}
