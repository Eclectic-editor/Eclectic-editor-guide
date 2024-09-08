import './style.scss';

function Header() {
  return (
    <header className="header">
      <div className="inner">
        <h1>eclectic editor</h1>
        <a
          href="https://github.com/Eclectic-editor/Eclectic-editor-app/releases/download/v1.0.0/eclectic-editor-darwin-x64-1.0.0.zip"
          className="link-download"
          rel="noopener noreferrer"
        >
          <span className="text">Download</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
