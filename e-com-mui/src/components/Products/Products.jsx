import React from 'react'
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles.js';

const products = [
    {id:1, name: 'Shoes', description: 'Running shoes', price: '1.10', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9f5962a5-6eb6-46d4-b538-130e70618576/downshifter-10-running-shoe-CrpbbD.jpg' },
    {id:2, name: 'MacBook', description: 'Apple MacBook', price: '1.05', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-2020-hero-space-wifi-select?wid=470&hei=556&fmt=png-alpha&.v=1598915064000'}
]

const Products = () => {
const classes = useStyles();

return  <main className={classes.content}>
    <div className={classes.toolbar} />
        <Grid container justify='center' spacing={4}  >
        {products.map(product => {
        return    <Grid item key={product.id} xs={12} sm={4} m={4} lg={3}>
                <Product product={product} />
            </Grid>    
        })}
        </Grid>
    </main>
}

export default Products