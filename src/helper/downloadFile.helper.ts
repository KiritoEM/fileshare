export default function downloadfilehelper() {
  const downloadFile = (name: string, url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click(); 
    document.body.removeChild(link);
  };

  return { downloadFile };
}
