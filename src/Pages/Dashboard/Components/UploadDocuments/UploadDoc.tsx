import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFirebaseStore } from "../../../../Hooks";
import { UploadTask } from "firebase/storage";

import GoingUp from "../../../../Asset/svg/going_up2.svg";

import "./UploadDoc.scss";

interface allFilesType {
  lastModified: number;
  name: string;
  path: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

const UploadDoc = () => {
  const [fileList, setFileList] = useState<allFilesType[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    setFileList((pre) => [...pre, ...acceptedFiles]);
  }, []);

  const { uploadFiles } = useFirebaseStore();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUploadFiles = () => {
    const promises: UploadTask[] = [];
    fileList.map(async (file) => {
      const task = uploadFiles(file);
      promises.push(task);
      task.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      });
    });

    Promise.all<UploadTask>(promises)
      .then(() => alert("All Files uploaded"))
      .catch((err) => console.log(err));
  };
  return (
    <main id="uploadDoc" style={{ backgroundImage: `url(${GoingUp})` }}>
      {/* <GoingUp className="goingUp-svg" /> */}
      <div className={`contentBody`}>
        <form>
          <div
            className={isDragActive ? "dropZoneActive dropZone" : "dropZone"}
            {...getRootProps()}
          >
            <span>Drag or drop files</span>
            <span>Or</span>
            <label htmlFor="dropZoneFiles">Select Files </label>
            <input
              type="file"
              id="dropZoneFiles"
              multiple
              {...getInputProps()}
            />
          </div>
          <button type="button" id="uploadBtn" onClick={handleUploadFiles}>
            upload
          </button>
        </form>
        <div className="progressBar">
          <div
            className="progressFill"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
        {fileList.length > 0 && <AllFiles list={fileList} />}
      </div>
    </main>
  );
};

interface AllFilesProp {
  list: allFilesType[];
}

const AllFiles = ({ list }: AllFilesProp) => {
  return (
    <ol className="filesList">
      {list.map(({ name }, key) => {
        return <li key={key}>{name}</li>;
      })}
    </ol>
  );
};

export default UploadDoc;
