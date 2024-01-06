interface IfileInfo {
  name: string;
  size: string;
}

const FilePreviewCard: React.FC<IfileInfo> = ({ name, size }): JSX.Element => {
  return (
    <div className="file-preview">
      <div className="file-name">
        <p>{name}</p>
      </div>
      <div className="file-size">
        <p>{size}</p>
      </div>
    </div>
  );
};

export default FilePreviewCard;
