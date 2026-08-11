export const HTTP_TUTORIAL_CONTENT = {
  title: 'Hypertext Transfer Protocol - HTTP',
  lastUpdated: '17 Jan, 2026',
  intro:
    'HTTP (Hypertext Transfer Protocol) is a core Internet protocol that defines how data is exchanged between clients and servers on the web.',
  bullets: [
    'Enables communication between web browsers and web servers.',
    'Forms the foundation of data transfer on the World Wide Web.',
    'Defines rules for requesting and delivering data between systems.',
  ],
  note:
    'HTTP is an application-layer protocol used implicitly by web browsers to transfer text, images, and multimedia across distributed, hypermedia-based web systems.',
  images: [
    'https://media.geeksforgeeks.org/wp-content/uploads/20260116172709860747/http_connection.webp',
    'https://media.geeksforgeeks.org/wp-content/uploads/20250707160103024541/http_request.webp',
  ],
  featuresIntro:
    'HTTP defines a standardized communication mechanism that enables clients and servers to exchange resources efficiently over the web.',
  features: [
    'Stateless: Each request is independent and the server does not retain previous interactions information.',
    'Text-Based: Messages are in plain text, making them readable and debuggable.',
    'Client-Server Model: Follows a client-server architecture for requesting and serving resources.',
    'Request-Response: Operates on a request-response cycle between clients and servers.',
    'Request Methods: Supports methods like GET, POST, PUT, DELETE for different actions on resources.',
  ],
  quicNote:
    'It was renamed as Hyper-Text Transfer Protocol QUIC (HTTP/3) and developed by Google.',
  methods: [
    'GET: Retrieves data without modifying the resource.',
    'POST: Submits data for processing or resource creation.',
    'PUT: Creates or replaces a resource completely.',
    'PATCH: Partially updates a resource.',
    'DELETE: Removes a resource from the server.',
    'HEAD: Retrieves response headers only.',
    'OPTIONS: Returns supported methods and communication options.',
    'TRACE: Echoes the request for debugging (rarely used due to security risks).',
    'CONNECT: Establishes a tunnel, typically for HTTPS via proxies.',
  ],
  requestResponseSteps: [
    'Client sends request: Sends an HTTP request with method, URL, headers, and optional body.',
    'Server processes request: Handles the request and performs required operations.',
    'Server sends response: Returns status code, headers, and optional data.',
    'Client processes response: Renders or handles the received content.',
  ],
  requestCircleRows: [
    { requestedResource: 'HTML Page', resourceType: 'HTML', serverResponse: 'Server sends HTML file' },
    { requestedResource: 'Style Sheet (CSS)', resourceType: 'CSS', serverResponse: 'Server sends CSS file' },
    { requestedResource: 'Image (JPG)', resourceType: 'Image (JPG)', serverResponse: 'Server sends JPG image' },
    { requestedResource: 'JavaScript Code', resourceType: 'JavaScript (JS)', serverResponse: 'Server sends JS file' },
    { requestedResource: 'Data (XML or JSON)', resourceType: 'Data', serverResponse: 'Server sends XML/JSON data' },
  ],
  requestCircleNotes: [
    'Requested Resource: Specifies the type of content being requested, such as HTML, CSS, images, or JavaScript.',
    'Resource Type: Indicates the format of the requested content (HTML, CSS, image, JS, JSON, XML, etc.).',
    'Server Response: The server returns the appropriate file or data based on the request.',
  ],
  requestExamples: [
    'HTML Page: If you want a webpage, the server sends back the HTML content.',
    'CSS: For styling a webpage, the server sends the CSS file.',
    'Image: If you ask for a picture (like a JPG), the server sends the image.',
    'JavaScript: If you need functionality for the page, the server sends the JS code.',
    'Data: If you need data in XML or JSON format, the server sends that data back.',
  ],
  requestCircleFootnote:
    'The HTTP Request Circle shows how a web browser requests different resources from a server and receives corresponding files or data.',
  components: [
    {
      concept: 'HTTP Request Headers',
      description: 'Key-value pairs sent with the request that provide client details, preferences and request metadata.',
    },
    {
      concept: 'HTTP Request Body',
      description: 'Contains data sent to the server, such as form data, credentials, or payload content.',
    },
    {
      concept: 'HTTP Response',
      description: 'Server reply to a request, including status code, headers, and an optional body.',
    },
    {
      concept: 'HTTP Status Codes',
      description: 'Three-digit codes indicating request results (1xx informational, 2xx success, 3xx redirection, 4xx client error, 5xx server error).',
    },
    {
      concept: 'HTTP Response Headers',
      description: 'Metadata describing the response, such as content type, language, and encoding.',
    },
    {
      concept: 'HTTP Response Body',
      description: 'Actual content returned by the server, such as HTML, JSON, images, or other data.',
    },
  ],
  history: [
    'Tim Berners-Lee and his team at CERN invented the original HTTP protocol.',
    'HTTP version 0.9 was the initial version introduced in 1991.',
    'HTTP version 1.0 followed in 1996 with RFC 1945.',
    'HTTP version 1.1 was introduced in 1997 (RFC 2068), later refined in RFC 2616 (1999).',
    'HTTP version 2.0 was specified in RFC 7540 and published on May 14, 2015.',
    'HTTP version 3.0 (HTTP/3) is based on QUIC and standardized in RFC 9114 (2022).',
  ],
  advantages: [
    'Platform independence: Works on any operating system.',
    'Compatibility: Compatible with various protocols and technologies.',
    'Efficiency: Optimized for performance.',
    'Security: Can be secured using HTTPS (HTTP over TLS/SSL).',
  ],
  disadvantages: [
    'Lack of security: Data is transmitted in plain text without HTTPS.',
    'Performance issues: Can be inefficient for large or multiple data transfers.',
    'Statelessness: Does not retain client state and needs cookies/sessions for continuity.',
  ],
  quiz: {
    title: 'Suggested Quiz',
    total: '5 Questions',
    question:
      'A browser opens a SINGLE persistent TCP connection to a server. The webpage has a top-level HTML page plus 5 embedded image objects. All caches are empty. How many TCP connections are used?',
    options: ['A) 1', 'B) 6', 'C) 5', 'D) 7'],
    source: '(GATE 2019 | MCQ)',
  },
  articleTags: ['HTML', 'HTTP'],
  author: {
    name: '__a_dedicated_sapient__24',
    initial: 'A',
    url: 'https://www.geeksforgeeks.org/html/what-is-http/',
  },
  courseUrl: 'https://www.geeksforgeeks.org/html/what-is-http/',
  explore: [
    {
      heading: 'Explore',
      groups: [
        {
          heading: 'HTML Basics',
          items: [
            { label: 'HTML Introduction', url: 'https://www.geeksforgeeks.org/html/html-introduction/' },
            { label: 'What is HTTP', url: 'https://www.geeksforgeeks.org/html/what-is-http/' },
          ],
        },
        {
          heading: 'Structure and Elements',
          items: [
            { label: 'Elements', url: 'https://www.geeksforgeeks.org/html/html-elements/' },
            { label: 'Attributes', url: 'https://www.geeksforgeeks.org/html/html-attributes/' },
          ],
        },
        {
          heading: 'Lists',
          items: [
            { label: 'Ordered Lists', url: 'https://www.geeksforgeeks.org/html/html-ol-tag/' },
            { label: 'Unordered Lists', url: 'https://www.geeksforgeeks.org/html/html-ul-tag/' },
          ],
        },
        {
          heading: 'Visuals and Media',
          items: [
            { label: 'Images', url: 'https://www.geeksforgeeks.org/html/html-images/' },
            { label: 'Video', url: 'https://www.geeksforgeeks.org/html/html-videos/' },
          ],
        },
        {
          heading: 'Layouts and Designs',
          items: [
            { label: 'HTML Layout', url: 'https://www.geeksforgeeks.org/html/html-layout/' },
            { label: 'Responsive Web Design', url: 'https://www.geeksforgeeks.org/responsive-web-design/' },
          ],
        },
        {
          heading: 'Projects and Advanced Topics',
          items: [
            { label: 'HTML Projects', url: 'https://www.geeksforgeeks.org/html/html-projects/' },
            { label: 'HTML5 APIs', url: 'https://www.geeksforgeeks.org/html/html5-apis/' },
          ],
        },
        {
          heading: 'Tutorial References',
          items: [
            { label: 'HTML Cheat Sheet', url: 'https://www.geeksforgeeks.org/html/html-cheat-sheet-a-basic-guide-to-html/' },
            { label: 'HTTP vs HTTPS', url: 'https://www.geeksforgeeks.org/computer-networks/difference-between-http-and-https/' },
          ],
        },
      ],
    },
    {
      heading: 'HTML Courses',
      items: [
        { label: 'HTML Tutorial', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
        { label: 'What is HTTP', url: 'https://www.geeksforgeeks.org/html/what-is-http/' },
      ],
    },
  ],
};
