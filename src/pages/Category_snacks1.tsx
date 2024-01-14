import React from 'react';
import RecipeCard from '../components/Recipecard.tsx';
import { FaCircleUser } from "react-icons/fa6";
import "./Category1.css";

interface Recipe {
    id: number;
    title: string,
    category: string,
    img: string,
    description: string,
    totalTime: string,
// Add other properties based on your actual recipe structure
}

const Category_snacks1: React.FC = () => {
    const recipes: Recipe[] = [
        {
            id: 1,
            title: 'Chicken Momo',
            category: 'Savory',
            img: '../assets/img/momo.jpg',
            description: 'A beloved dish of flatbread stuffed with spiced mashed potatoes,\n' +
                'rolled out, and cooked until golden brown.',
            totalTime: '45 Mins',
// Add other properties as needed
        },
        {
            id: 2,
            title: 'Onion Pakoda',
            category: 'Savory',
            img: '../assets/img/Onion_pakoda.jpg',
            description: 'A beloved dish of flatbread stuffed with spiced mashed potatoes,\n' +
                'rolled out, and cooked until golden brown.',
            totalTime: '20 Mins',
// Add other properties as needed
        },
        {
            id: 3,
            title: 'Onion Pakoda',
            category: 'Savory',
            img: '../assets/img/Onion_pakoda.jpg',
            description: 'A beloved dish of flatbread stuffed with spiced mashed potatoes,\n' +
                'rolled out, and cooked until golden brown.',
            totalTime: '10 Mins',
        },
        {
            id: 4,
            title: 'Onion Pakoda',
            category: 'Savory',
            img: '../assets/img/Onion_pakoda.jpg',
            description: 'A beloved dish of flatbread stuffed with spiced mashed potatoes,\n' +
                'rolled out, and cooked until golden brown.',
            totalTime: '10 Mins',
        },
        {
            id: 5,
            title: 'Onion Pakoda',
            category: 'Savory',
            img: '../assets/img/Onion_pakoda.jpg',
            description: 'A beloved dish of flatbread stuffed with spiced mashed potatoes,\n' +
                'rolled out, and cooked until golden brown.',
            totalTime: '10 Mins',
        },
        {
            id: 6,
            title: 'Onion Pakoda',
            category: 'Savory',
            img: '../assets/img/Onion_pakoda.jpg',
            description: 'A beloved dish of flatbread stuffed with spiced mashed potatoes,\n' +
                'rolled out, and cooked until golden brown.',
            totalTime: '10 Mins',
        },
    ];

// Filter recipes for Section 1 and Section 2
    const section1Recipes = recipes.filter(recipe => parseInt(recipe.totalTime) > 15);
    const section2Recipes = recipes.filter(recipe => parseInt(recipe.totalTime) <= 15);

    return (
        <>
            <header>
                <div className="mainnav">
                    <div className="container flex">
                        <div className="logo flex">
                            <h1><a href="/">Taste<span>Trail</span></a></h1>
                        </div>
                        <ul className="navlist flex">
                            <li><a href="/">Categories</a></li>
                            <li><a href="/">Holiday&Festive</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>

                        <div className="searchbar flex">
                            <a href="/" className="logingtn"><i><FaCircleUser size={'3rem'}/></i></a>
                            <input type="checkbox" name="checkbox_toggle" id="checkbox" hidden/>
                            <label htmlFor="checkbox" className="toggle">
                                <div className="toggle__circle"></div>
                            </label>
                            <i className='bx bx-search-alt-2' id="searchopen"></i>
                            <div className="navonoff">
                                <input type="checkbox" id="checkbox2"/>
                                <label htmlFor="checkbox2" className="toggle2">
                                    <div className="bar bar--top"></div>
                                    <div className="bar bar--middle"></div>
                                    <div className="bar bar--bottom"></div>
                                </label>
                            </div>
                        </div>
                        {/*<div className="searchinput">*/}
                        {/*    <input type="text" placeholder="Search Here..."/>*/}
                        {/*    <IoClose />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </header>


            <main>
                <section className="headerimg">
                    <div className="container">
                        <div className="headerinfo flex">
                            <h2 className="headertitle">Snacks and Appetizers</h2>
                            <p className="headerpera">Elevate your snacking experience with our tasty and easy-to-make snacks.
                                Find the perfect snack recipes for any occasion.</p>
                            <a href="/" className="headerbtn"></a>
                        </div>
                    </div>
                </section>
                {/*featured recipes*/}
                <div className="featuredrecipe container flex">
                    <div className="featuredtitles flex">
                        <div className="titleicon">
                            <img src="../assets/img/snacks_ico.png" alt="snack_ico"/>
                        </div>
                        <h2>Featured Recipes</h2>
                        <p> Discover a world of flavorful bites crafted to satisfy your cravings and
                            elevate your snack game, ensuring every moment is a tasty adventure:</p>
                    </div>
                </div>

                {/* Section 1: All recipes */}
                <div className={'main-cards'}>
                    <section className="threecards container flex">
                        {section1Recipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </section>
                </div>

                {/* Section 2: Recipes with duration <= 15 minutes */}
                <div className="quickrecipe-title flex">
                    <h2>Quick Fixes, Endless Flavor:</h2>
                    <p>Elevate Your Everyday Meals with Our Handpicked Quick Recipe Collection.</p>
                </div>
                <div className={'main-cards'}>
                <section className="explorerecipe container flex">
                        {section2Recipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                </section>
                </div>
            </main>


            <footer>
                <div className="container flex">
                    <div className="footer flex">
                        <div className="footerlogo">
                            <h2>Taste Trail</h2>
                            <p>We provide a platform for customers to share their
                                culinary creations and discover easy, delicious recipes,
                                fostering a vibrant community of food enthusiasts.</p>
                        </div>
                        <div className="footernav">
                            <h3>Recipes</h3>
                            <ul className="flex">
                                <li><a href="/">Breakfast</a></li>
                                <li><a href="/">Lunch</a></li>
                                <li><a href="/">Dinner</a></li>
                                <li><a href="/">Snacks</a></li>
                                <li><a href="/">Dessert</a></li>
                            </ul>
                        </div>
                        <div className="footernav">
                            <h3>Legal</h3>
                            <ul className="flex">
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms and Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Category_snacks1;