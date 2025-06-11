import { CatalogButtons } from '@/constants';
import React, { useState } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}) => {
  const baseStyle = 'px-4 py-2 rounded-full font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-[#B2F0A1] text-gray-900 border-2 border-[#B2F0A1] hover:bg-[#A0D88C] shadow-sm',
    secondary: 'bg-white text-gray-700 border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const CatalogButtonGroup = () => {
  const [activeButton, setActiveButton] = useState(CatalogButtons[0].name); // Default to first button
  
  return (
    <div className='flex flex-wrap gap-3'>
      {CatalogButtons.map((button) => (
        <Button 
          key={button.name} // Using name as key is better if names are unique
          variant={activeButton === button.name ? "primary" : "secondary"}
          onClick={() => setActiveButton(button.name)}
          className="min-w-[120px] text-center" // Ensures consistent button width
        >
          {button.name}
        </Button>
      ))}
    </div>
  );
};

export { Button, CatalogButtonGroup };