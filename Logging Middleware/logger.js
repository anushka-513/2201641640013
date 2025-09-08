const ACCESS_TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbnVzaGthc2hhcnJtYTA0MDNAZ21haWwuY29tIiwiZXhwIjoxNzU3MzIwMjczLCJpYXQiOjE3NTczMTkzNzMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJmZmE0YTA0MC0yYTBhLTQ5MTktOWE5Mi1lNjcwODUwMjc4NWQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhbnVzaGthIHZpc2h3YWthcm1hIiwic3ViIjoiMDFlNzkxNjQtNTIxZS00MTQ0LWEzNDAtNDA4M2FkZWM1NTM2In0sImVtYWlsIjoiYW51c2hrYXNoYXJybWEwNDAzQGdtYWlsLmNvbSIsIm5hbWUiOiJhbnVzaGthIHZpc2h3YWthcm1hIiwicm9sbE5vIjoiMjIwMTY0MTY0MDAxMyIsImFjY2Vzc0NvZGUiOiJzQVdUdVIiLCJjbGllbnRJRCI6IjAxZTc5MTY0LTUyMWUtNDE0NC1hMzQwLTQwODNhZGVjNTUzNiIsImNsaWVudFNlY3JldCI6ImVzTnB4cm1tQ3F5YUNock0ifQ.8gD-dpVWk9rIMW7berOuQTlOyvcuLHOv61uC0aeoGww";
const LOGS_API_URL = "http://20.244.56.144/evaluation-service/logs";
const logToServer = async (stack, level, package, message) => {
  try {
    const response = await fetch(LOGS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": Bearer ${ACCESS_TOKEN}
      },
      body: JSON.stringify({
        stack,
        level,
        package,
        message
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Failed to send log to server:", errorData.message);
      return;
    }

    const result = await response.json();
    console.log("Log sent successfully:", result.logID);

  } catch (error) {
    console.error("Network error while sending log:", error);
  }
};

export default logToServer;
