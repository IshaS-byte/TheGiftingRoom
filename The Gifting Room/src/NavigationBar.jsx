import React from 'react'
import imageLogo from './assets/logo.png';
import './NavigationBar.css';
import { NavLink, Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
     <>
        <div className = 'navbar'>
            <img src = {imageLogo} alt = 'The Gifting Room logo' className = 'logo' /> 
            <h1 className = 'title'>The Gifting Room</h1>
            <button className='registration'>Sign Up</button>
            <button className='registration'>Log In</button>
        </div>
        <nav className='containerNav'>
            <ul className='controls'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li className='home-gift'><NavLink to ='/gifts'>Gifts</NavLink>
                    <div className='gift-list'>
                    <h5>Relationship</h5>
                        <Link>Boys</Link>
                        <Link>Girls</Link>
                        <Link>Men</Link>
                        <Link>Women</Link>
                        <Link>Friend</Link>
                        <Link>Boyfriend/Husband</Link>
                        <Link>Girlfriend/Wife</Link>
                        <Link>Son</Link>
                        <Link>Son-in-law</Link>
                        <Link>Daughter</Link>
                        <Link>Daughter-in-law</Link>
                        <Link>Brother</Link>
                        <Link>Brother-in-law</Link>
                        <Link>Sister</Link>
                        <Link>Sister-in-law</Link>
                        <Link>Father</Link>
                        <Link>Father-in-law</Link>
                        <Link>Mother</Link>
                        <Link>Mother-in-law</Link>
                        <Link>Professional Relationships</Link>
                            
                    <h6>Personal Celebrations</h6>
                        <Link>Baby Celebrations</Link>
                        <Link>Birthdays</Link>
                        <Link>Engagements</Link>
                        <Link>First Day</Link>
                        <Link>Graduations</Link>
                        <Link>Housewarming</Link>
                        <Link>Anniversaries</Link>
                        <Link>Promotions</Link>
                        <Link>Retirement</Link>
                        <Link>Weddings</Link>

                    <h6>Holidays/Religion Events</h6>
                        <Link>Christmas</Link>
                        <Link>Diwali</Link>
                        <Link>Easter</Link>
                        <Link>Eid</Link>
                        <Link>Hanukkah</Link>
                        <Link>New Year's</Link>
                        <Link>Thanksgiving</Link>

                    <h6>Romantic Occasions</h6>
                        <Link>Anniversary</Link>
                        <Link>Proposal</Link>
                        <Link>Valentine's Day</Link>

                    <h6>Pets</h6>
                        <Link>Birds</Link>
                        <Link>Cats</Link>
                        <Link>Dogs</Link>
                        <Link>Ferret</Link>
                        <Link>Small Animals</Link>
                        <Link>Hedgehog</Link>
                        <Link>Lizards</Link>
                        <Link>Rabbit</Link>
                        <Link>Snakes</Link>        
                        <Link>Other animals</Link>

                    <h6>Others</h6>
                        <Link>Apologies</Link>
                        <Link>Care Packages</Link>
                        <Link>Children's Day</Link>
                        <Link>Condolences</Link>
                        <Link>Friendship Day</Link>
                        <Link>Get Well Soon</Link>
                        <Link>Halloween</Link>
                        <Link>Milestones</Link>
                        <Link>Reunion</Link>
                    </div></li>
                    <li><NavLink to='/planwithai'>PlanWithAI</NavLink></li>
                    <li><NavLink to='reminders'>Reminders</NavLink></li>
                    <li><NavLink to='/customerservice'>Customer Service</NavLink></li>
                </ul>
               
            </nav>
        </>
  )
}

export default NavigationBar
