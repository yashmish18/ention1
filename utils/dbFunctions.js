export const fetchProducts = async (slugs) => {

    const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
        },
        body: JSON.stringify({ slugs })
    })
    
    const data = await res.json()
    
    return {
        success: res.status === 200,
        products: data.products || [] 
    }
}
