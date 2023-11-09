// src/components/DashboardLayout.tsx
import React from 'react';
import Link from 'next/link';
import Drivers from '../pages/Drivers';
import Stats from '../pages/Stats';
import Race from './Race';
import Logo from './Logo';
import Services from './Services';
import Sponsors from './Sponsors';
import Contact from './Contact';

const DashboardLayout: React.FC = () => {
  const sections = [
    { title: 'Drivers', component: <Drivers /> },
    { title: 'Stats', component: <Stats /> },
    { title: 'Race', component: <Race /> },
    { title: 'Logo', component: <Logo /> },
    { title: 'Services', component: <Services /> },
    { title: 'Our Sponsors', component: <Sponsors /> },
    { title: 'Contact', component: <Contact /> },
  ];

  return (
    <div>
      <nav>
        <ul>
          {sections.map((section, index) => (
            <li key={index}>
              <Link href={`/${section.title.toLowerCase()}`}>
                <a>{section.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {/* Use Next.js router to display the selected section */}
        {sections.map((section, index) => (
          <div key={index}>
            {section.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardLayout;
