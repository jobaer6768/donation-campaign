import { PieChart, Pie, Tooltip } from 'recharts';
import { getStoredCategories } from '../utils/localStorage';

const Statistics = () => {

    const donatedData = getStoredCategories();
    const totalData = 100;
    const dataToBeShown = (donatedData.length * 100) / 12;

    const data = [
        { name: 'Total', value: totalData-dataToBeShown, fill: '#8884d8' },
        { name: 'Donated', value: dataToBeShown, fill: '#FF5733' },
    ];

    return (
        <div className='mt-24'>
            <div className='flex justify-center items-center'>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                    />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;
