import MostSoldProduct from './MostSoldProduct/MostSoldProduct'
import MostReturnedProduct from './MostReturedChart/MostReturedChart'
import HighestEarningList from './HighestEarningList/HighestEarningList'
import IncomeChart from './IncomeChart/IncomeChart'

function Dashboard(){
    return(
        <div className="bg-red-300">
            <MostSoldProduct/>
            <MostReturnedProduct/>
            <HighestEarningList/>
            <IncomeChart/>
        </div>
    )
}

export default Dashboard