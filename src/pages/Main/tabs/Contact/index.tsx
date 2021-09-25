import React, { FC, useEffect, useState } from "react";
import { useTab } from "../../../../hooks/useTab";
import * as SC from "./style";
import TextInput from "../../../../components/TextInput";
import TextAreaInput from "../../../../components/TextAreaInput";
import SquareRoundedButton from "../../../../components/SquareRoundedButton";
import SnackBar from '../../../../components/SnackBar'
import axios from "axios";

const Contact: FC = () => {
  const { setTab } = useTab();
  const [snackOpen, setSnack]= useState(false);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: " ",
    email: " ",
    subject: " ",
    body: " ",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });
  const sendMail = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.post(
        "https://api-blassantome.herokuapp.com//mail/send",
        //"https://api.blassantome.com/mail/send",
=======
      //const response =
          await axios.post(
        //"http://localhost:2233/mail/send",
        "https://api.blassantome.com/mail/send",
>>>>>>> 9df39c071755aa3480a3418cfd38b48693d37e47
        formData
      );

      //setLoading(false);
      displaySnack();
    } catch (error) {
      //setLoading(false);
      //setError(error.response);
    }
  };

  const displaySnack = () => {
    setSnack(true);
    setTimeout(() => {
      setSnack(false)
    }, 6000);
  }

  useEffect(() => {
    setTab(3);
  }, [setTab]);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleOnClick = () => {
<<<<<<< HEAD

      sendMail();
    
=======
    // const validFormErrors = {
    //   name: "",
    //   email: "",
    //   subject: "",
    //   body: "",
    // };
    // if (formErrors === validFormErrors) {
      sendMail();
    //}
>>>>>>> 9df39c071755aa3480a3418cfd38b48693d37e47
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (e.target.name) {
      case "name":
        if (e.target.value.length < 2) {
          setFormErrors({
            ...formErrors,
            name: "El nombre debe contener al menos 2 caracteres",
          });
        } else {
          setFormErrors({ ...formErrors, name: "" });
        }
        break;
      case "email":
        if (
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
        ) {
          setFormErrors({ ...formErrors, email: "" });
        } else {
          setFormErrors({ ...formErrors, email: "El formato no es correcto" });
        }
        break;
      case "subject":
        if (e.target.value.length < 2) {
          setFormErrors({
            ...formErrors,
            subject: "El nombre debe contener al menos 2 caracteres",
          });
        } else {
          setFormErrors({ ...formErrors, subject: "" });
        }
        break;
      case "body":
        if (e.target.value.length < 15) {
          setFormErrors({
            ...formErrors,
            body: "El mensaje no puede ser tan corto",
          });
        } else {
          setFormErrors({ ...formErrors, body: "" });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
    <SC.InputGroupForm>
      <TextInput
        label="Nombre *"
        value={formData["name"]}
        name="name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleBlur(e)}
        error={formErrors.name}
      />
      <TextInput
        label="Email *"
        value={formData["email"]}
        name="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleBlur(e)}
        error={formErrors.email}
      />
      <TextInput
        label="Asunto *"
        value={formData["subject"]}
        name="subject"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        onBlur={(e: React.FocusEvent<HTMLInputElement>) => handleBlur(e)}
        error={formErrors.subject}
      />
      <TextAreaInput
        label="Mensaje *"
        value={formData["body"]}
        name="body"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleChange(e)
        }
        onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => handleBlur(e)}
        error={formErrors.body}
      />
      <SquareRoundedButton onClick={handleOnClick}>Enviar</SquareRoundedButton>
    </SC.InputGroupForm>
    <SnackBar open={snackOpen} body="Mensaje enviado"/>
    </div>
  );
};

export default Contact;
