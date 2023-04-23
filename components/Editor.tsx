"use client";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = ({ setCode }) => {
  function onChange(newValue: any) {
    setCode(newValue);
  }
  return (
    <AceEditor
      mode="mysql"
      className=""
      theme="monokai"
      name="my-ace-editor"
      editorProps={{ $blockScrolling: true }}
      onChange={onChange}
      fontSize={14}
      width="100%"
      height="500px"
    />
  );
};

export default Editor;
