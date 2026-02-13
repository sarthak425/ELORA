import React from 'react'
import CardLayout from '../Common/CardLayout'

const Exp_Card = ({ data }) => {
    return (
        <CardLayout>
            <div className="card_stylings transition px-8 py-10 ">
                <div className="flex-initial text-[20px] text-amber-900 font-medium">{data.title}</div>
                <div className="text-sm text-LightGray font-normal italic mt-1 ">
                </div>
           
                <div className="text-LightGray text-[15px] font-normal mt-4 text-justify whitespace-pre-line">
                    {data.desc}
                </div>
               
            </div>
        </CardLayout>
    )
}

export default Exp_Card
