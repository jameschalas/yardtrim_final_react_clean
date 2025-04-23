import React, { useState } from 'react';

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      name: 'Lawn Mowing',
      detail: 'Includes mowing, edging, and weed eating.',
      price: 'Included in base price',
    },
    {
      name: 'Bush Trimming',
      detail: 'Shaping and trimming of bushes.',
      price: '$20 per bush',
    },
    {
      name: 'Tree Removal',
      detail: 'Removal of small, medium, or large trees.',
      options: [
        'Small Tree: $200',
        'Medium Tree: $350',
        'Large Tree: $500',
      ],
    },
    {
      name: 'Stump Grinding',
      detail: 'Stump removal for various sizes.',
      options: [
        'Small: $80',
        'Big: $100',
        'Add $50 for roots',
      ],
    },
    {
      name: 'Lot Clearing',
      detail: 'Complete clearing of overgrown or wooded lots.',
      price: '$150 flat rate',
    },
    {
      name: 'Storm Cleanup',
      detail: 'Removal of fallen branches, leaves, and debris.',
      price: '$150 flat rate',
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Our Services</h1>
      <div className="grid gap-6">
        {services.map((service, index) => (
          <div key={index} className="border rounded-2xl p-4 shadow">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-green-800">{service.name}</h2>
                <p className="text-gray-600">{service.detail}</p>
                {service.price && (
                  <p className="mt-2 text-sm text-gray-500">
                    <strong>Price:</strong> {service.price}
                  </p>
                )}
              </div>
              {service.options && (
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-green-600 underline hover:text-green-800"
                >
                  {openIndex === index ? 'Hide Options' : 'View Options'}
                </button>
              )}
            </div>

            {service.options && openIndex === index && (
              <ul className="mt-4 list-disc list-inside text-gray-700">
                {service.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
