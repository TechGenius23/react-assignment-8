import { LineChart, Line } from 'recharts';

const Islamic = () => {
    

    const studentss = [
        { id: 1, name: "John", math: 85, physics: 78, chemistry: 90 },
        { id: 2, name: "Sara", math: 92, physics: 85, chemistry: 88 },
        { id: 3, name: "Tom", math: 78, physics: 90, chemistry: 75 },
        { id: 4, name: "Anna", math: 88, physics: 92, chemistry: 80 },
        { id: 5, name: "Mike", math: 91, physics: 86, chemistry: 89 }
    ];

    return (
        <div>
          <LineChart  width={400} height={400} data={studentss}>
           
            <Line dataKey='physics'></Line>
            <Line dataKey='math'></Line>
            <Line dataKey='chemistry'></Line>

          </LineChart>
        </div>
    );
};

export default Islamic;