import React, { useState, useEffect } from 'react';

interface EditableHtmlProps {
  initialHtml: string;
}

const EditableHtml: React.FC<EditableHtmlProps> = ({ initialHtml }) => {
  const [html, setHtml] = useState(initialHtml);

  useEffect(() => {
    setHtml(initialHtml);
  }, [initialHtml]);

  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    setHtml(event.currentTarget.innerHTML);
  };

  return (
    <div
      contentEditable
      dangerouslySetInnerHTML={{ __html: html }}
      onInput={handleInput}
      className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default EditableHtml;
