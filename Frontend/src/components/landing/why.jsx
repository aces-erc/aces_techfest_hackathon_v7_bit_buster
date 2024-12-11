import React from 'react'
import Box from './box'

const reasons = [
    {title: "Save Lives", description: "You can save up to 3 lives with a single donation."},
    {title: "High Demand", description: "Blood is needed every 2 seconds for various medical procedures."},
    {title: "Be a Hero", description: "Less than 10% of eligible people donate blood yearly. Be part of this heroic group!"},
    {title: "Unique Resource", description: "Blood cannot be manufactured; it can only come from generous donors like you."},
    {title: "Health Benefits", description: "Regular blood donation can reduce iron levels and lower the risk of certain health issues."},
    {title: "Free Health Screening", description: "Every time you donate, your blood is tested for various conditions, giving you insights into your health."},
    {title: "Support Life-Saving Research", description: "Donated blood can also be used for medical research to improve treatments and discover cures."},
    {title: "Help Rare Blood Groups", description: "Rare blood types are especially needed, and your donation could be crucial for someone with a rare type."},
];


const Why = () => {
  return (
    <div className='flex flex-col w-full'>
        <div>
            <h1 className='text-4xl font-semibold'>
                <span className='text-blue-900'>Why</span> donate blood
            </h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {reasons.map((reason) => {
                    return(
                            <Box title={reason.title} description={reason.description} />
                        )
                })}
        </div>
        <div></div>
    </div>
  )
}

export default Why