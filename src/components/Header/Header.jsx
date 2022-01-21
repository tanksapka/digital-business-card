export default function Header() {
  return (
    <header className="header-container">
      <img src="./photo.png" alt="self portrait" className="photo" />
      <div className="title-container">
        <h2 className="name">Laura Smith</h2>
        <h5 className="job-title">Frontend Developer</h5>
        <a className="website" href="/">
          laurasmith.website
        </a>
      </div>
      <div className="btn-container">
        <button className="btn email">
          <span className="icon"></span>Email
        </button>
        <button className="btn linkedin">
          <span className="icon"></span>LinkedIn
        </button>
      </div>
    </header>
  );
}
