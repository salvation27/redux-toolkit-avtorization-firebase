// import "./App.css";
import { useState} from 'react'
import {useGetGoodsQuery,useAddProductMutation,useDeleteProductMutation} from '../../store/slices/goodsApi'
import Post  from '../Post/Post'



function AddItem() {
    
    

const [newProduct,setNewProduct] = useState('')
const [newPrice,setNewPrice] = useState('')

const {data=[],isLoading} = useGetGoodsQuery()
const [addProduct] = useAddProductMutation()
// const [addProduct,{isError}] = useAddProductMutation()
const [deleteProduct] = useDeleteProductMutation()

const hanelAddProduct = async () => {
 if(newProduct) {
   await addProduct({
     name:newProduct,
     price:newPrice,
   }).unwrap()
   setNewProduct('')
   setNewPrice('')
 }
}
const handelDeleteProduct = async (id)=>{
   await deleteProduct(id).unwrap()
}



if(isLoading) return <h1>Loading...</h1>



  return (
    <div className="Apps">
      <div className="container">
    <input type="text" value={newProduct} onChange={(e)=>setNewProduct(e.target.value)}/>
    <input type="text" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)}/>
    <button onClick={hanelAddProduct}>ADD PRODUCT</button>
        {
          data.map(item=> <Post key={item.id} item={item} none={handelDeleteProduct}  />)
        }
        <div>
    
      </div>
      </div>
    </div>
  );
}

export default AddItem;