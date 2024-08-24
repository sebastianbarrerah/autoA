import MonacoEditor from '@monaco-editor/react'

const CodeEditor = () => {
  const handleEditorChange = (value: string | undefined) => {
    console.log('Editor value changed:', value);
  };

  return (
    <MonacoEditor
      height="400px"
      width="100%"
      defaultLanguage="javascript"
      defaultValue="Escribe aqui tu respuesta"
      onChange={handleEditorChange}
      theme="vs-dark"
      options={{
        selectOnLineNumbers: true,
        automaticLayout: true,
      }}
    />
  );
};

export default CodeEditor;
