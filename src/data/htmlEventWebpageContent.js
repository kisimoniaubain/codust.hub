export const HTML_EVENT_WEBPAGE_CONTENT = {
  title: 'Design an Event Webpage using HTML and CSS',
  lastUpdated: '2 May, 2026',
  intro:
    'Creating an event webpage is an exciting way to showcase information about an event, including schedule, speakers, and contact details.',
  projectOverview: [
    'A header introducing the event.',
    'Navigation links for About, Schedule, Speakers, and Contact.',
    'A schedule table for event sessions.',
    'A contact form for attendee queries and feedback.',
  ],
  projectPreviewTitle: 'Project Preview',
  projectPreviewCaption: 'Design an Event Webpage using HTML and CSS',
  htmlStructureTitle: 'Event Webpage - HTML Structure',
  htmlStructureIntro:
    'The HTML structure provides the content and layout for the webpage.',
  htmlStructureCode: `<html>\n<head>\n</head>\n<body>\n    <header>\n        <h1>Welcome to GeeksforGeeks TechCon 2025</h1>\n        <p>The Ultimate Technology and Programming Conference</p>\n    </header>\n\n    <nav>\n        <a href="#about">About</a> |\n        <a href="#schedule">Schedule</a> |\n        <a href="#speakers">Speakers</a> |\n        <a href="#contact">Contact</a>\n    </nav>\n\n    <section id="about">\n        <h2>About the Event</h2>\n        <p>GeeksforGeeks TechCon 2025 brings together leading minds in programming,\n          tech, and innovation. Join us for a day of insightful talks, hands-on workshops,\n          and an opportunity to network with fellow geeks and professionals from all around the world.</p>\n    </section>\n\n    <section id="schedule">\n        <h2>Event Schedule</h2>\n        <table>\n            <thead>\n                <tr>\n                    <th>Time</th>\n                    <th>Session</th>\n                    <th>Contest</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>9:00 AM</td>\n                    <td>Opening Keynote</td>\n                    <td>GeeksforGeeks Coding Platform</td>\n                </tr>\n                <tr>\n                    <td>10:30 AM</td>\n                    <td>Understanding AI and Machine Learning</td>\n                    <td>Mr. Arvind Kumar</td>\n                </tr>\n                <tr>\n                    <td>1:00 PM</td>\n                    <td>Lunch Break</td>\n                    <td>-</td>\n                </tr>\n                <tr>\n                    <td>2:00 PM</td>\n                    <td>Exploring the Future of Cloud Computing</td>\n                    <td>Ms. Neha Gupta</td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n\n    <section id="speakers">\n        <h2>Meet the Speakers</h2>\n        <ul>\n            <li><strong>Dr. Radhika Sharma:</strong> AI Expert and Researcher</li>\n            <li><strong>Mr. Arvind Kumar:</strong> Senior Data Scientist at TechWave</li>\n            <li><strong>Ms. Neha Gupta:</strong> Cloud Computing Specialist at CloudTech</li>\n            <li><strong>Mr. Sandeep Reddy:</strong> Full Stack Developer and Open-Source Contributor</li>\n        </ul>\n    </section>\n\n    <section id="contact">\n        <h2>Contact Us</h2>\n        <form>\n            <label for="name">Name:</label><br>\n            <input type="text" id="name" name="name"><br><br>\n\n            <label for="email">Email:</label><br>\n            <input type="email" id="email" name="email"><br><br>\n\n            <label for="message">Message:</label><br>\n            <textarea id="message" name="message" rows="4"></textarea><br><br>\n\n            <button type="submit">Send</button>\n        </form>\n    </section>\n</body>\n</html>`,
  htmlBreakdown: [
    {
      heading: 'Header',
      text: 'Introduces the event with a title and tagline.',
    },
    {
      heading: 'Navigation',
      text: 'Provides links to different sections of the webpage.',
    },
    {
      heading: 'About Section',
      text: 'Contains a brief description of the event.',
    },
    {
      heading: 'Schedule Section',
      text: 'Includes a table listing event time, session, and speaker details.',
    },
    {
      heading: 'Speakers Section',
      text: 'Highlights key speakers with titles and expertise.',
    },
    {
      heading: 'Contact Section',
      text: 'Contains a form to collect user queries or feedback.',
    },
  ],
  cssTitle: 'Event Webpage - Including CSS',
  cssCode: `<html>\n<head>\n    <title>GeeksforGeeks TechCon 2025</title>\n    <style>\n        body {\n            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n            line-height: 1.6;\n            margin: 0;\n            padding: 0;\n            background-color: #f4f6f9;\n            color: #444;\n        }\n\n        header {\n            background-color: #4CAF50;\n            color: white;\n            padding: 25px 0;\n            text-align: center;\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n        }\n\n        nav {\n            background-color: #343a40;\n            text-align: center;\n            padding: 12px 0;\n        }\n\n        nav a {\n            color: #ffffff;\n            text-decoration: none;\n            margin: 0 20px;\n            font-weight: 600;\n            font-size: 1.1rem;\n        }\n\n        section {\n            padding: 25px;\n            margin: 20px auto;\n            max-width: 900px;\n            background-color: #ffffff;\n            border-radius: 8px;\n            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n        }\n\n        table {\n            width: 100%;\n            border-collapse: collapse;\n            margin-top: 15px;\n        }\n\n        table th,\n        table td {\n            border: 1px solid #ddd;\n            padding: 12px;\n            text-align: left;\n        }\n\n        form {\n            max-width: 650px;\n            margin: 25px auto;\n        }\n\n        form input,\n        form textarea,\n        form button {\n            width: 100%;\n            padding: 14px;\n            margin-bottom: 18px;\n            border: 1px solid #ddd;\n            border-radius: 8px;\n            font-size: 1rem;\n        }\n    </style>\n</head>\n</html>`,
  cssHighlights: [
    'Body styles set background, typography, and spacing consistency.',
    'Header and navigation use contrast colors for clear section framing.',
    'Sections use card-style padding, radius, and shadows for readability.',
    'Tables define borders and alternating rows for schedule clarity.',
    'Form controls are styled for better usability and interaction.',
  ],
  articleTags: ['CSS', 'HTML-Basics', 'CSS-Questions'],
  author: {
    name: 'Iimsushant1234',
    initial: 'I',
    url: 'https://www.geeksforgeeks.org/css/design-an-event-webpage-using-html-css/',
  },
  courseUrl: 'https://www.geeksforgeeks.org/html/design-an-event-web-page-using-html-css/',
  referenceUrl: 'https://www.geeksforgeeks.org/css/design-an-event-webpage-using-html-css/',
  images: [
    'https://media.geeksforgeeks.org/wp-content/uploads/20250102121927654484/Screenshot-2025-01-02-121432_11zon.jpg',
    'https://media.geeksforgeeks.org/wp-content/uploads/20250103153234554199/Event-Webpage.png',
  ],
  explore: [
    {
      heading: 'Explore',
      groups: [
        {
          heading: 'CSS Basics',
          items: [
            { label: 'CSS Tutorial', url: 'https://www.geeksforgeeks.org/css/css-tutorial/' },
            { label: 'Styling & Properties', url: 'https://www.geeksforgeeks.org/css/css-properties-complete-reference/' },
            { label: 'Text & Fonts', url: 'https://www.geeksforgeeks.org/css/css-fonts/' },
          ],
        },
        {
          heading: 'Layouts & Design',
          items: [
            { label: 'Layouts & Design', url: 'https://www.geeksforgeeks.org/css/css-layout/' },
            { label: 'Modern Layout Systems', url: 'https://www.geeksforgeeks.org/css/css-flexbox/' },
            { label: 'Effects, Animations & Advanced CSS', url: 'https://www.geeksforgeeks.org/css/css-animations/' },
          ],
        },
      ],
    },
    {
      heading: 'Courses',
      items: [
        { label: 'CSS Tutorial', url: 'https://www.geeksforgeeks.org/css/css-tutorial/' },
        { label: 'Design an Event Web Page', url: 'https://www.geeksforgeeks.org/css/design-an-event-webpage-using-html-css/' },
      ],
    },
  ],
};
