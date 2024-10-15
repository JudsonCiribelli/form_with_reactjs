const App = () => {
  return (
    <div className="App">
      <header>
        <h1>JC form</h1>
      </header>

      <form className="form">
        <div>
          <label>Nome: </label>
          <input type="name" />
        </div>

        <div>
          <label>Email: </label>
          <input type="email" />
        </div>

        <div>
          <label>Aréa de atuação: </label>
          <input type="checkbox" value="FullStack" />
          <label>FullStack</label>
        </div>

        <div>
          <input type="checkbox" value="Front-End" />
          <label>Front-End</label>
        </div>

        <div>
          <input type="checkbox" value="Back-End" />
          <label>Back-End</label>
        </div>
      </form>
    </div>
  );
};
export default App;
