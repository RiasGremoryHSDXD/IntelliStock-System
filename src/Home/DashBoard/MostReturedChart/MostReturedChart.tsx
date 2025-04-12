import { useState } from "react";
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';
import { MostReturnedProducts } from "./RetieveData";


export default function MostReturnedProduct(){
    const [mostReturedProduct] = useState({
        labels: MostReturnedProducts.map( (data) => data.product_name),
        datasets:[{
            label: 'Returned Product',
            data: MostReturnedProducts.map((data) => data.product_returned)
        }]
    })

    return(
        <Pie data={mostReturedProduct}/>
    );
}