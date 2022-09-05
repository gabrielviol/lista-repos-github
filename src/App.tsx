import { Header } from "./Header";
import { Main } from "./Main";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main/>
    </div>
  )
}
