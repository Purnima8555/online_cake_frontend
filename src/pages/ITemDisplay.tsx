import {useMutation, useQuery} from "react-query";
import axios from "axios";
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export interface ItemInterface{
    description:string,
    id:number,
    itemName:string,
    price:string,
    quantity:string
}

const ItemDisplayColumnHelper=createColumnHelper<ItemInterface>();



function ItemDisplay() {

    const navigate=useNavigate();

    const {data,refetch} = useQuery({
        queryKey: "GET_DATA",
        queryFn() {
            return axios.get("http://localhost:8080/Item/getAll")
        }
    })


    const deleteApi=useMutation({
        mutationKey:["DELETE_ITEM"],
        mutationFn(id:number){

        return axios.delete("http://localhost:8080/Item/deleteById/"+id);
        },
        onSuccess(){
            refetch()
        }
    })




    const columns=[
        ItemDisplayColumnHelper.accessor("itemName",{header:"Item Name"}),
        ItemDisplayColumnHelper.accessor("price",{header:"Item Price"}),
        ItemDisplayColumnHelper.accessor("quantity",{header:"Item Quantity"}),
        ItemDisplayColumnHelper.display({"header":"Action",cell:({row})=>{
            return <>
                <button onClick={()=>{
              navigate("/itemForm/"+row?.original?.id)
                     }}>Edit</button>

                <button onClick={()=>{
                    deleteApi.mutate(row?.original?.id)
                    console.log(row?.original?.id)
                }}>delete</button>


                <button>view</button>

            </>
            }})
    ]
    let store;
    if(data){
        store=data?.data
    }else{
        store=[]
    }

    const table=useReactTable({
        data:data?data?.data:[],
        columns,
        getCoreRowModel: getCoreRowModel(),
    })


    return <>
        With useReactTable
        <table border={1}>
            <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <th key={header.id}>
                            {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>

            <tbody>
            {table.getRowModel().rows?.map((row) => (
                <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>

        </table>
    </>
}


export default ItemDisplay;