import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    gsap.from([h11.current, h12.current, h13.current, myimageref.current], {
      opacity: 0,
      y: 40,
      duration: 0.8, // smoother speed
      stagger: 0.2, // visible delay
      ease: "power3.out", // smooth professional feel
    });
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1 ref={h11} className="text-4xl font-bold">
          Hi 👋 <br /> My Name is
        </h1>

        <h1 ref={h12} className="text-4xl text-gradient font-bold">
          {name}
        </h1>

        <h2 ref={h13} className="text-3xl font-bold">
          {tagline}
        </h2>
      </div>

      <div className="mt-5 md:mt-0">
        <img
          ref={myimageref}
          src={img}
          alt="profile"
          className="w-64 h-64 rounded-full object-cover mx-auto"
        />
      </div>
    </main>
  );
}

export default Home;
