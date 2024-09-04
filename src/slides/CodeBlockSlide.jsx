import React from 'react';
import Slide from '../components/Slide';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeString = `function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World");`;

const CodeBlockSlide = () => {

    return (
        <Slide>
            <h2 className="text-3xl font-bold mb-4">Slide with Code Block</h2>
            <SyntaxHighlighter  language="javascript" style={atomDark}>
                {codeString}
            </SyntaxHighlighter>
        </Slide>
    )
};

export default CodeBlockSlide;