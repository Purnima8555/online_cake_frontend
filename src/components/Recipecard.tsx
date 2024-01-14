import { FC } from 'react';
import { FaHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

interface RecipeCardProps {
    recipe: {
        img: string;
        title: string;
        category: string;
        description: string;
        totalTime: string;
        // Add other properties based on your actual data structure
    };
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
    return (

        <div className="tcard">
            <div className="tcardimg">
                <img src={recipe.img} alt={recipe.title} />
                <span><i><FaHeart size={'2rem'}/></i></span>
            </div>
            <div className="tcardinfo flex">
                <label className="tlabel">{recipe.title}</label>
                {/*<h3>{recipe.name}</h3>*/}
                <p>{recipe.description}</p>
                {/* Other recipe details */}
                <ul className="flex">
                    <li>
                        <i><MdOutlineTimer size={'1.2rem'} />{recipe.totalTime}</i>
                    </li>
                </ul>
                <a href="/" className="tcardbtn">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default RecipeCard;
