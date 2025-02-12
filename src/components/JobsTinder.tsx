import { useState } from "react";
import TinderCard from "react-tinder-card";
import { Link } from "react-router-dom";

interface JobCard {
  id: number;
  company: string;
  position: string;
  salary: string;
  location: string;
  description: string;
  requirements: string;
  benefits: string;
  logo: string;
}

const JobsTinder = () => {
  const [jobs, setJobs] = useState<JobCard[]>([
    {
      id: 1,
      company: "Tech Innovators",
      position: "Desenvolvedor Front-end",
      salary: "R$ 8.000 - 12.000",
      location: "Remoto",
      description: "Trabalhe em projetos inovadores usando React e TypeScript",
      requirements: "3+ anos de experiência com React",
      benefits: "VR/VA, Plano de saúde, Horário flexível",
      logo: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      company: "Digital Solutions",
      position: "UX Designer",
      salary: "R$ 6.000 - 9.000",
      location: "Híbrido (SP)",
      description: "Design de interfaces para aplicativos mobile",
      requirements: "Experiência com Figma e Adobe XD",
      benefits: "Bonus anual, Gympass",
      logo: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      company: "StartUp Hub",
      position: "Full-stack Developer",
      salary: "R$ 10.000 - 15.000",
      location: "Presencial (RJ)",
      description: "Desenvolver aplicações do zero para novo produto",
      requirements: "Node.js, React, AWS",
      benefits: "Equity, Ambiente descontraído",
      logo: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      company: "Fintech X",
      position: "Back-end Engineer",
      salary: "R$ 12.000 - 18.000",
      location: "Remoto",
      description: "Otimização de sistemas financeiros",
      requirements: "Java, Spring Boot, SQL",
      benefits: "PLR, Seguro de vida",
      logo: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      company: "Match Company",
      position: "Tech Lead",
      salary: "R$ 20.000",
      location: "Híbrido",
      description: "Liderança técnica de equipe",
      requirements: "5+ anos experiência, Inglês avançado",
      benefits: "Todos os benefícios",
      logo: "https://via.placeholder.com/100",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(jobs.length - 1); // Começa do último card
  const [match, setMatch] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const onSwipe = (direction: string) => {
    if (direction === "right" && currentIndex === 0) {
      // Match no 5º card (índice 0)
      setMatch(true);
    }
    setCurrentIndex((prevIndex) => prevIndex - 1); // Vai para o próximo card
  };

  const sendMessage = () => {
    if (chatMessage.trim()) {
      setMessages([...messages, chatMessage]);
      setChatMessage("");
    }
  };

  const closeChat = () => {
    setMatch(false);
    setMessages([]);
  };

  return (
    <div className="auth-container">
      <h2>Oportunidades de Emprego</h2>

      <div className="cards-container">
        {currentIndex >= 0 && (
          <TinderCard
            key={jobs[currentIndex].id}
            onSwipe={(dir) => onSwipe(dir)}
            preventSwipe={["up", "down"]}
            className="swipe-card"
          >
            <div className="job-card">
              <img
                src={jobs[currentIndex].logo}
                alt={jobs[currentIndex].company}
                className="company-logo"
              />
              <h3>{jobs[currentIndex].position}</h3>
              <h4>{jobs[currentIndex].company}</h4>
              <p className="salary">{jobs[currentIndex].salary}</p>
              <div className="details">
                <p>
                  <strong>Localização:</strong> {jobs[currentIndex].location}
                </p>
                <p>
                  <strong>Descrição:</strong> {jobs[currentIndex].description}
                </p>
                <p>
                  <strong>Requisitos:</strong> {jobs[currentIndex].requirements}
                </p>
                <p>
                  <strong>Benefícios:</strong> {jobs[currentIndex].benefits}
                </p>
              </div>
            </div>
          </TinderCard>
        )}
      </div>

      {currentIndex < 0 && (
        <div className="no-jobs">
          <h3>Não há mais vagas disponíveis</h3>
          <Link to="/" className="logout-button">
            Voltar
          </Link>
        </div>
      )}

      {match && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Match com {jobs[0].company}! 🎉</h3>
              <button onClick={closeChat} className="close-button">
                &times;
              </button>
            </div>
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className="message">
                  {msg}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
              />
              <button onClick={sendMessage}>Enviar</button>
            </div>
          </div>
        </div>
      )}

      <div className="buttons">
        <Link to="/" className="logout-button">
          Sair
        </Link>
      </div>
    </div>
  );
};

export default JobsTinder;
