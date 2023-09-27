import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCategories } from "../../utils/localStorage";
import Doantion from "./Doantion";


const Donations = () => {

    const allCategories = useLoaderData();
    const [categoryDonated, setCategoryDonated] = useState([]);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const storedCategories = getStoredCategories();

        if (storedCategories) {
            const donatedCategories = allCategories.filter(category => storedCategories.includes(category.id))

            setCategoryDonated(donatedCategories);
        }

    }, [])

    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    isShow ? categoryDonated.map(category => <Doantion
                        key={category.id}
                        category={category}
                    ></Doantion>)
                        : categoryDonated.slice(0, 4).map(category => <Doantion
                            key={category.id}
                            category={category}
                        ></Doantion>)
                }
            </div>

            {categoryDonated.length > 4 && <button onClick={() => setIsShow(!isShow)} className="p-5 mt-4 rounded-lg bg-green-200 block mx-auto">
                {isShow ? "See less" : "See more"}
            </button>}
        </div>
    );
};

export default Donations;