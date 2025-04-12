import '../css/NavigationBar.css'
import Dashboard from './DashBoard/DashBoard'
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

                    <button className='dash-board-container' onClick={btn_one}>
                        <FontAwesomeIcon size='2x' icon={faChartColumn}/>
                        <p>Dashboard</p>
                    </button>

                    <button className='category-container' onClick={btn_two}>
                        <FontAwesomeIcon size='2x' icon={faTableCellsLarge} className='border-1'/>
                        <p className='border-1'>Category</p>
                        <FontAwesomeIcon className='border-1' size='2x' icon={faChevronDown}/>
                    </button>

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

        </div>
    )
}

export default Home