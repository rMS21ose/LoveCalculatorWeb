A fun and romantic web app built using Python (Flask), HTML, CSS, and JavaScript, where users can find out how compatible they are with their partner based on their names!
AS MENTIONED IT IS FOR FUN AND ONLY FUN!!! (based on the criteria I set)

| Technology         | Purpose                                            |
| ------------------ | -------------------------------------------------- |
| **Python (Flask)** | Backend framework to handle requests and run logic |
| **HTML5**          | Structure of the web page                          |
| **CSS3**           | Styling and design (gradient, layout, fonts)       |
| **JavaScript**     | Adds dynamic animations and interactivity          |
| **Figma**          | UI/UX design prototype                             |

HOW IT WORKS:

1. Users enter their name and their partner’s name.

2. When they click “Calculate”, the Flask backend runs the Love Calculator logic:
Counts occurrences of letters from "TRUE" and "LOVE".
Combines those counts to form a two-digit love score.

3. The score is displayed inside a beautiful circular badge, followed by a message.

LoveCalculatorWeb/
│
├── app.py                 → Flask backend (handles routes & logic)
├── templates/
│   └── index.html         → Main webpage (UI layout)
├── static/
│   ├── style.css          → Styling and animations
│   └── script.js          → Interactive JS (loading animation)
└── README.md              → Project documentation
