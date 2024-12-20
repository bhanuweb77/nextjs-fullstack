/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const Dropdown = ({ data }: {data:any}) => {
  const renderOptions = (nodes:any, depth = 0) => {
    return nodes.map((node:any) => (
      <React.Fragment key={node.id}>
        <option value={node.id}>
        {node.name}
        </option>
        {node.children && renderOptions(node.children, depth + 1)}
      </React.Fragment>
    ));
  };

  return (
    <select>
      <option value="">Select an option</option>
      {renderOptions(data)}
    </select>
  );
};

// Sample data
const sampleData = [
  {
    id: '57c3c01c-1e62-4aad-98dd-302485f2b181',
    name: 'A K',
    parentId: null,
    depth: 0,
    createdAt: '2024-12-19T08:31:29.987Z',
    updatedAt: '2024-12-19T08:31:29.987Z',
    children: [
      {
        id: '476d5601-9692-4464-b519-a55691e9e0e6',
        name: 'A K',
        parentId: '57c3c01c-1e62-4aad-98dd-302485f2b181',
        depth: 0,
        createdAt: '2024-12-19T08:31:55.099Z',
        updatedAt: '2024-12-19T08:31:55.099Z',
        children: [
          {
            id: '560970f6-6bc7-401c-852a-bdf91c7b0d69',
            name: 'Menu L2',
            parentId: '476d5601-9692-4464-b519-a55691e9e0e6',
            depth: 2,
            createdAt: '2024-12-19T08:32:30.675Z',
            updatedAt: '2024-12-19T08:32:30.675Z',
            children: [
              {
                id: '7cdb693d-d01c-40a4-92db-a50c60c2ac00',
                name: 'Menu L3',
                parentId: '560970f6-6bc7-401c-852a-bdf91c7b0d69',
                depth: 3,
                createdAt: '2024-12-19T08:32:51.682Z',
                updatedAt: '2024-12-19T08:32:51.682Z',
                children: [
                  {
                    id: '50dbcd45-7554-469d-bb56-f2e3949436c0',
                    name: 'Menu L4 Updated',
                    parentId: '7cdb693d-d01c-40a4-92db-a50c60c2ac00',
                    depth: 2,
                    createdAt: '2024-12-19T08:33:08.281Z',
                    updatedAt: '2024-12-19T09:05:33.990Z',
                    children: [
                      {
                        id: 'fb233fc5-2144-4d3e-ba3b-9d33f66cef05',
                        name: 'Menu L5',
                        parentId: '50dbcd45-7554-469d-bb56-f2e3949436c0',
                        depth: 5,
                        createdAt: '2024-12-19T08:33:26.195Z',
                        updatedAt: '2024-12-19T08:33:26.195Z',
                        children: [
                          {
                            id: '17ac2ee7-baac-494a-b6ed-c60ee05588c8',
                            name: 'Menu L6',
                            parentId: 'fb233fc5-2144-4d3e-ba3b-9d33f66cef05',
                            depth: 6,
                            createdAt: '2024-12-19T09:00:23.167Z',
                            updatedAt: '2024-12-19T09:00:23.167Z',
                            children: [
                              {
                                id: '67c7f3cb-825a-4470-9cb0-33b91b359ce6',
                                name: 'Menu L7',
                                parentId: '17ac2ee7-baac-494a-b6ed-c60ee05588c8',
                                depth: 7,
                                createdAt: '2024-12-19T09:00:42.097Z',
                                updatedAt: '2024-12-19T09:00:42.097Z',
                                children: [
                                  {
                                    id: '751dc192-ce05-4753-be02-a09eb52eebc0',
                                    name: 'Menu L8',
                                    parentId: '67c7f3cb-825a-4470-9cb0-33b91b359ce6',
                                    depth: 8,
                                    createdAt: '2024-12-19T09:01:07.069Z',
                                    updatedAt: '2024-12-19T09:01:07.069Z',
                                    children: []
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '212eabb9-2065-4fdf-9629-b7f409a72f1e',
    name: 'Menu L8',
    parentId: null,
    depth: 8,
    createdAt: '2024-12-19T10:32:29.762Z',
    updatedAt: '2024-12-19T10:32:29.762Z',
    children: [
      {
        id: 'f4acc51f-9a06-4cae-b321-ba0b0c32bcee',
        name: 'Menu T2',
        parentId: '212eabb9-2065-4fdf-9629-b7f409a72f1e',
        depth: 2,
        createdAt: '2024-12-19T10:33:04.448Z',
        updatedAt: '2024-12-19T10:33:04.448Z',
        children: []
      }
    ]
  }
];

function OptionValues() {
  return (
    <div className="App">
      <h1>React Dropdown</h1>
      <Dropdown data={sampleData} />
    </div>
  );
}

export default OptionValues;