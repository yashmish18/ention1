import {toast} from 'react-toastify'
// import getEnv from 'next-env'
// const { publicRuntimeConfig } = getEnv()

const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
};

const createOrder = async data => {
    try{
        console.log(`🚀 ~ file: payment.js:36 ~ createOrder ~ data`, data)
        let res = await fetch('/api/orders/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({ ...data })
        })
        const order = await res.json()
        console.log(`🚀 ~ file: payment.js:36 ~ createOrder ~ order`, order)
        return order
        
    }catch (err) {
        console.log(`🚀 ~ file: payment.js:36 ~ createOrder ~ err`, err)
        return {success: false, msg: err.msg}
    }
}

const completeOrder = async data => {
    try {
        const res = await fetch('/api/orders/complete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json'
            },
            body: JSON.stringify({ ...data })
        })

        return await res.json()
    }catch (err) {
        console.log(`🚀 ~ completeOrder ~ err`, err)
        return {success: false, message: err.message}
    }
}

const makePayment = (paymentMethod, options, setShowModal, toastId) => {
    return new Promise(async resolve => {
        if(paymentMethod === 'prepaid') {
            const res = await initializeRazorpay()
            if(!res) return resolve({success: false, msg: 'Failed to intialize payment, please try again'})
        }

        const {user} = options;
        const orderInfo = await createOrder(options)

        if(!orderInfo.success) return resolve({ success: false, msg: orderInfo?.msg || 'Failed to create order, please try again' })
        const {order} = orderInfo

        if(paymentMethod === 'postpaid') {
            const finalOrder = await completeOrder({
                user,
                payment: { method: paymentMethod, status: 'pending', amount: order.amount, transactionId: null, currency: 'INR'},
                coupon: order.coupon,
                products: order.products,
                id: order.id,
                receipt: order.receipt,
                success: true
            })
            return resolve({success: true, msg: `Order completed successfully, ${finalOrder.emailSent ? 'Please check your email for order confirmation.' : ''}`})
        }
        
        const responseHanlder = async response => {
            if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id < 1) {
                resolve({success: false, status: 'failed'})
            } else {
                const finalOrder = await completeOrder({
                    user,
                    payment: { method: paymentMethod, status: 'completed', amount: order.amount, transactionId: response.razorpay_payment_id, currency: order.currency},
                    coupon: order.coupon,
                    products: order.products,
                    id: order.id,
                    receipt: order.receipt,
                    success: true
                })
                resolve({success: true, msg: `Order completed successfully, ${finalOrder.emailSent ? 'Please check your email for order confirmation.' : ''}`})
            }
        }
        window.alert(order.amount )
        const config = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
            name: "Ention Technology & Services PVT LTD",
            currency: order.currency,
            amount: order.amount,
            order_id: order.id,
            description: "Thankyou for transacting with us!",
            image: '',
            handler: responseHanlder,
            prefill: {
                name: user.name,
                email: user.email,
                contact: user.phone
            },
            modal: {
                ondismiss: () => {
                    if (confirm("Are you sure, you want to abort payment?")) {
                        resolve({success: false, status: 'aborted'})
                    }else {
                        
                    }
                }
            }
        }

        const paymentObject = new window.Razorpay(config);
        paymentObject.open();
    
    })
}

export default makePayment
