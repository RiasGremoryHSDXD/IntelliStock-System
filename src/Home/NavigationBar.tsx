import '../css/NavigationBar.css'
import Dashboard from './DashBoard'
import Category from './Category'
import  Logo from '../assets/IntelliStockLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn, faChevronDown, faTableCellsLarge, faCartShopping, faReceipt, faGear} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Home(){

    const [displayPage, setDisplayPage] = useState<number>(1)

    const btn_one = () => setDisplayPage(1)
    const btn_two = () => setDisplayPage(2)

    return(
        <div className='flex flex-row'>
            <div className="home-container">
                <div className='p-2'>
                    <div className='flex flex-col h-[15vh] gap-2'>
                        <div className='flex gap-10'>
                            <img  className='w-[20%] box-border'  src={Logo} alt="IntelliStock Logo" />
                            <p className='text-3xl'>IntelliStock</p>
                        </div>
                        <p className='text-md text-center'>Intelligent Inventory, Smarter Business</p>
                    </div>
                </div>

                <div className='navigation-container'>

                    <div className='dash-board-container'>
                        <FontAwesomeIcon size='2x' icon={faChartColumn}/>
                        <p>Dashboard</p>
                    </div>

                    <div className='category-container'>
                        <FontAwesomeIcon size='2x' icon={faTableCellsLarge}/>
                        <p>Category</p>
                        <FontAwesomeIcon size='2x' icon={faChevronDown}/>
                    </div>

                    <div className='purchase-container'>
                        <FontAwesomeIcon size='2x' icon={faCartShopping}/>
                        <p>Purchase</p>
                        <FontAwesomeIcon size='2x' icon={faChevronDown}/>
                    </div>

                    <div className='expense-container'>
                        <FontAwesomeIcon size='2x' icon={faReceipt}/>
                            <p>Expense</p>
                        <FontAwesomeIcon size='2x' icon={faChevronDown}/>
                    </div>

                    <div className="setting-container">
                        <FontAwesomeIcon size='2x' icon={faGear}/>
                            <p>Setting</p>
                        <FontAwesomeIcon size='2x' icon={faChevronDown}/>
                    </div>
                </div>
            </div>

            {displayPage === 1 && <Dashboard />}
            {displayPage === 2 && <Category />}

            <button className='border-2 p-2 w-fit h-fit' onClick={btn_one}>DashBoard</button>
            <button className='border-2 p-2 w-fit h-fit' onClick={btn_two}>Category</button>
        </div>
    )
}

export default Home