import { motion } from "framer-motion";
import { Element } from "react-scroll";
import "./ReadMore.scss";

export default function ReadMore() {
  const sections = [
    { id: "section1", title: "Lokalizacja", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: "section2", title: "O grze", text: "Curabitur nec justo vitae nisl tempor ultricies." },
    { id: "section3", title: "Postacie", text: "Duis sit amet mi nec neque pulvinar fermentum." },
    { id: "section4", title: "Fabuła", text: "Integer ac justo nec libero luctus vestibulum." },
  ];

  return (
    <div className="readmore-container">
      {sections.map((sec, index) => (
        <Element key={sec.id} name={sec.id}>
          <motion.section
            className={`section ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="content">
              <h1>{sec.title}</h1>
              <p>{sec.text}</p>
            </div>
          </motion.section>
        </Element>
      ))}
    </div>
  );
}
