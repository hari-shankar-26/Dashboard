import React from 'react'
import './sidenav-styles.scss';

const SideNav = () => {
  return (
    <div className="px-12 py-40 d-flex flex-column justify-between align-center sidenav-container">
        <div>
        <ul>
            <li className="mb-40">
                <a className="cursor-pointer" href="#">
                    <img className='size-20' src="/assets/images/search.png" alt="search" />
                </a>
            </li>
            <li className="mb-40">
                <a className="cursor-pointer" href="#">
                    <img className='size-20' src="/assets/images/guesture.png" alt="guesture" />
                </a>
            </li>
            <li className="mb-40">
                <a className="cursor-pointer" href="#">
                    <img className='size-20' src="/assets/images/component.png" alt="component" />
                </a>
            </li>
            <li className="mb-40">
                <a className="cursor-pointer" href="#">
                    <img className='size-20' src="/assets/images/multi-msg.png" alt="multi-msg" />
                </a>
            </li>
            <li className="mb-40">
                <a className="cursor-pointer" href="#">
                    <img className='size-20' src="/assets/images/speed.png" alt="speed" />
                </a>
            </li>
            <li className="mb-40">
                <a className="cursor-pointer" href="#">
                    <img className='size-20' src="/assets/images/tele.png" alt="tele" />
                </a>
            </li>
        </ul>
        </div>
        <div className="size-35 radius-circle">
            <a className='cursor-pointer' href='#'>
                <img className="radius-circle" width={'100%'} src="/assets/images/person-1.png" alt="Profile" />
            </a>
        </div>
    </div>
  )
}

export default SideNav