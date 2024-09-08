import './style.scss';
import githubIcon from '../../assets/images/icon-github.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="inner">
        <p>Copyright © 2024 Eclectic Editor App</p>
        <a
          href="https://github.com/Eclectic-editor/Eclectic-editor-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="github 레포지토리 바로가기" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
