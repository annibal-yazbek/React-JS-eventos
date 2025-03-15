import { useState } from "react";

const EventHandlingExamples = () => {
  const handleClick = () => {
    alert("Testando");
  };

  const handleGreetings = (name) => {
    alert(`Olá ${name}`);
  };

  const [name, setName] = useState("");

  // Evento de formulário - evitando recarga da pagina
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`enviado! ${name}`);
  };

  return (
    <div>
      <button onClick={() => alert("oi")}>Clique aqui</button>
      <button onClick={handleClick}>Clique aqui 2</button>
      <br />
      <button onClick={() => handleGreetings("Ana")}>Dizer Olá Ana</button>
      <button onClick={() => handleGreetings("Pedro")}>Dizer Olá Pedro</button>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default EventHandlingExamples;
