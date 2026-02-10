import RecommendationCard from "./RecommendationCard"
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";


const Recommendations = () => {
    const { isLoading, error, data } = useQuery('recommendations', () =>
        axios.get('api/recommendations')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))


    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-black">About ELORA</div>
          <div className="w-full mt-5 px-2 md:px-8 pb-8">

                {isLoading ?
                    [1, 2, 3, 4].map(() => (
                        <ParagraphSkeleton className={"p-8 h-full w-full relative"} />
                    ))
                    :
                    data?.map((data, key) => (
                        <RecommendationCard key={key} data={data} />
                    ))
                }

            </div>
        </>
    )
}

export default Recommendations