import styles from "../../style";

import { contacts, Contact } from "../../constants/contact";

function ListElement(contact: { cont: Contact }) {
  return (
    <div id={contact.cont.id} className={`p-5`}>
      <div className={`flex-col flex ${styles.paragraph}`}>
        <p className={styles.heading2}>{contact.cont.name}</p>
        <a
          href={"mailto:" + contact.cont.email}
          className="text-gradient cursor-pointer"
        >
          {'> ' + contact.cont.email}
        </a>
        <a
          href={"tel:" + contact.cont.tel}
          className="text-gradient cursor-pointer"
        >
          {'> ' + contact.cont.tel}
        </a>
        <div className={`flex flex-col`}>
          {contact.cont.adress.map((txt, ind) => (
            <p
              key={ind}
              className={`${
                ind === contact.cont.adress.length - 1 ? "mr-0" : "mr-5"
              }`}
            >
              {txt}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

const ContactList = () => {
  return (
    <section id="list" className={`flex flex-col ${styles.boxWidth}`}>
      <div className={`z-[5] flex w-full flex-row flex-wrap`}>
        {contacts.map((el, index) => (
          <ListElement key={index} cont={el} />
        ))}
      </div>
    </section>
  );
};

export default ContactList;
