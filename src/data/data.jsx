import { FaHeartbeat, FaBrain, FaStethoscope } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import team_1 from "../assets/images/team_1.jpg";
import team_2 from "../assets/images/team_2.jpg";
import review_1 from "../assets/images/review_img_1.jpg";
import review_2 from "../assets/images/review_img_2.jpg";

const data = {
  items: [
    {
      id: 1,
      icon: <FaHeartbeat />,
      description: "Cardiology",
    },
    {
      id: 2,
      icon: <FaBrain />,
      description: "Neurology",
    },
    {
      id: 3,
      icon: <FaUserDoctor />,
      description: "Orthopaedics",
    },
    {
      id: 4,
      icon: <FaStethoscope />,
      description: "Surgery",
    },
  ],
  specialist: [
    {
      id: 1,
      image: team_1,
      name: "Dr. Jennifer Lee",
      speciality: "Dentist",
      icon: <FaHeartbeat />,
    },
    {
      id: 2,
      image: team_2,
      name: "Dr. Timothy Davis",
      speciality: "Cardiologist",
      icon: <FaBrain />,
    },
  ],
  reviews: [
    {
      id: 1,
      image: review_1,
      review:
        "I was unable to visit a hospital due to my condition, but Divine Mercy Health Services made it possible for me to receive the care I needed from home. The doctor was thorough, compassionate, and helped me get back on track.",
      name: "Jonas Scottman",
      customer: "Patient",
    },
    {
      id: 2,
      image: review_2,
      review:
        "I’ve never experienced healthcare like this before. The consultation was easy, and the specialist took the time to explain everything clearly. I felt supported and cared for, even though I was miles away from the clinic.",
      name: "Marry Jane",
      customer: "Patient",
    },
  ],
  doctors: [
    { name: "Dr. Alice Smith", specialty: "Cardiology", phone: "1234567890" },
    { name: "Dr. Brian Johnson", specialty: "Neurology", phone: "1234567890" },
    { name: "Dr. Clara Davis", specialty: "Pediatrics", phone: "1234567890" },
  ],
};

export default data;
