import { useState } from "react";
import { Line } from "react-chartjs-2";
import { IncomeChartData } from './RetieveData'
import 'chart.js/auto'

export default function IncomeChart(){
    
    const [IncomeChart] = useState({
        labels: IncomeChartData.map((data) => data.month),
        datasets:[{
            label: 'Montly Income',
            data: IncomeChartData.map((data) => data.total_income)
        }]
    })
    return(
        <div>
            <Line data={IncomeChart} />
        </div>
    )
}