
import React from 'react'
import './Men.css'
import { menClothes } from '../../api/products'
import Products from '../../components/Section/Products'
import Section from '../../components/Section/Section'
import { Anchor } from 'antd';
const { Link } = Anchor;


export default function Men() {

    return (
        <main >
            <Section  title="Men's Collection" data={ menClothes } />
            
                <div className="images-parent-m">
                    <div className="image-left-m">
                    <div className="image-text-m">
                        <h1 style={{color:"white"}}>A Chill Season ~~~</h1>
                        <h4 style={{color:"white"}}>Effortless design to wear anywhere</h4>
                        <Anchor affix={false}>
                            <Link href="#shopNow" title={<button className="btn-image">SHOP NOW</button>} />
                        </Anchor>
                    </div> 
                    </div>
                    <div className="image-right-m">
                    </div>
                </div>

            <div className="men-all">
                <Products  title="All Products" data={menClothes} />
                
            </div>         
        </main>
    )

    }
                            

