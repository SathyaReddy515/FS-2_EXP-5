import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-card">
        <h1 className="dashboard-title">My Skills</h1>

        <div className="skills-grid">
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">Git</span>
        </div>
      </div>
    </div>
  )
}
