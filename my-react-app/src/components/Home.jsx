import { useEffect } from "react";

function Home() {
  useEffect(() => {
    // Simulate component work (non-blocking)
    const timer = setTimeout(() => {
      // nothing needed here, just delay for loader visibility
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>This component is lazily loaded.</p>
    </div>
  );
}

export default Home;
