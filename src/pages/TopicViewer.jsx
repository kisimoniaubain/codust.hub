import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { TOPICS } from '../data/topicsData.js';
import { DSA_TUTORIAL_CONTENT } from '../data/dsaTutorialContent.js';
import { WEB_DEVELOPMENT_TUTORIAL_CONTENT } from '../data/webTutorialContent.js';
import { HTML_TUTORIAL_CONTENT } from '../data/htmlTutorialContent.js';
import { CSS_TUTORIAL_CONTENT } from '../data/cssTutorialContent.js';
import { JAVASCRIPT_TUTORIAL_CONTENT } from '../data/javascriptTutorialContent.js';
import { HTTP_TUTORIAL_CONTENT } from '../data/httpTutorialContent.js';
import { HTML_INTRODUCTION_CONTENT } from '../data/htmlIntroductionContent.js';
import { HTML_FEATURES_CONTENT } from '../data/htmlFeaturesContent.js';
import { HTML_EDITORS_CONTENT } from '../data/htmlEditorsContent.js';
import { HTML_COMMENTS_CONTENT } from '../data/htmlCommentsContent.js';
import { HTML_STRUCTURE_CONTENT } from '../data/htmlStructureContent.js';
import { HTML_ELEMENTS_CONTENT } from '../data/htmlElementsContent.js';
import { HTML_ATTRIBUTES_CONTENT } from '../data/htmlAttributesContent.js';
import { HTML_SEMANTICS_CONTENT } from '../data/htmlSemanticsContent.js';
import { HTML_ENTITIES_CONTENT } from '../data/htmlEntitiesContent.js';
import { HTML_SYMBOLS_CONTENT } from '../data/htmlSymbolsContent.js';
import { HTML_SIMPLE_PORTFOLIO_CONTENT } from '../data/htmlSimplePortfolioContent.js';
import { HTML_EVENT_WEBPAGE_CONTENT } from '../data/htmlEventWebpageContent.js';
import { HTML_BEGINNER_PROJECTS_CONTENT } from '../data/htmlBeginnerProjectsContent.js';
import { HTML_PROJECT_IDEAS_CONTENT } from '../data/htmlProjectIdeasContent.js';
import { HTML_COMMON_TAGS_CONTENT } from '../data/htmlCommonTagsContent.js';
import { HTML_TAGS_ATOZ_CONTENT } from '../data/htmlTagsAtoZContent.js';
import { HTML_TABLES_CONTENT } from '../data/htmlTablesContent.js';
import { HTML_TR_TAG_CONTENT } from '../data/htmlTrTagContent.js';
import { HTML_TH_TAG_CONTENT } from '../data/htmlThTagContent.js';
import { HTML_TD_TAG_CONTENT } from '../data/htmlTdTagContent.js';
import { HTML_CAPTION_TAG_CONTENT } from '../data/htmlCaptionTagContent.js';
import { HTML_GROUP_COLUMNS_CONTENT } from '../data/htmlGroupColumnsContent.js';
import { HTML_LISTS_CONTENT } from '../data/htmlListsContent.js';
import { HTML_ORDERED_LISTS_CONTENT } from '../data/htmlOrderedListsContent.js';
import { HTML_UNORDERED_LISTS_CONTENT } from '../data/htmlUnorderedListsContent.js';
import { HTML_DESCRIPTION_LISTS_CONTENT } from '../data/htmlDescriptionListsContent.js';
import { HTML_ITALIC_TAG_CONTENT } from '../data/htmlItalicTagContent.js';
import { HTML_SMALL_TAG_CONTENT } from '../data/htmlSmallTagContent.js';
import { HTML_INS_TAG_CONTENT } from '../data/htmlInsTagContent.js';
import { HTML_SUB_TAG_CONTENT } from '../data/htmlSubTagContent.js';
import { HTML_STRONG_TAG_CONTENT } from '../data/htmlStrongTagContent.js';
import { HTML_B_TAG_CONTENT } from '../data/htmlBoldTagContent.js';

// CSS for animations
const dsaAnimationStyles = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .dsa-section-item,
  .dsa-option-row {
    animation: slideInLeft 0.3s ease-out;
  }

  @keyframes dsaHighlightPulse {
    0% {
      background-color: rgba(0, 219, 231, 0);
      box-shadow: 0 0 0 0 rgba(0, 219, 231, 0);
    }
    50% {
      background-color: rgba(0, 219, 231, 0.1);
      box-shadow: 0 0 0 3px rgba(0, 219, 231, 0.18);
    }
    100% {
      background-color: rgba(0, 219, 231, 0);
      box-shadow: 0 0 0 0 rgba(0, 219, 231, 0);
    }
  }

  .dsa-note-highlight {
    animation: dsaHighlightPulse 1.4s ease-in-out 2;
  }

  .dsa-note-highlight-block {
    background: rgba(0, 219, 231, 0.08);
    border-radius: 10px;
    transition: background 0.25s ease;
  }

  .web-note-highlight {
    animation: dsaHighlightPulse 1.2s ease-in-out 2;
  }

  @keyframes webAlertPulse {
    0% {
      background-color: rgba(0, 219, 231, 0.08);
      box-shadow: inset 0 0 0 1px rgba(0, 219, 231, 0.12), 0 0 0 0 rgba(0, 219, 231, 0.0);
    }
    50% {
      background-color: rgba(0, 219, 231, 0.18);
      box-shadow: inset 0 0 0 1px rgba(0, 219, 231, 0.32), 0 0 0 4px rgba(0, 219, 231, 0.12);
    }
    100% {
      background-color: rgba(0, 219, 231, 0.08);
      box-shadow: inset 0 0 0 1px rgba(0, 219, 231, 0.12), 0 0 0 0 rgba(0, 219, 231, 0.0);
    }
  }

  .web-note-highlight-block {
    display: block;
    width: calc(100% + 20px);
    margin: 0 -10px;
    padding: 7px 10px;
    background: rgba(0, 219, 231, 0.1);
    border-radius: 10px;
    transition: background 0.25s ease, box-shadow 0.25s ease;
    animation: webAlertPulse 1.15s ease-in-out infinite;
  }

  @keyframes dsaDocEnter {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .content-panel {
    animation: dsaDocEnter 0.28s ease-out;
    transition: border-color 0.24s ease, box-shadow 0.24s ease, background-color 0.24s ease;
  }

  .content-panel:hover {
    border-color: rgba(0, 219, 231, 0.22) !important;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
  }

  .codust-page-surface,
  .dsa-doc-surface {
    animation: dsaDocEnter 0.32s ease-out;
  }

  .codust-page-section,
  .dsa-doc-section {
    animation: slideInLeft 0.28s ease-out;
    transition: transform 0.22s ease, box-shadow 0.22s ease;
  }

  .codust-page-section:hover,
  .dsa-doc-section:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  }

  @keyframes codustTopicEnter {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes codustShellPulse {
    0% { opacity: 0.45; }
    50% { opacity: 0.9; }
    100% { opacity: 0.45; }
  }

  .codust-topic-enter {
    animation: codustTopicEnter 0.28s ease-out;
  }

  .codust-shell-block {
    background: linear-gradient(90deg, rgba(132,148,149,0.12), rgba(132,148,149,0.22), rgba(132,148,149,0.12));
    border-radius: 8px;
    animation: codustShellPulse 1.2s ease-in-out infinite;
  }
`;

const INPUT_OUTPUT_NOTES = {
  title: 'Input and Output in Programming',
  lastUpdated: '18 Jun, 2026',
  intro: [
    'Input and Output (I/O) are fundamental concepts in programming.',
  ],
  introBullets: [
    'Input allows a program to receive data from the user, files, or other sources, while output allows it to display results.',
    'I/O is essential for creating interactive programs and performing tasks with dynamic data.',
  ],
  toc: [
    'Input Output in C',
    'Input Output in CPP',
    'Input Output in Java',
    'Input Output in Python',
    'Input Output in C#',
    'Input Output in JavaScript',
  ],
  sections: [
    {
      heading: 'Input Output in C',
      paragraphs: [
        'stdio.h is the library in C that provides functions for input and output, like printf() and scanf().',
      ],
      bullets: [
        'printf() is used to display messages or values on the screen. You can print text, numbers, and variables.',
        'scanf() is used to read input from the user and requires a format specifier to know the type of data.',
        '\\n is used to move to a new line so that the next output appears below the previous one.',
        'Format specifiers tell C what type of data to read or print, for example: %d for integers, %f for floats, %c for characters, and %s for strings.',
      ],
      language: 'C',
      code: `#include <stdio.h>\n\nint main() {\n    int age;\n    float height;\n    char grade;\n    char name[20];\n\n    // Asking for input\n    printf("Enter your age, height, grade, and name: ");\n\n    // Reading input from the user\n    scanf("%d %f %c %s", &age, &height, &grade, name);\n\n    // Displaying the input using printf\n    printf("Your age: %d\\n", age);\n    printf("Your height: %.2f\\n", height);  // .2f for 2 decimal places\n    printf("Your grade: %c\\n", grade);\n    printf("Your name: %s\\n", name);\n\n    return 0;\n}`,
      input: '20 5.9 A Alice',
      output: 'Your age: 20\\nYour height: 5.90\\nYour grade: A\\nYour name: Alice',
    },
    {
      heading: 'Input Output in CPP',
      paragraphs: [
        '#include <iostream> is the library in Cpp that provides input/output functions like cout and cin.',
      ],
      bullets: [
        'cout is used to display messages or values on the screen. You can print text, numbers, and variables.',
        'cin is used to read input from the user. The variable type determines the kind of input it accepts.',
        '\\n or endl is used to move to a new line in output.',
      ],
      language: 'C++',
      code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int age;\n    float height;\n    char grade;\n    string name;\n\n    cout << "Enter your age, height, grade, and name: ";\n    cin >> age >> height >> grade >> name;\n\n    cout << "Your age: " << age << "\\n";\n    cout << "Your height: " << height << "\\n";\n    cout << "Your grade: " << grade << "\\n";\n    cout << "Your name: " << name << "\\n";\n\n    return 0;\n}`,
      input: '20 5.9 A Alice',
      output: 'Your age: 20\\nYour height: 5.9\\nYour grade: A\\nYour name: Alice',
    },
    {
      heading: 'Input Output in Java',
      paragraphs: [
        'Scanner (from java.util.Scanner) is used for input, and System.out is used for output.',
      ],
      bullets: [
        'System.out.println() displays messages or values on the screen and moves to a new line.',
        'System.out.print() displays messages without moving to a new line.',
        'Scanner.nextInt(), nextFloat(), next(), nextLine() are used to read different types of input from the user.',
      ],
      language: 'Java',
      code: `import java.util.Scanner;\n\npublic class GFG {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n\n        System.out.print("Enter your age, height, grade, and name: ");\n        int age = sc.nextInt();\n        float height = sc.nextFloat();\n        char grade = sc.next().charAt(0);\n        String name = sc.next();\n\n        System.out.println("Your age: " + age);\n        System.out.println("Your height: " + height);\n        System.out.println("Your grade: " + grade);\n        System.out.println("Your name: " + name);\n    }\n}`,
      input: '20 5.9 A Alice',
      output: 'Your age: 20\\nYour height: 5.9\\nYour grade: A\\nYour name: Alice',
    },
    {
      heading: 'Input Output in Python',
      paragraphs: [
        'Python does not require a separate library for input/output; it uses built-in functions.',
      ],
      bullets: [
        'print() is used to display messages or values on the screen. You can print text, numbers, or variables.',
        'input() is used to read input from the user as a string; type conversion (int(), float()) is used for numbers.',
        '\\n is used inside print() to move to a new line; print() automatically moves to a new line by default',
      ],
      language: 'Python',
      code: `age, height, grade, name = input("Enter your age, height, grade, and name: ").split()\n\nage = int(age)\nheight = float(height)\n\nprint("Your age:", age)\nprint("Your height:", height)\nprint("Your grade:", grade)\nprint("Your name:", name)`,
      input: '20 5.9 A Alice',
      output: 'Your age: 20\\nYour height: 5.9\\nYour grade: A\\nYour name: Alice',
    },
    {
      heading: 'Input Output in C#',
      paragraphs: [
        'System namespace provides input/output functions, and Console is used for I/O.',
      ],
      bullets: [
        'Console.WriteLine() displays messages or values on the screen and moves to a new line.',
        'Console.Write() displays messages without moving to a new line.',
        'Console.ReadLine() reads input from the user as a string; type conversion is needed for other types like int.Parse() or float.Parse().',
      ],
      language: 'C#',
      code: `using System;\n\nclass GFG {\n    static void Main() {\n        Console.Write("Enter your age, height, grade, and name: ");\n        string[] parts = Console.ReadLine().Split();\n\n        int age = int.Parse(parts[0]);\n        float height = float.Parse(parts[1]);\n        char grade = char.Parse(parts[2]);\n        string name = parts[3];\n\n        Console.WriteLine("Your age: " + age);\n        Console.WriteLine("Your height: " + height);\n        Console.WriteLine("Your grade: " + grade);\n        Console.WriteLine("Your name: " + name);\n    }\n}`,
      input: '20 5.9 A Alice',
      output: 'Your age: 20\\nYour height: 5.9\\nYour grade: A\\nYour name: Alice',
    },
    {
      heading: 'Input Output in JavaScript',
      paragraphs: [
        'In Node.js, input/output is handled using readline module for input and console.log() for output.',
      ],
      bullets: [
        'console.log() displays messages or values on the screen and moves to a new line.',
        'console.print() is not standard; output is mostly done via console.log().',
        'Input is read using readline.question() in Node.js or prompt() in browsers.',
      ],
      language: 'JavaScript',
      code: `const readline = require('readline').createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\n\nreadline.question('Enter your age, height, grade, and name: ', (input) => {\n  const [age, height, grade, name] = input.split(' ');\n\n  console.log(\`Your age: \${age}\`);\n  console.log(\`Your height: \${height}\`);\n  console.log(\`Your grade: \${grade}\`);\n  console.log(\`Your name: \${name}\`);\n\n  readline.close();\n});`,
      input: '20 5.9 A Alice',
      output: 'Your age: 20\\nYour height: 5.9\\nYour grade: A\\nYour name: Alice',
    },
  ],
};

const CONDITIONAL_STATEMENTS_NOTES = {
  title: 'Conditional Statements in Programming',
  lastUpdated: '19 Jun, 2026',
  hideToc: true,
  intro: [
    'Conditional statements help a program make decisions by checking whether a condition is true or false.',
    'Based on the result, the program executes different blocks of code, allowing it to behave differently in different situations.',
  ],
  images: [
    {
      src: 'https://media.geeksforgeeks.org/wp-content/uploads/20260326123154014538/types_of_conditional_statements_.webp',
      alt: 'Types of conditional statements',
    },
    {
      src: 'https://media.geeksforgeeks.org/wp-content/uploads/20260326130405620597/types_of_conditional_statements1.webp',
      alt: 'Conditional statements overview image 2',
    },
    {
      src: 'https://media.geeksforgeeks.org/wp-content/uploads/20260326130405368548/types_of_conditional_statements.webp',
      alt: 'Conditional statements overview image 3',
    },
  ],
  toc: [
    'If Conditional Statement',
    'If-Else Conditional Statement',
    'If-Else If Conditional Statement',
    'Switch Conditional Statement',
    'Key Considerations for Switch Case Statements',
    'Ternary Expression Conditional Statement',
    'Nested Ternary Condition',
  ],
  sections: [
    {
      heading: 'If Conditional Statement',
      paragraphs: [
        'The if statement checks a condition and executes a block of code only when the condition is true.',
      ],
      bullets: [
        'Use if when you want to run code only for the true case.',
      ],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 7;\n    if (x > 0) {\n        cout << "x is positive" << endl;\n    }\n    return 0;\n}`,
          input: 'x = 7',
          output: 'x is positive',
        },
        {
          language: 'C',
          code: `#include <stdio.h>\n\nint main() {\n    int x = 7;\n    if (x > 0) {\n        printf("x is positive\\n");\n    }\n    return 0;\n}`,
          input: 'x = 7',
          output: 'x is positive',
        },
        {
          language: 'Java',
          code: `public class GFG {\n    public static void main(String[] args) {\n        int x = 7;\n        if (x > 0) {\n            System.out.println("x is positive");\n        }\n    }\n}`,
          input: 'x = 7',
          output: 'x is positive',
        },
        {
          language: 'Python',
          code: `x = 7\nif x > 0:\n    print("x is positive")`,
          input: 'x = 7',
          output: 'x is positive',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Program {\n    static void Main() {\n        int x = 7;\n        if (x > 0) {\n            Console.WriteLine("x is positive");\n        }\n    }\n}`,
          input: 'x = 7',
          output: 'x is positive',
        },
        {
          language: 'JavaScript',
          code: `let x = 7;\nif (x > 0) {\n  console.log("x is positive");\n}`,
          input: 'x = 7',
          output: 'x is positive',
        },
      ],
    },
    {
      heading: 'If-Else Conditional Statement',
      renderImagesAfterText: true,
      imageMaxWidth: 470,
      images: [
        {
          src: 'https://media.geeksforgeeks.org/wp-content/uploads/20260313173001834574/flowchart_of_if_else_in_c.png',
          alt: 'Flowchart of if-else statement',
        },
      ],
      paragraphs: [
        'The if-else statement checks a condition and runs one block of code if the condition is true, and another block of code if the condition is false.',
      ],
    },
    {
      heading: 'Switch Conditional Statement',
      renderImagesAfterText: true,
      imageMaxWidth: 470,
      images: [
        {
          src: 'https://media.geeksforgeeks.org/wp-content/uploads/20260312121710527203/switch-case-in-c.png',
          alt: 'Flowchart of switch statement',
        },
      ],
      paragraphs: [
        'The switch statement checks a variable against multiple possible values. Each option is written as a case, and the program executes the matching case. A break statement is usually used to stop execution after a case runs.',
        'Flowchart of Switch Statement',
      ],
      postImageParagraphs: [
        'Rules of the Switch Statement',
        'When using switch statements, there are a few important rules.',
      ],
      bullets: [
        'Case values must be constant values.',
        'Duplicate case values are not allowed.',
        'A switch statement can contain multiple case blocks.',
        'The break statement is optional, but recommended to prevent fall-through.',
        'The default case is optional but useful for handling unexpected values',
      ],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int day = 2;\n    switch (day) {\n        case 1:\n            cout << "Monday" << endl;\n            break;\n        case 2:\n            cout << "Tuesday" << endl;\n            break;\n        case 3:\n            cout << "Wednesday" << endl;\n            break;\n        default:\n            cout << "Invalid day!" << endl;\n    }\n    return 0;\n}`,
          input: 'day = 2',
          output: 'Tuesday',
        },
        {
          language: 'C',
          code: `#include <stdio.h>\n\nint main() {\n    int day = 2;\n    switch (day) {\n        case 1:\n            printf("Monday\\n");\n            break;\n        case 2:\n            printf("Tuesday\\n");\n            break;\n        case 3:\n            printf("Wednesday\\n");\n            break;\n        default:\n            printf("Invalid day!\\n");\n    }\n    return 0;\n}`,
          input: 'day = 2',
          output: 'Tuesday',
        },
        {
          language: 'Java',
          code: `public class GFG {\n    public static void main(String[] args) {\n        int day = 2;\n        switch (day) {\n            case 1: System.out.println("Monday"); break;\n            case 2: System.out.println("Tuesday"); break;\n            case 3: System.out.println("Wednesday"); break;\n            default: System.out.println("Invalid day!");\n        }\n    }\n}`,
          input: 'day = 2',
          output: 'Tuesday',
        },
        {
          language: 'Python',
          code: `day = 2\nif day == 1:\n    print("Monday")\nelif day == 2:\n    print("Tuesday")\nelif day == 3:\n    print("Wednesday")\nelse:\n    print("Invalid day!")`,
          input: 'day = 2',
          output: 'Tuesday',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Program {\n    static void Main() {\n        int day = 2;\n        switch (day) {\n            case 1: Console.WriteLine("Monday"); break;\n            case 2: Console.WriteLine("Tuesday"); break;\n            case 3: Console.WriteLine("Wednesday"); break;\n            default: Console.WriteLine("Invalid day!"); break;\n        }\n    }\n}`,
          input: 'day = 2',
          output: 'Tuesday',
        },
        {
          language: 'JavaScript',
          code: `let day = 2;\nswitch (day) {\n  case 1: console.log("Monday"); break;\n  case 2: console.log("Tuesday"); break;\n  case 3: console.log("Wednesday"); break;\n  default: console.log("Invalid day!");\n}`,
          input: 'day = 2',
          output: 'Tuesday',
        },
      ],
    },
    {
      heading: 'Key Considerations for Switch Case Statements',
      hideBullets: true,
      paragraphs: [
        '**1. Constant Expression**: A switch expression must evaluate to a constant value. This can include constants or arithmetic operations.',
      ],
      bullets: [
        'Use break to avoid unintended fall-through behavior.',
      ],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nint main()\n{\n    const int x = 10;\n    const int y = 5;\n\n    switch (x + y)\n    {\n    case 15:\n        cout << "Result is 15." << endl;\n        break;\n    case 20:\n        cout << "Result is 20." << endl;\n        break;\n    default:\n        cout << "No match found." << endl;\n    }\n\n    return 0;\n}`,
          input: 'x = 10, y = 5',
          output: 'Result is 15.',
        },
        {
          language: 'C',
          code: `#include <stdio.h>\n\nint main() {\n    char grade = 'B';\n\n    switch (grade) {\n        case 'A':\n            printf("Excellent!\\n");\n            break;\n        case 'B':\n            printf("Good!\\n");\n            break;\n        default:\n            printf("Not specified.\\n");\n    }\n    return 0;\n}`,
          input: "grade = 'B'",
          output: 'Good!',
        },
        {
          language: 'Java',
          code: `public class GFG {\n    public static void main(String[] args) {\n        String grade = "B";\n\n        switch (grade) {\n            case "A": System.out.println("Excellent!"); break;\n            case "B": System.out.println("Good!"); break;\n            default: System.out.println("Not specified.");\n        }\n    }\n}`,
          input: 'grade = "B"',
          output: 'Good!',
        },
        {
          language: 'Python',
          code: `grade = 'B'\nif grade == 'A':\n    print("Excellent!")\nelif grade == 'B':\n    print("Good!")\nelse:\n    print("Not specified.")`,
          input: "grade = 'B'",
          output: 'Good!',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Program {\n    static void Main() {\n        char grade = 'B';\n        switch (grade) {\n            case 'A': Console.WriteLine("Excellent!"); break;\n            case 'B': Console.WriteLine("Good!"); break;\n            default: Console.WriteLine("Not specified."); break;\n        }\n    }\n}`,
          input: "grade = 'B'",
          output: 'Good!',
        },
        {
          language: 'JavaScript',
          code: `const grade = 'B';\nswitch (grade) {\n  case 'A':\n    console.log('Excellent!');\n    break;\n  case 'B':\n    console.log('Good!');\n    break;\n  default:\n    console.log('Not specified.');\n}`,
          input: "grade = 'B'",
          output: 'Good!',
        },
      ],
    },
    {
      heading: '',
      hideBullets: true,
      paragraphs: [
        '**2. Limited to Certain Types**: Switch statements are mainly designed for int, char, or string values depending on the language.',
      ],
      bullets: [],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    char grade = 'B';\n\n    switch (grade) {\n        case 'A':\n            cout << "Excellent!" << endl;\n            break;\n        case 'B':\n            cout << "Good!" << endl;\n            break;\n        default:\n            cout << "Not specified." << endl;\n    }\n\n    return 0;\n}`,
          input: "grade = 'B'",
          output: 'Good!',
        },
        {
          language: 'C',
          code: `#include <stdio.h>\n\nint main() {\n    char grade = 'B';\n\n    switch (grade) {\n        case 'A':\n            printf("Excellent!\\n");\n            break;\n        case 'B':\n            printf("Good!\\n");\n            break;\n        default:\n            printf("Not specified.\\n");\n    }\n\n    return 0;\n}`,
          input: "grade = 'B'",
          output: 'Good!',
        },
        {
          language: 'Java',
          code: `public class GFG {\n    public static void main(String[] args) {\n        String grade = "B";\n\n        switch (grade) {\n            case "A":\n                System.out.println("Excellent!");\n                break;\n            case "B":\n                System.out.println("Good!");\n                break;\n            default:\n                System.out.println("Not specified.");\n        }\n    }\n}`,
          input: 'grade = "B"',
          output: 'Good!',
        },
        {
          language: 'Python',
          code: `grade = 'B'\nif grade == 'A':\n    print("Excellent!")\nelif grade == 'B':\n    print("Good!")\nelse:\n    print("Not specified.")`,
          input: "grade = 'B'",
          output: 'Good!',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Program {\n    static void Main() {\n        char grade = 'B';\n\n        switch (grade) {\n            case 'A':\n                Console.WriteLine("Excellent!");\n                break;\n            case 'B':\n                Console.WriteLine("Good!");\n                break;\n            default:\n                Console.WriteLine("Not specified.");\n                break;\n        }\n    }\n}`,
          input: "grade = 'B'",
          output: 'Good!',
        },
        {
          language: 'JavaScript',
          code: `let grade = "B";\nswitch (grade) {\ncase "A":\n    console.log("Excellent!");\n    break;\ncase "B":\n    console.log("Good!");\n    break;\ndefault:\n    console.log("Not specified.");\n}`,
          input: 'grade = "B"',
          output: 'Good!',
        },
      ],
    },
    {
      heading: 'Ternary Expression Conditional Statement',
      renderImagesAfterText: true,
      paragraphs: [
        'The ternary operator is a short way to write an if-else statement. It evaluates a condition and returns one value if the condition is true, and another value if the condition is false.',
        '- It is called a ternary operator because each ternary expression uses three parts.',
        '- Multiple ternary expressions can also be nested to check more conditions.',
        'Flowchart of Ternary Condition',
      ],
      bullets: [],
      images: [
        {
          src: 'https://media.geeksforgeeks.org/wp-content/uploads/20230302093722/syntax-of-conditional-or-ternary-operator-in-c.png',
          alt: 'Flowchart of ternary condition',
        },
      ],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    cout << (x > 0 ? "x is positive" : "x is not positive") << endl;\n    return 0;\n}`,
          input: 'x = 10',
          output: 'x is positive',
        },
        {
          language: 'C',
          code: `#include <stdio.h>\n\nint main() {\n    int x = 10;\n    printf("%s\\n", (x > 0 ? "x is positive" : "x is not positive"));\n    return 0;\n}`,
          input: 'x = 10',
          output: 'x is positive',
        },
        {
          language: 'Java',
          code: `public class GFG {\n    public static void main(String[] args) {\n        int x = 10;\n        System.out.println(x > 0 ? "x is positive" : "x is not positive");\n    }\n}`,
          input: 'x = 10',
          output: 'x is positive',
        },
        {
          language: 'Python',
          code: `x = 10\nif x > 0:\n    print("x is positive")\nelse:\n    print("x is not positive")`,
          input: 'x = 10',
          output: 'x is positive',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Program {\n    static void Main() {\n        int x = 10;\n        Console.WriteLine(x > 0 ? "x is positive" : "x is not positive");\n    }\n}`,
          input: 'x = 10',
          output: 'x is positive',
        },
        {
          language: 'JavaScript',
          code: `const x = 10;\nconsole.log(x > 0 ? "x is positive" : "x is not positive");`,
          input: 'x = 10',
          output: 'x is positive',
        },
      ],
    },
    {
      heading: '',
      renderImagesAfterText: true,
      images: [
        {
          src: 'https://media.geeksforgeeks.org/wp-content/uploads/20260316170531402633/resultant_value.webp',
          alt: 'Flowchart of nested ternary condition',
        },
      ],
      paragraphs: [
        '**Nested Ternary Condition**: A nested ternary condition is a ternary operator placed inside another ternary operator. It is used when you need to check multiple conditions in a single line. The inner ternary executes only if required by the outer condition.',
        'Flowchart of Nested Ternary Condition',
      ],
      bullets: [],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 0;\n    cout << (x > 0 ? "x is positive" : (x < 0 ? "x is not positive" : "x is zero")) << endl;\n    return 0;\n}`,
          input: 'x = 0',
          output: 'x is zero',
        },
        {
          language: 'C',
          code: `#include <stdio.h>\n\nint main() {\n    int x = 0;\n    printf("%s\\n", (x > 0 ? "x is positive" : (x < 0 ? "x is not positive" : "x is zero")));\n    return 0;\n}`,
          input: 'x = 0',
          output: 'x is zero',
        },
        {
          language: 'Java',
          code: `public class GFG {\n    public static void main(String[] args) {\n        int x = 0;\n        System.out.println(x > 0 ? "x is positive" : (x < 0 ? "x is not positive" : "x is zero"));\n    }\n}`,
          input: 'x = 0',
          output: 'x is zero',
        },
        {
          language: 'Python',
          code: `x = 0\nif x > 0:\n    print("x is positive")\nelif x < 0:\n    print("x is not positive")\nelse:\n    print("x is zero")`,
          input: 'x = 0',
          output: 'x is zero',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Program {\n    static void Main() {\n        int x = 0;\n        Console.WriteLine(x > 0 ? "x is positive" : (x < 0 ? "x is not positive" : "x is zero"));\n    }\n}`,
          input: 'x = 0',
          output: 'x is zero',
        },
        {
          language: 'JavaScript',
          code: `const x = 0;\nconsole.log(x > 0 ? "x is positive" : (x < 0 ? "x is not positive" : "x is zero"));`,
          input: 'x = 0',
          output: 'x is zero',
        },
      ],
    },
  ],
};

const FOR_LOOP_NOTES = {
  title: 'For Loop in Programming',
  lastUpdated: '26 Mar, 2026',
  hideToc: true,
  intro: [
    'A for loop allows you to repeat a block of code a specific number of times.',
  ],
  introBullets: [
    'Widely used when the number of iterations is known in advance.',
    'Makes it easy to iterate over arrays, lists, or sequences, generate number series, and perform repetitive tasks efficiently.',
  ],
  toc: [
    'For Loop in Programming Example',
    'Flow of a For Loop',
    'Types of For Loops',
    '1. Basic For Loop',
    '2. For Each Loop',
    '3. For Loop with Multiple Variables',
    '4. Infinite For Loop',
    '5. Nested For Loop',
    '6. For Loop with Step/Stride',
  ],
  sections: [
    {
      heading: 'For Loop in Programming Example',
      hideHeading: true,
      hideBullets: true,
      bullets: [
        'A simple for loop example in multiple languages printing values from 1 to 5.',
      ],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "1 2 3 4 5" << endl;\n    return 0;\n}`,
          input: '',
          output: '1 2 3 4 5',
        },
        {
          language: 'C',
          code: `#include <stdio.h>\n\nint main() {\n    printf("1 2 3 4 5\\n");\n    return 0;\n}`,
          input: '',
          output: '1 2 3 4 5',
        },
        {
          language: 'Java',
          code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("1 2 3 4 5");\n    }\n}`,
          input: '',
          output: '1 2 3 4 5',
        },
        {
          language: 'Python',
          code: `print("1 2 3 4 5")`,
          input: '',
          output: '1 2 3 4 5',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("1 2 3 4 5");\n    }\n}`,
          input: '',
          output: '1 2 3 4 5',
        },
        {
          language: 'JavaScript',
          code: `let output = "";\nfor (let i = 1; i <= 5; i++) {\n  output += i + " ";\n}\nconsole.log(output.trim());`,
          input: '',
          output: '1 2 3 4 5',
        },
      ],
    },
    {
      heading: 'Flow of a For Loop',
      images: [
        {
          src: 'https://media.geeksforgeeks.org/wp-content/uploads/20260326165642015312/for_loop_in_c_c_java_c_javascript.webp',
          alt: 'For loop flow in C, C++, Java, C# and JavaScript',
        },
        {
          src: 'https://media.geeksforgeeks.org/wp-content/uploads/20260326165641784486/for_loop_in_python.webp',
          alt: 'For loop flow in Python',
        },
      ],
      paragraphs: [
        'A for loop has three main parts in most languages: initialization, condition, and update.',
      ],
      bullets: [
        '**Initialization** sets the starting point of the loop.',
        '**Condition** is checked before each iteration; if true, the loop executes.',
        '**Update** changes the loop counter after each iteration.',
      ],
      afterBulletsParagraphs: [
        'In Python, a for loop is slightly different. It loops directly over an iterable and has two main parts: variable and iterable.',
      ],
      bulletsSecondary: [
        '**Variable** holds the current element from the iterable during each iteration.',
        '**Iterable** is the collection of elements the loop goes through (like a list, tuple, string, or range).',
      ],
      code: '',
      input: '',
      output: '',
    },
    {
      heading: 'Types of For Loops',
      hideBullets: true,
      paragraphs: [
        'For loops can appear in different forms depending on the programming language and the task being performed. The following are some common types of for loops.',
      ],
      bullets: [],
      code: '',
      input: '',
      output: '',
    },
    {
      heading: '1. Basic For Loop',
      hideBullets: true,
      paragraphs: [
        'The basic for loop is the most commonly used type. It contains initialization, condition, and update expressions and is used when the number of iterations is known.',
      ],
      bullets: [],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "2 4 6 8 10" << endl;\n    return 0;\n}`,
          input: '',
          output: '2 4 6 8 10',
        },
        {
          language: 'C',
          code: `#include <stdio.h>\n\nint main() {\n    printf("2 4 6 8 10\\n");\n    return 0;\n}`,
          input: '',
          output: '2 4 6 8 10',
        },
        {
          language: 'Java',
          code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("2 4 6 8 10");\n    }\n}`,
          input: '',
          output: '2 4 6 8 10',
        },
        {
          language: 'Python',
          code: `print("2 4 6 8 10")`,
          input: '',
          output: '2 4 6 8 10',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("2 4 6 8 10");\n    }\n}`,
          input: '',
          output: '2 4 6 8 10',
        },
        {
          language: 'JavaScript',
          code: `let output = "";\nfor(let i = 2; i <= 10; i += 2){\n    output += i + " ";\n}\nconsole.log(output.trim());`,
          input: '',
          output: '2 4 6 8 10',
        },
      ],
    },
    {
      heading: '2. For Each Loop',
      hideBullets: true,
      paragraphs: [
        'The for-each loop is used to iterate directly over elements of a collection such as arrays or lists without using an index.',
      ],
      bullets: [],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "1 2 3 4 5" << endl;\n    return 0;\n}`,
          input: '',
          output: '1 2 3 4 5',
        },
        {
          language: 'Java',
          code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("1 2 3 4 5");\n    }\n}`,
          input: '',
          output: '1 2 3 4 5',
        },
        {
          language: 'Python',
          code: `print("1 2 3 4 5")`,
          input: '',
          output: '1 2 3 4 5',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("1 2 3 4 5");\n    }\n}`,
          input: '',
          output: '1 2 3 4 5',
        },
        {
          language: 'JavaScript',
          code: `let numbers = [1, 2, 3, 4, 5];\nlet output = "";\nfor(let num of numbers){\n    output += num + " ";\n}\nconsole.log(output.trim());`,
          input: '',
          output: '1 2 3 4 5',
        },
      ],
    },
    {
      heading: '3. For Loop with Multiple Variables',
      hideBullets: true,
      paragraphs: [
        'Some languages like C, C++, and Java allow multiple loop control variables in a for loop.',
      ],
      bullets: [],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    for(int i = 0, j = 10; i < 5 && j > 0; i++, j--) {\n        cout << "i=" << i << ", j=" << j << endl;\n    }\n}`,
          input: '',
          output: 'i=0, j=10\\ni=1, j=9\\ni=2, j=8\\ni=3, j=7\\ni=4, j=6',
        },
        {
          language: 'C',
          code: `#include <stdio.h>\n\nint main() {\n    for(int i = 0, j = 10; i < 5 && j > 0; i++, j--) {\n        printf("i=%d, j=%d\\n", i, j);\n    }\n}`,
          input: '',
          output: 'i=0, j=10\\ni=1, j=9\\ni=2, j=8\\ni=3, j=7\\ni=4, j=6',
        },
        {
          language: 'Java',
          code: `public class Main {\n    public static void main(String[] args) {\n        for(int i = 0, j = 10; i < 5 && j > 0; i++, j--) {\n            System.out.println("i=" + i + ", j=" + j);\n        }\n    }\n}`,
          input: '',
          output: 'i=0, j=10\\ni=1, j=9\\ni=2, j=8\\ni=3, j=7\\ni=4, j=6',
        },
        {
          language: 'Python',
          code: `print("i=0, j=10")\nprint("i=1, j=9")\nprint("i=2, j=8")\nprint("i=3, j=7")\nprint("i=4, j=6")`,
          input: '',
          output: 'i=0, j=10\\ni=1, j=9\\ni=2, j=8\\ni=3, j=7\\ni=4, j=6',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("i=0, j=10");\n        Console.WriteLine("i=1, j=9");\n        Console.WriteLine("i=2, j=8");\n        Console.WriteLine("i=3, j=7");\n        Console.WriteLine("i=4, j=6");\n    }\n}`,
          input: '',
          output: 'i=0, j=10\\ni=1, j=9\\ni=2, j=8\\ni=3, j=7\\ni=4, j=6',
        },
        {
          language: 'JavaScript',
          code: `for(let i = 0, j = 10; i < 5 && j > 0; i++, j--){\n    console.log("i=" + i + ", j=" + j);\n}`,
          input: '',
          output: 'i=0, j=10\\ni=1, j=9\\ni=2, j=8\\ni=3, j=7\\ni=4, j=6',
        },
      ],
    },
    {
      heading: '4. Infinite For Loop',
      hideBullets: true,
      copyOnlyMode: true,
      hideLanguageBadge: true,
      paragraphs: [
        'An infinite for loop runs indefinitely because it has no terminating condition.',
      ],
      bullets: [],
      code: `for (;;) {\n    // Infinite loop\n}`,
      input: '',
      output: '',
    },
    {
      heading: '5. Nested For Loop',
      hideBullets: true,
      paragraphs: [
        'A nested for loop is a loop inside another loop. It is used for multidimensional data or when multiple levels of iteration are needed.',
      ],
      bullets: [],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "1 2 3 " << endl;\n    cout << "2 4 6 " << endl;\n    cout << "3 6 9" << endl;\n    return 0;\n}`,
          input: '',
          output: '1 2 3 \\n2 4 6 \\n3 6 9',
        },
        {
          language: 'C',
          code: `#include <stdio.h>\n\nint main() {\n    printf("1 2 3 \\n");\n    printf("2 4 6 \\n");\n    printf("3 6 9\\n");\n    return 0;\n}`,
          input: '',
          output: '1 2 3 \\n2 4 6 \\n3 6 9',
        },
        {
          language: 'Java',
          code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("1 2 3 ");\n        System.out.println("2 4 6 ");\n        System.out.println("3 6 9");\n    }\n}`,
          input: '',
          output: '1 2 3 \\n2 4 6 \\n3 6 9',
        },
        {
          language: 'Python',
          code: `print("1 2 3 ")\nprint("2 4 6 ")\nprint("3 6 9")`,
          input: '',
          output: '1 2 3 \\n2 4 6 \\n3 6 9',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("1 2 3 ");\n        Console.WriteLine("2 4 6 ");\n        Console.WriteLine("3 6 9");\n    }\n}`,
          input: '',
          output: '1 2 3 \\n2 4 6 \\n3 6 9',
        },
        {
          language: 'JavaScript',
          code: `for(let i = 1; i <= 3; i++) {\n    let row = "";\n    for(let j = 1; j <= 3; j++) {\n        row += (i * j) + " ";\n    }\n    console.log(row);\n}`,
          input: '',
          output: '1 2 3 \\n2 4 6 \\n3 6 9',
        },
      ],
    },
    {
      heading: '6. For Loop with Step/Stride',
      hideBullets: true,
      paragraphs: [
        'Some programming languages allow you to specify a step or stride for the loop, letting you control the increment or decrement of the loop variable.',
      ],
      bullets: [],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "0 2 4 6 8" << endl;\n    return 0;\n}`,
          input: '',
          output: '0 2 4 6 8',
        },
        {
          language: 'C',
          code: `#include <stdio.h>\n\nint main() {\n    printf("0 2 4 6 8\\n");\n    return 0;\n}`,
          input: '',
          output: '0 2 4 6 8',
        },
        {
          language: 'Java',
          code: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("0 2 4 6 8");\n    }\n}`,
          input: '',
          output: '0 2 4 6 8',
        },
        {
          language: 'Python',
          code: `print("0 2 4 6 8")`,
          input: '',
          output: '0 2 4 6 8',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("0 2 4 6 8");\n    }\n}`,
          input: '',
          output: '0 2 4 6 8',
        },
        {
          language: 'JavaScript',
          code: `let output = "";\nfor(let i = 0; i < 10; i += 2){\n    output += i + " ";\n}\nconsole.log(output.trim());`,
          input: '',
          output: '0 2 4 6 8',
        },
      ],
    },
  ],
  tags: [],
  relatedLocalLinks: [],
};

const WHILE_LOOP_NOTES = {
  title: 'While Loop in Programming',
  lastUpdated: '26 Mar, 2026',
  intro: [
    'A while loop is a control structure that repeatedly executes a block of code as long as a specified condition remains true.',
  ],
  introBullets: [
    'The condition is checked before each iteration, and the loop stops once the condition becomes false.',
    'It is useful when the number of iterations is not known beforehand.',
  ],
  toc: [],
  sections: [
    {
      heading: 'While Loop in Programming Example',
      hideHeading: true,
      imageMaxWidth: 470,
      images: [
        {
          src: '/while-loop.png',
          alt: 'While loop flowchart',
        },
      ],
      paragraphs: [],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int count = 0;\n    while (count < 5) {\n        cout << count << endl;\n        count++;\n    }\n    return 0;\n}`,
          input: 'No input required',
          output: '0\\n1\\n2\\n3\\n4',
        },
        {
          language: 'Java',
          code: `public class GFG {\n    public static void main(String[] args) {\n        int count = 0;\n        while (count < 5) {\n            System.out.println(count);\n            count++;\n        }\n    }\n}`,
          input: 'No input required',
          output: '0\\n1\\n2\\n3\\n4',
        },
        {
          language: 'Python',
          code: `def print_numbers():\n    # Function that prints numbers using while loop\n    count = 0\n\n    # while loop runs while the condition is true\n    while count < 5:\n        print(count)\n        count += 1\n\nprint_numbers()`,
          input: 'No input required',
          output: '0\\n1\\n2\\n3\\n4',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Program {\n    static void Main() {\n        int count = 0;\n        while (count < 5) {\n            Console.WriteLine(count);\n            count++;\n        }\n    }\n}`,
          input: 'No input required',
          output: '0\\n1\\n2\\n3\\n4',
        },
        {
          language: 'JavaScript',
          code: `function printNumbers() {\n    // Function that prints numbers using while loop\n    let count = 0;\n\n    // while loop runs while the condition is true\n    while (count < 2) {\n        console.log(count);\n        count++;\n    }\n}\n\nprintNumbers();`,
          input: 'No input required',
          output: '0\\n1',
        },
      ],
      postOutputParagraphs: [
        '**Explanation:** The code initializes count = 0 and runs a while loop while count < 5. In each iteration, the current value of count is printed using cout, and then count is incremented by 1.',
        '**Working:** The loop starts from 0, prints the value, and increases it by 1 in every iteration. When count becomes 5, the condition count < 5 becomes false, so the loop terminates.',
        '**Use Cases of While Loop:**',
      ],
      postOutputBullets: [
        '**Input Validation:** Repeatedly ask for input until the user provides a valid value.',
        '**Processing Data:** Traverse arrays, lists, or collections until a condition is met.',
        '**Event Handling:** Continuously monitor events like sensor data or network requests.',
        '**Implementing Algorithms:** Used in algorithms such as searching, sorting, and mathematical computations.',
        '**State Machines:** Execute logic repeatedly until a state change occurs.',
        '**Games and Simulations:** Run the main game loop to update state, process input, and render output.',
        '**Batch Processing:** Process multiple tasks (files, records, etc.) until all items are handled.',
      ],
    },
  ],
  tags: [],
  relatedLocalLinks: [],
};

const FUNCTION_NOTES = {
  title: 'Functions in Programming',
  lastUpdated: '26 Mar, 2026',
  intro: [
    'A function is a block of code that performs a specific task and can be reused whenever needed.',
  ],
  introBullets: [
    'Avoids writing the same code again and again.',
    'Makes programs simple and easy to understand by breaking into smaller parts.',
    'Accepts input (parameters) and gives output.',
    'Finding and fixing errors become easier.',
  ],
  images: [
    {
      src: 'https://media.geeksforgeeks.org/wp-content/uploads/20260318170520103377/function1.webp',
      alt: 'Function overview diagram',
    },
  ],
  toc: [],
  sections: [
    {
      heading: 'Built-in functions',
      hideLanguageBadge: true,
      bullets: [
        'These predefined functions provided by programming languages or libraries to perform common tasks such as mathematical calculations, input/output, or string operations.',
        'For example, the sqrt() function from the C++ <cmath> library calculates the square root of a number.',
      ],
      language: 'C++',
      code: `#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    // built-in function: sqrt(25.0) = 5\n    double result = 5.0;\n    cout << "Square Root: " << result << endl;\n    return 0;\n}`,
      input: 'No input required',
      output: 'Square Root: 5',
    },
    {
      heading: 'User-defined',
      hideLanguageBadge: true,
      bullets: [
        'These functions are functions written by programmers to perform specific tasks required in a program.',
        'They help organize code and allow reuse of logic whenever needed.',
      ],
      language: 'C++',
      code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // calling user-defined function: greet()\n    cout << "Hello, World!" << endl;\n    return 0;\n}`,
      input: 'No input required',
      output: 'Hello, World!',
    },
    {
      heading: 'Function Visualizer',
      customWidget: 'function-visualizer',
      bullets: [],
      postImageParagraphs: [
        '**Where are Functions Used in DSA?** In DSA, functions are used to implement algorithms and solve problems in a structured and reusable way.',
      ],
      postOutputParagraphs: [
        '**Call Stack**',
        '**Data Flow**',
        '**Output**',
      ],
      postOutputBullets: [
        'Implement algorithms like searching and sorting.',
        'Handle recursion (like factorial, tree traversal).',
        'Break problems into smaller subproblems.',
        'Operate on data structures like arrays, linked lists, trees, and graphs.',
        'Make code clean and easy to understand.',
      ],
      language: 'Text',
      code: `Function ADD(a, b)\n    result = a + b\n    return result\nEND\n\nCALL ADD(a, b)`,
      input: 'a, b',
      output: 'Depends on input values.',
      copyOnlyMode: true,
      hideLanguageBadge: true,
    },
  ],
  tags: [],
  relatedLocalLinks: [],
};

const CLASSES_OBJECTS_NOTES = {
  title: 'Classes and Objects in Data Structures',
  lastUpdated: '26 Mar, 2026',
  intro: [
    'In Data Structures, programs often work with complex data and operations that need to be organized efficiently. Object-Oriented Programming concepts like classes and objects help structure data and related operations in a clear and manageable way.',
  ],
  introBullets: [
    'Combines data (variables) and operations (functions) within a single structure.',
    'Helps manage complex implementations by keeping related functionality together.',
    'Improves reusability and organization when implementing data structures.',
    'For example, Dog is a class, Tommy is an object of that class.',
  ],
  images: [
    {
      src: 'https://media.geeksforgeeks.org/wp-content/uploads/20260314151400489459/Class_Object_example.webp',
      alt: 'Class and object example',
    },
  ],
  toc: [],
  sections: [
    {
      heading: 'Class',
      hideOutputPanel: true,
      copyOnlyMode: true,
      paragraphs: [
        'A class is a blueprint or template used to create objects. It defines the structure that specifies the data members (attributes) and functions (methods) an object will contain.',
        'A class typically contains two main components:',
      ],
      bullets: [
        'Attributes (Data Members): Attributes are the properties or characteristics of an object. They store information related to the object.',
        'Methods (Functions): Methods define the actions or behaviors that an object can perform.',
      ],
      afterBulletsParagraphs: [
        '**Features of a Class**',
      ],
      bulletsSecondary: [
        'Describes the data and operations related to a particular entity.',
        'Serves as a reusable template from which multiple objects can be created.',
        'Helps organize code by grouping related variables and functions.',
        'Supports modular programming, making programs easier to understand and maintain.',
      ],
      languageVariants: [
        {
          language: 'C++',
          code: `#include <iostream>\nusing namespace std;\n\nclass Car\n{\n  public:\n    // Attribute\n    string color;\n    string model;\n\n    // Method\n    void startEngine()\n    {\n        cout << "Engine started";\n    }\n};`,
          input: 'No input required',
          output: '(no output)',
        },
        {
          language: 'Java',
          code: `public class Car {\n\n    // Attribute\n    String color;\n    String model;\n\n    // Method\n    public void startEngine()\n    {\n        System.out.println("Engine started");\n    }\n}`,
          input: 'No input required',
          output: '(no output)',
        },
        {
          language: 'Python',
          code: `class Car:\n\n    # Attribute\n    def __init__(self, color, model):\n        self.color = color\n        self.model = model\n\n    # Method\n    def start_engine(self):\n        print("Engine started")`,
          input: 'No input required',
          output: '(no output)',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Car {\n\n    // Attribute\n    public string color;\n    public string model;\n\n    // Method\n    public void StartEngine()\n    {\n        Console.WriteLine("Engine started");\n    }\n}`,
          input: 'No input required',
          output: '(no output)',
        },
        {
          language: 'JavaScript',
          code: `class Car {\n    constructor(color, model) {\n        //Attribute\n        this.color = color;\n        this.model = model;\n    }\n\n    //Method\n    startEngine() {\n        console.log("Engine started");\n    }\n}`,
          input: 'No input required',
          output: '(no output)',
        },
      ],
    },
    {
      heading: 'Object',
      hideInputPanel: true,
      paragraphs: [
        'An object is an instance of a class. It represents a real-world entity created using the class blueprint.',
      ],
      bullets: [
        'Stores actual values for class attributes.',
        'Allows you to call methods defined in the class.',
        'Multiple objects can exist from the same class, each holding different data.',
      ],
      languageVariants: [
        {
          language: 'C++',
          code: `using namespace std;\n\n// Define a class\nclass Car\n{\n  public:\n    // Attribute\n    string color;\n    string model;\n\n    // Method: starts the engine\n    void startEngine()\n    {\n        cout << model << " engine started" << endl;\n    }\n\n    // Method: stops the engine\n    void stopEngine()\n    {\n        cout << model << " engine stopped" << endl;\n    }\n};\n\nint main()\n{\n    // Create first car object\n    Car myCar;\n    myCar.color = "Red";\n    myCar.model = "Toyota";\n\n    // Use attributes and methods\n    cout << "My car color: " << myCar.color << endl;\n    myCar.startEngine();\n    myCar.stopEngine();\n\n    return 0;\n}`,
          runtimeCode: `#include <iostream>\nusing namespace std;\n\nint main()\n{\n    string color = "Red";\n    string model = "Toyota";\n\n    cout << "My car color: " << color << endl;\n    cout << model << " engine started" << endl;\n    cout << model << " engine stopped" << endl;\n\n    return 0;\n}`,
          input: 'No input required',
          output: 'My car color: Red\nToyota engine started\nToyota engine stopped',
        },
        {
          language: 'Java',
          code: `// Define a class\nclass Car {\n    // Attribute\n    String color;\n    String model;\n\n    // Method: starts the engine\n    void startEngine() {\n        System.out.println(model + " engine started");\n    }\n\n    // Method: stops the engine\n    void stopEngine() {\n        System.out.println(model + " engine stopped");\n    }\n}\n\npublic class Main {\n\n    public static void main(String[] args) {\n\n        // Create first car object\n        Car myCar = new Car();\n        myCar.color = "Red";\n        myCar.model = "Toyota";\n\n        // Use attributes and methods\n        System.out.println("My car color: " + myCar.color);\n        myCar.startEngine();\n        myCar.stopEngine();\n    }\n}`,
          runtimeCode: `public class Main {\n\n    public static void main(String[] args) {\n\n        String color = "Red";\n        String model = "Toyota";\n\n        System.out.println("My car color: " + color);\n        System.out.println(model + " engine started");\n        System.out.println(model + " engine stopped");\n    }\n}`,
          input: 'No input required',
          output: 'My car color: Red\nToyota engine started\nToyota engine stopped',
        },
        {
          language: 'Python',
          code: `# Define a class\nclass Car:\n\n    # Method: constructor (optional)\n    def __init__(self):\n        self.color = ""\n        self.model = ""\n\n    # Method: starts the engine\n    def startEngine(self):\n        print(f"{self.model} engine started")\n\n    # Method: stops the engine\n    def stopEngine(self):\n        print(f"{self.model} engine stopped")\n\nif __name__ == "__main__":\n\n    # Create first car object\n    myCar = Car()\n    myCar.color = "Red"\n    myCar.model = "Toyota"\n\n    # Use attributes and methods\n    print("My car color:", myCar.color)\n    myCar.startEngine()\n    myCar.stopEngine()`,
          runtimeCode: `color = "Red"\nmodel = "Toyota"\n\nprint("My car color:", color)\nprint(model + " engine started")\nprint(model + " engine stopped")`,
          input: 'No input required',
          output: 'My car color: Red\nToyota engine started\nToyota engine stopped',
        },
        {
          language: 'C#',
          code: `using System;\n\n// Define a class\nclass Car {\n    // Attribute\n    public string color;\n    public string model;\n\n    // Method: starts the engine\n    public void startEngine() {\n        Console.WriteLine(model + " engine started");\n    }\n\n    // Method: stops the engine\n    public void stopEngine() {\n        Console.WriteLine(model + " engine stopped");\n    }\n}\n\nclass main {\n\n    // driver code\n    static void Main() {\n\n        // Create first car object\n        Car myCar = new Car();\n        myCar.color = "Red";\n        myCar.model = "Toyota";\n\n        // Use attributes and methods\n        Console.WriteLine("My car color: " + myCar.color);\n        myCar.startEngine();\n        myCar.stopEngine();\n    }\n}`,
          runtimeCode: `using System;\n\nclass main {\n\n    static void Main() {\n\n        string color = "Red";\n        string model = "Toyota";\n\n        Console.WriteLine("My car color: " + color);\n        Console.WriteLine(model + " engine started");\n        Console.WriteLine(model + " engine stopped");\n    }\n}`,
          input: 'No input required',
          output: 'My car color: Red\nToyota engine started\nToyota engine stopped',
        },
        {
          language: 'JavaScript',
          code: `// Define a class\nclass Car {\n\n    // Method: constructor\n    constructor() {\n        this.color = "";\n        this.model = "";\n    }\n\n    // Method: starts the engine\n    startEngine() {\n        console.log(this.model + " engine started");\n        console.log(" ");\n    }\n\n    // Method: stops the engine\n    stopEngine() {\n        console.log(this.model + " engine stopped");\n    }\n}\n\n// driver code\nconst myCar = new Car();\nmyCar.color = "Red";\nmyCar.model = "Toyota";\n\n// Use attributes and methods\nconsole.log("My car color:");\nconsole.log(" Red");\nconsole.log(" ");\nmyCar.startEngine();\nmyCar.stopEngine();`,
          input: 'No input required',
          output: 'My car color:\n Red\n \nToyota engine started\n \nToyota engine stopped',
        },
      ],
    },
    {
      heading: 'Classes and Objects in Data Structures',
      hideInputPanel: true,
      paragraphs: [
        'In Data Structures, classes and objects help organize data and the operations performed on that data. A class acts as a blueprint that defines the structure and behavior, while an object is an instance of that class used to perform operations.',
      ],
      bullets: [
        'Allow you to reuse code (write once, use many times).',
        'Make it easier to represent real-world structures like: Stack (push, pop), Queue (enqueue, dequeue) and Linked List (nodes with data + next pointer).',
      ],
      afterBulletsParagraphs: [
        '**Example: Stack Using Class and Object**',
        'In a Stack data structure, elements are inserted and removed following the LIFO (Last In, First Out) principle. A class can be used to define the structure of the stack and the operations performed on it.',
        'Here, the class represents the stack design, while the objects allow us to perform stack operations such as push and pop.',
      ],
      languageVariants: [
        {
          language: 'C++',
          code: `using namespace std;\n\n// Class representing a Stack\nclass Stack {\n  public:\n    int arr[5];\n    int top = -1;\n\n    // Method to push element\n    void push(int x) {\n        if(top == 4) {\n            cout << "Stack Overflow\\n";\n            return;\n        }\n        arr[++top] = x;\n    }\n\n    // Method to pop element\n    void pop() {\n        if(top == -1) {\n            cout << "Stack Underflow\\n";\n            return;\n        }\n        top--;\n    }\n\n    // Method to display stack\n    void display() {\n        for(int i = top; i >= 0; i--) {\n            cout << arr[i] << " ";\n        }\n        cout << endl;\n    }\n};\n\nint main() {\n\n    // Creating stack object\n    Stack s;\n\n    // Performing operations\n    s.push(10);\n    s.push(20);\n    s.push(30);\n\n    cout << "Stack elements: ";\n    s.display();\n\n    s.pop();\n\n    cout << "After pop: ";\n    s.display();\n\n    return 0;\n}`,
          runtimeCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Stack elements: 30 20 10 " << endl;\n    cout << "After pop: 20 10 " << endl;\n    return 0;\n}`,
          input: 'No input required',
          output: 'Stack elements: 30 20 10 \nAfter pop: 20 10 ',
        },
        {
          language: 'Java',
          code: `class Stack {\n    int[] arr = new int[5];\n    int top = -1;\n\n    void push(int x) {\n        if (top == 4) {\n            System.out.println("Stack Overflow");\n            return;\n        }\n        arr[++top] = x;\n    }\n\n    void pop() {\n        if (top == -1) {\n            System.out.println("Stack Underflow");\n            return;\n        }\n        top--;\n    }\n\n    void display() {\n        for (int i = top; i >= 0; i--) {\n            System.out.print(arr[i] + " ");\n        }\n        System.out.println();\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Stack s = new Stack();\n        s.push(10);\n        s.push(20);\n        s.push(30);\n\n        System.out.print("Stack elements: ");\n        s.display();\n\n        s.pop();\n\n        System.out.print("After pop: ");\n        s.display();\n    }\n}`,
          runtimeCode: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Stack elements: 30 20 10 ");\n        System.out.println("After pop: 20 10 ");\n    }\n}`,
          input: 'No input required',
          output: 'Stack elements: 30 20 10 \nAfter pop: 20 10 ',
        },
        {
          language: 'Python',
          code: `class Stack:\n    def __init__(self):\n        self.arr = [0] * 5\n        self.top = -1\n\n    def push(self, x):\n        if self.top == 4:\n            print("Stack Overflow")\n            return\n        self.top += 1\n        self.arr[self.top] = x\n\n    def pop(self):\n        if self.top == -1:\n            print("Stack Underflow")\n            return\n        self.top -= 1\n\n    def display(self):\n        for i in range(self.top, -1, -1):\n            print(self.arr[i], end=" ")\n        print()\n\ns = Stack()\ns.push(10)\ns.push(20)\ns.push(30)\n\nprint("Stack elements:", end=" ")\ns.display()\n\ns.pop()\n\nprint("After pop:", end=" ")\ns.display()`,
          runtimeCode: `print("Stack elements: 30 20 10 ")\nprint("After pop: 20 10 ")`,
          input: 'No input required',
          output: 'Stack elements: 30 20 10 \nAfter pop: 20 10 ',
        },
        {
          language: 'C#',
          code: `using System;\n\nclass Stack {\n    public int[] arr = new int[5];\n    public int top = -1;\n\n    public void push(int x) {\n        if (top == 4) {\n            Console.WriteLine("Stack Overflow");\n            return;\n        }\n        arr[++top] = x;\n    }\n\n    public void pop() {\n        if (top == -1) {\n            Console.WriteLine("Stack Underflow");\n            return;\n        }\n        top--;\n    }\n\n    public void display() {\n        for (int i = top; i >= 0; i--) {\n            Console.Write(arr[i] + " ");\n        }\n        Console.WriteLine();\n    }\n}\n\nclass Program {\n    static void Main() {\n        Stack s = new Stack();\n        s.push(10);\n        s.push(20);\n        s.push(30);\n\n        Console.Write("Stack elements: ");\n        s.display();\n\n        s.pop();\n\n        Console.Write("After pop: ");\n        s.display();\n    }\n}`,
          runtimeCode: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Stack elements: 30 20 10 ");\n        Console.WriteLine("After pop: 20 10 ");\n    }\n}`,
          input: 'No input required',
          output: 'Stack elements: 30 20 10 \nAfter pop: 20 10 ',
        },
        {
          language: 'JavaScript',
          code: `class Stack {\n  constructor() {\n    this.arr = new Array(5);\n    this.top = -1;\n  }\n\n  push(x) {\n    if (this.top === 4) {\n      console.log("Stack Overflow");\n      return;\n    }\n    this.arr[++this.top] = x;\n  }\n\n  pop() {\n    if (this.top === -1) {\n      console.log("Stack Underflow");\n      return;\n    }\n    this.top--;\n  }\n\n  display() {\n    let output = "";\n    for (let i = this.top; i >= 0; i--) {\n      output += this.arr[i] + " ";\n    }\n    console.log(output);\n  }\n}\n\nconst s = new Stack();\ns.push(10);\ns.push(20);\ns.push(30);\nconsole.log("Stack elements: ");\ns.display();\ns.pop();\nconsole.log("After pop: ");\ns.display();`,
          input: 'No input required',
          output: 'Stack elements: 30 20 10 \nAfter pop: 20 10 ',
        },
      ],
    },
  ],
  tags: [],
  relatedLocalLinks: [],
};

const IO_ARTICLE_IMAGES = [
  {
    src: 'https://media.geeksforgeeks.org/wp-content/uploads/20260326122824897514/input_output_i_o_in_different_programming_languages.webp',
    alt: 'Input and Output in Different Programming Languages',
  },
  {
    src: 'https://media.geeksforgeeks.org/wp-content/uploads/20260326122825090303/6.webp',
    alt: 'Input output explanation diagram',
  },
];

const LEARNING_PROFILE_KEY = 'codust-learning-profile';
const PARAGRAPH_OPENED_LINKS_KEY = 'codust-opened-paragraph-links';

const STUDY_PACE_OPTIONS = [
  {
    id: 'light',
    label: 'Light pace',
    weeklyHours: 3,
    note: 'Short weekly sessions that are easier to sustain.',
  },
  {
    id: 'balanced',
    label: 'Balanced pace',
    weeklyHours: 5,
    note: 'A steady pace for consistent weekly progress.',
  },
  {
    id: 'accelerated',
    label: 'Accelerated pace',
    weeklyHours: 8,
    note: 'Best when you want faster completion and more reps.',
  },
];

function getStoredLearningProfile() {
  try {
    return JSON.parse(window.localStorage.getItem(LEARNING_PROFILE_KEY) || '{}');
  } catch {
    return {};
  }
}

function getLevelStages(levelText) {
  const rawStages = `${levelText || ''}`
    .split(/→|->/)
    .map(stage => stage.trim())
    .filter(Boolean);

  return rawStages.length > 0 ? rawStages : [levelText || 'General'];
}

function getDurationEstimate(durationText) {
  const normalized = `${durationText || ''}`.trim();
  if (!normalized) {
    return { label: 'Self-paced', averageWeeks: null };
  }

  const lower = normalized.toLowerCase();
  if (lower.includes('self-paced') || lower.includes('ongoing')) {
    return { label: normalized, averageWeeks: null };
  }

  const rangeMatch = normalized.match(/(\d+)\s*[–-]\s*(\d+)\s*weeks?/i);
  if (rangeMatch) {
    const minWeeks = Number(rangeMatch[1]);
    const maxWeeks = Number(rangeMatch[2]);
    return {
      label: normalized,
      averageWeeks: Math.round((minWeeks + maxWeeks) / 2),
    };
  }

  const singleMatch = normalized.match(/(\d+)\s*weeks?/i);
  if (singleMatch) {
    return { label: normalized, averageWeeks: Number(singleMatch[1]) };
  }

  return { label: normalized, averageWeeks: null };
}

function getPaceAdjustedTimeline(durationText, weeklyHours) {
  const estimate = getDurationEstimate(durationText);
  if (!estimate.averageWeeks) {
    return estimate.label;
  }

  const baselineHours = 5;
  const adjustedWeeks = Math.max(1, Math.round((estimate.averageWeeks * baselineHours) / Math.max(weeklyHours || baselineHours, 1)));
  return `${adjustedWeeks} week${adjustedWeeks === 1 ? '' : 's'}`;
}

export default function TopicViewer() {
  const { slug } = useParams();
  const topic = TOPICS.find(t => t.slug === slug);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeBlocked, setIframeBlocked] = useState(false);
  const [roadmapExpanded, setRoadmapExpanded] = useState(true);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLocalDoc, setActiveLocalDoc] = useState(null);
  const [activeDsaSection, setActiveDsaSection] = useState(null);
  const [activeWebSection, setActiveWebSection] = useState(null);
  const [copiedCodeKey, setCopiedCodeKey] = useState('');
  const [editableCodeMap, setEditableCodeMap] = useState({});
  const [editorModeMap, setEditorModeMap] = useState({});
  const [runtimeOutputMap, setRuntimeOutputMap] = useState({});
  const [lastRunCodeMap, setLastRunCodeMap] = useState({});
  const [editorActiveLineMap, setEditorActiveLineMap] = useState({});
  const [editorScrollTopMap, setEditorScrollTopMap] = useState({});
  const [activeLanguageTabMap, setActiveLanguageTabMap] = useState({});
  const [dsaTutorialExpanded, setDsaTutorialExpanded] = useState(false);
  const [webTutorialExpanded, setWebTutorialExpanded] = useState(false);
  const [ioImageIndex, setIoImageIndex] = useState(0);
  const [docImageIndexMap, setDocImageIndexMap] = useState({});
  const [loadedImageMap, setLoadedImageMap] = useState({});
  const [compilingCodeKey, setCompilingCodeKey] = useState(null);
  const [compilationErrorMap, setCompilationErrorMap] = useState({});
  const [visualizerInputMap, setVisualizerInputMap] = useState({});
  const [visualizerRunMap, setVisualizerRunMap] = useState({});
  const [engagementMap, setEngagementMap] = useState(() => {
    try { return JSON.parse(localStorage.getItem('codust-engagement') || '{}'); } catch { return {}; }
  });
  const [commentDraftMap, setCommentDraftMap] = useState(() => {
    try { return JSON.parse(localStorage.getItem('codust-comment-drafts') || '{}'); } catch { return {}; }
  });
  const [socialNoticeMap, setSocialNoticeMap] = useState({});
  const [savedVideos, setSavedVideos] = useState(() => {
    try { return JSON.parse(localStorage.getItem('codust-saved-videos') || '[]'); } catch { return []; }
  });
  const [youtubeStatsMap, setYoutubeStatsMap] = useState({});
  const [youtubeRatingMap, setYoutubeRatingMap] = useState(() => {
    try { return JSON.parse(localStorage.getItem('codust-youtube-ratings') || '{}'); } catch { return {}; }
  });
  const [youtubeSubscriptionMap, setYoutubeSubscriptionMap] = useState(() => {
    try { return JSON.parse(localStorage.getItem('codust-youtube-subscriptions') || '{}'); } catch { return {}; }
  });
  const [youtubeAccessToken, setYoutubeAccessToken] = useState(() => window.sessionStorage.getItem('codust-yt-token') || '');
  const [youtubeAuthReady, setYoutubeAuthReady] = useState(false);
  const [learningProfileMap, setLearningProfileMap] = useState(() => getStoredLearningProfile());
  const [openedParagraphLinks, setOpenedParagraphLinks] = useState(() => {
    try { return JSON.parse(localStorage.getItem(PARAGRAPH_OPENED_LINKS_KEY) || '{}'); } catch { return {}; }
  });
  const [activeLearningPanel, setActiveLearningPanel] = useState(null);
  const youtubeTokenClientRef = useRef(null);
  const viewedDocsRef = useRef(new Set());
  const youtubeClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const youtubeLoginHint = import.meta.env.VITE_GOOGLE_LOGIN_HINT || import.meta.env.VITE_YOUTUBE_LOGIN_HINT || '';
  const youtubeWriteEnabled = import.meta.env.VITE_ENABLE_YOUTUBE_WRITE === 'true';
  const YOUTUBE_DOC_VIDEO_MAP = {
    'dsa-tutorial': 'https://www.youtube.com/embed/8hly31xKli0',
    'html-tutorial-page': 'https://www.youtube.com/embed/0aHZXNc-gyQ',
    'css-tutorial-page': 'https://www.youtube.com/embed/1Rs2ND1ryYc',
    'javascript-tutorial-page': 'https://www.youtube.com/embed/W6NZfCO5SIk',
    'input-output-page': 'https://www.youtube.com/embed/xOIVXR35aI4',
    'conditional-statements-page': 'https://www.youtube.com/embed/HQ3dCWjfRZ4',
    'for-loop-page': 'https://www.youtube.com/embed/gOMW_n2-2Mw',
    'while-loop-page': 'https://www.youtube.com/embed/ZjHJrmYknrk',
    'function-page': 'https://www.youtube.com/embed/3JIZ40yuZL0',
    'classes-objects-page': 'https://www.youtube.com/embed/pTB0EiLXUC8',
  };

  // Persist engagement state to localStorage
  useEffect(() => {
    try { localStorage.setItem('codust-engagement', JSON.stringify(engagementMap)); } catch {}
  }, [engagementMap]);

  useEffect(() => {
    try { localStorage.setItem('codust-comment-drafts', JSON.stringify(commentDraftMap)); } catch {}
  }, [commentDraftMap]);

  useEffect(() => {
    try { localStorage.setItem('codust-youtube-ratings', JSON.stringify(youtubeRatingMap)); } catch {}
  }, [youtubeRatingMap]);

  useEffect(() => {
    try { localStorage.setItem('codust-saved-videos', JSON.stringify(savedVideos)); } catch {}
  }, [savedVideos]);

  useEffect(() => {
    try { localStorage.setItem('codust-youtube-subscriptions', JSON.stringify(youtubeSubscriptionMap)); } catch {}
  }, [youtubeSubscriptionMap]);

  useEffect(() => {
    try { localStorage.setItem(LEARNING_PROFILE_KEY, JSON.stringify(learningProfileMap)); } catch {}
  }, [learningProfileMap]);

  useEffect(() => {
    try { localStorage.setItem(PARAGRAPH_OPENED_LINKS_KEY, JSON.stringify(openedParagraphLinks)); } catch {}
  }, [openedParagraphLinks]);

  const markParagraphLinkOpened = (linkKey) => {
    if (!linkKey) return;
    setOpenedParagraphLinks((previous) => {
      if (previous[linkKey]) return previous;
      return { ...previous, [linkKey]: true };
    });
  };

  useEffect(() => {
    if (!activeLearningPanel) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveLearningPanel(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLearningPanel]);

  // Load Google Identity Services for YouTube comment posting.
  useEffect(() => {
    if (!youtubeClientId) return;

    const onLoaded = () => {
      const oauth = window.google?.accounts?.oauth2;
      if (!oauth) return;
      if (!youtubeTokenClientRef.current) {
        youtubeTokenClientRef.current = oauth.initTokenClient({
          client_id: youtubeClientId,
          scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
          callback: () => {},
        });
      }
      setYoutubeAuthReady(true);
    };

    if (window.google?.accounts?.oauth2) {
      onLoaded();
      return;
    }

    const existing = document.getElementById('google-identity-services');
    if (existing) {
      existing.addEventListener('load', onLoaded, { once: true });
      return () => existing.removeEventListener('load', onLoaded);
    }

    const script = document.createElement('script');
    script.id = 'google-identity-services';
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = onLoaded;
    document.head.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, [youtubeClientId]);

  const extractYouTubeVideoId = (videoSrc) => {
    if (!videoSrc) return '';
    if (videoSrc.includes('youtube.com/embed/')) {
      return videoSrc.split('youtube.com/embed/')[1]?.split('?')[0] || '';
    }
    if (videoSrc.includes('youtu.be/')) {
      return videoSrc.split('youtu.be/')[1]?.split('?')[0] || '';
    }
    if (videoSrc.includes('watch?v=')) {
      return videoSrc.split('watch?v=')[1]?.split('&')[0] || '';
    }
    return '';
  };

  const isYouTubeWriteAuthError = (error) => {
    const message = `${error?.message || ''} ${error?.type || ''}`.toLowerCase();
    return message.includes('access blocked')
      || message.includes('authorization error')
      || message.includes('popup_closed')
      || message.includes('popup failed to open')
      || message.includes('popup_failed_to_open')
      || message.includes('sign-in popup was closed')
      || message.includes('google auth is not ready yet')
      || message.includes('missing vite_google_client_id')
      || message.includes('no access token received');
  };

  const getYouTubeSignInMessage = (error, actionLabel = 'continue') => {
    const raw = `${error?.message || ''} ${error?.type || ''}`.toLowerCase();
    if (raw.includes('popup_closed')) return `Please sign in to your YouTube account to ${actionLabel}.`;
    if (raw.includes('popup_failed_to_open')) return 'Your browser blocked the sign-in popup. Please allow pop-ups and try again.';
    if (raw.includes('access blocked') || raw.includes('authorization error')) {
      return `Please sign in to your YouTube account to ${actionLabel}.`;
    }
    return error?.message || `Please sign in to your YouTube account to ${actionLabel}.`;
  };

  const ensureYouTubeAccessToken = (actionLabel = 'continue') => new Promise((resolve, reject) => {
    if (!youtubeClientId) {
      reject(new Error('Missing VITE_GOOGLE_CLIENT_ID in .env'));
      return;
    }

    // If we already have a token stored in session, reuse it.
    const cached = window.sessionStorage.getItem('codust-yt-token');
    if (cached) {
      setYoutubeAccessToken(cached);
      resolve(cached);
      return;
    }

    if (!youtubeAuthReady || !window.google?.accounts?.oauth2) {
      reject(new Error('Google auth is not ready yet. Please wait a moment and try again.'));
      return;
    }

    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: youtubeClientId,
      scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
      callback: (tokenResponse) => {
        if (tokenResponse?.error) {
          reject(new Error(getYouTubeSignInMessage(tokenResponse.error_description || tokenResponse.error, actionLabel)));
          return;
        }
        const token = tokenResponse?.access_token;
        if (!token) {
          reject(new Error('No access token received'));
          return;
        }
        // Cache token for this browser session so future clicks don't need sign-in again.
        window.sessionStorage.setItem('codust-yt-token', token);
        setYoutubeAccessToken(token);
        resolve(token);
      },
      error_callback: (err) => {
        if (err?.type === 'popup_closed') {
          reject(new Error(getYouTubeSignInMessage(err, actionLabel)));
        } else if (err?.type === 'popup_failed_to_open') {
          reject(new Error('Your browser blocked the sign-in popup. Please allow pop-ups and try again.'));
        } else {
          reject(new Error(getYouTubeSignInMessage(err, actionLabel)));
        }
      },
    });

    youtubeTokenClientRef.current = client;
    // Use 'select_account' so the account picker appears clearly.
    client.requestAccessToken({
      prompt: 'select_account',
      hint: youtubeLoginHint || undefined,
      login_hint: youtubeLoginHint || undefined,
    });
  });

  const postCommentToYouTube = async ({ videoSrc, text }) => {
    const videoId = extractYouTubeVideoId(videoSrc);
    if (!videoId) {
      throw new Error('Invalid YouTube video URL');
    }

    const token = await ensureYouTubeAccessToken('post your comment');

    const response = await fetch('https://www.googleapis.com/youtube/v3/commentThreads?part=snippet', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        snippet: {
          videoId,
          topLevelComment: {
            snippet: {
              textOriginal: text,
            },
          },
        },
      }),
    });

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        throw new Error('Please sign in to your YouTube account to post comments.');
      }
      let errorMessage = 'Unable to post comment to YouTube';
      try {
        const data = await response.json();
        const apiMessage = data?.error?.message;
        if (apiMessage) errorMessage = apiMessage;
      } catch {
        // Keep default message if response body is not JSON.
      }
      throw new Error(errorMessage);
    }

    return response.json();
  };

  // Fetch YouTube video statistics using YouTube Data API.
  const fetchYoutubeStats = async (videoSrc, docKey, options = {}) => {
    if (!videoSrc || !docKey) return null;
    const forceRefresh = !!options.forceRefresh;
    if (!forceRefresh && youtubeStatsMap[docKey]) return youtubeStatsMap[docKey];
    try {
      const videoId = extractYouTubeVideoId(videoSrc);
      if (!videoId) return null;
      const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
      if (!apiKey) {
        console.warn('VITE_YOUTUBE_API_KEY not configured.');
        return null;
      }
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=statistics,snippet&key=${apiKey}`
      );
      if (!response.ok) { console.warn('YouTube API error:', response.status); return null; }
      const data = await response.json();
      const video = data.items?.[0];
      if (!video) return null;
      let subscriberCount = 0;
      const channelId = video.snippet?.channelId || '';
      if (channelId) {
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=statistics&key=${apiKey}`
        );
        if (channelResponse.ok) {
          const channelData = await channelResponse.json();
          const channel = channelData.items?.[0];
          subscriberCount = parseInt(channel?.statistics?.subscriberCount || 0);
        }
      }
      const stats = {
        likeCount: parseInt(video.statistics?.likeCount || 0),
        commentCount: parseInt(video.statistics?.commentCount || 0),
        viewCount: parseInt(video.statistics?.viewCount || 0),
        channelId,
        channelTitle: video.snippet?.channelTitle || '',
        tags: Array.isArray(video.snippet?.tags) ? video.snippet.tags.slice(0, 3) : [],
        subscriberCount,
        title: video.snippet?.title || '',
        fetchedAt: Date.now(),
      };
      setYoutubeStatsMap(prev => ({ ...prev, [docKey]: stats }));
      return stats;
    } catch (error) {
      console.error('Failed to fetch YouTube stats:', error);
      return null;
    }
  };

  const getMyVideoRating = async (videoSrc) => {
    const videoId = extractYouTubeVideoId(videoSrc);
    if (!videoId) return 'none';
    const token = await ensureYouTubeAccessToken('like this video');
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos/getRating?id=${videoId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) return 'none';
    const data = await response.json();
    return data?.items?.[0]?.rating || 'none';
  };

  const setYouTubeVideoRating = async (videoSrc, rating) => {
    const videoId = extractYouTubeVideoId(videoSrc);
    if (!videoId) throw new Error('Invalid YouTube video URL');
    const token = await ensureYouTubeAccessToken('like this video');
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos/rate?id=${videoId}&rating=${rating}`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        throw new Error('Please sign in to your YouTube account to like this video.');
      }
      throw new Error('Unable to update YouTube like status');
    }
  };

  const fetchYouTubeSubscriptionStatus = async (docKey, channelId) => {
    if (!docKey || !channelId) return { subscribed: false, subscriptionId: '' };
    const token = await ensureYouTubeAccessToken(subscribe ? 'subscribe to this channel' : 'unsubscribe from this channel');
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/subscriptions?part=id&mine=true&forChannelId=${channelId}&maxResults=1`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!response.ok) return { subscribed: false, subscriptionId: '' };
    const data = await response.json();
    const item = data?.items?.[0];
    const status = { subscribed: !!item, subscriptionId: item?.id || '' };
    setYoutubeSubscriptionMap(prev => ({ ...prev, [docKey]: status }));
    return status;
  };

  const setYouTubeSubscription = async ({ docKey, channelId, subscribe }) => {
    if (!docKey || !channelId) throw new Error('Missing channel information');
    const token = await ensureYouTubeAccessToken();

    if (subscribe) {
      const response = await fetch('https://www.googleapis.com/youtube/v3/subscriptions?part=snippet', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          snippet: {
            resourceId: {
              kind: 'youtube#channel',
              channelId,
            },
          },
        }),
      });
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          throw new Error('Please sign in to your YouTube account to subscribe.');
        }
        throw new Error('Unable to subscribe on YouTube');
      }
      const data = await response.json();
      setYoutubeSubscriptionMap(prev => ({
        ...prev,
        [docKey]: { subscribed: true, subscriptionId: data?.id || '' },
      }));
      return;
    }

    const existing = youtubeSubscriptionMap[docKey];
    const subscriptionId = existing?.subscriptionId || (await fetchYouTubeSubscriptionStatus(docKey, channelId)).subscriptionId;
    if (!subscriptionId) {
      setYoutubeSubscriptionMap(prev => ({ ...prev, [docKey]: { subscribed: false, subscriptionId: '' } }));
      return;
    }

    const response = await fetch(`https://www.googleapis.com/youtube/v3/subscriptions?id=${subscriptionId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        throw new Error('Please sign in to your YouTube account to unsubscribe.');
      }
      throw new Error('Unable to unsubscribe on YouTube');
    }
    setYoutubeSubscriptionMap(prev => ({ ...prev, [docKey]: { subscribed: false, subscriptionId: '' } }));
  };

  // Fetch YouTube stats whenever activeLocalDoc changes and keep live-updating.
  useEffect(() => {
    const src = YOUTUBE_DOC_VIDEO_MAP[activeLocalDoc];
    if (!src) return;
    const refresh = () => {
      if (document.visibilityState === 'hidden') return;
      fetchYoutubeStats(src, activeLocalDoc, { forceRefresh: true });
    };

    refresh();
    const timer = window.setInterval(refresh, 15000);
    return () => window.clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeLocalDoc]);

  // Local view counter for no-sign-in mode.
  useEffect(() => {
    if (!activeLocalDoc) return;
    if (viewedDocsRef.current.has(activeLocalDoc)) return;
    viewedDocsRef.current.add(activeLocalDoc);
    setEngagementMap(prev => ({
      ...prev,
      [activeLocalDoc]: {
        ...(prev[activeLocalDoc] || { likes: 0, comments: 0, subscribed: false, liked: false, views: 0 }),
        views: (prev[activeLocalDoc]?.views || 0) + 1,
      },
    }));
  }, [activeLocalDoc]);

  // After login, pull user's current like/subscription status for active video.
  useEffect(() => {
    const syncUserStatus = async () => {
      const docKey = activeLocalDoc;
      const videoSrc = YOUTUBE_DOC_VIDEO_MAP[docKey];
      const stats = youtubeStatsMap[docKey];
      if (!docKey || !videoSrc || !stats?.channelId || !youtubeAccessToken) return;
      try {
        const rating = await getMyVideoRating(videoSrc);
        setYoutubeRatingMap(prev => ({ ...prev, [docKey]: rating }));
        await fetchYouTubeSubscriptionStatus(docKey, stats.channelId);
      } catch {
        // Ignore status sync failures to keep UI responsive.
      }
    };
    syncUserStatus();
  }, [activeLocalDoc, youtubeAccessToken, youtubeStatsMap]);
  const [moreOptionsExpanded, setMoreOptionsExpanded] = useState({ Explore: false, Courses: false });
  const contentPanelRef = useRef(null);
  const highlightedNodesRef = useRef([]);
  const highlightTimeoutRef = useRef(null);
  const webHighlightedNodesRef = useRef([]);
  const webHighlightTimeoutRef = useRef(null);
  const skipNextAutoScrollRef = useRef(false);
  const storageHydratedRef = useRef(false);
  const [isDocStateHydrated, setIsDocStateHydrated] = useState(false);
  const isGeeksforGeeks = !!topic?.url?.includes('geeksforgeeks.org');
  const topicLevelStages = getLevelStages(topic?.level);
  const topicDurationEstimate = getDurationEstimate(topic?.duration);
  const topicLearningEntry = topic ? {
    topicSlug: topic.slug,
    topicName: topic.name,
    level: topic.level,
    duration: topic.duration,
    paceId: 'balanced',
    paceLabel: 'Balanced pace',
    weeklyHours: 5,
    focus: false,
    currentStage: topicLevelStages[0] || topic.level,
    completedHighlights: [],
    lastViewedAt: null,
    lastPanelViewed: null,
    ...learningProfileMap[topic.slug],
  } : null;

  const updateTopicLearning = (updates) => {
    if (!topic) return;

    setLearningProfileMap(prev => {
      const current = prev[topic.slug] || {};
      return {
        ...prev,
        [topic.slug]: {
          ...current,
          ...updates,
        },
      };
    });
  };

  const languageFromHeading = (heading) => {
    const normalized = String(heading || '').toLowerCase();
    if (normalized.includes('javascript') || normalized.includes(' js')) return 'javascript';
    if (normalized.includes('c#') || normalized.includes('csharp')) return 'csharp';
    if (normalized.includes('java')) return 'java';
    if (normalized.includes('python')) return 'python';
    if (normalized.includes('c++') || normalized.includes('cpp')) return 'cpp';
    return 'c';
  };

  const languageFromTabLabel = (label) => {
    const normalized = (label || '').toLowerCase().trim();
    if (normalized === 'c++' || normalized === 'cpp') return 'cpp';
    if (normalized === 'java') return 'java';
    if (normalized === 'python') return 'python';
    if (normalized === 'c#' || normalized === 'csharp') return 'csharp';
    if (normalized === 'javascript' || normalized === 'js') return 'javascript';
    return 'c';
  };

  const codeKeywordMap = {
    c: ['int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'struct', 'typedef', 'const', 'static'],
    cpp: ['int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'class', 'public', 'private', 'protected', 'namespace', 'using', 'template', 'typename', 'const', 'static', 'auto', 'new', 'delete'],
    java: ['class', 'public', 'private', 'protected', 'static', 'final', 'void', 'int', 'double', 'float', 'char', 'boolean', 'String', 'return', 'if', 'else', 'for', 'while', 'switch', 'case', 'break', 'continue', 'new', 'this', 'extends', 'implements', 'try', 'catch'],
    python: ['def', 'class', 'return', 'if', 'elif', 'else', 'for', 'while', 'break', 'continue', 'try', 'except', 'finally', 'import', 'from', 'as', 'lambda', 'with', 'pass', 'True', 'False', 'None'],
    csharp: ['class', 'public', 'private', 'protected', 'internal', 'static', 'void', 'int', 'double', 'float', 'char', 'bool', 'string', 'return', 'if', 'else', 'for', 'foreach', 'while', 'switch', 'case', 'break', 'continue', 'new', 'this', 'using', 'namespace', 'try', 'catch'],
    javascript: ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while', 'switch', 'case', 'break', 'continue', 'class', 'extends', 'new', 'this', 'import', 'from', 'export', 'async', 'await', 'try', 'catch']
  };

  const splitCodeTokens = (line, language) => {
    const tokens = [];
    const keywordRegex = new RegExp(`\\b(${(codeKeywordMap[language] || []).join('|')})\\b`, 'g');
    const parts = line.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g);

    parts.forEach(part => {
      if (!part) return;
      if (/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)$/.test(part)) {
        tokens.push({ text: part, type: 'string' });
        return;
      }

      const subParts = part.split(keywordRegex);
      subParts.forEach(sub => {
        if (!sub) return;
        if ((codeKeywordMap[language] || []).includes(sub)) {
          tokens.push({ text: sub, type: 'keyword' });
        } else if (/^\d+(\.\d+)?$/.test(sub)) {
          tokens.push({ text: sub, type: 'number' });
        } else {
          tokens.push({ text: sub, type: 'plain' });
        }
      });
    });

    return tokens;
  };

  const renderHighlightedCode = (code, language) => {
    const lines = code.split('\n');

    return lines.map((line, lineIdx) => {
      let commentText = '';
      let contentText = line;
      const trimmed = line.trim();

      if (language === 'python') {
        const hashIdx = line.indexOf('#');
        if (hashIdx >= 0) {
          contentText = line.slice(0, hashIdx);
          commentText = line.slice(hashIdx);
        }
      } else {
        const slashIdx = line.indexOf('//');
        const isInclude = trimmed.startsWith('#include');
        if (slashIdx >= 0 && !isInclude) {
          contentText = line.slice(0, slashIdx);
          commentText = line.slice(slashIdx);
        }
      }

      const codeTokens = splitCodeTokens(contentText, language);

      return (
        <div key={`code-line-${lineIdx}`} style={{ whiteSpace: 'pre-wrap' }}>
          {codeTokens.map((token, tokenIdx) => (
            <span
              key={`tok-${lineIdx}-${tokenIdx}`}
              style={{
                color:
                  token.type === 'keyword'
                    ? '#ff8fab'
                    : token.type === 'string'
                      ? '#9de07d'
                      : token.type === 'number'
                        ? '#ffd166'
                        : '#dbe7ff',
              }}
            >
              {token.text}
            </span>
          ))}
          {commentText && <span style={{ color: '#7f8c8d' }}>{commentText}</span>}
        </div>
      );
    });
  };

  const toAnchorId = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const renderTextWithBold = (text) => {
    const value = String(text ?? '');
    const parts = value.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
    const normalizeUrl = (url) => String(url || '').replace(/\/+$/, '');
    const localMarkdownDocMap = {
      'https://www.geeksforgeeks.org/html/html-tutorial': 'html-tutorial-page',
      'https://www.geeksforgeeks.org/html/html-introduction': 'html-introduction-page',
      'https://www.geeksforgeeks.org/html/what-is-html': 'html-features-page',
      'https://www.geeksforgeeks.org/html/html-editors': 'html-editors-page',
      'https://www.geeksforgeeks.org/html/html-comments': 'html-comments-page',
      'https://www.geeksforgeeks.org/html/html-course-structure-of-an-html-document': 'html-structure-page',
      'https://www.geeksforgeeks.org/html/html-elements': 'html-elements-page',
      'https://www.geeksforgeeks.org/html/html-attributes': 'html-attributes-page',
      'https://www.geeksforgeeks.org/html/html5-semantic-tags': 'html-semantics-page',
      'https://www.geeksforgeeks.org/html/html-entities': 'html-entities-page',
      'https://www.geeksforgeeks.org/html/html-symbols': 'html-symbols-page',
      'https://www.geeksforgeeks.org/html/how-to-create-a-portfolio-website-using-html': 'html-simple-portfolio-page',
      'https://www.geeksforgeeks.org/html/simple-portfolio-website-design-using-html': 'html-simple-portfolio-page',
      'https://www.geeksforgeeks.org/html/design-an-event-web-page-using-html-css': 'html-event-webpage-page',
      'https://www.geeksforgeeks.org/css/design-an-event-webpage-using-html-css': 'html-event-webpage-page',
      'https://www.geeksforgeeks.org/html/html-projects': 'html-beginner-projects-page',
      'https://www.geeksforgeeks.org/html-projects': 'html-project-ideas-page',
      'https://www.geeksforgeeks.org/html/html-project-ideas-for-beginners': 'html-project-ideas-page',
      'https://www.geeksforgeeks.org/html/most-commonly-used-tags-in-html': 'html-common-tags-page',
      'https://www.geeksforgeeks.org/html/basic-html-tags': 'html-common-tags-page',
      'https://www.geeksforgeeks.org/html/html-tables': 'html-tables-page',
      'https://www.geeksforgeeks.org/html/html-tr-tag': 'html-tr-tag-page',
      'https://www.geeksforgeeks.org/html/html-th-tag': 'html-th-tag-page',
      'https://www.geeksforgeeks.org/html/html-td-tag': 'html-td-tag-page',
      'https://www.geeksforgeeks.org/html/html-caption-tag': 'html-caption-tag-page',
      'https://www.geeksforgeeks.org/html/html-colgroup-tag': 'html-group-columns-page',
      'https://www.geeksforgeeks.org/html/html-col-tag': 'html-group-columns-page',
      'https://www.geeksforgeeks.org/html/html-lists': 'html-lists-page',
      'https://www.geeksforgeeks.org/html/html-ol-tag': 'html-ordered-lists-page',
      'https://www.geeksforgeeks.org/html/html-ordered-lists': 'html-ordered-lists-page',
      'https://www.geeksforgeeks.org/html/html-ul-tag': 'html-unordered-lists-page',
      'https://www.geeksforgeeks.org/html/html-unordered-lists': 'html-unordered-lists-page',
      'https://www.geeksforgeeks.org/html/html-description-list': 'html-description-lists-page',
      'https://www.geeksforgeeks.org/html/html-description-lists': 'html-description-lists-page',
      'https://www.geeksforgeeks.org/html/html-i-tag': 'html-i-tag-page',
      'https://www.geeksforgeeks.org/html/html-small-tag': 'html-small-tag-page',
      'https://www.geeksforgeeks.org/html/html-ins-tag': 'html-ins-tag-page',
      'https://www.geeksforgeeks.org/html/html-sub-tag': 'html-sub-tag-page',
      'https://www.geeksforgeeks.org/css/html-sub-tag': 'html-sub-tag-page',
      'https://www.geeksforgeeks.org/html/html-strong-tag': 'html-strong-tag-page',
      'https://www.geeksforgeeks.org/html/html-b-tag': 'html-b-tag-page',
      'https://www.geeksforgeeks.org/css/top-10-projects-for-beginners-to-practice-html-and-css-skills': 'html-beginner-projects-page',
      'https://www.geeksforgeeks.org/css/css-tutorial': 'css-tutorial-page',
      'https://www.geeksforgeeks.org/javascript/javascript-tutorial': 'javascript-tutorial-page',
      'https://www.geeksforgeeks.org/html/what-is-http': 'http-protocol-page',
    };

    return parts.map((part, idx) => {
      if (/^\*\*[^*]+\*\*$/.test(part)) {
        return <strong key={`rich-${idx}`}>{part.slice(2, -2)}</strong>;
      }
      const markdownLink = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (markdownLink) {
        const [, label, url] = markdownLink;
        const normalizedUrl = normalizeUrl(url);
        const localDocKey = localMarkdownDocMap[normalizedUrl] || null;
        const paragraphLinkKey = localDocKey ? `local:${localDocKey}` : `url:${normalizedUrl}`;
        const paragraphLinkOpened = Boolean(openedParagraphLinks[paragraphLinkKey]);
        const paragraphLinkIsActive = paragraphLinkOpened || (localDocKey && activeLocalDoc === localDocKey);
        if (localDocKey) {
          return (
            <button
              key={`rich-${idx}`}
              className={`codust-paragraph-link-btn${paragraphLinkIsActive ? ' is-active' : ''}`}
              type="button"
              onClick={() => {
                markParagraphLinkOpened(paragraphLinkKey);
                setActiveLocalDoc(localDocKey);
                setActiveWebSection(null);
              }}
              style={{
                color: paragraphLinkIsActive ? '#ff3b30' : '#00dbe7',
                textDecoration: 'underline',
                background: 'transparent',
                border: 'none',
                padding: 0,
                margin: 0,
                cursor: 'pointer',
                font: 'inherit',
              }}
            >
              {label}
            </button>
          );
        }
        return (
          <a
            key={`rich-${idx}`}
            className={`codust-paragraph-link${paragraphLinkOpened ? ' is-opened is-active' : ''}`}
            href={url}
            target="_blank"
            rel="noreferrer"
            onClick={() => markParagraphLinkOpened(paragraphLinkKey)}
            style={{ color: paragraphLinkOpened ? '#ff3b30' : '#00dbe7', textDecoration: 'underline' }}
          >
            {label}
          </a>
        );
      }
      return <span key={`rich-${idx}`}>{part}</span>;
    });
  };

  const renderDocTitleWithBack = (title, options = {}) => {
    const {
      backDocKey = 'html-tutorial-page',
      backLabel = 'Back',
      titleSize = 32,
      titleMargin = '0 0 10px',
      onBack,
    } = options;

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
        <h2 style={{ margin: titleMargin, fontFamily: 'Space Grotesk', fontSize: titleSize, color: '#e3e1e9' }}>{title}</h2>
        <button
          type="button"
          onClick={() => {
            if (typeof onBack === 'function') {
              onBack();
              return;
            }
            setActiveLocalDoc(backDocKey);
            if (backDocKey === 'web-tutorial') {
              setActiveWebSection('basics');
            } else {
              setActiveWebSection(null);
            }
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'rgba(0,219,231,0.12)',
            border: '1px solid rgba(0,219,231,0.28)',
            color: '#00dbe7',
            borderRadius: 8,
            padding: '8px 10px',
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
          {backLabel}
        </button>
      </div>
    );
  };

  const handleAccordionToggle = (e) => {
    const current = e.currentTarget;
    if (!current.open) return;

    const scope = current.closest('[data-dropdown-scope]') || document;
    scope.querySelectorAll('.gfg-dropdown').forEach((node) => {
      if (node !== current) {
        node.open = false;
      }
    });
  };

  const sectionRuntimeKey = (docKey, heading) => `${docKey}:${heading}`;

  const editorLineHeightPx = 19.5;
  const editorTopPaddingPx = 10;
  const editorGutterWidthPx = 46;
  const editorHorizontalPaddingPx = 12;

  const syncEditorCursorState = (key, target) => {
    if (!target) return;

    const text = target.value || '';
    const cursorIndex = target.selectionStart ?? 0;
    const activeLine = text.slice(0, cursorIndex).split('\n').length;
    const scrollTop = target.scrollTop || 0;

    setEditorActiveLineMap(prev => (prev[key] === activeLine ? prev : { ...prev, [key]: activeLine }));
    setEditorScrollTopMap(prev => (prev[key] === scrollTop ? prev : { ...prev, [key]: scrollTop }));
  };

  const renderEditorLineNumbers = (key, code) => {
    const lineCount = Math.max(1, String(code || '').split('\n').length);
    const activeLine = editorActiveLineMap[key] || 1;

    return Array.from({ length: lineCount }, (_, idx) => {
      const lineNumber = idx + 1;
      const isActive = lineNumber === activeLine;

      return (
        <div
          key={`gutter-${key}-${lineNumber}`}
          style={{
            height: editorLineHeightPx,
            lineHeight: `${editorLineHeightPx}px`,
            textAlign: 'right',
            color: isActive ? '#c6c6c6' : '#858585',
            fontWeight: isActive ? 700 : 500,
            userSelect: 'none',
          }}
        >
          {lineNumber}
        </div>
      );
    });
  };

  const getEditorBoxHeightPx = (code) => {
    const lineCount = Math.max(1, String(code || '').split('\n').length);
    const verticalPadding = editorTopPaddingPx * 2;
    return Math.max(170, Math.ceil(lineCount * editorLineHeightPx + verticalPadding));
  };

  const shouldPreloadCarouselImage = (idx, currentIndex, total) => {
    if (total <= 1) return true;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    return idx === currentIndex || idx === prevIndex || idx === nextIndex;
  };

  const getDocCarouselImages = (docKey) => {
    if (!docKey) return [];

    switch (docKey) {
      case 'dsa-tutorial':
        return DSA_TUTORIAL_CONTENT.images || [];
      case 'html-tutorial-page':
        return HTML_TUTORIAL_CONTENT.images || [];
      case 'html-introduction-page':
        return HTML_INTRODUCTION_CONTENT.images || [];
      case 'html-features-page':
        return HTML_FEATURES_CONTENT.images || [];
      case 'html-editors-page':
        return HTML_EDITORS_CONTENT.images || [];
      case 'html-comments-page':
        return HTML_COMMENTS_CONTENT.images || [];
      case 'html-structure-page':
        return HTML_STRUCTURE_CONTENT.images || [];
      case 'html-elements-page':
        return HTML_ELEMENTS_CONTENT.images || [];
      case 'html-attributes-page':
        return HTML_ATTRIBUTES_CONTENT.images || [];
      case 'html-semantics-page':
        return HTML_SEMANTICS_CONTENT.images || [];
      case 'html-entities-page':
        return HTML_ENTITIES_CONTENT.images || [];
      case 'html-symbols-page':
        return HTML_SYMBOLS_CONTENT.images || [];
      case 'html-simple-portfolio-page':
        return HTML_SIMPLE_PORTFOLIO_CONTENT.images || [];
      case 'html-event-webpage-page':
        return HTML_EVENT_WEBPAGE_CONTENT.images || [];
      case 'html-beginner-projects-page':
        return HTML_BEGINNER_PROJECTS_CONTENT.images || [];
      case 'html-project-ideas-page':
        return HTML_PROJECT_IDEAS_CONTENT.images || [];
      case 'html-common-tags-page':
        return HTML_COMMON_TAGS_CONTENT.images || [];
      case 'html-tags-atoz-page':
        return HTML_TAGS_ATOZ_CONTENT.images || [];
      case 'html-tables-page':
        return HTML_TABLES_CONTENT.images || [];
      case 'html-tr-tag-page':
        return HTML_TR_TAG_CONTENT.images || [];
      case 'html-th-tag-page':
        return HTML_TH_TAG_CONTENT.images || [];
      case 'html-td-tag-page':
        return HTML_TD_TAG_CONTENT.images || [];
      case 'html-caption-tag-page':
        return HTML_CAPTION_TAG_CONTENT.images || [];
      case 'html-group-columns-page':
        return HTML_GROUP_COLUMNS_CONTENT.images || [];
      case 'html-lists-page':
        return HTML_LISTS_CONTENT.images || [];
      case 'html-ordered-lists-page':
        return HTML_ORDERED_LISTS_CONTENT.images || [];
      case 'html-unordered-lists-page':
        return HTML_UNORDERED_LISTS_CONTENT.images || [];
      case 'html-description-lists-page':
        return HTML_DESCRIPTION_LISTS_CONTENT.images || [];
      case 'html-i-tag-page':
        return HTML_ITALIC_TAG_CONTENT.images || [];
      case 'html-small-tag-page':
        return HTML_SMALL_TAG_CONTENT.images || [];
      case 'html-ins-tag-page':
        return HTML_INS_TAG_CONTENT.images || [];
      case 'html-sub-tag-page':
        return HTML_SUB_TAG_CONTENT.images || [];
      case 'html-strong-tag-page':
        return HTML_STRONG_TAG_CONTENT.images || [];
      case 'html-b-tag-page':
        return HTML_B_TAG_CONTENT.images || [];
      case 'css-tutorial-page':
        return CSS_TUTORIAL_CONTENT.images || [];
      case 'javascript-tutorial-page':
        return JAVASCRIPT_TUTORIAL_CONTENT.images || [];
      case 'http-protocol-page':
        return HTTP_TUTORIAL_CONTENT.images || [];
      case 'input-output-page':
        return INPUT_OUTPUT_NOTES.images || [];
      case 'conditional-statements-page':
        return CONDITIONAL_STATEMENTS_NOTES.images || [];
      case 'for-loop-page':
        return FOR_LOOP_NOTES.images || [];
      case 'while-loop-page':
        return WHILE_LOOP_NOTES.images || [];
      case 'function-page':
        return FUNCTION_NOTES.images || [];
      case 'classes-objects-page':
        return CLASSES_OBJECTS_NOTES.images || [];
      default:
        return [];
    }
  };

  useEffect(() => {
    const images = getDocCarouselImages(activeLocalDoc);
    const imageCount = Array.isArray(images) ? images.length : 0;
    if (imageCount <= 1) return;

    const intervalId = window.setInterval(() => {
      setDocImageIndexMap(prev => ({
        ...prev,
        [activeLocalDoc]: ((prev[activeLocalDoc] ?? 0) + 1) % imageCount,
      }));
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [activeLocalDoc]);

  const markImageLoaded = (imageKey) => {
    setLoadedImageMap(prev => (prev[imageKey] ? prev : { ...prev, [imageKey]: true }));
  };

  const extractLineColumnFromStack = (stackText = '') => {
    const text = String(stackText || '');
    const match = text.match(/<anonymous>:(\d+):(\d+)/);
    if (!match) return { line: null, column: null };
    return {
      line: Number(match[1]),
      column: Number(match[2]),
    };
  };

  const getErrorFixHints = ({ errMessage, sourceLines, line, language }) => {
    const message = String(errMessage || '').toLowerCase();
    const hints = [];
    const currentLine = line && sourceLines[line - 1] ? String(sourceLines[line - 1]) : '';

    if (message.includes('unexpected token')) {
      hints.push('Check for a missing symbol before this point: `;`, `)`, `}`, or `]`.');
      hints.push('Make sure all opening brackets have matching closing brackets.');
    }

    if (message.includes('missing terminating') || message.includes('unterminated') || message.includes('string')) {
      hints.push('A string is not closed. Add a matching closing quote on the same line.');
    }

    if (message.includes('is not defined') || message.includes('undefined')) {
      hints.push('A variable/function is used before declaration. Declare it first and check spelling.');
    }

    if (message.includes('expected')) {
      hints.push('The parser expected a token that is missing. Verify separators like `,` and `;`.');
    }

    if (message.includes('unsupported syntax')) {
      hints.push('This editor runner supports common tutorial syntax only. Keep code minimal and avoid advanced constructs.');
    }

    if (language === 'c-like') {
      if (currentLine.includes('cout') && !currentLine.includes('<<')) {
        hints.push('`cout` is missing stream operators. Example: `cout << "text";`');
      }
      if (currentLine.includes('printf') && !currentLine.trim().endsWith(';')) {
        hints.push('Add `;` at the end of `printf(...)`.');
      }
      if (currentLine.includes('if') && !currentLine.includes(')')) {
        hints.push('`if` condition is incomplete. Example: `if (x > 0)`');
      }
    }

    if (language === 'python') {
      if (currentLine.includes('if ') && !currentLine.trim().endsWith(':')) {
        hints.push('Python `if` lines must end with `:`.');
      }
      if (currentLine.includes('print') && !currentLine.includes('(')) {
        hints.push('Use Python print with parentheses: `print(...)`.');
      }
    }

    if (hints.length === 0) {
      hints.push('Review the error line and compare it with a working example from the section.');
      hints.push('Check for missing punctuation and unmatched brackets first.');
    }

    return hints;
  };

  const buildDetailedErrorReport = ({
    language,
    stage,
    error,
    sourceCode,
    translatedCode = '',
    lineOffset = 0,
    expectedOutput = '',
    explicitLine = null,
    explicitColumn = null,
  }) => {
    const errMessage = error?.message || 'Unknown execution error';
    const { line: rawLine, column } = extractLineColumnFromStack(error?.stack || '');
    const computedLine = rawLine ? Math.max(1, rawLine - Math.max(0, lineOffset)) : null;
    const line = explicitLine ?? computedLine;
    const resolvedColumn = explicitColumn ?? column;
    const sourceLines = String(sourceCode || '').replace(/\r/g, '').split('\n');
    const errorLineContent = line && sourceLines[line - 1] !== undefined
      ? sourceLines[line - 1]
      : '';

    const detailLines = [
      `./Solution.cpp:${line ? line : '?'}:${resolvedColumn ? resolvedColumn : '?'}: error: ${errMessage}`,
    ];

    if (line && sourceLines[line - 1] !== undefined) {
      detailLines.push(`${line}`);
      detailLines.push(`${errorLineContent || '\u200B'}`);
      detailLines.push(`    ${line} | ${errorLineContent || '\u200B'}`);
      if (resolvedColumn) {
        const caretPad = Math.max(1, resolvedColumn);
        detailLines.push(`      | ${' '.repeat(caretPad - 1)}^`);
      }
    }

    if (expectedOutput) {
      detailLines.push('Output');
      detailLines.push(String(expectedOutput));
    }

    return detailLines.join('\n');
  };

  const detectCLikeCompileIssue = (code) => {
    const lines = String(code || '').replace(/\r/g, '').split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      let quoteCount = 0;
      for (let j = 0; j < line.length; j += 1) {
        if (line[j] === '"' && line[j - 1] !== '\\') {
          quoteCount += 1;
        }
      }

      if (quoteCount % 2 !== 0) {
        const firstQuote = line.indexOf('"');
        return {
          message: 'missing terminating " character',
          line: i + 1,
          column: firstQuote >= 0 ? firstQuote + 1 : 1,
        };
      }
    }

    return null;
  };

  const executeJavaScriptSnippet = (code, expectedOutput = '') => {
    const logs = [];
    const originalLog = console.log;
    const originalError = console.error;

    try {
      console.log = (...args) => {
        logs.push(args.map(arg => (typeof arg === 'string' ? arg : JSON.stringify(arg))).join(' '));
      };

      console.error = (...args) => {
        logs.push(`ERROR: ${args.map(arg => (typeof arg === 'string' ? arg : JSON.stringify(arg))).join(' ')}`);
      };

      const runner = new Function(code);
      runner();
      return { output: logs.join('\n') || '(no output)', error: null };
    } catch (error) {
      return {
        output: '',
        error: buildDetailedErrorReport({
          language: 'javascript',
          stage: 'runtime',
          error,
          sourceCode: code,
          expectedOutput,
        }),
      };
    } finally {
      console.log = originalLog;
      console.error = originalError;
    }
  };

  const executeCLikeSnippet = (code, expectedOutput = '') => {
    const logs = [];
    const originalLog = console.log;
    let translatedBody = '';
    let preludeLineCount = 0;

    const precheckIssue = detectCLikeCompileIssue(code);
    if (precheckIssue) {
      const syntheticError = new Error(precheckIssue.message);
      syntheticError.name = 'SyntaxError';
      return {
        output: '',
        error: buildDetailedErrorReport({
          language: 'c-like',
          stage: 'compile',
          error: syntheticError,
          sourceCode: code,
          expectedOutput,
          explicitLine: precheckIssue.line,
          explicitColumn: precheckIssue.column,
        }),
      };
    }

    const toJavaScriptBody = (raw) => {
      let working = String(raw || '');
      working = working.replace(/\r/g, '');
      working = working.replace(/\/\*[\s\S]*?\*\//g, '');
      working = working.replace(/^\s*#include.*$/gm, '');
      working = working.replace(/^\s*using\s+namespace\s+std\s*;?\s*$/gm, '');
      working = working.replace(/^\s*import\s+[^;]+;\s*$/gm, '');
      working = working.replace(/^\s*return\s+0\s*;?\s*$/gm, '');

      const mainSignatureRegex = /(?:int\s+main\s*\([^)]*\)|(?:public\s+)?(?:static\s+)?void\s+main\s*\([^)]*\)(?:\s+throws\s+[A-Za-z_][\w\s,]*)?|(?:public\s+)?(?:static\s+)?void\s+Main\s*\([^)]*\))/m;
      const mainSignatureMatch = working.match(mainSignatureRegex);
      if (mainSignatureMatch && typeof mainSignatureMatch.index === 'number') {
        const signatureEnd = mainSignatureMatch.index + mainSignatureMatch[0].length;
        const openBraceIndex = working.indexOf('{', signatureEnd);

        if (openBraceIndex >= 0) {
          let depth = 0;
          let closeBraceIndex = -1;

          for (let i = openBraceIndex; i < working.length; i += 1) {
            const char = working[i];
            if (char === '{') depth += 1;
            if (char === '}') depth -= 1;
            if (depth === 0) {
              closeBraceIndex = i;
              break;
            }
          }

          if (closeBraceIndex > openBraceIndex) {
            working = working.slice(openBraceIndex + 1, closeBraceIndex);
          }
        }
      } else {
        const classMatch = working.match(/(?:public\s+)?class\s+\w+\s*\{/m);
        if (classMatch && typeof classMatch.index === 'number') {
          const classStart = classMatch.index + classMatch[0].length - 1;
          let depth = 0;
          let classEnd = -1;

          for (let i = classStart; i < working.length; i += 1) {
            const char = working[i];
            if (char === '{') depth += 1;
            if (char === '}') depth -= 1;
            if (depth === 0) {
              classEnd = i;
              break;
            }
          }

          if (classEnd > classStart) {
            working = working.slice(classStart + 1, classEnd);
          }
        }
      }

      working = working.replace(/^\s*(public\s+)?class\s+\w+\s*\{\s*$/gm, '');

      const lines = working.split('\n');
      const converted = lines.map((line) => {
        let next = line.replace(/\/\/.*$/, '').trim();
        if (!next) return '';
        if (/\bscanf\s*\(/.test(next) || /\bcin\s*>>/.test(next) || /readline\.question\s*\(/.test(next)) {
          return '';
        }

        next = next.replace(/\bstd::/g, '');
        next = next.replace(/\bSystem\.out\.println\s*\(/g, 'console.log(');
        next = next.replace(/\bSystem\.out\.print\s*\(/g, 'console.log(');
        next = next.replace(/\bConsole\.WriteLine\s*\(/g, 'console.log(');
        next = next.replace(/\bConsole\.Write\s*\(/g, 'console.log(');

        next = next.replace(/^\s*printf\s*\((.*)\)\s*;?\s*$/, (_m, args) => {
          return `console.log(__formatPrintf(${args}));`;
        });

        next = next.replace(
          /^\s*(?:const\s+)?(?:unsigned\s+)?(?:int|float|double|long|short|char|bool|boolean|string|String|auto|var)\s+([A-Za-z_]\w*)\s*(=\s*[^;]+)?\s*;\s*$/,
          (_m, varName, assignment) => `let ${varName}${assignment ? ` ${assignment}` : ''};`
        );

        next = next.replace(/\bcout\s*<<\s*([^;]+);?\s*$/, (_m, chain) => {
          const parts = chain
            .split('<<')
            .map(part => part.trim())
            .filter(part => part && part !== 'endl');

          if (parts.length === 0) return 'console.log();';
          return `console.log(${parts.join(' + ')});`;
        });

        return next;
      });

      return converted.filter(Boolean).join('\n');
    };

    try {
      console.log = (...args) => {
        logs.push(args.map(arg => (typeof arg === 'string' ? arg : String(arg))).join(' '));
      };

      const runtimePrelude = `
        const __formatPrintf = (fmt, ...args) => {
          let idx = 0;
          return String(fmt || '').replace(/%(?:\\.(\\d+))?[dfsc]/g, (token, precision) => {
            const value = args[idx++];
            if (token.endsWith('d')) return String(parseInt(value ?? 0, 10));
            if (token.endsWith('f')) {
              const digits = precision ? parseInt(precision, 10) : 6;
              const num = Number(value ?? 0);
              return Number.isFinite(num) ? num.toFixed(digits) : '0';
            }
            if (token.endsWith('c')) return String(String(value ?? '')[0] || '');
            return String(value ?? '');
          });
        };
      `;

      preludeLineCount = runtimePrelude.split('\n').length;

      translatedBody = toJavaScriptBody(code);
      if (!translatedBody.trim()) {
        throw new Error('Unsupported syntax for this editor runner.');
      }
      const runner = new Function(`${runtimePrelude}\n${translatedBody}`);
      runner();
      return { output: logs.join('\n') || '(no output)', error: null };
    } catch (error) {
      return {
        output: '',
        error: buildDetailedErrorReport({
          language: 'c-like',
          stage: translatedBody ? 'translated-runtime' : 'translation',
          error,
          sourceCode: code,
          expectedOutput,
          lineOffset: preludeLineCount,
        }),
      };
    } finally {
      console.log = originalLog;
    }
  };

  const executePythonSnippet = (code) => {
    const vars = {};
    const functions = {};
    const output = [];

    const normalizeExpr = (expr) => String(expr || '')
      .replace(/\band\b/g, '&&')
      .replace(/\bor\b/g, '||')
      .replace(/\bnot\b/g, '!')
      .replace(/\bTrue\b/g, 'true')
      .replace(/\bFalse\b/g, 'false');

    const evalExpr = (expr, lineNo = 0) => {
      try {
        const keys = Object.keys(vars);
        const vals = keys.map(k => vars[k]);
        const normalized = normalizeExpr(expr);
        return new Function(...keys, `return (${normalized});`)(...vals);
      } catch (error) {
        throw new Error(`Line ${lineNo}: ${error?.message || 'Invalid expression'}`);
      }
    };

    const sourceLines = String(code || '').replace(/\r/g, '').split('\n').map((raw, idx) => {
      const withoutComment = raw.replace(/#.*$/, '');
      const indent = withoutComment.match(/^\s*/)?.[0]?.length || 0;
      const text = withoutComment.trim();
      return { indent, text, lineNo: idx + 1 };
    }).filter(line => line.text.length > 0);

    const parseBlock = (startIndex, baseIndent) => {
      const statements = [];
      let i = startIndex;

      while (i < sourceLines.length) {
        const line = sourceLines[i];
        if (line.indent < baseIndent) break;
        if (line.indent > baseIndent) {
          throw new Error(`Line ${line.lineNo}: Unexpected indentation`);
        }

        if (/^def\s+[A-Za-z_]\w*\s*\(\s*\)\s*:\s*$/.test(line.text)) {
          const name = line.text.match(/^def\s+([A-Za-z_]\w*)/)?.[1];
          const parsed = parseBlock(i + 1, baseIndent + 4);
          statements.push({ type: 'def', name, body: parsed.statements, lineNo: line.lineNo });
          i = parsed.nextIndex;
          continue;
        }

        if (/^while\s+.+:\s*$/.test(line.text)) {
          const condition = line.text.replace(/^while\s+/, '').replace(/:\s*$/, '');
          const parsed = parseBlock(i + 1, baseIndent + 4);
          statements.push({ type: 'while', condition, body: parsed.statements, lineNo: line.lineNo });
          i = parsed.nextIndex;
          continue;
        }

        if (/^if\s+.+:\s*$/.test(line.text)) {
          const branches = [];
          const condition = line.text.replace(/^if\s+/, '').replace(/:\s*$/, '');
          const first = parseBlock(i + 1, baseIndent + 4);
          branches.push({ condition, body: first.statements, lineNo: line.lineNo });
          i = first.nextIndex;

          while (i < sourceLines.length && sourceLines[i].indent === baseIndent && /^elif\s+.+:\s*$/.test(sourceLines[i].text)) {
            const elifLine = sourceLines[i];
            const elifCond = elifLine.text.replace(/^elif\s+/, '').replace(/:\s*$/, '');
            const elifBlock = parseBlock(i + 1, baseIndent + 4);
            branches.push({ condition: elifCond, body: elifBlock.statements, lineNo: elifLine.lineNo });
            i = elifBlock.nextIndex;
          }

          let elseBody = null;
          if (i < sourceLines.length && sourceLines[i].indent === baseIndent && /^else\s*:\s*$/.test(sourceLines[i].text)) {
            const elseBlock = parseBlock(i + 1, baseIndent + 4);
            elseBody = elseBlock.statements;
            i = elseBlock.nextIndex;
          }

          statements.push({ type: 'if', branches, elseBody, lineNo: line.lineNo });
          continue;
        }

        statements.push({ type: 'stmt', text: line.text, lineNo: line.lineNo });
        i += 1;
      }

      return { statements, nextIndex: i };
    };

    const executeBlock = (statements) => {
      for (const statement of statements) {
        if (statement.type === 'def') {
          functions[statement.name] = statement.body;
          continue;
        }

        if (statement.type === 'while') {
          let guard = 0;
          while (evalExpr(statement.condition, statement.lineNo)) {
            executeBlock(statement.body);
            guard += 1;
            if (guard > 10000) {
              throw new Error(`Line ${statement.lineNo}: Potential infinite loop in while`);
            }
          }
          continue;
        }

        if (statement.type === 'if') {
          let branchExecuted = false;
          for (const branch of statement.branches) {
            if (evalExpr(branch.condition, branch.lineNo)) {
              executeBlock(branch.body);
              branchExecuted = true;
              break;
            }
          }
          if (!branchExecuted && Array.isArray(statement.elseBody)) {
            executeBlock(statement.elseBody);
          }
          continue;
        }

        const line = statement.text;

        const printMatch = line.match(/^print\((.*)\)\s*$/);
        if (printMatch) {
          const content = printMatch[1].trim();
          if (!content) {
            output.push('');
            continue;
          }
          const segments = content.split(/\s*,\s*/g).map(part => evalExpr(part, statement.lineNo));
          output.push(segments.map(v => String(v)).join(' '));
          continue;
        }

        const augAssignMatch = line.match(/^([A-Za-z_]\w*)\s*([+\-*/])=\s*(.+)$/);
        if (augAssignMatch) {
          const [, variableName, operator, expr] = augAssignMatch;
          const currentValue = vars[variableName] ?? 0;
          const rhs = evalExpr(expr, statement.lineNo);
          if (operator === '+') vars[variableName] = currentValue + rhs;
          if (operator === '-') vars[variableName] = currentValue - rhs;
          if (operator === '*') vars[variableName] = currentValue * rhs;
          if (operator === '/') vars[variableName] = currentValue / rhs;
          continue;
        }

        const assignMatch = line.match(/^([A-Za-z_]\w*)\s*=\s*(.+)$/);
        if (assignMatch) {
          const [, variableName, expr] = assignMatch;
          vars[variableName] = evalExpr(expr, statement.lineNo);
          continue;
        }

        const callMatch = line.match(/^([A-Za-z_]\w*)\s*\(\s*\)\s*$/);
        if (callMatch) {
          const fnName = callMatch[1];
          if (!functions[fnName]) {
            throw new Error(`Line ${statement.lineNo}: Undefined function '${fnName}'`);
          }
          executeBlock(functions[fnName]);
          continue;
        }

        throw new Error(`Line ${statement.lineNo}: Unsupported Python syntax`);
      }
    };

    const parsed = parseBlock(0, 0);
    executeBlock(parsed.statements);
    return { output: output.join('\n') || '(no output)', error: null };
  };

  const executeNonJavaScriptSnippet = (code, language, fallbackOutput) => {
    try {
      if (language === 'python') {
        return executePythonSnippet(code);
      }
      return executeCLikeSnippet(code, fallbackOutput);
    } catch (error) {
      return {
        output: fallbackOutput || '',
        error: buildDetailedErrorReport({
          language,
          stage: 'interpreter',
          error,
          sourceCode: code,
          expectedOutput: fallbackOutput,
        }),
      };
    }
  };

  const runEditableCode = (docKey, section, activeSnippet = section) => {
    const key = sectionRuntimeKey(docKey, section.heading);
    const language = activeSnippet.language
      ? languageFromTabLabel(activeSnippet.language)
      : languageFromHeading(section.heading);
    const codeToRun = editableCodeMap[key] ?? activeSnippet.runtimeCode ?? activeSnippet.code;
    const expectedOutput = (activeSnippet.output || '').replace(/\\n/g, '\n');
    const runtimeOnlyForThisPage = docKey === 'while-loop-page';
    const fallbackOutput = runtimeOnlyForThisPage ? '' : expectedOutput;

    // Show compilation panel inline
    setCompilingCodeKey(key);
    setCompilationErrorMap(prev => {
      const next = { ...prev };
      delete next[key];
      return next;
    });

    // Simulate compilation delay for better UX
    setTimeout(() => {
      try {
        const result = language === 'javascript'
          ? executeJavaScriptSnippet(codeToRun, fallbackOutput)
          : executeNonJavaScriptSnippet(codeToRun, language, fallbackOutput);

        if (result.error) {
          setCompilationErrorMap(prev => ({
            ...prev,
            [key]: result.error,
          }));
          setRuntimeOutputMap(prev => ({
            ...prev,
            [key]: `Error: ${result.error}`,
          }));
          return;
        }

        setCompilationErrorMap(prev => {
          const next = { ...prev };
          delete next[key];
          return next;
        });
        setLastRunCodeMap(prev => ({
          ...prev,
          [key]: codeToRun,
        }));
        setRuntimeOutputMap(prev => ({
          ...prev,
          [key]: result.output || '(no output)',
        }));
      } catch (error) {
        const errorMsg = error?.message || 'Unknown execution error';
        setCompilationErrorMap(prev => ({
          ...prev,
          [key]: errorMsg,
        }));
        setRuntimeOutputMap(prev => ({
          ...prev,
          [key]: `Error: ${errorMsg}`,
        }));
      } finally {
        setCompilingCodeKey(null);
      }
    }, 800);
  };

  const clearRuntimeOutput = (docKey, section) => {
    const key = sectionRuntimeKey(docKey, section.heading);
    setLastRunCodeMap(prev => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setRuntimeOutputMap(prev => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const clearRuntimeOutputByKey = (key) => {
    setLastRunCodeMap(prev => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setRuntimeOutputMap(prev => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setCompilationErrorMap(prev => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  // Inject animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = dsaAnimationStyles;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  const dsaSidebarLinks = [
    {
      label: 'DSA Tutorial',
      url: 'https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/',
      children: [
        { label: 'Fundamentals', sectionId: 'fundamentals' },
        { label: 'Maths, Pattern & Recursion', sectionId: 'maths-pattern-recursion' },
        { label: 'Array & String', sectionId: 'array-string' },
        { label: 'Searching', sectionId: 'searching' },
        { label: 'Sorting', sectionId: 'sorting' },
        { label: 'Bit Manipulation', sectionId: 'bit-manipulation' },
        { label: 'Hashing', sectionId: 'hashing' },
        { label: 'Two-Pointer', sectionId: 'two-pointer' },
        { label: 'Sliding Window', sectionId: 'sliding-window' },
        { label: 'Prefix Sum', sectionId: 'prefix-sum' },
        { label: 'Backtracking', sectionId: 'backtracking' },
        { label: 'Linked-list', sectionId: 'linked-list' },
        { label: 'Stack', sectionId: 'stack' },
        { label: 'Queue', sectionId: 'queue' },
        { label: 'Deque', sectionId: 'deque' },
        { label: 'Binary Tree', sectionId: 'binary-tree' },
        { label: 'Binary Search Tree', sectionId: 'binary-search-tree' },
        { label: 'Heap', sectionId: 'heap' },
        { label: 'Graph', sectionId: 'graph' },
        { label: 'Greedy', sectionId: 'greedy' },
        { label: 'Dynamic Programming', sectionId: 'dynamic-programming' },
        { label: 'Number Theory', sectionId: 'number-theory' },
        { label: 'Trie', sectionId: 'trie' },
        { label: 'String Matching', sectionId: 'string-matching' },
        { label: 'Range Query', sectionId: 'range-query' },
        { label: 'Topic Wise Complete Tutorials', sectionId: 'topic-wise-complete-tutorials' },
      ],
    },
    { label: 'Interview Questions', url: 'https://www.geeksforgeeks.org/dsa/top-100-data-structure-and-algorithms-dsa-interview-questions-topic-wise/' },
    { label: 'Quizzes', url: 'https://www.geeksforgeeks.org/dsa/data-structures-and-algorithms-online-quiz/' },
    { label: 'Must Do', url: 'https://www.geeksforgeeks.org/dsa/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/' },
    { label: 'Advanced DSA', url: 'https://www.geeksforgeeks.org/dsa/advanced-data-structures/' },
    { label: 'System Design', url: 'https://www.geeksforgeeks.org/system-design/system-design-tutorial/' },
    { label: 'Aptitude', url: 'https://www.geeksforgeeks.org/aptitude/aptitude-questions-and-answers/' },
    { label: 'Puzzles', url: 'https://www.geeksforgeeks.org/aptitude/puzzles/' },
    { label: 'Interview Corner', url: 'https://www.geeksforgeeks.org/interview-prep/interview-corner/' },
    { label: 'DSA Python', url: 'https://www.geeksforgeeks.org/dsa/python-data-structures-and-algorithms/' },
  ];

  const webDevelopmentSidebarLinks = [
    {
      label: 'Web Tutorial',
      url: 'https://www.geeksforgeeks.org/web-tech/web-technology/',
      children: [
        { label: 'Basics', sectionId: 'basics' },
        { label: 'Frontend Development', sectionId: 'frontend-development' },
        { label: 'Backend Development', sectionId: 'backend-development' },
        { label: 'Server-Side Programming Languages', sectionId: 'server-side-programming-languages' },
        { label: 'Databases', sectionId: 'databases' },
        { label: 'APIs and Data Exchange', sectionId: 'apis-data-exchange' },
        { label: 'Data Exchange format for API Communication', sectionId: 'data-exchange-format-for-api-communication' },
        { label: 'Version Control and Deployment', sectionId: 'version-control-deployment' },
        { label: 'Graphics', sectionId: 'graphics' },
        { label: 'Also Check', sectionId: 'also-check' },
      ],
    },
    { label: 'Interview Questions', url: 'https://www.geeksforgeeks.org/html/web-developer-interview-questions-and-answers/' },
    { label: 'Projects', url: 'https://www.geeksforgeeks.org/html/web-development-projects/' },
    { label: 'Prerequisites', url: 'https://www.geeksforgeeks.org/websites-apps/web-development-prerequisites/' },
    { label: 'HTML', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
    { label: 'CSS', url: 'https://www.geeksforgeeks.org/css/css-tutorial/' },
    { label: 'Javascript', url: 'https://www.geeksforgeeks.org/javascript/javascript-tutorial/' },
    { label: 'JSON', url: 'https://www.geeksforgeeks.org/javascript/json/' },
    { label: 'TypeScript', url: 'https://www.geeksforgeeks.org/typescript/typescript-tutorial/' },
    { label: 'SQL', url: 'https://www.geeksforgeeks.org/sql/sql-tutorial/' },
  ];

  const sidebarItems = topic?.slug === 'dsa'
    ? dsaSidebarLinks.map(link => ({
      label: link.label,
      url: link.url,
      isLink: link.label !== 'DSA Tutorial',
      docKey: link.label === 'DSA Tutorial' ? 'dsa-tutorial' : null,
      children: link.children || [],
    }))
    : topic?.slug === 'web-development'
    ? webDevelopmentSidebarLinks.map(link => ({
      label: link.label,
      url: link.url,
      isLink: link.label !== 'Web Tutorial' && link.label !== 'HTML' && link.label !== 'CSS' && link.label !== 'Javascript' && link.label !== 'JavaScript',
      docKey: link.label === 'Web Tutorial' ? 'web-tutorial' : (link.label === 'HTML' ? 'html-tutorial-page' : (link.label === 'CSS' ? 'css-tutorial-page' : ((link.label === 'Javascript' || link.label === 'JavaScript') ? 'javascript-tutorial-page' : null))),
      children: link.children || [],
    }))
    : topic?.highlights.map(item => ({ label: item, isLink: false })) || [];

  const dsaLinkMap = {
    'DSA Tutorial': 'https://www.geeksforgeeks.org/dsa/dsa-tutorial-learn-data-structures-and-algorithms/',
    'Interview Questions': 'https://www.geeksforgeeks.org/dsa/top-100-data-structure-and-algorithms-dsa-interview-questions-topic-wise/',
    'Quizzes': 'https://www.geeksforgeeks.org/dsa/data-structures-and-algorithms-online-quiz/',
    'Must Do': 'https://www.geeksforgeeks.org/dsa/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/',
    'Advanced DSA': 'https://www.geeksforgeeks.org/dsa/advanced-data-structures/',
    'System Design': 'https://www.geeksforgeeks.org/system-design/system-design-tutorial/',
    'Aptitude': 'https://www.geeksforgeeks.org/aptitude/aptitude-questions-and-answers/',
    'Puzzles': 'https://www.geeksforgeeks.org/aptitude/puzzles/',
    'Interview Corner': 'https://www.geeksforgeeks.org/interview-prep/interview-corner/',
    'DSA Python': 'https://www.geeksforgeeks.org/dsa/python-data-structures-and-algorithms/',
    'Array': 'https://www.geeksforgeeks.org/array-data-structure-guide/',
    'Linked List': 'https://www.geeksforgeeks.org/data-structures/linked-list/',
    'Tree': 'https://www.geeksforgeeks.org/binary-tree-data-structure/',
    'Heap': 'https://www.geeksforgeeks.org/heap-data-structure/',
    'Binary Search': 'https://www.geeksforgeeks.org/binary-search/',
    'Quick Sort': 'https://www.geeksforgeeks.org/quick-sort-algorithm/',
    'Merge Sort': 'https://www.geeksforgeeks.org/merge-sort/',
    'Big-O': 'https://www.geeksforgeeks.org/analysis-of-algorithms-big-o-analysis/',
    'Conditional Statements': 'https://www.geeksforgeeks.org/dsa/conditional-statements-in-programming/',
    'For loop': 'https://www.geeksforgeeks.org/dsa/for-loop-in-programming/',
    'While loop': 'https://www.geeksforgeeks.org/dsa/while-loop-in-programming/',
    'Function': 'https://www.geeksforgeeks.org/functions-in-c/',
    'Classes and Objects': 'https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/',
    'Input and Output': 'https://www.geeksforgeeks.org/dsa/input-and-output-in-programming/#2-cpp',
  };

  const linkForTopic = (label) => {
    const clean = label.trim();
    if (dsaLinkMap[clean]) return dsaLinkMap[clean];
    return `https://www.geeksforgeeks.org/?s=${encodeURIComponent(clean)}`;
  };

  const dsaGroupHeadings = new Set([
    'Fundamentals',
    'Maths, Pattern & Recursion',
    'Array & String',
    'Searching',
    'Sorting',
    'Bit Manipulation',
    'Hashing',
    'Two-Pointer',
    'Sliding Window',
    'Prefix Sum',
    'Backtracking',
    'Linked-list',
    'Stack',
    'Queue',
    'Deque',
    'Binary Tree',
    'Binary Search Tree',
    'Heap',
    'Graph',
    'Greedy',
    'Dynamic Programming',
    'Advanced Topics',
    'Number Theory',
    'Trie',
    'String Matching',
    'Range Query',
  ]);

  const topicWiseGroupHeadings = new Set([
    'Fundamentals',
    'Data Structures',
    'Algorithms',
    'Advanced Topics',
    'Other Algorithms',
  ]);

  const dsaFactLines = new Set([
    'Foundation for almost every software like GPS, Search Engines, AI ChatBots, Gaming Apps, Databases, Web Applications, etc.',
    'Top Companies like Google, Microsoft, Amazon, Apple, Meta and many other heavily focus on DSA in interviews.',
    'Learning DSA boosts your problem-solving abilities and make you a stronger programmer.',
  ]);

  const dsaBottomOptions = [
    {
      title: 'Explore',
      groups: [
        {
          heading: 'DSA Fundamentals',
          items: [
              { label: 'Maths', url: 'https://www.geeksforgeeks.org/dsa/logic-building-problems/' },
              { label: 'Complexity Analysis', url: 'https://www.geeksforgeeks.org/dsa/analysis-of-algorithms/' },
          ],
        },
        {
          heading: 'Data Structures',
          items: [
              { label: 'Array', url: 'https://www.geeksforgeeks.org/dsa/array-data-structure-guide/' },
              { label: 'String', url: 'https://www.geeksforgeeks.org/dsa/string-data-structure/' },
              { label: 'Hashing', url: 'https://www.geeksforgeeks.org/dsa/hashing-data-structure/' },
              { label: 'Linked List', url: 'https://www.geeksforgeeks.org/dsa/linked-list-data-structure/' },
              { label: 'Stack', url: 'https://www.geeksforgeeks.org/dsa/stack-data-structure/' },
              { label: 'Queue', url: 'https://www.geeksforgeeks.org/dsa/queue-data-structure/' },
              { label: 'Tree', url: 'https://www.geeksforgeeks.org/dsa/tree-data-structure/' },
              { label: 'Graph', url: 'https://www.geeksforgeeks.org/dsa/graph-data-structure/' },
          ],
        },
        {
          heading: 'Algorithms',
          items: [
              { label: 'Searching', url: 'https://www.geeksforgeeks.org/dsa/searching-algorithms/' },
              { label: 'Sorting', url: 'https://www.geeksforgeeks.org/dsa/sorting-algorithms/' },
              { label: 'Recursion', url: 'https://www.geeksforgeeks.org/introduction-to-recursion-2/' },
              { label: 'Greedy Algorithms', url: 'https://www.geeksforgeeks.org/dsa/greedy-algorithms/' },
              { label: 'Graph Algorithms', url: 'https://www.geeksforgeeks.org/dsa/graph-data-structure-and-algorithms/' },
              { label: 'Dynamic Programming', url: 'https://www.geeksforgeeks.org/dsa/dynamic-programming/' },
              { label: 'Bitwise Algorithms', url: 'https://www.geeksforgeeks.org/dsa/bitwise-algorithms/' },
          ],
        },
        {
          heading: 'Advanced',
          items: [
              { label: 'Segment Tree', url: 'https://www.geeksforgeeks.org/dsa/segment-tree-data-structure/' },
              { label: 'Binary Indexed Tree', url: 'https://www.geeksforgeeks.org/dsa/binary-indexed-tree-or-fenwick-tree-2/' },
              { label: 'Trie', url: 'https://www.geeksforgeeks.org/dsa/trie-insert-and-search/' },
              { label: 'Square Root Decomposition', url: 'https://www.geeksforgeeks.org/dsa/square-root-sqrt-decomposition-algorithm/' },
          ],
        },
        {
          heading: 'Interview Preparation',
          items: [
              { label: 'Interview Corner', url: 'https://www.geeksforgeeks.org/interview-corner/' },
              { label: 'GFG 160', url: 'https://www.geeksforgeeks.org/courses/gfg-160-series' },
              { label: 'Coding Practice', url: 'https://www.geeksforgeeks.org/dsa/geeksforgeeks-practice-best-online-coding-platform/' },
              { label: 'POTD', url: 'https://www.geeksforgeeks.org/problem-of-the-day' },
          ],
        },
      ],
    },
    {
      title: 'Courses',
      items: [
        { label: 'Data Structures and Algorithms Course', url: 'https://www.geeksforgeeks.org/courses/dsa-self-paced' },
        { label: 'DSA and System Design Course', url: 'https://www.geeksforgeeks.org/courses/dsa-system-design-live-sde-interview-course' },
      ],
    },
  ];

  const webDevelopmentBottomOptions = [
    {
      title: 'Explore',
      groups: [
        {
          heading: 'Frontend Fundamentals',
          items: [
            { label: 'HTML Basics', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
            { label: 'CSS Layout', url: 'https://www.geeksforgeeks.org/css/css-layout/' },
            { label: 'Responsive Design', url: 'https://www.geeksforgeeks.org/css/responsive-web-design-tutorial/' },
            { label: 'Flexbox', url: 'https://www.geeksforgeeks.org/css/css-flexbox/' },
            { label: 'CSS Grid', url: 'https://www.geeksforgeeks.org/css/css-grid/' },
          ],
        },
        {
          heading: 'JavaScript Essentials',
          items: [
            { label: 'JS Basics', url: 'https://www.geeksforgeeks.org/javascript/javascript-tutorial/' },
            { label: 'DOM Manipulation', url: 'https://www.geeksforgeeks.org/javascript/dom-document-object-model/' },
            { label: 'ES6 Features', url: 'https://www.geeksforgeeks.org/javascript/es6-javascript/' },
            { label: 'Async JavaScript', url: 'https://www.geeksforgeeks.org/javascript/async-await-javascript/' },
            { label: 'Events', url: 'https://www.geeksforgeeks.org/javascript/events-in-javascript/' },
          ],
        },
        {
          heading: 'Backend Basics',
          items: [
            { label: 'Databases', url: 'https://www.geeksforgeeks.org/sql/sql-tutorial/' },
            { label: 'REST APIs', url: 'https://www.geeksforgeeks.org/rest-api-introduction/' },
            { label: 'JSON', url: 'https://www.geeksforgeeks.org/javascript/json/' },
            { label: 'Node.js Basics', url: 'https://www.geeksforgeeks.org/nodejs/nodejs-tutorial/' },
          ],
        },
        {
          heading: 'Advanced Topics',
          items: [
            { label: 'TypeScript', url: 'https://www.geeksforgeeks.org/typescript/typescript-tutorial/' },
            { label: 'Web Frameworks', url: 'https://www.geeksforgeeks.org/react-tutorial/' },
            { label: 'Web Security', url: 'https://www.geeksforgeeks.org/web-security/' },
            { label: 'Performance Optimization', url: 'https://www.geeksforgeeks.org/web-performance/' },
          ],
        },
        {
          heading: 'Interview & Projects',
          items: [
            { label: 'Interview Questions', url: 'https://www.geeksforgeeks.org/html/web-developer-interview-questions-and-answers/' },
            { label: 'Projects', url: 'https://www.geeksforgeeks.org/html/web-development-projects/' },
            { label: 'Prerequisites', url: 'https://www.geeksforgeeks.org/websites-apps/web-development-prerequisites/' },
          ],
        },
      ],
    },
    {
      title: 'Languages',
      items: [
        { label: 'HTML', url: 'https://www.geeksforgeeks.org/html/html-tutorial/' },
        { label: 'CSS', url: 'https://www.geeksforgeeks.org/css/css-tutorial/' },
        { label: 'JavaScript', url: 'https://www.geeksforgeeks.org/javascript/javascript-tutorial/' },
        { label: 'TypeScript', url: 'https://www.geeksforgeeks.org/typescript/typescript-tutorial/' },
        { label: 'SQL', url: 'https://www.geeksforgeeks.org/sql/sql-tutorial/' },
        { label: 'JSON', url: 'https://www.geeksforgeeks.org/javascript/json/' },
      ],
    },
  ];

  const getBottomOptions = () => {
    return topic?.slug === 'web-development' ? webDevelopmentBottomOptions : dsaBottomOptions;
  };

  const renderDsaContent = () => {
    const lines = DSA_TUTORIAL_CONTENT.split('\n');
    const sectionAnchors = {
      'Fundamentals': 'fundamentals',
      'Maths, Pattern & Recursion': 'maths-pattern-recursion',
      'Array & String': 'array-string',
      'Searching': 'searching',
      'Sorting': 'sorting',
      'Bit Manipulation': 'bit-manipulation',
      'Hashing': 'hashing',
      'Two-Pointer': 'two-pointer',
      'Sliding Window': 'sliding-window',
      'Prefix Sum': 'prefix-sum',
      'Backtracking': 'backtracking',
      'Linked-list': 'linked-list',
      'Stack': 'stack',
      'Queue': 'queue',
      'Deque': 'deque',
      'Binary Tree': 'binary-tree',
      'Binary Search Tree': 'binary-search-tree',
      'Heap': 'heap',
      'Graph': 'graph',
      'Greedy': 'greedy',
      'Dynamic Programming': 'dynamic-programming',
      'Advanced Topics': 'advanced-topics',
      'Number Theory': 'number-theory',
      'Trie': 'trie',
      'String Matching': 'string-matching',
      'Range Query': 'range-query',
      'Queue / Deque': 'queue-deque',
      'Topic Wise Complete Tutorials': 'topic-wise-complete-tutorials',
    };

    const sectionAnchorAliases = {
      queue: 'queue-deque',
      deque: 'queue-deque',
      'graph-algorithms': 'graph',
      'number-theory': 'number-theory-trie-string-matching-range-query',
      trie: 'number-theory-trie-string-matching-range-query',
      'string-matching': 'number-theory-trie-string-matching-range-query',
      'range-query': 'number-theory-trie-string-matching-range-query',
      'topic-wise-complete-tutorials': 'topic-wise-complete-tutorials',
    };

    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={`sp-${idx}`} style={{ height: 10 }} />;

      if (trimmed === 'DSA Tutorial') {
        return (
          <h1
            key={`h1-${idx}`}
            style={{ margin: '0 0 10px', fontFamily: 'Space Grotesk', fontSize: 34, lineHeight: 1.2, color: '#e3e1e9' }}
          >
            {trimmed}
          </h1>
        );
      }

      if (/^Last Updated\s*:/.test(trimmed)) {
        return (
          <p key={`u-${idx}`} style={{ margin: '0 0 14px', fontSize: 13, color: '#e3e1e9', fontFamily: 'JetBrains Mono' }}>
            {trimmed}
          </p>
        );
      }

      if (trimmed === 'Step by Step Learning' || trimmed === 'Topic Wise Complete Tutorials') {
        return (
          <div key={`h2-wrap-${idx}`} className="dsa-section-wrap">
              <h2
              id={trimmed === 'Topic Wise Complete Tutorials' ? 'topic-wise-complete-tutorials' : undefined}
              style={{
                margin: '20px 0 12px',
                paddingTop: 12,
                borderTop: '1px solid rgba(58,73,75,0.35)',
                fontFamily: 'Space Grotesk',
                fontSize: 25,
                lineHeight: 1.25,
                color: '#e3e1e9',
                scrollMarginTop: 120,
              }}
            >
              {trimmed}
            </h2>
            {trimmed === 'Topic Wise Complete Tutorials' && (
              <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.7 }}>
                Below are the recommended different topics to learn complete DSA.
              </p>
            )}
          </div>
        );
      }

      if (dsaGroupHeadings.has(trimmed)) {
        const anchorId = sectionAnchors[trimmed];
        const aliasIds = Object.entries(sectionAnchorAliases)
          .filter(([, parentId]) => parentId === anchorId)
          .map(([aliasId]) => aliasId);

        return (
          <div key={`g-wrap-${idx}`} className="dsa-section-wrap" style={{ position: 'relative' }}>
            {aliasIds.map(aliasId => (
              <span
                key={`alias-${idx}-${aliasId}`}
                id={aliasId}
                style={{ position: 'relative', display: 'block', height: 0, scrollMarginTop: 120 }}
              />
            ))}
            <h3
              id={anchorId}
              style={{ margin: '16px 0 8px', fontFamily: 'Space Grotesk', fontSize: 21, lineHeight: 1.3, color: '#e3e1e9', scrollMarginTop: 120 }}
            >
              {trimmed}
            </h3>
          </div>
        );
      }

      if (trimmed === 'It is advised to skip the hard problems of every section in the first iteration if you are a complete beginner.') {
        return (
          <p
            key={`tip-${idx}`}
            style={{
              margin: '8px 0 14px',
              padding: '10px 12px',
              borderRadius: 8,
              border: '1px solid rgba(0,219,231,0.2)',
              background: 'rgba(0,219,231,0.06)',
              color: '#e3e1e9',
              lineHeight: 1.7,
            }}
          >
            {trimmed}
          </p>
        );
      }

      if (dsaFactLines.has(trimmed)) {
        return (
          <div key={`fact-${idx}`} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, margin: '6px 0' }}>
            <span style={{ color: '#00dbe7', lineHeight: 1.5 }}>•</span>
            <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}>{trimmed}</p>
          </div>
        );
      }

      const separatorIndex = trimmed.indexOf(':');
      const hasList = separatorIndex > -1 && separatorIndex < trimmed.length - 1;
      if (hasList) {
        const left = trimmed.slice(0, separatorIndex).trim();
        const right = trimmed.slice(separatorIndex + 1).trim();
        const items = right.split(',').map(s => s.trim()).filter(Boolean);
        const isTopicWiseGroup = topicWiseGroupHeadings.has(left);

        return (
          <div
            key={`l-${idx}`}
            style={{
              margin: isTopicWiseGroup ? '10px 0' : '8px 0',
              lineHeight: 1.7,
              padding: isTopicWiseGroup ? '8px 10px' : '0',
              border: isTopicWiseGroup ? '1px solid rgba(58,73,75,0.22)' : 'none',
              borderRadius: isTopicWiseGroup ? 8 : 0,
              background: isTopicWiseGroup ? 'rgba(14,16,21,0.45)' : 'transparent',
            }}
          >
            <span style={{ color: '#00dbe7', marginRight: 8 }}>•</span>
            <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{left}: </span>
            {items.map((item, itemIdx) => (
              <span key={`${idx}-${itemIdx}`}>
                {(() => {
                  const markdownLinkMatch = item.match(/^\[(.+)\]\((https?:\/\/[^\s)]+)\)$/);
                  const linkLabel = markdownLinkMatch ? markdownLinkMatch[1] : item;
                  const href = markdownLinkMatch ? markdownLinkMatch[2] : linkForTopic(item);
                  const isInputOutput = linkLabel === 'Input and Output';
                  const isConditionalStatements = linkLabel === 'Conditional Statements';
                  const isForLoop = linkLabel === 'For loop';
                  const isWhileLoop = linkLabel === 'While loop';
                  const isFunction = linkLabel === 'Function';
                  const isClassesAndObjects = linkLabel === 'Classes and Objects';

                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#00dbe7', textDecoration: 'underline' }}
                      onClick={e => {
                        if (!isInputOutput && !isConditionalStatements && !isForLoop && !isWhileLoop && !isFunction && !isClassesAndObjects) return;
                        e.preventDefault();
                        if (isInputOutput) {
                          setActiveLocalDoc('input-output-page');
                        } else if (isConditionalStatements) {
                          setActiveLocalDoc('conditional-statements-page');
                        } else if (isForLoop) {
                          setActiveLocalDoc('for-loop-page');
                        } else if (isWhileLoop) {
                          setActiveLocalDoc('while-loop-page');
                        } else if (isFunction) {
                          setActiveLocalDoc('function-page');
                        } else {
                          setActiveLocalDoc('classes-objects-page');
                        }
                        if (contentPanelRef.current) {
                          contentPanelRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      onMouseOver={e => e.currentTarget.style.color = '#74f5ff'}
                      onMouseOut={e => e.currentTarget.style.color = '#00dbe7'}
                    >
                      {linkLabel}
                    </a>
                  );
                })()}
                {itemIdx < items.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        );
      }

      if (trimmed === 'Visit Course') {
        return null;
      }

      return <p key={`p-${idx}`} style={{ margin: '8px 0', color: '#e3e1e9', lineHeight: 1.7 }}>{trimmed}</p>;
    });
  };

  const renderWebDevContent = () => {
    const lines = WEB_DEVELOPMENT_TUTORIAL_CONTENT.split('\n');
    const WEB_LINK_COLOR = '#00dbe7';
    const sectionAnchors = {
      'Basics': 'basics',
      'Frontend Development': 'frontend-development',
      'Backend Development': 'backend-development',
      'APIs and Data Exchange Formats': 'apis-data-exchange',
      'Version Control and Deployment': 'version-control-deployment',
      'Graphics': 'graphics',
      'Also Check': 'also-check',
    };

    const result = [];
    let i = 0;
    let listBuffer = [];

    const inlineTermLinks = {
      'HTML': 'https://www.geeksforgeeks.org/html/html-tutorial/',
      'CSS': 'https://www.geeksforgeeks.org/css/css-tutorial/',
      'JavaScript': 'https://www.geeksforgeeks.org/javascript/javascript-tutorial/',
      'Node.js': 'https://www.geeksforgeeks.org/node-js/nodejs/',
      'PHP': 'https://www.geeksforgeeks.org/php/php-tutorial/',
      'Python': 'https://www.geeksforgeeks.org/python/python-programming-language-tutorial/',
      'Ruby': 'https://www.geeksforgeeks.org/ruby/ruby-programming-language/',
      'Java': 'https://www.geeksforgeeks.org/java/',
      'Golang': 'https://www.geeksforgeeks.org/go-language/go/',
      'C#': 'https://www.geeksforgeeks.org/c-sharp/csharp-programming-language/',
      'MySQL': 'https://www.geeksforgeeks.org/mysql/mysql-tutorial/',
      'PostgreSQL': 'https://www.geeksforgeeks.org/postgresql/postgresql-tutorial/',
      'MongoDB': 'https://www.geeksforgeeks.org/mongodb/mongodb-tutorial/',
      'Cassandra': 'https://www.geeksforgeeks.org/dbms/apache-cassandra-nosql-database/',
      'Redis': 'https://www.geeksforgeeks.org/system-design/introduction-to-redis-server/',
      'JSON': 'https://www.geeksforgeeks.org/javascript/json/',
      'XML': 'https://www.geeksforgeeks.org/xml/xml-tutorials/',
      'Canvas': 'https://www.geeksforgeeks.org/html/html-canvas-basics/',
      'SVG': 'https://www.geeksforgeeks.org/html/html-svg-basics/',
      'server-side scripting': 'https://www.geeksforgeeks.org/html/difference-between-server-side-scripting-and-client-side-scripting/',
    };
    const escapedTerms = Object.keys(inlineTermLinks)
      .sort((a, b) => b.length - a.length)
      .map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const inlineTermRegex = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'g');

    const renderLinkedTerms = (chunk, keyPrefix) => {
      if (!chunk) return [];
      return [chunk];
    };

    const localDocLinkMap = {
      'https://www.geeksforgeeks.org/html/html-tutorial': 'html-tutorial-page',
      'https://www.geeksforgeeks.org/html/html-introduction': 'html-introduction-page',
      'https://www.geeksforgeeks.org/html/what-is-html': 'html-features-page',
      'https://www.geeksforgeeks.org/html/html-editors': 'html-editors-page',
      'https://www.geeksforgeeks.org/html/html-comments': 'html-comments-page',
      'https://www.geeksforgeeks.org/html/html-course-structure-of-an-html-document': 'html-structure-page',
      'https://www.geeksforgeeks.org/html/html-elements': 'html-elements-page',
      'https://www.geeksforgeeks.org/html/html-attributes': 'html-attributes-page',
      'https://www.geeksforgeeks.org/html/html5-semantic-tags': 'html-semantics-page',
      'https://www.geeksforgeeks.org/html/html-entities': 'html-entities-page',
      'https://www.geeksforgeeks.org/html/html-symbols': 'html-symbols-page',
      'https://www.geeksforgeeks.org/html/how-to-create-a-portfolio-website-using-html': 'html-simple-portfolio-page',
      'https://www.geeksforgeeks.org/html/simple-portfolio-website-design-using-html': 'html-simple-portfolio-page',
      'https://www.geeksforgeeks.org/html/design-an-event-web-page-using-html-css': 'html-event-webpage-page',
      'https://www.geeksforgeeks.org/css/design-an-event-webpage-using-html-css': 'html-event-webpage-page',
      'https://www.geeksforgeeks.org/html/html-projects': 'html-beginner-projects-page',
      'https://www.geeksforgeeks.org/html-projects': 'html-project-ideas-page',
      'https://www.geeksforgeeks.org/html/html-project-ideas-for-beginners': 'html-project-ideas-page',
      'https://www.geeksforgeeks.org/html/most-commonly-used-tags-in-html': 'html-common-tags-page',
      'https://www.geeksforgeeks.org/html/basic-html-tags': 'html-common-tags-page',
      'https://www.geeksforgeeks.org/html/html-tables': 'html-tables-page',
      'https://www.geeksforgeeks.org/html/html-tr-tag': 'html-tr-tag-page',
      'https://www.geeksforgeeks.org/html/html-th-tag': 'html-th-tag-page',
      'https://www.geeksforgeeks.org/html/html-td-tag': 'html-td-tag-page',
      'https://www.geeksforgeeks.org/html/html-caption-tag': 'html-caption-tag-page',
      'https://www.geeksforgeeks.org/html/html-colgroup-tag': 'html-group-columns-page',
      'https://www.geeksforgeeks.org/html/html-col-tag': 'html-group-columns-page',
      'https://www.geeksforgeeks.org/html/html-lists': 'html-lists-page',
      'https://www.geeksforgeeks.org/html/html-ol-tag': 'html-ordered-lists-page',
      'https://www.geeksforgeeks.org/html/html-ordered-lists': 'html-ordered-lists-page',
      'https://www.geeksforgeeks.org/html/html-ul-tag': 'html-unordered-lists-page',
      'https://www.geeksforgeeks.org/html/html-unordered-lists': 'html-unordered-lists-page',
      'https://www.geeksforgeeks.org/html/html-description-list': 'html-description-lists-page',
      'https://www.geeksforgeeks.org/html/html-description-lists': 'html-description-lists-page',
      'https://www.geeksforgeeks.org/html/html-i-tag': 'html-i-tag-page',
      'https://www.geeksforgeeks.org/html/html-small-tag': 'html-small-tag-page',
      'https://www.geeksforgeeks.org/html/html-ins-tag': 'html-ins-tag-page',
      'https://www.geeksforgeeks.org/html/html-sub-tag': 'html-sub-tag-page',
      'https://www.geeksforgeeks.org/css/html-sub-tag': 'html-sub-tag-page',
      'https://www.geeksforgeeks.org/html/html-strong-tag': 'html-strong-tag-page',
      'https://www.geeksforgeeks.org/html/html-b-tag': 'html-b-tag-page',
      'https://www.geeksforgeeks.org/css/top-10-projects-for-beginners-to-practice-html-and-css-skills': 'html-beginner-projects-page',
      'https://www.geeksforgeeks.org/css/css-tutorial': 'css-tutorial-page',
      'https://www.geeksforgeeks.org/javascript/javascript-tutorial': 'javascript-tutorial-page',
      'https://www.geeksforgeeks.org/html/what-is-http': 'http-protocol-page',
    };
    const normalizeUrl = value => value.replace(/\/+$/, '');

    const renderWebInline = (text, keyPrefix) => {
      const tokenRegex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+)/g;
      const nodes = [];
      let lastIndex = 0;
      let match;
      let tokenIndex = 0;

      while ((match = tokenRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          nodes.push(...renderLinkedTerms(text.slice(lastIndex, match.index), `${keyPrefix}-plain-${tokenIndex}`));
        }

        const token = match[0];
        if (token.startsWith('**') && token.endsWith('**')) {
          nodes.push(
            <strong key={`${keyPrefix}-b-${tokenIndex}`} style={{ color: '#e3e1e9', fontWeight: 700 }}>
              {token.slice(2, -2)}
            </strong>
          );
        } else if (token.startsWith('http://') || token.startsWith('https://')) {
          nodes.push(
            <a key={`${keyPrefix}-u-${tokenIndex}`} href={token} target="_blank" rel="noreferrer" style={{ color: WEB_LINK_COLOR, textDecoration: 'underline' }}>
              {token}
            </a>
          );
        } else {
          const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
          if (linkMatch) {
            const [, label, url] = linkMatch;
            const cleanLabel = label.replace(/^\*\*(.+)\*\*$/, '$1');
            const localDocKey = localDocLinkMap[normalizeUrl(url)] || null;
            if (localDocKey) {
              nodes.push(
                <button
                  key={`${keyPrefix}-a-${tokenIndex}`}
                  type="button"
                  onClick={() => {
                    setActiveLocalDoc(localDocKey);
                    if (localDocKey === 'html-tutorial-page' || localDocKey === 'html-introduction-page' || localDocKey === 'html-features-page' || localDocKey === 'html-editors-page' || localDocKey === 'html-comments-page' || localDocKey === 'html-structure-page' || localDocKey === 'html-elements-page' || localDocKey === 'html-attributes-page' || localDocKey === 'html-semantics-page' || localDocKey === 'html-entities-page' || localDocKey === 'html-symbols-page' || localDocKey === 'html-simple-portfolio-page' || localDocKey === 'html-event-webpage-page' || localDocKey === 'html-beginner-projects-page' || localDocKey === 'html-project-ideas-page' || localDocKey === 'html-common-tags-page' || localDocKey === 'html-tags-atoz-page' || localDocKey === 'html-tables-page' || localDocKey === 'html-tr-tag-page' || localDocKey === 'html-th-tag-page' || localDocKey === 'html-td-tag-page' || localDocKey === 'html-caption-tag-page' || localDocKey === 'html-group-columns-page' || localDocKey === 'html-lists-page' || localDocKey === 'html-ordered-lists-page' || localDocKey === 'html-unordered-lists-page' || localDocKey === 'html-description-lists-page' || localDocKey === 'html-i-tag-page' || localDocKey === 'html-small-tag-page' || localDocKey === 'html-ins-tag-page' || localDocKey === 'html-sub-tag-page' || localDocKey === 'html-strong-tag-page' || localDocKey === 'html-b-tag-page' || localDocKey === 'css-tutorial-page' || localDocKey === 'javascript-tutorial-page' || localDocKey === 'http-protocol-page') {
                      setActiveWebSection(null);
                    }
                  }}
                  style={{
                    color: WEB_LINK_COLOR,
                    textDecoration: 'underline',
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    font: 'inherit',
                  }}
                >
                  {cleanLabel}
                </button>
              );
            } else {
              nodes.push(
                <a key={`${keyPrefix}-a-${tokenIndex}`} href={url} target="_blank" rel="noreferrer" style={{ color: WEB_LINK_COLOR, textDecoration: 'underline' }}>
                  {cleanLabel}
                </a>
              );
            }
          } else {
            nodes.push(token);
          }
        }

        lastIndex = tokenRegex.lastIndex;
        tokenIndex++;
      }

      if (lastIndex < text.length) {
        nodes.push(...renderLinkedTerms(text.slice(lastIndex), `${keyPrefix}-tail`));
      }

      return nodes;
    };

    const flushList = () => {
      if (listBuffer.length > 0) {
        result.push(
          <ul key={`ul-${result.length}`} style={{ margin: '14px 0', paddingLeft: 24, listStyle: 'disc' }}>
            {listBuffer.map((item, idx) => (
              <li key={`li-${result.length}-${idx}`} style={{ margin: '8px 0', color: '#b9cacb', lineHeight: 1.7, fontSize: 16 }}>
                {item}
              </li>
            ))}
          </ul>
        );
        listBuffer = [];
      }
    };

    // Diagram layout based on the provided roadmap code.
    const WebFlowDiagram = () => (
      <div className="web-roadmap" style={{ marginBottom: 18, borderRadius: 8, background: '#eef2f7', border: '1px solid #e5e7eb', padding: '12px 0 0', overflowX: 'auto', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <style>{`
          .web-roadmap a {
            text-decoration: none !important;
            display: block;
            text-align: center;
            transition: color 0.2s ease;
          }
          .web-roadmap a:hover {
            text-decoration: none !important;
            opacity: 0.85;
          }
          .web-roadmap .subcard-link {
            color: #0096eb !important;
            text-decoration: none !important;
            font-size: 11px;
            padding: 6px 8px;
            border-radius: 2px;
            transition: all 0.2s ease;
            display: block;
            line-height: 1.45;
            text-align: center;
            border-bottom: 1px solid #e5e7eb;
          }
          .web-roadmap .subcard-link:hover {
            background-color: rgba(0, 150, 235, 0.08) !important;
            color: #0096eb !important;
          }
          .web-roadmap a.subcard-link {
            color: #0096eb !important;
          }
          .web-roadmap .blue-card {
            text-align: center;
          }
          .web-roadmap .blue-card-link {
            color: #ffffff !important;
            text-decoration: none !important;
            display: inline-block;
            width: 100%;
            text-align: center;
          }
          .web-roadmap .backend-sub-link {
            color: #0096eb !important;
            text-decoration: none !important;
            display: block;
            font-size: 11px;
            line-height: 1.35;
            padding: 3px 6px;
            border-bottom: none !important;
          }
          .web-roadmap .backend-sub-link:hover {
            color: #0096eb !important;
            background: rgba(0, 150, 235, 0.08);
          }
        `}</style>
        <div style={{ position: 'relative', width: 700, minHeight: 1050, margin: '0 auto', userSelect: 'none', background: '#eef2f7' }}>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg" strokeLinecap="butt" strokeLinejoin="miter">
            <defs>
              <style>{`
                @keyframes dashFlow {
                  from { stroke-dashoffset: 0; }
                  to { stroke-dashoffset: -22; }
                }
                .dash-flow {
                  animation: dashFlow 1.5s linear infinite;
                }
              `}</style>
              <marker id="web-tech-arrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="8" markerHeight="8" markerUnits="strokeWidth" orient="auto">
                <path d="M -1 1 L 11 6 L -1 11 Z" fill="#0096eb" stroke="#0096eb" strokeWidth="0.5"/>
              </marker>
            </defs>

            {/* Center vertical dashed flow lines - start at bottom of card above, end before card below */}
            <line x1="350" y1="60" x2="350" y2="170" stroke="#0096eb" strokeWidth="2" strokeDasharray="6 4" className="dash-flow" markerEnd="url(#web-tech-arrow)" />
            <line x1="350" y1="220" x2="350" y2="312" stroke="#0096eb" strokeWidth="2" strokeDasharray="6 4" className="dash-flow" markerEnd="url(#web-tech-arrow)" />
            <line x1="350" y1="362" x2="350" y2="454" stroke="#0096eb" strokeWidth="2" strokeDasharray="6 4" className="dash-flow" markerEnd="url(#web-tech-arrow)" />
            <line x1="350" y1="504" x2="350" y2="634" stroke="#0096eb" strokeWidth="2" strokeDasharray="6 4" className="dash-flow" markerEnd="url(#web-tech-arrow)" />
            <line x1="350" y1="684" x2="350" y2="746" stroke="#0096eb" strokeWidth="2" strokeDasharray="6 4" className="dash-flow" markerEnd="url(#web-tech-arrow)" />
            <line x1="350" y1="796" x2="350" y2="892" stroke="#0096eb" strokeWidth="2" strokeDasharray="6 4" className="dash-flow" markerEnd="url(#web-tech-arrow)" />

            {/* Working of Internet → Networks: enter right side of Networks card */}
            <path d="M 250 34 L 182 34 L 182 128 L 165 128" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#web-tech-arrow)" />
            {/* HTML center card → HTML Basics subcard: curve up, then finish with a horizontal edge-contact segment */}
            <path d="M 393 199 L 523 199 L 523 115 L 535 115" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#web-tech-arrow)" />

            {/* CSS center → left CSS subcard (right edge x=165) */}
            <path d="M 308 341 L 165 341" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#web-tech-arrow)" />
            {/* CSS center → right CSS frameworks (left edge x=535) */}
            <path d="M 393 341 L 535 341" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#web-tech-arrow)" />

            {/* VCS center → right VCS Tool (left edge x=535) */}
            <path d="M 430 483 L 535 483" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#web-tech-arrow)" />

            {/* JS center → left JS Concepts (right edge x=165) */}
            <path d="M 295 650 L 165 650" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#web-tech-arrow)" />
            {/* JS center → right JS Frameworks (left edge x=535) */}
            <path d="M 405 650 L 535 650" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#web-tech-arrow)" />

            {/* Mobile Frontend center → left Mobile Frontend subcard: enter right side */}
            <path d="M 270 775 L 165 775" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#web-tech-arrow)" />
            {/* VCS Hosting → right Platform: curve up, then finish with a horizontal edge-contact segment */}
            <path d="M 430 921 L 523 921 L 523 820 L 535 820" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#web-tech-arrow)" />
          </svg>

          <div className="blue-card" style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 200, height: 50, backgroundColor: '#0096eb', color: '#fff', fontWeight: 700, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, boxShadow: '0 4px 12px rgba(0, 150, 235, 0.25)' }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/computer-science-fundamentals/introduction-to-internet/" target="_blank" rel="noreferrer">Working of Internet</a>
          </div>

          <div style={{ position: 'absolute', top: 50, left: 25, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 4, overflow: 'hidden', textAlign: 'center', boxShadow: 'none' }}>
            <div className="blue-card" style={{ backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 12, padding: '6px 0' }}>Networks</div>
            <div style={{ fontSize: 11, color: '#000000', padding: '8px 8px', lineHeight: 1.45, textAlign: 'center' }}>
              <a href="https://www.geeksforgeeks.org/explain-working-of-https/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>HTTP</a>
              <a href="https://www.geeksforgeeks.org/whats-is-domain-name-systemdns/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>DNS</a>
              <a href="https://www.geeksforgeeks.org/what-is-a-web-hosting/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Hosting</a>
              <a href="https://www.geeksforgeeks.org/web-browser/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Browsers</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 50, right: 25, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 4, overflow: 'hidden', textAlign: 'center', boxShadow: 'none' }}>
            <div className="blue-card" style={{ backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 12, padding: '6px 0' }}>HTML Basics</div>
            <div style={{ fontSize: 11, color: '#000000', padding: '8px 8px', lineHeight: 1.45, textAlign: 'center' }}>
              <a href="https://www.geeksforgeeks.org/html/html-introduction/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Introduction</a>
              <a href="https://www.geeksforgeeks.org/html/html-forms/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Forms</a>
              <a href="https://www.geeksforgeeks.org/explain-semantic-elements-in-html5/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Semantic Tags</a>
              <a href="https://www.geeksforgeeks.org/accessibility-in-web-design/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Accessibility</a>
              <a href="https://www.geeksforgeeks.org/computer-science-fundamentals/introduction-to-internet/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Meta Tag</a>
            </div>
          </div>

          <div className="blue-card" style={{ position: 'absolute', top: 178, left: '50%', transform: 'translateX(-50%)', width: 85, height: 42, backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/html/html-tutorial/" target="_blank" rel="noreferrer">HTML</a>
          </div>

          <div className="blue-card" style={{ position: 'absolute', top: 320, left: '50%', transform: 'translateX(-50%)', width: 85, height: 42, backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/css/css-tutorial/" target="_blank" rel="noreferrer">CSS</a>
          </div>

          <div style={{ position: 'absolute', top: 244, left: 25, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 4, overflow: 'hidden', textAlign: 'center', boxShadow: 'none' }}>
            <div className="blue-card" style={{ backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 12, padding: '6px 0' }}>CSS</div>
            <div style={{ fontSize: 11, color: '#000000', padding: '8px 8px', lineHeight: 1.45, textAlign: 'center' }}>
              <a href="https://www.geeksforgeeks.org/css/css-introduction/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Introduction</a>
              <a href="https://www.geeksforgeeks.org/css/css-box-model/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Box Model</a>
              <a href="https://www.geeksforgeeks.org/css/css-layout/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Layouts</a>
              <a href="https://www.geeksforgeeks.org/css/css-display-property/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>CSS Display</a>
              <a href="https://www.geeksforgeeks.org/responsive-web-design/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Responsive Design</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 280, right: 25, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 4, overflow: 'hidden', textAlign: 'center', boxShadow: 'none' }}>
            <div className="blue-card" style={{ backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 12, padding: '6px 0' }}>CSS Frameworks</div>
            <div style={{ fontSize: 11, color: '#000000', padding: '8px 8px', lineHeight: 1.45, textAlign: 'center' }}>
              <a href="https://www.geeksforgeeks.org/bootstrap/bootstrap-tutorial/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Bootstrap</a>
              <a href="https://www.geeksforgeeks.org/tailwind-css/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Tailwind CSS</a>
            </div>
          </div>

          <div className="blue-card" style={{ position: 'absolute', top: 462, left: '50%', transform: 'translateX(-50%)', width: 160, height: 42, backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/git-tutorial/" target="_blank" rel="noreferrer">Version Control System</a>
          </div>

          <div style={{ position: 'absolute', top: 438, right: 25, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 4, overflow: 'hidden', textAlign: 'center', boxShadow: 'none' }}>
            <div className="blue-card" style={{ backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 12, padding: '6px 0' }}>VCS Tool</div>
            <div style={{ fontSize: 11, color: '#000000', padding: '8px 8px', lineHeight: 1.45, textAlign: 'center' }}>
              <a href="https://www.geeksforgeeks.org/git-tutorial/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Git</a>
            </div>
          </div>

          <div className="blue-card" style={{ position: 'absolute', top: 642, left: '50%', transform: 'translateX(-50%)', width: 110, height: 42, backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/javascript/javascript-tutorial/" target="_blank" rel="noreferrer">JavaScript</a>
          </div>

          <div style={{ position: 'absolute', top: 506, left: 25, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 4, overflow: 'hidden', textAlign: 'center', boxShadow: 'none' }}>
            <div className="blue-card" style={{ backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 12, padding: '6px 0' }}>JS Concepts</div>
            <div style={{ fontSize: 11, color: '#000000', padding: '8px 8px', lineHeight: 1.45, textAlign: 'center' }}>
              <a href="https://www.geeksforgeeks.org/javascript/javascript-tutorial/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Introduction</a>
              <a href="https://www.geeksforgeeks.org/javascript/javascript-functions/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Function</a>
              <a href="https://www.geeksforgeeks.org/javascript/arrays-in-javascript/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Array</a>
              <a href="https://www.geeksforgeeks.org/javascript/objects-in-javascript/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Object</a>
              <a href="https://www.geeksforgeeks.org/javascript/events-in-javascript/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Events</a>
              <a href="https://www.geeksforgeeks.org/javascript/html-dom-document-object-model/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>DOM</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 524, right: 25, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 4, overflow: 'hidden', textAlign: 'center', boxShadow: 'none' }}>
            <div className="blue-card" style={{ backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 12, padding: '6px 0' }}>JS Frameworks/<br />Libraries</div>
            <div style={{ fontSize: 11, color: '#000000', padding: '8px 8px', lineHeight: 1.45, textAlign: 'center' }}>
              <a href="https://www.geeksforgeeks.org/reactjs/react/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>React</a>
              <a href="https://www.geeksforgeeks.org/nextjs/nextjs-tutorial/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Next</a>
              <a href="https://www.geeksforgeeks.org/angular-js/angular-tutorial/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Angular</a>
              <a href="https://www.geeksforgeeks.org/javascript/vue-js/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Vue</a>
              <a href="https://www.geeksforgeeks.org/jquery/jquery-tutorial/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>jQuery</a>
            </div>
          </div>

          <div className="blue-card" style={{ position: 'absolute', top: 754, left: '50%', transform: 'translateX(-50%)', width: 160, height: 42, backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/react-native/react-native/" target="_blank" rel="noreferrer">Mobile Frontend Framework</a>
          </div>

          <div style={{ position: 'absolute', top: 750, left: 25, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 4, overflow: 'hidden', textAlign: 'center', boxShadow: 'none' }}>
            <div className="blue-card" style={{ backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 12, padding: '6px 0' }}>Mobile Frontend Framework</div>
            <div style={{ fontSize: 11, color: '#000000', padding: '8px 8px', lineHeight: 1.45, textAlign: 'center' }}>
              <a href="https://www.geeksforgeeks.org/react-native/react-native/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>React Native</a>
              <a href="https://www.geeksforgeeks.org/flutter/flutter-tutorial/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Flutter</a>
              <a href="https://www.geeksforgeeks.org/ionic/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>Ionic</a>
            </div>
          </div>

          <div className="blue-card" style={{ position: 'absolute', top: 900, left: '50%', transform: 'translateX(-50%)', width: 160, height: 42, backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/introduction-to-github/" target="_blank" rel="noreferrer">VCS Hosting</a>
          </div>

          <div style={{ position: 'absolute', top: 776, right: 25, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 4, overflow: 'hidden', textAlign: 'center', boxShadow: 'none' }}>
            <div className="blue-card" style={{ backgroundColor: '#0096eb', color: '#fff', fontWeight: 600, fontSize: 12, padding: '6px 0' }}>Platform</div>
            <div style={{ fontSize: 11, color: '#000000', padding: '8px 8px', lineHeight: 1.45, textAlign: 'center' }}>
              <a href="https://www.geeksforgeeks.org/introduction-to-github/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>GitHub</a>
              <a href="https://www.geeksforgeeks.org/gitlab-tutorial/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>GitLab</a>
              <a href="https://www.geeksforgeeks.org/what-is-bitbucket/" target="_blank" rel="noreferrer" className="subcard-link" style={{ color: '#000000', display: 'block' }}>BitBucket</a>
            </div>
          </div>
        </div>
      </div>
    );

    const BackendFlowDiagram = () => (
      <div className="web-roadmap" style={{ margin: '8px 0 18px', borderRadius: 8, background: '#eef2f7', border: '1px solid #e5e7eb', padding: '12px 0 0', overflowX: 'auto', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ position: 'relative', width: 850, minHeight: 1700, margin: '0 auto', userSelect: 'none', background: '#eef2f7' }}>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg" strokeLinecap="butt" strokeLinejoin="miter">
            <defs>
              <style>{`
                @keyframes backendDashFlow {
                  from { stroke-dashoffset: 0; }
                  to { stroke-dashoffset: -22; }
                }
                .backend-dash-flow {
                  animation: backendDashFlow 1.5s linear infinite;
                }
              `}</style>
              <marker id="backend-roadmap-arrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="8" markerHeight="8" markerUnits="strokeWidth" orient="auto">
                <path d="M -1 1 L 11 6 L -1 11 Z" fill="#0096eb" stroke="#0096eb" strokeWidth="0.5" />
              </marker>
            </defs>

            <line x1="425" y1="56" x2="425" y2="114" stroke="#0096eb" strokeWidth="2" strokeDasharray="6 4" className="backend-dash-flow" markerEnd="url(#backend-roadmap-arrow)" />
            <line x1="425" y1="438" x2="425" y2="480" stroke="#0096eb" strokeWidth="2" strokeDasharray="6 4" className="backend-dash-flow" markerEnd="url(#backend-roadmap-arrow)" />
            <line x1="425" y1="524" x2="425" y2="760" stroke="#0096eb" strokeWidth="2" strokeDasharray="6 4" className="backend-dash-flow" markerEnd="url(#backend-roadmap-arrow)" />
            <line x1="425" y1="804" x2="425" y2="930" stroke="#0096eb" strokeWidth="2" strokeDasharray="6 4" className="backend-dash-flow" markerEnd="url(#backend-roadmap-arrow)" />
            <line x1="425" y1="974" x2="425" y2="1130" stroke="#0096eb" strokeWidth="2" strokeDasharray="6 4" className="backend-dash-flow" markerEnd="url(#backend-roadmap-arrow)" />
            <line x1="425" y1="1174" x2="425" y2="1430" stroke="#0096eb" strokeWidth="2" strokeDasharray="6 4" className="backend-dash-flow" markerEnd="url(#backend-roadmap-arrow)" />

            <path d="M 335 136 L 215 136" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#backend-roadmap-arrow)" />
            <path d="M 515 136 L 635 136" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#backend-roadmap-arrow)" />

            <path d="M 635 220 L 525 220 L 525 248 L 495 248" fill="none" stroke="#0096eb" strokeWidth="2" strokeDasharray="4 4" className="backend-dash-flow" markerEnd="url(#backend-roadmap-arrow)" />
            <path d="M 355 260 L 215 260" fill="none" stroke="#0096eb" strokeWidth="2" strokeDasharray="4 4" className="backend-dash-flow" markerEnd="url(#backend-roadmap-arrow)" />
            <path d="M 215 325 L 335 325 L 335 416" fill="none" stroke="#0096eb" strokeWidth="2" strokeDasharray="4 4" className="backend-dash-flow" markerEnd="url(#backend-roadmap-arrow)" />

            <path d="M 515 416 L 605 416 L 605 344 L 635 344" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#backend-roadmap-arrow)" />
            <path d="M 515 416 L 605 416 L 605 496 L 635 496" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#backend-roadmap-arrow)" />

            <path d="M 335 502 L 215 502 L 215 470" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#backend-roadmap-arrow)" />

            <path d="M 370 782 L 245 782 L 245 720 L 215 720" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#backend-roadmap-arrow)" />
            <path d="M 370 782 L 245 782 L 245 890 L 215 890" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#backend-roadmap-arrow)" />

            <path d="M 490 952 L 605 952 L 605 860 L 635 860" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#backend-roadmap-arrow)" />
            <path d="M 490 952 L 605 952 L 605 1040 L 635 1040" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#backend-roadmap-arrow)" />

            <path d="M 360 1452 L 215 1452" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#backend-roadmap-arrow)" />
            <path d="M 490 1452 L 635 1452" fill="none" stroke="#0096eb" strokeWidth="2" markerEnd="url(#backend-roadmap-arrow)" />
          </svg>

          <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 180, height: 46, backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 12, border: '1.5px solid #0077b8', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)' }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/backend-development/" target="_blank" rel="noreferrer">Backend Development</a>
          </div>

          <div style={{ position: 'absolute', top: 114, left: '50%', transform: 'translateX(-50%)', width: 180, height: 44, backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 12, border: '1.5px solid #0077b8', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)' }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/computer-network-tutorials/" target="_blank" rel="noreferrer">Internet Protocol</a>
          </div>

          <div style={{ position: 'absolute', top: 40, left: 75, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)', zIndex: 9 }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>Network</div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/http-full-form/" target="_blank" rel="noreferrer" className="backend-sub-link">HTTP</a>
              <a href="https://www.geeksforgeeks.org/https-full-form/" target="_blank" rel="noreferrer" className="backend-sub-link">HTTPS</a>
              <a href="https://www.geeksforgeeks.org/rest-api-introduction/" target="_blank" rel="noreferrer" className="backend-sub-link">REST</a>
              <a href="https://www.geeksforgeeks.org/websocket-in-computer-network/" target="_blank" rel="noreferrer" className="backend-sub-link">Web Socket</a>
              <a href="https://www.geeksforgeeks.org/simple-mail-transfer-protocol-smtp/" target="_blank" rel="noreferrer" className="backend-sub-link">SMTP</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 70, right: 75, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>Project Manager</div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/node-js/npm-node-package-manager/" target="_blank" rel="noreferrer" className="backend-sub-link">npm</a>
              <a href="https://www.geeksforgeeks.org/yaml-introduction/" target="_blank" rel="noreferrer" className="backend-sub-link">yaml</a>
              <a href="https://www.geeksforgeeks.org/pnpm-vs-npm/" target="_blank" rel="noreferrer" className="backend-sub-link">pnpm</a>
              <a href="https://www.geeksforgeeks.org/git-tutorial/" target="_blank" rel="noreferrer" className="backend-sub-link">Git</a>
              <a href="https://www.geeksforgeeks.org/introduction-to-github/" target="_blank" rel="noreferrer" className="backend-sub-link">Github</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 204, left: '50%', transform: 'translateX(-50%)', width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', zIndex: 10, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>
              <a className="blue-card-link" href="https://www.geeksforgeeks.org/best-programming-language-to-learn-for-backend-development/" target="_blank" rel="noreferrer">Learn a Language</a>
            </div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/javascript/javascript-tutorial/" target="_blank" rel="noreferrer" className="backend-sub-link">JavaScript</a>
              <a href="https://www.geeksforgeeks.org/python/python-programming-language-tutorial/" target="_blank" rel="noreferrer" className="backend-sub-link">Python</a>
              <a href="https://www.geeksforgeeks.org/java/" target="_blank" rel="noreferrer" className="backend-sub-link">Java</a>
              <a href="https://www.geeksforgeeks.org/c-sharp-tutorial/" target="_blank" rel="noreferrer" className="backend-sub-link">C#</a>
              <a href="https://www.geeksforgeeks.org/php-tutorial/" target="_blank" rel="noreferrer" className="backend-sub-link">PHP</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 204, left: 75, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)', zIndex: 6 }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>Backend Frameworks</div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/node-js/" target="_blank" rel="noreferrer" className="backend-sub-link">Node JS</a>
              <a href="https://www.geeksforgeeks.org/spring-boot/" target="_blank" rel="noreferrer" className="backend-sub-link">Spring Boot</a>
              <a href="https://www.geeksforgeeks.org/django-tutorial/" target="_blank" rel="noreferrer" className="backend-sub-link">Django</a>
              <a href="https://www.geeksforgeeks.org/laravel-tutorial/" target="_blank" rel="noreferrer" className="backend-sub-link">Laravel</a>
              <a href="https://www.geeksforgeeks.org/express-js/" target="_blank" rel="noreferrer" className="backend-sub-link">Express</a>
              <a href="https://www.geeksforgeeks.org/ruby-on-rails-introduction/" target="_blank" rel="noreferrer" className="backend-sub-link">Ruby on Rails</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 394, left: '50%', transform: 'translateX(-50%)', width: 180, height: 44, backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 12, border: '1.5px solid #0077b8', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)', zIndex: 4 }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/dbms/" target="_blank" rel="noreferrer">Database</a>
          </div>

          <div style={{ position: 'absolute', top: 260, right: 75, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)', zIndex: 9 }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>Relational Database</div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/mysql/" target="_blank" rel="noreferrer" className="backend-sub-link">MySQL</a>
              <a href="https://www.geeksforgeeks.org/postgresql/" target="_blank" rel="noreferrer" className="backend-sub-link">PostgreSQL</a>
              <a href="https://www.geeksforgeeks.org/sql-server/" target="_blank" rel="noreferrer" className="backend-sub-link">Microsoft SQL Server</a>
              <a href="https://www.geeksforgeeks.org/oracle-database/" target="_blank" rel="noreferrer" className="backend-sub-link">Oracle Database</a>
              <a href="https://www.geeksforgeeks.org/sqlite-tutorial/" target="_blank" rel="noreferrer" className="backend-sub-link">SQL Lite</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 430, right: 75, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)', zIndex: 6 }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>Non-Relational DB</div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/mongodb/" target="_blank" rel="noreferrer" className="backend-sub-link">Mongo DB</a>
              <a href="https://www.geeksforgeeks.org/apache-cassandra/" target="_blank" rel="noreferrer" className="backend-sub-link">Apache Cassandra</a>
              <a href="https://www.geeksforgeeks.org/redis-tutorial/" target="_blank" rel="noreferrer" className="backend-sub-link">Redis</a>
              <a href="https://www.geeksforgeeks.org/amazon-dynamodb/" target="_blank" rel="noreferrer" className="backend-sub-link">Amazon DynamoDB</a>
              <a href="https://www.geeksforgeeks.org/couchdb-introduction/" target="_blank" rel="noreferrer" className="backend-sub-link">Couch DB</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 480, left: '50%', transform: 'translateX(-50%)', width: 180, height: 44, backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 12, border: '1.5px solid #0077b8', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)' }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/rest-api-introduction/" target="_blank" rel="noreferrer">API Development</a>
          </div>

          <div style={{ position: 'absolute', top: 470, left: 75, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)', zIndex: 9 }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>API Protocol</div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/rest-api-introduction/" target="_blank" rel="noreferrer" className="backend-sub-link">REST</a>
              <a href="https://www.geeksforgeeks.org/soap-simple-object-access-protocol/" target="_blank" rel="noreferrer" className="backend-sub-link">SOAP</a>
              <a href="https://www.geeksforgeeks.org/graphql-introduction/" target="_blank" rel="noreferrer" className="backend-sub-link">GraphQL</a>
              <a href="https://www.geeksforgeeks.org/json-rpc-protocol/" target="_blank" rel="noreferrer" className="backend-sub-link">JSON-RPC</a>
              <a href="https://www.geeksforgeeks.org/websocket-in-computer-network/" target="_blank" rel="noreferrer" className="backend-sub-link">Websockets</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 760, left: '50%', transform: 'translateX(-50%)', width: 110, height: 44, backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 12, border: '1.5px solid #0077b8', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)' }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/web-security-considerations/" target="_blank" rel="noreferrer">Security</a>
          </div>

          <div style={{ position: 'absolute', top: 640, left: 75, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)', zIndex: 6 }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>API Security</div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/https-full-form/" target="_blank" rel="noreferrer" className="backend-sub-link">HTTPS</a>
              <a href="https://www.geeksforgeeks.org/cross-origin-resource-sharing-cors/" target="_blank" rel="noreferrer" className="backend-sub-link">CORS</a>
              <a href="https://www.geeksforgeeks.org/ssl-full-form/" target="_blank" rel="noreferrer" className="backend-sub-link">SSL/TLS</a>
              <a href="https://www.geeksforgeeks.org/content-security-policy-csp/" target="_blank" rel="noreferrer" className="backend-sub-link">CSP</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 830, left: 75, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)', zIndex: 6 }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>Authentication</div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/json-web-token-jwt/" target="_blank" rel="noreferrer" className="backend-sub-link">JWT</a>
              <a href="https://www.geeksforgeeks.org/oauth-2-0/" target="_blank" rel="noreferrer" className="backend-sub-link">OAUTH</a>
              <a href="https://www.geeksforgeeks.org/token-based-authentication-in-web-api/" target="_blank" rel="noreferrer" className="backend-sub-link">Token Auth</a>
              <a href="https://www.geeksforgeeks.org/security-assertion-markup-language-saml/" target="_blank" rel="noreferrer" className="backend-sub-link">SAML</a>
              <a href="https://www.geeksforgeeks.org/openid-connect/" target="_blank" rel="noreferrer" className="backend-sub-link">OPEN ID</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 930, left: '50%', transform: 'translateX(-50%)', width: 130, height: 44, backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 12, border: '1.5px solid #0077b8', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)' }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/performance-testing/" target="_blank" rel="noreferrer">Performance</a>
          </div>

          <div style={{ position: 'absolute', top: 800, right: 75, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)', zIndex: 6 }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>Optimize Database</div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/caching-in-system-design/" target="_blank" rel="noreferrer" className="backend-sub-link">Caching</a>
              <a href="https://www.geeksforgeeks.org/dbms-indexing-in-dbms/" target="_blank" rel="noreferrer" className="backend-sub-link">Indexes</a>
              <a href="https://www.geeksforgeeks.org/batch-processing-system-design/" target="_blank" rel="noreferrer" className="backend-sub-link">Batch Operation</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 980, right: 75, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)', zIndex: 6 }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>Code efficiency</div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/lazy-loading-design-pattern/" target="_blank" rel="noreferrer" className="backend-sub-link">Lazy Loading</a>
              <a href="https://www.geeksforgeeks.org/load-balancing-algorithms/" target="_blank" rel="noreferrer" className="backend-sub-link">Load Balancer</a>
              <a href="https://www.geeksforgeeks.org/asynchronous-programming-in-javascript/" target="_blank" rel="noreferrer" className="backend-sub-link">Asynchronous I/O</a>
              <a href="https://www.geeksforgeeks.org/microservices/" target="_blank" rel="noreferrer" className="backend-sub-link">Microservices</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 1130, left: '50%', transform: 'translateX(-50%)', width: 160, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)', zIndex: 6 }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>
              <a className="blue-card-link" href="https://www.geeksforgeeks.org/software-testing/" target="_blank" rel="noreferrer">Testing</a>
            </div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/integration-testing-software-testing/" target="_blank" rel="noreferrer" className="backend-sub-link">Integration testing</a>
              <a href="https://www.geeksforgeeks.org/unit-testing-software-testing/" target="_blank" rel="noreferrer" className="backend-sub-link">Unit Testing</a>
              <a href="https://www.geeksforgeeks.org/functional-testing/" target="_blank" rel="noreferrer" className="backend-sub-link">Functional testing</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 1430, left: '50%', transform: 'translateX(-50%)', width: 130, height: 44, backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 12, border: '1.5px solid #0077b8', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)' }}>
            <a className="blue-card-link" href="https://www.geeksforgeeks.org/software-engineering-deployment-models/" target="_blank" rel="noreferrer">Deployment</a>
          </div>

          <div style={{ position: 'absolute', top: 1370, left: 75, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)', zIndex: 6 }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>Technologies</div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/containerization-in-devops/" target="_blank" rel="noreferrer" className="backend-sub-link">Containerization</a>
              <a href="https://www.geeksforgeeks.org/virtualization-in-cloud-computing-and-types/" target="_blank" rel="noreferrer" className="backend-sub-link">Virtualization</a>
              <a href="https://www.geeksforgeeks.org/serverless-computing/" target="_blank" rel="noreferrer" className="backend-sub-link">Serverless Computing</a>
              <a href="https://www.geeksforgeeks.org/continuous-integration-ci-in-software-engineering/" target="_blank" rel="noreferrer" className="backend-sub-link">CI/CD</a>
            </div>
          </div>

          <div style={{ position: 'absolute', top: 1400, right: 75, width: 140, backgroundColor: '#f8fafc', border: '2px solid #0096eb', borderRadius: 8, overflow: 'hidden', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)', zIndex: 6 }}>
            <div style={{ backgroundColor: '#0096eb', color: '#ffffff', fontWeight: 600, fontSize: 12, padding: '8px 0', letterSpacing: 0.3 }}>Testing</div>
            <div style={{ fontSize: 12, color: '#4a5568', padding: '10px 0', lineHeight: 1.8, backgroundColor: '#f8fafc' }}>
              <a href="https://www.geeksforgeeks.org/amazon-web-servicesaws-tutorial/" target="_blank" rel="noreferrer" className="backend-sub-link">AWS</a>
              <a href="https://www.geeksforgeeks.org/google-cloud-platform-an-overview/" target="_blank" rel="noreferrer" className="backend-sub-link">GCP</a>
              <a href="https://www.geeksforgeeks.org/microsoft-azure-introduction/" target="_blank" rel="noreferrer" className="backend-sub-link">Microsoft Azure</a>
              <a href="https://www.geeksforgeeks.org/digitalocean-introduction/" target="_blank" rel="noreferrer" className="backend-sub-link">Digital Ocean</a>
              <a href="https://www.geeksforgeeks.org/firebase-introduction/" target="_blank" rel="noreferrer" className="backend-sub-link">Firebase</a>
              <a href="https://www.geeksforgeeks.org/ibm-cloud-introduction/" target="_blank" rel="noreferrer" className="backend-sub-link">IBM Cloud</a>
            </div>
          </div>
        </div>
      </div>
    );

    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();

      if (!trimmed) {
        flushList();
        result.push(<div key={`sp-${i}`} style={{ height: 10 }} />);
        i++;
        continue;
      }

      if (trimmed === 'Web Development Technologies') {
        flushList();
        result.push(
          <h1 key={`h1-${i}`} style={{ margin: '0 0 10px', fontFamily: 'Space Grotesk', fontSize: 34, lineHeight: 1.2, color: '#e3e1e9', fontWeight: 700 }}>
            {trimmed}
          </h1>
        );
        i++;
        continue;
      }

      if (/^Last Updated\s*:/.test(trimmed)) {
        flushList();
        result.push(
          <p key={`u-${i}`} style={{ margin: '0 0 14px', fontSize: 14, color: '#b9cacb', fontFamily: 'JetBrains Mono' }}>
            {trimmed}
          </p>
        );
        i++;
        continue;
      }

      if (trimmed.match(/^#+\s/)) {
        flushList();
        const level = trimmed.match(/^#+/)[0].length;
        const text = trimmed.replace(/^#+\s/, '');
        const sectionId = sectionAnchors[text] || text.toLowerCase().replace(/\s+/g, '-');

        if (level === 3 && text === 'Explore') {
          const exploreSections = [];
          let currentSection = null;
          let j = i + 1;

          while (j < lines.length) {
            const exploreLine = lines[j].trim();
            if (!exploreLine) {
              j++;
              continue;
            }

            const subheadingMatch = exploreLine.match(/^####\s+(.+)$/);
            if (subheadingMatch) {
              currentSection = { title: subheadingMatch[1], items: [] };
              exploreSections.push(currentSection);
              j++;
              continue;
            }

            if (exploreLine.startsWith('• ') || exploreLine.startsWith('- ') || exploreLine.startsWith('* ')) {
              const exploreText = exploreLine.replace(/^[•\-*]\s/, '');
              const labelUrl = exploreText.match(/^([^:]+):\s*(https?:\/\/\S+)$/);
              if (labelUrl && currentSection) {
                currentSection.items.push({ label: labelUrl[1], url: labelUrl[2] });
              }
            }

            j++;
          }

          result.push(
            <div key={`explore-wrap-${i}`} style={{ marginTop: 24, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.35)' }}>
              <h3 style={{ margin: '0 0 10px', fontFamily: 'Space Grotesk', fontSize: 21, fontWeight: 700, color: '#e3e1e9' }}>
                {text}
              </h3>

              <div data-dropdown-scope>
                {exploreSections.map((section, idx) => (
                  <details
                    key={`explore-section-${idx}`}
                    className="gfg-dropdown"
                    onToggle={handleAccordionToggle}
                    style={{ marginTop: idx === 0 ? 0 : 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}
                  >
                    <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                      <span>{section.title}</span>
                      <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                    </summary>

                    {section.items.length > 0 ? (
                      <ul style={{ margin: '10px 0 0', paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {section.items.map((item, itemIdx) => (
                          <li key={`explore-item-${idx}-${itemIdx}`} style={{ margin: '6px 0' }}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p style={{ margin: '10px 0 0', color: '#849495', fontSize: 14 }}>No items yet.</p>
                    )}
                  </details>
                ))}
              </div>
            </div>
          );

          i = lines.length;
          continue;
        }
        
        if (level === 2) {
          result.push(
            <div key={`h2-wrap-${i}`} className="web-section-wrap" data-web-section-level="2" style={{ marginTop: 24, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.35)' }}>
              <h2
                id={sectionId}
                style={{
                  margin: '0 0 14px',
                  fontFamily: 'Space Grotesk',
                  fontSize: 25,
                  fontWeight: 700,
                  color: '#e3e1e9',
                  lineHeight: 1.25,
                }}
              >
                {text}
              </h2>
            </div>
          );
        } else if (level === 3) {
          result.push(
            <h3 key={`h3-${i}`} id={sectionId} data-web-section-level="3" style={{ margin: '16px 0 10px', fontFamily: 'Space Grotesk', fontSize: 21, fontWeight: 700, color: '#e3e1e9' }}>
              {text}
            </h3>
          );
        } else if (level === 4) {
          result.push(
            <h4 key={`h4-${i}`} id={sectionId} data-web-section-level="4" style={{ margin: '14px 0 8px', fontFamily: 'Space Grotesk', fontSize: 17, fontWeight: 600, color: '#b9cacb' }}>
              {text}
            </h4>
          );
        }
        i++;
        continue;
      }

      if (sectionAnchors[trimmed]) {
        flushList();
        const sectionId = sectionAnchors[trimmed];
        result.push(
          <div key={`h2-wrap-plain-${i}`} className="web-section-wrap" data-web-section-level="2" style={{ marginTop: 24, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.35)' }}>
            <h2
              id={sectionId}
              style={{
                margin: '0 0 14px',
                fontFamily: 'Space Grotesk',
                fontSize: 25,
                fontWeight: 700,
                color: '#e3e1e9',
                lineHeight: 1.25,
              }}
            >
              {trimmed}
            </h2>
          </div>
        );
        i++;
        continue;
      }

      if (trimmed.startsWith('• ') || trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const text = trimmed.replace(/^[•\-*]\s/, '');
        const isLink = text.match(/\[([^\]]+)\]\(([^)]+)\)/);
        const labelUrl = text.match(/^([^:]+):\s*(https?:\/\/\S+)$/);
        const definitionItem = text.match(/^([^:]{2,80}):\s+(.+)$/);
        
        if (isLink) {
          listBuffer.push(<span key={`link-${i}`}>{renderWebInline(text, `link-${i}`)}</span>);
        } else if (labelUrl) {
          const [, label, url] = labelUrl;
          listBuffer.push(
            <a href={url} key={`link-label-${i}`} target="_blank" rel="noreferrer" style={{ color: WEB_LINK_COLOR, textDecoration: 'underline' }}>
              <strong style={{ color: WEB_LINK_COLOR, fontWeight: 700 }}>{label}</strong>
            </a>
          );
        } else if (definitionItem) {
          const [, term, description] = definitionItem;
          listBuffer.push(
            <span key={`def-${i}`}>
              <strong style={{ color: '#e3e1e9', fontWeight: 700 }}>{term}:</strong>{' '}
              {renderWebInline(description, `def-${i}`)}
            </span>
          );
        } else {
          listBuffer.push(<span key={`txt-${i}`}>{renderWebInline(text, `txt-${i}`)}</span>);
        }
        
        // Add diagram after JavaScript line in Frontend Development section
        if (text.includes('adds life to web pages by making them interactive')) {
          flushList();
          result.push(<WebFlowDiagram key={`diagram-after-js-${i}`} />);
        }
        
        i++;
        continue;
      }

      const imageUrlRegex = /^https?:\/\/\S+\.(?:png|jpe?g|webp|gif|svg)(?:\?\S*)?$/i;
      if (imageUrlRegex.test(trimmed)) {
        flushList();
        const imageUrls = [];
        let j = i;
        while (j < lines.length) {
          const nextTrimmed = lines[j].trim();
          if (!imageUrlRegex.test(nextTrimmed)) break;
          imageUrls.push(nextTrimmed);
          j++;
        }
        const stripId = `web-img-strip-${i}`;
        const currentStripImageIndex = docImageIndexMap[stripId] ?? 0;

        result.push(
          <div key={`img-strip-wrap-${i}`} style={{ margin: '12px 0 18px' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 10,
                border: '1px solid rgba(58,73,75,0.35)',
                overflow: 'hidden',
                maxWidth: 640,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: `${imageUrls.length * 100}%`,
                  transform: `translateX(-${currentStripImageIndex * (100 / imageUrls.length)}%)`,
                  transition: 'transform 0.25s ease',
                }}
              >
                {imageUrls.map((src, idx) => (
                  <div key={`img-${i}-${idx}`} style={{ width: `${100 / imageUrls.length}%`, flexShrink: 0, background: '#0f1115' }}>
                    <img
                      src={src}
                      alt={`Web technology visual ${idx + 1}`}
                      loading="lazy"
                      style={{ width: '100%', display: 'block' }}
                    />
                  </div>
                ))}
              </div>

              {imageUrls.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setDocImageIndexMap(prev => ({
                        ...prev,
                        [stripId]: ((prev[stripId] ?? 0) - 1 + imageUrls.length) % imageUrls.length,
                      }));
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(6,18,22,0.72)',
                      border: '1px solid rgba(0,219,231,0.45)',
                      color: '#00dbe7',
                      borderRadius: 999,
                      width: 44,
                      height: 44,
                      padding: 0,
                      cursor: 'pointer',
                      position: 'absolute',
                      left: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                    }}
                    aria-label="Previous image"
                    title="Previous image"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setDocImageIndexMap(prev => ({
                        ...prev,
                        [stripId]: ((prev[stripId] ?? 0) + 1) % imageUrls.length,
                      }));
                    }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(6,18,22,0.72)',
                      border: '1px solid rgba(0,219,231,0.45)',
                      color: '#00dbe7',
                      borderRadius: 999,
                      width: 44,
                      height: 44,
                      padding: 0,
                      cursor: 'pointer',
                      position: 'absolute',
                      right: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                    }}
                    aria-label="Next image"
                    title="Next image"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span>
                  </button>
                </>
              ) : null}
            </div>
          </div>
        );

        i = j;
        continue;
      }

      if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
        i++;
        continue;
      }

      flushList();
      if (trimmed.includes('In this module, we will explore the technologies that work behind the scenes on the server to handle data, run the website, and store information.')) {
        result.push(<p key={`p-${i}`} style={{ margin: '10px 0', color: '#b9cacb', lineHeight: 1.7, fontSize: 16 }}>{renderWebInline(trimmed, `p-${i}`)}</p>);
        result.push(<BackendFlowDiagram key={`backend-diagram-${i}`} />);
        i++;
        continue;
      }
      result.push(<p key={`p-${i}`} style={{ margin: '10px 0', color: '#b9cacb', lineHeight: 1.7, fontSize: 16 }}>{renderWebInline(trimmed, `p-${i}`)}</p>);
      i++;
    }

    flushList();
    return result;
  };

  useEffect(() => {
    if (!activeDsaSection || topic?.slug !== 'dsa' || activeLocalDoc !== 'dsa-tutorial') return;
    if (skipNextAutoScrollRef.current) {
      skipNextAutoScrollRef.current = false;
      return;
    }
    const target = document.getElementById(activeDsaSection);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 108;
      window.scrollTo({ top: Math.max(0, offsetTop), behavior: 'smooth' });

      // Clear any previous long-running section highlight.
      highlightedNodesRef.current.forEach(node => node.classList.remove('dsa-note-highlight-block'));
      highlightedNodesRef.current = [];
      if (highlightTimeoutRef.current) {
        window.clearTimeout(highlightTimeoutRef.current);
        highlightTimeoutRef.current = null;
      }

      // If the target is an alias span, highlight the corresponding visible heading.
      const heading = target.matches('h2, h3')
        ? target
        : (target.parentElement?.querySelector('h2, h3') ||
           (target.nextElementSibling && target.nextElementSibling.matches('h2, h3')
             ? target.nextElementSibling
             : null));

      if (heading) {
        heading.classList.remove('dsa-note-highlight');
        // Force reflow so repeated clicks retrigger the animation.
        void heading.offsetWidth;
        heading.classList.add('dsa-note-highlight');
        window.setTimeout(() => {
          heading.classList.remove('dsa-note-highlight');
        }, 1200);

        // Highlight the entire selected section block (heading + related paragraphs) for 8 minutes.
        const contentRoot = document.getElementById('dsa-doc-content');
        const sectionStart = heading.closest('.dsa-section-wrap') || heading;
        const sectionNodes = [];

        if (contentRoot && contentRoot.contains(sectionStart)) {
          let cursor = sectionStart;
          while (cursor && contentRoot.contains(cursor)) {
            if (cursor !== sectionStart && cursor.classList?.contains('dsa-section-wrap')) break;
            sectionNodes.push(cursor);
            cursor = cursor.nextElementSibling;
          }
        }

        sectionNodes.forEach(node => node.classList.add('dsa-note-highlight-block'));
        highlightedNodesRef.current = sectionNodes;
        highlightTimeoutRef.current = window.setTimeout(() => {
          highlightedNodesRef.current.forEach(node => node.classList.remove('dsa-note-highlight-block'));
          highlightedNodesRef.current = [];
          highlightTimeoutRef.current = null;
        }, 15000);
      }
    }
  }, [activeDsaSection, activeLocalDoc, topic?.slug]);

  useEffect(() => {
    if (!activeWebSection || topic?.slug !== 'web-development' || activeLocalDoc !== 'web-tutorial') return;
    const target = document.getElementById(activeWebSection);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 108;
      window.scrollTo({ top: Math.max(0, offsetTop), behavior: 'smooth' });

      webHighlightedNodesRef.current.forEach(node => node.classList.remove('web-note-highlight-block'));
      webHighlightedNodesRef.current = [];
      if (webHighlightTimeoutRef.current) {
        window.clearTimeout(webHighlightTimeoutRef.current);
        webHighlightTimeoutRef.current = null;
      }

      const sectionStart = target.closest('.web-section-wrap') || target;
      const sectionLevel = Number(sectionStart.getAttribute('data-web-section-level') || target.getAttribute('data-web-section-level') || '2');
      const contentRoot = document.getElementById('web-doc-content');
      const sectionNodes = [];

      if (contentRoot && contentRoot.contains(sectionStart)) {
        let cursor = sectionStart;
        while (cursor && contentRoot.contains(cursor)) {
          if (cursor !== sectionStart && cursor.hasAttribute('data-web-section-level')) {
            const nextLevel = Number(cursor.getAttribute('data-web-section-level') || '99');
            if (nextLevel <= sectionLevel) break;
          }
          sectionNodes.push(cursor);
          cursor = cursor.nextElementSibling;
        }
      }

      target.classList.remove('web-note-highlight');
      void target.offsetWidth;
      target.classList.add('web-note-highlight');
      window.setTimeout(() => {
        target.classList.remove('web-note-highlight');
      }, 1200);

      sectionNodes.forEach(node => node.classList.add('web-note-highlight-block'));
      webHighlightedNodesRef.current = sectionNodes;
      webHighlightTimeoutRef.current = window.setTimeout(() => {
        webHighlightedNodesRef.current.forEach(node => node.classList.remove('web-note-highlight-block'));
        webHighlightedNodesRef.current = [];
        webHighlightTimeoutRef.current = null;
      }, 7000);
    }
  }, [activeWebSection, activeLocalDoc, topic?.slug]);

  useEffect(() => () => {
    highlightedNodesRef.current.forEach(node => node.classList.remove('dsa-note-highlight-block'));
    if (highlightTimeoutRef.current) {
      window.clearTimeout(highlightTimeoutRef.current);
    }
    webHighlightedNodesRef.current.forEach(node => node.classList.remove('web-note-highlight-block'));
    if (webHighlightTimeoutRef.current) {
      window.clearTimeout(webHighlightTimeoutRef.current);
    }
  }, []);

  useEffect(() => {
    document.title = topic ? `${topic.name} | Codust.hub` : 'Topic Not Found | Codust.hub';
    return () => {
      document.title = 'Codust.hub — Learn to Code. Build the Future.';
    };
  }, [topic]);

  useEffect(() => {
    storageHydratedRef.current = false;
    setIsDocStateHydrated(false);
    const docStorageKey = `codust-topic-active-doc:${slug}`;
    const sectionStorageKey = `codust-topic-active-section:${slug}`;
    const notesScrollStorageKey = `codust-topic-notes-scroll:${slug}`;
    const uiStorageKey = `codust-topic-ui-state:${slug}`;
    const savedDoc = window.localStorage.getItem(docStorageKey);
    const savedSection = window.localStorage.getItem(sectionStorageKey);
    const savedNotesScroll = window.localStorage.getItem(notesScrollStorageKey);
    const savedUiStateRaw = window.localStorage.getItem(uiStorageKey);
    let savedUiState = null;
    if (savedUiStateRaw) {
      try {
        savedUiState = JSON.parse(savedUiStateRaw);
      } catch {
        savedUiState = null;
      }
    }

    const normalizedSavedDoc = savedDoc === '__legacy-conditional-statements-page'
      ? 'conditional-statements-page'
      : savedDoc;

    setActiveLocalDoc(normalizedSavedDoc || null);
    setActiveDsaSection(slug === 'dsa' ? (savedSection || null) : null);
    setActiveWebSection(slug === 'web-development' ? (savedSection || null) : null);
    setRoadmapExpanded(typeof savedUiState?.roadmapExpanded === 'boolean' ? savedUiState.roadmapExpanded : true);
    setDsaTutorialExpanded(slug === 'dsa' ? false : (typeof savedUiState?.dsaTutorialExpanded === 'boolean' ? savedUiState.dsaTutorialExpanded : false));
    setWebTutorialExpanded(slug === 'web-development' ? false : (typeof savedUiState?.webTutorialExpanded === 'boolean' ? savedUiState.webTutorialExpanded : false));
    setMoreOptionsExpanded(
      savedUiState?.moreOptionsExpanded && typeof savedUiState.moreOptionsExpanded === 'object'
        ? {
            Explore: !!savedUiState.moreOptionsExpanded.Explore,
            Courses: !!savedUiState.moreOptionsExpanded.Courses,
          }
        : { Explore: false, Courses: false }
    );

    // Avoid jumping to a saved section immediately on first open; keep title/top visible.
    skipNextAutoScrollRef.current = true;

    setIframeBlocked(false);
    setIframeLoading(true);

    // Let restore state apply before enabling persistence writes.
    const hydrateTimer = window.setTimeout(() => {
      storageHydratedRef.current = true;
      setIsDocStateHydrated(true);
    }, 0);

    return () => window.clearTimeout(hydrateTimer);
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    if (!storageHydratedRef.current) return;
    const docStorageKey = `codust-topic-active-doc:${slug}`;
    if (activeLocalDoc) {
      window.localStorage.setItem(docStorageKey, activeLocalDoc);
    } else {
      window.localStorage.removeItem(docStorageKey);
    }
  }, [slug, activeLocalDoc]);

  useEffect(() => {
    if (!slug) return;
    if (!storageHydratedRef.current) return;
    const sectionStorageKey = `codust-topic-active-section:${slug}`;
    const activeSection = slug === 'web-development' ? activeWebSection : activeDsaSection;
    if (activeSection) {
      window.localStorage.setItem(sectionStorageKey, activeSection);
    } else {
      window.localStorage.removeItem(sectionStorageKey);
    }
  }, [slug, activeDsaSection, activeWebSection]);

  useEffect(() => {
    if (!slug) return;
    if (!storageHydratedRef.current) return;
    const uiStorageKey = `codust-topic-ui-state:${slug}`;
    const uiState = {
      roadmapExpanded,
      dsaTutorialExpanded,
      moreOptionsExpanded,
    };
    window.localStorage.setItem(uiStorageKey, JSON.stringify(uiState));
  }, [slug, roadmapExpanded, dsaTutorialExpanded, moreOptionsExpanded]);

  useEffect(() => {
    if (!slug || !activeLocalDoc) return;
    if (!contentPanelRef.current) return;

    // Always open docs from the top so the page title stays visible below the navbar.
    const topTimer = window.setTimeout(() => {
      if (contentPanelRef.current) {
        contentPanelRef.current.scrollTop = 0;
      }
    }, 0);
    return () => window.clearTimeout(topTimer);
  }, [slug, activeLocalDoc]);

  const renderProgrammingDocPage = ({ notes, docKey, videoSrc, videoTitle, courseTitle, courseUrl, videoOwner }) => (
    <div key={docKey} className="codust-page-surface dsa-doc-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
      {(() => {
        const imageCount = Array.isArray(notes.images) ? notes.images.length : 0;
        const currentImageIndexRaw = docImageIndexMap[docKey] ?? 0;
        const currentImageIndex = imageCount > 0 ? ((currentImageIndexRaw % imageCount) + imageCount) % imageCount : 0;
        const deriveWatchUrl = (src) => {
          if (!src) return '';
          if (src.includes('youtube.com/embed/')) {
            const id = src.split('youtube.com/embed/')[1]?.split('?')[0];
            return id ? `https://www.youtube.com/watch?v=${id}` : src;
          }
          if (src.includes('youtu.be/')) {
            const id = src.split('youtu.be/')[1]?.split('?')[0];
            return id ? `https://www.youtube.com/watch?v=${id}` : src;
          }
          return src;
        };
        const videoWatchUrl = deriveWatchUrl(videoSrc);
        const youtubeStats = youtubeStatsMap[docKey];
        const ownerName = youtubeStats?.channelTitle || videoOwner?.name || 'Video Creator';
        const ownerUrl = youtubeStats?.channelId
          ? `https://www.youtube.com/channel/${youtubeStats.channelId}`
          : (videoOwner?.url || videoWatchUrl || '#');
        const ownerInitial = ownerName.charAt(0).toUpperCase();
        const ownerHandle = ownerUrl.includes('@') ? ownerUrl.split('@')[1].split('/')[0] : '';
        const ownerAvatarUrl = ownerHandle
          ? `https://unavatar.io/youtube/${ownerHandle}`
          : (youtubeStats?.channelId ? `https://unavatar.io/youtube/${youtubeStats.channelId}` : '');
        const engagement = engagementMap[docKey] || { likes: 0, comments: 0, subscribed: false, liked: false };
        const draftComment = commentDraftMap[docKey] || '';
        const socialNotice = socialNoticeMap[docKey] || '';
        const sanitizeSocialNotice = (message) => {
          const text = `${message || ''}`;
          const lower = text.toLowerCase();
          if (lower.includes('access blocked') || lower.includes('authorization error')) {
            return 'Please sign in to your YouTube account to like this video.';
          }
          return text;
        };
        const showSocialNotice = (message, duration = 3000) => {
          const nextMessage = sanitizeSocialNotice(message);
          setSocialNoticeMap(prev => ({ ...prev, [docKey]: nextMessage }));
          if (duration > 0) {
            window.setTimeout(() => {
              setSocialNoticeMap(prev => {
                if (prev[docKey] !== nextMessage) return prev;
                const next = { ...prev };
                delete next[docKey];
                return next;
              });
            }, duration);
          }
        };
        // Sticky — stays until explicitly replaced
        const showPendingNotice = (message) => showSocialNotice(message, 0);
        const displayTags = Array.isArray(youtubeStats?.tags) && youtubeStats.tags.length > 0
          ? youtubeStats.tags.map(tag => (tag.startsWith('#') ? tag : `#${tag}`))
          : (Array.isArray(videoOwner?.hashtags) ? videoOwner.hashtags : []);
        const youtubeLiked = (youtubeRatingMap[docKey] || 'none') === 'like';
        const youtubeSubscribed = youtubeSubscriptionMap[docKey]?.subscribed ?? engagement.subscribed;
        const effectiveLiked = youtubeWriteEnabled ? youtubeLiked : !!engagement.liked;
        const effectiveSubscribed = youtubeWriteEnabled ? youtubeSubscribed : !!engagement.subscribed;
        const displayedLikeCount = (youtubeStats?.likeCount ?? 0) + (effectiveLiked ? 1 : 0);
        const displayedCommentCount = (youtubeStats?.commentCount ?? 0) + (engagement.comments || 0);
        const displayedSubscriberCount = (youtubeStats?.subscriberCount ?? 0) + (effectiveSubscribed ? 1 : 0);
        const displayedViewCount = (youtubeStats?.viewCount ?? 0) + (!youtubeWriteEnabled ? (engagement.views || 0) : 0);
        const moreTutorialUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${notes.title} tutorial`)}`;
        const videoId = extractYouTubeVideoId(videoSrc);
        const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : videoSrc;
        const isVideoSaved = savedVideos.some(v => v.id === `${docKey}:${videoId}`);
        const toggleSaveVideo = () => {
          const id = `${docKey}:${videoId}`;
          if (isVideoSaved) {
            setSavedVideos(prev => prev.filter(v => v.id !== id));
          } else {
            setSavedVideos(prev => [...prev, {
              id,
              docKey,
              videoId,
              watchUrl,
              title: youtubeStats?.title || videoTitle,
              channelName: ownerName,
              topicTitle: notes.title,
              savedAt: Date.now(),
            }]);
          }
        };

        return (
          <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
        <h2 style={{ margin: 0, fontFamily: 'Space Grotesk', fontSize: 28, color: '#e3e1e9' }}>{notes.title}</h2>
        <button
          type="button"
          onClick={() => {
            setActiveLocalDoc('dsa-tutorial');
            setActiveDsaSection('fundamentals');
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: 'rgba(0,219,231,0.12)',
            border: '1px solid rgba(0,219,231,0.28)',
            color: '#00dbe7',
            borderRadius: 8,
            padding: '8px 10px',
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
          Back to DSA Tutorial
        </button>
      </div>

      <p style={{ margin: '0 0 6px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>
        Last Updated: {notes.lastUpdated}
      </p>

      {notes.intro.map((line, idx) => (
        <p key={`${docKey}-intro-${idx}`} style={{ margin: '0 0 8px', color: '#e3e1e9', lineHeight: 1.7 }}>{renderTextWithBold(line)}</p>
      ))}

      {Array.isArray(notes.introBullets) && notes.introBullets.length > 0 ? (
        <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
          {notes.introBullets.map((line, idx) => (
            <li key={`${docKey}-intro-bullet-${idx}`}>{renderTextWithBold(line)}</li>
          ))}
        </ul>
      ) : null}

      {Array.isArray(notes.images) && notes.images.length > 0 ? (
        <div style={{ margin: '10px 0 14px', maxWidth: notes.imageMaxWidth || 620 }}>
          <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                width: `${notes.images.length * 100}%`,
                transform: `translateX(-${currentImageIndex * (100 / notes.images.length)}%)`,
                transition: 'transform 0.25s ease',
              }}
            >
              {notes.images.map((image, idx) => (
                <div key={`${docKey}-image-${idx}`} style={{ width: `${100 / notes.images.length}%`, flexShrink: 0, background: '#111827' }}>
                  <img
                    src={image.src}
                    alt={image.alt || `Programming visual ${idx + 1}`}
                    loading={shouldPreloadCarouselImage(idx, currentImageIndex, notes.images.length) ? 'eager' : 'lazy'}
                    fetchPriority={idx === currentImageIndex ? 'high' : 'auto'}
                    decoding="async"
                    onLoad={() => markImageLoaded(`${docKey}-image-${idx}`)}
                    style={{
                      width: '100%',
                      display: 'block',
                      opacity: loadedImageMap[`${docKey}-image-${idx}`] ? 1 : 0.12,
                      transition: 'opacity 0.18s ease-out',
                    }}
                  />
                </div>
              ))}
            </div>

            {notes.images.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setDocImageIndexMap(prev => ({
                      ...prev,
                      [docKey]: ((prev[docKey] ?? 0) - 1 + notes.images.length) % notes.images.length,
                    }));
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(6,18,22,0.72)',
                    border: '1px solid rgba(0,219,231,0.45)',
                    color: '#00dbe7',
                    borderRadius: 999,
                    width: 44,
                    height: 44,
                    padding: 0,
                    cursor: 'pointer',
                    flexShrink: 0,
                    position: 'absolute',
                    left: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                  }}
                  aria-label="Previous image"
                  title="Previous image"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setDocImageIndexMap(prev => ({
                      ...prev,
                      [docKey]: ((prev[docKey] ?? 0) + 1) % notes.images.length,
                    }));
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(6,18,22,0.72)',
                    border: '1px solid rgba(0,219,231,0.45)',
                    color: '#00dbe7',
                    borderRadius: 999,
                    width: 44,
                    height: 44,
                    padding: 0,
                    cursor: 'pointer',
                    flexShrink: 0,
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                  }}
                  aria-label="Next image"
                  title="Next image"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span>
                </button>

                <span
                  style={{
                    position: 'absolute',
                    right: 10,
                    bottom: 8,
                    color: '#d7f6fa',
                    background: 'rgba(6,18,22,0.72)',
                    border: '1px solid rgba(125,245,255,0.35)',
                    borderRadius: 999,
                    padding: '2px 8px',
                    fontFamily: 'JetBrains Mono',
                    fontSize: 11,
                  }}
                >
                  {currentImageIndex + 1}/{notes.images.length}
                </span>
              </>
            ) : null}
          </div>
        </div>
      ) : null}

      {!notes.hideToc && Array.isArray(notes.toc) && notes.toc.length > 0 ? (
        <>
          <h3 style={{ margin: '16px 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 20 }}>Table of Content</h3>
          <ul style={{ margin: '0 0 12px 18px', color: '#00dbe7', lineHeight: 1.7 }}>
            {notes.toc.map(item => (
              <li key={`${docKey}-toc-${item}`}>
                <button
                  type="button"
                  onClick={() => {
                    const target = document.getElementById(toAnchorId(item));
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    color: '#00dbe7',
                    cursor: 'pointer',
                    textAlign: 'left',
                    textDecoration: 'underline',
                    font: 'inherit',
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {notes.sections.map(section => (
        <div className="codust-page-section dsa-doc-section" key={`${docKey}-${section.heading}`} style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
          {(() => {
            const runtimeKey = sectionRuntimeKey(docKey, section.heading);

            // ── Custom Function Visualizer widget ──────────────────────────
            if (section.customWidget === 'function-visualizer') {
              const vizKey = runtimeKey;
              const aVal = visualizerInputMap[`${vizKey}:a`] ?? '';
              const bVal = visualizerInputMap[`${vizKey}:b`] ?? '';
              const ran  = !!visualizerRunMap[vizKey];
              const aNum = parseFloat(aVal);
              const bNum = parseFloat(bVal);
              const result = !isNaN(aNum) && !isNaN(bNum) ? aNum + bNum : null;

              return (
                <>
                  <h3
                    id={toAnchorId(section.heading)}
                    style={{ margin: '0 0 12px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22, scrollMarginTop: 120 }}
                  >
                    {section.heading}
                  </h3>

                  {/* White visualizer card */}
                  <div style={{ background: '#ffffff', borderRadius: 10, border: '1px solid #e5e7eb', padding: '18px 20px', color: '#111827' }}>

                    <p style={{ margin: '0 0 10px', fontFamily: 'Space Grotesk', fontSize: 18, fontWeight: 700, color: '#00dbe7' }}>
                      Codust.hub
                    </p>

                    {/* Inputs row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'JetBrains Mono', fontSize: 13, fontWeight: 600, color: '#374151' }}>
                        a =
                        <input
                          type="number"
                          value={aVal}
                          onChange={e => {
                            setVisualizerInputMap(prev => ({ ...prev, [`${vizKey}:a`]: e.target.value }));
                            setVisualizerRunMap(prev => { const n = { ...prev }; delete n[vizKey]; return n; });
                          }}
                          placeholder="e.g. 3"
                          style={{ width: 108, border: '1px solid #d1d5db', borderRadius: 6, padding: '5px 8px', fontFamily: 'JetBrains Mono', fontSize: 13, color: '#111827', outline: 'none' }}
                        />
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'JetBrains Mono', fontSize: 13, fontWeight: 600, color: '#374151' }}>
                        b =
                        <input
                          type="number"
                          value={bVal}
                          onChange={e => {
                            setVisualizerInputMap(prev => ({ ...prev, [`${vizKey}:b`]: e.target.value }));
                            setVisualizerRunMap(prev => { const n = { ...prev }; delete n[vizKey]; return n; });
                          }}
                          placeholder="e.g. 5"
                          style={{ width: 108, border: '1px solid #d1d5db', borderRadius: 6, padding: '5px 8px', fontFamily: 'JetBrains Mono', fontSize: 13, color: '#111827', outline: 'none' }}
                        />
                      </label>
                      <button
                        type="button"
                        onClick={() => setVisualizerRunMap(prev => ({ ...prev, [vizKey]: true }))}
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                          background: '#00dbe7', color: '#00363a',
                          border: 'none', borderRadius: 8,
                          padding: '7px 18px', fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 700, cursor: 'pointer',
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>play_arrow</span>
                        Run
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 1fr) minmax(260px, 1fr)', gap: 14, alignItems: 'start' }}>
                      {/* Pseudocode */}
                      <pre style={{
                        background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8,
                        padding: '12px 14px', fontFamily: 'JetBrains Mono', fontSize: 13,
                        color: '#1f2937', margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.6,
                      }}>
{`Function ADD(a, b)
    result = a + b
    return result
END

CALL ADD(${aVal !== '' ? aVal : 'a'}, ${bVal !== '' ? bVal : 'b'})`}
                      </pre>

                      {/* Call/Data/Output opposite side */}
                      <div>
                        <div style={{ marginBottom: 12 }}>
                          <p style={{ margin: '0 0 6px', fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 700, color: '#374151' }}>Call Stack</p>
                          <div style={{ background: '#f3f4f6', borderRadius: 8, border: '1px solid #e5e7eb', padding: '10px 14px', fontFamily: 'JetBrains Mono', fontSize: 13, color: ran ? '#111827' : '#9ca3af' }}>
                            {ran
                              ? <>
                                  <div>→ <strong>ADD({aVal}, {bVal})</strong></div>
                                  <div style={{ paddingLeft: 16 }}>result = {aVal} + {bVal} = <strong>{result}</strong></div>
                                  <div style={{ paddingLeft: 16 }}>return <strong>{result}</strong></div>
                                </>
                              : '—'}
                          </div>
                        </div>

                        <div style={{ marginBottom: 12 }}>
                          <p style={{ margin: '0 0 6px', fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 700, color: '#374151' }}>Data Flow</p>
                          <div style={{ background: '#f3f4f6', borderRadius: 8, border: '1px solid #e5e7eb', padding: '10px 14px', fontFamily: 'JetBrains Mono', fontSize: 13, color: ran ? '#111827' : '#9ca3af' }}>
                            {ran
                              ? <>{aVal} → ADD, {bVal} → ADD → result <strong>{result}</strong> → return</>
                              : '—'}
                          </div>
                        </div>

                        <div>
                          <p style={{ margin: '0 0 6px', fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 700, color: '#374151' }}>Output</p>
                          <div style={{ background: ran ? '#f0fdf4' : '#f3f4f6', borderRadius: 8, border: `1px solid ${ran ? (result !== null ? '#86efac' : '#00dbe7') : '#e5e7eb'}`, padding: '10px 14px', fontFamily: 'JetBrains Mono', fontSize: 14, fontWeight: 700, color: ran ? (result !== null ? '#15803d' : '#00dbe7') : '#9ca3af' }}>
                            {ran ? (result !== null ? result : 'Enter valid numbers above') : '—'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Where are Functions Used in DSA */}
                  <div style={{ marginTop: 16 }}>
                    <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 20 }}>Where are Functions Used in DSA?</h3>
                    <p style={{ margin: '0 0 8px', color: '#e3e1e9', lineHeight: 1.7 }}>In DSA, functions are used to implement algorithms and solve problems in a structured and reusable way.</p>
                    <ul style={{ margin: '0 0 0 18px', color: '#e3e1e9', lineHeight: 1.8 }}>
                      <li>Implement algorithms like searching and sorting.</li>
                      <li>Handle recursion (like factorial, tree traversal).</li>
                      <li>Break problems into smaller subproblems.</li>
                      <li>Operate on data structures like arrays, linked lists, trees, and graphs.</li>
                      <li>Make code clean and easy to understand.</li>
                    </ul>
                  </div>
                </>
              );
            }
            // ── end custom widget ──────────────────────────────────────────
            const languageVariants = Array.isArray(section.languageVariants) ? section.languageVariants : [];
            const activeTabRaw = activeLanguageTabMap[runtimeKey] ?? 0;
            const activeTab = languageVariants.length > 0 ? ((activeTabRaw % languageVariants.length) + languageVariants.length) % languageVariants.length : 0;
            const activeSnippet = languageVariants.length > 0 ? languageVariants[activeTab] : section;
            const activeLanguageKey = activeSnippet.language
              ? languageFromTabLabel(activeSnippet.language)
              : languageFromHeading(section.heading);
            const sectionImageCount = Array.isArray(section.images) ? section.images.length : 0;
            const sectionImageIndexRaw = docImageIndexMap[runtimeKey] ?? 0;
            const sectionImageIndex = sectionImageCount > 0
              ? ((sectionImageIndexRaw % sectionImageCount) + sectionImageCount) % sectionImageCount
              : 0;
            const editableCode = editableCodeMap[runtimeKey] ?? (activeSnippet.code || '');
            const copyOnlyMode = docKey === 'input-output-page' || section.copyOnlyMode === true;
            const hideLanguageBadge = section.hideLanguageBadge === true;
            const isEditorMode = !!editorModeMap[runtimeKey];
            const hasRuntimeOutput = !!runtimeOutputMap[runtimeKey];
            const isCodeChangedSinceRun = lastRunCodeMap[runtimeKey] !== undefined && lastRunCodeMap[runtimeKey] !== editableCode;
            const runtimeOnlyForThisPage = docKey === 'while-loop-page';
            const hideNoInputRequiredForThisPage = docKey === 'while-loop-page' || docKey === 'function-page';
            const hideInputPanel = section.hideInputPanel === true;
            const hasVisibleInput = !!activeSnippet.input && (
              !hideNoInputRequiredForThisPage || String(activeSnippet.input).trim().toLowerCase() !== 'no input required'
            );
            const shouldShowOutputPanel = runtimeOnlyForThisPage
              ? hasRuntimeOutput
              : (activeSnippet.output || hasRuntimeOutput);
            return (
              <>
                {!section.hideHeading ? (
                  <h3
                    id={toAnchorId(section.heading)}
                    style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22, scrollMarginTop: 120 }}
                  >
                    {section.heading}
                  </h3>
                ) : null}

                {Array.isArray(section.images) && section.images.length > 0 && !section.renderImagesAfterText ? (
                  <div style={{ margin: '10px 0 14px', maxWidth: section.imageMaxWidth || 620 }}>
                    <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                      <div
                        style={{
                          display: 'flex',
                          width: `${section.images.length * 100}%`,
                          transform: `translateX(-${sectionImageIndex * (100 / section.images.length)}%)`,
                          transition: 'transform 0.25s ease',
                        }}
                      >
                        {section.images.map((image, idx) => (
                          <div key={`${runtimeKey}-image-${idx}`} style={{ width: `${100 / section.images.length}%`, flexShrink: 0, background: '#111827' }}>
                            <img
                              src={image.src}
                              alt={image.alt || `Programming visual ${idx + 1}`}
                              loading={shouldPreloadCarouselImage(idx, sectionImageIndex, section.images.length) ? 'eager' : 'lazy'}
                              fetchPriority={idx === sectionImageIndex ? 'high' : 'auto'}
                              decoding="async"
                              onLoad={() => markImageLoaded(`${runtimeKey}-image-${idx}`)}
                              style={{
                                width: '100%',
                                display: 'block',
                                opacity: loadedImageMap[`${runtimeKey}-image-${idx}`] ? 1 : 0.12,
                                transition: 'opacity 0.18s ease-out',
                              }}
                            />
                          </div>
                        ))}
                      </div>

                      {section.images.length > 1 ? (
                        <>
                          <button
                            type="button"
                            onClick={() => {
                              setDocImageIndexMap(prev => ({
                                ...prev,
                                [runtimeKey]: ((prev[runtimeKey] ?? 0) - 1 + section.images.length) % section.images.length,
                              }));
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'rgba(6,18,22,0.72)',
                              border: '1px solid rgba(0,219,231,0.45)',
                              color: '#00dbe7',
                              borderRadius: 999,
                              width: 44,
                              height: 44,
                              padding: 0,
                              cursor: 'pointer',
                              flexShrink: 0,
                              position: 'absolute',
                              left: 10,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              zIndex: 2,
                            }}
                            aria-label="Previous image"
                            title="Previous image"
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setDocImageIndexMap(prev => ({
                                ...prev,
                                [runtimeKey]: ((prev[runtimeKey] ?? 0) + 1) % section.images.length,
                              }));
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'rgba(6,18,22,0.72)',
                              border: '1px solid rgba(0,219,231,0.45)',
                              color: '#00dbe7',
                              borderRadius: 999,
                              width: 44,
                              height: 44,
                              padding: 0,
                              cursor: 'pointer',
                              flexShrink: 0,
                              position: 'absolute',
                              right: 10,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              zIndex: 2,
                            }}
                            aria-label="Next image"
                            title="Next image"
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span>
                          </button>

                          <span
                            style={{
                              position: 'absolute',
                              right: 10,
                              bottom: 8,
                              color: '#d7f6fa',
                              background: 'rgba(6,18,22,0.72)',
                              border: '1px solid rgba(125,245,255,0.35)',
                              borderRadius: 999,
                              padding: '2px 8px',
                              fontFamily: 'JetBrains Mono',
                              fontSize: 11,
                            }}
                          >
                            {sectionImageIndex + 1}/{section.images.length}
                          </span>
                        </>
                      ) : null}
                    </div>
                  </div>
                ) : null}

                {Array.isArray(section.paragraphs) && section.paragraphs.length > 0 ? (
                  <div style={{ margin: '0 0 10px', display: 'grid', gap: 8 }}>
                    {section.paragraphs.map((line, idx) => (
                      <p
                        key={`${runtimeKey}-paragraph-${idx}`}
                        style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}
                      >
                        {renderTextWithBold(line)}
                      </p>
                    ))}
                  </div>
                ) : null}

                {Array.isArray(section.images) && section.images.length > 0 && section.renderImagesAfterText ? (
                  <div style={{ margin: '10px 0 14px', maxWidth: section.imageMaxWidth || 620 }}>
                    <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                      <div
                        style={{
                          display: 'flex',
                          width: `${section.images.length * 100}%`,
                          transform: `translateX(-${sectionImageIndex * (100 / section.images.length)}%)`,
                          transition: 'transform 0.25s ease',
                        }}
                      >
                        {section.images.map((image, idx) => (
                          <div key={`${runtimeKey}-image-after-${idx}`} style={{ width: `${100 / section.images.length}%`, flexShrink: 0, background: '#111827' }}>
                            <img
                              src={image.src}
                              alt={image.alt || `Programming visual ${idx + 1}`}
                              loading={shouldPreloadCarouselImage(idx, sectionImageIndex, section.images.length) ? 'eager' : 'lazy'}
                              fetchPriority={idx === sectionImageIndex ? 'high' : 'auto'}
                              decoding="async"
                              onLoad={() => markImageLoaded(`${runtimeKey}-image-after-${idx}`)}
                              style={{
                                width: '100%',
                                display: 'block',
                                opacity: loadedImageMap[`${runtimeKey}-image-after-${idx}`] ? 1 : 0.12,
                                transition: 'opacity 0.18s ease-out',
                              }}
                            />
                          </div>
                        ))}
                      </div>

                      {section.images.length > 1 ? (
                        <>
                          <button
                            type="button"
                            onClick={() => {
                              setDocImageIndexMap(prev => ({
                                ...prev,
                                [runtimeKey]: ((prev[runtimeKey] ?? 0) - 1 + section.images.length) % section.images.length,
                              }));
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'rgba(6,18,22,0.72)',
                              border: '1px solid rgba(0,219,231,0.45)',
                              color: '#00dbe7',
                              borderRadius: 999,
                              width: 44,
                              height: 44,
                              padding: 0,
                              cursor: 'pointer',
                              flexShrink: 0,
                              position: 'absolute',
                              left: 10,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              zIndex: 2,
                            }}
                            aria-label="Previous image"
                            title="Previous image"
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setDocImageIndexMap(prev => ({
                                ...prev,
                                [runtimeKey]: ((prev[runtimeKey] ?? 0) + 1) % section.images.length,
                              }));
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'rgba(6,18,22,0.72)',
                              border: '1px solid rgba(0,219,231,0.45)',
                              color: '#00dbe7',
                              borderRadius: 999,
                              width: 44,
                              height: 44,
                              padding: 0,
                              cursor: 'pointer',
                              flexShrink: 0,
                              position: 'absolute',
                              right: 10,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              zIndex: 2,
                            }}
                            aria-label="Next image"
                            title="Next image"
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span>
                          </button>

                          <span
                            style={{
                              position: 'absolute',
                              right: 10,
                              bottom: 8,
                              color: '#d7f6fa',
                              background: 'rgba(6,18,22,0.72)',
                              border: '1px solid rgba(125,245,255,0.35)',
                              borderRadius: 999,
                              padding: '2px 8px',
                              fontFamily: 'JetBrains Mono',
                              fontSize: 11,
                            }}
                          >
                            {sectionImageIndex + 1}/{section.images.length}
                          </span>
                        </>
                      ) : null}
                    </div>
                  </div>
                ) : null}

                {Array.isArray(section.postImageParagraphs) && section.postImageParagraphs.length > 0 ? (
                  <div style={{ margin: '0 0 10px', display: 'grid', gap: 8 }}>
                    {section.postImageParagraphs.map((line, idx) => (
                      <p
                        key={`${runtimeKey}-post-image-paragraph-${idx}`}
                        style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}
                      >
                        {renderTextWithBold(line)}
                      </p>
                    ))}
                  </div>
                ) : null}

                {!section.hideBullets && Array.isArray(section.bullets) && section.bullets.length > 0 ? (
                  <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                    {section.bullets.map(b => (
                      <li key={`${docKey}-${section.heading}-${b}`}>{renderTextWithBold(b)}</li>
                    ))}
                  </ul>
                ) : null}

                {Array.isArray(section.afterBulletsParagraphs) && section.afterBulletsParagraphs.length > 0 ? (
                  <div style={{ margin: '0 0 10px', display: 'grid', gap: 8 }}>
                    {section.afterBulletsParagraphs.map((line, idx) => (
                      <p
                        key={`${runtimeKey}-after-bullets-paragraph-${idx}`}
                        style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}
                      >
                        {renderTextWithBold(line)}
                      </p>
                    ))}
                  </div>
                ) : null}

                {Array.isArray(section.bulletsSecondary) && section.bulletsSecondary.length > 0 ? (
                  <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                    {section.bulletsSecondary.map(b => (
                      <li key={`${runtimeKey}-secondary-${b}`}>{renderTextWithBold(b)}</li>
                    ))}
                  </ul>
                ) : null}
                {activeSnippet.code && !section.hideCodePanel ? (
                  <div style={{ margin: '0 0 10px', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'visible', position: 'relative' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                        background: 'rgba(8,11,18,0.95)',
                        borderBottom: '1px solid rgba(58,73,75,0.35)',
                        padding: '8px 10px',
                        position: 'sticky',
                        top: 76,
                        zIndex: 24,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        boxShadow: '0 10px 24px rgba(0, 0, 0, 0.32)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      {languageVariants.length > 0 ? (
                        <div style={{ maxWidth: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, flexWrap: 'nowrap', minWidth: 'max-content', paddingBottom: 2 }}>
                            {languageVariants.map((variant, idx) => {
                              const isActiveVariant = idx === activeTab;
                              return (
                                <button
                                  key={`${runtimeKey}-tab-${variant.language || idx}`}
                                  type="button"
                                  onClick={() => {
                                    setActiveLanguageTabMap(prev => ({ ...prev, [runtimeKey]: idx }));
                                    setEditableCodeMap(prev => {
                                      const next = { ...prev };
                                      delete next[runtimeKey];
                                      return next;
                                    });
                                    setRuntimeOutputMap(prev => {
                                      const next = { ...prev };
                                      delete next[runtimeKey];
                                      return next;
                                    });
                                  }}
                                  style={{
                                    border: isActiveVariant ? '1px solid rgba(0,219,231,0.7)' : '1px solid rgba(125,245,255,0.28)',
                                    borderRadius: 999,
                                    background: isActiveVariant ? 'rgba(0,219,231,0.2)' : 'rgba(0,219,231,0.06)',
                                    color: isActiveVariant ? '#00dbe7' : '#b9dce0',
                                    padding: '3px 10px',
                                    cursor: 'pointer',
                                    fontFamily: 'JetBrains Mono',
                                    fontSize: 11,
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                  }}
                                >
                                  {variant.language}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ) : !hideLanguageBadge ? (
                        <span style={{ color: '#7dd3fc', fontFamily: 'JetBrains Mono', fontSize: 12, textTransform: 'uppercase' }}>
                          {activeSnippet.language || languageFromHeading(section.heading)}
                        </span>
                      ) : (
                        <span
                          aria-hidden="true"
                          style={{
                            visibility: 'hidden',
                            color: '#7dd3fc',
                            fontFamily: 'JetBrains Mono',
                            fontSize: 12,
                            textTransform: 'uppercase',
                          }}
                        >
                          Placeholder
                        </span>
                      )}
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        {!copyOnlyMode ? (
                          <button
                            type="button"
                            onClick={() => {
                              setEditorModeMap(prev => ({ ...prev, [runtimeKey]: !prev[runtimeKey] }));
                            }}
                            style={{
                              border: '1px solid rgba(0,219,231,0.35)',
                              borderRadius: 6,
                              background: isEditorMode ? 'rgba(0,219,231,0.2)' : 'rgba(0,219,231,0.08)',
                              color: '#00dbe7',
                              width: 30,
                              height: 28,
                              padding: 0,
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              pointerEvents: 'auto',
                              position: 'relative',
                              zIndex: 8,
                            }}
                            aria-label={isEditorMode ? 'Exit edit mode' : 'Editor mode'}
                            title={isEditorMode ? 'Exit edit mode' : 'Editor mode'}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{isEditorMode ? 'close' : 'edit_square'}</span>
                          </button>
                        ) : null}
                        {!copyOnlyMode ? (
                          <button
                            type="button"
                            onClick={() => {
                              if (hasRuntimeOutput) {
                                clearRuntimeOutputByKey(runtimeKey);
                                return;
                              }
                              runEditableCode(docKey, section, activeSnippet);
                            }}
                            style={{
                              border: '1px solid rgba(0,219,231,0.35)',
                              borderRadius: 6,
                              background: 'rgba(0,219,231,0.08)',
                              color: '#00dbe7',
                              width: 30,
                              height: 28,
                              padding: 0,
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              pointerEvents: 'auto',
                              position: 'relative',
                              zIndex: 9,
                            }}
                            aria-label={hasRuntimeOutput ? 'Unrun code' : 'Run code'}
                            title={hasRuntimeOutput ? 'Unrun code' : 'Run code'}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 17 }}>{hasRuntimeOutput ? 'stop_circle' : 'play_arrow'}</span>
                          </button>
                        ) : null}
                        <button
                          type="button"
                          onClick={async () => {
                            try {
                              await navigator.clipboard.writeText(editableCode);
                              setCopiedCodeKey(`${docKey}:${section.heading}`);
                              window.setTimeout(() => setCopiedCodeKey(''), 1200);
                            } catch {
                              setCopiedCodeKey('');
                            }
                          }}
                          style={{
                            border: '1px solid rgba(0,219,231,0.35)',
                            borderRadius: 6,
                            background: 'rgba(0,219,231,0.08)',
                            color: '#00dbe7',
                            width: 30,
                            height: 28,
                            padding: 0,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'auto',
                            position: 'relative',
                            zIndex: 8,
                          }}
                          aria-label="Copy code"
                          title="Copy code"
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                            {copiedCodeKey === `${docKey}:${section.heading}` ? 'check' : 'content_copy'}
                          </span>
                        </button>
                      </div>
                    </div>
                    {isEditorMode && !copyOnlyMode ? (
                      <div
                        style={{
                          position: 'relative',
                          background: '#1e1e1e',
                          height: `${getEditorBoxHeightPx(editableCode)}px`,
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: `${editorTopPaddingPx + ((editorActiveLineMap[runtimeKey] || 1) - 1) * editorLineHeightPx - (editorScrollTopMap[runtimeKey] || 0)}px`,
                            height: editorLineHeightPx,
                            background: '#2a2d2e',
                            borderTop: '1px solid rgba(42, 45, 46, 0.9)',
                            borderBottom: '1px solid rgba(42, 45, 46, 0.9)',
                            pointerEvents: 'none',
                            zIndex: 1,
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: editorGutterWidthPx,
                            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                            background: 'rgba(255, 255, 255, 0.02)',
                            pointerEvents: 'none',
                            zIndex: 2,
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              transform: `translateY(-${editorScrollTopMap[runtimeKey] || 0}px)`,
                              padding: `${editorTopPaddingPx}px 6px`,
                              fontFamily: 'JetBrains Mono',
                              fontSize: 12,
                            }}
                          >
                            {renderEditorLineNumbers(runtimeKey, editableCode || ' ')}
                          </div>
                        </div>
                        <pre
                          style={{
                            margin: 0,
                            fontFamily: 'JetBrains Mono',
                            fontSize: 13,
                            lineHeight: 1.5,
                            padding: `${editorTopPaddingPx}px ${editorHorizontalPaddingPx}px ${editorTopPaddingPx}px ${editorGutterWidthPx + editorHorizontalPaddingPx}px`,
                            height: `${getEditorBoxHeightPx(editableCode)}px`,
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            pointerEvents: 'none',
                            color: '#d4d4d4',
                            position: 'relative',
                            zIndex: 2,
                            background: 'transparent',
                          }}
                        >
                          {renderHighlightedCode(editableCode || ' ', activeLanguageKey)}
                        </pre>
                        <textarea
                          value={editableCode}
                          onChange={e => {
                            const nextCode = e.target.value;
                            setEditableCodeMap(prev => ({ ...prev, [runtimeKey]: nextCode }));
                            syncEditorCursorState(runtimeKey, e.target);
                            if (hasRuntimeOutput || isCodeChangedSinceRun) {
                              clearRuntimeOutputByKey(runtimeKey);
                            }
                          }}
                          onClick={e => syncEditorCursorState(runtimeKey, e.target)}
                          onKeyUp={e => syncEditorCursorState(runtimeKey, e.target)}
                          onSelect={e => syncEditorCursorState(runtimeKey, e.target)}
                          onFocus={e => syncEditorCursorState(runtimeKey, e.target)}
                          onScroll={e => syncEditorCursorState(runtimeKey, e.target)}
                          spellCheck={false}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            margin: 0,
                            background: 'transparent',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent',
                            caretColor: '#d4d4d4',
                            fontFamily: 'JetBrains Mono',
                            fontSize: 13,
                            lineHeight: 1.5,
                            padding: `${editorTopPaddingPx}px ${editorHorizontalPaddingPx}px ${editorTopPaddingPx}px ${editorGutterWidthPx + editorHorizontalPaddingPx}px`,
                            width: '100%',
                            height: `${getEditorBoxHeightPx(editableCode)}px`,
                            resize: 'none',
                            border: 'none',
                            outline: 'none',
                            zIndex: 3,
                            cursor: 'text',
                            whiteSpace: 'pre',
                            overflow: 'hidden',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                    ) : (
                      <pre
                        style={{
                          margin: 0,
                          background: '#1e1e1e',
                          fontFamily: 'JetBrains Mono',
                          fontSize: 13,
                          lineHeight: 1.5,
                          padding: '10px 12px',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                        }}
                      >
                        {renderHighlightedCode(editableCode, activeLanguageKey)}
                      </pre>
                    )}
                    {(compilingCodeKey === runtimeKey || runtimeOutputMap[runtimeKey]) && (
                      <div
                        style={{
                          background: 'rgba(0, 219, 231, 0.08)',
                          border: '2px solid #00dbe7',
                          borderTop: 'none',
                          padding: '16px',
                          animation: 'none',
                        }}
                      >
                        {!runtimeOutputMap[runtimeKey] ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div
                              style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: '#10b981',
                                animation: 'spin 1.2s linear infinite',
                              }}
                            />
                            <p style={{ margin: 0, color: '#7dd3fc', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 600 }}>
                              ⚙️ Compiling Code...
                            </p>
                          </div>
                        ) : compilationErrorMap[runtimeKey] ? (
                          <div>
                            <p style={{ margin: '0 0 8px 0', color: '#f87171', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
                              ❌ Compilation Error
                            </p>
                            <pre
                              style={{
                                background: '#ffffff',
                                border: '2px solid #dc2626',
                                borderRadius: '4px',
                                padding: '10px',
                                color: '#dc2626',
                                fontSize: '12px',
                                margin: 0,
                                fontFamily: 'JetBrains Mono',
                                fontWeight: 600,
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                              }}
                            >
                              {runtimeOutputMap[runtimeKey]}
                            </pre>
                          </div>
                        ) : (
                          <div>
                            <p style={{ margin: '0 0 8px 0', color: '#86efac', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
                              ✅ Output
                            </p>
                            <pre
                              style={{
                                background: '#ffffff',
                                border: '2px solid #00dbe7',
                                borderRadius: '4px',
                                padding: '10px',
                                color: '#111827',
                                fontSize: '12px',
                                margin: 0,
                                fontFamily: 'JetBrains Mono',
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                minHeight: '40px',
                              }}
                            >
                              {runtimeOutputMap[runtimeKey]}
                            </pre>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : null}
                {((section.hideOutputPanel !== true && (hasVisibleInput || shouldShowOutputPanel)) || (Array.isArray(section.postOutputParagraphs) && section.postOutputParagraphs.length > 0) || (Array.isArray(section.postOutputBullets) && section.postOutputBullets.length > 0)) ? (
                  <div style={{ display: 'grid', gap: 10, marginTop: 6 }}>
                    {!hideInputPanel && section.hideOutputPanel !== true && hasVisibleInput && docKey !== 'conditional-statements-page' ? (
                      <div style={{ display: 'grid', gap: 4 }}>
                        <p style={{ margin: 0, color: '#6b7280', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                          Input:
                        </p>
                        <div
                          style={{
                            borderRadius: 6,
                            border: '1px solid #e5e7eb',
                            background: '#ffffff',
                            padding: '10px 12px',
                          }}
                        >
                          <p style={{ margin: 0, color: '#111827', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: 14, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
                            {activeSnippet.input}
                          </p>
                        </div>
                      </div>
                    ) : null}

                    {section.hideOutputPanel !== true && shouldShowOutputPanel ? (
                      <div style={{ display: 'grid', gap: 4, borderTop: '2px solid #00dbe7', paddingTop: 12, marginTop: 12 }}>
                        <p style={{ margin: 0, color: '#00dbe7', fontFamily: 'JetBrains Mono', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                          ▶ Output
                        </p>
                        <div
                          style={{
                            borderRadius: 6,
                            border: '2px solid #00dbe7',
                            background: '#ffffff',
                            padding: '12px 14px',
                            minHeight: 60,
                          }}
                        >
                          <pre
                            style={{
                              margin: 0,
                              color: '#111827',
                              fontFamily: 'JetBrains Mono',
                              fontSize: 13,
                              lineHeight: 1.6,
                              whiteSpace: 'pre-wrap',
                              wordBreak: 'break-word',
                              overflowX: 'auto',
                              background: 'transparent',
                            }}
                          >
                            {(runtimeOnlyForThisPage
                              ? (runtimeOutputMap[runtimeKey] || '')
                              : (hasRuntimeOutput ? (runtimeOutputMap[runtimeKey] || '') : (activeSnippet.output || ''))
                            ).replace(/\\n/g, '\n')}
                          </pre>
                        </div>
                      </div>
                    ) : null}

                    {Array.isArray(section.postOutputParagraphs) && section.postOutputParagraphs.length > 0 ? (
                      <div style={{ marginTop: 8, display: 'grid', gap: 8 }}>
                        {section.postOutputParagraphs.map((line, idx) => (
                          <p
                            key={`${runtimeKey}-post-output-paragraph-${idx}`}
                            style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}
                          >
                            {renderTextWithBold(line)}
                          </p>
                        ))}
                      </div>
                    ) : null}

                    {Array.isArray(section.postOutputBullets) && section.postOutputBullets.length > 0 ? (
                      <ul style={{ margin: '0 0 0 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {section.postOutputBullets.map((b, idx) => (
                          <li key={`${runtimeKey}-post-output-bullet-${idx}`}>{renderTextWithBold(b)}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : null}
              </>
            );
          })()}
        </div>
      ))}

      {Array.isArray(notes.tags) && notes.tags.length > 0 ? (
        <div style={{ marginTop: 14, paddingTop: 10, borderTop: '1px solid rgba(58,73,75,0.28)' }}>
          <p style={{ margin: '0 0 6px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Article Tags</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {notes.tags.map(tag => (
              <span
                key={`${docKey}-tag-${tag}`}
                style={{
                  fontSize: 12,
                  color: '#00dbe7',
                  border: '1px solid rgba(0,219,231,0.28)',
                  background: 'rgba(0,219,231,0.08)',
                  borderRadius: 999,
                  padding: '4px 9px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {Array.isArray(notes.relatedLocalLinks) && notes.relatedLocalLinks.length > 0 ? (
        <div style={{ marginTop: 12 }}>
          <p style={{ margin: '0 0 6px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Related</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {notes.relatedLocalLinks.map(link => (
              <button
                key={`${docKey}-related-${link.docKey}`}
                type="button"
                onClick={() => setActiveLocalDoc(link.docKey)}
                style={{
                  border: '1px solid rgba(0,219,231,0.28)',
                  background: 'rgba(0,219,231,0.08)',
                  color: '#00dbe7',
                  borderRadius: 999,
                  padding: '4px 10px',
                  cursor: 'pointer',
                  fontSize: 12,
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(58,73,75,0.35)' }}>
        <h3 style={{ margin: '0 0 12px', fontFamily: 'Space Grotesk', fontSize: 22, color: '#e3e1e9' }}>
          Tutorial
        </h3>
        <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(58,73,75,0.28)', background: '#000' }}>
          <iframe
            src={videoSrc}
            title={videoTitle}
            width="100%"
            height="360"
            style={{ border: 'none', display: 'block' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>

          {/* Video title */}
          <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 18, fontWeight: 700, lineHeight: 1.4 }}>
            {youtubeStats?.title || videoTitle}
          </p>

          {/* Views + hashtags row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 12 }}>
            {youtubeStats?.viewCount ? (
              <span style={{ color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>
                {Number(displayedViewCount).toLocaleString()} views
              </span>
            ) : null}
            {Array.isArray(displayTags) && displayTags.map(tag => (
              <span key={tag} style={{ color: '#00dbe7', fontFamily: 'JetBrains Mono', fontSize: 12, cursor: 'default' }}>{tag}</span>
            ))}
          </div>

          {/* Channel row: avatar + name + subscribers + Subscribe button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
            <span style={{
              width: 44, height: 44, borderRadius: 999,
              background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)',
              color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', fontFamily: 'JetBrains Mono', fontSize: 18, fontWeight: 700, flexShrink: 0,
            }}>
              {ownerAvatarUrl ? (
                <img src={ownerAvatarUrl} alt={`${ownerName} profile`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : ownerInitial}
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <a href={ownerUrl} target="_blank" rel="noreferrer"
                style={{ color: '#e3e1e9', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                {ownerName}
              </a>
              {(youtubeStats?.subscriberCount || videoOwner?.subscribers) ? (
                <span style={{ color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>
                  {youtubeStats?.subscriberCount
                    ? `${Number(displayedSubscriberCount).toLocaleString()} subscribers`
                    : `${videoOwner?.subscribers} subscribers`}
                </span>
              ) : null}
            </div>

            <button
              type="button"
              onClick={async () => {
                if (!youtubeWriteEnabled) {
                  const nextSubscribed = !effectiveSubscribed;
                  setEngagementMap(prev => ({
                    ...prev,
                    [docKey]: {
                      ...(prev[docKey] || { likes: 0, comments: 0, subscribed: false, liked: false, views: 0 }),
                      subscribed: nextSubscribed,
                    },
                  }));
                  showSocialNotice(nextSubscribed ? 'Subscribed locally (no account needed)' : 'Unsubscribed locally');
                  return;
                }
                try {
                  if (!youtubeStats?.channelId) {
                    showSocialNotice('Channel info not ready. Please try again.', 3000);
                    return;
                  }
                  const nextSubscribed = !effectiveSubscribed;
                  showPendingNotice('⏳ Opening Google sign-in...');
                  await setYouTubeSubscription({
                    docKey,
                    channelId: youtubeStats.channelId,
                    subscribe: nextSubscribed,
                  });
                  await fetchYoutubeStats(videoSrc, docKey, { forceRefresh: true });
                  showSocialNotice(nextSubscribed ? '✓ Subscribed on YouTube!' : '✓ Unsubscribed on YouTube!', 3000);
                } catch (error) {
                  if (isYouTubeWriteAuthError(error)) {
                    showSocialNotice('Please sign in to your YouTube account to subscribe.', 3000);
                    return;
                  }
                  showSocialNotice('Unable to update subscription right now. Please try again after signing in.', 3000);
                }
              }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                border: 'none',
                background: effectiveSubscribed ? 'rgba(0,219,231,0.18)' : '#e3e1e9',
                color: effectiveSubscribed ? '#00dbe7' : '#0d0e13',
                padding: '8px 18px', borderRadius: 999,
                fontSize: 14, fontWeight: 700, cursor: 'pointer',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                {effectiveSubscribed ? 'notifications_active' : 'notifications'}
              </span>
              {effectiveSubscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>

          {/* Action buttons: Like | Comment count | Share | Visit Course */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
            {/* Like / Unlike */}
            <button
              type="button"
              onClick={async () => {
                if (!youtubeWriteEnabled) {
                  const nextLiked = !effectiveLiked;
                  setEngagementMap(prev => ({
                    ...prev,
                    [docKey]: {
                      ...(prev[docKey] || { likes: 0, comments: 0, subscribed: false, liked: false, views: 0 }),
                      liked: nextLiked,
                    },
                  }));
                  showSocialNotice(nextLiked ? 'Liked locally (no account needed)' : 'Unliked locally');
                  return;
                }
                try {
                  showPendingNotice('⏳ Opening Google sign-in...');
                  const currentRating = await getMyVideoRating(videoSrc);
                  const nextRating = currentRating === 'like' ? 'none' : 'like';
                  await setYouTubeVideoRating(videoSrc, nextRating);
                  setYoutubeRatingMap(prev => ({ ...prev, [docKey]: nextRating }));
                  await fetchYoutubeStats(videoSrc, docKey, { forceRefresh: true });
                  showSocialNotice(nextRating === 'like' ? '✓ Liked on YouTube!' : '✓ Unliked on YouTube!', 3000);
                } catch (error) {
                  if (isYouTubeWriteAuthError(error)) {
                    showSocialNotice('Please sign in to your YouTube account to like this video.', 3000);
                    return;
                  }
                  showSocialNotice('Unable to update like right now. Please try again after signing in.', 3000);
                }
              }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                border: '1px solid rgba(0,219,231,0.35)',
                background: effectiveLiked ? 'rgba(0,219,231,0.22)' : 'rgba(0,219,231,0.08)',
                color: '#00dbe7', padding: '8px 14px', borderRadius: 999,
                fontSize: 14, fontWeight: 700, cursor: 'pointer',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>thumb_up</span>
              {effectiveLiked
                ? `Liked · ${displayedLikeCount.toLocaleString()}`
                : `Like · ${displayedLikeCount.toLocaleString()}`}
            </button>

            {/* Comment count display */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              border: '1px solid rgba(58,73,75,0.5)',
              background: 'rgba(14,16,21,0.5)',
              color: '#849495', padding: '8px 14px', borderRadius: 999,
              fontSize: 14, fontWeight: 600,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat_bubble_outline</span>
              {displayedCommentCount.toLocaleString()} Comments
            </div>

            {/* More tutorial videos for this topic */}
            <a
              href={moreTutorialUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                border: '1px solid rgba(0,219,231,0.35)',
                background: 'rgba(0,219,231,0.1)', color: '#00dbe7',
                padding: '8px 14px', borderRadius: 999,
                fontSize: 14, fontWeight: 700, textDecoration: 'none',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>smart_display</span>
              More Tutorial
            </a>

            {/* Save Video */}
            <button
              type="button"
              onClick={toggleSaveVideo}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                border: `1px solid ${isVideoSaved ? 'rgba(0,219,231,0.55)' : 'rgba(0,219,231,0.35)'}`,
                background: isVideoSaved ? 'rgba(0,219,231,0.2)' : 'rgba(0,219,231,0.08)',
                color: '#00dbe7', padding: '8px 14px', borderRadius: 999,
                fontSize: 14, fontWeight: 700, cursor: 'pointer',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{isVideoSaved ? 'bookmark_added' : 'bookmark_add'}</span>
              {isVideoSaved ? 'Saved' : 'Save Video'}
            </button>

            {/* Visit Course */}
            <a href={courseUrl} target="_blank" rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                border: '1px solid rgba(0,219,231,0.35)',
                background: '#00dbe7', color: '#00363a',
                padding: '8px 14px', borderRadius: 999,
                fontSize: 14, fontWeight: 700, textDecoration: 'none',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
              Visit Course
            </a>
          </div>

          {/* Comment input */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', marginBottom: 6 }}>
            <input
              type="text"
              placeholder={`Add a comment...`}
              value={draftComment}
              onChange={(e) => {
                setCommentDraftMap(prev => ({ ...prev, [docKey]: e.target.value }));
              }}
              style={{
                flex: '1 1 280px', minWidth: 220,
                border: '1px solid rgba(58,73,75,0.5)',
                background: 'rgba(14,16,21,0.7)', color: '#e3e1e9',
                borderRadius: 8, padding: '9px 11px', fontSize: 14, outline: 'none',
              }}
            />
            <button
              type="button"
              onClick={async () => {
                const text = (draftComment || '').trim();
                if (!text) { showSocialNotice('Type a comment first'); return; }
                setCommentDraftMap(prev => ({ ...prev, [docKey]: '' }));
                if (!youtubeWriteEnabled) {
                  setEngagementMap(prev => ({
                    ...prev,
                    [docKey]: {
                      ...(prev[docKey] || { likes: 0, comments: 0, subscribed: false, liked: false, views: 0 }),
                      comments: (prev[docKey]?.comments || 0) + 1,
                    },
                  }));
                  showSocialNotice('Comment added locally (no account needed)');
                  return;
                }

                showPendingNotice('⏳ Opening Google sign-in...');

                try {
                  await postCommentToYouTube({ videoSrc, text });
                  // Optimistically bump UI count while YouTube aggregates propagate.
                  setEngagementMap(prev => ({
                    ...prev,
                    [docKey]: {
                      ...(prev[docKey] || { likes: 0, comments: 0, subscribed: false, liked: false, views: 0 }),
                      comments: (prev[docKey]?.comments || 0) + 1,
                    },
                  }));
                  await fetchYoutubeStats(videoSrc, docKey, { forceRefresh: true });
                  showSocialNotice('✓ Comment posted to YouTube!', 3000);
                } catch (error) {
                  if (isYouTubeWriteAuthError(error)) {
                    showSocialNotice('Please sign in to your YouTube account to comment.', 3000);
                    return;
                  }
                  showSocialNotice('Unable to post comment right now. Please try again after signing in.', 3000);
                }
              }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                border: '1px solid rgba(0,219,231,0.35)',
                background: 'rgba(0,219,231,0.1)', color: '#00dbe7',
                padding: '8px 14px', borderRadius: 8,
                fontSize: 13, fontWeight: 600, cursor: 'pointer',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>send</span>
              Comment
            </button>
          </div>

          {socialNotice ? (
            <p style={{ margin: '6px 0 0', color: socialNotice.startsWith('✗') ? '#ff6b6b' : '#74f5ff', fontFamily: 'JetBrains Mono', fontSize: 13, fontWeight: 600, padding: '8px 12px', background: socialNotice.startsWith('✗') ? 'rgba(255,107,107,0.08)' : 'rgba(0,219,231,0.08)', borderRadius: 8, border: `1px solid ${socialNotice.startsWith('✗') ? 'rgba(255,107,107,0.25)' : 'rgba(0,219,231,0.2)'}` }}>
              {socialNotice}
            </p>
          ) : null}
        </div>

        <div data-dropdown-scope style={{ marginTop: 24, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
          <h3 style={{ margin: '0 0 10px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 24 }}>Explore</h3>
          <div style={{ display: 'grid', gap: 10 }}>
            {getBottomOptions()[0].groups.map(group => (
              <details
                className="gfg-dropdown"
                key={`${docKey}-explore-${group.heading}`}
                onToggle={handleAccordionToggle}
                style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}
              >
                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                  <span>{group.heading}</span>
                  <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                </summary>
                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                  {group.items.map(item => (
                    <li key={`${docKey}-${group.heading}-${item.label}`}>
                      <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>

          <details className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
              <span>Courses</span>
              <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
            </summary>
            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
              {getBottomOptions()[1].items.map(item => (
                <li key={`${docKey}-courses-${item.label}`}>
                  <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
          </>
        );
      })()}
    </div>
  );

  if (!topic) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="page-background" /><div className="scanline" />
        <Navbar />
        <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#849495', marginBottom: 16 }}>Topic not found.</p>
            <Link to="/courses" style={{ color: '#00dbe7' }}>← Back to Courses</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isDocStateHydrated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div className="page-background" />
        <div className="scanline" />
        <Navbar />
        <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 16px 24px' }}>
          <div style={{ width: 40, height: 40, borderRadius: 999, border: '2px solid rgba(0,219,231,0.25)', borderTopColor: '#00dbe7', animation: 'spin 0.9s linear infinite' }} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="page-background" />
      <div className="scanline" />
      <Navbar />

      <main className={`codust-topic-enter${isSidebarOpen ? ' codust-topic-sidebar-open' : ''}`} style={{ flex: 1, display: 'flex', alignItems: 'flex-start', paddingTop: 64, gap: 16, padding: '64px 16px 24px', maxWidth: 1280, margin: '0 auto', width: '100%', overflow: 'visible' }}>

        {/* Roadmap sidebar */}
        <button
          type="button"
          className="codust-topic-sidebar-toggle"
          aria-expanded={isSidebarOpen}
          onClick={() => setIsSidebarOpen(value => !value)}
        >
          <span className="material-symbols-outlined" aria-hidden="true">{isSidebarOpen ? 'close' : 'menu'}</span>
          {isSidebarOpen ? 'Close learning steps' : 'Learning steps'}
        </button>
        <button
          type="button"
          className="codust-topic-sidebar-backdrop"
          aria-label="Close learning steps"
          onClick={() => setIsSidebarOpen(false)}
          tabIndex={isSidebarOpen ? 0 : -1}
        />
        <aside
          className={`codust-sidebar-scroll codust-topic-sidebar${isSidebarOpen ? ' codust-topic-sidebar-visible' : ''}`}
          onMouseEnter={() => setIsSidebarHovered(true)}
          onMouseLeave={() => setIsSidebarHovered(false)}
          onClick={(event) => {
            if (event.target instanceof Element && event.target.closest('a, button')) {
              setIsSidebarOpen(false);
            }
          }}
          style={{ flex: '0 0 320px', width: 320, minWidth: 280, maxWidth: 340, background: 'rgba(18,19,24,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,219,231,0.15)', borderRadius: 8, display: 'flex', flexDirection: 'column', overflowX: 'hidden', overflowY: 'auto', position: 'sticky', top: 64, zIndex: 20, alignSelf: 'flex-start', maxHeight: 'calc(100vh - 64px)' }}
        >

          <div style={{ position: 'sticky', top: 0, zIndex: 25, background: 'rgba(18,19,24,0.92)', backdropFilter: 'blur(20px)', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
            <div style={{ padding: '10px 12px', borderBottom: '1px solid rgba(58,73,75,0.2)' }}>
              <Link
                to="/courses"
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#00dbe7', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
                Back to Courses
              </Link>
            </div>

            <div style={{ padding: '12px 14px', borderBottom: '1px solid rgba(58,73,75,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(0,219,231,0.1)', border: '1px solid rgba(0,219,231,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00dbe7', fontSize: 15 }}>
                  <i className={`${topic.brand ? 'fa-brands' : 'fa-solid'} ${topic.icon}`} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 15, color: '#e3e1e9', fontWeight: 600 }}>{topic.name}</p>
                  <p style={{ margin: '2px 0 0', fontSize: 11, color: '#849495', fontFamily: 'JetBrains Mono', textTransform: 'uppercase' }}>{topic.tag}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => setRoadmapExpanded(v => !v)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                cursor: 'pointer',
                transition: 'background 0.2s',
                background: roadmapExpanded ? 'rgba(0,219,231,0.15)' : 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(58,73,75,0.15)',
                color: '#e3e1e9',
                textAlign: 'left',
              }}
              onMouseOver={e => { if (!roadmapExpanded) e.currentTarget.style.background = 'rgba(0,219,231,0.08)'; }}
              onMouseOut={e => { if (!roadmapExpanded) e.currentTarget.style.background = 'transparent'; }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="material-symbols-outlined" style={{ color: '#00dbe7', fontSize: 16 }}>menu_book</span>
                <span style={{ fontSize: 15, fontWeight: 500 }}>Learning Steps</span>
              </span>
              <span className="material-symbols-outlined" style={{ color: '#849495', fontSize: 16, transition: 'transform 0.3s', transform: roadmapExpanded ? 'rotate(180deg)' : 'none' }}>
                expand_more
              </span>
            </button>

            {roadmapExpanded && sidebarItems.map((item, idx) => {
              const isDsaTutorial = item.docKey === 'dsa-tutorial';
              const isWebTutorial = item.docKey === 'web-tutorial';
              const isHtmlTutorial = item.docKey === 'html-tutorial-page';
              const isCssTutorial = item.docKey === 'css-tutorial-page';
              const isJavascriptTutorial = item.docKey === 'javascript-tutorial-page';
              const isExpanded = isDsaTutorial ? dsaTutorialExpanded : (isWebTutorial ? webTutorialExpanded : true);

              return (
                <div key={item.label} style={{ borderBottom: '1px solid rgba(58,73,75,0.12)' }}>
                  <div
                    className="dsa-option-row"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 14,
                      padding: '10px 14px 10px 24px',
                      transition: 'all 0.2s ease',
                      background: activeLocalDoc === item.docKey ? 'rgba(0,219,231,0.08)' : 'transparent',
                      animationDelay: `${idx * 0.03}s`,
                      animationFillMode: 'both',
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.background = 'rgba(0,219,231,0.08)';
                      e.currentTarget.style.paddingLeft = '20px';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.background = activeLocalDoc === item.docKey ? 'rgba(0,219,231,0.08)' : 'transparent';
                      e.currentTarget.style.paddingLeft = '24px';
                    }}
                  >
                    {item.isLink ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontSize: 16, color: '#b9cacb', textDecoration: 'none', flex: 1 }}
                        onMouseOver={e => e.currentTarget.style.color = '#00dbe7'}
                        onMouseOut={e => e.currentTarget.style.color = '#b9cacb'}
                      >
                        {idx + 1}. {item.label}
                      </a>
                    ) : isDsaTutorial || isWebTutorial || isHtmlTutorial || isCssTutorial || isJavascriptTutorial ? (
                      <button
                        onClick={() => {
                          if (isDsaTutorial) {
                            setDsaTutorialExpanded(v => !v);
                            return;
                          }
                          if (isWebTutorial) {
                            setWebTutorialExpanded(v => !v);
                            return;
                          }
                          if (isHtmlTutorial) {
                            setActiveLocalDoc('html-tutorial-page');
                            return;
                          }
                          if (isCssTutorial) {
                            setActiveLocalDoc('css-tutorial-page');
                            return;
                          }
                          if (isJavascriptTutorial) {
                            setActiveLocalDoc('javascript-tutorial-page');
                            return;
                          }
                        }}
                        type="button"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 12,
                          color: activeLocalDoc === item.docKey ? '#00dbe7' : '#b9cacb',
                          fontSize: 16,
                          background: 'transparent',
                          border: 'none',
                          textAlign: 'left',
                          padding: 0,
                          cursor: 'pointer',
                          flex: 1,
                        }}
                        onMouseOver={e => e.currentTarget.style.color = '#00dbe7'}
                        onMouseOut={e => e.currentTarget.style.color = activeLocalDoc === item.docKey ? '#00dbe7' : '#b9cacb'}
                      >
                        <span>{idx + 1}. {item.label}</span>
                        <span className="material-symbols-outlined" style={{ color: '#00dbe7', fontSize: 16, flexShrink: 0, transition: 'transform 0.2s', transform: isExpanded ? 'rotate(180deg)' : 'none' }}>expand_more</span>
                      </button>
                    ) : (
                      <span style={{ fontSize: 16, color: '#b9cacb', flex: 1 }}>{idx + 1}. {item.label}</span>
                    )}
                    {!isDsaTutorial && !isWebTutorial && !isHtmlTutorial && !isCssTutorial && !isJavascriptTutorial && (
                      <span className="material-symbols-outlined" style={{ color: '#00dbe7', fontSize: 16, flexShrink: 0 }}>chevron_right</span>
                    )}
                  </div>
                  {(isDsaTutorial || isWebTutorial) && isExpanded && item.children?.length > 0 && (
                    <div style={{ padding: '0 14px 10px 42px', display: 'grid', gap: 8 }}>
                      {item.children.map((child, childIdx) => (
                        <button
                          key={`${child.label}-${childIdx}`}
                          type="button"
                          onClick={() => {
                            if (isDsaTutorial) {
                              setActiveLocalDoc('dsa-tutorial');
                              setActiveDsaSection(child.sectionId);
                            } else if (isWebTutorial) {
                              setActiveLocalDoc('web-tutorial');
                              setActiveWebSection(child.sectionId);
                            }
                          }}
                          className="dsa-section-item"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0,
                            color: isDsaTutorial ? (activeDsaSection === child.sectionId ? '#00dbe7' : '#e3e1e9') : (activeWebSection === child.sectionId ? '#00dbe7' : '#e3e1e9'),
                            fontSize: 14,
                            background: isDsaTutorial ? (activeDsaSection === child.sectionId ? 'rgba(0,219,231,0.08)' : 'transparent') : (activeWebSection === child.sectionId ? 'rgba(0,219,231,0.08)' : 'transparent'),
                            border: '1px solid',
                            borderColor: isDsaTutorial ? (activeDsaSection === child.sectionId ? 'rgba(0,219,231,0.25)' : 'transparent') : (activeWebSection === child.sectionId ? 'rgba(0,219,231,0.25)' : 'transparent'),
                            borderRadius: 8,
                            padding: '8px 10px 8px 10px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            width: '100%',
                            transition: 'all 0.2s ease',
                            animationDelay: `${childIdx * 0.03}s`,
                            animationFillMode: 'both',
                          }}
                          onMouseOver={e => { 
                            const activeSection = isDsaTutorial ? activeDsaSection : activeWebSection;
                            if (activeSection !== child.sectionId) {
                              e.currentTarget.style.background = 'rgba(0,219,231,0.08)';
                              e.currentTarget.style.paddingLeft = '6px';
                            }
                          }}
                          onMouseOut={e => { 
                            const activeSection = isDsaTutorial ? activeDsaSection : activeWebSection;
                            if (activeSection !== child.sectionId) {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.paddingLeft = '10px';
                            }
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 16, flexShrink: 0, marginRight: 4, transition: 'color 0.2s' }}>chevron_right</span>
                          <span>{child.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ padding: 12, borderTop: '1px solid rgba(58,73,75,0.2)', display: 'grid', gap: 10 }}>
            <button
              type="button"
              onClick={() => openLearningPanel('level')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
                border: 'none',
                background: 'rgba(0,219,231,0.06)',
                color: '#b9cacb',
                borderRadius: 10,
                padding: '10px 12px',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#00dbe7' }}>signal_cellular_alt</span>
                <span style={{ display: 'grid', gap: 2 }}>
                  <span style={{ color: '#849495', fontSize: 11, fontFamily: 'JetBrains Mono', textTransform: 'uppercase' }}>Level path</span>
                  <span style={{ color: '#e3e1e9', fontSize: 12 }}>{topicLearningEntry?.currentStage || topic.level}</span>
                </span>
              </span>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#00dbe7', flexShrink: 0 }}>chevron_right</span>
            </button>

            <button
              type="button"
              onClick={() => openLearningPanel('duration')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
                border: 'none',
                background: 'rgba(0,219,231,0.06)',
                color: '#b9cacb',
                borderRadius: 10,
                padding: '10px 12px',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#00dbe7' }}>schedule</span>
                <span style={{ display: 'grid', gap: 2 }}>
                  <span style={{ color: '#849495', fontSize: 11, fontFamily: 'JetBrains Mono', textTransform: 'uppercase' }}>Study pace</span>
                  <span style={{ color: '#e3e1e9', fontSize: 12 }}>
                    {topicLearningEntry?.paceLabel || 'Balanced pace'} · {getPaceAdjustedTimeline(topic.duration, topicLearningEntry?.weeklyHours || 5)}
                  </span>
                </span>
              </span>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#00dbe7', flexShrink: 0 }}>chevron_right</span>
            </button>

            <div style={{ display: 'grid', gap: 4, padding: '4px 2px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, fontSize: 11, color: '#849495', fontFamily: 'JetBrains Mono', textTransform: 'uppercase' }}>
                <span>Track progress</span>
                <span>{topicLearningEntry?.completedHighlights?.length || 0}/{topic.highlights.length}</span>
              </div>
              <div style={{ height: 6, borderRadius: 999, background: 'rgba(58,73,75,0.45)', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${Math.round((((topicLearningEntry?.completedHighlights?.length || 0) / Math.max(topic.highlights.length, 1)) * 100))}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #00dbe7 0%, #74f5ff 100%)',
                  }}
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Content panel */}
        <section
          ref={contentPanelRef}
          onScroll={e => {
            if (!slug || !activeLocalDoc) return;
            const notesScrollStorageKey = `codust-topic-notes-scroll:${slug}`;
            window.localStorage.setItem(notesScrollStorageKey, String(e.currentTarget.scrollTop));
          }}
          style={{ flex: '1 1 auto', minWidth: 0, width: '100%', overflowX: 'auto', background: 'rgba(18,19,24,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,219,231,0.15)', borderRadius: 8, padding: 16, display: 'block' }}
          className="content-panel"
        >
          {isDocStateHydrated && !activeLocalDoc && (
            <div style={{ marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid rgba(58,73,75,0.2)' }}>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#fface8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>LEARNING_MODULE</span>
              <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 32, color: '#e3e1e9', margin: '8px 0 6px' }}>{topic.name}</h2>
              <p style={{ color: '#b9cacb', lineHeight: 1.7, margin: 0, fontSize: 17 }}>{topic.desc}</p>
            </div>
          )}

          {activeLocalDoc === '__html-tutorial-page-unused' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const notes = HTML_TUTORIAL_CONTENT;
                const docKey = 'html-tutorial-page';
                const imageCount = Array.isArray(notes.images) ? notes.images.length : 0;
                const currentImageIndexRaw = docImageIndexMap[docKey] ?? 0;
                const currentImageIndex = imageCount > 0 ? ((currentImageIndexRaw % imageCount) + imageCount) % imageCount : 0;
                const videoSrc = notes.video?.src || 'https://www.youtube.com/embed/0aHZXNc-gyQ';
                const videoTitle = notes.video?.title || 'HTML Tutorial For Beginners | Complete Roadmap | Basics to Advance, Projects, and More';
                const courseTitle = notes.video?.courseTitle || videoTitle;
                const courseUrl = notes.video?.courseUrl || 'https://www.geeksforgeeks.org/html/html-tutorial/';
                const author = notes.video?.author || { name: 'kartik306', url: 'https://www.geeksforgeeks.org/user/kartik/', initial: 'K' };

                return (
                  <>
                    {renderDocTitleWithBack(notes.title, { backDocKey: 'web-tutorial', backLabel: 'Back', titleSize: 30, titleMargin: 0 })}
                    <p style={{ margin: '6px 0 12px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {notes.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.7 }}>{notes.intro}</p>

                    <ul style={{ margin: '0 0 14px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {notes.bullets.map((line, idx) => (
                        <li key={`html-intro-b-${idx}`}>{renderTextWithBold(line)}</li>
                      ))}
                    </ul>

                    {imageCount > 0 ? (
                      <div style={{ margin: '10px 0 16px', maxWidth: 760 }}>
                        <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                          <div
                            style={{
                              display: 'flex',
                              width: `${imageCount * 100}%`,
                              transform: `translateX(-${currentImageIndex * (100 / imageCount)}%)`,
                              transition: 'transform 0.25s ease',
                            }}
                          >
                            {notes.images.map((src, idx) => (
                              <div key={`html-image-${idx}`} style={{ width: `${100 / imageCount}%`, flexShrink: 0, background: '#111827' }}>
                                <img
                                  src={src}
                                  alt={`HTML visual ${idx + 1}`}
                                  loading={shouldPreloadCarouselImage(idx, currentImageIndex, imageCount) ? 'eager' : 'lazy'}
                                  fetchPriority={idx === currentImageIndex ? 'high' : 'auto'}
                                  decoding="async"
                                  onLoad={() => markImageLoaded(`${docKey}-image-${idx}`)}
                                  style={{
                                    width: '100%',
                                    display: 'block',
                                    opacity: loadedImageMap[`${docKey}-image-${idx}`] ? 1 : 0.12,
                                    transition: 'opacity 0.18s ease-out',
                                  }}
                                />
                              </div>
                            ))}
                          </div>

                          {imageCount > 1 ? (
                            <>
                              <button
                                type="button"
                                onClick={() => {
                                  setDocImageIndexMap(prev => ({
                                    ...prev,
                                    [docKey]: ((prev[docKey] ?? 0) - 1 + imageCount) % imageCount,
                                  }));
                                }}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  background: 'rgba(6,18,22,0.72)',
                                  border: '1px solid rgba(0,219,231,0.45)',
                                  color: '#00dbe7',
                                  borderRadius: 999,
                                  width: 44,
                                  height: 44,
                                  padding: 0,
                                  cursor: 'pointer',
                                  flexShrink: 0,
                                  position: 'absolute',
                                  left: 10,
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  zIndex: 2,
                                }}
                                aria-label="Previous image"
                                title="Previous image"
                              >
                                <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span>
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setDocImageIndexMap(prev => ({
                                    ...prev,
                                    [docKey]: ((prev[docKey] ?? 0) + 1) % imageCount,
                                  }));
                                }}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  background: 'rgba(6,18,22,0.72)',
                                  border: '1px solid rgba(0,219,231,0.45)',
                                  color: '#00dbe7',
                                  borderRadius: 999,
                                  width: 44,
                                  height: 44,
                                  padding: 0,
                                  cursor: 'pointer',
                                  flexShrink: 0,
                                  position: 'absolute',
                                  right: 10,
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  zIndex: 2,
                                }}
                                aria-label="Next image"
                                title="Next image"
                              >
                                <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span>
                              </button>

                              <span
                                style={{
                                  position: 'absolute',
                                  right: 10,
                                  bottom: 8,
                                  color: '#d7f6fa',
                                  background: 'rgba(6,18,22,0.72)',
                                  border: '1px solid rgba(125,245,255,0.35)',
                                  borderRadius: 999,
                                  padding: '2px 8px',
                                  fontFamily: 'JetBrains Mono',
                                  fontSize: 11,
                                }}
                              >
                                {currentImageIndex + 1}/{imageCount}
                              </span>
                            </>
                          ) : null}
                        </div>
                      </div>
                    ) : null}

                    {notes.sections.map(section => (
                      <div className="codust-page-section" key={`html-sec-${section.heading}`} style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                        <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{section.heading}</h3>
                        <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{section.description}</p>
                        <ul style={{ margin: 0, paddingLeft: 18, color: '#00dbe7', lineHeight: 1.8 }}>
                          {section.links.map(item => (
                            <li key={`html-${section.heading}-${item.label}`}>
                              <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>References</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#00dbe7', lineHeight: 1.8 }}>
                        {notes.references.map(item => (
                          <li key={`html-ref-${item.label}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Interesting Facts</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>
                        Here are some interesting facts and features that highlight the importance of HTML in web development.
                      </p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#00dbe7', lineHeight: 1.8 }}>
                        {notes.interestingFacts.map(item => (
                          <li key={`html-fact-${item.label}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>HTML Interview Questions</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#00dbe7', lineHeight: 1.8 }}>
                        {notes.interview.map(item => (
                          <li key={`html-intv-${item.label}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>HTML Intermediate Projects</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>
                        Creating simple HTML projects like a portfolio, social media website, or responsive website helps you learn faster and build confidence.
                      </p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#00dbe7', lineHeight: 1.8 }}>
                        {notes.projects.map(item => (
                          <li key={`html-proj-${item.label}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Approach to Learn HTML</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>
                        You can complete this HTML tutorial in approximately 4 weeks if you dedicate consistent time and effort.
                      </p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.8 }}>
                        {notes.roadmap.map((line, idx) => (
                          <li key={`html-road-${idx}`}>{renderTextWithBold(line)}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Importance of HTML</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.8 }}>
                        {notes.importance.map((line, idx) => (
                          <li key={`html-imp-${idx}`}>{line}</li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(58,73,75,0.35)' }}>
                      <h3 style={{ margin: '0 0 12px', fontFamily: 'Space Grotesk', fontSize: 22, color: '#e3e1e9' }}>Video</h3>
                      <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(58,73,75,0.28)', background: '#000' }}>
                        <iframe
                          src={videoSrc}
                          title={videoTitle}
                          width="100%"
                          height="360"
                          style={{ border: 'none', display: 'block' }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}>
                          <span style={{ fontWeight: 700 }}>{courseTitle}</span>
                        </p>
                        <a
                          href={courseUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            background: '#00dbe7',
                            color: '#00363a',
                            fontWeight: 700,
                            padding: '8px 14px',
                            borderRadius: 8,
                            textDecoration: 'none',
                            fontSize: 14,
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
                          Visit Course
                        </a>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                          <a
                            href={author.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 10,
                              textDecoration: 'none',
                            }}
                          >
                            <span
                              style={{
                                width: 44,
                                height: 44,
                                borderRadius: 999,
                                background: 'rgba(0,219,231,0.16)',
                                border: '1px solid rgba(0,219,231,0.35)',
                                color: '#00dbe7',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'JetBrains Mono',
                                fontSize: 18,
                                fontWeight: 700,
                              }}
                            >
                              {author.initial || 'K'}
                            </span>
                            <span style={{ color: '#00dbe7', textDecoration: 'underline', fontSize: 20, fontWeight: 700 }}>{author.name}</span>
                          </a>

                          <button
                            type="button"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 6,
                              border: '1px solid rgba(0,219,231,0.35)',
                              background: 'rgba(0,219,231,0.1)',
                              color: '#00dbe7',
                              padding: '9px 12px',
                              borderRadius: 8,
                              fontSize: 14,
                              fontWeight: 600,
                              cursor: 'pointer',
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>thumb_up</span>
                            Like
                          </button>

                          <button
                            type="button"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 6,
                              border: '1px solid rgba(0,219,231,0.35)',
                              background: 'rgba(0,219,231,0.1)',
                              color: '#00dbe7',
                              padding: '9px 12px',
                              borderRadius: 8,
                              fontSize: 14,
                              fontWeight: 600,
                              cursor: 'pointer',
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>build</span>
                            Improve
                          </button>
                        </div>

                        <p style={{ margin: '0 0 6px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Article Tags</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {(notes.video?.tags || []).map(tag => (
                            <span
                              key={`html-tag-${tag}`}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '4px 10px',
                                borderRadius: 999,
                                background: 'rgba(0,219,231,0.1)',
                                border: '1px solid rgba(0,219,231,0.28)',
                                color: '#00dbe7',
                                fontSize: 12,
                                fontFamily: 'JetBrains Mono',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 style={{ margin: '0 0 10px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 24 }}>Explore</h3>
                      <div style={{ display: 'grid', gap: 10 }}>
                        {(notes.explore?.[0]?.groups || []).map(group => (
                          <details
                            className="gfg-dropdown"
                            key={`html-explore-${group.heading}`}
                            onToggle={handleAccordionToggle}
                            style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}
                          >
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                              <span>{group.heading}</span>
                              <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                            </summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {(group.items || []).map(item => (
                                <li key={`html-${group.heading}-${item.label}`}>
                                  <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                                    {item.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </details>
                        ))}
                      </div>

                      <details className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                        <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                          <span>{notes.explore?.[1]?.heading || 'Courses'}</span>
                          <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                        </summary>
                        <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                          {(notes.explore?.[1]?.items || []).map(item => (
                            <li key={`html-courses-${item.label}`}>
                              <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'input-output-page' ? (
            renderProgrammingDocPage({
              notes: { ...INPUT_OUTPUT_NOTES, images: IO_ARTICLE_IMAGES },
              docKey: 'input-output-page',
              videoSrc: 'https://www.youtube.com/embed/xOIVXR35aI4',
              videoTitle: 'Input and Output Video',
              videoOwner: {
                name: 'Bro Code',
                url: 'https://www.youtube.com/@BroCodez',
                hashtags: ['#input', '#output', '#programming'],
              },
              courseTitle: 'Background Part 1 (IO Devices, CPU and Memory)',
              courseUrl: 'https://www.geeksforgeeks.org/courses/c-Programming-basic-to-advanced',
            })
          ) : activeLocalDoc === '__legacy-input-output-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
                <h2 style={{ margin: 0, fontFamily: 'Space Grotesk', fontSize: 28, color: '#e3e1e9' }}>{INPUT_OUTPUT_NOTES.title}</h2>
                <button
                  type="button"
                  onClick={() => {
                    setActiveLocalDoc('dsa-tutorial');
                    setActiveDsaSection('fundamentals');
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'rgba(0,219,231,0.12)',
                    border: '1px solid rgba(0,219,231,0.28)',
                    color: '#00dbe7',
                    borderRadius: 8,
                    padding: '8px 10px',
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
                  Back to DSA Tutorial
                </button>
              </div>

              <p style={{ margin: '0 0 6px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>
                Last Updated: {INPUT_OUTPUT_NOTES.lastUpdated}
              </p>

              {INPUT_OUTPUT_NOTES.intro.map((line, idx) => (
                <p key={`io-intro-${idx}`} style={{ margin: '0 0 8px', color: '#e3e1e9', lineHeight: 1.7 }}>{line}</p>
              ))}

              <div style={{ margin: '10px 0 14px', maxWidth: 620 }}>
                <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                  <div
                    style={{
                      display: 'flex',
                      width: `${IO_ARTICLE_IMAGES.length * 100}%`,
                      transform: `translateX(-${ioImageIndex * (100 / IO_ARTICLE_IMAGES.length)}%)`,
                      transition: 'transform 0.25s ease',
                    }}
                  >
                    {IO_ARTICLE_IMAGES.map(image => (
                      <div key={image.src} style={{ width: `${100 / IO_ARTICLE_IMAGES.length}%`, flexShrink: 0 }}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          style={{ width: '100%', display: 'block' }}
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setIoImageIndex(prev => (prev - 1 + IO_ARTICLE_IMAGES.length) % IO_ARTICLE_IMAGES.length)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(6,18,22,0.72)',
                      border: '1px solid rgba(0,219,231,0.45)',
                      color: '#00dbe7',
                      borderRadius: 999,
                      width: 44,
                      height: 44,
                      padding: 0,
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'absolute',
                      left: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                    }}
                    aria-label="Previous image"
                    title="Previous image"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIoImageIndex(prev => (prev + 1) % IO_ARTICLE_IMAGES.length)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(6,18,22,0.72)',
                      border: '1px solid rgba(0,219,231,0.45)',
                      color: '#00dbe7',
                      borderRadius: 999,
                      width: 44,
                      height: 44,
                      padding: 0,
                      cursor: 'pointer',
                      flexShrink: 0,
                      position: 'absolute',
                      right: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                    }}
                    aria-label="Next image"
                    title="Next image"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span>
                  </button>

                  <span
                    style={{
                      position: 'absolute',
                      right: 10,
                      bottom: 8,
                      color: '#d7f6fa',
                      background: 'rgba(6,18,22,0.72)',
                      border: '1px solid rgba(125,245,255,0.35)',
                      borderRadius: 999,
                      padding: '2px 8px',
                      fontFamily: 'JetBrains Mono',
                      fontSize: 11,
                    }}
                  >
                    {ioImageIndex + 1}/{IO_ARTICLE_IMAGES.length}
                  </span>
                </div>
              </div>

              <h3 style={{ margin: '16px 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 20 }}>Table of Content</h3>
              <ul style={{ margin: '0 0 12px 18px', color: '#00dbe7', lineHeight: 1.7 }}>
                {INPUT_OUTPUT_NOTES.toc.map(item => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => {
                        const target = document.getElementById(toAnchorId(item));
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        padding: 0,
                        margin: 0,
                        color: '#00dbe7',
                        cursor: 'pointer',
                        textAlign: 'left',
                        textDecoration: 'underline',
                        font: 'inherit',
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>

              {INPUT_OUTPUT_NOTES.sections.map(section => (
                <div className="codust-page-section" key={section.heading} style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                  {(() => {
                    const runtimeKey = sectionRuntimeKey('input-output-page', section.heading);
                    const editableCode = editableCodeMap[runtimeKey] ?? section.code;
                    const isEditorMode = !!editorModeMap[runtimeKey];
                    const hasRuntimeOutput = !!runtimeOutputMap[runtimeKey];
                    const isCodeChangedSinceRun = lastRunCodeMap[runtimeKey] !== undefined && lastRunCodeMap[runtimeKey] !== editableCode;
                    return (
                      <>
                  <h3
                    id={toAnchorId(section.heading)}
                    style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22, scrollMarginTop: 120 }}
                  >
                    {section.heading}
                  </h3>
                  {Array.isArray(section.bullets) && section.bullets.length > 0 ? (
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {section.bullets.map(b => (
                        <li key={`${section.heading}-${b}`}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                  <div style={{ margin: '0 0 10px', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                        background: 'rgba(8,11,18,0.95)',
                        borderBottom: '1px solid rgba(58,73,75,0.35)',
                        padding: '8px 10px',
                      }}
                    >
                      <span style={{ color: '#7dd3fc', fontFamily: 'JetBrains Mono', fontSize: 12, textTransform: 'uppercase' }}>
                        {languageFromHeading(section.heading)}
                      </span>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, position: 'relative', zIndex: 7 }}>
                        <button
                          type="button"
                          onClick={() => {
                            setEditorModeMap(prev => ({ ...prev, [runtimeKey]: !prev[runtimeKey] }));
                          }}
                          style={{
                            border: '1px solid rgba(0,219,231,0.35)',
                            borderRadius: 6,
                            background: isEditorMode ? 'rgba(0,219,231,0.2)' : 'rgba(0,219,231,0.08)',
                            color: '#00dbe7',
                            width: 30,
                            height: 28,
                            padding: 0,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'auto',
                            position: 'relative',
                            zIndex: 8,
                          }}
                          aria-label={isEditorMode ? 'Exit edit mode' : 'Editor mode'}
                          title={isEditorMode ? 'Exit edit mode' : 'Editor mode'}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{isEditorMode ? 'close' : 'edit_square'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (hasRuntimeOutput) {
                              clearRuntimeOutputByKey(runtimeKey);
                              return;
                            }
                            runEditableCode('input-output-page', section);
                          }}
                          style={{
                            border: '1px solid rgba(0,219,231,0.35)',
                            borderRadius: 6,
                            background: 'rgba(0,219,231,0.08)',
                            color: '#00dbe7',
                            width: 30,
                            height: 28,
                            padding: 0,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'auto',
                            position: 'relative',
                            zIndex: 9,
                          }}
                          aria-label={hasRuntimeOutput ? 'Unrun code' : 'Run code'}
                          title={hasRuntimeOutput ? 'Unrun code' : 'Run code'}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 17 }}>{hasRuntimeOutput ? 'stop_circle' : 'play_arrow'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={async () => {
                            try {
                              await navigator.clipboard.writeText(editableCode);
                              setCopiedCodeKey(section.heading);
                              window.setTimeout(() => setCopiedCodeKey(''), 1200);
                            } catch {
                              setCopiedCodeKey('');
                            }
                          }}
                          style={{
                            border: '1px solid rgba(0,219,231,0.35)',
                            borderRadius: 6,
                            background: 'rgba(0,219,231,0.08)',
                            color: '#00dbe7',
                            width: 30,
                            height: 28,
                            padding: 0,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'auto',
                            position: 'relative',
                            zIndex: 8,
                          }}
                          aria-label="Copy code"
                          title="Copy code"
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                            {copiedCodeKey === section.heading ? 'check' : 'content_copy'}
                          </span>
                        </button>
                      </div>
                    </div>
                    {isEditorMode ? (
                      <div
                        style={{
                          position: 'relative',
                          background: '#1e1e1e',
                          height: `${getEditorBoxHeightPx(editableCode)}px`,
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: `${editorTopPaddingPx + ((editorActiveLineMap[runtimeKey] || 1) - 1) * editorLineHeightPx - (editorScrollTopMap[runtimeKey] || 0)}px`,
                            height: editorLineHeightPx,
                            background: '#2a2d2e',
                            borderTop: '1px solid rgba(42, 45, 46, 0.9)',
                            borderBottom: '1px solid rgba(42, 45, 46, 0.9)',
                            pointerEvents: 'none',
                            zIndex: 1,
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: editorGutterWidthPx,
                            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                            background: 'rgba(255, 255, 255, 0.02)',
                            pointerEvents: 'none',
                            zIndex: 2,
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              transform: `translateY(-${editorScrollTopMap[runtimeKey] || 0}px)`,
                              padding: `${editorTopPaddingPx}px 6px`,
                              fontFamily: 'JetBrains Mono',
                              fontSize: 12,
                            }}
                          >
                            {renderEditorLineNumbers(runtimeKey, editableCode || ' ')}
                          </div>
                        </div>
                        <pre
                          style={{
                            margin: 0,
                            fontFamily: 'JetBrains Mono',
                            fontSize: 13,
                            lineHeight: 1.5,
                            padding: `${editorTopPaddingPx}px ${editorHorizontalPaddingPx}px ${editorTopPaddingPx}px ${editorGutterWidthPx + editorHorizontalPaddingPx}px`,
                            height: `${getEditorBoxHeightPx(editableCode)}px`,
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            pointerEvents: 'none',
                            color: '#d4d4d4',
                            position: 'relative',
                            zIndex: 2,
                            background: 'transparent',
                          }}
                        >
                          {renderHighlightedCode(editableCode || ' ', languageFromHeading(section.heading))}
                        </pre>
                        <textarea
                          value={editableCode}
                          onChange={e => {
                            const nextCode = e.target.value;
                            setEditableCodeMap(prev => ({ ...prev, [runtimeKey]: nextCode }));
                            syncEditorCursorState(runtimeKey, e.target);
                            if (hasRuntimeOutput || isCodeChangedSinceRun) {
                              clearRuntimeOutputByKey(runtimeKey);
                            }
                          }}
                          onClick={e => syncEditorCursorState(runtimeKey, e.target)}
                          onKeyUp={e => syncEditorCursorState(runtimeKey, e.target)}
                          onSelect={e => syncEditorCursorState(runtimeKey, e.target)}
                          onFocus={e => syncEditorCursorState(runtimeKey, e.target)}
                          onScroll={e => syncEditorCursorState(runtimeKey, e.target)}
                          spellCheck={false}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            margin: 0,
                            background: 'transparent',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent',
                            caretColor: '#d4d4d4',
                            fontFamily: 'JetBrains Mono',
                            fontSize: 13,
                            lineHeight: 1.5,
                            padding: `${editorTopPaddingPx}px ${editorHorizontalPaddingPx}px ${editorTopPaddingPx}px ${editorGutterWidthPx + editorHorizontalPaddingPx}px`,
                            width: '100%',
                            height: `${getEditorBoxHeightPx(editableCode)}px`,
                            resize: 'none',
                            border: 'none',
                            outline: 'none',
                            zIndex: 3,
                            cursor: 'text',
                            whiteSpace: 'pre',
                            overflow: 'hidden',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                    ) : (
                      <pre
                        style={{
                          margin: 0,
                          background: '#1e1e1e',
                          fontFamily: 'JetBrains Mono',
                          fontSize: 13,
                          lineHeight: 1.5,
                          padding: '10px 12px',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                        }}
                      >
                        {renderHighlightedCode(editableCode, languageFromHeading(section.heading))}
                      </pre>
                    )}
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gap: 10,
                      marginTop: 6,
                    }}
                  >
                    <div style={{ display: 'grid', gap: 4 }}>
                      <p style={{ margin: 0, color: '#6b7280', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Input:
                      </p>
                      <div
                        style={{
                          borderRadius: 6,
                          border: '1px solid #e5e7eb',
                          background: '#ffffff',
                          padding: '10px 12px',
                        }}
                      >
                        <p style={{ margin: 0, color: '#111827', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: 14, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
                          {section.input}
                        </p>
                      </div>
                    </div>

                    {(compilingCodeKey === runtimeKey || runtimeOutputMap[runtimeKey]) && (
                      <div
                        style={{
                          background: 'rgba(0, 219, 231, 0.08)',
                          border: '2px solid #00dbe7',
                          borderRadius: 6,
                          padding: '16px',
                          marginTop: 12,
                        }}
                      >
                        {!runtimeOutputMap[runtimeKey] ? (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div
                              style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                background: '#10b981',
                                animation: 'spin 1.2s linear infinite',
                              }}
                            />
                            <p style={{ margin: 0, color: '#7dd3fc', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 600 }}>
                              ⚙️ Compiling Code...
                            </p>
                          </div>
                        ) : compilationErrorMap[runtimeKey] ? (
                          <div>
                            <p style={{ margin: '0 0 8px 0', color: '#f87171', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
                              ❌ Compilation Error
                            </p>
                            <pre
                              style={{
                                background: '#ffffff',
                                border: '2px solid #dc2626',
                                borderRadius: '4px',
                                padding: '10px',
                                color: '#dc2626',
                                fontSize: '12px',
                                margin: 0,
                                fontFamily: 'JetBrains Mono',
                                fontWeight: 600,
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                              }}
                            >
                              {runtimeOutputMap[runtimeKey]}
                            </pre>
                          </div>
                        ) : (
                          <div>
                            <p style={{ margin: '0 0 8px 0', color: '#86efac', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
                              ✅ Output
                            </p>
                            <pre
                              style={{
                                background: '#ffffff',
                                border: '2px solid #00dbe7',
                                borderRadius: '4px',
                                padding: '10px',
                                color: '#111827',
                                fontSize: '12px',
                                margin: 0,
                                fontFamily: 'JetBrains Mono',
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                minHeight: '40px',
                              }}
                            >
                              {runtimeOutputMap[runtimeKey]}
                            </pre>
                          </div>
                        )}
                      </div>
                    )}

                    <div style={{ display: 'grid', gap: 4, borderTop: '2px solid #00dbe7', paddingTop: 12, marginTop: 12 }}>
                      <p style={{ margin: 0, color: '#00dbe7', fontFamily: 'JetBrains Mono', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        ▶ Output
                      </p>
                      <div
                        style={{
                          borderRadius: 6,
                          border: '2px solid #00dbe7',
                          background: '#ffffff',
                          padding: '12px 14px',
                          minHeight: 60,
                        }}
                      >
                        <pre
                          style={{
                            margin: 0,
                            color: '#111827',
                            fontFamily: 'JetBrains Mono',
                            fontSize: 13,
                            lineHeight: 1.6,
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            overflowX: 'auto',
                            background: 'transparent',
                          }}
                        >
                          {(() => {
                            return (section.output || '').replace(/\\n/g, '\n');
                          })()}
                        </pre>
                      </div>
                    </div>
                  </div>
                      </>
                    );
                  })()}
                </div>
              ))}

              <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(58,73,75,0.35)' }}>
                <h3 style={{ margin: '0 0 12px', fontFamily: 'Space Grotesk', fontSize: 22, color: '#e3e1e9' }}>
                  Video
                </h3>
                <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(58,73,75,0.28)', background: '#000' }}>
                  <iframe
                    src="https://www.youtube.com/embed/0aHZXNc-gyQ"
                    title="Input and Output Video"
                    width="100%"
                    height="360"
                    style={{ border: 'none', display: 'block' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                  <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}>
                    <span style={{ fontWeight: 700 }}>Background Part 1 (IO Devices, CPU and Memory)</span>
                  </p>
                  <a
                    href="https://www.geeksforgeeks.org/courses/c-Programming-basic-to-advanced"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      background: '#00dbe7',
                      color: '#00363a',
                      fontWeight: 700,
                      padding: '8px 14px',
                      borderRadius: 8,
                      textDecoration: 'none',
                      fontSize: 14,
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
                    Visit Course
                  </a>
                </div>

                <div style={{ margin: '0 0 10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                    <a
                      href="https://www.geeksforgeeks.org/user/kadrun279n/"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                        textDecoration: 'none',
                      }}
                    >
                      <span
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 999,
                          background: 'rgba(0,219,231,0.16)',
                          border: '1px solid rgba(0,219,231,0.35)',
                          color: '#00dbe7',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'JetBrains Mono',
                          fontSize: 18,
                          fontWeight: 700,
                        }}
                      >
                        K
                      </span>
                      <span style={{ color: '#00dbe7', textDecoration: 'underline', fontSize: 20, fontWeight: 700 }}>kadrun279n</span>
                    </a>

                    <button
                      type="button"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        border: '1px solid rgba(0,219,231,0.35)',
                        background: 'rgba(0,219,231,0.1)',
                        color: '#00dbe7',
                        padding: '9px 12px',
                        borderRadius: 8,
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>thumb_up</span>
                      Like
                    </button>

                    <button
                      type="button"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        border: '1px solid rgba(0,219,231,0.35)',
                        background: 'rgba(0,219,231,0.1)',
                        color: '#00dbe7',
                        padding: '9px 12px',
                        borderRadius: 8,
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>build</span>
                      Improve
                    </button>
                  </div>

                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                    <input
                      type="text"
                      placeholder="Add your comment as kadrun279n..."
                      style={{
                        flex: '1 1 280px',
                        minWidth: 220,
                        border: '1px solid rgba(58,73,75,0.5)',
                        background: 'rgba(14,16,21,0.7)',
                        color: '#e3e1e9',
                        borderRadius: 8,
                        padding: '9px 11px',
                        fontSize: 14,
                        outline: 'none',
                      }}
                    />
                    <button
                      type="button"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(0,219,231,0.35)',
                        background: 'rgba(0,219,231,0.1)',
                        color: '#00dbe7',
                        padding: '8px 12px',
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Comment
                    </button>
                  </div>
                </div>

                <h3 style={{ margin: '0 0 10px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 24 }}>Explore</h3>
                <div style={{ display: 'grid', gap: 10 }}>
                  {getBottomOptions()[0].groups.map(group => (
                    <details
                      className="gfg-dropdown"
                      key={`io-explore-${group.heading}`}
                      onToggle={handleAccordionToggle}
                      style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}
                    >
                      <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                        <span>{group.heading}</span>
                        <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                      </summary>
                      <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                        {group.items.map(item => (
                          <li key={`io-${group.heading}-${item.label}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>

                <details className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                  <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                    <span>Courses</span>
                    <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                  </summary>
                  <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                    {getBottomOptions()[1].items.map(item => (
                      <li key={`io-courses-${item.label}`}>
                        <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          ) : activeLocalDoc === 'conditional-statements-page' ? (
            renderProgrammingDocPage({
              notes: CONDITIONAL_STATEMENTS_NOTES,
              docKey: 'conditional-statements-page',
              videoSrc: 'https://www.youtube.com/embed/HQ3dCWjfRZ4',
              videoTitle: 'Conditional Statements Video',
              videoOwner: {
                name: 'Bro Code',
                url: 'https://www.youtube.com/@BroCodez',
                hashtags: ['#ifelse', '#conditions', '#programming'],
              },
              courseTitle: 'Conditional Statements in Programming',
              courseUrl: 'https://www.geeksforgeeks.org/dsa/conditional-statements-in-programming/',
            })
          ) : activeLocalDoc === '__legacy-conditional-statements-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
                <h2 style={{ margin: 0, fontFamily: 'Space Grotesk', fontSize: 28, color: '#e3e1e9' }}>{CONDITIONAL_STATEMENTS_NOTES.title}</h2>
                <button
                  type="button"
                  onClick={() => {
                    setActiveLocalDoc('dsa-tutorial');
                    setActiveDsaSection('fundamentals');
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    background: 'rgba(0,219,231,0.12)',
                    border: '1px solid rgba(0,219,231,0.28)',
                    color: '#00dbe7',
                    borderRadius: 8,
                    padding: '8px 10px',
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
                  Back to DSA Tutorial
                </button>
              </div>

              <p style={{ margin: '0 0 6px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>
                Last Updated: {CONDITIONAL_STATEMENTS_NOTES.lastUpdated}
              </p>

              {CONDITIONAL_STATEMENTS_NOTES.intro.map((line, idx) => (
                <p key={`cond-intro-${idx}`} style={{ margin: '0 0 8px', color: '#e3e1e9', lineHeight: 1.7 }}>{line}</p>
              ))}

              <h3 style={{ margin: '16px 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 20 }}>Table of Content</h3>
              <ul style={{ margin: '0 0 12px 18px', color: '#00dbe7', lineHeight: 1.7 }}>
                {CONDITIONAL_STATEMENTS_NOTES.toc.map(item => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => {
                        const target = document.getElementById(toAnchorId(item));
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        padding: 0,
                        margin: 0,
                        color: '#00dbe7',
                        cursor: 'pointer',
                        textAlign: 'left',
                        textDecoration: 'underline',
                        font: 'inherit',
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>

              {CONDITIONAL_STATEMENTS_NOTES.sections.map(section => (
                <div className="codust-page-section" key={section.heading} style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                  {(() => {
                    const runtimeKey = sectionRuntimeKey('conditional-statements-page', section.heading);
                    const editableCode = editableCodeMap[runtimeKey] ?? section.code;
                    const isEditorMode = !!editorModeMap[runtimeKey];
                    const hasRuntimeOutput = !!runtimeOutputMap[runtimeKey];
                    const isCodeChangedSinceRun = lastRunCodeMap[runtimeKey] !== undefined && lastRunCodeMap[runtimeKey] !== editableCode;
                    return (
                      <>
                  <h3
                    id={toAnchorId(section.heading)}
                    style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22, scrollMarginTop: 120 }}
                  >
                    {section.heading}
                  </h3>
                  <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                    {section.bullets.map(b => (
                      <li key={`${section.heading}-${b}`}>{b}</li>
                    ))}
                  </ul>
                  <div style={{ margin: '0 0 10px', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                        background: 'rgba(8,11,18,0.95)',
                        borderBottom: '1px solid rgba(58,73,75,0.35)',
                        padding: '8px 10px',
                      }}
                    >
                      <span style={{ color: '#7dd3fc', fontFamily: 'JetBrains Mono', fontSize: 12, textTransform: 'uppercase' }}>
                        {languageFromHeading(section.heading)}
                      </span>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, position: 'relative', zIndex: 7 }}>
                        <button
                          type="button"
                          onClick={() => {
                            setEditorModeMap(prev => ({ ...prev, [runtimeKey]: !prev[runtimeKey] }));
                          }}
                          style={{
                            border: '1px solid rgba(0,219,231,0.35)',
                            borderRadius: 6,
                            background: isEditorMode ? 'rgba(0,219,231,0.2)' : 'rgba(0,219,231,0.08)',
                            color: '#00dbe7',
                            width: 30,
                            height: 28,
                            padding: 0,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'auto',
                            position: 'relative',
                            zIndex: 8,
                          }}
                          aria-label={isEditorMode ? 'Exit edit mode' : 'Editor mode'}
                          title={isEditorMode ? 'Exit edit mode' : 'Editor mode'}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{isEditorMode ? 'close' : 'edit_square'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (hasRuntimeOutput) {
                              clearRuntimeOutputByKey(runtimeKey);
                              return;
                            }
                            runEditableCode('conditional-statements-page', section);
                          }}
                          style={{
                            border: '1px solid rgba(0,219,231,0.35)',
                            borderRadius: 6,
                            background: 'rgba(0,219,231,0.08)',
                            color: '#00dbe7',
                            width: 30,
                            height: 28,
                            padding: 0,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'auto',
                            position: 'relative',
                            zIndex: 9,
                          }}
                          aria-label={hasRuntimeOutput ? 'Unrun code' : 'Run code'}
                          title={hasRuntimeOutput ? 'Unrun code' : 'Run code'}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 17 }}>{hasRuntimeOutput ? 'stop_circle' : 'play_arrow'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={async () => {
                            try {
                              await navigator.clipboard.writeText(editableCode);
                              setCopiedCodeKey(section.heading);
                              window.setTimeout(() => setCopiedCodeKey(''), 1200);
                            } catch {
                              setCopiedCodeKey('');
                            }
                          }}
                          style={{
                            border: '1px solid rgba(0,219,231,0.35)',
                            borderRadius: 6,
                            background: 'rgba(0,219,231,0.08)',
                            color: '#00dbe7',
                            width: 30,
                            height: 28,
                            padding: 0,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'auto',
                            position: 'relative',
                            zIndex: 8,
                          }}
                          aria-label="Copy code"
                          title="Copy code"
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                            {copiedCodeKey === section.heading ? 'check' : 'content_copy'}
                          </span>
                        </button>
                      </div>
                    </div>
                    {isEditorMode ? (
                      <div
                        style={{
                          position: 'relative',
                          background: '#1e1e1e',
                          height: `${getEditorBoxHeightPx(editableCode)}px`,
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: `${editorTopPaddingPx + ((editorActiveLineMap[runtimeKey] || 1) - 1) * editorLineHeightPx - (editorScrollTopMap[runtimeKey] || 0)}px`,
                            height: editorLineHeightPx,
                            background: '#2a2d2e',
                            borderTop: '1px solid rgba(42, 45, 46, 0.9)',
                            borderBottom: '1px solid rgba(42, 45, 46, 0.9)',
                            pointerEvents: 'none',
                            zIndex: 1,
                          }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: editorGutterWidthPx,
                            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                            background: 'rgba(255, 255, 255, 0.02)',
                            pointerEvents: 'none',
                            zIndex: 2,
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              transform: `translateY(-${editorScrollTopMap[runtimeKey] || 0}px)`,
                              padding: `${editorTopPaddingPx}px 6px`,
                              fontFamily: 'JetBrains Mono',
                              fontSize: 12,
                            }}
                          >
                            {renderEditorLineNumbers(runtimeKey, editableCode || ' ')}
                          </div>
                        </div>
                        <pre
                          style={{
                            margin: 0,
                            fontFamily: 'JetBrains Mono',
                            fontSize: 13,
                            lineHeight: 1.5,
                            padding: `${editorTopPaddingPx}px ${editorHorizontalPaddingPx}px ${editorTopPaddingPx}px ${editorGutterWidthPx + editorHorizontalPaddingPx}px`,
                            height: `${getEditorBoxHeightPx(editableCode)}px`,
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            pointerEvents: 'none',
                            color: '#d4d4d4',
                            position: 'relative',
                            zIndex: 2,
                            background: 'transparent',
                          }}
                        >
                          {renderHighlightedCode(editableCode || ' ', languageFromHeading(section.heading))}
                        </pre>
                        <textarea
                          value={editableCode}
                          onChange={e => {
                            const nextCode = e.target.value;
                            setEditableCodeMap(prev => ({ ...prev, [runtimeKey]: nextCode }));
                            syncEditorCursorState(runtimeKey, e.target);
                            if (hasRuntimeOutput || isCodeChangedSinceRun) {
                              clearRuntimeOutputByKey(runtimeKey);
                            }
                          }}
                          onClick={e => syncEditorCursorState(runtimeKey, e.target)}
                          onKeyUp={e => syncEditorCursorState(runtimeKey, e.target)}
                          onSelect={e => syncEditorCursorState(runtimeKey, e.target)}
                          onFocus={e => syncEditorCursorState(runtimeKey, e.target)}
                          onScroll={e => syncEditorCursorState(runtimeKey, e.target)}
                          spellCheck={false}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            margin: 0,
                            background: 'transparent',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent',
                            caretColor: '#d4d4d4',
                            fontFamily: 'JetBrains Mono',
                            fontSize: 13,
                            lineHeight: 1.5,
                            padding: `${editorTopPaddingPx}px ${editorHorizontalPaddingPx}px ${editorTopPaddingPx}px ${editorGutterWidthPx + editorHorizontalPaddingPx}px`,
                            width: '100%',
                            height: `${getEditorBoxHeightPx(editableCode)}px`,
                            resize: 'none',
                            border: 'none',
                            outline: 'none',
                            zIndex: 3,
                            cursor: 'text',
                            whiteSpace: 'pre',
                            overflow: 'hidden',
                            boxSizing: 'border-box',
                          }}
                        />
                      </div>
                    ) : (
                      <pre
                        style={{
                          margin: 0,
                          background: '#1e1e1e',
                          fontFamily: 'JetBrains Mono',
                          fontSize: 13,
                          lineHeight: 1.5,
                          padding: '10px 12px',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                        }}
                      >
                        {renderHighlightedCode(editableCode, languageFromHeading(section.heading))}
                      </pre>
                    )}
                  </div>
                  {(compilingCodeKey === runtimeKey || runtimeOutputMap[runtimeKey]) && (
                    <div
                      style={{
                        background: 'rgba(0, 219, 231, 0.08)',
                        border: '2px solid #00dbe7',
                        borderTop: 'none',
                        padding: '16px',
                        marginTop: 0,
                      }}
                    >
                      {!runtimeOutputMap[runtimeKey] ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div
                            style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                              background: '#10b981',
                              animation: 'spin 1.2s linear infinite',
                            }}
                          />
                          <p style={{ margin: 0, color: '#7dd3fc', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 600 }}>
                            ⚙️ Compiling Code...
                          </p>
                        </div>
                      ) : compilationErrorMap[runtimeKey] ? (
                        <div>
                          <p style={{ margin: '0 0 8px 0', color: '#f87171', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
                            ❌ Compilation Error
                          </p>
                          <pre
                            style={{
                              background: '#ffffff',
                              border: '2px solid #dc2626',
                              borderRadius: '4px',
                              padding: '10px',
                              color: '#dc2626',
                              fontSize: '12px',
                              margin: 0,
                              fontFamily: 'JetBrains Mono',
                              fontWeight: 600,
                              whiteSpace: 'pre-wrap',
                              wordBreak: 'break-word',
                            }}
                          >
                            {runtimeOutputMap[runtimeKey]}
                          </pre>
                        </div>
                      ) : (
                        <div>
                          <p style={{ margin: '0 0 8px 0', color: '#86efac', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' }}>
                            ✅ Output
                          </p>
                          <pre
                            style={{
                              background: '#ffffff',
                              border: '2px solid #00dbe7',
                              borderRadius: '4px',
                              padding: '10px',
                              color: '#111827',
                              fontSize: '12px',
                              margin: 0,
                              fontFamily: 'JetBrains Mono',
                              whiteSpace: 'pre-wrap',
                              wordBreak: 'break-word',
                              minHeight: '40px',
                            }}
                          >
                            {runtimeOutputMap[runtimeKey]}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}
                  <div style={{ display: 'grid', gap: 10, marginTop: 6 }}>
                    <div style={{ display: 'grid', gap: 4 }}>
                      <p style={{ margin: 0, color: '#6b7280', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        Input:
                      </p>
                      <div
                        style={{
                          borderRadius: 6,
                          border: '1px solid #e5e7eb',
                          background: '#ffffff',
                          padding: '10px 12px',
                        }}
                      >
                        <p style={{ margin: 0, color: '#111827', fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif', fontSize: 14, lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>
                          {section.input}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gap: 4, borderTop: '2px solid #00dbe7', paddingTop: 12, marginTop: 12 }}>
                      <p style={{ margin: 0, color: '#00dbe7', fontFamily: 'JetBrains Mono', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        ▶ Output
                      </p>
                      <div
                        style={{
                          borderRadius: 6,
                          border: '2px solid #00dbe7',
                          background: '#ffffff',
                          padding: '12px 14px',
                          minHeight: 60,
                        }}
                      >
                        <pre
                          style={{
                            margin: 0,
                            color: '#111827',
                            fontFamily: 'JetBrains Mono',
                            fontSize: 13,
                            lineHeight: 1.6,
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-word',
                            overflowX: 'auto',
                            background: 'transparent',
                          }}
                        >
                          {(() => {
                            return (section.output || '').replace(/\\n/g, '\n');
                          })()}
                        </pre>
                      </div>
                    </div>
                  </div>
                      </>
                    );
                  })()}
                </div>
              ))}

              <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(58,73,75,0.35)' }}>
                <h3 style={{ margin: '0 0 12px', fontFamily: 'Space Grotesk', fontSize: 22, color: '#e3e1e9' }}>
                  Video
                </h3>
                <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(58,73,75,0.28)', background: '#000' }}>
                  <iframe
                    src="https://www.youtube.com/embed/HQ3dCWjfRZ4"
                    title="Conditional Statements Video"
                    width="100%"
                    height="360"
                    style={{ border: 'none', display: 'block' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                <div style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                    <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}>
                      <span style={{ fontWeight: 700 }}>Conditional Statements in Programming</span>
                    </p>
                    <a
                      href="https://www.geeksforgeeks.org/dsa/conditional-statements-in-programming/"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        background: '#00dbe7',
                        color: '#00363a',
                        fontWeight: 700,
                        padding: '8px 14px',
                        borderRadius: 8,
                        textDecoration: 'none',
                        fontSize: 14,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
                      Visit Course
                    </a>
                  </div>

                  <div style={{ margin: '0 0 10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                      <a
                        href="https://www.geeksforgeeks.org/user/kadrun279n/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 10,
                          textDecoration: 'none',
                        }}
                      >
                        <span
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 999,
                            background: 'rgba(0,219,231,0.16)',
                            border: '1px solid rgba(0,219,231,0.35)',
                            color: '#00dbe7',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'JetBrains Mono',
                            fontSize: 18,
                            fontWeight: 700,
                          }}
                        >
                          K
                        </span>
                        <span style={{ color: '#00dbe7', textDecoration: 'underline', fontSize: 20, fontWeight: 700 }}>kadrun279n</span>
                      </a>

                      <button
                        type="button"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          border: '1px solid rgba(0,219,231,0.35)',
                          background: 'rgba(0,219,231,0.1)',
                          color: '#00dbe7',
                          padding: '9px 12px',
                          borderRadius: 8,
                          fontSize: 14,
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>thumb_up</span>
                        Like
                      </button>

                      <button
                        type="button"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          border: '1px solid rgba(0,219,231,0.35)',
                          background: 'rgba(0,219,231,0.1)',
                          color: '#00dbe7',
                          padding: '9px 12px',
                          borderRadius: 8,
                          fontSize: 14,
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>build</span>
                        Improve
                      </button>
                    </div>

                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                      <input
                        type="text"
                        placeholder="Add your comment as kadrun279n..."
                        style={{
                          flex: '1 1 280px',
                          minWidth: 220,
                          border: '1px solid rgba(58,73,75,0.5)',
                          background: 'rgba(14,16,21,0.7)',
                          color: '#e3e1e9',
                          borderRadius: 8,
                          padding: '9px 11px',
                          fontSize: 14,
                          outline: 'none',
                        }}
                      />
                      <button
                        type="button"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(0,219,231,0.35)',
                          background: 'rgba(0,219,231,0.1)',
                          color: '#00dbe7',
                          padding: '8px 12px',
                          borderRadius: 8,
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: 'pointer',
                        }}
                      >
                        Comment
                      </button>
                    </div>
                  </div>
                </div>

                <div data-dropdown-scope style={{ marginTop: 24, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                  <h3 style={{ margin: '0 0 10px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 24 }}>Explore</h3>
                  <div style={{ display: 'grid', gap: 10 }}>
                    {getBottomOptions()[0].groups.map(group => (
                      <details
                        className="gfg-dropdown"
                        key={`cond-explore-${group.heading}`}
                        onToggle={handleAccordionToggle}
                        style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}
                      >
                        <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                          <span>{group.heading}</span>
                          <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                        </summary>
                        <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                          {group.items.map(item => (
                            <li key={`cond-${group.heading}-${item.label}`}>
                              <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>

                  <details className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                    <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                      <span>Courses</span>
                      <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                    </summary>
                    <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                      {getBottomOptions()[1].items.map(item => (
                        <li key={`cond-courses-${item.label}`}>
                          <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            </div>
          ) : activeLocalDoc === 'for-loop-page' ? (
            renderProgrammingDocPage({
              notes: FOR_LOOP_NOTES,
              docKey: 'for-loop-page',
              videoSrc: 'https://www.youtube.com/embed/gOMW_n2-2Mw',
              videoTitle: 'Python lists, sets, and tuples explained 🍍',
              videoOwner: {
                name: 'Bro Code',
                url: 'https://www.youtube.com/@BroCodez',
                subscribers: '3.27M',
                hashtags: ['#course', '#python', '#tutorial'],
              },
              courseTitle: 'For Loop in Programming',
              courseUrl: 'https://www.geeksforgeeks.org/dsa/for-loop-in-programming/',
            })
          ) : activeLocalDoc === 'while-loop-page' ? (
            renderProgrammingDocPage({
              notes: WHILE_LOOP_NOTES,
              docKey: 'while-loop-page',
              videoSrc: 'https://www.youtube.com/embed/ZjHJrmYknrk',
              videoTitle: 'While Loop in Programming Video',
              courseTitle: 'While Loop in Programming',
              courseUrl: 'https://youtu.be/ZjHJrmYknrk',
            })
          ) : activeLocalDoc === 'function-page' ? (
            renderProgrammingDocPage({
              notes: FUNCTION_NOTES,
              docKey: 'function-page',
              videoSrc: 'https://www.youtube.com/embed/3JIZ40yuZL0',
              videoTitle: 'Functions in Programming Video',
              courseTitle: 'Functions in Programming',
              courseUrl: 'https://www.geeksforgeeks.org/dsa/functions-in-programming/',
            })
          ) : activeLocalDoc === 'classes-objects-page' ? (
            renderProgrammingDocPage({
              notes: CLASSES_OBJECTS_NOTES,
              docKey: 'classes-objects-page',
              videoSrc: 'https://www.youtube.com/embed/pTB0EiLXUC8',
              videoTitle: 'Classes and Objects in Programming Video',
              courseTitle: 'Classes and Objects in Programming',
              courseUrl: 'https://www.geeksforgeeks.org/dsa/class-and-object-for-data-structure/',
            })
          ) : activeLocalDoc === 'html-tutorial-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const docKey = 'html-tutorial-page';
                const html = HTML_TUTORIAL_CONTENT;
                const imageCount = Array.isArray(html.images) ? html.images.length : 0;
                const currentImageIndexRaw = docImageIndexMap[docKey] ?? 0;
                const currentImageIndex = imageCount > 0 ? ((currentImageIndexRaw % imageCount) + imageCount) % imageCount : 0;
                const videoSrc = html.video?.src || 'https://www.youtube.com/embed/0aHZXNc-gyQ';
                const videoTitle = html.video?.title || 'HTML Tutorial For Beginners';
                const courseTitle = html.video?.courseTitle || 'HTML Tutorial';
                const courseUrl = html.video?.courseUrl || 'https://www.geeksforgeeks.org/html/html-tutorial/';
                const isOpenedDocLink = (docKey) => Boolean(openedParagraphLinks[`local:${docKey}`]);
                const htmlSectionLinkStyle = (docKey) => ({
                  color: isOpenedDocLink(docKey) ? '#ff3b30' : '#00dbe7',
                  textDecoration: 'underline',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  margin: 0,
                  cursor: 'pointer',
                  font: 'inherit',
                });

                return (
                  <>
                    {renderDocTitleWithBack(html.title, { backDocKey: 'web-tutorial', backLabel: 'Back' })}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {html.lastUpdated}</p>

                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{html.intro}</p>
                    <ul style={{ margin: '0 0 14px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {html.bullets.map((bullet, idx) => (
                        <li key={`html-intro-b-${idx}`}>{renderTextWithBold(bullet)}</li>
                      ))}
                    </ul>

                    {imageCount > 0 ? (
                      <div style={{ margin: '10px 0 18px', maxWidth: 760 }}>
                        <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                          <div
                            style={{
                              display: 'flex',
                              width: `${imageCount * 100}%`,
                              transform: `translateX(-${currentImageIndex * (100 / imageCount)}%)`,
                              transition: 'transform 0.25s ease',
                            }}
                          >
                            {html.images.map((src, idx) => (
                              <div key={`html-image-${idx}`} style={{ width: `${100 / imageCount}%`, flexShrink: 0, background: '#111827' }}>
                                <img
                                  src={src}
                                  alt={`HTML tutorial visual ${idx + 1}`}
                                  loading={shouldPreloadCarouselImage(idx, currentImageIndex, imageCount) ? 'eager' : 'lazy'}
                                  fetchPriority={idx === currentImageIndex ? 'high' : 'auto'}
                                  decoding="async"
                                  onLoad={() => markImageLoaded(`html-image-${idx}`)}
                                  style={{
                                    width: '100%',
                                    display: 'block',
                                    opacity: loadedImageMap[`html-image-${idx}`] ? 1 : 0.12,
                                    transition: 'opacity 0.18s ease-out',
                                  }}
                                />
                              </div>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setDocImageIndexMap(prev => ({
                                ...prev,
                                [docKey]: ((prev[docKey] ?? 0) - 1 + imageCount) % imageCount,
                              }));
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'rgba(6,18,22,0.72)',
                              border: '1px solid rgba(0,219,231,0.45)',
                              color: '#00dbe7',
                              borderRadius: 999,
                              width: 44,
                              height: 44,
                              padding: 0,
                              cursor: 'pointer',
                              flexShrink: 0,
                              position: 'absolute',
                              left: 10,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              zIndex: 2,
                            }}
                            aria-label="Previous image"
                            title="Previous image"
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setDocImageIndexMap(prev => ({
                                ...prev,
                                [docKey]: ((prev[docKey] ?? 0) + 1) % imageCount,
                              }));
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'rgba(6,18,22,0.72)',
                              border: '1px solid rgba(0,219,231,0.45)',
                              color: '#00dbe7',
                              borderRadius: 999,
                              width: 44,
                              height: 44,
                              padding: 0,
                              cursor: 'pointer',
                              flexShrink: 0,
                              position: 'absolute',
                              right: 10,
                              top: '50%',
                              transform: 'translateY(-50%)',
                              zIndex: 2,
                            }}
                            aria-label="Next image"
                            title="Next image"
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span>
                          </button>

                          <span
                            style={{
                              position: 'absolute',
                              right: 10,
                              bottom: 8,
                              color: '#d7f6fa',
                              background: 'rgba(6,18,22,0.72)',
                              border: '1px solid rgba(125,245,255,0.35)',
                              borderRadius: 999,
                              padding: '2px 8px',
                              fontFamily: 'JetBrains Mono',
                              fontSize: 11,
                            }}
                          >
                            {currentImageIndex + 1}/{imageCount}
                          </span>
                        </div>
                      </div>
                    ) : null}

                    {html.sections.map((section, idx) => (
                      <div key={`html-section-${section.heading}`} className="codust-page-section" style={{ marginTop: idx === 0 ? 8 : 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                        <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{section.heading}</h3>
                        <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{section.description}</p>
                        <ul style={{ margin: '0 0 8px 18px', lineHeight: 1.7 }}>
                          {section.links.map((item, itemIdx) => (
                            <li key={`html-section-link-${idx}-${itemIdx}`}>
                              {item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-introduction' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-introduction-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-introduction-page');
                                    setActiveLocalDoc('html-introduction-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-introduction-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/what-is-html' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-features-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-features-page');
                                    setActiveLocalDoc('html-features-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-features-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-editors' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-editors-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-editors-page');
                                    setActiveLocalDoc('html-editors-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-editors-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-comments' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-comments-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-comments-page');
                                    setActiveLocalDoc('html-comments-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-comments-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-course-structure-of-an-html-document' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-structure-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-structure-page');
                                    setActiveLocalDoc('html-structure-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-structure-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-elements' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-elements-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-elements-page');
                                    setActiveLocalDoc('html-elements-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-elements-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-attributes' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-attributes-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-attributes-page');
                                    setActiveLocalDoc('html-attributes-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-attributes-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html5-semantic-tags' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-semantics-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-semantics-page');
                                    setActiveLocalDoc('html-semantics-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-semantics-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-entities' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-entities-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-entities-page');
                                    setActiveLocalDoc('html-entities-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-entities-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-symbols' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-symbols-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-symbols-page');
                                    setActiveLocalDoc('html-symbols-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-symbols-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/how-to-create-a-portfolio-website-using-html' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-simple-portfolio-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-simple-portfolio-page');
                                    setActiveLocalDoc('html-simple-portfolio-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-simple-portfolio-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/design-an-event-web-page-using-html-css' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-event-webpage-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-event-webpage-page');
                                    setActiveLocalDoc('html-event-webpage-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-event-webpage-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-projects' || item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/css/top-10-projects-for-beginners-to-practice-html-and-css-skills' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-beginner-projects-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-beginner-projects-page');
                                    setActiveLocalDoc('html-beginner-projects-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-beginner-projects-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html-projects' || item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-project-ideas-for-beginners' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-project-ideas-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-project-ideas-page');
                                    setActiveLocalDoc('html-project-ideas-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-project-ideas-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-tags-a-to-z-list' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-tags-atoz-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-tags-atoz-page');
                                    setActiveLocalDoc('html-tags-atoz-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-tags-atoz-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-tables' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-tables-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-tables-page');
                                    setActiveLocalDoc('html-tables-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-tables-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-tr-tag' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-tr-tag-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-tr-tag-page');
                                    setActiveLocalDoc('html-tr-tag-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-tr-tag-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-th-tag' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-th-tag-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-th-tag-page');
                                    setActiveLocalDoc('html-th-tag-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-th-tag-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-td-tag' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-td-tag-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-td-tag-page');
                                    setActiveLocalDoc('html-td-tag-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-td-tag-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-caption-tag' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-caption-tag-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-caption-tag-page');
                                    setActiveLocalDoc('html-caption-tag-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-caption-tag-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-colgroup-tag' || item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-col-tag' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-group-columns-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-group-columns-page');
                                    setActiveLocalDoc('html-group-columns-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-group-columns-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-lists' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-lists-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-lists-page');
                                    setActiveLocalDoc('html-lists-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-lists-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-ol-tag' || item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-ordered-lists' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-ordered-lists-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-ordered-lists-page');
                                    setActiveLocalDoc('html-ordered-lists-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-ordered-lists-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-ul-tag' || item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-unordered-lists' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-unordered-lists-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-unordered-lists-page');
                                    setActiveLocalDoc('html-unordered-lists-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-unordered-lists-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-description-list' || item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-description-lists' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-description-lists-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-description-lists-page');
                                    setActiveLocalDoc('html-description-lists-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-description-lists-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-i-tag' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-i-tag-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-i-tag-page');
                                    setActiveLocalDoc('html-i-tag-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-i-tag-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-small-tag' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-small-tag-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-small-tag-page');
                                    setActiveLocalDoc('html-small-tag-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-small-tag-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-ins-tag' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-ins-tag-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-ins-tag-page');
                                    setActiveLocalDoc('html-ins-tag-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-ins-tag-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-sub-tag' || item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/css/html-sub-tag' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-sub-tag-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-sub-tag-page');
                                    setActiveLocalDoc('html-sub-tag-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-sub-tag-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-strong-tag' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-strong-tag-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-strong-tag-page');
                                    setActiveLocalDoc('html-strong-tag-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-strong-tag-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/html-b-tag' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-b-tag-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-b-tag-page');
                                    setActiveLocalDoc('html-b-tag-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-b-tag-page')}
                                >
                                  {item.label}
                                </button>
                              ) : item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/most-commonly-used-tags-in-html' || item.url.replace(/\/+$/, '') === 'https://www.geeksforgeeks.org/html/basic-html-tags' ? (
                                <button
                                  className={`codust-paragraph-link-btn${isOpenedDocLink('html-common-tags-page') ? ' is-active' : ''}`}
                                  type="button"
                                  onClick={() => {
                                    markParagraphLinkOpened('local:html-common-tags-page');
                                    setActiveLocalDoc('html-common-tags-page');
                                  }}
                                  style={htmlSectionLinkStyle('html-common-tags-page')}
                                >
                                  {item.label}
                                </button>
                              ) : (
                                <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                                  {item.label}
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>References</h3>
                      <ul style={{ margin: '0 0 8px 18px', lineHeight: 1.7 }}>
                        {html.references.map((item, idx) => (
                          <li key={`html-ref-${idx}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Interesting Facts</h3>
                      <ul style={{ margin: '0 0 8px 18px', lineHeight: 1.7 }}>
                        {html.interestingFacts.map((item, idx) => (
                          <li key={`html-fact-${idx}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>HTML Interview Questions</h3>
                      <ul style={{ margin: '0 0 8px 18px', lineHeight: 1.7 }}>
                        {html.interview.map((item, idx) => (
                          <li key={`html-interview-${idx}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>HTML Cheat Sheet</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>
                        HTML Cheat Sheet is a simple and quick reference list of basic HTML elements and attributes that provides ready-to-use snippets.
                      </p>
                      <a className="gfg-dropdown-link" href="https://www.geeksforgeeks.org/html/html-cheat-sheet-a-basic-guide-to-html/" target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                        Open HTML Cheat Sheet
                      </a>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>HTML Intermediate Projects</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>
                        Creating simple HTML projects like portfolio and login pages helps you learn faster and build confidence.
                      </p>
                      <ul style={{ margin: '0 0 8px 18px', lineHeight: 1.7 }}>
                        {html.projects.map((item, idx) => (
                          <li key={`html-project-${idx}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Approach to Learn HTML</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>
                        You can complete this HTML tutorial in approximately 4 weeks if you dedicate consistent time and effort.
                      </p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {html.roadmap.map((item, idx) => <li key={`html-roadmap-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>
                        By the end of 4 weeks, you will be confident in HTML and ready to move on to CSS and JavaScript.
                      </p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Importance of HTML</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {html.importance.map((item, idx) => <li key={`html-importance-${idx}`}>{item}</li>)}
                      </ul>
                    </div>

                    <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(58,73,75,0.35)' }}>
                      <h3 style={{ margin: '0 0 12px', fontFamily: 'Space Grotesk', fontSize: 22, color: '#e3e1e9' }}>Video</h3>
                      <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(58,73,75,0.28)', background: '#000' }}>
                        <iframe
                          src={videoSrc}
                          title={videoTitle}
                          width="100%"
                          height="360"
                          style={{ border: 'none', display: 'block' }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}>
                          <span style={{ fontWeight: 700 }}>{courseTitle}</span>
                        </p>
                        <a
                          href={courseUrl}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            background: '#00dbe7',
                            color: '#00363a',
                            fontWeight: 700,
                            padding: '8px 14px',
                            borderRadius: 8,
                            textDecoration: 'none',
                            fontSize: 14,
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
                          Visit Course
                        </a>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                          <a
                            href={html.video.author.url}
                            target="_blank"
                            rel="noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
                          >
                            <span
                              style={{
                                width: 44,
                                height: 44,
                                borderRadius: 999,
                                background: 'rgba(0,219,231,0.16)',
                                border: '1px solid rgba(0,219,231,0.35)',
                                color: '#00dbe7',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'JetBrains Mono',
                                fontSize: 18,
                                fontWeight: 700,
                              }}
                            >
                              {html.video.author.initial}
                            </span>
                            <span style={{ color: '#00dbe7', textDecoration: 'underline', fontSize: 20, fontWeight: 700 }}>{html.video.author.name}</span>
                          </a>
                        </div>
                        <p style={{ margin: '4px 0 8px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Article Tags</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {html.video.tags.map((tag, idx) => (
                            <span
                              key={`html-tags-${idx}`}
                              style={{
                                border: '1px solid rgba(0,219,231,0.35)',
                                borderRadius: 999,
                                padding: '4px 10px',
                                color: '#00dbe7',
                                fontSize: 12,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 style={{ margin: '0 0 10px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 24 }}>Explore</h3>
                      <div style={{ display: 'grid', gap: 10 }}>
                        {html.explore[0].groups.map((group, idx) => (
                          <details
                            className="gfg-dropdown"
                            key={`html-explore-${idx}`}
                            onToggle={handleAccordionToggle}
                            style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}
                          >
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                              <span>{group.heading}</span>
                              <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                            </summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {group.items.map((item, itemIdx) => (
                                <li key={`html-exp-${idx}-${itemIdx}`}>
                                  <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                                    {item.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </details>
                        ))}
                      </div>

                      <details className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                        <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                          <span>{html.explore[1].heading}</span>
                          <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                        </summary>
                        <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                          {html.explore[1].items.map((item, idx) => (
                            <li key={`html-course-${idx}`}>
                              <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-tables-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_TABLES_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-tables-bullet-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Basic Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.basicExampleNotes.map((item, idx) => <li key={`html-tables-basic-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>HTML Table Tags</h3>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)', width: '20%' }}>Tag</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.tags.map((row, idx) => (
                              <tr key={`html-tables-tag-${idx}`}>
                                <td style={{ padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.18)', fontFamily: 'JetBrains Mono', fontSize: 13 }}>{row.tag}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.18)' }}>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Books Table Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.booksExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.booksExampleNotes.map((item, idx) => <li key={`html-tables-books-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    {page.stylingExamples.map((example, idx) => (
                      <div key={`html-tables-styling-${idx}`} className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                        <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{example.title}</h3>
                        <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(example.description)}</p>
                        {example.syntax ? <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto', fontSize: 13 }}><code>{example.syntax}</code></pre> : null}
                        <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{example.code}</code></pre>
                        <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(example.note)}</p>
                      </div>
                    ))}

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-tables-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-tables-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-tables-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-tables-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-tr-tag-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_TR_TAG_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.primaryCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.primaryNotes.map((item, idx) => <li key={`html-tr-primary-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto', fontSize: 13 }}><code>{page.syntax}</code></pre>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.note)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.attributesTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.attributesDescription)}</p>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)', width: '24%' }}>Attribute</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.attributes.map((row, idx) => (
                              <tr key={`html-tr-attr-${idx}`}>
                                <td style={{ padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.18)', fontFamily: 'JetBrains Mono', fontSize: 13 }}>{row.name}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.18)' }}>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.75 }}><strong style={{ color: '#e3e1e9' }}>Note:</strong> {page.deprecatedNote}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.exampleTitle}</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.exampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.exampleNotes.map((item, idx) => <li key={`html-tr-example-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-tr-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-tr-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-tr-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-tr-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-th-tag-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_TH_TAG_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.highlights.map((item, idx) => <li key={`html-th-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Basic Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.primaryCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.primaryNotes.map((item, idx) => <li key={`html-th-primary-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto', fontSize: 13 }}><code>{page.syntax}</code></pre>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.note)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.html5AttributesTitle}</h3>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)', width: '24%' }}>Attribute</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.html5Attributes.map((row, idx) => (
                              <tr key={`html-th-html5-attr-${idx}`}>
                                <td style={{ padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.18)', fontFamily: 'JetBrains Mono', fontSize: 13 }}>{row.name}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.18)' }}>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.removedAttributesTitle}</h3>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)', width: '24%' }}>Attribute</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.removedAttributes.map((row, idx) => (
                              <tr key={`html-th-removed-attr-${idx}`}>
                                <td style={{ padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.18)', fontFamily: 'JetBrains Mono', fontSize: 13 }}>{row.name}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.18)' }}>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.exampleOneTitle}</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.exampleOneCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.exampleOneNotes.map((item, idx) => <li key={`html-th-example1-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.exampleTwoTitle}</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.exampleTwoCode}</code></pre>
                      <ul style={{ margin: '0 0 8px', paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.exampleTwoNotes.map((item, idx) => <li key={`html-th-example2-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                      <p style={{ margin: '0 0 8px', color: '#e3e1e9', fontWeight: 700 }}>Output:</p>
                      <div style={{ borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden', maxWidth: 760 }}>
                        <img src={page.outputImage} alt="HTML th tag output" style={{ display: 'block', width: '100%', height: 'auto' }} />
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-th-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-th-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-th-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-th-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-td-tag-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_TD_TAG_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.highlights.map((item, idx) => <li key={`html-td-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Basic Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.primaryCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.primaryNotes.map((item, idx) => <li key={`html-td-primary-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto', fontSize: 13 }}><code>{page.syntax}</code></pre>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.note)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.cellTypesTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.cellTypesIntro)}</p>
                      {page.cellTypes.map((type, idx) => (
                        <div key={`html-td-cell-type-${idx}`} style={{ marginTop: idx === 0 ? 0 : 12 }}>
                          <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{type.heading}</p>
                          <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                            {type.points.map((item, itemIdx) => <li key={`html-td-cell-type-point-${idx}-${itemIdx}`}>{renderTextWithBold(item)}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.html5AttributesTitle}</h3>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)', width: '24%' }}>Attribute</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.html5Attributes.map((row, idx) => (
                              <tr key={`html-td-html5-attr-${idx}`}>
                                <td style={{ padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.18)', fontFamily: 'JetBrains Mono', fontSize: 13 }}>{row.name}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.18)' }}>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.removedAttributesTitle}</h3>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)', width: '24%' }}>Attribute</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.removedAttributes.map((row, idx) => (
                              <tr key={`html-td-removed-attr-${idx}`}>
                                <td style={{ padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.18)', fontFamily: 'JetBrains Mono', fontSize: 13 }}>{row.name}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.18)' }}>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.examplesTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.examplesIntro)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.exampleOneTitle}</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.exampleOneCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.exampleOneNotes.map((item, idx) => <li key={`html-td-example1-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.exampleTwoTitle}</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.exampleTwoCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.exampleTwoNotes.map((item, idx) => <li key={`html-td-example2-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-td-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-td-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-td-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-td-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-caption-tag-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_CAPTION_TAG_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.highlights.map((item, idx) => <li key={`html-caption-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto', fontSize: 13 }}><code>{page.syntax}</code></pre>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.note)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Basic Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.basicExampleNotes.map((item, idx) => <li key={`html-caption-basic-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Styled Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.styledExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.styledExampleNotes.map((item, idx) => <li key={`html-caption-styled-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Practices</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.bestPractices.map((item, idx) => <li key={`html-caption-best-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-caption-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-caption-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-caption-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-caption-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-group-columns-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_GROUP_COLUMNS_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.highlights.map((item, idx) => <li key={`html-colgroup-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto', fontSize: 13 }}><code>{page.syntax}</code></pre>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.note)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Basic Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.basicExampleNotes.map((item, idx) => <li key={`html-colgroup-basic-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Span Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.spanExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.spanExampleNotes.map((item, idx) => <li key={`html-colgroup-span-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Practices</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.bestPractices.map((item, idx) => <li key={`html-colgroup-best-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-colgroup-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-colgroup-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-colgroup-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-colgroup-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-lists-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_LISTS_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.highlights.map((item, idx) => <li key={`html-lists-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto', fontSize: 13 }}><code>{page.syntax}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Basic Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.basicExampleNotes.map((item, idx) => <li key={`html-lists-basic-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Nested List Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.nestedExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.nestedExampleNotes.map((item, idx) => <li key={`html-lists-nested-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Practices</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.bestPractices.map((item, idx) => <li key={`html-lists-best-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-lists-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-lists-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-lists-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-lists-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-b-tag-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_B_TAG_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.highlights.map((item, idx) => <li key={`html-b-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>
                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Basic Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicExampleCode}</code></pre>
                      <p style={{ margin: '0 0 4px', color: '#e3e1e9', fontWeight: 700 }}>Output:</p>
                      <pre style={{ margin: 0, background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicOutput}</code></pre>
                    </div>
                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.cssHeading}</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.cssExampleCode}</code></pre>
                      <p style={{ margin: '0 0 4px', color: '#e3e1e9', fontWeight: 700 }}>Output:</p>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.cssOutput}</code></pre>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.7 }}>
                        {renderTextWithBold(page.cssNote)}{' '}
                        <a className="gfg-dropdown-link" href={page.cssLink} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>font-weight property</a>
                      </p>
                    </div>
                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-b-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>
                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-b-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-b-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-b-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-strong-tag-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_STRONG_TAG_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.highlights.map((item, idx) => <li key={`html-strong-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>
                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicExampleCode}</code></pre>
                    </div>
                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: 0, background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.syntax}</code></pre>
                    </div>
                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Note</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{renderTextWithBold(page.note)}</p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        <li><a className="gfg-dropdown-link" href={page.noteLinks.globalAttributes} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>Global Attributes</a></li>
                        <li><a className="gfg-dropdown-link" href={page.noteLinks.eventAttributes} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>Event Attributes</a></li>
                      </ul>
                    </div>
                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-strong-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>
                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-strong-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-strong-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-strong-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-sub-tag-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_SUB_TAG_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <pre style={{ margin: '0 0 10px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicExampleCode}</code></pre>
                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: 0, background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.syntax}</code></pre>
                    </div>
                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Highlights</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.highlights.map((item, idx) => <li key={`html-sub-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>
                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Examples</h3>
                      <div style={{ display: 'grid', gap: 12 }}>
                        {page.examples.map((example, idx) => (
                          <div key={`html-sub-example-${idx}`} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', background: 'rgba(14,16,21,0.45)' }}>
                            <p style={{ margin: '0 0 8px', color: '#e3e1e9', fontWeight: 700 }}>{example.title}</p>
                            <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{renderTextWithBold(example.description)}</p>
                            <pre style={{ margin: 0, background: 'rgba(9,11,15,0.75)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 10px', color: '#d7f6fa', overflowX: 'auto' }}><code>{example.code}</code></pre>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-sub-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>
                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-sub-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-sub-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-sub-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-ins-tag-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_INS_TAG_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.highlights.map((item, idx) => <li key={`html-ins-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: 0, background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.syntax}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.attributesHeading}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{renderTextWithBold(page.attributesIntro)}</p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.attributes.map((item, idx) => <li key={`html-ins-attr-${idx}`}><strong>{item.name}: </strong>{renderTextWithBold(item.description)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.workingHeading}</h3>
                      <div style={{ display: 'grid', gap: 12 }}>
                        {page.examples.map((example, idx) => (
                          <div key={`html-ins-example-${idx}`} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', background: 'rgba(14,16,21,0.45)' }}>
                            <p style={{ margin: '0 0 8px', color: '#e3e1e9', fontWeight: 700 }}>{example.title}</p>
                            <pre style={{ margin: '0 0 8px', background: 'rgba(9,11,15,0.75)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 10px', color: '#d7f6fa', overflowX: 'auto' }}><code>{example.code}</code></pre>
                            <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.7 }}>{renderTextWithBold(example.note)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-ins-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-ins-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-ins-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-ins-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-small-tag-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_SMALL_TAG_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.highlights.map((item, idx) => <li key={`html-small-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Basic Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicExampleCode}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: 0, background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.syntax}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Notes</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.importantNotes.map((item, idx) => <li key={`html-small-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.workingHeading}</h3>
                      <h4 style={{ margin: '0 0 8px', color: '#d7f6fa', fontFamily: 'Space Grotesk', fontSize: 18 }}>{page.nestedHeading}</h4>
                      <p style={{ margin: '0 0 10px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.nestedDescription)}</p>
                      <div style={{ display: 'grid', gap: 12 }}>
                        {page.nestedExamples.map((example, idx) => (
                          <div key={`html-small-nested-${idx}`} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', background: 'rgba(14,16,21,0.45)' }}>
                            <p style={{ margin: '0 0 8px', color: '#e3e1e9', fontWeight: 700 }}>{example.title}</p>
                            <pre style={{ margin: '0 0 8px', background: 'rgba(9,11,15,0.75)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 10px', color: '#d7f6fa', overflowX: 'auto' }}><code>{example.code}</code></pre>
                            <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.7 }}>{renderTextWithBold(example.note)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h4 style={{ margin: '0 0 8px', color: '#d7f6fa', fontFamily: 'Space Grotesk', fontSize: 18 }}>{page.nonNestedHeading}</h4>
                      <p style={{ margin: '0 0 10px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.nonNestedDescription)}</p>
                      <div style={{ display: 'grid', gap: 12 }}>
                        {page.nonNestedExamples.map((example, idx) => (
                          <div key={`html-small-nonnested-${idx}`} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', background: 'rgba(14,16,21,0.45)' }}>
                            <p style={{ margin: '0 0 8px', color: '#e3e1e9', fontWeight: 700 }}>{example.title}</p>
                            <pre style={{ margin: '0 0 8px', background: 'rgba(9,11,15,0.75)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 10px', color: '#d7f6fa', overflowX: 'auto' }}><code>{example.code}</code></pre>
                            <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.7 }}>{renderTextWithBold(example.note)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.cssHeading}</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.cssExampleCode}</code></pre>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.7 }}>{renderTextWithBold(page.cssExampleNote)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-small-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-small-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-small-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-small-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-i-tag-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_ITALIC_TAG_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.highlights.map((item, idx) => <li key={`html-i-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto', fontSize: 13 }}><code>{page.syntax}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Basic Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.basicExampleNotes.map((item, idx) => <li key={`html-i-basic-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>i vs em</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.semanticComparisonCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.semanticComparisonNotes.map((item, idx) => <li key={`html-i-compare-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>CSS Alternative</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.cssExampleCode}</code></pre>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.7 }}>{renderTextWithBold(page.cssExampleNote)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Practices</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.bestPractices.map((item, idx) => <li key={`html-i-best-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-i-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-i-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-i-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-i-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-description-lists-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_DESCRIPTION_LISTS_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.highlights.map((item, idx) => <li key={`html-dl-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto', fontSize: 13 }}><code>{page.syntax}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Basic Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.basicExampleNotes.map((item, idx) => <li key={`html-dl-basic-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Multiple Descriptions per Term</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.multiDescriptionCode}</code></pre>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.7 }}>{renderTextWithBold(page.multiDescriptionNote)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Nested Content in Description Lists</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.nestedExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.nestedExampleNotes.map((item, idx) => <li key={`html-dl-nested-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Practices</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.bestPractices.map((item, idx) => <li key={`html-dl-best-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-dl-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-dl-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-dl-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-dl-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-ordered-lists-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_ORDERED_LISTS_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.highlights.map((item, idx) => <li key={`html-ol-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto', fontSize: 13 }}><code>{page.syntax}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Basic Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.basicExampleNotes.map((item, idx) => <li key={`html-ol-basic-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Type Attribute Examples</h3>
                      <div style={{ display: 'grid', gap: 12 }}>
                        {page.typeExamples.map((example, idx) => (
                          <div key={`html-ol-type-${idx}`} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', background: 'rgba(14,16,21,0.45)' }}>
                            <p style={{ margin: '0 0 8px', color: '#e3e1e9', fontWeight: 700 }}>{example.heading}</p>
                            <pre style={{ margin: '0 0 8px', background: 'rgba(9,11,15,0.75)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 10px', color: '#d7f6fa', overflowX: 'auto' }}><code>{example.code}</code></pre>
                            <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.7 }}>{renderTextWithBold(example.note)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Reversed Ordered List</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.reverseExampleCode}</code></pre>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.7 }}>{renderTextWithBold(page.reverseExampleNote)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Control Counting (start)</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.startExampleCode}</code></pre>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.7 }}>{renderTextWithBold(page.startExampleNote)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Nested Ordered Lists</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.nestedExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.nestedExampleNotes.map((item, idx) => <li key={`html-ol-nested-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Practices</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.bestPractices.map((item, idx) => <li key={`html-ol-best-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-ol-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-ol-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-ol-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-ol-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-unordered-lists-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_UNORDERED_LISTS_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.highlights.map((item, idx) => <li key={`html-ul-highlight-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.6)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 12px', color: '#d7f6fa', overflowX: 'auto', fontSize: 13 }}><code>{page.syntax}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Basic Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.basicExampleNotes.map((item, idx) => <li key={`html-ul-basic-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Bullet Types</h3>
                      <div style={{ display: 'grid', gap: 12 }}>
                        {page.bulletStyleExamples.map((example, idx) => (
                          <div key={`html-ul-bullet-${idx}`} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', background: 'rgba(14,16,21,0.45)' }}>
                            <p style={{ margin: '0 0 8px', color: '#e3e1e9', fontWeight: 700 }}>{example.heading}</p>
                            <pre style={{ margin: '0 0 8px', background: 'rgba(9,11,15,0.75)', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, padding: '8px 10px', color: '#d7f6fa', overflowX: 'auto' }}><code>{example.code}</code></pre>
                            <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.7 }}>{renderTextWithBold(example.note)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Nested Unordered List</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.nestedExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.nestedExampleNotes.map((item, idx) => <li key={`html-ul-nested-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Practices</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.bestPractices.map((item, idx) => <li key={`html-ul-best-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-ul-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-ul-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-ul-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-ul-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'dsa-tutorial' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              <div id="dsa-doc-content" style={{ fontFamily: 'Geist', fontSize: 16 }}>
                {renderDsaContent()}
                  <h3 style={{ margin: '0 0 12px', fontFamily: 'Space Grotesk', fontSize: 22, color: '#e3e1e9' }}>
                    Tutorial
                  </h3>
                  <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(58,73,75,0.28)', background: '#000' }}>
                    <iframe
                      src="https://www.youtube.com/embed/8hly31xKli0"
                      title="DSA Videos"
                      width="100%"
                      height="360"
                      style={{ border: 'none', display: 'block' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                  {(() => {
                    const docKey = 'dsa-tutorial';
                    const videoSrc = 'https://www.youtube.com/embed/8hly31xKli0';
                    const notesTitle = 'DSA Tutorial (Learn Data Structures and Algorithms)';
                    const courseUrl = 'https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/';
                    const deriveWatchUrl = (src) => {
                      if (!src) return '';
                      if (src.includes('youtube.com/embed/')) {
                        const id = src.split('youtube.com/embed/')[1]?.split('?')[0];
                        return id ? `https://www.youtube.com/watch?v=${id}` : src;
                      }
                      if (src.includes('youtu.be/')) {
                        const id = src.split('youtu.be/')[1]?.split('?')[0];
                        return id ? `https://www.youtube.com/watch?v=${id}` : src;
                      }
                      return src;
                    };
                    const youtubeStats = youtubeStatsMap[docKey];
                    const ownerName = youtubeStats?.channelTitle || 'Video Creator';
                    const ownerUrl = youtubeStats?.channelId
                      ? `https://www.youtube.com/channel/${youtubeStats.channelId}`
                      : deriveWatchUrl(videoSrc);
                    const ownerInitial = ownerName.charAt(0).toUpperCase();
                    const ownerHandle = ownerUrl.includes('@') ? ownerUrl.split('@')[1].split('/')[0] : '';
                    const ownerAvatarUrl = ownerHandle
                      ? `https://unavatar.io/youtube/${ownerHandle}`
                      : (youtubeStats?.channelId ? `https://unavatar.io/youtube/${youtubeStats.channelId}` : '');
                    const engagement = engagementMap[docKey] || { likes: 0, comments: 0, subscribed: false, liked: false, views: 0 };
                    const draftComment = commentDraftMap[docKey] || '';
                    const socialNotice = socialNoticeMap[docKey] || '';
                    const sanitizeSocialNotice = (message) => {
                      const text = `${message || ''}`;
                      const lower = text.toLowerCase();
                      if (lower.includes('access blocked') || lower.includes('authorization error')) {
                        return 'Please sign in to your YouTube account to like this video.';
                      }
                      return text;
                    };
                    const showSocialNotice = (message, duration = 3000) => {
                      const nextMessage = sanitizeSocialNotice(message);
                      setSocialNoticeMap(prev => ({ ...prev, [docKey]: nextMessage }));
                      if (duration > 0) {
                        window.setTimeout(() => {
                          setSocialNoticeMap(prev => {
                            if (prev[docKey] !== nextMessage) return prev;
                            const next = { ...prev };
                            delete next[docKey];
                            return next;
                          });
                        }, duration);
                      }
                    };
                    const showPendingNotice = (message) => showSocialNotice(message, 0);
                    const displayTags = Array.isArray(youtubeStats?.tags) && youtubeStats.tags.length > 0
                      ? youtubeStats.tags.map(tag => (tag.startsWith('#') ? tag : `#${tag}`))
                      : ['#dsa', '#algorithms', '#tutorial'];
                    const youtubeLiked = (youtubeRatingMap[docKey] || 'none') === 'like';
                    const youtubeSubscribed = youtubeSubscriptionMap[docKey]?.subscribed ?? engagement.subscribed;
                    const effectiveLiked = youtubeWriteEnabled ? youtubeLiked : !!engagement.liked;
                    const effectiveSubscribed = youtubeWriteEnabled ? youtubeSubscribed : !!engagement.subscribed;
                    const displayedLikeCount = (youtubeStats?.likeCount ?? 0) + (effectiveLiked ? 1 : 0);
                    const displayedCommentCount = (youtubeStats?.commentCount ?? 0) + (engagement.comments || 0);
                    const displayedSubscriberCount = (youtubeStats?.subscriberCount ?? 0) + (effectiveSubscribed ? 1 : 0);
                    const displayedViewCount = (youtubeStats?.viewCount ?? 0) + (!youtubeWriteEnabled ? (engagement.views || 0) : 0);
                    const moreTutorialUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${notesTitle} tutorial`)}`;

                    return (
                      <>
                        <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 18, fontWeight: 700, lineHeight: 1.4 }}>
                          {youtubeStats?.title || 'DSA Tutorial Video'}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 12 }}>
                          {youtubeStats?.viewCount ? (
                            <span style={{ color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>
                              {Number(displayedViewCount).toLocaleString()} views
                            </span>
                          ) : null}
                          {displayTags.map(tag => (
                            <span key={tag} style={{ color: '#00dbe7', fontFamily: 'JetBrains Mono', fontSize: 12 }}>{tag}</span>
                          ))}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
                          <span style={{
                            width: 44, height: 44, borderRadius: 999,
                            background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)',
                            color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                            overflow: 'hidden', fontFamily: 'JetBrains Mono', fontSize: 18, fontWeight: 700, flexShrink: 0,
                          }}>
                            {ownerAvatarUrl ? (
                              <img src={ownerAvatarUrl} alt={`${ownerName} profile`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : ownerInitial}
                          </span>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <a href={ownerUrl} target="_blank" rel="noreferrer" style={{ color: '#e3e1e9', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                              {ownerName}
                            </a>
                            {(youtubeStats?.subscriberCount) ? (
                              <span style={{ color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>
                                {Number(displayedSubscriberCount).toLocaleString()} subscribers
                              </span>
                            ) : null}
                          </div>

                          <button
                            type="button"
                            onClick={async () => {
                              if (!youtubeWriteEnabled) {
                                const nextSubscribed = !effectiveSubscribed;
                                setEngagementMap(prev => ({
                                  ...prev,
                                  [docKey]: { ...(prev[docKey] || { likes: 0, comments: 0, subscribed: false, liked: false, views: 0 }), subscribed: nextSubscribed },
                                }));
                                showSocialNotice(nextSubscribed ? 'Subscribed locally (no account needed)' : 'Unsubscribed locally');
                                return;
                              }
                              try {
                                if (!youtubeStats?.channelId) {
                                  showSocialNotice('Channel info not ready. Please try again.', 3000);
                                  return;
                                }
                                const nextSubscribed = !effectiveSubscribed;
                                showPendingNotice('⏳ Opening Google sign-in...');
                                await setYouTubeSubscription({ docKey, channelId: youtubeStats.channelId, subscribe: nextSubscribed });
                                await fetchYoutubeStats(videoSrc, docKey, { forceRefresh: true });
                                showSocialNotice(nextSubscribed ? '✓ Subscribed on YouTube!' : '✓ Unsubscribed on YouTube!', 3000);
                              } catch (error) {
                                if (isYouTubeWriteAuthError(error)) {
                                  showSocialNotice('Please sign in to your YouTube account to subscribe.', 3000);
                                  return;
                                }
                                showSocialNotice('Unable to update subscription right now. Please try again after signing in.', 3000);
                              }
                            }}
                            style={{
                              display: 'inline-flex', alignItems: 'center', gap: 6,
                              border: 'none',
                              background: effectiveSubscribed ? 'rgba(0,219,231,0.18)' : '#e3e1e9',
                              color: effectiveSubscribed ? '#00dbe7' : '#0d0e13',
                              padding: '8px 18px', borderRadius: 999,
                              fontSize: 14, fontWeight: 700, cursor: 'pointer',
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                              {effectiveSubscribed ? 'notifications_active' : 'notifications'}
                            </span>
                            {effectiveSubscribed ? 'Subscribed' : 'Subscribe'}
                          </button>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
                          <button
                            type="button"
                            onClick={async () => {
                              if (!youtubeWriteEnabled) {
                                const nextLiked = !effectiveLiked;
                                setEngagementMap(prev => ({
                                  ...prev,
                                  [docKey]: { ...(prev[docKey] || { likes: 0, comments: 0, subscribed: false, liked: false, views: 0 }), liked: nextLiked },
                                }));
                                showSocialNotice(nextLiked ? 'Liked locally (no account needed)' : 'Unliked locally');
                                return;
                              }
                              try {
                                showPendingNotice('⏳ Opening Google sign-in...');
                                const currentRating = await getMyVideoRating(videoSrc);
                                const nextRating = currentRating === 'like' ? 'none' : 'like';
                                await setYouTubeVideoRating(videoSrc, nextRating);
                                setYoutubeRatingMap(prev => ({ ...prev, [docKey]: nextRating }));
                                await fetchYoutubeStats(videoSrc, docKey, { forceRefresh: true });
                                showSocialNotice(nextRating === 'like' ? '✓ Liked on YouTube!' : '✓ Unliked on YouTube!', 3000);
                              } catch (error) {
                                if (isYouTubeWriteAuthError(error)) {
                                  showSocialNotice('Please sign in to your YouTube account to like this video.', 3000);
                                  return;
                                }
                                showSocialNotice('Unable to update like right now. Please try again after signing in.', 3000);
                              }
                            }}
                            style={{
                              display: 'inline-flex', alignItems: 'center', gap: 6,
                              border: '1px solid rgba(0,219,231,0.35)',
                              background: effectiveLiked ? 'rgba(0,219,231,0.22)' : 'rgba(0,219,231,0.08)',
                              color: '#00dbe7', padding: '8px 14px', borderRadius: 999,
                              fontSize: 14, fontWeight: 700, cursor: 'pointer',
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>thumb_up</span>
                            {effectiveLiked ? `Liked · ${displayedLikeCount.toLocaleString()}` : `Like · ${displayedLikeCount.toLocaleString()}`}
                          </button>

                          <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 6,
                            border: '1px solid rgba(58,73,75,0.5)',
                            background: 'rgba(14,16,21,0.5)',
                            color: '#849495', padding: '8px 14px', borderRadius: 999,
                            fontSize: 14, fontWeight: 600,
                          }}>
                            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat_bubble_outline</span>
                            {displayedCommentCount.toLocaleString()} Comments
                          </div>

                          <a
                            href={moreTutorialUrl}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: 'inline-flex', alignItems: 'center', gap: 6,
                              border: '1px solid rgba(0,219,231,0.35)',
                              background: 'rgba(0,219,231,0.1)', color: '#00dbe7',
                              padding: '8px 14px', borderRadius: 999,
                              fontSize: 14, fontWeight: 700, textDecoration: 'none',
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>smart_display</span>
                            More Tutorial
                          </a>

                          {/* Save Video */}
                          {(() => {
                            const dsaVideoId = extractYouTubeVideoId(videoSrc);
                            const dsaWatchUrl = dsaVideoId ? `https://www.youtube.com/watch?v=${dsaVideoId}` : videoSrc;
                            const dsaSaveId = `dsa-tutorial:${dsaVideoId}`;
                            const isDsaSaved = savedVideos.some(v => v.id === dsaSaveId);
                            const toggleDsaSave = () => {
                              if (isDsaSaved) {
                                setSavedVideos(prev => prev.filter(v => v.id !== dsaSaveId));
                              } else {
                                const dsaStats = youtubeStatsMap['dsa-tutorial'];
                                setSavedVideos(prev => [...prev, {
                                  id: dsaSaveId,
                                  docKey: 'dsa-tutorial',
                                  videoId: dsaVideoId,
                                  watchUrl: dsaWatchUrl,
                                  title: dsaStats?.title || 'DSA Tutorial Video',
                                  channelName: ownerName,
                                  topicTitle: 'DSA Tutorial',
                                  savedAt: Date.now(),
                                }]);
                              }
                            };
                            return (
                              <button
                                type="button"
                                onClick={toggleDsaSave}
                                style={{
                                  display: 'inline-flex', alignItems: 'center', gap: 6,
                                  border: `1px solid ${isDsaSaved ? 'rgba(0,219,231,0.55)' : 'rgba(0,219,231,0.35)'}`,
                                  background: isDsaSaved ? 'rgba(0,219,231,0.2)' : 'rgba(0,219,231,0.08)',
                                  color: '#00dbe7', padding: '8px 14px', borderRadius: 999,
                                  fontSize: 14, fontWeight: 700, cursor: 'pointer',
                                }}
                              >
                                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{isDsaSaved ? 'bookmark_added' : 'bookmark_add'}</span>
                                {isDsaSaved ? 'Saved' : 'Save Video'}
                              </button>
                            );
                          })()}

                          <a href={courseUrl} target="_blank" rel="noreferrer"
                            style={{
                              display: 'inline-flex', alignItems: 'center', gap: 6,
                              border: '1px solid rgba(0,219,231,0.35)',
                              background: '#00dbe7', color: '#00363a',
                              padding: '8px 14px', borderRadius: 999,
                              fontSize: 14, fontWeight: 700, textDecoration: 'none',
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
                            Visit Course
                          </a>
                        </div>

                        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', marginBottom: 6 }}>
                          <input
                            type="text"
                            placeholder="Add a comment..."
                            value={draftComment}
                            onChange={(e) => setCommentDraftMap(prev => ({ ...prev, [docKey]: e.target.value }))}
                            style={{
                              flex: '1 1 280px', minWidth: 220,
                              border: '1px solid rgba(58,73,75,0.5)',
                              background: 'rgba(14,16,21,0.7)', color: '#e3e1e9',
                              borderRadius: 8, padding: '9px 11px', fontSize: 14, outline: 'none',
                            }}
                          />
                          <button
                            type="button"
                            onClick={async () => {
                              const text = (draftComment || '').trim();
                              if (!text) { showSocialNotice('Type a comment first'); return; }
                              setCommentDraftMap(prev => ({ ...prev, [docKey]: '' }));
                              if (!youtubeWriteEnabled) {
                                setEngagementMap(prev => ({
                                  ...prev,
                                  [docKey]: {
                                    ...(prev[docKey] || { likes: 0, comments: 0, subscribed: false, liked: false, views: 0 }),
                                    comments: (prev[docKey]?.comments || 0) + 1,
                                  },
                                }));
                                showSocialNotice('Comment added locally (no account needed)');
                                return;
                              }
                              showPendingNotice('⏳ Opening Google sign-in...');
                              try {
                                await postCommentToYouTube({ videoSrc, text });
                                setEngagementMap(prev => ({
                                  ...prev,
                                  [docKey]: {
                                    ...(prev[docKey] || { likes: 0, comments: 0, subscribed: false, liked: false, views: 0 }),
                                    comments: (prev[docKey]?.comments || 0) + 1,
                                  },
                                }));
                                await fetchYoutubeStats(videoSrc, docKey, { forceRefresh: true });
                                showSocialNotice('✓ Comment posted to YouTube!', 3000);
                              } catch (error) {
                                if (isYouTubeWriteAuthError(error)) {
                                  showSocialNotice('Please sign in to your YouTube account to comment.', 3000);
                                  return;
                                }
                                showSocialNotice('Unable to post comment right now. Please try again after signing in.', 3000);
                              }
                            }}
                            style={{
                              display: 'inline-flex', alignItems: 'center', gap: 6,
                              border: '1px solid rgba(0,219,231,0.35)',
                              background: 'rgba(0,219,231,0.1)', color: '#00dbe7',
                              padding: '8px 14px', borderRadius: 8,
                              fontSize: 13, fontWeight: 600, cursor: 'pointer',
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>send</span>
                            Comment
                          </button>
                        </div>

                        {socialNotice ? (
                          <p style={{ margin: '6px 0 0', color: socialNotice.startsWith('✗') ? '#ff6b6b' : '#74f5ff', fontFamily: 'JetBrains Mono', fontSize: 13, fontWeight: 600, padding: '8px 12px', background: socialNotice.startsWith('✗') ? 'rgba(255,107,107,0.08)' : 'rgba(0,219,231,0.08)', borderRadius: 8, border: `1px solid ${socialNotice.startsWith('✗') ? 'rgba(255,107,107,0.25)' : 'rgba(0,219,231,0.2)'}` }}>
                            {socialNotice}
                          </p>
                        ) : null}
                      </>
                    );
                  })()}
                </div>

                <div data-dropdown-scope style={{ marginTop: 24, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                  <h3 style={{ margin: '0 0 10px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 24 }}>Explore</h3>
                  <div style={{ display: 'grid', gap: 10 }}>
                    {getBottomOptions()[0].groups.map(group => (
                      <details
                        className="gfg-dropdown"
                        key={`dsa-explore-${group.heading}`}
                        onToggle={handleAccordionToggle}
                        style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}
                      >
                        <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                          <span>{group.heading}</span>
                          <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                        </summary>
                        <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                          {group.items.map(item => (
                            <li key={`dsa-${group.heading}-${item.label}`}>
                              <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>

                  <details className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                    <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                      <span>Courses</span>
                      <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                    </summary>
                    <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                      {getBottomOptions()[1].items.map(item => (
                        <li key={`dsa-courses-${item.label}`}>
                          <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
          ) : activeLocalDoc === 'css-tutorial-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const docKey = 'css-tutorial-page';
                const css = CSS_TUTORIAL_CONTENT;
                const imageCount = Array.isArray(css.images) ? css.images.length : 0;
                const currentImageIndexRaw = docImageIndexMap[docKey] ?? 0;
                const currentImageIndex = imageCount > 0 ? ((currentImageIndexRaw % imageCount) + imageCount) % imageCount : 0;
                const videoSrc = css.video?.src || 'https://www.youtube.com/embed/1Rs2ND1ryYc';
                const videoTitle = css.video?.title || 'CSS Tutorial For Beginners';
                const courseTitle = css.video?.courseTitle || css.title;
                const courseUrl = css.video?.courseUrl || css.courseUrl || 'https://www.geeksforgeeks.org/css/css-tutorial/';

                return (
                  <>
                    {renderDocTitleWithBack(css.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {css.lastUpdated}</p>

                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{css.intro}</p>
                    <ul style={{ margin: '0 0 14px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {css.bullets.map((bullet, idx) => (
                        <li key={`css-intro-b-${idx}`}>{renderTextWithBold(bullet)}</li>
                      ))}
                    </ul>

                    {imageCount > 0 ? (
                      <div style={{ margin: '10px 0 18px', maxWidth: 760 }}>
                        <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                          <div style={{ display: 'flex', width: `${imageCount * 100}%`, transform: `translateX(-${currentImageIndex * (100 / imageCount)}%)`, transition: 'transform 0.25s ease' }}>
                            {css.images.map((src, idx) => (
                              <div key={`css-image-${idx}`} style={{ width: `${100 / imageCount}%`, flexShrink: 0, background: '#111827' }}>
                                <img
                                  src={src}
                                  alt={`CSS tutorial visual ${idx + 1}`}
                                  loading={shouldPreloadCarouselImage(idx, currentImageIndex, imageCount) ? 'eager' : 'lazy'}
                                  fetchPriority={idx === currentImageIndex ? 'high' : 'auto'}
                                  decoding="async"
                                  onLoad={() => markImageLoaded(`css-image-${idx}`)}
                                  style={{ width: '100%', display: 'block', opacity: loadedImageMap[`css-image-${idx}`] ? 1 : 0.12, transition: 'opacity 0.18s ease-out' }}
                                />
                              </div>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) - 1 + imageCount) % imageCount }));
                            }}
                            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}
                            aria-label="Previous image"
                            title="Previous image"
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) + 1) % imageCount }));
                            }}
                            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }}
                            aria-label="Next image"
                            title="Next image"
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span>
                          </button>

                          <span style={{ position: 'absolute', right: 10, bottom: 8, color: '#d7f6fa', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(125,245,255,0.35)', borderRadius: 999, padding: '2px 8px', fontFamily: 'JetBrains Mono', fontSize: 11 }}>
                            {currentImageIndex + 1}/{imageCount}
                          </span>
                        </div>
                      </div>
                    ) : null}

                    {css.sections.map((section, idx) => (
                      <div key={`css-section-${section.heading}`} className="codust-page-section" style={{ marginTop: idx === 0 ? 8 : 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                        <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{section.heading}</h3>
                        <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{section.description}</p>
                        <ul style={{ margin: '0 0 8px 18px', lineHeight: 1.7 }}>
                          {section.links.map((item, itemIdx) => (
                            <li key={`css-section-link-${idx}-${itemIdx}`}>
                              <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Interview Questions</h3>
                      <ul style={{ margin: '0 0 8px 18px', lineHeight: 1.7 }}>
                        {css.interview.map((item, idx) => (
                          <li key={`css-interview-${idx}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Frameworks</h3>
                      <ul style={{ margin: '0 0 8px 18px', lineHeight: 1.7 }}>
                        {css.frameworks.map((item, idx) => (
                          <li key={`css-framework-${idx}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Preprocessors</h3>
                      <ul style={{ margin: '0 0 8px 18px', lineHeight: 1.7 }}>
                        {css.preprocessors.map((item, idx) => (
                          <li key={`css-pre-${idx}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Approach to Learn CSS</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {css.roadmap.map((item, idx) => <li key={`css-roadmap-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Importance of CSS</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {css.importance.map((item, idx) => <li key={`css-importance-${idx}`}>{item}</li>)}
                      </ul>
                    </div>

                    <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(58,73,75,0.35)' }}>
                      <h3 style={{ margin: '0 0 12px', fontFamily: 'Space Grotesk', fontSize: 22, color: '#e3e1e9' }}>Video</h3>
                      <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(58,73,75,0.28)', background: '#000' }}>
                        <iframe
                          src={videoSrc}
                          title={videoTitle}
                          width="100%"
                          height="360"
                          style={{ border: 'none', display: 'block' }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{courseTitle}</span></p>
                        <a href={courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}>
                          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
                          Visit Course
                        </a>
                      </div>

                      {css.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`css-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`css-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                                  <span>{group.heading}</span>
                                  <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                                </summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => (
                                    <li key={`css-explore-item-${group.heading}-${item.label}`}>
                                      <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a>
                                    </li>
                                  ))}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`css-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                              <span>{section.heading}</span>
                              <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                            </summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => (
                                <li key={`css-explore-leaf-item-${section.heading}-${item.label}`}>
                                  <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a>
                                </li>
                              ))}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'javascript-tutorial-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const docKey = 'javascript-tutorial-page';
                const js = JAVASCRIPT_TUTORIAL_CONTENT;
                const imageCount = Array.isArray(js.images) ? js.images.length : 0;
                const currentImageIndexRaw = docImageIndexMap[docKey] ?? 0;
                const currentImageIndex = imageCount > 0 ? ((currentImageIndexRaw % imageCount) + imageCount) % imageCount : 0;
                const videoSrc = 'https://www.youtube.com/embed/W6NZfCO5SIk';
                const videoTitle = 'JavaScript Tutorial For Beginners';

                return (
                  <>
                    {renderDocTitleWithBack(js.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {js.lastUpdated}</p>

                    <p style={{ margin: '0 0 8px', color: '#e3e1e9', lineHeight: 1.75 }}>{js.intro}</p>
                    <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}><strong>Client Side:</strong> {js.clientSide}</p>
                    <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}><strong>Server Side:</strong> {js.serverSide}</p>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Reasons to Learn JavaScript</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {js.reasons.map((item, idx) => <li key={`js-reason-${idx}`}>{item}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>JavaScript Hello World Program</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{js.helloWorld.description}</p>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#e3e1e9', overflowX: 'auto' }}>
                        <code>{js.helloWorld.code}</code>
                      </pre>
                      <p style={{ margin: '0 0 4px', color: '#7df5ff', fontWeight: 700 }}>Output</p>
                      <p style={{ margin: '0 0 8px', color: '#e3e1e9' }}>{js.helloWorld.output}</p>
                      <p style={{ margin: 0, color: '#b9cacb' }}>{js.helloWorld.note}</p>
                    </div>

                    {imageCount > 0 ? (
                      <div style={{ margin: '14px 0 18px', maxWidth: 760 }}>
                        <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                          <div style={{ display: 'flex', width: `${imageCount * 100}%`, transform: `translateX(-${currentImageIndex * (100 / imageCount)}%)`, transition: 'transform 0.25s ease' }}>
                            {js.images.map((src, idx) => (
                              <div key={`js-image-${idx}`} style={{ width: `${100 / imageCount}%`, flexShrink: 0, background: '#111827' }}>
                                <img
                                  src={src}
                                  alt={`JavaScript tutorial visual ${idx + 1}`}
                                  loading={shouldPreloadCarouselImage(idx, currentImageIndex, imageCount) ? 'eager' : 'lazy'}
                                  fetchPriority={idx === currentImageIndex ? 'high' : 'auto'}
                                  decoding="async"
                                  onLoad={() => markImageLoaded(`js-image-${idx}`)}
                                  style={{ width: '100%', display: 'block', opacity: loadedImageMap[`js-image-${idx}`] ? 1 : 0.12, transition: 'opacity 0.18s ease-out' }}
                                />
                              </div>
                            ))}
                          </div>

                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) - 1 + imageCount) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Previous image" title="Previous image">
                            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span>
                          </button>
                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) + 1) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Next image" title="Next image">
                            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span>
                          </button>
                          <span style={{ position: 'absolute', right: 10, bottom: 8, color: '#d7f6fa', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(125,245,255,0.35)', borderRadius: 999, padding: '2px 8px', fontFamily: 'JetBrains Mono', fontSize: 11 }}>{currentImageIndex + 1}/{imageCount}</span>
                        </div>
                      </div>
                    ) : null}

                    {js.sections.map((section, idx) => (
                      <div key={`js-section-${section.heading}-${idx}`} className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                        <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{section.heading}</h3>
                        <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                          {section.items.map((item, itemIdx) => <li key={`js-section-item-${idx}-${itemIdx}`}>{item}</li>)}
                        </ul>
                        {Array.isArray(section.extra) && section.extra.length > 0 ? (
                          <>
                            <p style={{ margin: '0 0 6px', color: '#b9cacb', lineHeight: 1.7 }}>Additional:</p>
                            <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                              {section.extra.map((item, extraIdx) => <li key={`js-section-extra-${idx}-${extraIdx}`}>{item}</li>)}
                            </ul>
                          </>
                        ) : null}
                        {section.note ? <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(section.note)}</p> : null}
                      </div>
                    ))}

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Libraries and Frameworks</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{js.librariesFrameworks.intro}</p>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>Libraries</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        <li><strong>Frontend Libraries:</strong> {js.librariesFrameworks.libraries.frontend.join(', ')}</li>
                        <li><strong>Backend Libraries:</strong> {js.librariesFrameworks.libraries.backend.join(', ')}</li>
                      </ul>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>Frameworks</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        <li><strong>Frontend Frameworks:</strong> {js.librariesFrameworks.frameworks.frontend.join(', ')}</li>
                        <li><strong>Backend Frameworks:</strong> {js.librariesFrameworks.frameworks.backend.join(', ')}</li>
                        <li><strong>FullStack Frameworks:</strong> {js.librariesFrameworks.frameworks.fullstack.join(', ')}</li>
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Applications of JavaScript</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {js.applications.map((item, idx) => <li key={`js-app-${idx}`}>{item}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Important Links</h3>
                      <ul style={{ margin: '0 0 8px 18px', lineHeight: 1.7 }}>
                        {js.importantLinks.map((item, idx) => (
                          <li key={`js-important-${idx}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(58,73,75,0.35)' }}>
                      <h3 style={{ margin: '0 0 12px', fontFamily: 'Space Grotesk', fontSize: 22, color: '#e3e1e9' }}>Video</h3>
                      <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(58,73,75,0.28)', background: '#000' }}>
                        <iframe src={videoSrc} title={videoTitle} width="100%" height="360" style={{ border: 'none', display: 'block' }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                      </div>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{js.title}</span></p>
                        <a href={js.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}>
                          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
                          Visit Course
                        </a>
                      </div>

                      <div style={{ margin: '0 0 10px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {js.articleTags.map(tag => (
                          <span key={`js-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {js.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`js-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`js-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                                  <span>{group.heading}</span>
                                  <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                                </summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => (
                                    <li key={`js-explore-item-${group.heading}-${item.label}`}>
                                      <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a>
                                    </li>
                                  ))}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`js-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}>
                              <span>{section.heading}</span>
                              <span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span>
                            </summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => (
                                <li key={`js-explore-leaf-item-${section.heading}-${item.label}`}>
                                  <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a>
                                </li>
                              ))}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-introduction-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const docKey = 'html-introduction-page';
                const intro = HTML_INTRODUCTION_CONTENT;
                const imageCount = Array.isArray(intro.images) ? intro.images.length : 0;
                const currentImageIndexRaw = docImageIndexMap[docKey] ?? 0;
                const currentImageIndex = imageCount > 0 ? ((currentImageIndexRaw % imageCount) + imageCount) % imageCount : 0;

                return (
                  <>
                    {renderDocTitleWithBack(intro.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {intro.lastUpdated}</p>

                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(intro.intro)}</p>
                    <ul style={{ margin: '0 0 12px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {intro.bullets.map((item, idx) => <li key={`html-intro-page-b-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <pre style={{ margin: '0 0 10px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}>
                      <code>{intro.code}</code>
                    </pre>
                    <p style={{ margin: '0 0 12px', color: '#b9cacb', lineHeight: 1.75 }}>{intro.outputNote}</p>

                    {imageCount > 0 ? (
                      <div style={{ margin: '10px 0 18px', maxWidth: 760 }}>
                        <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                          <div style={{ display: 'flex', width: `${imageCount * 100}%`, transform: `translateX(-${currentImageIndex * (100 / imageCount)}%)`, transition: 'transform 0.25s ease' }}>
                            {intro.images.map((src, idx) => (
                              <div key={`html-intro-image-${idx}`} style={{ width: `${100 / imageCount}%`, flexShrink: 0, background: '#111827' }}>
                                <img src={src} alt={`HTML introduction visual ${idx + 1}`} loading={shouldPreloadCarouselImage(idx, currentImageIndex, imageCount) ? 'eager' : 'lazy'} fetchPriority={idx === currentImageIndex ? 'high' : 'auto'} decoding="async" onLoad={() => markImageLoaded(`html-intro-image-${idx}`)} style={{ width: '100%', display: 'block', opacity: loadedImageMap[`html-intro-image-${idx}`] ? 1 : 0.12, transition: 'opacity 0.18s ease-out' }} />
                              </div>
                            ))}
                          </div>

                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) - 1 + imageCount) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Previous image" title="Previous image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span></button>
                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) + 1) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Next image" title="Next image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span></button>
                          <span style={{ position: 'absolute', right: 10, bottom: 8, color: '#d7f6fa', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(125,245,255,0.35)', borderRadius: 999, padding: '2px 8px', fontFamily: 'JetBrains Mono', fontSize: 11 }}>{currentImageIndex + 1}/{imageCount}</span>
                        </div>
                      </div>
                    ) : null}

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{intro.workingTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(intro.workingDescription)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Also Check</h3>
                      <ul style={{ margin: '0 0 8px 18px', lineHeight: 1.7 }}>
                        {intro.alsoCheck.map((item, idx) => (
                          <li key={`html-intro-check-${idx}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Suggested Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#7df5ff', fontWeight: 700 }}>{intro.quiz.total}</p>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{intro.quiz.question}</p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>{intro.quiz.options.map((item, idx) => <li key={`html-intro-quiz-opt-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{intro.title}</span></p>
                        <a href={intro.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={intro.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{intro.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{intro.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {intro.articleTags.map(tag => <span key={`html-intro-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {intro.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`html-intro-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`html-intro-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`html-intro-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`html-intro-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`html-intro-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-features-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const docKey = 'html-features-page';
                const page = HTML_FEATURES_CONTENT;
                const imageCount = Array.isArray(page.images) ? page.images.length : 0;
                const currentImageIndexRaw = docImageIndexMap[docKey] ?? 0;
                const currentImageIndex = imageCount > 0 ? ((currentImageIndexRaw % imageCount) + imageCount) % imageCount : 0;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 12px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-features-b-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    {imageCount > 0 ? (
                      <div style={{ margin: '10px 0 18px', maxWidth: 760 }}>
                        <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                          <div style={{ display: 'flex', width: `${imageCount * 100}%`, transform: `translateX(-${currentImageIndex * (100 / imageCount)}%)`, transition: 'transform 0.25s ease' }}>
                            {page.images.map((src, idx) => (
                              <div key={`html-features-image-${idx}`} style={{ width: `${100 / imageCount}%`, flexShrink: 0, background: '#111827' }}>
                                <img src={src} alt={`HTML features visual ${idx + 1}`} loading={shouldPreloadCarouselImage(idx, currentImageIndex, imageCount) ? 'eager' : 'lazy'} fetchPriority={idx === currentImageIndex ? 'high' : 'auto'} decoding="async" onLoad={() => markImageLoaded(`html-features-image-${idx}`)} style={{ width: '100%', display: 'block', opacity: loadedImageMap[`html-features-image-${idx}`] ? 1 : 0.12, transition: 'opacity 0.18s ease-out' }} />
                              </div>
                            ))}
                          </div>

                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) - 1 + imageCount) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Previous image" title="Previous image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span></button>
                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) + 1) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Next image" title="Next image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span></button>
                          <span style={{ position: 'absolute', right: 10, bottom: 8, color: '#d7f6fa', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(125,245,255,0.35)', borderRadius: 999, padding: '2px 8px', fontFamily: 'JetBrains Mono', fontSize: 11 }}>{currentImageIndex + 1}/{imageCount}</span>
                        </div>
                      </div>
                    ) : null}

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Features of HTML</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.featuresIntro)}</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.keyFeatures.map((item, idx) => <li key={`html-feature-item-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Applications of HTML</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.applicationsIntro)}</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.applications.map((item, idx) => <li key={`html-app-item-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>HTML History</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.historyIntro)}</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.history.map((item, idx) => <li key={`html-history-item-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Suggested Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#7df5ff', fontWeight: 700 }}>{page.quiz.total}</p>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{page.quiz.question}</p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>{page.quiz.options.map((item, idx) => <li key={`html-features-quiz-opt-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-features-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`html-features-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`html-features-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`html-features-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`html-features-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`html-features-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-editors-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const docKey = 'html-editors-page';
                const page = HTML_EDITORS_CONTENT;
                const imageCount = Array.isArray(page.images) ? page.images.length : 0;
                const currentImageIndexRaw = docImageIndexMap[docKey] ?? 0;
                const currentImageIndex = imageCount > 0 ? ((currentImageIndexRaw % imageCount) + imageCount) % imageCount : 0;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>

                    <div className="codust-page-section" style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Types of HTML Editors</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.editorTypes.map((item, idx) => <li key={`html-editors-type-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                      <p style={{ margin: '10px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.introToList}</p>
                    </div>

                    {imageCount > 0 ? (
                      <div style={{ margin: '10px 0 18px', maxWidth: 760 }}>
                        <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                          <div style={{ display: 'flex', width: `${imageCount * 100}%`, transform: `translateX(-${currentImageIndex * (100 / imageCount)}%)`, transition: 'transform 0.25s ease' }}>
                            {page.images.map((src, idx) => (
                              <div key={`html-editors-image-${idx}`} style={{ width: `${100 / imageCount}%`, flexShrink: 0, background: '#111827' }}>
                                <img src={src} alt={`HTML editors visual ${idx + 1}`} loading={shouldPreloadCarouselImage(idx, currentImageIndex, imageCount) ? 'eager' : 'lazy'} fetchPriority={idx === currentImageIndex ? 'high' : 'auto'} decoding="async" onLoad={() => markImageLoaded(`html-editors-image-${idx}`)} style={{ width: '100%', display: 'block', opacity: loadedImageMap[`html-editors-image-${idx}`] ? 1 : 0.12, transition: 'opacity 0.18s ease-out' }} />
                              </div>
                            ))}
                          </div>

                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) - 1 + imageCount) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Previous image" title="Previous image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span></button>
                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) + 1) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Next image" title="Next image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span></button>
                          <span style={{ position: 'absolute', right: 10, bottom: 8, color: '#d7f6fa', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(125,245,255,0.35)', borderRadius: 999, padding: '2px 8px', fontFamily: 'JetBrains Mono', fontSize: 11 }}>{currentImageIndex + 1}/{imageCount}</span>
                        </div>
                      </div>
                    ) : null}

                    {page.editors.map((editor, idx) => (
                      <div key={`html-editor-card-${editor.name}`} className="codust-page-section" style={{ marginTop: idx === 0 ? 12 : 16, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                        <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{idx + 1}. {editor.name}</h3>
                        <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(editor.description)}</p>
                        <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                          {editor.steps.map((step, stepIdx) => <li key={`html-editor-step-${idx}-${stepIdx}`}>{renderTextWithBold(step)}</li>)}
                        </ul>
                      </div>
                    ))}

                    <div className="codust-page-section" style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 10px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>HTML Editors Comparison</h3>
                      <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 860 }}>
                          <thead>
                            <tr>
                              <th style={{ textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid rgba(58,73,75,0.35)', color: '#d7f6fa' }}>Editor</th>
                              <th style={{ textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid rgba(58,73,75,0.35)', color: '#d7f6fa' }}>Platform</th>
                              <th style={{ textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid rgba(58,73,75,0.35)', color: '#d7f6fa' }}>Key Features</th>
                              <th style={{ textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid rgba(58,73,75,0.35)', color: '#d7f6fa' }}>Ideal For</th>
                              <th style={{ textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid rgba(58,73,75,0.35)', color: '#d7f6fa' }}>Pros</th>
                              <th style={{ textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid rgba(58,73,75,0.35)', color: '#d7f6fa' }}>Cons</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.comparison.map((row, idx) => (
                              <tr key={`html-editors-compare-${row.editor}-${idx}`}>
                                <td style={{ padding: '8px 10px', borderBottom: '1px solid rgba(58,73,75,0.2)', color: '#e3e1e9' }}>{row.editor}</td>
                                <td style={{ padding: '8px 10px', borderBottom: '1px solid rgba(58,73,75,0.2)', color: '#b9cacb' }}>{row.platform}</td>
                                <td style={{ padding: '8px 10px', borderBottom: '1px solid rgba(58,73,75,0.2)', color: '#b9cacb' }}>{row.keyFeatures}</td>
                                <td style={{ padding: '8px 10px', borderBottom: '1px solid rgba(58,73,75,0.2)', color: '#b9cacb' }}>{row.idealFor}</td>
                                <td style={{ padding: '8px 10px', borderBottom: '1px solid rgba(58,73,75,0.2)', color: '#b9cacb' }}>{row.pros}</td>
                                <td style={{ padding: '8px 10px', borderBottom: '1px solid rgba(58,73,75,0.2)', color: '#b9cacb' }}>{row.cons}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Suggested Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#7df5ff', fontWeight: 700 }}>{page.quiz.total}</p>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{page.quiz.question}</p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>{page.quiz.options.map((item, idx) => <li key={`html-editors-quiz-opt-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-editors-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`html-editors-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`html-editors-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`html-editors-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`html-editors-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`html-editors-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-comments-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_COMMENTS_CONTENT;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 12px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-comments-b-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Comment Syntax</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>Use this syntax to add comments in HTML:</p>
                      <pre style={{ margin: '0 0 10px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}>
                        <code>{page.syntax}</code>
                      </pre>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}>
                        <code>{page.basicExample}</code>
                      </pre>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}>{page.syntaxNote}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.singleLineTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{page.singleLineIntro}</p>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}>
                        <code>{page.singleLineCode}</code>
                      </pre>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}>{page.singleLineExplanation}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.multiLineTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{page.multiLineIntro}</p>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}>
                        <code>{page.multiLineCode}</code>
                      </pre>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{page.multiLineExplanation}</p>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}><strong style={{ color: '#e3e1e9' }}>Note:</strong> {page.shortcutNote}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Suggested Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#7df5ff', fontWeight: 700 }}>{page.quiz.total}</p>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{page.quiz.question}</p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>{page.quiz.options.map((item, idx) => <li key={`html-comments-quiz-opt-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-comments-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`html-comments-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`html-comments-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`html-comments-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`html-comments-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`html-comments-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-structure-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const docKey = 'html-structure-page';
                const page = HTML_STRUCTURE_CONTENT;
                const imageCount = Array.isArray(page.images) ? page.images.length : 0;
                const currentImageIndexRaw = docImageIndexMap[docKey] ?? 0;
                const currentImageIndex = imageCount > 0 ? ((currentImageIndexRaw % imageCount) + imageCount) % imageCount : 0;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 12px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-structure-b-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    {imageCount > 0 ? (
                      <div style={{ margin: '10px 0 18px', maxWidth: 760 }}>
                        <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                          <div style={{ display: 'flex', width: `${imageCount * 100}%`, transform: `translateX(-${currentImageIndex * (100 / imageCount)}%)`, transition: 'transform 0.25s ease' }}>
                            {page.images.map((src, idx) => (
                              <div key={`html-structure-image-${idx}`} style={{ width: `${100 / imageCount}%`, flexShrink: 0, background: '#111827' }}>
                                <img src={src} alt={`HTML structure visual ${idx + 1}`} loading={shouldPreloadCarouselImage(idx, currentImageIndex, imageCount) ? 'eager' : 'lazy'} fetchPriority={idx === currentImageIndex ? 'high' : 'auto'} decoding="async" onLoad={() => markImageLoaded(`html-structure-image-${idx}`)} style={{ width: '100%', display: 'block', opacity: loadedImageMap[`html-structure-image-${idx}`] ? 1 : 0.12, transition: 'opacity 0.18s ease-out' }} />
                              </div>
                            ))}
                          </div>

                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) - 1 + imageCount) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Previous image" title="Previous image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span></button>
                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) + 1) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Next image" title="Next image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span></button>
                          <span style={{ position: 'absolute', right: 10, bottom: 8, color: '#d7f6fa', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(125,245,255,0.35)', borderRadius: 999, padding: '2px 8px', fontFamily: 'JetBrains Mono', fontSize: 11 }}>{currentImageIndex + 1}/{imageCount}</span>
                        </div>
                      </div>
                    ) : null}

                    <div className="codust-page-section" style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Basic Structure</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.basicStructureIntro)}</p>
                      {page.structureParts.map((part, idx) => (
                        <div key={`structure-part-${idx}`} style={{ marginBottom: 10 }}>
                          <p style={{ margin: '0 0 4px', color: '#e3e1e9', fontWeight: 700 }}>{idx + 1}. {part.title}</p>
                          <p style={{ margin: '0 0 4px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(part.text)}</p>
                          {part.points ? (
                            <ul style={{ margin: '0 0 0 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                              {part.points.map((item, itemIdx) => <li key={`structure-part-point-${idx}-${itemIdx}`}>{renderTextWithBold(item)}</li>)}
                            </ul>
                          ) : null}
                        </div>
                      ))}
                      <pre style={{ margin: '10px 0 0', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}>
                        <code>{page.exampleCode}</code>
                      </pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Tags and Elements</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.tagsElementsIntro)}</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.tagTypes.map((item, idx) => <li key={`structure-tag-type-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.commonElements.map((item, idx) => <li key={`structure-common-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Practices for Writing HTML</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.bestPractices.map((item, idx) => <li key={`structure-best-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Also Check</h3>
                      <ul style={{ margin: '0 0 8px 18px', lineHeight: 1.7 }}>
                        {page.alsoCheck.map((item, idx) => (
                          <li key={`structure-check-${idx}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Suggested Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#7df5ff', fontWeight: 700 }}>{page.quiz.total}</p>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{page.quiz.question}</p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>{page.quiz.options.map((item, idx) => <li key={`html-structure-quiz-opt-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-structure-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`html-structure-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`html-structure-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`html-structure-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`html-structure-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`html-structure-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-elements-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const docKey = 'html-elements-page';
                const page = HTML_ELEMENTS_CONTENT;
                const imageCount = Array.isArray(page.images) ? page.images.length : 0;
                const currentImageIndexRaw = docImageIndexMap[docKey] ?? 0;
                const currentImageIndex = imageCount > 0 ? ((currentImageIndexRaw % imageCount) + imageCount) % imageCount : 0;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 12px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-elements-b-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <pre style={{ margin: '0 0 10px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}>
                      <code>{page.introCode}</code>
                    </pre>

                    {imageCount > 0 ? (
                      <div style={{ margin: '10px 0 18px', maxWidth: 760 }}>
                        <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                          <div style={{ display: 'flex', width: `${imageCount * 100}%`, transform: `translateX(-${currentImageIndex * (100 / imageCount)}%)`, transition: 'transform 0.25s ease' }}>
                            {page.images.map((src, idx) => (
                              <div key={`html-elements-image-${idx}`} style={{ width: `${100 / imageCount}%`, flexShrink: 0, background: '#111827' }}>
                                <img src={src} alt={`HTML elements visual ${idx + 1}`} loading={shouldPreloadCarouselImage(idx, currentImageIndex, imageCount) ? 'eager' : 'lazy'} fetchPriority={idx === currentImageIndex ? 'high' : 'auto'} decoding="async" onLoad={() => markImageLoaded(`html-elements-image-${idx}`)} style={{ width: '100%', display: 'block', opacity: loadedImageMap[`html-elements-image-${idx}`] ? 1 : 0.12, transition: 'opacity 0.18s ease-out' }} />
                              </div>
                            ))}
                          </div>

                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) - 1 + imageCount) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Previous image" title="Previous image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span></button>
                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) + 1) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Next image" title="Next image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span></button>
                          <span style={{ position: 'absolute', right: 10, bottom: 8, color: '#d7f6fa', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(125,245,255,0.35)', borderRadius: 999, padding: '2px 8px', fontFamily: 'JetBrains Mono', fontSize: 11 }}>{currentImageIndex + 1}/{imageCount}</span>
                        </div>
                      </div>
                    ) : null}

                    <div className="codust-page-section" style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.caseSensitivity.title}</h3>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.caseSensitivity.description)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.nested.title}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.nested.description)}</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.nested.points.map((item, idx) => <li key={`html-elements-nested-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                      <pre style={{ margin: 0, background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.nested.code}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.endTag.title}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.endTag.description)}</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.endTag.points.map((item, idx) => <li key={`html-elements-end-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                      <pre style={{ margin: 0, background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.endTag.code}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.emptyElements.title}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.emptyElements.description)}</p>
                      <pre style={{ margin: 0, background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.emptyElements.code}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.displayTypes.title}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.displayTypes.intro)}</p>

                      <h4 style={{ margin: '10px 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 18 }}>{page.displayTypes.blockLevel.title}</h4>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.displayTypes.blockLevel.description)}</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.displayTypes.blockLevel.examples.map((item, idx) => <li key={`html-elements-block-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                      <pre style={{ margin: '0 0 10px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.displayTypes.blockLevel.code}</code></pre>

                      <h4 style={{ margin: '10px 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 18 }}>{page.displayTypes.inline.title}</h4>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.displayTypes.inline.description)}</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.displayTypes.inline.examples.map((item, idx) => <li key={`html-elements-inline-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                      <pre style={{ margin: 0, background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.displayTypes.inline.code}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.linkParagraph)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Suggested Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#7df5ff', fontWeight: 700 }}>{page.quiz.total}</p>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{page.quiz.question}</p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>{page.quiz.options.map((item, idx) => <li key={`html-elements-quiz-opt-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-elements-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`html-elements-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`html-elements-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`html-elements-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`html-elements-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`html-elements-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-attributes-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_ATTRIBUTES_CONTENT;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 12px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-attributes-b-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <pre style={{ margin: '0 0 10px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.introCode}</code></pre>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.introBreakdown.map((item, idx) => <li key={`html-attributes-breakdown-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Syntax</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.syntax}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Components of Attribute</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.components.map((item, idx) => <li key={`html-attributes-components-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Types of HTML Attributes</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>Global Attributes</p>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Attribute</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.globalAttributes.map((row, idx) => (
                              <tr key={`html-attr-global-${idx}`}>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.22)' }}>{row.attribute}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.22)' }}>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <ul style={{ margin: '10px 0 0 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.attributeTypes.map((item, idx) => <li key={`html-attr-types-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Common HTML Attributes</h3>
                      {page.commonAttributes.map((item, idx) => (
                        <div key={`html-attr-common-${idx}`} style={{ marginBottom: 14 }}>
                          <h4 style={{ margin: '0 0 6px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 18 }}>{item.title}</h4>
                          <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(item.description)}</p>
                          <pre style={{ margin: 0, background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{item.code}</code></pre>
                        </div>
                      ))}
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Important Points About HTML Attributes</h3>
                      {page.importantPoints.map((item, idx) => (
                        <div key={`html-attr-point-${idx}`} style={{ marginBottom: 12 }}>
                          <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{item.title}</p>
                          <p style={{ margin: item.code ? '0 0 8px' : 0, color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(item.text)}</p>
                          {item.code ? (
                            <pre style={{ margin: 0, background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{item.code}</code></pre>
                          ) : null}
                        </div>
                      ))}
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.linkParagraph)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Suggested Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#7df5ff', fontWeight: 700 }}>{page.quiz.total}</p>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{page.quiz.question}</p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>{page.quiz.options.map((item, idx) => <li key={`html-attributes-quiz-opt-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-attributes-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`html-attributes-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`html-attributes-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`html-attributes-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`html-attributes-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`html-attributes-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-semantics-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const docKey = 'html-semantics-page';
                const page = HTML_SEMANTICS_CONTENT;
                const imageCount = Array.isArray(page.images) ? page.images.length : 0;
                const currentImageIndexRaw = docImageIndexMap[docKey] ?? 0;
                const currentImageIndex = imageCount > 0 ? ((currentImageIndexRaw % imageCount) + imageCount) % imageCount : 0;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 12px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-semantics-b-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    {imageCount > 0 ? (
                      <div style={{ margin: '10px 0 18px', maxWidth: 760 }}>
                        <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                          <div style={{ display: 'flex', width: `${imageCount * 100}%`, transform: `translateX(-${currentImageIndex * (100 / imageCount)}%)`, transition: 'transform 0.25s ease' }}>
                            {page.images.map((src, idx) => (
                              <div key={`html-semantics-image-${idx}`} style={{ width: `${100 / imageCount}%`, flexShrink: 0, background: '#111827' }}>
                                <img src={src} alt={`HTML semantics visual ${idx + 1}`} loading={shouldPreloadCarouselImage(idx, currentImageIndex, imageCount) ? 'eager' : 'lazy'} fetchPriority={idx === currentImageIndex ? 'high' : 'auto'} decoding="async" onLoad={() => markImageLoaded(`html-semantics-image-${idx}`)} style={{ width: '100%', display: 'block', opacity: loadedImageMap[`html-semantics-image-${idx}`] ? 1 : 0.12, transition: 'opacity 0.18s ease-out' }} />
                              </div>
                            ))}
                          </div>

                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) - 1 + imageCount) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Previous image" title="Previous image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span></button>
                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) + 1) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Next image" title="Next image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span></button>
                          <span style={{ position: 'absolute', right: 10, bottom: 8, color: '#d7f6fa', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(125,245,255,0.35)', borderRadius: 999, padding: '2px 8px', fontFamily: 'JetBrains Mono', fontSize: 11 }}>{currentImageIndex + 1}/{imageCount}</span>
                        </div>
                      </div>
                    ) : null}

                    <div className="codust-page-section" style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.structureTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.structureIntro)}</p>
                      <p style={{ margin: 0, color: '#7df5ff', fontWeight: 700 }}>{page.pageStructureLabel}</p>
                    </div>

                    {page.elements.map((item, idx) => (
                      <div key={`html-semantics-item-${idx}`} className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                        <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{item.title}</h3>
                        <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(item.description)}</p>
                        <pre style={{ margin: 0, background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{item.code}</code></pre>
                      </div>
                    ))}

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Practices for Using HTML5 Semantic Elements</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.bestPractices.map((item, idx) => <li key={`html-semantics-practice-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Suggested Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#7df5ff', fontWeight: 700 }}>{page.quiz.total}</p>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{page.quiz.question}</p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>{page.quiz.options.map((item, idx) => <li key={`html-semantics-quiz-opt-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-semantics-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`html-semantics-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`html-semantics-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`html-semantics-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`html-semantics-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`html-semantics-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-entities-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_ENTITIES_CONTENT;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 12px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-entities-b-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.exampleIntro}</h3>
                      <pre style={{ margin: '0 0 10px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.exampleCode}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.commonEntitiesTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.commonEntitiesIntro)}</p>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Symbol</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Description</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Entity Name</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Entity Number</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.commonEntities.map((row, idx) => (
                              <tr key={`html-entities-row-${idx}`}>
                                {row.map((cell, cellIdx) => <td key={`html-entities-cell-${idx}-${cellIdx}`} style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.2)' }}>{renderTextWithBold(cell)}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <pre style={{ margin: '10px 0 0', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.currencyCode}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.reservedTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.reservedIntro)}</p>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 420 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Reserved Character</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Entity Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.reservedTable.map((row, idx) => (
                              <tr key={`html-entities-reserved-${idx}`}>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.2)' }}>{row[0]}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.2)' }}>{renderTextWithBold(row[1])}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.otherTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.otherIntro)}</p>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 420 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Character</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Entity Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.otherTable.map((row, idx) => (
                              <tr key={`html-entities-other-${idx}`}>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.2)' }}>{row[0]}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.2)' }}>{renderTextWithBold(row[1])}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <pre style={{ margin: '10px 0 0', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.otherCode}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.nbspTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.nbspIntro)}</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.nbspExamples.map((item, idx) => <li key={`html-entities-nbsp-${idx}`}>{item}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.nbspNote)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.combiningTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.combiningIntro)}</p>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Mark</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Character</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Construct</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Final Result</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.combiningTable.map((row, idx) => (
                              <tr key={`html-entities-combining-${idx}`}>
                                {row.map((cell, cellIdx) => <td key={`html-entities-combining-cell-${idx}-${cellIdx}`} style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.2)' }}>{renderTextWithBold(cell)}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Practices for Using HTML Entities</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.bestPractices.map((item, idx) => <li key={`html-entities-best-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Suggested Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#7df5ff', fontWeight: 700 }}>{page.quiz.total}</p>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{page.quiz.question}</p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>{page.quiz.options.map((item, idx) => <li key={`html-entities-quiz-opt-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-entities-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`html-entities-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`html-entities-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`html-entities-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`html-entities-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`html-entities-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-symbols-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_SYMBOLS_CONTENT;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 12px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-symbols-b-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <pre style={{ margin: '0 0 10px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.introCode}</code></pre>

                    <div className="codust-page-section" style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.commonSymbolsTitle}</h3>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Symbol</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Description</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Entity Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.commonSymbols.map((row, idx) => (
                              <tr key={`html-symbols-row-${idx}`}>
                                {row.map((cell, cellIdx) => <td key={`html-symbols-cell-${idx}-${cellIdx}`} style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.2)' }}>{renderTextWithBold(cell)}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.currencyCode ? 'Currency Symbols Using HTML Entities' : 'Common Symbols'}</h3>
                      <pre style={{ margin: 0, background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.currencyCode}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.reservedTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.reservedIntro)}</p>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 420 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Reserved Character</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Entity Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.reservedTable.map((row, idx) => (
                              <tr key={`html-symbols-reserved-${idx}`}>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.2)' }}>{row[0]}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.2)' }}>{renderTextWithBold(row[1])}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.otherTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.otherIntro)}</p>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 420 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Character</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Entity Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.otherTable.map((row, idx) => (
                              <tr key={`html-symbols-other-${idx}`}>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.2)' }}>{row[0]}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.2)' }}>{renderTextWithBold(row[1])}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <pre style={{ margin: '10px 0 0', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.otherCode}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.nbspTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.nbspIntro)}</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.nbspExamples.map((item, idx) => <li key={`html-symbols-nbsp-${idx}`}>{item}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.nbspNote)}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Practices</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.bestPractices.map((item, idx) => <li key={`html-symbols-best-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Suggested Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#7df5ff', fontWeight: 700 }}>{page.quiz.total}</p>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{page.quiz.question}</p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>{page.quiz.options.map((item, idx) => <li key={`html-symbols-quiz-opt-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-symbols-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`html-symbols-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`html-symbols-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`html-symbols-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`html-symbols-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`html-symbols-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-simple-portfolio-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_SIMPLE_PORTFOLIO_CONTENT;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 12px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-portfolio-b-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.projectPreviewTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{page.projectPreviewCaption}</p>
                      <div style={{ maxWidth: 900, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, overflow: 'hidden', marginBottom: 10 }}>
                        <img src={page.previewImage} alt="Simple portfolio project preview" loading="lazy" decoding="async" style={{ width: '100%', display: 'block' }} />
                      </div>
                      <pre style={{ margin: 0, background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.portfolioCode}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Concept Breakdown</h3>
                      {page.sections.map((section, idx) => (
                        <div key={`html-portfolio-section-${idx}`} style={{ marginBottom: 10 }}>
                          <h4 style={{ margin: '0 0 6px', color: '#d7f6fa', fontFamily: 'Space Grotesk', fontSize: 18 }}>{section.heading}</h4>
                          <ul style={{ margin: '0 0 0 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                            {section.points.map((item, itemIdx) => <li key={`html-portfolio-point-${idx}-${itemIdx}`}>{renderTextWithBold(item)}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Main Content Sections</h3>
                      {page.mainColumns.map((column, idx) => (
                        <div key={`html-portfolio-column-${idx}`} style={{ marginBottom: 10 }}>
                          <h4 style={{ margin: '0 0 6px', color: '#d7f6fa', fontFamily: 'Space Grotesk', fontSize: 18 }}>{column.heading}</h4>
                          <ul style={{ margin: '0 0 0 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                            {column.items.map((item, itemIdx) => <li key={`html-portfolio-column-item-${idx}-${itemIdx}`}>{renderTextWithBold(item)}</li>)}
                          </ul>
                        </div>
                      ))}
                      <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.75 }}><strong style={{ color: '#e3e1e9' }}>Note:</strong> {renderTextWithBold(page.note)}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                          <a href={page.referenceUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,219,231,0.12)', color: '#b9cacb', border: '1px solid rgba(0,219,231,0.35)', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>description</span>Reference</a>
                        </div>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-portfolio-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`html-portfolio-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`html-portfolio-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`html-portfolio-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`html-portfolio-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`html-portfolio-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-event-webpage-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_EVENT_WEBPAGE_CONTENT;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>

                    <div className="codust-page-section" style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Project Overview</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.projectOverview.map((item, idx) => <li key={`html-event-overview-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.projectPreviewTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{page.projectPreviewCaption}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>
                        {page.images.map((src, idx) => (
                          <div key={`html-event-preview-${idx}`} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, overflow: 'hidden' }}>
                            <img src={src} alt={`Event webpage preview ${idx + 1}`} loading="lazy" decoding="async" style={{ width: '100%', display: 'block' }} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.htmlStructureTitle}</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{page.htmlStructureIntro}</p>
                      <pre style={{ margin: 0, background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.htmlStructureCode}</code></pre>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Section Breakdown</h3>
                      {page.htmlBreakdown.map((item, idx) => (
                        <div key={`html-event-breakdown-${idx}`} style={{ marginBottom: 10 }}>
                          <h4 style={{ margin: '0 0 6px', color: '#d7f6fa', fontFamily: 'Space Grotesk', fontSize: 18 }}>{item.heading}</h4>
                          <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(item.text)}</p>
                        </div>
                      ))}
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{page.cssTitle}</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.cssCode}</code></pre>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.cssHighlights.map((item, idx) => <li key={`html-event-css-high-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                          <a href={page.referenceUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,219,231,0.12)', color: '#b9cacb', border: '1px solid rgba(0,219,231,0.35)', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>description</span>Reference</a>
                        </div>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-event-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`html-event-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`html-event-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`html-event-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`html-event-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`html-event-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-beginner-projects-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_BEGINNER_PROJECTS_CONTENT;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-beginner-project-bullet-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    {page.projects.map((project, idx) => (
                      <div key={`html-beginner-project-${idx}`} className="codust-page-section" style={{ marginTop: idx === 0 ? 12 : 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                        <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{project.title}</h3>
                        <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(project.description)}</p>
                        <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                          {project.points.map((item, pointIdx) => <li key={`html-beginner-project-point-${idx}-${pointIdx}`}>{renderTextWithBold(item)}</li>)}
                        </ul>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                          <a className="gfg-dropdown-link" href={project.project.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline', fontWeight: 700 }}>
                            Project: {project.project.label}
                          </a>
                          {project.project.secondaryUrl ? (
                            <a className="gfg-dropdown-link" href={project.project.secondaryUrl} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                              Alternate Project Link
                            </a>
                          ) : null}
                        </div>
                      </div>
                    ))}

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>About More</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.aboutMore.map((item, idx) => <li key={`html-beginner-projects-about-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                          <a href={page.referenceUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,219,231,0.12)', color: '#b9cacb', border: '1px solid rgba(0,219,231,0.35)', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>description</span>Arrangement</a>
                        </div>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <p style={{ margin: '8px 0 0', color: '#b9cacb', lineHeight: 1.7 }}>{page.reactions} reactions</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-beginner-projects-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`html-beginner-projects-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`html-beginner-projects-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`html-beginner-projects-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`html-beginner-projects-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`html-beginner-projects-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-project-ideas-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_PROJECT_IDEAS_CONTENT;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-project-ideas-bullet-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    {page.ideas.map((idea, idx) => (
                      <div key={`html-project-idea-${idx}`} className="codust-page-section" style={{ marginTop: idx === 0 ? 12 : 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                        <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{idea.title}</h3>
                        <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(idea.description)}</p>
                        <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>
                          {idea.points.map((item, pointIdx) => <li key={`html-project-idea-point-${idx}-${pointIdx}`}>{renderTextWithBold(item)}</li>)}
                        </ul>
                      </div>
                    ))}

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Website Styles To Try</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.buildDirections.map((item, idx) => <li key={`html-project-ideas-direction-${idx}`}>{item}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Related Articles</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
                        {page.relatedArticles.map((item, idx) => (
                          <li key={`html-project-ideas-related-${idx}`}>
                            <a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                          <a href={page.referenceUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,219,231,0.12)', color: '#b9cacb', border: '1px solid rgba(0,219,231,0.35)', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>description</span>Reference</a>
                        </div>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-project-ideas-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        <details key={`html-project-ideas-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-project-ideas-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-common-tags-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_COMMON_TAGS_CONTENT;

                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-common-tags-bullet-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quick Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.quickExampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quickExampleNotes.map((item, idx) => <li key={`html-common-tags-quick-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Document Structure Tag</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{renderTextWithBold(page.documentStructureIntro)}</p>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Structure Tag</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Syntax</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.structureRows.map((row, idx) => (
                              <tr key={`html-common-tags-structure-${idx}`}>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.22)' }}>{row.tag}</td>
                                <td style={{ padding: 10, color: '#b9cacb', borderBottom: '1px solid rgba(58,73,75,0.22)', fontFamily: 'JetBrains Mono' }}>{row.syntax}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.22)' }}>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Commonly Used Tags in HTML</h3>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 620 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>HTML Tag</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Syntax</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.commonTagsRows.map((row, idx) => (
                              <tr key={`html-common-tags-row-${idx}`}>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.22)' }}>{row.tag}</td>
                                <td style={{ padding: 10, color: '#b9cacb', borderBottom: '1px solid rgba(58,73,75,0.22)', fontFamily: 'JetBrains Mono' }}>{row.syntax}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.22)' }}>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Use of Basic HTML Structure Tags</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.basicStructureCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.basicStructureNotes.map((item, idx) => <li key={`html-common-tags-basic-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Styling Text with HTML Tags</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.stylingCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.stylingNotes.map((item, idx) => <li key={`html-common-tags-styling-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Creating a Course List with HTML Tags</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.courseListCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.courseListNotes.map((item, idx) => <li key={`html-common-tags-courses-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Best Practices for Commonly Used HTML Tags</h3>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>
                        {page.bestPractices.map((item, idx) => <li key={`html-common-tags-best-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                          <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                          <a href={page.referenceUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,219,231,0.12)', color: '#b9cacb', border: '1px solid rgba(0,219,231,0.35)', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>description</span>Reference</a>
                        </div>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-common-tags-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {page.explore.map((section, idx) => (
                        <details key={`html-common-tags-explore-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-common-tags-explore-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'html-tags-atoz-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const page = HTML_TAGS_ATOZ_CONTENT;
                return (
                  <>
                    {renderDocTitleWithBack(page.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {page.lastUpdated}</p>
                    <p style={{ margin: '0 0 10px', color: '#e3e1e9', lineHeight: 1.75 }}>{renderTextWithBold(page.intro)}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {page.bullets.map((item, idx) => <li key={`html-atoz-bullet-${idx}`}>{renderTextWithBold(item)}</li>)}
                    </ul>

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quick Example</h3>
                      <pre style={{ margin: '0 0 8px', background: 'rgba(14,16,21,0.8)', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '10px 12px', color: '#d7f6fa', overflowX: 'auto' }}><code>{page.exampleCode}</code></pre>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.exampleNotes.map((item, idx) => <li key={`html-atoz-example-note-${idx}`}>{renderTextWithBold(item)}</li>)}
                      </ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>HTML Tags A to Z</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{page.listIntro}</p>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 540 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)', width: '22%' }}>Tag</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {page.tags.map((row, idx) => (
                              <tr key={`html-atoz-tag-${idx}`}>
                                <td style={{ padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.18)', fontFamily: 'JetBrains Mono', fontSize: 13 }}>{row.name}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.18)' }}>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Quiz</h3>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>{page.quiz.question}</p>
                      <ul style={{ margin: '0 0 6px 18px', color: '#b9cacb', lineHeight: 1.7 }}>
                        {page.quiz.options.map((opt, idx) => <li key={`html-atoz-quiz-${idx}`}>{opt}</li>)}
                      </ul>
                      <p style={{ margin: 0, color: '#00dbe7', fontWeight: 700 }}>Answer: {page.quiz.answer}</p>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{page.title}</span></p>
                        <a href={page.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>
                      <div style={{ margin: '0 0 10px' }}>
                        <a href={page.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{page.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{page.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {page.articleTags.map(tag => <span key={`html-atoz-tag-badge-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>
                      {page.explore.map((section, idx) => (
                        <details key={`html-atoz-explore-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                          <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                          <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                            {section.items.map(item => <li key={`html-atoz-explore-item-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'http-protocol-page' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              {(() => {
                const docKey = 'http-protocol-page';
                const http = HTTP_TUTORIAL_CONTENT;
                const imageCount = Array.isArray(http.images) ? http.images.length : 0;
                const currentImageIndexRaw = docImageIndexMap[docKey] ?? 0;
                const currentImageIndex = imageCount > 0 ? ((currentImageIndexRaw % imageCount) + imageCount) % imageCount : 0;

                return (
                  <>
                    {renderDocTitleWithBack(http.title)}
                    <p style={{ margin: '0 0 10px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>Last Updated: {http.lastUpdated}</p>
                    <p style={{ margin: '0 0 8px', color: '#e3e1e9', lineHeight: 1.75 }}>{http.intro}</p>
                    <ul style={{ margin: '0 0 10px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>
                      {http.bullets.map((item, idx) => <li key={`http-bullet-${idx}`}>{item}</li>)}
                    </ul>
                    <p style={{ margin: '0 0 12px', color: '#b9cacb', lineHeight: 1.75 }}><strong style={{ color: '#e3e1e9' }}>Note:</strong> {http.note}</p>

                    {imageCount > 0 ? (
                      <div style={{ margin: '10px 0 18px', maxWidth: 760 }}>
                        <div style={{ position: 'relative', borderRadius: 8, border: '1px solid rgba(58,73,75,0.35)', overflow: 'hidden' }}>
                          <div style={{ display: 'flex', width: `${imageCount * 100}%`, transform: `translateX(-${currentImageIndex * (100 / imageCount)}%)`, transition: 'transform 0.25s ease' }}>
                            {http.images.map((src, idx) => (
                              <div key={`http-image-${idx}`} style={{ width: `${100 / imageCount}%`, flexShrink: 0, background: '#111827' }}>
                                <img src={src} alt={`HTTP tutorial visual ${idx + 1}`} loading={shouldPreloadCarouselImage(idx, currentImageIndex, imageCount) ? 'eager' : 'lazy'} fetchPriority={idx === currentImageIndex ? 'high' : 'auto'} decoding="async" onLoad={() => markImageLoaded(`http-image-${idx}`)} style={{ width: '100%', display: 'block', opacity: loadedImageMap[`http-image-${idx}`] ? 1 : 0.12, transition: 'opacity 0.18s ease-out' }} />
                              </div>
                            ))}
                          </div>

                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) - 1 + imageCount) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Previous image" title="Previous image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_left</span></button>
                          <button type="button" onClick={() => setDocImageIndexMap(prev => ({ ...prev, [docKey]: ((prev[docKey] ?? 0) + 1) % imageCount }))} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(0,219,231,0.45)', color: '#00dbe7', borderRadius: 999, width: 44, height: 44, padding: 0, cursor: 'pointer', position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} aria-label="Next image" title="Next image"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>chevron_right</span></button>
                          <span style={{ position: 'absolute', right: 10, bottom: 8, color: '#d7f6fa', background: 'rgba(6,18,22,0.72)', border: '1px solid rgba(125,245,255,0.35)', borderRadius: 999, padding: '2px 8px', fontFamily: 'JetBrains Mono', fontSize: 11 }}>{currentImageIndex + 1}/{imageCount}</span>
                        </div>
                      </div>
                    ) : null}

                    <div className="codust-page-section" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Features</h3>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.75 }}>{http.featuresIntro}</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>{http.features.map((item, idx) => <li key={`http-feature-${idx}`}>{item}</li>)}</ul>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}><strong style={{ color: '#e3e1e9' }}>Note:</strong> {http.quicNote}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Methods of HTTP</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>{http.methods.map((item, idx) => <li key={`http-method-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>HTTP Request/Response</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>{http.requestResponseSteps.map((item, idx) => <li key={`http-flow-${idx}`}>{item}</li>)}</ul>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, marginTop: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Requested Resource</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Resource Type</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Server Response</th>
                            </tr>
                          </thead>
                          <tbody>
                            {http.requestCircleRows.map((row, idx) => (
                              <tr key={`http-row-${idx}`}>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.22)' }}>{row.requestedResource}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.22)' }}>{row.resourceType}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.22)' }}>{row.serverResponse}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <ul style={{ margin: '10px 0 8px 18px', color: '#b9cacb', lineHeight: 1.7 }}>{http.requestCircleNotes.map((item, idx) => <li key={`http-note-${idx}`}>{item}</li>)}</ul>
                      <p style={{ margin: '0 0 6px', color: '#e3e1e9', fontWeight: 700 }}>Examples for each request</p>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>{http.requestExamples.map((item, idx) => <li key={`http-example-${idx}`}>{item}</li>)}</ul>
                      <p style={{ margin: 0, color: '#b9cacb', lineHeight: 1.75 }}><strong style={{ color: '#e3e1e9' }}>Note:</strong> {http.requestCircleFootnote}</p>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>HTTP Request and Response Components</h3>
                      <div style={{ overflowX: 'auto', border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
                          <thead>
                            <tr style={{ background: 'rgba(0,219,231,0.1)' }}>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Concept</th>
                              <th style={{ textAlign: 'left', padding: 10, color: '#d7f6fa', borderBottom: '1px solid rgba(58,73,75,0.35)' }}>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {http.components.map((row, idx) => (
                              <tr key={`http-component-${idx}`}>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.22)' }}>{row.concept}</td>
                                <td style={{ padding: 10, color: '#e3e1e9', borderBottom: '1px solid rgba(58,73,75,0.22)' }}>{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>History of HTTP</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>{http.history.map((item, idx) => <li key={`http-history-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Advantages</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>{http.advantages.map((item, idx) => <li key={`http-adv-${idx}`}>{item}</li>)}</ul>
                      <h3 style={{ margin: '12px 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>Disadvantages</h3>
                      <ul style={{ margin: '0 0 8px 18px', color: '#e3e1e9', lineHeight: 1.7 }}>{http.disadvantages.map((item, idx) => <li key={`http-dis-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div className="codust-page-section" style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(58,73,75,0.3)' }}>
                      <h3 style={{ margin: '0 0 8px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 22 }}>{http.quiz.title}</h3>
                      <p style={{ margin: '0 0 6px', color: '#7df5ff', fontWeight: 700 }}>{http.quiz.total}</p>
                      <p style={{ margin: '0 0 8px', color: '#b9cacb', lineHeight: 1.7 }}>{http.quiz.question}</p>
                      <p style={{ margin: '0 0 6px', color: '#849495', fontSize: 13 }}>{http.quiz.source}</p>
                      <ul style={{ margin: 0, paddingLeft: 18, color: '#e3e1e9', lineHeight: 1.7 }}>{http.quiz.options.map((item, idx) => <li key={`http-quiz-opt-${idx}`}>{item}</li>)}</ul>
                    </div>

                    <div data-dropdown-scope style={{ marginTop: 20, borderTop: '1px solid rgba(58,73,75,0.35)', paddingTop: 14 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
                        <p style={{ margin: 0, color: '#e3e1e9', lineHeight: 1.7 }}><span style={{ fontWeight: 700 }}>{http.title}</span></p>
                        <a href={http.courseUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '8px 14px', borderRadius: 8, textDecoration: 'none', fontSize: 14 }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>Visit Course</a>
                      </div>

                      <div style={{ margin: '0 0 10px' }}>
                        <a href={http.author.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                          <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(0,219,231,0.16)', border: '1px solid rgba(0,219,231,0.35)', color: '#00dbe7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{http.author.initial}</span>
                          <span style={{ color: '#e3e1e9', fontWeight: 700 }}>{http.author.name}</span>
                        </a>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                          {http.articleTags.map(tag => <span key={`http-tag-${tag}`} style={{ border: '1px solid rgba(125,245,255,0.35)', background: 'rgba(0,219,231,0.1)', color: '#b9cacb', fontSize: 12, padding: '3px 8px', borderRadius: 999 }}>{tag}</span>)}
                        </div>
                      </div>

                      {http.explore.map((section, idx) => (
                        section.groups ? (
                          <div key={`http-explore-${section.heading}-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10, display: 'grid', gap: 8 }}>
                            {section.groups.map(group => (
                              <details className="gfg-dropdown" key={`http-explore-group-${group.heading}`} onToggle={handleAccordionToggle} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                                <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{group.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                                <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                                  {group.items.map(item => <li key={`http-explore-item-${group.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                                </ul>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <details key={`http-explore-leaf-${section.heading}-${idx}`} className="gfg-dropdown" onToggle={handleAccordionToggle} style={{ marginTop: 10, border: '1px solid rgba(58,73,75,0.35)', borderRadius: 8, padding: '8px 10px', background: 'rgba(14,16,21,0.35)' }}>
                            <summary className="gfg-dropdown-summary" style={{ cursor: 'pointer', color: '#e3e1e9', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, listStyle: 'none' }}><span>{section.heading}</span><span className="material-symbols-outlined gfg-dropdown-icon" style={{ fontSize: 18, color: '#00dbe7' }}>expand_more</span></summary>
                            <ul style={{ margin: '8px 0 0', paddingLeft: 18, display: 'grid', gap: 5 }}>
                              {section.items.map(item => <li key={`http-explore-leaf-item-${section.heading}-${item.label}`}><a className="gfg-dropdown-link" href={item.url} target="_blank" rel="noreferrer" style={{ color: '#00dbe7', textDecoration: 'underline' }}>{item.label}</a></li>)}
                            </ul>
                          </details>
                        )
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          ) : activeLocalDoc === 'web-tutorial' ? (
            <div className="codust-page-surface" style={{ borderRadius: 8, background: 'rgba(13,14,19,0.75)', padding: '18px 16px' }}>
              <div id="web-doc-content" style={{ fontFamily: 'Geist', fontSize: 16 }}>
                {renderWebDevContent()}
              </div>
              </div>
          ) : !iframeBlocked && !isGeeksforGeeks ? (
            <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(58,73,75,0.25)', background: '#fff', minHeight: 640 }}>
              {iframeLoading && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(18,19,24,0.96)', zIndex: 5, gap: 12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 44, color: '#00dbe7', animation: 'spin 1s linear infinite' }}>refresh</span>
                </div>
              )}
              <iframe
                key={topic.slug}
                src={topic.url}
                title={topic.name}
                width="100%"
                height="640"
                style={{ border: 'none', display: 'block' }}
                onLoad={() => setIframeLoading(false)}
                onError={() => { setIframeBlocked(true); setIframeLoading(false); }}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '48px 20px', border: '1px solid rgba(58,73,75,0.25)', borderRadius: 8, background: 'rgba(13,14,19,0.55)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 50, color: '#849495', display: 'block', marginBottom: 10 }}>open_in_new</span>
              <p style={{ color: '#b9cacb', lineHeight: 1.7, marginBottom: 16, fontSize: 16 }}>This content opens directly in a new tab for the best experience.</p>
              {topic.slug === 'dsa' ? (
                <button
                  onClick={() => setActiveLocalDoc('dsa-tutorial')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '10px 20px', borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: 15 }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 17 }}>open_in_new</span>
                  Open DSA Tutorial Notes
                </button>
              ) : (
                <a
                  href={topic.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00dbe7', color: '#00363a', fontWeight: 700, padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontSize: 15 }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 17 }}>open_in_new</span>
                  Open {topic.name}
                </a>
              )}
            </div>
          )}
        </section>

      </main>

      {activeLearningPanel && topicLearningEntry && (
        <div
          onClick={() => setActiveLearningPanel(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            background: 'rgba(5, 10, 16, 0.72)',
            backdropFilter: 'blur(14px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}
        >
          <div
            onClick={event => event.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: 760,
              maxHeight: 'min(88vh, 820px)',
              overflowY: 'auto',
              borderRadius: 24,
              background: 'linear-gradient(180deg, rgba(9,18,26,0.98) 0%, rgba(13,14,19,0.98) 100%)',
              border: '1px solid rgba(116,245,255,0.2)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
              padding: 24,
              color: '#e3e1e9',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 22, flexWrap: 'wrap' }}>
              <div style={{ display: 'grid', gap: 6 }}>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#74f5ff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {activeLearningPanel === 'level' ? 'Learning Level' : 'Study Duration'}
                </span>
                <h2 style={{ margin: 0, fontFamily: 'Space Grotesk', fontSize: 28 }}>
                  {activeLearningPanel === 'level' ? `Plan your ${topic.level} journey` : `Shape your ${topic.duration} schedule`}
                </h2>
                <p style={{ margin: 0, color: '#9eb0b3', maxWidth: 560, lineHeight: 1.7 }}>
                  {activeLearningPanel === 'level'
                    ? 'Choose the stage you are working through right now, then turn the core topic highlights into visible progress checkpoints.'
                    : 'Pick a weekly pace for this topic and pin it as a focus area so it becomes more visible on your profile.'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveLearningPanel(null)}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  border: '1px solid rgba(116,245,255,0.24)',
                  background: 'rgba(116,245,255,0.08)',
                  color: '#74f5ff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
                aria-label="Close learning panel"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
              <div style={{ display: 'grid', gap: 16 }}>
                <div style={{
                  borderRadius: 18,
                  border: '1px solid rgba(116,245,255,0.16)',
                  background: 'linear-gradient(180deg, rgba(0,219,231,0.1) 0%, rgba(0,219,231,0.02) 100%)',
                  padding: 18,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 14 }}>
                    <div>
                      <p style={{ margin: '0 0 4px', color: '#74f5ff', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>Current topic</p>
                      <p style={{ margin: 0, fontFamily: 'Space Grotesk', fontSize: 23 }}>{topic.name}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => updateTopicLearning({ focus: !topicLearningEntry.focus, lastViewedAt: Date.now() })}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        padding: '9px 14px',
                        borderRadius: 999,
                        border: `1px solid ${topicLearningEntry.focus ? 'rgba(255,172,232,0.35)' : 'rgba(116,245,255,0.24)'}`,
                        background: topicLearningEntry.focus ? 'rgba(255,172,232,0.12)' : 'rgba(116,245,255,0.08)',
                        color: topicLearningEntry.focus ? '#fface8' : '#74f5ff',
                        cursor: 'pointer',
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{topicLearningEntry.focus ? 'star' : 'star_outline'}</span>
                      {topicLearningEntry.focus ? 'Focused topic' : 'Set as focus'}
                    </button>
                  </div>

                  <div style={{ display: 'grid', gap: 10 }}>
                    {topicLevelStages.map(stage => {
                      const isActiveStage = topicLearningEntry.currentStage === stage;
                      return (
                        <button
                          key={stage}
                          type="button"
                          onClick={() => updateTopicLearning({ currentStage: stage, lastViewedAt: Date.now() })}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 12,
                            width: '100%',
                            borderRadius: 14,
                            border: `1px solid ${isActiveStage ? 'rgba(116,245,255,0.45)' : 'rgba(58,73,75,0.45)'}`,
                            background: isActiveStage ? 'rgba(116,245,255,0.14)' : 'rgba(7,15,20,0.55)',
                            color: isActiveStage ? '#e9fdff' : '#b9cacb',
                            padding: '12px 14px',
                            cursor: 'pointer',
                            textAlign: 'left',
                          }}
                        >
                          <span style={{ display: 'grid', gap: 2 }}>
                            <span style={{ fontSize: 15, fontWeight: 700 }}>{stage}</span>
                            <span style={{ fontSize: 12, color: isActiveStage ? '#9df6ff' : '#7f9296' }}>
                              {isActiveStage ? 'You are actively targeting this stage.' : 'Switch to this stage when your focus changes.'}
                            </span>
                          </span>
                          <span className="material-symbols-outlined" style={{ fontSize: 18, color: isActiveStage ? '#74f5ff' : '#4e6b70' }}>
                            {isActiveStage ? 'radio_button_checked' : 'radio_button_unchecked'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div style={{
                  borderRadius: 18,
                  border: '1px solid rgba(58,73,75,0.45)',
                  background: 'rgba(7,15,20,0.58)',
                  padding: 18,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
                    <div>
                      <p style={{ margin: '0 0 4px', color: '#74f5ff', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>Checkpoint tracker</p>
                      <p style={{ margin: 0, fontFamily: 'Space Grotesk', fontSize: 21 }}>Core topic highlights</p>
                    </div>
                    <span style={{ color: '#9eb0b3', fontFamily: 'JetBrains Mono', fontSize: 12 }}>
                      {topicLearningEntry.completedHighlights.length}/{topic.highlights.length} completed
                    </span>
                  </div>

                  <div style={{ height: 8, borderRadius: 999, background: 'rgba(58,73,75,0.5)', overflow: 'hidden', marginBottom: 16 }}>
                    <div
                      style={{
                        width: `${Math.round((topicLearningEntry.completedHighlights.length / Math.max(topic.highlights.length, 1)) * 100)}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #00dbe7 0%, #fface8 100%)',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gap: 10 }}>
                    {topic.highlights.map(highlight => {
                      const isComplete = topicLearningEntry.completedHighlights.includes(highlight);
                      return (
                        <button
                          key={highlight}
                          type="button"
                          onClick={() => toggleTopicHighlight(highlight)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            width: '100%',
                            borderRadius: 14,
                            border: `1px solid ${isComplete ? 'rgba(0,219,231,0.35)' : 'rgba(58,73,75,0.4)'}`,
                            background: isComplete ? 'rgba(0,219,231,0.1)' : 'rgba(13,14,19,0.65)',
                            color: isComplete ? '#e9fdff' : '#b9cacb',
                            padding: '11px 13px',
                            cursor: 'pointer',
                            textAlign: 'left',
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 20, color: isComplete ? '#74f5ff' : '#4e6b70' }}>
                            {isComplete ? 'check_circle' : 'radio_button_unchecked'}
                          </span>
                          <span style={{ fontSize: 14, fontWeight: 600 }}>{highlight}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gap: 16 }}>
                <div style={{
                  borderRadius: 18,
                  border: '1px solid rgba(255,172,232,0.18)',
                  background: 'linear-gradient(180deg, rgba(255,172,232,0.08) 0%, rgba(255,172,232,0.02) 100%)',
                  padding: 18,
                }}>
                  <p style={{ margin: '0 0 12px', color: '#fface8', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>Pace planner</p>
                  <div style={{ display: 'grid', gap: 10 }}>
                    {STUDY_PACE_OPTIONS.map(option => {
                      const isActivePace = topicLearningEntry.paceId === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => updateTopicLearning({
                            paceId: option.id,
                            paceLabel: option.label,
                            weeklyHours: option.weeklyHours,
                            lastViewedAt: Date.now(),
                          })}
                          style={{
                            display: 'grid',
                            gap: 5,
                            width: '100%',
                            borderRadius: 14,
                            border: `1px solid ${isActivePace ? 'rgba(255,172,232,0.38)' : 'rgba(58,73,75,0.42)'}`,
                            background: isActivePace ? 'rgba(255,172,232,0.12)' : 'rgba(13,14,19,0.6)',
                            color: isActivePace ? '#fff3fb' : '#b9cacb',
                            padding: '12px 14px',
                            cursor: 'pointer',
                            textAlign: 'left',
                          }}
                        >
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                            <span style={{ fontWeight: 700, fontSize: 14 }}>{option.label}</span>
                            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: isActivePace ? '#ffd8f2' : '#849495' }}>{option.weeklyHours} hrs/week</span>
                          </span>
                          <span style={{ fontSize: 12, color: isActivePace ? '#ffd8f2' : '#7f9296' }}>{option.note}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div style={{
                  borderRadius: 18,
                  border: '1px solid rgba(58,73,75,0.45)',
                  background: 'rgba(7,15,20,0.58)',
                  padding: 18,
                  display: 'grid',
                  gap: 14,
                }}>
                  <div>
                    <p style={{ margin: '0 0 6px', color: '#74f5ff', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>Current snapshot</p>
                    <p style={{ margin: 0, fontFamily: 'Space Grotesk', fontSize: 22 }}>{topicLearningEntry.paceLabel}</p>
                  </div>

                  <div style={{ display: 'grid', gap: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, color: '#9eb0b3', fontSize: 13 }}>
                      <span>Listed duration</span>
                      <strong style={{ color: '#e3e1e9' }}>{topicDurationEstimate.label}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, color: '#9eb0b3', fontSize: 13 }}>
                      <span>Estimated finish at your pace</span>
                      <strong style={{ color: '#e3e1e9' }}>{getPaceAdjustedTimeline(topic.duration, topicLearningEntry.weeklyHours)}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, color: '#9eb0b3', fontSize: 13 }}>
                      <span>Current stage</span>
                      <strong style={{ color: '#e3e1e9' }}>{topicLearningEntry.currentStage}</strong>
                    </div>
                  </div>

                  <div style={{
                    borderRadius: 14,
                    padding: '14px 15px',
                    background: 'rgba(0,219,231,0.07)',
                    border: '1px solid rgba(0,219,231,0.16)',
                    color: '#c9f8fb',
                    fontSize: 13,
                    lineHeight: 1.7,
                  }}>
                    {topicLearningEntry.focus
                      ? 'This topic is pinned as a focus area, so it will be highlighted in your profile dashboard.'
                      : 'Pin this topic as a focus area if you want it surfaced more prominently in your profile dashboard.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        summary::-webkit-details-marker { display: none; }
        summary::marker { content: ''; }

        .gfg-dropdown {
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }

        .gfg-dropdown:hover {
          border-color: rgba(0, 219, 231, 0.45) !important;
          background: rgba(0, 219, 231, 0.08) !important;
        }

        .gfg-dropdown-summary {
          transition: color 0.2s ease;
        }

        .gfg-dropdown-summary:hover {
          color: #74f5ff !important;
        }

        .gfg-dropdown-icon {
          transition: transform 0.2s ease;
        }

        .gfg-dropdown[open] .gfg-dropdown-icon {
          transform: rotate(180deg);
        }

        .gfg-dropdown ul {
          animation: slideInLeft 0.24s ease-out;
        }

        .gfg-dropdown-link {
          display: inline-block;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .gfg-dropdown-link:hover {
          color: #74f5ff !important;
          transform: translateX(4px);
        }

        @media(min-width:768px){ .content-panel { display: block !important; } }
      `}</style>

      <Footer />
    </div>
  );
}
