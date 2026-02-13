import React from 'react'
import CardLayout from '../Common/CardLayout'

const Edu_Card = ({ data }) => {
    return (
        <CardLayout className='keepItEmpty'>
            <div className="card_stylings transition px-8 py-10">
                <div className="flex justify-between">
                    <div className="flex-initial text-[20px] text-amber-900 font-medium">{data.title}</div>
                    
                </div>
                <div className="text-[17px] text-LightGray font-normal mt-1 whitespace-pre-line">
                    {data.degree}
                </div>
                <div className="text-LightGray text-[15px] font-normal mt-4 whitespace-pre-line">
                    {data.detail}
                </div>
            </div>
        </CardLayout>
    )
}

export default Edu_Card
