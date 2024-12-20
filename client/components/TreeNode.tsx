/* eslint-disable @typescript-eslint/no-explicit-any */
"use-client"
import React from 'react';

const TreeNode = ( {node}: { node: any } ) => {
  return (
    <div className="ml-4">
      <div className="flex items-center">
        <span className="text-lg font-medium">{node.name}</span>
      </div>

      {node.children && node.children.length > 0 && (
        <div className="pl-4">
          {node.children.map((child: any) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;