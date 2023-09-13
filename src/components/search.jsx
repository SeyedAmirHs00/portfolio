import { TypeAnimation } from "react-type-animation";

export default function Search() {
  return (
    <TypeAnimation
      sequence={[
        "Hi there...",
        1000,
        "I'm Seyed Amir Hosseini...",
        1000,
        "I'm a full-stack develooper...",
        1000,
        "I'm also a CS student at KNTU university...",
        1000,
        "I'm passionate about learning new things...",
        1000,
        "I can learn anything but it just takes time...",
        1000,
        "Are you still there?",
        1000,
        "Go around and see my portfolio website.",
      ]}
      wrapper="div"
      speed={50}
    />
  );
}
