import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import ts from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import dart from 'react-syntax-highlighter/dist/esm/languages/hljs/dart';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql';
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('ts', ts);
SyntaxHighlighter.registerLanguage('tsx', ts);
SyntaxHighlighter.registerLanguage('jsx', js);
SyntaxHighlighter.registerLanguage('dart', dart);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('shell', bash);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('sql', sql);
SyntaxHighlighter.registerLanguage('html', xml);
SyntaxHighlighter.registerLanguage('xml', xml);

const CodeBlock = ({ code = '', language = 'javascript', filename }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-6 overflow-hidden border border-[#333] rounded-none bg-[#1a1a1a]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#111] border-b border-[#333]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          {filename && (
            <span className="font-label-mono text-[11px] text-neutral-400">{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {language && (
            <span className="font-label-mono text-[10px] uppercase tracking-widest text-neutral-500">
              {language}
            </span>
          )}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 font-label-mono text-[11px] text-neutral-400 hover:text-white transition-colors"
            aria-label="Copy code"
          >
            {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={{
          margin: 0,
          padding: '1.25rem',
          background: '#1a1a1a',
          fontSize: '0.8125rem',
          lineHeight: '1.7',
          overflowX: 'auto',
        }}
        showLineNumbers={code.split('\n').length > 5}
        lineNumberStyle={{ color: '#444', minWidth: '2em', paddingRight: '1em' }}
      >
        {String(code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
