import React, { useState } from 'react';

const ToolItem = ({ tool, index, removeTool, editTool }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(tool.name);
  const [description, setDescription] = useState(tool.description);

  const handleEdit = () => {
    editTool(index, { name, description });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Salvar</button>
        </div>
      ) : (
        <div>
          <span>{tool.name}: {tool.description}</span>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => removeTool(index)}>Remover</button>
        </div>
      )}
    </li>
  );
};

export default ToolItem;
