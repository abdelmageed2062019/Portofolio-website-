import { FaFileDownload } from "react-icons/fa";
import Tooltip from "./Tooltip";
import MyCv from "../assets/Abdelmageed Hamdi _ Phone_ 01026640658 _ Email_ abdelmageedhamdi@gmail.com.pdf.pdf";

const Portofolio = () => {
  const downloadFile = () => {
    const fileUrl = MyCv;

    const a = document.createElement("a");
    a.href = fileUrl;
    a.download =
      "Abdelmageed Hamdi _ Phone_ 01026640658 _ Email_ abdelmageedhamdi@gmail.com.pdf"; 
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
