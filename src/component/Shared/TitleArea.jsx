import React from 'react';

const TitleArea = ({children}) => {
    return (
        <div className="bg-secondary/30  p-12 my-10 shadow-xl">
        <h1 className="text-4xl font-bold text-center">
            {children}
        </h1>
    </div>
    );
};

export default TitleArea;