import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function ParticlesColorjs(){
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        background: {
          color: {
            value: "#90cdf4",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              //mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "bottom",
            enable: true,
            random: false,
            speed: 2,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "image",
            images : [
                {
                    src: "https://i.ibb.co/HGFX0dt/1.png",
                },
                {
                    src: "https://i.ibb.co/1GWf8nx/2.png",
                },
                {
                    src: "https://i.ibb.co/JK3WFBB/3.png",
                },
                {
                    src: "https://i.ibb.co/j5x9m2q/4.png",
                },
                {
                    src: "https://i.ibb.co/phwhGmT/5.png",
                },
                {
                    src: "https://i.ibb.co/sj6fB9f/6.png",
                },
                {
                    src: "https://i.ibb.co/N74tRvZ/7.png",
                },
                {
                    src: "https://i.ibb.co/Mcbcjwb/8.png",
                },
                {
                    src: "https://i.ibb.co/9YwG0pb/balloon-png.png",
                },
                {
                  src: "https://i.ibb.co/SVngKRg/10.png",
                },
            ],
          },
          size: {
            value: 15,
          },
          links: {
            enable: false
          }
        },
        detectRetina: true,
      }}
    />
  );
};

