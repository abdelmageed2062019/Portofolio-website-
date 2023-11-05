import { FaFileDownload } from "react-icons/fa";
import Tooltip from "./Tooltip";
import MyCv from "../assets/ABDELMAGEED_RESUME.pdf";

const Portofolio = () => {
  const downloadFile = () => {
    // Define the file URL or file path
    const fileUrl = MyCv;

    // Create an anchor element to trigger the download
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "Abdelmageed-hamdi-cv.pdf"; // Specify the name for the downloaded file
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className="fixed-icon">
      <Tooltip text="Download My Cv">
        <div className="icon" onClick={downloadFile}>
          <FaFileDownload />
        </div>
      </Tooltip>
    </div>
  );
};

export default Portofolio;
