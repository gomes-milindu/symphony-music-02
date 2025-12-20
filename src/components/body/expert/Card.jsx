import React from 'react'

function Card(props) {
  return (

              <div className='w-full  rounded-3xl
                  border border-[#C87C03] flex
                  flex-col items-center justify-center
                  shadow-[0px_2px_12px_0px_#00000026] gap-[24px]'>

                  <div className="w-16 h-16 rounded-full bg-[#FFC107] flex items-center justify-center">
                      <img
                        src={props.icon}
                        alt="icon"
                        className="w-[30px] h-[30px] "
                      />
                  </div>

                    <div className="flex flex-col items-center text-center gap-[18px]">
                      <h2 className="text-[24pt] font-secondary font-semibold text-[#0A0A0A] leading-[30px]">
                        {props.topic}
                      </h2>
                      <p className="text-[24px] font-inter text-[#454545] leading-9">
                        {props.para}
                      </p>
                    </div>
              </div>
        
  )
}

export default Card
