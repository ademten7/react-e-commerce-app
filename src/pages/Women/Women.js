
import React from 'react'
import './Women.css'
import {  womenClothes } from '../../api/products'
import Products from '../../components/Section/Products'
import Section from '../../components/Section/Section'
import { Anchor } from 'antd';
const { Link } = Anchor;




export default function Women() {

    return (
        <main >
            <Section title="Women's Collection" data={ womenClothes } />
            
                <div className="images-parent-w">
                    <div className="image-left-w">
                    <div className="image-text-w">
                        <h1 style={{color:"white"}}>A Chill Season ~~~</h1>
                        <h4 style={{color:"white"}}>Effortless design to wear anywhere</h4>
                        <Anchor affix={false}>
                            <Link href="#shopNow" title={<button className="btn-image">SHOP NOW</button>} />
                        </Anchor>
                    </div> 
                    </div>
                    <div className="image-right-w">
                    </div>
                </div>

            <div className="women-all">
                <Products  title="All Products" data={ womenClothes } />
                
            </div>         
        </main>
    )

    }