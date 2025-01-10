# Unexpected Null Values in JavaScript Function

This repository demonstrates a common issue in JavaScript: unexpected null values causing errors in a function.  The example showcases a simple addition function that attempts to gracefully handle null input values. However, this may not be sufficient in a larger application. The `bug.js` file demonstrates the initial implementation, while `bugSolution.js` provides a more robust solution.

## Bug Description

The `foo` function aims to add two numbers, but doesn't account for all potential scenarios. While it correctly handles null values by returning 0, in larger applications, null handling may need a more sophisticated approach (e.g., throwing exceptions, using default values, or implementing more specific validation).