import React, { useState } from 'react';
import ToolList from './Components/ToolList';
import ToolForm from './Components/ToolForm';
import './App.css';

const App = () => {
  const [tools, setTools] = useState([]);

  const addTool = (tool) => {
    setTools([...tools, tool]);
  };

  const removeTool = (index) => {
    setTools(tools.filter((_, i) => i !== index));
  };

  const editTool = (index, updatedTool) => {
    const updatedTools = tools.map((tool, i) => (i === index ? updatedTool : tool));
    setTools(updatedTools);
  };

  return (
    <div className="App">
      <h1>Lista de Ferramentas de Desenvolvimento</h1>
      <ToolForm addTool={addTool} />
      <ToolList tools={tools} removeTool={removeTool} editTool={editTool} />
    </div>
  );
};

export default App;
