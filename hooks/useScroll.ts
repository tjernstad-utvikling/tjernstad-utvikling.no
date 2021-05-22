import { useEffect, useState } from 'react';

const isBrowser = typeof window !== `undefined`;

interface ScrollPosition {
    top: number;
    left: number;
}

function getScrollPosition(): ScrollPosition {
    if (isBrowser) {
        let bodyRect = document.body.getBoundingClientRect();
        return { top: bodyRect.top, left: bodyRect.left };
    }
    return { top: 0, left: 0 };
}

export const useScroll = () => {
    const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);
    const [position, setScrollPosition] = useState<ScrollPosition>(
        getScrollPosition()
    );

    useEffect(() => {
        let requestRunning: number | null = null;
        function handleScroll() {
            if (isBrowser && requestRunning === null) {
                let position = getScrollPosition();
                requestRunning = window.requestAnimationFrame(() => {
                    setScrollPosition((prevPosition) => {
                        prevPosition.top > position.top
                            ? setIsScrollingDown(true)
                            : setIsScrollingDown(false);
                        return position;
                    });
                    requestRunning = null;
                });
            }
        }

        if (isBrowser) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return {
        scrollTop: position.top,
        scrollLeft: position.left,
        isScrollingDown
    };
};
