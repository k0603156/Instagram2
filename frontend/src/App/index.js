import React from 'react';
import 'styles/global.scss';
import style from './style.module.scss';


function App() {
  return (
    <div className='app'>
      <main className={style.main}>
        <section>
          <div className={style.loginForm}>
            <div className={style.logo}>
              <h1></h1>
            </div>
            <form>
              <input placeholder='전화번호, 사용자 이름 또는 이메일' />
              <input type='password' placeholder='비밀번호' />
              <button type='submit'>로그인</button>
            </form>
            <div className={style.divider}>
              <div></div>
              <div>또는</div>
              <div></div>
            </div>
            <button type='button'><span />페이스북로그인</button>
            <p><a href='#'>비밀번호를 잊으셨나요?</a></p>
          </div>
          <div></div>
          <div></div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;