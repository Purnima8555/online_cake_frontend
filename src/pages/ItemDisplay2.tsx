import {useQuery} from "react-query";
import axios from "axios";


function ItemDisplay2() {

    const {data} = useQuery({
        queryKey: "GET_DATA",
        queryFn() {
            return axios.get("http://localhost:8080/Item/getAll")
        }
    })



    return <>
        {/*With Out useReactTable*/}

        <table border={1}>
            <thead>
            <tr>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Item Quantity</th>
            </tr>
            </thead>
            <tbody>
            {
                data?.data?.map(i=>{
                return (
                <tr>
                    <td>{i.itemName}</td>
                    <td>{i.price}</td>
                    <td>{i.quantity}</td>
                </tr>
                )
            })

            }
            </tbody>
        </table>
    </>
}


export default ItemDisplay2;