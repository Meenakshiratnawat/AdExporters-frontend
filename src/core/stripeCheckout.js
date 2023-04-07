import React, {useState, useEffect} from 'react'
import { isAutheticated } from '../auth/helper'
import { cartEmpty, loadCart } from './helper/CartHelper'
import { Link } from 'react-router-dom'
import StripeCheckoutButton from "react-stripe-checkout"
import { API } from '../backend'
import { createOrder } from './helper/orderHelper'


const StripeCheckout = ({
    products,
    setReload = f => f,
    reload = undefined
}) => {

    const [data, setData] = useState({
        loading: false,
        success: false,
        error: "",
        address: ""

    });

    const token = isAutheticated() && isAutheticated().token
    const userId = isAutheticated() && isAutheticated().user._id
    
    const getFinalprice = () => {
        let amount =0
        products.map(p => {
            amount = amount + parseInt(p.price)  
        })
        return amount;
    };

    const getPayment = () => {
        const body = {
            products
        }
        const headers ={
            "Content-Type": "application/json"
        }
        console.log(body)
        return fetch(`${API}/stripepayment`, { method: "POST",
        headers,
        body:JSON.stringify(body) })
          .then((response) => {
            return response.json();
          })
          .catch((err) => console.log(err));
      };

    const makePayment2 = () => {
        getPayment().then((data) => {
            console.log(data)
            window.location.href = data.url
        //   if (data.error) {
        //     setError(data.error);
        //   } else {
        //     if (state == null) {
        //       setProducts(data);
        //       return;
        //     }
        //     let dataNew = data.filter((item) => item.category._id == state);
        //     setProducts(dataNew);
        //   }
        });
      };


    
    const makePayment = (token) => {
        const body = {
            products
        }
        const headers ={
            "Content-Type": "application/json"
        }
        console.log(body)
        return fetch(`${API}/stripepayment`, {
            method:"POST",
            headers,
            body:JSON.stringify(body)
        }).then(response => {
            console.log(response.url)
            console.log(response.data)
            console.log(response.body.json())
            const {status} = response;
            console.log("STATUS ", status);
            // window.location.href = 
            // "https://checkout.stripe.com/c/pay/cs_test_a1KaRaZgB9rvfkaNgtrdKY56DwKNJA3OIbLlVF44DzhqO36s20FrmPRy4d#fidkdWxOYHwnPyd1blpxYHZxWjA0SHFAN2pWRmB8SDZtf09Sa29pXHcyb0hSVVVPc1xpXWI0bTJRVms0VlBQVzRydWBSbFdGNUxLMjduVUpNf0xUN292Y01jbmhXQF9iMU9ub1ZhUVJyNUpINTV8SnBQf2I1QScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl"
            // const orderData = {
            //     products: products,
            //     transaction_id: response.transaction.id,
            //     amount: response.transaction.amount
            // };
            // createOrder(userId, token, data);
            // cartEmpty(()=>{
            //     console.log("Did we got a crash?")
            // });
            // setReload(!reload)
        }).catch(error => {
            console.log(error)
        })
    };

    const showStripeButton = () => {
        return isAutheticated() ? (
            // <StripeCheckoutButton
            // stripeKey="pk_test_51MtE2oSCeyM3hzJWq6xduHOSbskLAHhMUjBG3fTOdDy3wIMu1uFGFsPyQ5ANmKJPMnYeooIaAF3BPuTj6mbJU1JM00C76JxBBW"
            // token={makePayment}
            // amount={getFinalprice()*100}
            // name= "Buy Products"
            // currency="INR"
            // email= {isAutheticated().user.email}
            // shippingAddress
            // billingAddress
            // >
            //     <button className="btn-success">Pay with Stripe</button>
            // </StripeCheckoutButton>
                <button className="btn-warning"
                onClick={() => {
                    makePayment2();
                  }}>Pay with Stripe</button>
         
        ) : (
            <Link to="/signin">
                <button className="btn-warning">Sign In</button>
            </Link>
        )
    }

    
    return (
        <div>
            <h3 className="text white">Stripe Checkout ₹ {getFinalprice()}</h3>
            {showStripeButton()}
        </div>
    )
}
export default StripeCheckout