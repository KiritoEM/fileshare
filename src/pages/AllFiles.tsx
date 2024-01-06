import AllfilesContent from "../components/AllFiles/AllfilesContent";
import AppHeader from "../components/ChildrenComponents/UploadHeader";

const AllFiles = (): JSX.Element => {
  return (
    <section id="allFile-page">
      <AppHeader />
      <AllfilesContent />
    </section>
  );
};

export default AllFiles;
