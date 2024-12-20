/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import { DownOutlined } from "@ant-design/icons";
import { Button, Tree } from "antd";
import type { TreeProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { getAllMenuList, getAllOptionList, getFilteredMenuList, saveMenu } from "@/redux/actions/menuAction";
import { IoMdAdd } from "react-icons/io";

const Menu: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const menuList = useSelector((state: RootState) => state.menuDataList.menuList)
  const optionList = useSelector((state: RootState) => state.menuDataList.optionList)

  useEffect(() => {
    dispatch(getAllMenuList())
    dispatch(getAllOptionList())
  },[])
  const onSelect: TreeProps["onSelect"] = (selectedKeys: any, info) => {
    // console.log("selected", selectedKeys, info);
    setSelectedNode(selectedKeys.length > 0 ? selectedKeys[0] : null);
  };
  const [activeTabTree, setActiveTabTree] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [parentId, setParentId] = useState('')
  const [name, setName] = useState('')
  const [depth, setDepth] = useState('')
  const [parentData, setParentData] = useState('')

  const Dropdown = ({ data }: { data: any }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(getFilteredMenuList(event.target.value))
      const selectedId = event.target.value; // Get the selected option's value
      console.log(`Selected ID: ${selectedId}`); // Log the selected ID
      setSelectedValue(selectedId); // Update state with the selected value
    };
    const renderOptions = (nodes: any, depth = 0) => {
      return nodes.map((node: any) => (
        <React.Fragment key={node.id} >
          <option value={node.id} >{node.name}</option>
          {node.children && renderOptions(node.children, depth + 1)}
        </React.Fragment>
      ));
    };

    return (
      <select
        value={selectedValue}
        className="w-full lg:w-[350px] p-2 border rounded"
        onChange={handleChange}
      >
        <option value="">Select an option</option>
        {renderOptions(data)}
      </select>
    );
  };

  function OptionValues(sampleData: any) {
    return (
      <div className="App">
        <Dropdown data={sampleData} />
      </div>
    );
  }

  const handleAddButtonClick = (nodeId: any) => {
    setParentId(nodeId.id)
    setDepth(nodeId.depth)
    setParentData(nodeId.name)
    console.log("Add button clicked for node:", nodeId);
    // You can handle the "Add" functionality here, e.g., opening a form or adding a new item
  };

  const handleSubmit = () => {
    const data = {
      name: name,
      depth: depth,
      parentId: parentId
    }
    dispatch(saveMenu(data))
    setParentId('')
    setName('')
    setDepth('')
    setParentData('')
  }
  // const [menuArry, setMenuArray] = useState([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapToMenuData = (menuAllData: any) => {
    return menuAllData.map((data: { name: any; id: any; children: any; depth: number }) => ({
      title: (
        <div className="flex items-center gap-2">
          {data.name}
          {selectedNode === data.id && (
            <Button onClick={() => handleAddButtonClick(data)} size="small" className="w-fit bg-blue-500 text-white rounded-full">
              <IoMdAdd/>
            </Button>
          )}
        </div>
      ),
      key: data.id,
      depthId: data.depth,
      children: data.children ? mapToMenuData(data.children) : [],
      //   setMenuArray({title, key})
    }));
  };
  const menuListData = mapToMenuData(menuList);
  const OptionData = OptionValues(optionList);
  // console.log("menuDataArry : ", menuListData);

  return (
    <div className="w-full lg:w-[70%] lg:p-4 lg:px-16 h-auto mt-4 lg:mt-0">
      <span className="w-full flex items-start justify-start gap-2">
        <VscFileSymlinkDirectory className="text-xl fill-gray-500" />
        <p className="text-md text-gray-500 ">/ Menus</p>
      </span>
      <div className="w-full mt-8 flex items-center justify-start gap-6">
        <span className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <AiOutlineAppstore className="w-14 fill-white text-lg " />
        </span>
        <p className="text-3xl font-bold tracking-wide   ">Menus</p>
      </div>
      <div className="w-auto mt-6 flex flex-col">
        <label className="w-fit text-base tracking-wide text-gray-500">
          Menu
        </label>
        {/* <select id="cars" name="cars" className="w-[350px] p-2 border rounded"> */}
        {OptionData}
        {/* </select> */}
      </div>
      <div className="w-full flex items-center justify-start gap-4 mt-5">
        <button
          onClick={() => setActiveTabTree("expand-all")}
          className={`w-fit border rounded-full px-7 py-2 text-sm ${
            activeTabTree === "expand-all"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white"
          }`}
        >
          Expand All
        </button>
        <button
          onClick={() => setActiveTabTree("collapse-all")}
          className={`w-fit border rounded-full px-7 py-2 text-sm ${
            activeTabTree === "collapse-all"
              ? "bg-black text-white"
              : "hover:bg-black hover:text-white"
          }`}
        >
          Collapse All
        </button>
      </div>
      <div className="w-full flex justify-between flex-wrap lg:flex-nowrap ">
      <div className="w-full mt-6">
        <Tree
          showLine
          switcherIcon={<DownOutlined />}
          defaultExpandedKeys={menuListData.key}
          onSelect={onSelect}
          treeData={menuListData}
        />
      </div>
      <div className="w-full mt-6 lg:ml-6 ">
        <div className="w-auto h-auto   rounded">
          <form>
            <div className="w-full lg:p-4">
              <div className="w-full lg:w-[350px] flex flex-col mb-3">
                <label className="w-full text-base text-gray-500 tracking-wide">Menu Id</label>
                <input type="text" value={parentId} onChange={(e) => setParentId(e.target.value)} className="w-full px-3 py-1 border cursor-pointer rounded-lg"/>
              </div>
              <div className="w-ull flex flex-col mb-3">
                <label className="w-full text-base text-gray-500 tracking-wide">Depth</label>
                <input type="text" value={depth} onChange={(e) => setDepth(e.target.value)} className="w-fit px-3 py-1 border cursor-pointer rounded-lg"/>
              </div>
              <div className="w-ull flex flex-col mb-3">
                <label className="w-full text-base text-gray-500 tracking-wide">Parent Data</label>
                <input type="text" value={parentData} onChange={(e) => setParentData(e.target.value)} className="w-fit px-3 py-1 border cursor-pointer rounded-lg"/>
              </div>
              <div className="w-ull flex flex-col ">
                <label className="w-full text-base text-gray-500 tracking-wide">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-fit px-3 py-1 border cursor-pointer rounded-lg"/>
              </div>
              <Button onClick={handleSubmit} className="w-[220px] mt-4 bg-blue-500 cursor-pointer text-white text-lg tracking-wide rounded-full">Save</Button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Menu;
