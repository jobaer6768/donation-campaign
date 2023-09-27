import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCategories } from "../../utils/localStorage";
import Doantion from "./Doantion";


const Donations = () => {

    const allCategories = useLoaderData();
    const [categoryDonated, setCategoryDonated] = useState([]);

    useEffect(() => {
        const storedCategories = getStoredCategories();

        if (storedCategories) {
            const donatedCategories = allCategories.filter(category => storedCategories.includes(category.id))

            setCategoryDonated(donatedCategories);
        }

    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                categoryDonated.map(category => <Doantion
                    key={category.id}
                    category={category}
                ></Doantion>)
            }
        </div>
    );
};

export default Donations;