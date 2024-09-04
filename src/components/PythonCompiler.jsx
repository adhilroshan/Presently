import React, { useState } from 'react';
import axios from 'axios';

const PythonCompiler = ({ code }) => {
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const runCode = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.post('https://presently-hljl.onrender.com/run-python', { 
               code
             });
            console.log(response.data);
            setOutput(response.data.output||response.data.error);
        } catch (err) {
            setError('Error compiling Python code. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <button
                onClick={runCode}
                className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                disabled={loading}
                aria-label="Run Python code"
            >
                {loading ? 'Running...' : 'Run Code'}
            </button>
            {error && (
                <div className="text-red-500">{error}</div>
            )}
            <div className="mt-4">
                <h3 className="text-lg font-medium">Output:</h3>
                <pre className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 text-white rounded overflow-x-auto">
                    <code>
                    {output}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default PythonCompiler;