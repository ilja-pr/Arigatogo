import { useEffect, useState } from 'react';

const sections = [
  { id: 'edo', label: 'Edo-Zeit' },
  { id: 'meiji', label: 'Meiji-Restauration' },
  { id: 'moderne', label: '20. Jahrhundert' },
];

const TimelineNav = () => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/3 z-50 space-y-4 hidden md:flex flex-col items-center">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`w-3 h-3 rounded-full ${
            active === section.id ? 'bg-accentLight scale-125' : 'bg-gray-400'
          } transition-transform duration-300`}
        />
      ))}
    </div>
  );
};

export default TimelineNav;
