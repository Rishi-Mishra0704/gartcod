import React from 'react';
import { FaChrome, FaTerminal, FaMobile } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

interface IconComponentProps {
  iconType: 'chrome' | 'terminal' | 'mobile';
  color: string;
}

const IconComponent: React.FC<IconComponentProps> = ({ iconType, color }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const getIcon = () => {
    switch (iconType) {
      case 'chrome':
        return <FaChrome />;
      case 'terminal':
        return <FaTerminal />;
      case 'mobile':
        return <FaMobile />;
      default:
        return null;
    }
  };

  return (
    <animated.div style={{ ...props, color }}>
      {getIcon()}
    </animated.div>
  );
};

export default IconComponent;
