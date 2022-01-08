import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IndivisualProduct from './IndivisualProduct/IndivisualProduct'
import Spinner from '../UI/Spinner/Spinner';
import { initiateCart } from '../../store/actions/cartAction';
function Products() {
    const [currentUser,setCurrentUser]=useState('');
    // const products= useSelector(state=>state.products);
    let [products,setProducts]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const dispatch=useDispatch();

    useEffect( () => {
        const fetchMeals= async ()=>{
        const response=await fetch("https://reactpersonalproject-default-rtdb.firebaseio.com/Products.json");
        if (!response.ok){
            throw new Error("Something went wrong!!");
        }
        const data=await response.json();
        setIsLoading(false);
        return data
        }
        setIsLoading(true)
        fetchMeals().then((data)=>{
            setCurrentUser(localStorage.getItem('user'));
            const fetchedProducts=[];
            for (let key in data ){
                fetchedProducts.push({
                    id:data[key].id,
                    name:data[key].name,
                    price:data[key].price,
                    image:data[key].image,
                    hotelName:data[key].hotelName,
                    isFev:data[key].isFev
                })
            }
            setProducts(fetchedProducts);
        
            // dispatch(initiateProducts(fetchedProducts))
        });
    }, [])

    useEffect(() => {
        fetch(`https://reactpersonalproject-default-rtdb.firebaseio.com/cart/${currentUser}.json`
          ).then(response=>response.json()).then(resData=>{
            console.log("initiateCart -> Cart.js",resData);
            console.log("[Cart.js -> currentUser]",currentUser);
              dispatch(initiateCart(resData))
          }).catch(error=>{
  
          });
      }, [dispatch,currentUser])
    const productItems= products.map(item=><IndivisualProduct key={item.id} id={item.id} name={item.name} price={item.price} imgLink={item.image} hotelName={item.hotelName} forCart={false}/>)
    return (
        <div>
            {isLoading && <div style={{height:'80vh',display:'grid', alignItems:'center'}}>
            <Spinner/>
            </div>}
            {!isLoading && productItems}
        </div>
    )

}

export default Products
