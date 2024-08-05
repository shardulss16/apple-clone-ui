import { BagSimple, MagnifyingGlass } from 'phosphor-react'
import React from 'react'

const linksList = [
    {id: 1, name: 'Store'},
    {id: 2, name: 'Mac'},
    {id: 3, name: 'iPad'},
    {id: 4, name: 'Watch'},
    {id: 5, name: 'Vision'},
    {id: 6, name: 'Airpods'},
    {id: 7, name: 'TV & Home'},
    {id: 8, name: 'Entertainment'},
    {id: 9, name: 'Accessories'},
    {id: 10, name: 'Support'},
]

const Navbar = () => {
  return (
    <nav className='styled-navbar'>
        <div className='navbar-container'>
            <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
            </svg>
            {
                 linksList.map((link) =>(
                    <div key={link.id}>
                        {link.name}
                    </div>
                )) 
             }

             <MagnifyingGlass size={20} />
             <BagSimple size={20} />
        </div>
    </nav> 
  )
    

}

export default Navbar