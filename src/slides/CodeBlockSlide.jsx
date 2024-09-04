import React from 'react';
import Slide from '../components/Slide';

const CodeBlockSlide = () => (
    <Slide>
        <h2 className="text-3xl font-bold mb-4">Slide with Code Block</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>
                {`function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World");`}
            </code>
        </pre>
    </Slide>
);

export default CodeBlockSlide;