import { useEffect } from "react";
import { useState } from "react";
import Category from "../Category/Category";


const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-24">
            {
                categories.map(category => <Category
                    key={category.id}
                    category={category}
                ></Category>)
            }
        </div>
    );
};

export default Categories;