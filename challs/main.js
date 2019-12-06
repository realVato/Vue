const app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'Your feet will thank you!',
        image: './vmSocks-green-onWhite.jpg',
        portofolio: 'https://tomastalalas.netlify.com/',
        onSale: true,
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './vmSocks-green-onWhite.jpg'
            },
            {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: './vmSocks-blue-onWhite.jpg'
            }
        ],
        sizes: ['Extra small', 'Small', 'Medium', 'Large', 'Extra large'],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            this.cart -= 1;
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    }
})