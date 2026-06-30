import { useEffect, useRef } from "react";
import "./Orb.css";

export default function Orb({
    hue = 270,
    hoverIntensity = 0.5,
    rotateOnHover = true,
    forceHoverState = false,
}) {
    const orbRef = useRef(null);
    const isHovered = useRef(forceHoverState);

    useEffect(() => {
        const orb = orbRef.current;
        if (!orb) return;

        let animationId;
        let currentRotation = 0;
        let targetRotation = 0;
        let currentScale = 1;
        let targetScale = 1;
        let glowOpacity = 0.6;
        let targetGlowOpacity = 0.6;

        const handleMouseEnter = () => {
            isHovered.current = true;
            targetScale = 1 + hoverIntensity * 0.3;
            targetGlowOpacity = 0.9;
        };

        const handleMouseLeave = () => {
            isHovered.current = false;
            targetScale = 1;
            targetGlowOpacity = 0.6;
        };

        orb.addEventListener("mouseenter", handleMouseEnter);
        orb.addEventListener("mouseleave", handleMouseLeave);

        const animate = () => {
            if (isHovered.current && rotateOnHover) {
                targetRotation += 0.8;
            }

            currentRotation += (targetRotation - currentRotation) * 0.05;
            currentScale += (targetScale - currentScale) * 0.08;
            glowOpacity += (targetGlowOpacity - glowOpacity) * 0.06;

            orb.style.transform = `rotate(${currentRotation}deg) scale(${currentScale})`;
            orb.style.setProperty("--glow-opacity", glowOpacity);

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
            orb.removeEventListener("mouseenter", handleMouseEnter);
            orb.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [hoverIntensity, rotateOnHover]);

    return (
        <div
            className="orb-container"
            ref={orbRef}
            style={{ "--hue": hue }}
        >
            <div className="orb-core" />
            <div className="orb-glow" />
            <div className="orb-ring orb-ring-1" />
            <div className="orb-ring orb-ring-2" />
            <div className="orb-ring orb-ring-3" />
        </div>
    );
}
