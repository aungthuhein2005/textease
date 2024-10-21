# Textease
Textease is a powerful React rich text editor library. It provides a customizable toolbar and a variety of text editing tools, allowing users to manage themes, toolbar visibility, and configure rich text editing easily in React applications.

## Features
- Customizable Toolbar: Choose which tools you want to include in the editor.
- Theme Support: Define a light or dark theme for the editor interface.
- Fixed or Dynamic Toolbars: Decide whether the toolbar should be fixed at the top or float with the content.
- Rich Text Tools: Includes formatting options such as bold, italic, underline, font size, font family, block quotes, code snippets, links, alignment, color pickers, and more.

## Installation
Install the Textease package using npm:

``
npm install textease
Usage
Here's a simple example to demonstrate how to use the Textease rich text editor in a React application.

```javascript
Copy code
import React, { useState } from 'react';
import BananaWriter from './BananaWriter'; // Import Textease component

const App = () => {
  const [editorContent, setEditorContent] = useState("");

  // Function to handle editor content change
  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  return (
    <div>
      <h1>Textease Editor Example</h1>
      <BananaWriter
        tools={[
          'bold', 'italic', 'underline', 'fontFamily', 'blockQuote', 'code', 'separate', 'link',
          'fontSize', 'header', 'file', 'bgPicker', 'colorPicker', 'alignLeft', 'alignCenter',
          'alignRight', 'remove'
        ]}
        theme="light" // Define theme: 'light' or 'dark'
        fixed={true} // Fix toolbar at the top
        onContentChange={handleEditorChange} // Capture editor changes
      />
      <h2>Editor Content Preview:</h2>
      <div>{editorContent}</div>
    </div>
  );
};

export default App;
```
## Props
- `tools`: An array of editor tools to be included in the toolbar. Example: `['bold', 'italic', 'underline', 'fontFamily', 'blockQuote', 'link']`
- theme: Set the theme for the editor. Options: 'light', 'dark'.
- fixed: Boolean to control whether the toolbar is fixed at the top. Set true for a fixed toolbar or false for a floating toolbar.
- onContentChange: A callback function that returns the updated editor content to the parent component.

## Example Tools
- Formatting Tools: `bold`, `italic`, `underline`, `header`, `fontSize`, `fontFamily`
- Insert Tools: `link`, `blockQuote`, `code`, `file`
- Alignment Tools: `alignLeft`, `alignCenter`, `alignRight`
- Utility Tools: `bgPicker`, `colorPicker`, `remove`

## Customization
You can customize the `tools` you want in the toolbar by modifying the tools prop in the `TextEase` component. Additionally, the editor supports theme changes (`light` or `dark`) and toolbar positioning (`fixed` or `dynamic`).

## Contribution
We welcome contributions! If you'd like to contribute to Textease, feel free to submit issues or pull requests on our [GitHub repository]().

## License
This project is licensed under the MIT License.

## Keywords
- React Rich Text Editor
- Textease
- Rich Text Editing
- Customizable Toolbar
- Text Formatting Tools
- React Component