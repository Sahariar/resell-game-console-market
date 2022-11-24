import React from 'react';

const TitleArea = ({children}) => {
    return (
        <div className="bg-secondary/10  p-12 shadow-xl py-20">
        <h1 className="text-4xl font-bold text-center">
            {children}
        </h1>
    </div>
    );
};

export default TitleArea;