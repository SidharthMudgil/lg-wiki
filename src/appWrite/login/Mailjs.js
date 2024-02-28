import { useState } from "react";
import axios from "axios";

function Mailjs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState(null); // Stores server response or error message

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true); // Set loading state

    try {
      const data = { name };
      const response = await axios.post("http://localhost:3001/api/email", data);
      setResponse(response.data); // Set success message
    } catch (error) {
      setResponse({ error: error.message }); // Set error message
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required // Mark input as required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required // Mark input as required
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required // Mark input as required
        />
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
  </form>
  )}
export default Mailjs;