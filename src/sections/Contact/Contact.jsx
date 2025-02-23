import styles from './ContactStyles.module.css';
import { toast } from 'react-toastify';

function Contact() {

  const showSuccessToast = () => {
 
    toast.success("Email Sent!")
    
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "aabd581d-6e6d-4ae3-909b-7e51c9a19249");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      showSuccessToast();
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor=""></label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor=""></label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor=""></label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
      <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
