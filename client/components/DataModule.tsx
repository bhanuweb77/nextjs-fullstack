/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import type { TreeDataNode, TreeProps } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuList } from "../redux/actions/menuAction";
import { AppDispatch, RootState } from "@/redux/store";


const DataModule: React.FC = (treeArrayData) => {
  const [menuData, setMenuData] = useState([]);
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const menuList = useSelector((state: RootState) => state.menuDataList.menuList);
  // setMenuData(menuList)
  console.log(`Use Selector Data: ${menuList}`)
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMenuList());
  }, [dispatch]);

  return (
    <Tree
      showLine
      switcherIcon={<DownOutlined />}
      defaultExpandedKeys={["0-0-0"]}
      onSelect={onSelect}
      // treeData={menuList}
    />
  );
};

export default DataModule;
