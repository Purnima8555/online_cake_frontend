import {useForm} from "react-hook-form";
import {useMutation, useQuery} from "react-query";
import axios from "axios";
import {useParams} from "react-router-dom";

function ItemForm(){

    const {pk_id} = useParams();

const {data:dataByID}=useQuery({
    queryKey:"GET_BY_ID",
    queryFn(){
        return axios.get("http://localhost:8080/Item/getById/" + pk_id)
    },enabled:!!pk_id
})

    console.log(dataByID?.data)

    const saveData=useMutation({
        mutationKey:"SAVEDATA",
        mutationFn:(requestDAta:any)=>{
            console.log(requestDAta)
            return axios.post("http://localhost:8080/Item/save",requestDAta)
    }
    });

    const {register
        ,handleSubmit,
        formState
    }= useForm({
        defaultValues:pk_id?dataByID?.data:{},
        values:pk_id?dataByID?.data:{},
    });

    const {errors}=formState;

    const onSubmit=(values:any)=>{
        saveData.mutate(values)
    }
    return (
        <>
       <form onSubmit={handleSubmit(onSubmit)}>
           <div>
               <label>Item name</label>
               <input type="text" placeholder={"item name"} {...register("itemName",{required:"item name is required"})}/>
           <p>{errors?.itemName?.message}</p>
           </div>
           <div>
               <label>Item price</label>
               <input type="text" placeholder={"item price"} {...register("price",{required:"item price is required"})}/>
               <p>{errors?.price?.message}</p>

           </div>
           <div>
               <label>Item quantity</label>
               <input type="text" placeholder={"item quantity"} {...register("quantity",{required:"item quantity is required"})}/>
               <p>{errors?.quantity?.message}</p>

           </div>
           <div>
               <label>Item description</label>
               <input type="text" placeholder={"item description"} {...register("description",{required:"item description is required"})}/>
               <p>{errors?.description?.message}</p>

           </div>

           <div>
               <input type={"submit" } value={"Add item"}/>
           </div>
       </form>
        </>
    )
}

export default ItemForm;