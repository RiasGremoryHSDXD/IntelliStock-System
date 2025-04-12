import { useState } from "react";
import { Pie } from "react-chartjs-2";
import { HighestEarningListData } from './RetieveData'
import 'chart.js/auto'

export default function HighestEarningList(){
    
    const [HighestEarningList] = useState({
        labels: HighestEarningListData.map((data) => data.seller_name),
        datasets:[{
            label: 'Employee Name',
            data: HighestEarningListData.map((data) => data.total_sales)
        }]
    })
    return(
        <Pie data={HighestEarningList}/>
    )
}