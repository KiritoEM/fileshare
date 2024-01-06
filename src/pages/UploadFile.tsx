import AppHeader from "../components/ChildrenComponents/UploadHeader";
import RecentFile from "../components/Upload/RecentFile";
import UploadArea from "../components/Upload/UploadArea";

const UploadFile = (): JSX.Element => {
  return (
    <section id="uploadFile-page">
      <AppHeader />
      <UploadArea />
      <RecentFile />
    </section>
  );
};

export default UploadFile;
