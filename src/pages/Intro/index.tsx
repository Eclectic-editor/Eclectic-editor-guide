import './style.scss';

function Intro() {
  return (
    <div className="page-intro">
      <section className="section-intro">
        <div className="inner">
          <strong className="title-intro">
            Visual Web Style Editing Made Easy Test Ideas Without Permanent
            Changes!
          </strong>
          <a
            href="https://github.com/Eclectic-editor/Eclectic-editor-app/releases/download/v1.0.0/eclectic-editor-darwin-x64-1.0.0.zip"
            className="link-download"
            rel="noopener noreferrer"
          >
            <span className="text">Download Now</span>
          </a>
        </div>
      </section>
      <section className="section-feature">
        <div className="inner">
          <strong className="title-feature">
            Everything you need to visualize and test web designs with ease.
          </strong>
          <ul>
            <li>
              <div className="box-text">
                <h2>실시간 CSS 편집</h2>
                <p className="desc">
                  개발 지식이 전혀 없는 사용자도 직관적인 인터페이스로 웹
                  페이지의 스타일을 즉시 수정하고 결과를 확인할 수 있습니다.{' '}
                  <br />
                  모든 변경은 임시적이어서 안전하게 디자인을 탐색할 수 있습니다.
                </p>
              </div>
              <div className="box-video">
                <video autoPlay loop playsInline muted>
                  <source src="/style-edit.mp4" type="video/mp4" />
                </video>
              </div>
            </li>
            <li>
              <div className="box-text">
                <h2>멀티 해상도 지원</h2>
                <p className="desc">
                  모바일, 태블릿, 데스크톱 화면을 동시에 확인하며 반응형
                  디자인을 쉽게 확인할 수 있습니다.
                  <br />
                  스크롤이 동기화되어 같은 화면을 바라보고, 가로 세로 모드로
                  확인 가능합니다.
                </p>
              </div>
              <div className="box-video">
                <video autoPlay loop playsInline muted>
                  <source src="/multi-view.mp4" type="video/mp4" />
                </video>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Intro;
