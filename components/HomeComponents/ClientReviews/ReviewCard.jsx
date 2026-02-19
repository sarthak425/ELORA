import { FaStar } from 'react-icons/fa'
import CardLayout from '../../Common/CardLayout'

const ReviewCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="flex flex-col justify-between w-80 md:w-96 h-full p-4 md:p-8 bg-gradient-to-r from-[#fdf2e9] via-[#f7e8d8] to-[#f2dcc8] border border-[#f3e2c9] rounded-xl shadow-sm">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-amber-900 font-bold">{data?.clientName}</span>
                        <div className="text-xs text-[#5a3c1a] flex items-center gap-1 ">
                            <FaStar />
                            <em>{data?.clientLocation}</em>
                        </div>
                    </div>
                    <span className='text-sm text-[#6a4b2a] font-light'>{data?.clientSource}</span>
                </div>
                <div className="text-sm mt-2 text-[#5a3c1a] font-normal leading-relaxed">
                    {data.clientReview}
                </div>
                <div className="flex gap-2 items-center justify-center bg-amber-100/90 w-6/12 md:w-5/12 text-xs text-amber-900 rounded-full p-2 mt-4 shadow-sm border border-white/40">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
        </CardLayout>
    )
}

export default ReviewCard
