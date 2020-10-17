import { useEffect, useRef } from "react";

export const useIntersectionObserver = (target, options, handler) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) handler(entry);
            });
        }, options);

        target.forEach(item => observer.observe(item.current));
        return () => observer && observer.disconnect();

    },[target, options]);

    // experiment
    return {
        ref: useRef()
    }
}