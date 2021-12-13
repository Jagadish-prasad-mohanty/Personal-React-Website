import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import IndivisualProduct from './IndivisualProduct.js/IndivisualProduct'
import Spinner from '../UI/Spinner/Spinner';
function Products() {
    // const products= useSelector(state=>state.products);
    let [products,setProducts]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    

    useEffect( () => {
        const fetchMeals= async ()=>{
        const response=await fetch("https://reactpersonalproject-default-rtdb.firebaseio.com/Products.json");
        const data=await response.json();
        setIsLoading(false);
        return data
        }
        setIsLoading(true)
        fetchMeals().then((data)=>{
            const fetchedProducts=[];
            for (let key in data ){
                fetchedProducts.push({
                    id:key,
                    name:data[key].name,
                    price:data[key].price,
                    image:data[key].image,
                    hotelName:data[key].hotelName,
                    isFev:data[key].isFev
                })
            }
            setProducts(fetchedProducts)
        });
    }, [])
    const productItems= products.map(item=><IndivisualProduct key={item.id} id={item.id} name={item.name} price={item.price} imgLink={item.image} hotelName={item.hotelName} forCart={false}/>)
    return (
        <div>
            {isLoading && <Spinner/>}
            {!isLoading && productItems}
        </div>
    )

}

export default Products
