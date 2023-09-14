import MenuItem from "./menu-item";

import email from "/assets/email.png";
import facebook from "/assets/facebook.png";
import linkedin from "/assets/linkedin.png";
import twitter from "/assets/twitter.png";

export default function Menu({className}) {
  let menuItems = [
    [email, "Email", "email"],
    [facebook, "Facebook", "facebook"],
    [linkedin, "Linkedin", "linkedin"],
    [twitter, "Twitter", "twitter"],
  ];
  return (
    <ul className={className}>
      {menuItems.map(([img, desc, alt], ind) => (
        <li key={ind}>
          <MenuItem img={img} desc={desc} alt={alt} />
        </li>
      ))}
    </ul>
  );
}
