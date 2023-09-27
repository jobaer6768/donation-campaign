import PropTypes from 'prop-types';

const Category = ({ category }) => {

    const { id, Picture, Title, Category, Category_bg_Color, Card_bg_Color, Text_and_Button_bg_Color } = category;

    return (
        <div className="card w-full shadow-xl" style={{ backgroundColor: Card_bg_Color }}>
            <figure><img src={Picture} alt="" /></figure>
            <div className="card-body">
                <div className='w-20 text-left'>
                    <p className="text-xs font-medium border rounded-lg px-2 py-1" style={{ color: Text_and_Button_bg_Color, backgroundColor: Category_bg_Color }}>{Category}</p>
                </div>
                <p className='text-xl font-semibold' style={{ color: Text_and_Button_bg_Color }}>{Title}</p>
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired
}

export default Category;