import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import useDarkModeStore from '../stores/DarkModeStore';
import PythonCompiler from '../components/PythonCompiler';
import Slide from '../components/Slide';

const PythonCompilerSlide = () => {
    const [code, setCode] = useState('print("Hello, World!")');
    const { darkMode } = useDarkModeStore();

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    return (
        <Slide>
            <div className="space-y-4">
                <h2 className="mb-4 text-3xl font-bold">Slide with Python Code Compiler</h2>
                <div className="overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800">
                    <Editor
                        width="100%"
                        height="300px"
                        // language="python"
                        value={code}
                        defaultLanguage="python"
                        onChange={handleCodeChange}
                        theme={darkMode ? 'vs-dark' : 'vs'}
                        options={{
                            minimap: { enabled: false },
                            wordWrap: 'on',
                            wrappingIndent: 'same',
                            lineNumbers: 'on',
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                        }}
                    />
                </div>
                <PythonCompiler code={code} />
            </div>
        </Slide>
    );
};

export default PythonCompilerSlide;