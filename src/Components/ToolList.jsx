import React from 'react';
import ToolItem from './ToolItem';

const ToolList = ({ tools, removeTool, editTool }) => {
  return (
    <ul>
      {tools.map((tool, index) => (
        <ToolItem
          key={index}
          tool={tool}
          index={index}
          removeTool={removeTool}
          editTool={editTool}
        />
      ))}
    </ul>
  );
};

export default ToolList;
