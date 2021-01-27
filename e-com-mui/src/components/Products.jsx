import React from 'react'
import {Grid} from '@material-ui/core'

const products = [
    {id:1, name: 'Shoes', description: 'Running shoes', price: '1.10'},
    {id:2, name: 'iPad', description: 'Apple iPad', price: '1.05'}
]

const Products = () => {
    <main>
        <Grid container jsutify='center' spacing={4}  >
        {products.map(product => {
            <Grid item key={product.id} xs={12} sm={4} m={4} lg={3}>
                <Product product={product} />
            </Grid>
            
        })}
        </Grid>
    </main>
}

export default Products