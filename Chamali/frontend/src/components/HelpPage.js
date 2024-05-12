import React, { useState } from 'react';
import '../assets/styles/HelpPage.css';
import NavigationBar from './nav';
import Footer from './footer';

const HelpPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const sections = [
    {
        title: "System Access and Setup",
        content: "Register your company on the platform to create an account. Fill in the required details about your tourism business to tailor the tool to your specific needs."
      },
      {
        title: "Action Planning",
        content: "Use the platform to conduct a basic evaluation of your company's sustainability aspects. Identify areas for improvement based on the tool’s assessment. Set specific, measurable sustainability goals and objectives for your company."
      },
      {
        title: "Action Plan Implementation",
        content: "Follow the system's guidance to develop and implement sustainability action plans. Align your operations, policies, and procedures with sustainable practices recommended by the tool. Monitor the execution of changes aimed at achieving your sustainability goals."
      },
      {
        title: "Guidance and Recommendations",
        content: "Utilize the continuous support and recommendations provided by the system. Seek guidance through the action planning and implementation processes. Implement strategies for achieving sustainability goals efficiently."
      },
      {
        title: "Grading System",
        content: "Engage with the tool's grading system to assess and benchmark your company's sustainability performance against industry standards. Use the grading system as a measure of your sustainability accomplishments."
      },
      {
        title: "Reporting",
        content: "Utilize the platform’s features to report on your sustainability activities and achievements. Gather and input data on your sustainability practices into the tool to generate comprehensive reports. Use these reports for internal assessment, communication with stakeholders, and compliance reporting."
      },
      {
        title: "Marketing and Promotion",
        content: "Leverage your sustainability accomplishments to market your business. Use the tool’s resources to develop marketing strategies that promote your commitment to sustainable tourism. Highlight your sustainability grade and initiatives in promotional materials and on your website."
      },
      {
        title: "Collaboration and Community Engagement",
        content: "Engage with other tourism stakeholders through the platform to share best practices and learn from each other. Participate in forums and discussions to foster collaboration and collective action towards sustainable tourism."
      },
      {
        title: "Continuous Improvement",
        content: "Regularly review and update your sustainability objectives and action plans based on feedback and evolving industry standards. Use the tool to stay informed about new sustainability trends and practices."
      },
      {
        title: "Technical Support and Feedback",
        content: "Contact technical support for any issues encountered while using the system. Provide feedback on the tool’s functionality and user experience to help improve its effectiveness."
      }
  ];

  return (
    <>
    <NavigationBar/>
    <div className="help-container">
      {sections.map((section, index) => (
        <div className="section" key={index}>
          <button className="section-title" onClick={() => toggleSection(index)}>
            {section.title}
          </button>
          {activeSection === index && (
            <div className="section-content">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default HelpPage;
