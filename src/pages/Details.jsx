import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2';


const Details = () => {

    const categories = useLoaderData();
    const { id } = useParams();
    const category = categories.find(category => category.id == id);

    function handleClick() {
        Swal.fire(
            'Donation Successful'
        )
    }

    return (
        <div className="my-20">
            <div className="min-h-screen">
                <div className="relative">
                    <img className="w-full" src={category.Picture} alt="Shoes" />
                    <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-70 p-9">
                        <button onClick={handleClick} className="text-white font-semibold px-6 py-4 btn border-none" style={{backgroundColor: category.Text_and_Button_bg_Color}}>Donate {category.Price}</button>
                    </div>
                </div>
                <div className="mt-14">
                    <h2 className="card-title text-4xl font-semibold">
                        {category.Title}
                    </h2>
                    <p className="mt-6">{category.Description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;