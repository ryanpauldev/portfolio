import React from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Use loadSlim for smaller bundle size
import type { Engine } from "@tsparticles/engine"; // Correct type import for v3.x.x
import type { ISourceOptions } from "@tsparticles/engine"; // Correct type import for v3.x.x

interface ParticlesBackgroundProps {
    theme: string; // Add a theme prop
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ theme }) => {
    const particlesInit = async (main: Engine) => {
        await loadSlim(main); // Use loadSlim for v3.x.x
    };

    // Define light and dark mode configurations
    const options: ISourceOptions = {
        background: {
            color: {
                value: theme === "dark" ? "#000000" : "#ffffff", // Dynamic background color
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
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
                value: theme === "dark" ? "#ffffff" : "#000000", // Dynamic particle color
            },
            links: {
                color: theme === "dark" ? "#ffffff" : "#000000", // Dynamic link color
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    value_area: 800, // Use `value_area` instead of `area` for v3.x.x
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
        />
    );
};

export default ParticlesBackground;