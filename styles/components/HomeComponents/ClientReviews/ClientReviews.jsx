import ReviewCard from "./ReviewCard"
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import { useEffect, useRef } from "react";



const ClientReviews = () => {
    const containerRef = useRef(null);
    const targetCardRef = useRef(null);
    const hasAutoScrolledAtEndRef = useRef(false);
    const autoScrollDirectionRef = useRef(1);

    const { isLoading, error, data } = useQuery('review', () =>
        axios.get('api/review')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    useEffect(() => {
        if (!data?.length || !containerRef.current || !targetCardRef.current) return;

        const container = containerRef.current;
        const endThreshold = 40;

        const handleHorizontalScroll = () => {
            const reachedEnd =
                container.scrollLeft + container.clientWidth >= container.scrollWidth - endThreshold;

            if (reachedEnd && !hasAutoScrolledAtEndRef.current) {
                hasAutoScrolledAtEndRef.current = true;
                targetCardRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'end',
                });
            }

            if (!reachedEnd) {
                hasAutoScrolledAtEndRef.current = false;
            }
        };

        const handleWheelScroll = (event) => {
            if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

            container.scrollLeft += event.deltaY;
            event.preventDefault();
        };

        container.addEventListener('scroll', handleHorizontalScroll, { passive: true });
        container.addEventListener('wheel', handleWheelScroll, { passive: false });
        return () => {
            container.removeEventListener('scroll', handleHorizontalScroll);
            container.removeEventListener('wheel', handleWheelScroll);
        };
    }, [data]);

    useEffect(() => {
        if (!data?.length || !containerRef.current) return;

        const container = containerRef.current;
        const intervalId = setInterval(() => {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            if (maxScrollLeft <= 0) return;

            if (container.scrollLeft >= maxScrollLeft - 1) {
                autoScrollDirectionRef.current = -1;
            } else if (container.scrollLeft <= 1) {
                autoScrollDirectionRef.current = 1;
            }

            container.scrollLeft += autoScrollDirectionRef.current;
        }, 20);

        return () => clearInterval(intervalId);
    }, [data]);


    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-black">OUR HERBAL SOAP RANGE</div>
            <div ref={containerRef} className="overflow-x-auto w-full grid  justify-items-center grid-flow-col gap-4 px-2 md:px-8 pt-2 pb-4">

                {
                    isLoading ?
                        [1, 2, 3, 4, 5].map(() => (
                            <ParagraphSkeleton className="w-80 md:w-96 h-full p-4 md:p-8" />
                        ))
                        :
                        data?.map((data, key) => (
                            <div key={key} ref={data?.id === 14 ? targetCardRef : null}>
                                <ReviewCard data={data} />
                            </div>
                        ))
                }

            </div>

        </>
    )
}

export default ClientReviews
