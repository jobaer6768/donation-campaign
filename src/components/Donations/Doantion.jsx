import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Doantion = ({ category }) => {

    const { id, Picture, Title, Category, Category_bg_Color, Card_bg_Color, Text_and_Button_bg_Color, Price } = category;

    return (
        <div className='rounded-lg' style={{ backgroundColor: Card_bg_Color }}>
            <div className='flex gap-6'>
                <div>
                    <img className='w-52 h-48' src={Picture} alt="" />
                </div>
                <div className='py-6 space-y-2'>
                    <div className='w-20'>
                        <p className="text-xs font-medium border rounded-lg px-2 py-1 text-center" style={{ color: Text_and_Button_bg_Color, backgroundColor: Category_bg_Color }}>{Category}</p>
                    </div>
                    <p className='text-2xl font-semibold'>{Title}</p>
                    <p className='text-xs' style={{ color: Text_and_Button_bg_Color }}>{Price}</p>

                    <Link to={`/details/${id}`}>
                        <button className='btn p-2 text-white' style={{ backgroundColor: Text_and_Button_bg_Color }}> View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Doantion.propTypes = {
    category: PropTypes.object.isRequired
}

export default Doantion;