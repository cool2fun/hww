const fs = require('fs');

// Define the HTML content with embedded CSS
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embedded CSS Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
    </style>
</head>
<body>
    <h1>Welcome to Embedded CSS Example</h1>
    <p>This is an example HTML file with embedded CSS.</p>
</body>
</html>
`;

// Write the HTML content to a file named index.html
fs.writeFile('index.html', htmlContent, (err) => {
    if (err) throw err;
    console.log('index.html file has been created successfully!');
});
