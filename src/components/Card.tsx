import { useState } from 'preact/hooks';

type CardProps = {
    title: string;
    description: string;
};

export const Card = ({ title, description }: CardProps) => {
    const [count, setCount] = useState(0)

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{title}</h2>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};
