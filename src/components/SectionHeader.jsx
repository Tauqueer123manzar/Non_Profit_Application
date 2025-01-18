import React from "react";

const SectionHeader = ({ title, description }) => {
    return (
        <div className="block text-center max-w-md mx-auto">
            <h2 className="text-lg md:text-xl font-semibold text-orange-500 mb-3">
                {title}
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                {description}
            </h1>
        </div>
    );
};

export default SectionHeader;