import React from 'react';
import './mobile-switch-bar.scss';

const MobileSwitchBar = () => {
  return (
    <>
        <ul className='d-flex align-center'>
            <li className='flex-1'>
                <a className="cursor-pointer d-flex justify-center align-center px-12 py-20 mobile-tab" href="#">
                    <img className='size-20' src="/assets/images/guesture.png" alt="guesture" />
                </a>
            </li>
            <li className='flex-1'>
                <a className="cursor-pointer d-flex justify-center align-center px-12 py-20 mobile-tab" href="#">
                    <img className='size-20' src="/assets/images/component.png" alt="component" />
                </a>
            </li>
            <li className='flex-1'>
                <a className="cursor-pointer d-flex justify-center align-center px-12 py-20 mobile-tab" href="#">
                    <img className='size-20' src="/assets/images/multi-msg.png" alt="multi-msg" />
                </a>
            </li>
        </ul>
        </>
  )
}

export default MobileSwitchBar;