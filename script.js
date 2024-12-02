function generatePatterns() {
    const rows = 5; // Adjust the number of rows as needed

    // Simple Pyramid
    function simplePyramid(rows) {
        console.log("Simple Pyramid:");
        for (let i = 1; i <= rows; i++) {
            console.log("*".repeat(i));
        }
        console.log();
    }

    // Flipped Simple Pyramid
    function flippedSimplePyramid(rows) {
        console.log("Flipped Simple Pyramid:");
        for (let i = rows; i >= 1; i--) {
            console.log("*".repeat(i));
        }
        console.log();
    }

    // Inverted Pyramid
    function invertedPyramid(rows) {
        console.log("Inverted Pyramid:");
        for (let i = 1; i <= rows; i++) {
            console.log(" ".repeat(i - 1) + "*".repeat(rows - i + 1));
        }
        console.log();
    }

    // Flipped Inverted Pyramid
    function flippedInvertedPyramid(rows) {
        console.log("Flipped Inverted Pyramid:");
        for (let i = rows; i >= 1; i--) {
            console.log(" ".repeat(rows - i) + "*".repeat(i));
        }
        console.log();
    }

    // Triangle
    function triangle(rows) {
        console.log("Triangle:");
        for (let i = 1; i <= rows; i++) {
            console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
        }
        console.log();
    }

    // Inverted Triangle
    function invertedTriangle(rows) {
        console.log("Inverted Triangle:");
        for (let i = rows; i >= 1; i--) {
            console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
        }
        console.log();
    }

    // Half Diamond Pattern
    function halfDiamond(rows) {
        console.log("Half Diamond Pattern:");
        for (let i = 1; i <= rows; i++) {
            console.log("*".repeat(i));
        }
        for (let i = rows - 1; i >= 1; i--) {
            console.log("*".repeat(i));
        }
        console.log();
    }

    // Flipped Half Diamond Pattern
    function flippedHalfDiamond(rows) {
        console.log("Flipped Half Diamond Pattern:");
        for (let i = rows; i >= 1; i--) {
            console.log("*".repeat(i));
        }
        for (let i = 2; i <= rows; i++) {
            console.log("*".repeat(i));
        }
        console.log();
    }

    // Diamond Pattern
    function diamond(rows) {
        console.log("Diamond Pattern:");
        for (let i = 1; i <= rows; i++) {
            console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
        }
        for (let i = rows - 1; i >= 1; i--) {
            console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
        }
        console.log();
    }

    // Hourglass Pattern
    function hourglass(rows) {
        console.log("Hourglass Pattern:");
        for (let i = rows; i >= 1; i--) {
            console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
        }
        for (let i = 2; i <= rows; i++) {
            console.log(" ".repeat(rows - i) + "*".repeat(2 * i - 1));
        }
        console.log();
    }

    // Number Pyramid
    function numberPyramid(rows) {
        console.log("Number Pyramid:");
        for (let i = 1; i <= rows; i++) {
            console.log(i.toString().repeat(i));
        }
        console.log();
    }

    // Rotated Number Pyramid
    function rotatedNumberPyramid(rows) {
        console.log("Rotated Number Pyramid:");
        for (let i = 1; i <= rows; i++) {
            console.log(Array.from({ length: i }, (_, idx) => idx + 1).join(""));
        }
        console.log();
    }

    // Palindrome Triangle
    function palindromeTriangle(rows) {
        console.log("Palindrome Triangle:");
        for (let i = 1; i <= rows; i++) {
            let left = Array.from({ length: i }, (_, idx) => idx + 1).join("");
            let right = Array.from({ length: i - 1 }, (_, idx) => i - idx - 1).join("");
            console.log(left + right);
        }
        console.log();
    }

    // Alphabet Pyramid
    function alphabetPyramid(rows) {
        console.log("Alphabet Pyramid:");
        for (let i = 1; i <= rows; i++) {
            console.log(String.fromCharCode(65).repeat(i));
        }
        console.log();
    }

    // Continuous Alphabet Pyramid
    function continuousAlphabetPyramid(rows) {
        console.log("Continuous Alphabet Pyramid:");
        let charCode = 65; // ASCII code for 'A'
        for (let i = 1; i <= rows; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += String.fromCharCode(charCode);
                charCode++;
            }
            console.log(row);
        }
        console.log();
    }

    // Call All Pattern Functions
    simplePyramid(rows);
    flippedSimplePyramid(rows);
    invertedPyramid(rows);
    flippedInvertedPyramid(rows);
    triangle(rows);
    invertedTriangle(rows);
    halfDiamond(rows);
    flippedHalfDiamond(rows);
    diamond(rows);
    hourglass(rows);
    numberPyramid(rows);
    rotatedNumberPyramid(rows);
    palindromeTriangle(rows);
    alphabetPyramid(rows);
    continuousAlphabetPyramid(rows);
}

// Run the Program
generatePatterns();
