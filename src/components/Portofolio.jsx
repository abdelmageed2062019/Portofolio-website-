import { FaFileDownload } from "react-icons/fa";
import Tooltip from "./Tooltip";
import MyCv from "../assets/Abdelmageed Hamdi _ Phone_ 01026640658 _ Email_ abdlemageedhamdi@gmail.com.pdf";

const Portofolio = () => {
  const downloadFile = () => {
    // Define the file URL or file path
    const fileUrl = MyCv;

    // Create an anchor element to trigger the download
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download =
      "Abdelmageed Hamdi _ Phone_ 01026640658 _ Email_ abdlemageedhamdi@gmail.com.pdf"; // Specify the name for the downloaded file
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className="fixed-icon">
      <Tooltip text="My Cv">
        <div className="icon" onClick={downloadFile}>
          <FaFileDownload />
        </div>
      </Tooltip>
    </div>
  );
};

export default Portofolio;
