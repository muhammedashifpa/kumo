import React from 'react'
import {Link} from 'react-router-dom'
import axiosInstance from '../../../axios'
import {fetchCart} from '../../../features/cart/action'
import {setSnackbar} from '../../../features/ducks/snackbar'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function RazorPayment(props) {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const handlePaymentSuccess = async (response) => {
      dispatch(fetchCart())
        console.log(response)
        try {
          let bodyData = new FormData();
    
          // we will send the response we've got from razorpay to the backend to validate the payment
          bodyData.append("response", JSON.stringify(response));
          console.log(bodyData);
          await axiosInstance.post('/payment/success/',bodyData)
              .then((res) => {
                console.log("Everything is OK!");
                dispatch(setSnackbar(
                    true,
                    "success",
                    "Order Completed!"
                ))
              })
              navigate('/order-complete')
              .catch((err) => {
                console.log(err);
              });
        } catch (error) {
          console.log(console.error());
        }
      };




    const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
    };

  const showRazorpay = async () => {
    const res = await loadScript();


    const data = await axiosInstance.post('payment/pay/',{items:props.items,amount:props.total}).then((res) => {
      return res;
    });


    var options = {
      key_id: 'rzp_test_VwlJUePWbDYM1O',
      key_secret: `** your razorpay secret key id **`,
      amount: data.data.payment.amount,
      currency: "INR",
      name: "Org. Name",
      description: "Test teansaction",
      image: "", // add image url
      order_id: data.data.payment.id,
      handler: function (response) {
        // we will handle success by calling handlePayment method and
        // will pass the response that we've got from razorpay
        handlePaymentSuccess(response);
      },
      prefill: {
        name: "User's name",
        email: "User's email",
        contact: "User's phone",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
    return (
        <button onClick={showRazorpay} className="btn btn-block btn-dark mb-3" href="checkout.html">₹ {props.total} Pay on Razorpay</button>

    )
}

export default RazorPayment
