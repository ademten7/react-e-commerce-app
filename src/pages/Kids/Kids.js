
import React from 'react'
import './Kids.css'
import { kidsClothes } from '../../api/products'
import Products from '../../components/Section/Products'
import Section from '../../components/Section/Section'
import { Anchor } from 'antd'
const { Link } = Anchor;




export default function Kids() {

    return (
        <main >
            <Section title="Kid's Collection" data={ kidsClothes } />
            
                <div className="images-parent-k">
                    <div className="image-left-k">
                    <div className="image-text-k">
                        <h1 style={{color:"white"}}>A Chill Season ~~~</h1>
                        <h4 style={{color:"white"}}>Effortless design to wear anywhere</h4>
                        <Anchor affix={false}>
                            <Link href="#shopNow" title={<button className="btn-image">SHOP NOW</button>} />
                        </Anchor>
                    </div> 
                    </div>
                    <div className="image-right-k">
                    </div>
                </div>

            <div className="kid-all">
                <Products  title="All Products" data={ kidsClothes } />
                
            </div>         
        </main>
    )

    }